"use client";

import { useEffect, useState } from "react";
import { ArrowUp02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function ScrollTopControl() {
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateState = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;

        setProgress(Math.min(Math.max(nextProgress, 0), 1));
        setIsVisible(scrollTop > 520);
      });
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          className="scroll-top-control"
          type="button"
          aria-label="Back to top"
          style={{ "--scroll-progress": progress } as React.CSSProperties}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{
            duration: shouldReduceMotion ? 0.12 : 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          whileTap={shouldReduceMotion ? undefined : { y: 1 }}
          onClick={handleClick}
        >
          <span className="scroll-top-progress" aria-hidden="true" />
          <HugeiconsIcon
            className="scroll-top-icon icon"
            icon={ArrowUp02Icon}
            size={17}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="scroll-top-text">Top</span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
