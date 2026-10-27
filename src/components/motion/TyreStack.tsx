"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FigmaFrame, placeNode, rotateFromCorner } from "@/components/motion/FigmaFrame";
import { duration, tyreSpring, tyreStackStates } from "@/lib/motion";
import { cn } from "@/lib/cn";

const frame = { width: 134, height: 141 }; // "Component 48" (1:1143), clipped

// "image 34" … "image 37" at their start position (1:1164).
const tyres = [
  { x: 10, y: tyreStackStates[0][0], width: 52, height: 62, rotate: -23.46, blur: false },
  { x: 121.31, y: tyreStackStates[0][1], width: 40, height: 48, rotate: -167.99, blur: false },
  { x: 43, y: tyreStackStates[0][2], width: 25, height: 30, rotate: -12.01, blur: false },
  { x: 43, y: tyreStackStates[0][3], width: 96, height: 115, rotate: -12.01, blur: true },
];

const lastStep = tyreStackStates.length - 1;

type TyreStackProps = {
  className?: string;
  sizes?: string;
};

/**
 * Tyres dropping into a stack (Figma "Component 48", 1:1143): four steps on a spring
 * (mass 1, stiffness 265.5, damping 15), a 5 s hold, then an instant reset. Starts when in view;
 * with reduced motion the stack is shown at rest.
 */
export function TyreStack({ className, sizes = "284px" }: TyreStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  // Rendered px per Figma px. Offsets are animated in px: motion snaps large % springs to their end value.
  const [scale, setScale] = useState(1);
  const shown = reduce ? lastStep : step;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / frame.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !inView) return;
    const wait = step === lastStep ? duration.tyreHold * 1000 : step === 0 ? 1 : duration.tyreStep * 1000;
    const timer = window.setTimeout(() => setStep((s) => (s === lastStep ? 0 : s + 1)), wait);
    return () => window.clearTimeout(timer);
  }, [step, inView, reduce]);

  return (
    <div ref={ref} className={className}>
      <FigmaFrame {...frame} clip className="w-full">
        {tyres.map((tyre, index) => {
          const y = (tyreStackStates[shown][index] - tyreStackStates[0][index]) * scale;
          return (
            <motion.div
              key={index}
              aria-hidden="true"
              style={placeNode(frame, tyre)}
              initial={false}
              animate={{ y }}
              transition={shown === 0 ? { duration: 0 } : tyreSpring}
            >
              <div style={rotateFromCorner(tyre.rotate)} className={cn("relative", tyre.blur && "blur-tyre")}>
                <Image src="/images/offer-tyre.webp" alt="" fill sizes={sizes} className="object-fill" />
              </div>
            </motion.div>
          );
        })}
      </FigmaFrame>
    </div>
  );
}
