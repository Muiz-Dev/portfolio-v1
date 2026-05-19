"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight02Icon,
  BrowserIcon,
  Database01Icon,
  MailAtSign01Icon,
  SecurityCheckIcon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const supportItems = ["Updates", "Backups", "Content changes", "Launch checks"];

export function ServicesSnapshotSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
          duration: 0.72,
        },
      });

      timeline
        .from(".services-rule", { scaleX: 0, transformOrigin: "left" })
        .from(".service-block", { y: 26, opacity: 0, stagger: 0.08 }, "-=0.34")
        .from(".service-visual-piece", { y: 14, opacity: 0, stagger: 0.045 }, "-=0.42");
    },
    { scope: sectionRef, dependencies: [shouldReduceMotion] }
  );

  return (
    <section className="services-snapshot" ref={sectionRef} aria-labelledby="services-title">
      <div className="services-snapshot-head">
        <p className="services-kicker">What we set up</p>
        <h2 id="services-title">
          The public-facing systems your business needs to look ready.
        </h2>
        <p>
          We handle the pieces customers notice first: your website, email,
          domain, contact flow, and the support needed after launch.
        </p>
      </div>

      <div className="services-rule" aria-hidden="true" />

      <div className="services-layout">
        <motion.article className="service-block service-website" whileHover={{ y: -4 }}>
          <div className="service-block-copy">
            <HugeiconsIcon className="icon" icon={BrowserIcon} size={23} strokeWidth={2} />
            <p className="service-label">Core setup</p>
            <h3>Website Development</h3>
            <p>
              Responsive business websites with clear pages, mobile-friendly
              layouts, contact forms, WhatsApp links, and search-ready structure.
            </p>
          </div>
          <div className="service-browser-mockup" aria-hidden="true">
            <div className="service-visual-piece service-browser-bar">
              <span />
              <span />
              <span />
              <p>business-site</p>
            </div>
            <div className="service-visual-piece service-illustration-stage service-website-art">
              <Image
                src="/illustrations/services/building-a-website.svg"
                alt=""
                width={420}
                height={260}
                loading="lazy"
                aria-hidden="true"
              />
            </div>
            <div className="service-visual-piece service-phone-preview">
              <span />
              <span />
              <span />
            </div>
          </div>
        </motion.article>

        <motion.article className="service-block service-email" whileHover={{ y: -4 }}>
          <HugeiconsIcon className="icon" icon={MailAtSign01Icon} size={22} strokeWidth={2} />
          <p className="service-label">Communication</p>
          <h3>Business Email Setup</h3>
          <p>
            Branded emails like <span className="service-mono">info@yourbusiness.com</span>,
            with MX records, forwarding, webmail, and clear usage guidance.
          </p>
          <div className="service-illustration-stage service-card-art" aria-hidden="true">
            <Image
              className="service-visual-piece"
              src="/illustrations/services/emails.svg"
              alt=""
              width={300}
              height={190}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div className="service-email-card" aria-hidden="true">
            <div className="service-visual-piece">
              <span>From</span>
              <strong>info@yourbusiness.com</strong>
            </div>
            <div className="service-visual-piece">
              <span>Subject</span>
              <strong>New customer inquiry</strong>
            </div>
          </div>
        </motion.article>

        <motion.article className="service-block service-domain" whileHover={{ y: -4 }}>
          <HugeiconsIcon className="icon" icon={SecurityCheckIcon} size={22} strokeWidth={2} />
          <p className="service-label">Launch setup</p>
          <h3>Domain & Hosting</h3>
          <p>
            Domain connection, DNS configuration, SSL, hosting setup, redirects,
            and launch checks handled properly.
          </p>
          <div className="service-illustration-stage service-card-art" aria-hidden="true">
            <Image
              className="service-visual-piece"
              src="/illustrations/services/setup-wizard.svg"
              alt=""
              width={300}
              height={190}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <div className="service-checklist" aria-hidden="true">
            {["DNS connected", "SSL active", "Email records set"].map((item) => (
              <div className="service-visual-piece" key={item}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article className="service-block service-support" whileHover={{ y: -4 }}>
          <div>
            <HugeiconsIcon className="icon" icon={Settings02Icon} size={22} strokeWidth={2} />
            <p className="service-label">After launch</p>
            <h3>Maintenance & Launch Support</h3>
            <p>
              Updates, fixes, backups, content changes, and checks that keep the
              website useful after it goes live.
            </p>
          </div>
          <div className="service-illustration-stage service-support-art" aria-hidden="true">
            <Image
              className="service-visual-piece"
              src="/illustrations/services/code-deployed.svg"
              alt=""
              width={300}
              height={190}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <ul>
            {supportItems.map((item) => (
              <li className="service-visual-piece" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article className="service-block service-apps" whileHover={{ y: -4 }}>
          <HugeiconsIcon className="icon" icon={Database01Icon} size={22} strokeWidth={2} />
          <p className="service-label">Advanced option</p>
          <h3>Custom Web Applications</h3>
          <p>
            Dashboards, portals, booking systems, internal tools, and workflows
            when a normal website is not enough.
          </p>
          <div className="service-illustration-stage service-card-art" aria-hidden="true">
            <Image
              className="service-visual-piece"
              src="/illustrations/services/mobile-app-data.svg"
              alt=""
              width={300}
              height={190}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
          <a href="/services">
            <span>View services</span>
            <HugeiconsIcon className="icon" icon={ArrowRight02Icon} size={17} strokeWidth={2} />
          </a>
        </motion.article>
      </div>
    </section>
  );
}
