"use client";

import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    title: "We understand the business",
    detail:
      "We look at what you offer, who you serve, what customers usually ask, and what the website needs to make clear.",
    output: "Project direction",
  },
  {
    title: "We plan the pages",
    detail:
      "We map the pages, content, contact routes, and technical setup before design starts.",
    output: "Pages and setup list",
  },
  {
    title: "We design the first look",
    detail:
      "You see the visual direction early, so the project does not drift into something that feels wrong for the business.",
    output: "First visual draft",
  },
  {
    title: "We build and connect",
    detail:
      "The website is built, tested on screen sizes, connected to email, forms, WhatsApp, domain, hosting, and SSL where needed.",
    output: "Working website",
  },
  {
    title: "We launch and support",
    detail:
      "After launch, we check contact flow, fix important issues, and help with small changes or maintenance.",
    output: "Live and supported",
  },
];

const clientNeeds = ["Logo or brand name", "Service details", "Contact information", "Images if available"];

export function ProjectProcessSection() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
  const transition = {
    duration: shouldReduceMotion ? 0.12 : 0.48,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="project-process" aria-labelledby="project-process-title">
      <div className="project-process-head">
        <p className="project-process-kicker">How the project moves</p>
        <h2 id="project-process-title">A simple path from first message to launch.</h2>
        <p>
          The process is built to avoid confusion. You know what we are working
          on, what is needed from you, and what the next useful step is.
        </p>
      </div>

      <div className="project-process-layout">
        <motion.div
          className="process-timeline"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.article
              className="process-step"
              key={step.title}
              variants={reveal}
              transition={{
                ...transition,
                delay: shouldReduceMotion ? 0 : index * 0.06,
              }}
            >
              <p className="process-step-number">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
              <p className="process-output">{step.output}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.aside
          className="process-note"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.45 }}
          variants={reveal}
          transition={transition}
        >
          <p className="process-note-label">What you need to bring</p>
          <ul>
            {clientNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            If your content is not ready yet, we can still help shape the page
            structure and tell you exactly what is missing.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
