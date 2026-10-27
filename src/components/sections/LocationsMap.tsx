"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { placeNode } from "@/components/motion/FigmaFrame";
import { LocationPin } from "@/components/motion/LocationPin";
import { duration, mapZoomScale } from "@/lib/motion";
import { cn } from "@/lib/cn";

/*
 * France map (Figma "location_svgrepo.com" 1:1188, 596 × 622, surface fill, radius 16, clipped).
 * "Group 42" (607 × 606 at −5, 8) holds the map vectors and 18 pulsing pins.
 * Prototype: hovering pin 1:1209 shows the "Parise" label (300 ms); clicking the label zooms the map
 * ×3.572 (300 ms, linear) so Group 42 ends at (−878, −397), i.e. a scale around (55.93 %, 25.99 %).
 * The zoom toggles back on a second click (not in Figma, for keyboard and touch users).
 */

const card = { width: 596, height: 622 };
const group = { x: -5, y: 8, width: 607, height: 606 };
const zoomOrigin = "55.93% 25.99%";

// Top-left of each 16 × 24 pin in Group 42 (Group 73 first, then the "location icon" instances).
const pins = [
  [269.44, 113.02],
  [315.84, 209.74],
  [224.35, 205.82],
  [155.73, 137.86],
  [105.41, 201.9],
  [462.22, 201.9],
  [341.98, 160.08], // 1:1209, carries the hover interaction
  [341.98, 32.64],
  [368.12, 90.15],
  [422.36, 90.15],
  [510.58, 128.71],
  [510.58, 332.6],
  [368.12, 332.6],
  [304.07, 332.6],
  [304.07, 491.4],
  [410.59, 479.64],
  [543.25, 479.64],
  [176.64, 503.16],
] as const;
const HOVER_PIN = 6;
const label = { x: 277, y: 152, width: 62, height: 26 }; // "Frame 23" (1:1253)

/** Position only: pins and the label keep their Figma pixel size at every map width. */
function anchor(frame: { width: number; height: number }, x: number, y: number) {
  const { left, top } = placeNode(frame, { x, y, width: 0, height: 0 });
  return { left, top };
}

type LocationsMapProps = {
  pinLabel: string;
  className?: string;
};

export function LocationsMap({ pinLabel, className }: LocationsMapProps) {
  const [hovered, setHovered] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const labelVisible = hovered || zoomed;

  return (
    <div className={cn("relative overflow-hidden rounded-card bg-surface", className)} style={{ aspectRatio: `${card.width} / ${card.height}` }}>
      <motion.div
        className="absolute"
        style={{ ...placeNode(card, group), transformOrigin: zoomOrigin }}
        initial={false}
        animate={{ scale: zoomed ? mapZoomScale : 1 }}
        transition={{ duration: duration.mapZoom, ease: "linear" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static vector illustration, scaled by the zoom */}
        <img src="/illustrations/france-map.svg" alt="" className="absolute inset-0 size-full" draggable={false} />
        {pins.map(([x, y], index) => (
          <span
            key={index}
            className="absolute"
            style={anchor(group, x, y)}
            onPointerEnter={index === HOVER_PIN ? () => setHovered(true) : undefined}
            onPointerLeave={index === HOVER_PIN ? () => setHovered(false) : undefined}
          >
            <LocationPin />
          </span>
        ))}
      </motion.div>

      <AnimatePresence>
        {labelVisible && (
          <motion.button
            type="button"
            aria-pressed={zoomed}
            onClick={() => setZoomed((value) => !value)}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            className="absolute flex h-6.5 cursor-pointer items-center justify-center rounded-full bg-brand px-1.75 py-0.75 font-medium whitespace-nowrap text-snow"
            style={anchor(card, label.x, label.y)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.pinTooltip, ease: "linear" }}
          >
            {pinLabel}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Keyboard access to the hover-only label: focusing this reveals it. */}
      <button
        type="button"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-button focus:bg-snow focus:px-3 focus:py-2 focus:text-ink"
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onClick={() => setZoomed((value) => !value)}
        aria-pressed={zoomed}
      >
        {zoomed ? "Dézoomer la carte" : "Zoomer sur Paris"}
      </button>
    </div>
  );
}
