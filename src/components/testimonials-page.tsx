"use client";

import { motion, useReducedMotion } from "motion/react";
import { ClientQuote } from "@/lib/site-config";
import { ArrowUpRight01Icon, WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function TestimonialsPageContent({
  quotes,
}: {
  quotes: ClientQuote[];
}) {
  const shouldReduceMotion = useReducedMotion();
  const headingText = "Don't just take our word for it.";
  const words = headingText.split(" ");
  
  const allQuotes = quotes;

  return (
    <>
      <section className="feedback-hero">
        <motion.p
          className="feedback-kicker"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          TESTIMONIALS
        </motion.p>
        <h1
          className="feedback-title"
          style={{ marginBottom: "24px" }}
        >
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
        <motion.p
          className="feedback-subtitle"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Read what businesses, organizations, and service providers have to say about working with Muiz Dev Solutions.
        </motion.p>
      </section>

      <section className="proof-wall-section">
        <div className="proof-masonry">
          {allQuotes.map((item, index) => {
            const delay = Math.min(index * 0.05, 0.3);

            return (
              <motion.div
                key={item.id}
                className="proof-card-wrapper"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay }}
              >
                <div className={`quote-card ${item.featured ? "featured" : ""}`}>
                  <div className="quote-header">
                    <div className="quote-client-info">
                      {item.image ? (
                        <img src={item.image} alt={item.client} className="quote-avatar" />
                      ) : (
                        <div className="quote-avatar-fallback">
                          {item.client.charAt(0)}
                        </div>
                      )}
                      <div className="quote-client-details">
                        <p className="quote-author">{item.client}</p>
                        <p className="quote-role">
                          {item.role ? `${item.role}, ` : ""}{item.business}
                        </p>
                      </div>
                    </div>
                    <div className="quote-stars">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill={i < item.rating ? "#F59E0B" : "#E5E7EB"} 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="quote-text">&quot;{item.quote}&quot;</blockquote>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="feedback-cta-band">
        <h2>Ready to upgrade your business?</h2>
        <div className="cta-band-actions">
          <a className="home-hero-primary" href="/contact">
            <span>Start a Project</span>
            <HugeiconsIcon className="icon" icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
          </a>
          <a className="home-hero-secondary" href={siteConfig.whatsappUrl || "https://wa.me/2348124604571"}>
            <HugeiconsIcon className="home-hero-whatsapp-icon icon" icon={WhatsappIcon} size={17} strokeWidth={2} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </>
  );
}
