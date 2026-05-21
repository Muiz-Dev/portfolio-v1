"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight01Icon,
  AtIcon,
  BrowserIcon,
  CheckmarkCircle02Icon,
  CloudServerIcon,
  ComputerProgramming01Icon,
  Search01Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { PageRevealMotion } from "@/components/page-reveal-motion";
import { motion, useReducedMotion } from "motion/react";

const serviceTabs = [
  "Website",
  "Business Email",
  "Domain & Hosting",
  "Maintenance",
  "Custom Apps",
  "SEO Setup",
];

const services = [
  {
    title: "Website Development",
    label: "Core setup",
    icon: BrowserIcon,
    text: "Clean, responsive websites for businesses, NGOs, schools, startups, real estate brands, and service providers.",
    includes: ["Pages planned around the offer", "Contact form and WhatsApp link", "Mobile-friendly layout", "Basic SEO structure"],
    bestFor: "Businesses that need a professional link customers can trust.",
    featured: true,
  },
  {
    title: "Business Email Setup",
    label: "Communication",
    icon: AtIcon,
    text: "Branded emails like info@yourbusiness.com with DNS records, webmail access, forwarding, and setup guidance.",
    includes: ["Email account setup", "MX/DNS configuration", "Forwarding where needed"],
    bestFor: "Businesses still using personal Gmail or Yahoo for official communication.",
  },
  {
    title: "Domain & Hosting",
    label: "Launch setup",
    icon: CloudServerIcon,
    text: "Domain connection, hosting configuration, SSL, redirects, and launch checks handled clearly.",
    includes: ["Domain guidance", "Hosting setup", "SSL and DNS checks"],
    bestFor: "Clients who want the technical setup handled properly.",
  },
  {
    title: "Website Maintenance",
    label: "After launch",
    icon: Wrench01Icon,
    text: "Updates, fixes, backups, content changes, checks, and small improvements after the website goes live.",
    includes: ["Content updates", "Fixes and checks", "Backup support"],
    bestFor: "Businesses that want the website to stay useful after launch.",
  },
  {
    title: "Custom Web Applications",
    label: "Advanced systems",
    icon: ComputerProgramming01Icon,
    text: "Dashboards, portals, booking systems, admin panels, internal tools, and custom workflows.",
    includes: ["Custom forms", "Dashboards or portals", "Business workflows"],
    bestFor: "Businesses that need more than a normal website.",
  },
  {
    title: "SEO Setup",
    label: "Search foundation",
    icon: Search01Icon,
    text: "Search-friendly titles, descriptions, page structure, image alt text, sitemap setup, and Search Console guidance.",
    includes: ["Metadata", "Heading structure", "Sitemap/Search Console basics"],
    bestFor: "Businesses that want a better foundation for Google visibility.",
  },
];

const includedItems = [
  "Page planning",
  "Responsive layout",
  "Contact flow",
  "Business email guidance",
  "Domain and SSL setup",
  "Basic SEO structure",
  "Launch checks",
  "Post-launch support",
];

const process = [
  ["01", "Understand", "We clarify the business, audience, service, current setup, and what the visitor must do next."],
  ["02", "Plan", "We decide the pages, contact flow, assets, content needs, and technical setup before design starts."],
  ["03", "Build", "We design and develop the website or system with clear structure, spacing, and mobile behavior."],
  ["04", "Connect", "We connect domain, email, forms, analytics basics, redirects, and any needed launch details."],
  ["05", "Launch", "We check the live version, fix final issues, and leave you with a clearer online presence."],
];

export function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();
  const headingText = "Digital setup for businesses that want to look professional online.";
  const words = headingText.split(" ");

  return (
    <main className="services-page">
      <PageRevealMotion />
      <section className="services-page-hero" aria-labelledby="services-page-title">
        <div data-page-reveal="left">
          <p className="services-page-kicker">Services</p>
          <h1 id="services-page-title">
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
        <div className="services-page-hero-aside" data-page-reveal="right">
          <p>
            Websites, business emails, domains, hosting, maintenance, and custom tools,
            handled clearly from planning to launch.
          </p>
          <div className="services-page-actions">
            <Link href="/contact#project-request">
              <span>Request a quote</span>
              <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
            </Link>
            <Link href="/projects">View projects</Link>
          </div>
        </div>
      </section>

      <nav className="services-page-strip" aria-label="Service areas" data-page-reveal="clip">
        {serviceTabs.map((tab) => (
          <span key={tab}>{tab}</span>
        ))}
      </nav>

      <section className="services-page-main" aria-labelledby="services-list-title">
        <div className="services-page-section-head" data-page-reveal="left">
          <p className="services-page-kicker">What we handle</p>
          <h2 id="services-list-title">Pick the part you need, or let us help you identify it.</h2>
        </div>

        <div className="services-page-grid">
          {services.map((service, index) => (
            <article
              className={service.featured ? "services-page-card services-page-card-featured" : "services-page-card"}
              key={service.title}
              data-page-reveal={index === 0 ? "clip" : index % 3 === 1 ? "up" : index % 3 === 2 ? "right" : "left"}
            >
              <div className="services-page-card-top">
                <p>{service.label}</p>
                <HugeiconsIcon className="icon" icon={service.icon} size={24} strokeWidth={1.8} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="services-page-card-body">
                <div>
                  <span>Can include</span>
                  <ul>
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>Best for</span>
                  <p>{service.bestFor}</p>
                </div>
              </div>
              <Link href="/contact#project-request">
                <span>Ask about this</span>
                <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={15} strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="services-included" aria-labelledby="services-included-title">
        <div data-page-reveal="left">
          <p className="services-page-kicker">What you get</p>
          <h2 id="services-included-title">A setup that covers the visible parts and the technical pieces behind them.</h2>
          <p>
            The goal is simple: customers should understand you faster, contact you easily,
            and see a business that looks ready.
          </p>
        </div>
        <div className="services-included-panel" data-page-reveal="right">
          {includedItems.map((item) => (
            <div key={item}>
              <HugeiconsIcon className="icon" icon={CheckmarkCircle02Icon} size={17} strokeWidth={2} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="services-process" aria-labelledby="services-process-title">
        <div className="services-page-section-head" data-page-reveal="left">
          <p className="services-page-kicker">How it works</p>
          <h2 id="services-process-title">The work stays clear from first message to launch.</h2>
        </div>
        <div className="services-process-list">
          {process.map(([number, title, text]) => (
            <article key={number} data-page-reveal="up">
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-not-sure" aria-labelledby="services-not-sure-title">
        <div data-page-reveal="left">
          <p className="services-page-kicker">Not sure yet?</p>
          <h2 id="services-not-sure-title">You do not need to know the exact technical service before reaching out.</h2>
          <p>
            If you only know the business needs to look more professional online,
            that is enough. Send the situation and we will recommend the right setup.
          </p>
          <Link href="/contact#project-request">
            <span>Tell us the situation</span>
            <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
          </Link>
        </div>
        <div className="services-not-sure-visual" aria-hidden="true" data-page-reveal="right">
          <Image
            src="/illustrations/services/setup-wizard.svg"
            alt=""
            width={420}
            height={280}
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
