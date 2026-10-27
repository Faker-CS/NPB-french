import Image from "next/image";
import type { ReactNode } from "react";
import { BulletIcon, CheckIcon, PlusIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingHref, repairOrReplace as content } from "@/data/landing";
import { cn } from "@/lib/cn";

/*
 * "Réparer ou remplacer ?" — two night frames (Figma 31:3903 and 31:3917, 1440 × 800 each, the second
 * 6 px over the first), 85 px below the Pourquoi block.
 * 1. Centred dark intro at y 276 (accent eyebrow, snow title, muted-dark paragraph).
 * 2. Inset 24: "Group 8" (1392 × 651, clipped): left 576 px = repair card + photo, right 798 px = photo +
 *    replacement card (its last 11 px are clipped in Figma, kept on desktop); then 13 px lower the
 *    "Pas sûr ?" bar (88 px, radius 16) with "Prendre rendez-vous".
 * Cards: night-card fill, radius 8, padding 16; header = 36 px accent circle + HOOKRIDE 24 accent title;
 * rows = accent bullet + Inter Medium 16 muted-dark.
 */

function BulletList({ points }: { points: string[] }) {
  return (
    <ul className="flex flex-col">
      {points.map((point) => (
        <li key={point} className="flex items-center">
          <span className="flex shrink-0 px-2 py-1 text-accent-alt" aria-hidden="true">
            <BulletIcon />
          </span>
          <span className="px-2 py-1 font-medium text-muted-dark">{point}</span>
        </li>
      ))}
    </ul>
  );
}

function CardHeader({ icon, title, solid }: { icon: ReactNode; title: string; solid: boolean }) {
  return (
    <div className={cn("flex items-center", solid && "px-2")}>
      <span
        className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", solid ? "bg-accent-alt text-white" : "bg-accent-alt/20 text-accent-alt")}
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3 className="px-4 py-2 font-display text-card-display text-accent-alt">{title}</h3>
    </div>
  );
}

const subtitleClasses = "px-2 py-1 text-title font-semibold text-snow";

export function RepairOrReplaceSection() {
  const { repair, replace, unsure } = content;
  return (
    <section id="reparer-ou-remplacer" aria-labelledby="reparer-title" className="mt-21.25 bg-night text-snow">
      <div className="mx-auto flex max-w-360 flex-col">
        <div className="flex items-center justify-center px-5 py-24 md:px-10 xl:h-198.5 xl:py-0">
          <SectionIntro
            tone="dark"
            eyebrowTone="accent"
            titleId="reparer-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            className="max-w-232.75 xl:mt-1.5"
            descriptionClassName="xl:-mx-9 xl:whitespace-nowrap"
          />
        </div>

        <div className="flex flex-col gap-3.25 px-5 pb-6 md:px-10 xl:h-200 xl:px-6 xl:pt-6">
          <div className="flex flex-col gap-4 xl:h-162.75 xl:flex-row xl:justify-between xl:overflow-hidden">
            <div className="flex flex-col gap-4 xl:w-144">
              <article className="flex shrink-0 flex-col gap-4 rounded-button bg-night-card p-4">
                <CardHeader icon={<CheckIcon />} title={repair.title} solid />
                <div className="flex flex-col">
                  <p className={subtitleClasses}>{repair.subtitle}</p>
                  <BulletList points={repair.points} />
                </div>
                <BulletList points={[repair.duration]} />
              </article>
              <div className="relative aspect-[576/375] shrink-0 overflow-hidden rounded-card">
                <Image src={repair.image.src} alt={repair.image.alt} fill sizes="(min-width: 1280px) 576px, 100vw" className="object-cover" />
              </div>
            </div>

            <div className="flex flex-col gap-4 xl:w-199.5">
              <div className="relative aspect-[798/360] shrink-0 overflow-hidden rounded-card">
                <Image src={replace.image.src} alt={replace.image.alt} fill sizes="(min-width: 1280px) 798px, 100vw" className="object-cover" />
              </div>
              <article className="flex shrink-0 flex-col gap-4 rounded-button bg-night-card p-4">
                <CardHeader icon={<PlusIcon />} title={replace.title} solid={false} />
                <div className="flex flex-col gap-4 md:flex-row">
                  {replace.columns.map((column, index) => (
                    <div key={index} className="flex flex-col md:w-93.75">
                      <p className={subtitleClasses}>{column.subtitle}</p>
                      <BulletList points={column.points} />
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-card bg-night-card px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col py-1.75">
              <p className={subtitleClasses}>{unsure.title}</p>
              <p className="px-2 py-1 font-medium text-muted-dark">{unsure.text}</p>
            </div>
            <div className="px-4 py-2">
              <ButtonLink href={bookingHref} arrow>
                {content.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
