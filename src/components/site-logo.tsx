"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function SiteLogo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="site-logo-frame"
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x: -10, clipPath: "inset(0 100% 0 0)" }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }
      }
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.72,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src="/brand/logo-full-960.png"
        alt="Muiz Dev Solutions"
        width={960}
        height={451}
        priority
        className="site-logo"
      />
    </motion.div>
  );
}
