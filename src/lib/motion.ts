import type { Transition, Variants } from "motion/react";

/*
 * Single source of truth for motion, taken from the Figma prototype of "Npb french" (31:7999).
 * Every value below is read from a component's prototype interactions and the Smart Animate diff
 * between its variants (node ids in the comments). Durations are in seconds (motion's unit).
 */

type Bezier = [number, number, number, number];

/** Figma easings, exact control points. */
export const ease = {
  linear: [0, 0, 1, 1] as Bezier,
  /** "Automotive Glass Experts animation" 1:1290 → 1:1346 (first step). */
  collageIntro: [0.993, -0.017, 0, 1.014] as Bezier,
  /** "Automotive Glass Experts animation" 1:1346 → 1:1402 → 1:1458. */
  collage: [0.99, -0.02, 0, 1.01] as Bezier,
  /** "Why Ness Pare-Brise?" 1:1939 → 1:1978 (mouse enter). */
  whyHover: [1, -0.007, 0, 0.997] as Bezier,
  /** "review card" 1:2048 → 1:2064 → 1:2080. */
  reviewsSlide: [0, 0, 0, 1.01] as Bezier,
  /** "FaQ" 1:2097 ↔ 1:2107 (click). */
  faqToggle: [0.976, -0.002, 0, 0.995] as Bezier,
} as const;

/** Figma CUSTOM_SPRING on "Component 48" (1:1143): mass 1, stiffness 265.5, damping 15 (settles in ~977 ms). */
export const tyreSpring: Transition = { type: "spring", mass: 1, stiffness: 265.5, damping: 15 };

/** Durations and holds, in seconds. */
export const duration = {
  offerFloat: 5, // 1:1132 ↔ 1:1134
  sparkleStep: 2, // 1:1137 → 1:1139 → 1:1141
  tyreStep: 0.977, // Figma spring settle time; each step fires 1 ms after the previous one
  tyreHold: 5, // 1:1144 waits 5000 ms before resetting
  pinPulseStep: 0.5, // 1:1170 → 1:1174 → 1:1178
  pinTooltip: 0.3, // 1:1209 mouse enter → 1:1221
  mapZoom: 0.3, // 1:1253 click → 1:1255
  collageStep: 1, // 1:1290 … 1:1570
  stepsReveal: 1, // 1:1928 … 1:1936
  whyHover: 1, // 1:1939 → 1:1978
  reviewsHold: 2, // 1:2048 waits 2000 ms
  reviewsSlide: 1,
  partnersStep: 10, // 1:1055 → 1:1080 → 1:1105
  faqToggle: 0.5,
} as const;

/** Offer card image float (1:1131, "image 33"): moves (−15.4, −23.9) and rotates −7.8°, then back. */
export const offerFloat = {
  animate: { x: [0, -15.4], y: [0, -23.9], rotate: [0, -7.8] },
  transition: {
    duration: duration.offerFloat,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  } satisfies Transition,
};

/**
 * Sparkle (1:1136, "image 35", 58 × 72 at (39.7, 32.5) in a 137 × 137 frame): three positions, 2 s
 * linear each, then an instant reset to the first. Offsets are frame pixels from the first position;
 * instances of other sizes scale the whole 137 px frame.
 */
export const sparkleFrame = 137;
export const sparklePath = {
  x: [0, 54.9, 74.4],
  y: [0, -2, 42.7],
  rotate: [0, 73.1, 137],
} as const;

/**
 * Tyre stack (1:1143, 134 × 141 frame): four tyres drop in one after another with the spring above,
 * then the stack holds 5 s and resets instantly. Each row is the y of image 34, 35, 36, 37 per state.
 */
export const tyreStackStates = [
  [194.6, 170.4, 144.3, 235], // 1:1164 start (all below the frame)
  [184.6, 160.4, 14.3, 225], // 1:1159
  [164.6, 40.4, 14.3, 205], // 1:1154
  [64.6, 40.4, 14.3, 155], // 1:1149
  [64.6, 40.4, 14.3, 105], // 1:1144 rest
] as const;

/** Map pin pulse (1:1169): ring 2 then ring 1 fade to 10 %, 500 ms each, then reset. */
export const pinPulseOpacity = 0.1;

/** Map zoom on click (1:1221 → 1:1255): Group 42 scales ×3.572 around the clicked pin. */
export const mapZoomScale = 3.572;

/**
 * Collage (1:1289): four photos (107 × 117) rise from y 823 to the centre, fan out, then settle.
 * Positions are the top-left of Rectangle 10–13 in the 1280 × 723 frame, per state.
 */
export const collageStates = [
  [[476, 823], [476, 823], [476, 823], [476, 823]], // 1:1290 Group 8
  [[476, 382], [476, 382], [476, 382], [476, 382]], // 1:1346 Group 7
  [[396.5, 397.5], [438.5, 272.5], [513.5, 490.5], [555.5, 365.5]], // 1:1402 Group 5
  [[460, 302], [585, 344], [367, 419], [492, 461]], // 1:1458 Group 6 (rest)
] as const;

/** Scroll reveals (approved default: play once when in view, instead of Figma's mouse-enter proxy). */
export const inViewOnce = { once: true, amount: 0.35 } as const;

/** Opacity reveal used by the collage features, the steps and their CTAs (Figma: opacity 0 → 1, linear). */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.stepsReveal, ease: ease.linear } },
};

/** "Pourquoi" cards: the 3D icon slides 110 px left (Figma mouse enter, 1000 ms). */
export const whyIconShift = -110;

/** Reviews auto-carousel (1:2047): hold 2 s, slide 1 s, three positions, then loop. */
export const reviewsTransition: Transition = { duration: duration.reviewsSlide, ease: ease.reviewsSlide };

/** Partner logos (1:1054): one set of 4 logos is 1417.14 px wide and scrolls by in 10 s, linear, forever. */
export const partnersMarquee = {
  setWidth: 1417.14,
  transition: { duration: duration.partnersStep, ease: "linear", repeat: Infinity } satisfies Transition,
};

/** FAQ accordion: height and chevron rotation (−90° open, 90° closed). */
export const faqTransition: Transition = { duration: duration.faqToggle, ease: ease.faqToggle };
export const faqChevron = { open: -90, closed: 90 } as const;
