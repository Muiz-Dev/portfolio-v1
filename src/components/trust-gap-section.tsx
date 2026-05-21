"use client";

import {
  CheckmarkCircle02Icon,
  CircleIcon,
  MailAtSign01Icon,
  SecurityCheckIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";

const beforeItems = [
  "No website link to send customers to",
  "Personal email address in business communication",
  "Contact details scattered across chats and profiles",
  "Services explained differently every time",
  "Domain, hosting, SSL, and email setup left hanging",
];

const afterItems = [
  "A clear website link customers can trust",
  "Branded email such as info@yourbusiness.com",
  "WhatsApp and form inquiries pointing to the right place",
  "Service pages that explain what you offer",
  "Domain, hosting, SSL, and launch support handled",
];

export function TrustGapSection() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
  const transition = {
    duration: shouldReduceMotion ? 0.12 : 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="trust-gap" aria-labelledby="trust-gap-title">
      <motion.div
        className="trust-gap-copy"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.42 }}
      >
        <motion.p className="trust-gap-kicker" variants={reveal} transition={transition}>
          The trust gap
        </motion.p>
        <h2 id="trust-gap-title">
          {"Serious businesses lose trust when their online presence feels unfinished.".split(" ").map((word, i) => (
            <span
              key={i}
              style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
            >
              <motion.span
                style={{ display: "inline-block" }}
                variants={shouldReduceMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : { hidden: { y: "100%", opacity: 0 }, show: { y: "0%", opacity: 1 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : 0.08 + i * 0.03 }}
              >
                {word}
              </motion.span>
            </span>
          )).reduce((prev, curr) => [prev, " ", curr] as any)}
        </h2>
        <motion.p
          className="trust-gap-text"
          variants={reveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.16 }}
        >
          A business can deliver good work and still lose customers because the
          website is missing, the email looks personal, or the next step is
          unclear. We clean up the digital parts customers see before they call,
          message, or visit.
        </motion.p>
      </motion.div>

      <div className="trust-gap-stack">
        <motion.div
          className="trust-gap-panel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.32 }}
          variants={reveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.1 }}
        >
          <div className="trust-gap-column trust-gap-before">
            <p className="trust-gap-panel-label">Before</p>
            <ul>
              {beforeItems.map((item, index) => (
                <motion.li
                  key={item}
                  variants={reveal}
                  transition={{
                    ...transition,
                    delay: shouldReduceMotion ? 0 : 0.18 + index * 0.035,
                  }}
                >
                  <HugeiconsIcon className="icon" icon={CircleIcon} size={16} strokeWidth={2} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="trust-gap-divider" aria-hidden="true" />

          <div className="trust-gap-column trust-gap-after">
            <p className="trust-gap-panel-label">After</p>
            <ul>
              {afterItems.map((item, index) => (
                <motion.li
                  key={item}
                  variants={reveal}
                  transition={{
                    ...transition,
                    delay: shouldReduceMotion ? 0 : 0.26 + index * 0.035,
                  }}
                >
                  <HugeiconsIcon
                    className="icon trust-gap-check"
                    icon={CheckmarkCircle02Icon}
                    size={18}
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="trust-gap-proof"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.55 }}
          variants={reveal}
          transition={transition}
        >
          <div>
            <HugeiconsIcon className="icon" icon={MailAtSign01Icon} size={20} strokeWidth={2} />
            <span>Website</span>
          </div>
          <div>
            <HugeiconsIcon className="icon" icon={SecurityCheckIcon} size={20} strokeWidth={2} />
            <span>Email, domain, SSL</span>
          </div>
          <div>
            <HugeiconsIcon
              className="icon trust-gap-whatsapp"
              icon={WhatsappIcon}
              size={20}
              strokeWidth={2}
            />
            <span>Contact flow</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
