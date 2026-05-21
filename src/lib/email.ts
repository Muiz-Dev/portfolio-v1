import { resend, EMAIL_FROM, EMAIL_TO_ADMIN } from "./resend";
import { ReviewNotificationEmail } from "@/emails/review-notification";
import { ReviewConfirmationEmail } from "@/emails/review-confirmation";
import { ContactNotificationEmail } from "@/emails/contact-notification";
import { ContactConfirmationEmail } from "@/emails/contact-confirmation";
import * as React from "react";

// ─── Review Emails ────────────────────────────────────────────────────────────

export async function sendReviewNotification(data: {
  clientName: string;
  business: string;
  role?: string | null;
  service: string;
  rating: number;
  feedback: string;
  clientEmail?: string | null;
}) {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO_ADMIN,
    subject: `⭐ New ${data.rating}-star review from ${data.clientName} — ${data.business}`,
    react: React.createElement(ReviewNotificationEmail, data),
  });

  if (error) {
    console.error("[email] Failed to send review notification:", error);
    throw error;
  }
}

export async function sendReviewConfirmation(data: {
  clientName: string;
  clientEmail: string;
  business: string;
  rating: number;
}) {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: data.clientEmail,
    replyTo: EMAIL_TO_ADMIN,
    subject: `Thank you for your feedback, ${data.clientName.split(" ")[0]}`,
    react: React.createElement(ReviewConfirmationEmail, data),
  });

  if (error) {
    console.error("[email] Failed to send review confirmation:", error);
    throw error;
  }
}

// ─── Contact Emails ───────────────────────────────────────────────────────────

export async function sendContactNotification(data: {
  senderName: string;
  email: string;
  phone?: string | null;
  service?: string | null;
  budget?: string | null;
  message: string;
}) {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO_ADMIN,
    replyTo: data.email,
    subject: `📩 New project request from ${data.senderName}${data.service ? ` — ${data.service}` : ""}`,
    react: React.createElement(ContactNotificationEmail, data),
  });

  if (error) {
    console.error("[email] Failed to send contact notification:", error);
    throw error;
  }
}

export async function sendContactConfirmation(data: {
  senderName: string;
  email: string;
  service?: string | null;
}) {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: data.email,
    replyTo: EMAIL_TO_ADMIN,
    subject: `We received your request, ${data.senderName.split(" ")[0]}`,
    react: React.createElement(ContactConfirmationEmail, data),
  });

  if (error) {
    console.error("[email] Failed to send contact confirmation:", error);
    throw error;
  }
}
