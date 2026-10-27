import Image from "next/image";
import { cn } from "@/lib/cn";

export type MediaSource = {
  /** Poster frame of the Figma video fill (exported from the .fig). */
  poster: string;
  /** MP4 of the Figma video fill; not supplied yet (PROGRESS.md, D1), so only the poster is shown. */
  video?: string;
  alt: string;
};

type BackgroundMediaProps = {
  media: MediaSource;
  sizes: string;
  /** Above the fold: load the poster eagerly with high priority. */
  priority?: boolean;
  className?: string;
};

/**
 * Figma VIDEO fill ("FILL" scale mode = object-cover): the poster, with the muted looping video on top
 * once supplied. With reduced motion the video is hidden and the poster stays.
 */
export function BackgroundMedia({ media, sizes, priority = false, className }: BackgroundMediaProps) {
  return (
    <>
      <Image
        src={media.poster}
        alt={media.alt}
        fill
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("object-cover", className)}
      />
      {media.video && (
        <video
          className={cn("absolute inset-0 size-full object-cover motion-reduce:hidden", className)}
          src={media.video}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      )}
    </>
  );
}
