"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function SiteLogo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="site-logo-frame"
      initial={shouldReduceMotion ? false : { x: -6 }}
      animate={shouldReduceMotion ? undefined : { x: 0 }}
      transition={{
        duration: 0.42,
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
      {!shouldReduceMotion ? (
        <motion.span
          className="site-logo-sweep"
          aria-hidden="true"
          initial={{ opacity: 0, x: "-130%" }}
          animate={{ opacity: [0, 0.5, 0], x: "130%" }}
          transition={{
            delay: 0.08,
            duration: 0.82,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ) : null}
    </motion.div>
  );
}
