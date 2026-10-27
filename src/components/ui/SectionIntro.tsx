import type { ReactNode } from "react";
import { Eyebrow, type EyebrowTone } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

/*
 * Eyebrow + display heading + paragraph, the opening of almost every section (Figma "Frame 2147225364"
 * and its copies). Vertical gap 8; each part sits in a frame with 8/16 padding, so the text is inset
 * 16 px from the content column. Heading: HOOKRIDE 78/0.9 uppercase. Paragraph: Inter Medium 16.
 * - `center`: everything centred (offers, Pourquoi, Réparer ou remplacer, Besoin d'aide, partners)
 * - `start`: everything left-aligned (locations)
 * - `split`: heading left, paragraph bottom-right (services, insurance, articles, reviews)
 * Title strings keep Figma's manual line breaks ("\n").
 */

export type SectionIntroLayout = "center" | "start" | "split";

type SectionIntroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Replaces the paragraph when the right-hand side is not a paragraph (regions: a short list). */
  aside?: ReactNode;
  layout?: SectionIntroLayout;
  tone?: "light" | "dark";
  eyebrowTone?: EyebrowTone;
  /** id for the heading, so the section can use aria-labelledby. */
  titleId?: string;
  /** Per-section heading width from Figma (text box width). */
  titleClassName?: string;
  /** Per-section paragraph width and alignment from Figma. */
  descriptionClassName?: string;
  /** Paragraph colour when it differs from the tone default ("Nous venons à vous" uses muted-darker). */
  descriptionColor?: string;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  aside,
  layout = "center",
  tone = "light",
  eyebrowTone = "brand",
  titleId,
  titleClassName,
  descriptionClassName,
  descriptionColor,
  className,
}: SectionIntroProps) {
  const heading = (
    <h2
      id={titleId}
      className={cn(
        "px-4 py-2 font-display text-display whitespace-pre-line uppercase",
        tone === "dark" ? "text-snow" : "text-ink",
        layout === "center" && "text-center",
        titleClassName,
      )}
    >
      {title}
    </h2>
  );
  const paragraph = aside ?? (description ? (
    <p
      className={cn(
        "px-4 py-2 font-medium",
        descriptionColor ?? (tone === "dark" ? "text-muted-dark" : "text-muted"),
        layout === "center" && "text-center",
        descriptionClassName,
      )}
    >
      {description}
    </p>
  ) : null);

  return (
    <div className={cn("flex flex-col gap-2", layout === "center" ? "items-center" : "items-start", className)}>
      <div className="px-4 py-2">
        <Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>
      </div>
      {layout === "split" ? (
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-25">
          {heading}
          {paragraph}
        </div>
      ) : (
        <div className={cn("flex flex-col", layout === "center" ? "items-center" : "items-start")}>
          {heading}
          {paragraph}
        </div>
      )}
    </div>
  );
}
