"use server";

import { checkRateLimit } from "@/lib/rate-limit";
import { sendContactNotification, sendContactConfirmation } from "@/lib/email";
import { headers } from "next/headers";

export async function submitContactForm(formData: FormData) {
  // ── Rate limiting ─────────────────────────────────────────────────
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "anonymous";

  const rl = checkRateLimit(`contact:${ip}`, { limit: 3, windowSeconds: 3600 });
  if (!rl.allowed) {
    return {
      success: false,
      error: "Too many submissions. Please wait before trying again.",
    };
  }

  // ── Validation ────────────────────────────────────────────────────
  const senderName = formData.get("fullName")?.toString()?.trim();
  const email = formData.get("email")?.toString()?.trim();
  const phone = formData.get("phone")?.toString()?.trim() || null;
  const service = formData.get("service")?.toString()?.trim() || null;
  const budget = formData.get("budget")?.toString()?.trim() || null;
  const message = formData.get("message")?.toString()?.trim();

  if (!senderName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (message.length < 10) {
    return { success: false, error: "Please describe your project a bit more." };
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // ── Emails ────────────────────────────────────────────────────────
  try {
    await sendContactNotification({ senderName, email, phone, service, budget, message });
  } catch (err) {
    console.error("[contact] Admin notification failed:", err);
    return { success: false, error: "Failed to send your message. Please try again." };
  }

  // Confirmation to client — soft fail
  try {
    await sendContactConfirmation({ senderName, email, service });
  } catch (err) {
    console.error("[contact] Client confirmation failed:", err);
  }

  return { success: true };
}
