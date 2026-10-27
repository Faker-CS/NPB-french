"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeIn, inViewOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Seconds before the fade starts, to chain Figma's one-after-another steps. */
  delay?: number;
  className?: string;
};

/** Fades its content in once when it scrolls into view (Figma opacity 0 → 1, 1000 ms linear; PROGRESS.md D6). */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
