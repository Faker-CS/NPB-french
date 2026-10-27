import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ChevronBoldIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/*
 * Figma component "Frame 27" (1:2): pill, 56 px, padding 8/8/8/16, gap 8, Roboto Medium 16,
 * label followed by a 36 px round chevron.
 * - `light`  = variant "button"   (1:3): white pill, ink label, signal circle, white chevron
 * - `glass`  = variant "button 2" (1:8): white 5 % glass, 25 % border, snow label, snow circle, signal chevron;
 *              54 px high and padding 8 on every side
 * - `signal` = the enquiry form override (31:4386): signal pill, white label, white circle, signal chevron
 */

export type PillButtonVariant = "light" | "glass" | "signal";

const pillClasses: Record<PillButtonVariant, string> = {
  light: "min-h-14 pl-4 bg-white text-ink",
  glass: "min-h-13.5 pl-2 border border-field/25 bg-white/5 text-snow backdrop-blur-nav",
  signal: "min-h-14 pl-4 bg-signal text-white",
};

const circleClasses: Record<PillButtonVariant, string> = {
  light: "bg-signal text-white",
  glass: "bg-snow text-signal",
  signal: "bg-white text-signal",
};

type PillButtonProps = {
  children: ReactNode;
  variant?: PillButtonVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function PillButton({ children, variant = "light", className, type = "button", ...rest }: PillButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 rounded-full py-2 pr-2 font-alt text-body font-medium transition-[filter] hover:brightness-90 active:brightness-80 disabled:cursor-not-allowed disabled:opacity-50",
        pillClasses[variant],
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", circleClasses[variant])} aria-hidden="true">
        <ChevronBoldIcon className="size-5" />
      </span>
    </button>
  );
}
