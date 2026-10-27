"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FigmaFrame, offsetPercent, placeNode } from "@/components/motion/FigmaFrame";
import { offerFloat } from "@/lib/motion";

const frame = { width: 323, height: 330 }; // "Frame 2147225478" (1:1132)
const coin = { x: 51.5, y: 44.5, width: 220, height: 241 }; // "image 33" (1:1133)

type OfferFloatProps = {
  className?: string;
  sizes?: string;
};

/** Floating € coin of the first offer card (1:1131): drifts up-left and tilts −7.8°, 5 s linear, back and forth. */
export function OfferFloat({ className, sizes = "354px" }: OfferFloatProps) {
  const { animate, transition } = offerFloat;
  return (
    <FigmaFrame {...frame} className={className}>
      <motion.div
        aria-hidden="true"
        style={placeNode(frame, coin)}
        animate={{ x: animate.x.map((v) => offsetPercent(v, coin.width)), y: animate.y.map((v) => offsetPercent(v, coin.height)) }}
        transition={transition}
      >
        <motion.div className="relative size-full origin-top-left" animate={{ rotate: animate.rotate }} transition={transition}>
          <Image src="/images/offer-euro-coin.webp" alt="" fill sizes={sizes} className="object-fill" />
        </motion.div>
      </motion.div>
    </FigmaFrame>
  );
}
