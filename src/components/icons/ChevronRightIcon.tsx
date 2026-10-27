import type { SVGProps } from "react";

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
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
      <g transform="matrix(0 1 -1 0 16.5 6)">
        <path d="M12.903 6.887C13.294 6.496 13.294 5.863 12.903 5.473L8.011 0.585C7.23 -0.195 5.964 -0.195 5.183 0.586L0.293 5.476C-0.098 5.867 -0.098 6.5 0.293 6.89C0.683 7.281 1.317 7.281 1.707 6.89L5.893 2.705C6.283 2.314 6.916 2.314 7.307 2.705L11.489 6.887C11.88 7.277 12.513 7.277 12.903 6.887Z" fill="currentColor" />
      </g>
    </svg>
  );
}
