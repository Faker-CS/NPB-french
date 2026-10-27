"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { placeNode, type NodeBox } from "@/components/motion/FigmaFrame";
import { duration, ease, inViewOnce, whyIconShift } from "@/lib/motion";
import { cn } from "@/lib/cn";

/*
 * "Why Ness Pare-Brise?" (Figma 1:1938, instance 31:3863 in its end state 1:1978, 1055 × 786):
 * 3 cards, then 2 centred, gap 16. Card 341 × 385: surface fill, radius 8, clipped; title top-left
 * (Inter Semi Bold 18), text bottom-left (muted), a 257 px brand-deep circle at (158, 56) and the 3D icon.
 * Motion (1:1939 → 1:1978): icons slide 110 px left, 1000 ms cubic-bezier(1,-.007,0,.997); Figma
 * triggers it on mouse enter, here once in view (PROGRESS.md, D6).
 */

const card = { width: 341, height: 385 };
const circle = { x: 158, y: 56, width: 257, height: 257 };

const iconVariants: Variants = {
  hidden: { x: -whyIconShift },
  visible: { x: 0, transition: { duration: duration.whyHover, ease: ease.whyHover } },
};

export type WhyCard = { title: string; text: string; image: string; box: NodeBox; titleIndent?: boolean };

export function WhyCards({ cards }: { cards: WhyCard[] }) {
  return (
    <motion.ul
      className="flex flex-wrap justify-center gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
    >
      {cards.map((item) => (
        <li
          key={item.title}
          className="relative isolate flex min-h-96.25 w-full flex-col justify-between overflow-hidden rounded-button bg-surface p-4 sm:w-85.25"
        >
          <h3 className={cn("px-2 py-1 text-title font-semibold text-ink", item.titleIndent && "pl-4.5")}>{item.title}</h3>
          <p className="max-w-75.25 px-2 py-1 font-medium whitespace-pre-line text-muted">{item.text}</p>
          <span aria-hidden="true" className="absolute -z-10 rounded-full bg-brand-deep" style={placeNode(card, circle)} />
          <motion.span aria-hidden="true" className="absolute -z-10" style={placeNode(card, item.box)} variants={iconVariants}>
            <Image src={item.image} alt="" fill sizes="164px" className="object-contain" />
          </motion.span>
        </li>
      ))}
    </motion.ul>
  );
}
