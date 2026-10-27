import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** 1280 px content column with the 80 px gutters of the 1440 frame, narrower gutters below `xl`. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto box-content max-w-site px-5 md:px-10 xl:px-20", className)}>{children}</div>;
}
