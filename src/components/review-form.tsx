"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight01Icon, CheckmarkBadge01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { submitReview } from "@/app/review/actions";
import Link from "next/link";

const serviceOptions = [
  "Website Development",
  "Business Email Setup",
  "Domain & Hosting",
  "Website Maintenance",
  "Custom Web Application",
  "Not sure yet",
];

export function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rating === 0) {
      setErrorMessage("Please select a rating.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("rating", rating.toString());

    try {
      const result = await submitReview(formData);
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "An error occurred.");
      }
    } catch (e) {
      setStatus("error");
      setErrorMessage("A network error occurred. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="review-success">
        <HugeiconsIcon icon={CheckmarkBadge01Icon} size={48} strokeWidth={1.5} className="success-icon" />
        <h2>Thank you for your feedback.</h2>
        <p>
          Your review has been received and will appear on our website after a brief review. We never edit your words.
        </p>
        <Link href="/" className="review-success-home">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form className="project-request-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="fullName">
          Full name <span>Required</span>
        </label>
        <input id="fullName" name="fullName" type="text" autoComplete="name" required disabled={status === "submitting"} />
      </div>

      <div className="form-field">
        <label htmlFor="organization">
          Business / organization <span>Required</span>
        </label>
        <input id="organization" name="organization" type="text" autoComplete="organization" required disabled={status === "submitting"} />
      </div>

      <div className="form-field">
        <label htmlFor="role">
          Your role <span>Optional</span>
        </label>
        <input id="role" name="role" type="text" placeholder="e.g. Director, Founder" disabled={status === "submitting"} />
      </div>

      <div className="form-field">
        <label htmlFor="email">
          Your email <span>Optional</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" disabled={status === "submitting"} placeholder="you@example.com" />
      </div>

      <div className="form-field">
        <label htmlFor="service">
          Service received <span>Required</span>
        </label>
        <select id="service" name="service" required defaultValue="" disabled={status === "submitting"}>
          <option value="" disabled>Select one</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field form-field-wide">
        <label>
          Your experience <span>Required</span>
        </label>
        <div className="rating-input">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`star-btn ${(hoverRating || rating) >= star ? "active" : ""}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              disabled={status === "submitting"}
              aria-label={`Rate ${star} stars out of 5`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="feedback">
          Your feedback <span>Required</span>
        </label>
        <textarea id="feedback" name="feedback" rows={5} minLength={20} required disabled={status === "submitting"} placeholder="Tell us about your experience..." />
      </div>

      <div className="form-field form-field-wide checkbox-field">
        <label className="checkbox-label">
          <input type="checkbox" name="permission" required disabled={status === "submitting"} />
          <span>I give Muiz Dev Solutions permission to display my name, business, and feedback on their website.</span>
        </label>
      </div>

      {status === "error" && (
        <p className="project-request-status error" aria-live="polite">
          {errorMessage}
        </p>
      )}

      <button className="project-request-submit" type="submit" disabled={status === "submitting"}>
        <span>{status === "submitting" ? "Submitting..." : "Submit Review"}</span>
        {!status && <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />}
      </button>
    </form>
  );
}
