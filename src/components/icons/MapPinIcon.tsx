import type { SVGProps } from "react";

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M6 4.5C5.172 4.5 4.5 5.172 4.5 6C4.5 6.828 5.172 7.5 6 7.5C6.828 7.5 7.5 6.828 7.5 6C7.5 5.172 6.828 4.5 6 4.5ZM6 8.5C4.62 8.5 3.5 7.381 3.5 6C3.5 4.619 4.62 3.5 6 3.5C7.38 3.5 8.5 4.619 8.5 6C8.5 7.381 7.38 8.5 6 8.5ZM6 0C2.687 0 0 2.687 0 6C0 8.509 5.002 16.005 6 16C6.982 16.005 12 8.475 12 6C12 2.687 9.313 0 6 0Z" fillRule="evenodd" fill="currentColor" />
    </svg>
  );
}
