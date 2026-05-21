"use server";

import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function approveReview(id: number) {
  try {
    await pool.query("UPDATE reviews SET status = 'approved' WHERE id = $1", [id]);
    revalidatePath("/admin/reviews");
    revalidatePath("/testimonials");
    return { success: true };
  } catch (err) {
    console.error("Failed to approve review:", err);
    return { success: false };
  }
}

export async function rejectReview(id: number) {
  try {
    await pool.query("UPDATE reviews SET status = 'rejected' WHERE id = $1", [id]);
    revalidatePath("/admin/reviews");
    revalidatePath("/testimonials");
    return { success: true };
  } catch (err) {
    console.error("Failed to reject review:", err);
    return { success: false };
  }
}

export async function deleteReview(id: number) {
  try {
    await pool.query("DELETE FROM reviews WHERE id = $1", [id]);
    revalidatePath("/admin/reviews");
    revalidatePath("/testimonials");
    return { success: true };
  } catch (err) {
    console.error("Failed to delete review:", err);
    return { success: false };
  }
}

export async function toggleFeatured(id: number, currentStatus: boolean) {
  try {
    await pool.query("UPDATE reviews SET featured = $1 WHERE id = $2", [!currentStatus, id]);
    revalidatePath("/admin/reviews");
    revalidatePath("/testimonials");
    return { success: true };
  } catch (err) {
    console.error("Failed to toggle featured:", err);
    return { success: false };
  }
}
