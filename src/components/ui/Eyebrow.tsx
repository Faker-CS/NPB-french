import type { ReactNode } from "react";
import { SparkIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/*
 * Section label pill (Figma "Frame 2147225361"): 33 px high, radius 45, padding 0/4, a 24 px spark
 * then the label (Inter Semi Bold 14, uppercase, padding 8/4).
 * - `brand`: brand 10 % fill, brand text (light sections)
 * - `glass`: brand 28 % fill + background blur, cyan text (hero, 31:3621)
 * - `accent`: cyan 10 % fill, cyan text (dark "Réparer ou remplacer ?" section, 31:3906)
 * Every label is uppercase except the hero one (31:3625 has no text case), hence `uppercase`.
 */

export type EyebrowTone = "brand" | "glass" | "accent";

const toneClasses: Record<EyebrowTone, string> = {
  brand: "bg-brand/10 text-brand",
  glass: "bg-brand/28 text-accent backdrop-blur-eyebrow",
  accent: "bg-accent-alt/10 text-accent-alt",
};

type EyebrowProps = {
  children: ReactNode;
  tone?: EyebrowTone;
  uppercase?: boolean;
  className?: string;
};

export function Eyebrow({ children, tone = "brand", uppercase = true, className }: EyebrowProps) {
  return (
    <p className={cn("inline-flex items-center rounded-full px-1 text-eyebrow font-semibold", uppercase && "uppercase", toneClasses[tone], className)}>
      <SparkIcon className="shrink-0" />
      <span className="px-1 py-2">{children}</span>
    </p>
  );
}
