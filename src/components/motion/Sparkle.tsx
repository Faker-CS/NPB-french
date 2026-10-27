"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FigmaFrame, offsetPercent, placeNode } from "@/components/motion/FigmaFrame";
import { duration, sparkleFrame, sparklePath } from "@/lib/motion";

const frame = { width: sparkleFrame, height: sparkleFrame };
const star = { x: 39.74, y: 32.5, width: 58, height: 72 }; // "image 35" (1:1138)

type SparkleProps = {
  /** Sizing / position classes for the 137 × 137 frame (instances are 90 to 641 px wide). */
  className?: string;
  /** Rendered image width, for next/image `sizes`. */
  sizes?: string;
};

/**
 * Twinkling 3D star (Figma "Component 49/50", 1:1136): drifts along three points and turns
 * 0 → 73.1 → 137°, 2 s linear per step, then plays back in reverse (seamless loop).
 */
export function Sparkle({ className, sizes = "120px" }: SparkleProps) {
  return (
    <FigmaFrame {...frame} className={className}>
      <motion.div
        aria-hidden="true"
        style={placeNode(frame, star)}
        animate={{
          x: sparklePath.x.map((v) => offsetPercent(v, star.width)),
          y: sparklePath.y.map((v) => offsetPercent(v, star.height)),
        }}
        transition={{ duration: duration.sparkleStep * 2, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
      >
        <motion.div
          className="relative size-full origin-top-left"
          animate={{ rotate: [...sparklePath.rotate] }}
          transition={{ duration: duration.sparkleStep * 2, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
        >
          <Image src="/images/sparkle.webp" alt="" fill sizes={sizes} className="object-fill" />
        </motion.div>
      </motion.div>
    </FigmaFrame>
  );
}
