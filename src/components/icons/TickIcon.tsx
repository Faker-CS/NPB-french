import type { SVGProps } from "react";

export function TickIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g transform="matrix(1 0 0 1 4 5)">
        <path d="M0 3.051L2.475 5.525L8 0" stroke="currentColor" strokeWidth="1.448" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
