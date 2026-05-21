"use client";

import Link from "next/link";
import {
  ArrowUpRight01Icon,
  Location01Icon,
  Mail01Icon,
  TaskDone01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { PageRevealMotion } from "@/components/page-reveal-motion";
import { ProjectRequestForm } from "@/components/project-request-form";
import { motion, useReducedMotion } from "motion/react";

const nextSteps = [
  "We review the request",
  "We ask any needed questions",
  "We recommend the right setup",
  "You get a clear next step",
];

export function ContactPage() {
  const shouldReduceMotion = useReducedMotion();
  const headingText = "Tell us what you need built or fixed.";
  const words = headingText.split(" ");

  return (
    <main className="contact-page">
      <PageRevealMotion />
      <section className="contact-page-hero" aria-labelledby="contact-page-title">
        <div data-page-reveal="left">
          <p className="contact-page-kicker">Start the conversation</p>
          <h1 id="contact-page-title">
            {words.map((word, i) => (
              <span
                key={i}
                style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
              >
                <motion.span
                  style={{ display: "inline-block" }}
                  initial="hidden"
                  animate="show"
                  variants={shouldReduceMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : { hidden: { y: "100%", opacity: 0 }, show: { y: "0%", opacity: 1 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: shouldReduceMotion ? 0 : 0.1 + i * 0.04 }}
                >
                  {word}
                </motion.span>
              </span>
            )).reduce((prev, curr) => [prev, " ", curr] as any)}
          </h1>
        </div>
        <p data-page-reveal="right">
          Website, business email, domain setup, maintenance, or a custom app.
          Send the details and we will help define the next step.
        </p>
      </section>

      <section className="contact-page-layout" aria-label="Project request and contact details">
        <aside className="contact-page-aside">
          <div className="contact-card" data-page-reveal="left">
            <p className="contact-page-label">Direct contact</p>
            <a href="mailto:info@muizdev.xyz">
              <HugeiconsIcon className="icon" icon={Mail01Icon} size={18} strokeWidth={2} />
              <span>info@muizdev.xyz</span>
            </a>
            <span>
              <HugeiconsIcon className="icon" icon={Location01Icon} size={18} strokeWidth={2} />
              Lagos, Nigeria
            </span>
          </div>

          <div className="contact-card contact-card-dark" data-page-reveal="left">
            <p className="contact-page-label">What happens next</p>
            <ul>
              {nextSteps.map((step) => (
                <li key={step}>
                  <HugeiconsIcon className="icon" icon={TaskDone01Icon} size={17} strokeWidth={2} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link className="contact-services-link" href="/services" data-page-reveal="left">
            <span>Check services first</span>
            <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={16} strokeWidth={2} />
          </Link>
        </aside>

        <section className="contact-form-panel" aria-labelledby="project-request-title" data-page-reveal="right">
          <div className="contact-form-head">
            <p className="contact-page-label" id="project-request-title">Project request</p>
          </div>
          <ProjectRequestForm />
        </section>
      </section>
    </main>
  );
}
