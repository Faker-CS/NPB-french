"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SearchField } from "@/components/ui/FormFields";
import { regions } from "@/data/landing";

/** Lower-case, accent-free text so "orleans" finds "Orléans". */
const normalise = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();

const centres = regions.flatMap((region) => region.cities.map((city) => ({ city, region: region.name })));

type CentreSearchProps = {
  label: string;
  cta: string;
};

/*
 * Centre search (Figma "Frame 2147225373", 31:3718): 358 px field + 152 px "Rechercher", gap 8.
 * No backend (PROGRESS.md, D10): it matches the centres listed in "Où nous intervenons" and
 * announces the result in a polite live region (not designed in Figma; plain muted text).
 */
export function CentreSearch({ label, cta }: CentreSearchProps) {
  const id = useId();
  const [result, setResult] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = normalise(String(new FormData(event.currentTarget).get("centre") ?? ""));
    if (!query) {
      setResult("");
      return;
    }
    const found = centres.filter(({ city, region }) => normalise(city).includes(query) || normalise(region).includes(query));
    setResult(
      found.length
        ? `${found.length} centre${found.length > 1 ? "s" : ""} : ${found.map(({ city }) => city).join(", ")}.`
        : "Aucun centre trouvé pour cette recherche.",
    );
  };

  return (
    <form role="search" onSubmit={onSubmit} className="flex flex-col gap-2 px-4 py-2" aria-describedby={`${id}-result`}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <SearchField label={label} name="centre" className="sm:w-89.5" />
        <Button type="submit" strong className="sm:w-38">
          {cta}
        </Button>
      </div>
      <p id={`${id}-result`} role="status" className="font-medium text-muted empty:hidden">
        {result}
      </p>
    </form>
  );
}
