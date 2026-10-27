import type { SVGProps } from "react";

export function BulletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g opacity="0.1">
        <path d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12Z" fill="currentColor" />
      </g>
      <g transform="matrix(1 0 0 1 6.857 6.857)">
        <path d="M10.286 5.143C10.286 7.983 7.983 10.286 5.143 10.286C2.303 10.286 0 7.983 0 5.143C0 2.303 2.303 0 5.143 0C7.983 0 10.286 2.303 10.286 5.143Z" fill="currentColor" />
      </g>
    </svg>
  );
}
