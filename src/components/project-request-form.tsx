"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = `Project request from ${data.get("fullName") || "website visitor"}`;
    const body = [
      `Full name: ${data.get("fullName") || ""}`,
      `Business / organization: ${data.get("organization") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `WhatsApp / phone: ${data.get("phone") || ""}`,
      `Service needed: ${data.get("service") || ""}`,
      `Budget range: ${data.get("budget") || ""}`,
      `Timeline: ${data.get("timeline") || ""}`,
      `Existing link: ${data.get("existingLink") || ""}`,
      "",
      "Message:",
      `${data.get("message") || ""}`,
    ].join("\n");

    window.location.href = `mailto:info@muizdev.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the project details filled in.");
  };

  return (
    <form className="project-request-form" id="project-request" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="fullName">
          Full name <span>Required</span>
        </label>
        <input id="fullName" name="fullName" type="text" autoComplete="name" required />
      </div>

      <div className="form-field">
        <label htmlFor="organization">
          Business / organization <span>Required</span>
        </label>
        <input id="organization" name="organization" type="text" autoComplete="organization" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">
          Email <span>Required</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="phone">
          WhatsApp / phone <span>Optional</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="form-field">
        <label htmlFor="service">
          Service needed <span>Required</span>
        </label>
        <select id="service" name="service" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="budget">
          Budget range <span>Optional</span>
        </label>
        <select id="budget" name="budget" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {budgetOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="timeline">
          Timeline <span>Optional</span>
        </label>
        <select id="timeline" name="timeline" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {timelineOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="existingLink">
          Existing website or social link <span>Optional</span>
        </label>
        <input id="existingLink" name="existingLink" type="url" inputMode="url" />
      </div>

      <div className="form-field form-field-wide">
        <label htmlFor="message">
          What do you need? <span>Required</span>
        </label>
        <textarea id="message" name="message" rows={6} required />
      </div>

      <button className="project-request-submit" type="submit">
        <span>Send project request</span>
        <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
      </button>

      <p className="project-request-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
