"use client";

import {
  ArrowUpRight01Icon,
  GlobeIcon,
  MailAtSign01Icon,
  SecurityCheckIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const textReveal = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
  const visualReveal = shouldReduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };
  const transition = {
    duration: shouldReduceMotion ? 0.12 : 0.52,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const headingText = "Your business is serious. Your digital presence should prove it.";
  const words = headingText.split(" ");

  return (
    <motion.section
      className="home-hero"
      aria-labelledby="home-hero-title"
      initial="hidden"
      animate="show"
    >
      <div className="home-hero-copy">
        <motion.p
          className="home-hero-kicker"
          variants={textReveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.08 }}
        >
          Websites / email / digital systems
        </motion.p>
        
        <h1 id="home-hero-title" className="hero-title">
          {words.map((word, i) => (
            <span
              key={i}
              style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
            >
              <motion.span
                style={{ display: "inline-block" }}
                variants={shouldReduceMotion ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : { hidden: { y: "100%", opacity: 0 }, show: { y: "0%", opacity: 1 } }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: shouldReduceMotion ? 0 : 0.1 + i * 0.04 }}
              >
                {word}
              </motion.span>
            </span>
          )).reduce((prev, curr) => [prev, " ", curr] as any)}
        </h1>

        <motion.p
          className="home-hero-text"
          variants={textReveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.36 }}
        >
          We help business owners, NGOs, and service providers set up proper websites, custom emails, and secure digital foundations so they stop losing customers to a bad first impression.
        </motion.p>
        
        <motion.div
          className="home-hero-actions"
          variants={textReveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.46 }}
        >
          <a className="home-hero-primary" href="/contact">
            <span>Start a Project</span>
            <HugeiconsIcon
              className="home-hero-action-icon icon"
              icon={ArrowUpRight01Icon}
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
          <a className="home-hero-secondary" href="https://wa.me/2348124604571">
            <HugeiconsIcon
              className="home-hero-whatsapp-icon icon"
              icon={WhatsappIcon}
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
        
        <motion.p
          className="home-hero-trust"
          variants={textReveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.54 }}
        >
          Based in Lagos, Nigeria — working with clients globally.
        </motion.p>
      </div>

      <motion.div
        className="home-hero-system"
        aria-label="Digital setup preview"
        variants={visualReveal}
        transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.46 }}
      >
        <motion.div
          className="system-browser"
          variants={visualReveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.52 }}
        >
          <div className="system-browser-top">
            <span />
            <span />
            <span />
            <p>yourbusiness.com</p>
          </div>
          <div className="system-browser-body">
            <div>
              <p className="system-eyebrow">Business website</p>
              <h2>Clear services. Fast contact. Better trust.</h2>
            </div>
            <div className="system-page-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="system-card email-card"
          variants={visualReveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.64 }}
        >
          <HugeiconsIcon className="icon" icon={MailAtSign01Icon} size={19} strokeWidth={2} />
          <div>
            <p>Branded email</p>
            <strong>info@yourbusiness.com</strong>
          </div>
        </motion.div>

        <motion.div
          className="system-card whatsapp-card"
          variants={visualReveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.72 }}
        >
          <HugeiconsIcon
            className="home-hero-whatsapp-icon icon"
            icon={WhatsappIcon}
            size={19}
            strokeWidth={2}
          />
          <div>
            <p>New customer inquiry</p>
            <strong>Can I get a quote?</strong>
          </div>
        </motion.div>

        <motion.div
          className="system-status"
          variants={visualReveal}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.8 }}
        >
          <div>
            <HugeiconsIcon className="icon" icon={GlobeIcon} size={18} strokeWidth={2} />
            <span>Domain connected</span>
          </div>
          <div>
            <HugeiconsIcon className="icon" icon={SecurityCheckIcon} size={18} strokeWidth={2} />
            <span>SSL active</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
