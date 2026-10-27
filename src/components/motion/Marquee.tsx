"use client";

import { useAnimate, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  /** One set of items; it is rendered twice so the loop is seamless. */
  children: ReactNode;
  /** Seconds for one set to scroll by (partners: 10 s, `partnersMarquee`). */
  duration: number;
  /** Classes of each set (layout and gap; include the trailing gap as right padding). */
  setClassName?: string;
  className?: string;
  label: string;
};

/**
 * Endless horizontal scroll, linear (Figma "our partner" 1:1054 moves one set per 10 s, then resets).
 * Pauses on hover and keyboard focus; static with reduced motion.
 */
export function Marquee({ children, duration, setClassName, className, label }: MarqueeProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const controls = animate(scope.current, { x: ["0%", "-50%"] }, { duration, ease: "linear", repeat: Infinity });
    const root = scope.current.parentElement;
    const pause = () => controls.pause();
    const play = () => controls.play();
    root?.addEventListener("pointerenter", pause);
    root?.addEventListener("pointerleave", play);
    root?.addEventListener("focusin", pause);
    root?.addEventListener("focusout", play);
    return () => {
      controls.stop();
      root?.removeEventListener("pointerenter", pause);
      root?.removeEventListener("pointerleave", play);
      root?.removeEventListener("focusin", pause);
      root?.removeEventListener("focusout", play);
    };
  }, [animate, scope, duration, reduce]);

  return (
    <div className={cn("overflow-hidden", className)} role="region" aria-label={label}>
      <div ref={scope} className="flex w-max">
        <div className={cn("flex shrink-0", setClassName)}>{children}</div>
        <div className={cn("flex shrink-0", setClassName)} aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
