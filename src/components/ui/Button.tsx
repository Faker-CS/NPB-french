import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/*
 * Figma "Frame 27" (filled) and "Frame 28" (ghost): 56 px high, radius 8, padding 8/16
 * (8/8/8/16 with the arrow), Inter 16. The arrow is an 11 px icon centred in a 24 px box.
 * Hover / active / disabled are not designed (PROGRESS.md, D5).
 */

export type ButtonVariant = "primary" | "ghost";
export type ButtonTone = "light" | "dark";

type StyleProps = {
  variant?: ButtonVariant;
  /** Ghost text colour: `light` sections use brand teal, `dark` ones use the cyan accent (hero). */
  tone?: ButtonTone;
  /** Trailing arrow (Figma "Text" › "Icon"). */
  arrow?: boolean;
  /** Bold 16/0.9 label in snow: "Rechercher", "RÉCLAMEZ MAINTENANT". */
  strong?: boolean;
  /** Inner cyan glow of "RÉCLAMEZ MAINTENANT" (31:3670). */
  glow?: boolean;
  className?: string;
};

export function buttonClasses({ variant = "primary", tone = "light", arrow = false, strong = false, glow = false, className }: StyleProps = {}) {
  return cn(
    // min-h instead of h so a long label can wrap on narrow phones instead of overflowing.
    "inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-button py-2 text-center transition-[filter,background-color] select-none",
    "hover:brightness-90 active:brightness-80 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100",
    arrow ? "pr-2 pl-4" : "px-4",
    variant === "primary" && "bg-brand",
    variant === "primary" && (strong ? "text-snow" : "text-white"),
    variant === "ghost" && (tone === "dark" ? "text-accent" : "text-brand"),
    strong || variant === "ghost" ? "font-bold" : "font-medium",
    strong ? "text-body/[0.9]" : "text-body",
    glow && "inset-shadow-glow",
    className,
  );
}

function Label({ children, arrow }: { children: ReactNode; arrow: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="flex size-6 shrink-0 items-center justify-center" aria-hidden="true">
          <ArrowRightIcon />
        </span>
      )}
    </>
  );
}

type ButtonLinkProps = StyleProps & { children: ReactNode } & Omit<ComponentPropsWithoutRef<"a">, "className" | "children">;
type ButtonProps = StyleProps & { children: ReactNode } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

/** Call to action that navigates (page anchors, tel:, mailto:). */
export function ButtonLink({ children, variant, tone, arrow = false, strong, glow, className, ...rest }: ButtonLinkProps) {
  return (
    <a className={buttonClasses({ variant, tone, arrow, strong, glow, className })} {...rest}>
      <Label arrow={arrow}>{children}</Label>
    </a>
  );
}

/** Call to action that performs an action (form submit, search). */
export function Button({ children, variant, tone, arrow = false, strong, glow, className, type = "button", ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonClasses({ variant, tone, arrow, strong, glow, className })} {...rest}>
      <Label arrow={arrow}>{children}</Label>
    </button>
  );
}
