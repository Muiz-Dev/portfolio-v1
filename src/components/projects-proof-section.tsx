"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const supportingProjects = [
  {
    name: "HBSI Nigeria",
    industry: "Organization / Business",
    image: "/https-www.hbsinigeria.org-.png",
    width: 1024,
    height: 768,
    summary:
      "Structured pages and clearer presentation for an organization that needed a more professional online presence.",
  },
  {
    name: "McBen Leo Cares",
    industry: "NGO / Community Support",
    image: "/https-www.mcbenleocares.co.uk-.png",
    width: 1024,
    height: 768,
    summary:
      "A digital presence for communicating mission, activities, and contact channels with more confidence.",
  },
  {
    name: "LoveView Estates",
    industry: "Real Estate",
    image: "/https-www.loveviewestates.co.uk-.png",
    width: 1280,
    height: 2639,
    summary:
      "A property-focused web presence built to support inquiries and make the brand easier to inspect.",
  },
];

export function ProjectsProofSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
            duration: 0.72,
          },
        })
        .from(".projects-proof-rule", { scaleX: 0, transformOrigin: "left" })
        .from(".project-shot", { clipPath: "inset(0 100% 0 0)", stagger: 0.1 }, "-=0.34")
        .from(".project-card-copy", { y: 18, opacity: 0, stagger: 0.08 }, "-=0.42");
    },
    { scope: sectionRef, dependencies: [shouldReduceMotion] }
  );

  return (
    <section className="projects-proof" ref={sectionRef} aria-labelledby="projects-proof-title">
      <div className="projects-proof-head">
        <p className="projects-proof-kicker">Proof online</p>
        <h2 id="projects-proof-title">Work we have put online.</h2>
        <p>
          A few live projects where the goal was not just to publish pages, but
          to make the business easier to understand, contact, and trust.
        </p>
      </div>

      <div className="projects-proof-rule" aria-hidden="true" />

      <motion.article className="project-featured" whileHover={shouldReduceMotion ? undefined : { y: -4 }}>
        <div className="project-card-copy">
          <p className="project-label">Featured case</p>
          <h3>GP Smith AccounTax Services</h3>
          <p className="project-industry">Accounting, tax, and business services</p>
          <p>
            Built a professional business website to present services, improve
            trust, and make it easier for potential clients to contact the
            company.
          </p>
          <dl className="project-facts">
            <div>
              <dt>Built</dt>
              <dd>Business website</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Trust and contact clarity</dd>
            </div>
          </dl>
        </div>

        <div className="project-shot project-featured-shot">
          <div className="project-browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>gpsmithaccountax.co.uk</p>
          </div>
          <Image
            src="/https-www.gpsmithaccountax.co.uk.png"
            alt="Screenshot of the GP Smith AccounTax Services website"
            width={1280}
            height={6111}
            sizes="(max-width: 1023px) 100vw, 58vw"
          />
        </div>
      </motion.article>

      <div className="project-support-grid">
        {supportingProjects.map((project) => (
          <motion.article
            className="project-card"
            key={project.name}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          >
            <div className="project-shot project-card-shot">
              <div className="project-browser-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <Image
                src={project.image}
                alt={`Screenshot of the ${project.name} website`}
                width={project.width}
                height={project.height}
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
            </div>
            <div className="project-card-copy">
              <p className="project-label">{project.industry}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <a className="projects-proof-link" href="/projects">
        <span>View all projects</span>
        <HugeiconsIcon className="icon" icon={ArrowRight02Icon} size={17} strokeWidth={2} />
      </a>
    </section>
  );
}
