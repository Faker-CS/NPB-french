"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { ArrowIcon, ArrowButton } from "@/components/ui/ArrowButton";
import { ease, duration } from "@/lib/motion";
import { cn } from "@/lib/cn";

export type ServiceSlide = { id: string; label: string; title: string; image: string; alt: string };

/*
 * Services carousel (Figma "Group 2", 31:3812, 1099 × 406, clipped, right-aligned in the column).
 * Two slots: active "Frame 2147225484" (698 × 406, radius 16) and next "Frame 2147225485"
 * (540 × 314 = ×0.7735, at 559 / 76, 20 % opacity, caption hidden), the active one on top.
 * Each slide moves between the slots; Figma defines no motion here, so it uses the reviews slider
 * timing (1000 ms, cubic-bezier(0,0,0,1.01); PROGRESS.md D7). Counter and arrows below (31:3837).
 */

const NEXT_SCALE = 540 / 698;
const NEXT_X = `${(559 / 698) * 100}%`;
const NEXT_Y = `${(76 / 406) * 100}%`;
const transition = { duration: duration.reviewsSlide, ease: ease.reviewsSlide };

const pad = (value: number) => String(value).padStart(2, "0");

type ServicesCarouselProps = {
  slides: ServiceSlide[];
  linkHref: string;
};

export function ServicesCarousel({ slides, linkHref }: ServicesCarouselProps) {
  const [active, setActive] = useState(0);
  const count = slides.length;
  const go = (step: number) => setActive((index) => (index + step + count) % count);

  return (
    <div className="flex flex-col gap-10">
      <div
        role="region"
        aria-roledescription="carrousel"
        aria-label="Nos services de vitrage"
        className="relative overflow-hidden xl:ml-45.25"
      >
        {/* Sizer: the track is as tall as the active slot. */}
        <div className="pointer-events-none w-5/6 lg:w-[63.51%]" style={{ aspectRatio: "698 / 406" }} />
        {slides.map((slide, index) => {
          const isActive = index === active;
          return (
            <motion.article
              key={slide.id}
              aria-roledescription="diapositive"
              aria-label={`${index + 1} sur ${count}`}
              aria-hidden={!isActive}
              inert={!isActive}
              className={cn(
                "absolute top-0 left-0 w-5/6 origin-top-left overflow-hidden rounded-card bg-slide lg:w-[63.51%]",
                isActive ? "z-10" : "z-0",
              )}
              style={{ aspectRatio: "698 / 406" }}
              initial={false}
              animate={isActive ? { x: "0%", y: "0%", scale: 1, opacity: 1 } : { x: NEXT_X, y: NEXT_Y, scale: NEXT_SCALE, opacity: 0.2 }}
              transition={transition}
            >
              <Image src={slide.image} alt={slide.alt} fill sizes="(min-width: 1024px) 698px, 84vw" className="object-cover" />
              <motion.div
                className="absolute inset-x-0 bottom-0 flex flex-col p-4"
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={transition}
              >
                {/* "Rectangle 20": black fade (0 → 100 %) at 47 % with a background blur, behind the caption. */}
                <div className="absolute inset-x-0 bottom-0 h-32.5 bg-linear-to-b from-black/0 to-black opacity-47 backdrop-blur-caption" aria-hidden="true" />
                <p className="relative px-2 py-1 text-eyebrow font-semibold text-accent uppercase">{slide.label}</p>
                <div className="relative flex items-center justify-between">
                  <h3 className="px-2 py-1 font-display text-slide-title text-snow">{slide.title}</h3>
                  <a href={linkHref} aria-label={`En savoir plus : ${slide.label}`} className="shrink-0 rounded-full transition-[filter] hover:brightness-90">
                    <ArrowIcon variant="light" />
                  </a>
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>

      <div className="flex items-start justify-between">
        <p className="px-4 py-2 text-title font-medium" aria-live="polite">
          <span className="text-ink">{pad(active + 1)}</span>
          <span className="text-muted/50">/{pad(count)}</span>
        </p>
        <div className="flex gap-2 px-4 py-2">
          <ArrowButton label="Diapositive précédente" direction="prev" onClick={() => go(-1)} />
          <ArrowButton label="Diapositive suivante" onClick={() => go(1)} />
        </div>
      </div>
    </div>
  );
}
