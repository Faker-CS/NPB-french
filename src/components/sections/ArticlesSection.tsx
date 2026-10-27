import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { articles } from "@/data/landing";

/*
 * Articles (Figma "Frame 2147225452", 31:4129, 1280 × 937, 104 px below the referral card).
 * Split intro (paragraph 251 px); 40 px lower three 416 × 518 cards (surface-alt, radius 16, padding 16,
 * gap 16): "Article 0X" (brand), category (muted), title (Inter Semi Bold 18), excerpt, then a
 * 384 × 313 photo (radius 8) with a white "Lire l'article →" pill 12 px from its bottom-right corner.
 * "Voir tous les articles" (ghost) bottom-right, 40 px below.
 */
export function ArticlesSection() {
  return (
    <section id="blog" aria-labelledby="blog-title" className="mt-26">
      <Container className="flex flex-col gap-10">
        <SectionIntro
          layout="split"
          titleId="blog-title"
          eyebrow={articles.eyebrow}
          title={articles.title}
          description={articles.description}
          titleClassName="lg:max-w-150.5"
          descriptionClassName="lg:max-w-70.75"
        />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.items.map((item) => (
            <li key={item.label}>
              <article className="flex h-full flex-col justify-center gap-4 rounded-card bg-surface-alt p-4">
                <div className="flex flex-col gap-4">
                  <p className="self-start px-2 py-1 font-medium text-brand">{item.label}</p>
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-0.75">
                      <p className="self-start px-2 py-1 font-medium text-muted">{item.category}</p>
                      <h3 className="px-2 py-1 text-title font-semibold text-ink">{item.title}</h3>
                    </div>
                    <p className="p-2 font-medium text-muted">{articles.excerpt}</p>
                  </div>
                </div>
                <div className="relative flex aspect-[384/313] items-end justify-end overflow-hidden rounded-button p-3">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <a
                    href="#blog"
                    aria-label={`${articles.readMore.replace(" →", "")} : ${item.title}`}
                    className="relative rounded-button bg-white p-2 text-chip font-semibold text-brand transition-colors hover:bg-mist"
                  >
                    {articles.readMore}
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="flex justify-end">
          <ButtonLink href="#blog" variant="ghost" arrow>
            {articles.all}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
