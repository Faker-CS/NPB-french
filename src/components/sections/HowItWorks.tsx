"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { duration, ease, inViewOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

/*
 * "Comment ça marche" (Figma "Component 58" 1:1927, instance 31:3848, 1280 × 725).
 * Split intro (heading 670 px), then 80 px lower "Group 6" (1227 × 432 at x 26.75): three steps in a
 * zig-zag (243 px wide: number HOOKRIDE 78, title Inter Semi Bold 18, text centred), joined by a 9 px
 * brand "Λ" line ("Vector 1"), and "Réserver un rendez-vous" centred under step 2.
 * Reveal (1:1928 → 1:1936, 1000 ms linear each): step 1 + line, step 2, step 3, CTA. Figma starts it on
 * mouse enter; here once in view (PROGRESS.md, D6).
 */

const stage = { width: 1227, height: 432 };
const stepLayout = [
  { x: 0, y: 254 },
  { x: 483, y: 0 },
  { x: 983.5, y: 234 },
];
const line = { x: 292.5, y: 200, width: 614.5, height: 157.5 };
const cta = { x: 478, y: 360 };
const LAST_STEP = 4;

const at = (x: number, y: number, width?: number): CSSProperties =>
  ({
    "--x": `${(x / stage.width) * 100}%`,
    "--y": `${(y / stage.height) * 100}%`,
    ...(width ? { "--w": `${(width / stage.width) * 100}%` } : {}),
  }) as CSSProperties;

type Step = { number: string; title: string; text: string };

type HowItWorksProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: Step[];
  cta: string;
  ctaHref: string;
};

export function HowItWorks({ eyebrow, title, description, steps, cta: ctaLabel, ctaHref }: HowItWorksProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, inViewOnce);
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const shown = reduce ? LAST_STEP : step;

  useEffect(() => {
    if (reduce || !inView || step >= LAST_STEP) return;
    const timer = window.setTimeout(() => setStep((s) => s + 1), step === 0 ? 1 : duration.stepsReveal * 1000);
    return () => window.clearTimeout(timer);
  }, [step, inView, reduce]);

  const fade = (visibleFrom: number) => ({
    initial: false as const,
    animate: { opacity: shown >= visibleFrom ? 1 : 0 },
    transition: { duration: duration.stepsReveal, ease: ease.linear },
  });

  return (
    <div ref={ref} className="flex flex-col gap-20">
      <SectionIntro
        layout="split"
        titleId="etapes-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        titleClassName="lg:max-w-175.5"
        descriptionClassName="lg:max-w-70.75"
      />

      <div className="relative flex flex-col items-center gap-10 lg:mx-auto lg:block lg:w-[95.86%]">
        <div className="hidden lg:block" style={{ aspectRatio: `${stage.width} / ${stage.height}` }} aria-hidden="true" />

        <motion.svg
          {...fade(1)}
          aria-hidden="true"
          viewBox={`0 0 ${line.width} ${line.height}`}
          className="absolute hidden text-brand lg:block"
          style={{
            left: `${(line.x / stage.width) * 100}%`,
            top: `${(line.y / stage.height) * 100}%`,
            width: `${(line.width / stage.width) * 100}%`,
            overflow: "visible",
          }}
          fill="none"
        >
          <path
            d="M315 0L317.094 -3.983L315.052 -5.057L312.988 -4.025L315 0ZM0 157.5L2.012 161.525L317.012 4.025L315 0L312.988 -4.025L-2.012 153.475L0 157.5ZM315 0L312.906 3.983L612.406 161.483L614.5 157.5L616.594 153.517L317.094 -3.983L315 0Z"
            fill="currentColor"
          />
        </motion.svg>

        <ol className="contents">
          {steps.map((item, index) => (
            <motion.li
              key={item.number}
              {...fade(index + 1)}
              style={at(stepLayout[index].x, stepLayout[index].y, 243)}
              className="flex w-full max-w-60.75 flex-col items-center gap-3.75 text-center lg:absolute lg:top-(--y) lg:left-(--x) lg:w-(--w)"
            >
              <span className="px-4 py-2 font-display text-display text-ink" aria-hidden="true">
                {item.number}
              </span>
              <span className="flex flex-col">
                <span className="px-2 py-1 text-title font-semibold text-ink">
                  <span className="sr-only">Étape {index + 1} : </span>
                  {item.title}
                </span>
                <span className={cn("px-2 py-1 font-medium text-muted")}>{item.text}</span>
              </span>
            </motion.li>
          ))}
        </ol>

        <motion.div {...fade(LAST_STEP)} style={at(cta.x, cta.y)} className="px-4 py-2 lg:absolute lg:top-(--y) lg:left-(--x)">
          <ButtonLink href={ctaHref} arrow tabIndex={shown >= LAST_STEP ? undefined : -1}>
            {ctaLabel}
          </ButtonLink>
        </motion.div>
      </div>
    </div>
  );
}
