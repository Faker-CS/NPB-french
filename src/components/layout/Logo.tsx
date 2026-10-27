import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Above the fold (header): load eagerly. */
  eager?: boolean;
};

/** Ness Pare-Brise logo (Figma "image 7", 120 × 66). */
export function Logo({ className, eager = false }: LogoProps) {
  return (
    <Image
      src="/images/logo-npb.webp"
      alt="Ness Pare-Brise"
      width={120}
      height={66}
      loading={eager ? "eager" : "lazy"}
      className={cn("h-16.5 w-30", className)}
    />
  );
}
