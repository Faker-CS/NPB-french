import Image from "next/image";
import { GoogleIcon, StarIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

/*
 * Review card (Figma component "review card" 1:2017, 308 × 250): mist fill, radius 16, padding 8, gap 32.
 * It grows with the French quote (3 lines); on desktop the 258 px carousel clips its bottom padding, as in Figma.
 * Header: 56 px avatar (in a 76 px frame) with a 24 px white Google badge on its corner, name (Inter Extra
 * Bold 18/1) and date (muted). Quote (Inter Medium 16). Rating: five 24 px stars, gap 8 (star / star-off).
 */

type ReviewCardProps = {
  quote: string;
  author: string;
  date: string;
  rating: number;
  avatar: string;
};

export function ReviewCard({ quote, author, date, rating, avatar }: ReviewCardProps) {
  return (
    <figure className="flex min-h-62.5 w-77 shrink-0 flex-col gap-8 rounded-card bg-mist p-2">
      <figcaption className="flex items-center">
        <span className="relative size-19 shrink-0 p-2.5">
          <Image src={avatar} alt="" width={56} height={56} className="size-14 rounded-full object-cover" />
          <span className="absolute top-13 left-12.5 flex size-6 items-center justify-center rounded-full bg-white" aria-hidden="true">
            <GoogleIcon />
          </span>
        </span>
        <span className="flex flex-col">
          <span className="px-4 py-1 text-title leading-none font-extrabold text-ink">{author}</span>
          <span className="px-4 py-1 font-medium text-muted">{date}</span>
        </span>
      </figcaption>
      <blockquote className="px-4 py-2 font-medium text-ink">{quote}</blockquote>
      <p className="flex gap-2 px-4 py-2" role="img" aria-label={`Note : ${rating} sur 5`}>
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} className={cn(index < rating ? "text-star" : "text-star-off")} />
        ))}
      </p>
    </figure>
  );
}
