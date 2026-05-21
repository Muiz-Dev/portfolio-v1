"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function PageRevealMotion() {
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion) {
        return;
      }

      const elements = gsap.utils.toArray<HTMLElement>("[data-page-reveal]");

      elements.forEach((element) => {
        const revealType = element.dataset.pageReveal;
        const fromVars =
          revealType === "left"
            ? { x: -28, opacity: 0 }
            : revealType === "right"
              ? { x: 28, opacity: 0 }
              : revealType === "clip"
                ? { clipPath: "inset(0 100% 0 0)" }
                : { y: 24, opacity: 0 };

        gsap.from(element, {
          ...fromVars,
          duration: revealType === "clip" ? 0.72 : 0.58,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            once: true,
          },
        });
      });
    },
    { dependencies: [shouldReduceMotion] },
  );

  return null;
}
