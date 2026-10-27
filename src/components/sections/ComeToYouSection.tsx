import { BackgroundMedia } from "@/components/ui/BackgroundMedia";
import { ButtonLink } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingHref, comeToYou } from "@/data/landing";

/*
 * "Nous venons à vous" (Figma "Group 7", 31:3870, 1360 × 759 at x 80, 104 px below the steps).
 * Dark teal panel "Frame 139" (1145 × 667 at 215 / 92) bleeding to the frame's right edge; padding
 * 40/80/40, a 475 px right-hand column: intro (muted-darker paragraph), three chips (teal chip fill,
 * 1 px chip-line border, brand dot, Inter Semi Bold 14/20 cream), "Prendre rendez-vous".
 * The portrait video fill "Rectangle 14" (726 × 708 at 0 / 0) sits on top of the panel's left part.
 */
export function ComeToYouSection() {
  return (
    <section id="a-domicile" aria-labelledby="domicile-title" className="mt-26">
      <div className="relative mx-auto max-w-360 xl:h-189.75 xl:pl-20">
        <div className="relative aspect-[726/708] w-full overflow-hidden xl:absolute xl:top-0 xl:left-20 xl:z-10 xl:w-181.5">
          <BackgroundMedia media={comeToYou.media} sizes="(min-width: 1280px) 726px, 100vw" />
        </div>

        <div className="flex justify-end bg-teal-night px-5 py-10 md:px-10 xl:absolute xl:top-23 xl:right-0 xl:h-166.75 xl:w-286.25 xl:pr-20 xl:pl-2.5">
          <div className="flex w-full flex-col gap-4 xl:w-118.75">
            <SectionIntro
              layout="start"
              tone="dark"
              titleId="domicile-title"
              eyebrow={comeToYou.eyebrow}
              title={comeToYou.title}
              description={comeToYou.description}
              descriptionColor="text-muted-darker"
            />
            <ul className="flex flex-col items-start gap-2 px-4 py-2">
              {comeToYou.chips.map((chip) => (
                <li
                  key={chip}
                  className="flex items-center gap-2 rounded-full border border-chip-line bg-teal-chip py-2 pr-4 pl-4.25 text-chip font-semibold text-cream"
                >
                  <span className="size-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  {chip}
                </li>
              ))}
            </ul>
            <div className="px-4 py-2">
              <ButtonLink href={bookingHref} arrow>
                {comeToYou.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
