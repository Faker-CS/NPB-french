import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { coverage, regions } from "@/data/landing";

/*
 * "Où nous intervenons" (Figma "Frame 2147225453", 31:4201, 1280 × 1405, 34 px below the articles).
 * Split intro with a three-line list on the right (muted); two rows of three 416 × 473 region cards
 * (photo + 20 % black, radius 16, bottom fade "Rectangle 20": black 0 → 100 % at 20 % with an 9.8 px
 * background blur, 128 px), region name (Inter Semi Bold 16, cyan), cities (Inter Medium 14 white with a
 * 10 px cyan dot, 125 px each, gap 4). Rows 40 px apart; ghost CTA bottom-right.
 */
export function CoverageSection() {
  return (
    <section id="regions" aria-labelledby="regions-title" className="mt-8.5">
      <Container className="flex flex-col gap-10">
        <SectionIntro
          layout="split"
          titleId="regions-title"
          eyebrow={coverage.eyebrow}
          title={coverage.title}
          titleClassName="lg:max-w-150.5"
          aside={
            // 174 px column; the middle item is padded 5 px instead of 16 in Figma so it fits.
            <ul className="flex flex-col font-medium whitespace-nowrap text-muted lg:w-43.5">
              {coverage.highlights.map((item, index) => (
                <li key={item} className={index === 1 ? "px-4 py-2 lg:px-1.25" : "px-4 py-2"}>
                  {item}
                </li>
              ))}
            </ul>
          }
        />

        <ul className="grid gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <li key={region.name}>
              <article className="relative isolate flex aspect-[416/473] flex-col justify-end overflow-hidden rounded-card p-4">
                <Image src={coverage.images[region.name]} alt="" fill sizes="(min-width: 1024px) 416px, (min-width: 768px) 50vw, 100vw" className="-z-20 object-cover" />
                <span className="absolute inset-0 -z-10 bg-black/20" aria-hidden="true" />
                <span
                  className="absolute inset-x-0 bottom-0 -z-10 h-[27.06%] bg-linear-to-b from-black/0 to-black/20 backdrop-blur-pill"
                  aria-hidden="true"
                />
                <h3 className="self-start px-2 py-1 font-semibold text-accent">{region.name}</h3>
                <ul className="flex flex-wrap gap-1">
                  {region.cities.map((city) => (
                    <li key={city} className="flex w-31.25 items-center gap-2.5 p-2 text-eyebrow font-medium text-white">
                      <span className="size-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {city}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <ButtonLink href="#centres" variant="ghost" arrow>
            {coverage.cta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
