import Image from "next/image";
import { CentreSearch } from "@/components/sections/CentreSearch";
import { LocationsMap } from "@/components/sections/LocationsMap";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { locations } from "@/data/landing";

// Avatar stack ("Group 1", 31:3725): three 36 px circles at x 0 / 18 / 38, clipped to 74 px.
const avatarOffsets = ["left-0", "left-4.5", "left-9.5"];

/*
 * Locations (Figma "Frame 2147225375", 31:3702, 1284 × 622, 104 px below the offers).
 * Left (550 px): left-aligned intro (491 px), then 50 px lower the search row and the avatar row.
 * Right: the 596 × 622 interactive map, 138 px gap.
 */
export function LocationsSection() {
  return (
    <section id="centres" aria-labelledby="centres-title" className="mt-26">
      <Container>
        <div className="flex flex-col gap-12 xl:-mr-1 xl:flex-row xl:items-start xl:justify-between xl:gap-34.5">
          <div className="flex flex-col gap-12.5 xl:mt-0.75 xl:w-137.5">
            <SectionIntro
              layout="start"
              titleId="centres-title"
              eyebrow={locations.eyebrow}
              title={locations.title}
              description={locations.description}
              className="xl:w-122.75"
            />
            <div className="flex flex-col gap-4">
              <CentreSearch label={locations.searchLabel} cta={locations.searchCta} />
              <div className="flex items-center gap-2.5 px-4 py-2">
                <div className="relative h-9 w-18.5 shrink-0 overflow-hidden" aria-hidden="true">
                  {locations.avatars.map((src, index) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={36}
                      height={36}
                      className={`absolute top-0 size-9 rounded-full object-cover ${avatarOffsets[index]}`}
                    />
                  ))}
                </div>
                <p className="font-medium text-brand uppercase">{locations.count}</p>
              </div>
            </div>
          </div>

          <LocationsMap pinLabel={locations.pinLabel} className="w-full xl:w-149" />
        </div>
      </Container>
    </section>
  );
}
