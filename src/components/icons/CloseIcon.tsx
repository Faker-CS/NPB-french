import type { SVGProps } from "react";

// Not in Figma: drawn to match MenuIcon (2 px strokes, round caps) for the menu dialog.
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="37.333"
      height="37.333"
      viewBox="0 0 37.333 37.333"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M10.6 10.6L26.733 26.733M26.733 10.6L10.6 26.733" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
