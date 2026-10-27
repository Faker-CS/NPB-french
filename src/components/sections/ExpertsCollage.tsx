"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { placeNode } from "@/components/motion/FigmaFrame";
import { ButtonLink } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { collageStates, duration, ease, inViewOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

/*
 * "Automotive Glass Experts animation" (Figma 1:1289, instance 31:3847, 1280 × 723). Steps, 1000 ms each:
 *   0 Group 8: photos below the frame, intro and features hidden
 *   1 Group 7: photos rise to the centre      cubic-bezier(.993,-.017,0,1.014)
 *   2 Group 5: photos fan out                 cubic-bezier(.99,-.02,0,1.01)
 *   3 Group 6: photos settle                  cubic-bezier(.99,-.02,0,1.01)
 *   4 Group 4: intro + features fade in       linear
 *   5 Group 9: "Book appointment" fades in    linear
 * Figma starts it on mouse enter; here it plays once when scrolled into view (PROGRESS.md, D6).
 *
 * Layout: intro (0–213), stage (213–651) with the photo cluster and four features, CTA row (651–723).
 * Photos (107 × 117, radius 22) are placed in the cluster box x 367–692 of the stage.
 */

const LAST_STEP = 5;
const cluster = { x: 367, width: 325, height: 438 };
const stageTop = 213;
const photo = { width: 107, height: 117 };
const stepEase = [ease.collageIntro, ease.collage, ease.collage, ease.linear, ease.linear];

// Feature position in the 1280 × 438 stage, and which side the dot is on.
const featureLayout = [
  { x: 147, y: 206, width: 204, dot: "end" }, // 1:1532, dot right of the text
  { x: 529, y: 0, width: 351, dot: "start", alignEnd: true }, // 1:1540, dot bottom-aligned
  { x: 708, y: 175, width: 351, dot: "start" }, // 1:1548
  { x: 557, y: 381, width: 351, dot: "start" }, // 1:1556
] as const;

type Feature = { title: string; text: string };

type ExpertsCollageProps = {
  eyebrow: string;
  title: string;
  description: string;
  photos: { src: string; alt: string }[];
  features: Feature[];
  cta: string;
  ctaHref: string;
};

export function ExpertsCollage({ eyebrow, title, description, photos, features, cta, ctaHref }: ExpertsCollageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, inViewOnce);
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [scale, setScale] = useState(1);
  const shown = reduce ? LAST_STEP : step;

  useEffect(() => {
    const el = clusterRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / cluster.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !inView || step >= LAST_STEP) return;
    // Step 0 → 1 fires right away (Figma "after 1 ms"), then one step per finished transition.
    const timer = window.setTimeout(() => setStep((s) => s + 1), step === 0 ? 1 : duration.collageStep * 1000);
    return () => window.clearTimeout(timer);
  }, [step, inView, reduce]);

  const fade = (visibleFrom: number) => ({
    initial: false as const,
    animate: { opacity: shown >= visibleFrom ? 1 : 0 },
    transition: { duration: duration.collageStep, ease: ease.linear },
  });
  // Photos keep their last position from step 3 on.
  const photoState = collageStates[Math.min(shown, collageStates.length - 1)];
  const photoTransition = { duration: duration.collageStep, ease: stepEase[Math.max(0, Math.min(shown, 3) - 1)] };

  return (
    <div ref={ref} className="flex flex-col">
      <motion.div {...fade(4)}>
        <SectionIntro
          layout="split"
          titleId="experts-title"
          eyebrow={eyebrow}
          title={title}
          description={description}
          titleClassName="lg:max-w-150.5"
          descriptionClassName="lg:max-w-70.75"
        />
      </motion.div>

      <div className="relative mt-10 flex flex-col items-center gap-8 lg:mt-0 lg:block lg:aspect-[1280/438]">
        <div
          ref={clusterRef}
          aria-hidden="true"
          className="relative w-full max-w-81.25 overflow-hidden lg:absolute lg:top-0 lg:left-[28.67%] lg:h-full lg:w-[25.39%] lg:max-w-none"
          style={{ aspectRatio: `${cluster.width} / ${cluster.height}` }}
        >
          {photos.map((item, index) => {
            const [x, y] = photoState[index];
            const [x0, y0] = collageStates[3][index];
            return (
              <motion.div
                key={item.src}
                className="absolute overflow-hidden rounded-thumb"
                style={placeNode(cluster, { x: x0 - cluster.x, y: y0 - stageTop, ...photo })}
                initial={false}
                animate={{ x: (x - x0) * scale, y: (y - y0) * scale }}
                transition={shown === 0 ? { duration: 0 } : photoTransition}
              >
                <Image src={item.src} alt={item.alt} fill sizes="214px" className="object-cover" />
              </motion.div>
            );
          })}
        </div>

        <ul className="flex w-full flex-col gap-6 lg:contents">
          {features.map((feature, index) => {
            const layout = featureLayout[index];
            const position = {
              "--x": `${(layout.x / 1280) * 100}%`,
              "--y": `${(layout.y / 438) * 100}%`,
              "--w": `${(layout.width / 1280) * 100}%`,
            } as CSSProperties;
            return (
              <motion.li
                key={feature.title}
                {...fade(4)}
                style={position}
                className={cn(
                  "flex gap-0 lg:absolute lg:top-(--y) lg:left-(--x) lg:w-(--w)",
                  layout.dot === "end" && "lg:flex-row-reverse lg:justify-end",
                  "alignEnd" in layout && "lg:items-end",
                )}
              >
                <span className="flex size-9.5 shrink-0 items-center justify-center" aria-hidden="true">
                  <span className="size-5 rounded-full bg-brand" />
                </span>
                <span className="flex flex-col">
                  <span className="px-2 py-1 text-title font-semibold text-ink">{feature.title}</span>
                  <span className={cn("px-2 py-1 font-medium text-muted", index === 0 && "lg:max-w-41.5", index === 1 && "lg:whitespace-nowrap")}>
                    {feature.text}
                  </span>
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <motion.div {...fade(5)} className="mt-8 flex justify-end px-4 py-2 lg:mt-0">
        <ButtonLink href={ctaHref} arrow tabIndex={shown >= LAST_STEP ? undefined : -1}>
          {cta}
        </ButtonLink>
      </motion.div>
    </div>
  );
}
