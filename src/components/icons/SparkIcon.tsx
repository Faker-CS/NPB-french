import type { SVGProps } from "react";

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
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
      <g transform="matrix(0 1 -1 0 20 4)">
        <path d="M8 0L8.394 6.657L12.325 1.27L9.058 7.083L15.277 4.677L9.386 7.801L15.919 9.139L9.273 8.582L14.046 13.239L8.757 9.178L10.254 15.676L8 9.4L5.746 15.676L7.243 9.178L1.954 13.239L6.727 8.582L0.081 9.139L6.614 7.801L0.723 4.677L6.942 7.083L3.675 1.27L7.606 6.657L8 0Z" fill="currentColor" />
      </g>
    </svg>
  );
}
