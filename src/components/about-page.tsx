"use client";

import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { PageRevealMotion } from "@/components/page-reveal-motion";
import { motion, useReducedMotion } from "motion/react";

const principles = [
  {
    title: "Business first",
    text: "The website, email, or app has to make the business easier to understand and contact.",
  },
  {
    title: "Clear setup",
    text: "Domain, hosting, forms, email records, and launch details are treated as part of the work.",
  },
  {
    title: "Readable execution",
    text: "No confusing technical drama. The process stays direct, documented, and practical.",
  },
];

const workTypes = [
  "Business websites",
  "Branded emails",
  "Domain and hosting setup",
  "Dashboards and portals",
  "Marketplaces and CMS tools",
  "Maintenance and launch support",
];

export function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const headingText = "A practical digital studio for businesses that need to look serious online.";
  const words = headingText.split(" ");

  return (
    <main className="about-page">
      <PageRevealMotion />
      <section className="about-hero" aria-labelledby="about-page-title">
        <div data-page-reveal="left">
          <p className="about-kicker">About</p>
          <h1 id="about-page-title">
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
          Muiz Dev Solutions helps businesses, NGOs, schools, startups, and service
          providers build websites, branded emails, and digital systems that improve
          trust and customer communication.
        </p>
      </section>

      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-story-main" data-page-reveal="left">
          <p className="about-kicker">The idea</p>
          <h2 id="about-story-title">Most clients do not only need “a website”. They need the full online setup to make sense.</h2>
          <p>
            A good digital presence connects the public parts customers see with the
            technical pieces behind them: domain, hosting, email, forms, WhatsApp,
            SEO basics, and support after launch.
          </p>
        </div>

        <aside className="about-operator-card" data-page-reveal="right">
          <p>Led by</p>
          <h3>Muiz Adesope</h3>
          <span>
            Product-focused full-stack developer working across customer-facing
            web apps, internal tools, dashboards, marketplaces, and CMS systems.
          </span>
          <a className="about-portfolio-link" href="https://www.muizdev.xyz" target="_blank" rel="noreferrer">
            <span>View personal portfolio</span>
            <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={16} strokeWidth={2} />
          </a>
        </aside>
      </section>

      <section className="about-principles" aria-labelledby="about-principles-title">
        <div className="about-section-head" data-page-reveal="left">
          <p className="about-kicker">How we think</p>
          <h2 id="about-principles-title">The work is judged by clarity, trust, and usefulness.</h2>
        </div>
        <div className="about-principles-grid">
          {principles.map((principle, index) => (
            <article key={principle.title} data-page-reveal={index === 0 ? "left" : index === 1 ? "up" : "right"}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-work-types" aria-labelledby="about-work-types-title">
        <div data-page-reveal="left">
          <p className="about-kicker">What this covers</p>
          <h2 id="about-work-types-title">From the public page to the tools behind the business.</h2>
        </div>
        <ul data-page-reveal="right">
          {workTypes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div data-page-reveal="left">
          <p className="about-kicker">Next step</p>
          <h2 id="about-cta-title">If your online presence feels unfinished, start with the problem.</h2>
        </div>
        <Link href="/contact#project-request" data-page-reveal="right">
          <span>Start a project</span>
          <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
        </Link>
      </section>
    </main>
  );
}
