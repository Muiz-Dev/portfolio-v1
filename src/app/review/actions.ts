"use server";

import { pool } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendReviewNotification, sendReviewConfirmation } from "@/lib/email";
import { headers } from "next/headers";

export async function submitReview(formData: FormData) {
  // ── Rate limiting ──────────────────────────────────────────────────
  // Identify the caller by IP. In production (Vercel) the real IP is in
  // x-forwarded-for; locally it will be undefined so we fallback.
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "anonymous";

  const rl = checkRateLimit(`review:${ip}`, { limit: 3, windowSeconds: 3600 });
  if (!rl.allowed) {
    return {
      success: false,
      error: "Too many submissions. Please wait before trying again.",
    };
  }

  // ── Validation ────────────────────────────────────────────────────
  const clientName = formData.get("fullName")?.toString()?.trim();
  const business = formData.get("organization")?.toString()?.trim();
  const role = formData.get("role")?.toString()?.trim() || null;
  const service = formData.get("service")?.toString()?.trim();
  const ratingStr = formData.get("rating")?.toString();
  const feedback = formData.get("feedback")?.toString()?.trim();
  const clientEmail = formData.get("email")?.toString()?.trim() || null;
  const permission = formData.get("permission") === "on";

  if (!clientName || !business || !service || !ratingStr || !feedback || !permission) {
    return {
      success: false,
      error: "Please fill out all required fields and check the permission box.",
    };
  }

  const rating = parseInt(ratingStr, 10);
  if (isNaN(rating) || rating < 1 || rating > 5) {
    return { success: false, error: "Invalid rating." };
  }

  if (feedback.length < 20) {
    return {
      success: false,
      error: "Please provide a bit more feedback (at least 20 characters).",
    };
  }

  // ── Database insert ───────────────────────────────────────────────
  let reviewId: number;
  try {
    const query = `
      INSERT INTO reviews (client_name, business, role, service, rating, feedback, permission, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')
      RETURNING id
    `;
    const values = [clientName, business, role, service, rating, feedback, permission];
    const result = await pool.query(query, values);
    reviewId = result.rows[0].id;
  } catch (error) {
    console.error("[review] DB insert failed:", error);
    return {
      success: false,
      error: "Failed to save your review. Please try again.",
    };
  }

  // ── Emails (soft-fail — review is already saved) ──────────────────
  // 1. Notify admin
  try {
    await sendReviewNotification({
      clientName,
      business,
      role,
      service,
      rating,
      feedback,
      clientEmail,
    });
  } catch (err) {
    console.error("[review] Admin notification failed:", err);
  }

  // 2. Confirm to client (only if they provided their email)
  if (clientEmail) {
    try {
      await sendReviewConfirmation({
        clientName,
        clientEmail,
        business,
        rating,
      });
    } catch (err) {
      console.error("[review] Client confirmation failed:", err);
    }
  }

  return { success: true };
}
