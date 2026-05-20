"use client";

import { motion, useReducedMotion } from "motion/react";

const principles = [
  {
    label: "Clear communication",
    text: "You know what is being built, what is needed from you, and what happens next.",
  },
  {
    label: "Business-first structure",
    text: "Pages are organized around what customers need to understand before they contact you.",
  },
  {
    label: "Full technical setup",
    text: "Domain, hosting, email, SSL, forms, and launch details are handled with care.",
  },
  {
    label: "Contact flow",
    text: "WhatsApp, forms, and email routes are planned so inquiries do not get lost.",
  },
  {
    label: "Post-launch support",
    text: "You have room for fixes, content changes, and guidance after the website goes live.",
  },
];

const receiptItems = [
  "Pages planned",
  "Content needed",
  "Domain connected",
  "Email configured",
  "Contact route tested",
  "Launch support included",
];

export function ProjectClaritySection() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
  const transition = {
    duration: shouldReduceMotion ? 0.12 : 0.48,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="project-clarity" aria-labelledby="project-clarity-title">
      <motion.div
        className="project-clarity-copy"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.42 }}
      >
        <motion.p className="project-clarity-kicker" variants={reveal} transition={transition}>
          Why work with us
        </motion.p>
        <motion.h2
          id="project-clarity-title"
          variants={reveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.08 }}
        >
          The project should feel clear before, during, and after launch.
        </motion.h2>
        <motion.p
          className="project-clarity-text"
          variants={reveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.16 }}
        >
          We do not just design pages and disappear. We help you understand what
          is being built, what you need to provide, how your website will be
          launched, and how customers will contact you when it goes live.
        </motion.p>

        <motion.div
          className="clarity-receipt"
          variants={reveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.24 }}
          aria-label="Project clarity checklist"
        >
          <div className="clarity-receipt-top">
            <p>Project clarity receipt</p>
            <span>Ready check</span>
          </div>
          <ul>
            {receiptItems.map((item, index) => (
              <motion.li
                key={item}
                variants={reveal}
                transition={{
                  ...transition,
                  delay: shouldReduceMotion ? 0 : 0.3 + index * 0.035,
                }}
              >
                <span aria-hidden="true" />
                <p>{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="clarity-principles"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {principles.map((principle, index) => (
          <motion.article
            className="clarity-principle"
            key={principle.label}
            variants={reveal}
            transition={{
              ...transition,
              delay: shouldReduceMotion ? 0 : index * 0.07,
            }}
          >
            <p className="clarity-principle-number">{String(index + 1).padStart(2, "0")}</p>
            <div>
              <h3>{principle.label}</h3>
              <p>{principle.text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
