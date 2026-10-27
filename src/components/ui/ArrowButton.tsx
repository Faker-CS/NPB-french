import type { ComponentPropsWithoutRef } from "react";
import { ArrowRightLargeIcon, ChevronRightIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/*
 * 36 px round icon buttons (Figma "arrow 6" / "arrow 7", radius 26.55, padding 8.17, 24 px icon).
 * - `dark`:  ink fill, white chevron (services carousel previous / next, 31:3841, 31:3844)
 * - `light`: white fill, brand long arrow (service slide link, 31:3834)
 * - `brand`: brand fill, snow chevron (FAQ toggle, 1:2104)
 */

export type ArrowButtonVariant = "dark" | "light" | "brand";
export type ArrowDirection = "next" | "prev" | "up" | "down";

const variantClasses: Record<ArrowButtonVariant, string> = {
  dark: "bg-ink text-white",
  light: "bg-white text-brand",
  brand: "bg-brand text-snow",
};

const rotation: Record<ArrowDirection, string> = {
  next: "",
  prev: "rotate-180",
  up: "-rotate-90",
  down: "rotate-90",
};

export function ArrowIcon({ variant, direction = "next", className }: { variant: ArrowButtonVariant; direction?: ArrowDirection; className?: string }) {
  const Icon = variant === "light" ? ArrowRightLargeIcon : ChevronRightIcon;
  return (
    <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", variantClasses[variant], className)} aria-hidden="true">
      <Icon className={cn("transition-transform", rotation[direction])} />
    </span>
  );
}

type ArrowButtonProps = {
  /** Accessible name, e.g. "Diapositive suivante". */
  label: string;
  variant?: ArrowButtonVariant;
  direction?: ArrowDirection;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children" | "aria-label">;

export function ArrowButton({ label, variant = "dark", direction = "next", className, type = "button", ...rest }: ArrowButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "cursor-pointer rounded-full transition-[filter] hover:brightness-90 active:brightness-80 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...rest}
    >
      <ArrowIcon variant={variant} direction={direction} />
    </button>
  );
}
