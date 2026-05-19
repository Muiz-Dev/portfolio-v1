"use client";

import { useState } from "react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SiteLogo } from "@/components/site-logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header" aria-label="Site header">
      <SiteLogo />
      <nav className="site-nav" aria-label="Primary navigation">
        <ul className="site-nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="site-nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a className="site-nav-quote" href="/contact">
                <span className="site-nav-quote-text">
                  <span>Get a Quote</span>
                  <span aria-hidden="true">Get a Quote</span>
                </span>
                <HugeiconsIcon
                  className="site-nav-quote-icon icon"
                  icon={ArrowUpRight01Icon}
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="site-nav-quote-corner top-left" aria-hidden="true" />
              <span className="site-nav-quote-corner top-right" aria-hidden="true" />
              <span className="site-nav-quote-corner bottom-left" aria-hidden="true" />
              <span className="site-nav-quote-corner bottom-right" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
      <motion.button
        className="site-menu-button"
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="site-menu-panel"
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        whileTap={shouldReduceMotion ? undefined : { y: 1 }}
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        <span className="site-menu-button-sweep" aria-hidden="true" />
        <motion.span
          className="site-menu-button-line"
          aria-hidden="true"
          animate={
            isMenuOpen
              ? { y: 6, rotate: 45, width: 20 }
              : { y: 0, rotate: 0, width: 18 }
          }
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="site-menu-button-line"
          aria-hidden="true"
          animate={
            isMenuOpen
              ? { opacity: 0, x: -10, width: 6 }
              : { opacity: 1, x: 0, width: 18 }
          }
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="site-menu-button-line"
          aria-hidden="true"
          animate={
            isMenuOpen
              ? { y: -6, rotate: -45, width: 20 }
              : { y: 0, rotate: 0, width: 18 }
          }
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.button>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              className="site-menu-scrim"
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              id="site-menu-panel"
              className="site-menu-panel"
              aria-label="Navigation menu"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 34 }}
              transition={{
                duration: shouldReduceMotion ? 0.12 : 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="site-menu-label">Navigation</p>
              <nav aria-label="Menu navigation">
                <ul className="site-menu-list">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      className="site-menu-item"
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : index * 0.03,
                        duration: shouldReduceMotion ? 0.1 : 0.24,
                      }}
                    >
                      <a className="site-menu-link" href={item.href} onClick={() => setIsMenuOpen(false)}>
                        <span className="site-menu-link-text">{item.label}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <a className="site-menu-quote" href="/contact" onClick={() => setIsMenuOpen(false)}>
                <span>Get a Quote</span>
                <HugeiconsIcon
                  className="site-menu-quote-icon icon"
                  icon={ArrowUpRight01Icon}
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
