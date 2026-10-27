import Image from "next/image";
import type { CSSProperties } from "react";
import { placeNode, type NodeBox } from "@/components/motion/FigmaFrame";
import { Sparkle } from "@/components/motion/Sparkle";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { bookingHref, rewards } from "@/data/landing";

/*
 * Referral card (Figma "Frame 2147225476", 31:4098, 1278 × 450, night fill, radius 32, clipped,
 * 174 px below "Besoin d'aide ?"). Layers, back to front:
 *  - "Group 53": five "Unlimited rewards" lines (HOOKRIDE 209.78/1, ink → white gradient, 232.4 px apart
 *    = 0.107em below each line) at 2 % opacity
 *  - "Ellipse 14": 812 px brand circle at 31 %, foreground blur 361 (→ 180.65 px)
 *  - animated sparkles (259 px blurred 1 px, 641 px blurred 6.9 px, 173 px), hands, blurred banknotes
 *  - centred content: snow title, text, brand payment line, CTA (364 px)
 * Decorations are placed in % of the card; hands and banknotes are hidden below `md` (PROGRESS.md, D9).
 */

const card = { width: 1278, height: 450 };
const glow: NodeBox = { x: 243, y: -282.5, width: 812, height: 812 };
const sparkleTop: NodeBox = { x: 299, y: -129.5, width: 259, height: 259 };
const sparkleCentre: NodeBox = { x: 306, y: 129.5, width: 641, height: 641 };
const sparkleRight: NodeBox = { x: 1065, y: 14.5, width: 173, height: 173 }; // 31:4126 (inside the content frame at 40 / 77)
const handLeft: NodeBox = { x: -49, y: 148.5, width: 292, height: 286 };
const handRight: NodeBox = { x: 988, y: 147.5, width: 304, height: 335 }; // 31:4125
const noteLeft: NodeBox = { x: 224, y: 238.5, width: 143, height: 102 };
const noteRight: NodeBox = { x: 848, y: 253.4, width: 163, height: 167 };

const decoration = (box: NodeBox, extra?: CSSProperties): CSSProperties => ({ ...placeNode(card, box), ...extra });

export function RewardsSection() {
  return (
    <section id="parrainage" aria-labelledby="parrainage-title" className="mt-43.5">
      <Container>
        <div className="relative isolate flex min-h-112.5 flex-col items-center justify-center overflow-hidden rounded-panel bg-night px-3 py-10 md:p-10 xl:mx-px">
          <div aria-hidden="true" className="absolute -z-10 opacity-2" style={decoration({ x: 7, y: -119.5, width: 1284, height: 1140 })}>
            {Array.from({ length: 5 }, (_, index) => (
              <p
                key={index}
                className="mb-[0.107em] font-display text-watermark-rewards whitespace-nowrap text-gradient-rewards uppercase select-none"
              >
                {rewards.watermark}
              </p>
            ))}
          </div>
          <span aria-hidden="true" className="absolute -z-10 rounded-full bg-brand opacity-31 blur-rewards-glow" style={decoration(glow)} />

          <div aria-hidden="true" className="pointer-events-none absolute -z-10 blur-sparkle-lg" style={decoration(sparkleCentre)}>
            <Sparkle className="w-full" sizes="271px" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute -z-10 blur-tyre" style={decoration(sparkleTop)}>
            <Sparkle className="w-full" sizes="110px" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute -z-10" style={decoration(sparkleRight)}>
            <Sparkle className="w-full" sizes="73px" />
          </div>
          {[
            { box: handLeft, src: "/images/rewards-hand-left.webp", sizes: "292px" },
            { box: handRight, src: "/images/rewards-hand-right.webp", sizes: "304px" },
          ].map(({ box, src, sizes }) => (
            <div key={src} aria-hidden="true" className="absolute -z-10 hidden md:block" style={decoration(box)}>
              <Image src={src} alt="" fill sizes={sizes} className="object-fill" />
            </div>
          ))}
          <div aria-hidden="true" className="absolute z-10 hidden blur-banknote-sm md:block" style={decoration(noteLeft)}>
            <Image src="/images/rewards-banknote-1.webp" alt="" fill sizes="143px" className="object-fill" />
          </div>
          <div
            aria-hidden="true"
            className="absolute z-10 hidden blur-banknote md:block"
            style={decoration(noteRight, { rotate: "-17.79deg", transformOrigin: "0 0" })}
          >
            <Image src="/images/rewards-banknote-2.webp" alt="" fill sizes="163px" className="object-fill" />
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center gap-4">
              <h2 id="parrainage-title" className="px-4 py-2 font-display text-display text-snow">
                {rewards.title}
              </h2>
              <p className="px-4 py-2 font-medium text-snow">{rewards.text}</p>
              <p className="px-4 py-2 font-medium text-brand">{rewards.payment}</p>
            </div>
            <div className="p-2.5">
              <div className="px-4 py-2">
                <ButtonLink href={bookingHref} arrow>
                  {rewards.cta}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
