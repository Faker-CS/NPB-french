"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { duration, reviewsTransition } from "@/lib/motion";

/*
 * Reviews auto-carousel (Figma "review card" 1:2047, instance 31:4329): three pages of four cards; it holds
 * 2 s, slides one page (1296 px = 1280 + 16 gap) in 1000 ms cubic-bezier(0,0,0,1.01), and after the last page
 * jumps back to the first. From `lg` only; it pauses on hover / focus / hidden tab and is off with reduced
 * motion. Below `lg` the cards are a swipeable scroll-snap row.
 */

type ReviewsCarouselProps = {
  pages: number;
  children: ReactNode;
};

const GAP = 16;

export function ReviewsCarousel({ pages, children }: ReviewsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(0);
  const [desktop, setDesktop] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    const el = viewportRef.current;
    const observer = el ? new ResizeObserver(([entry]) => setWidth(entry.contentRect.width)) : null;
    if (el) observer?.observe(el);
    return () => {
      query.removeEventListener("change", update);
      observer?.disconnect();
    };
  }, []);

  const playing = desktop && !reduce && !paused;

  useEffect(() => {
    if (!playing) return;
    // The last page shows for the hold, then the carousel snaps back to the first one.
    const hold = duration.reviewsHold * 1000 + (page === 0 ? 0 : duration.reviewsSlide * 1000);
    const timer = window.setTimeout(() => setPage((p) => (p + 1) % pages), hold);
    return () => window.clearTimeout(timer);
  }, [playing, page, pages]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const x = desktop ? -page * (width + GAP) : 0;

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Avis clients"
      className="-mx-5 snap-x snap-mandatory overflow-x-auto px-5 md:-mx-10 md:px-10 lg:mx-0 lg:h-64.5 lg:snap-none lg:overflow-hidden lg:px-0 lg:pt-1"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <motion.ul
        className="flex w-max gap-4"
        initial={false}
        animate={{ x }}
        transition={page === 0 ? { duration: 0 } : reviewsTransition}
      >
        {children}
      </motion.ul>
    </div>
  );
}
