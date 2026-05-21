"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { submitContactForm } from "@/app/contact/actions";

const serviceOptions = [
  "Website Development",
  "Business Email Setup",
  "Domain & Hosting",
  "Website Maintenance",
  "Custom Web Application",
  "Not sure yet",
];

const budgetOptions = [
  "Below NGN 100,000",
  "NGN 100,000 - NGN 250,000",
  "NGN 250,000 - NGN 500,000",
  "NGN 500,000+",
  "Not sure yet",
];

const timelineOptions = ["As soon as possible", "Within 2-4 weeks", "Within 1-2 months", "Flexible"];

export function ProjectRequestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("A network error occurred. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="project-request-success">
        <div className="success-check">✓</div>
        <h3>Message sent.</h3>
        <p>We&apos;ll get back to you within 24 hours. Check your inbox for a confirmation email.</p>
        <a href="https://wa.me/2348124604571" className="project-request-submit" style={{ display: "inline-flex", marginTop: 8 }}>
          <span>Or chat on WhatsApp</span>
          <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
        </a>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form className="project-request-form" id="project-request" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="fullName">
          Full name <span>Required</span>
        </label>
        <input id="fullName" name="fullName" type="text" autoComplete="name" required disabled={isSubmitting} />
      </div>

      <div className="form-field">
        <label htmlFor="organization">
          Business / organization <span>Required</span>
        </label>
        <input id="organization" name="organization" type="text" autoComplete="organization" required disabled={isSubmitting} />
      </div>

      <div className="form-field">
        <label htmlFor="email">
          Email <span>Required</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required disabled={isSubmitting} />
      </div>

      <div className="form-field">
        <label htmlFor="phone">
          WhatsApp / phone <span>Optional</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" disabled={isSubmitting} />
      </div>

      <div className="form-field">
        <label htmlFor="service">
          Service needed <span>Required</span>
        </label>
        <select id="service" name="service" required defaultValue="" disabled={isSubmitting}>
          <option value="" disabled>Select one</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="budget">
          Budget range <span>Optional</span>
        </label>
        <select id="budget" name="budget" defaultValue="" disabled={isSubmitting}>
          <option value="" disabled>Select one</option>
          {budgetOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="timeline">
          Timeline <span>Optional</span>
        </label>
        <select id="timeline" name="timeline" defaultValue="" disabled={isSubmitting}>
          <option value="" disabled>Select one</option>
          {timelineOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="existingLink">
          Existing website or social link <span>Optional</span>
        </label>
        <input id="existingLink" name="existingLink" type="url" inputMode="url" disabled={isSubmitting} />
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="message">
          What do you need? <span>Required</span>
        </label>
        <textarea id="message" name="message" rows={6} required disabled={isSubmitting} />
      </div>

      {status === "error" && (
        <p className="project-request-status error" aria-live="polite">
          {errorMessage}
        </p>
      )}

      <button className="project-request-submit" type="submit" disabled={isSubmitting}>
        <span>{isSubmitting ? "Sending..." : "Send project request"}</span>
        <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
      </button>
    </form>
  );
}
