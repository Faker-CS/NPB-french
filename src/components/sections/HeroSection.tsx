import { BackgroundMedia } from "@/components/ui/BackgroundMedia";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { bookingHref, hero } from "@/data/landing";

/*
 * Hero (Figma "hero section", 31:3598, 1440 × 800): video fill with a 20 % black overlay, radius 16.
 * Top-left (y 104): glass eyebrow + 78 px title in a 931 px column. Bottom row (y 669, 111 high):
 * CTAs left, intro (383 px text) right. The header overlays the top 104 px.
 */
export function HeroSection() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-200 flex-col overflow-hidden rounded-card text-snow"
    >
      <BackgroundMedia media={hero.media} sizes="100vw" priority className="-z-10" />
      <div className="absolute inset-0 -z-10 bg-black/20" aria-hidden="true" />

      <Container className="flex w-full flex-1 flex-col pt-26 pb-5">
        <div className="flex max-w-232.75 flex-col gap-2">
          <div className="px-4 py-2">
            <Eyebrow tone="glass" uppercase={false}>
              {hero.eyebrow}
            </Eyebrow>
          </div>
          <h1 id="hero-title" className="px-4 py-2 font-display text-display uppercase">
            {hero.title}
          </h1>
        </div>

        <div className="mt-auto flex flex-col-reverse gap-6 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-4 px-4 py-2">
            <ButtonLink href={bookingHref} arrow>
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={bookingHref} variant="ghost" tone="dark" arrow>
              {hero.secondaryCta}
            </ButtonLink>
          </div>
          <p className="px-4 py-2 font-medium lg:w-103.75">{hero.intro}</p>
        </div>
      </Container>
    </section>
  );
}
