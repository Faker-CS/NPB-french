import Image from "next/image";
import type { CSSProperties } from "react";
import { placeNode } from "@/components/motion/FigmaFrame";
import { OfferFloat } from "@/components/motion/OfferFloat";
import { Sparkle } from "@/components/motion/Sparkle";
import { TyreStack } from "@/components/motion/TyreStack";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/*
 * Offer card (Figma "Frame 2147225372" / "Frame 2147225479", 556 × 512): surface fill, radius 16, clipped.
 * Top-left text column (287 px): price (HOOKRIDE 38, digits in brand), label (Inter Bold 16 brand),
 * description. "RÉCLAMEZ MAINTENANT" (492 px, inner glow) at y 432. Decorations are absolutely
 * positioned like their Figma instances: the animated coin or tyre stack behind the text, then two
 * animated sparkles and a static blurred mini sparkle on top.
 */

const card = { width: 556, height: 512 };
const coin = { x: 160, y: 89, width: 520, height: 531 }; // 31:3660
const tyres = { x: 180, y: 95, width: 396, height: 417 }; // 31:3676
const sparkleLarge = { x: 160, y: 183, width: 137, height: 137 }; // "Component 49"
const sparkleSmall = { x: 510, y: 44, width: 90, height: 90 }; // "Component 50"
// "image 37": 25 × 31 at (303.36, 58.13), rotated −10.66°, foreground blur 4 (→ 2 px).
const miniSparkle: CSSProperties = {
  ...placeNode(card, { x: 303.36, y: 58.13, width: 25, height: 31 }),
  rotate: "-10.66deg",
  transformOrigin: "0 0",
};

export type PricePart = { text: string; highlight?: boolean };

type OfferCardProps = {
  price: readonly PricePart[];
  label: string;
  description: string;
  cta: string;
  href: string;
  decoration: "coin" | "tyres";
};

export function OfferCard({ price, label, description, cta, href, decoration }: OfferCardProps) {
  return (
    <article className="relative isolate flex min-h-128 flex-col justify-between overflow-hidden rounded-card bg-surface p-4">
      <div aria-hidden="true" className="absolute -z-10" style={placeNode(card, decoration === "coin" ? coin : tyres)}>
        {decoration === "coin" ? <OfferFloat className="w-full" /> : <TyreStack className="w-full" />}
      </div>

      <div className="flex max-w-71.75 flex-col">
        <h3 className="px-4 py-2 font-display text-price text-ink">
          {price.map((part, index) => (
            <span key={index} className={cn(part.highlight && "text-brand")}>
              {part.text}
            </span>
          ))}
        </h3>
        <p className="px-4 py-2 font-bold text-brand">{label}</p>
        <p className="px-4 py-2 font-medium whitespace-pre-line text-muted">{description}</p>
      </div>

      <div className="px-4 py-2">
        <ButtonLink href={href} strong glow className="w-full">
          {cta}
        </ButtonLink>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute" style={placeNode(card, sparkleLarge)}>
        <Sparkle className="w-full" sizes="137px" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute" style={placeNode(card, sparkleSmall)}>
        <Sparkle className="w-full" sizes="90px" />
      </div>
      <div aria-hidden="true" className="pointer-events-none blur-sparkle" style={miniSparkle}>
        <Image src="/images/sparkle.webp" alt="" fill sizes="25px" className="object-fill" />
      </div>
    </article>
  );
}
