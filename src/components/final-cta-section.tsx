"use client";

import { ArrowUpRight01Icon, WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";

const signals = ["Website", "Business email", "Domain setup", "Launch support"];

export function FinalCtaSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <motion.div
        className="final-cta-inner"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.42 }}
        transition={{
          duration: shouldReduceMotion ? 0.12 : 0.52,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="final-cta-kicker">Ready when you are</p>
        <h2 id="final-cta-title">
          Send the project idea. We will help turn it into a clear next step.
        </h2>
        <p>
          Tell us what you need: a website, business email, domain setup,
          maintenance, or a custom web application. The first job is to
          understand the project properly.
        </p>

        <div className="final-cta-actions">
          <a className="final-cta-primary" href="/contact">
            <span>Start a Project</span>
            <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
          </a>
          <a className="final-cta-secondary" href="https://wa.me/">
            <HugeiconsIcon
              className="final-cta-whatsapp icon"
              icon={WhatsappIcon}
              size={17}
              strokeWidth={2}
            />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <ul className="final-cta-signals" aria-label="Project areas">
          {signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
