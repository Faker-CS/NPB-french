"use client";

import { motion, useReducedMotion, type Transition } from "motion/react";
import { MapPinIcon } from "@/components/icons";
import { duration, pinPulseOpacity } from "@/lib/motion";
import { cn } from "@/lib/cn";

type LocationPinProps = {
  className?: string;
};

/*
 * Map pin (Figma "location icon", 1:1182, 16 × 24): the pin glyph over a pulse ("Component 15" → 1:1169)
 * of two rings that fade to 10 % one after the other, 500 ms each, then reset instantly.
 * Opacity-only, so it is stopped explicitly with reduced motion.
 */
export function LocationPin({ className }: LocationPinProps) {
  const reduce = useReducedMotion();
  const loop: Transition = { duration: duration.pinPulseStep * 2, ease: "linear", repeat: Infinity, times: [0, 0.5, 1] };

  return (
    <span className={cn("relative block h-6 w-4 text-brand", className)} aria-hidden="true">
      <span className="absolute inset-x-0 top-2 block size-4">
        <motion.span
          className="absolute inset-0 rounded-full bg-brand"
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0 } : { opacity: [0, 0, pinPulseOpacity] }}
          transition={loop}
        />
        <motion.span
          className="absolute inset-1/8 rounded-full bg-brand"
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0 } : { opacity: [0, pinPulseOpacity, pinPulseOpacity] }}
          transition={loop}
        />
      </span>
      <MapPinIcon className="absolute top-0 left-0.5 h-4 w-3" />
    </span>
  );
}
