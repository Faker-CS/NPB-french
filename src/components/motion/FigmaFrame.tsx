import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type FrameSize = { width: number; height: number };
export type NodeBox = { x: number; y: number; width: number; height: number };

/**
 * Absolute placement of a Figma child node, in % of its master frame, so the frame can be any size
 * (like a scaled Figma instance). Rotate an inner element with `rotateFromCorner` so that animated
 * translations stay in frame axes.
 */
export function placeNode(frame: FrameSize, node: NodeBox): CSSProperties {
  return {
    position: "absolute",
    left: `${(node.x / frame.width) * 100}%`,
    top: `${(node.y / frame.height) * 100}%`,
    width: `${(node.width / frame.width) * 100}%`,
    height: `${(node.height / frame.height) * 100}%`,
  };
}

/** Figma rotation: the angle pivots on the node's top-left corner. */
export function rotateFromCorner(degrees: number): CSSProperties {
  return { width: "100%", height: "100%", rotate: `${degrees}deg`, transformOrigin: "0 0" };
}

/** Converts a Figma offset (master px) to a translate % of the moving node's own size. */
export function offsetPercent(offset: number, nodeSize: number) {
  return `${(offset / nodeSize) * 100}%`;
}

type FigmaFrameProps = FrameSize & {
  /** Sizing classes: the frame keeps the master aspect ratio at any width. */
  className?: string;
  clip?: boolean;
  children: ReactNode;
};

/** A Figma component master as a fluid box: children use `placeNode` with the master's coordinates. */
export function FigmaFrame({ width, height, className, clip = false, children }: FigmaFrameProps) {
  return (
    <div className={cn("relative", clip && "overflow-hidden", className)} style={{ aspectRatio: `${width} / ${height}` }}>
      {children}
    </div>
  );
}
