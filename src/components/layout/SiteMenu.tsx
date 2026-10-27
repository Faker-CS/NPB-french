"use client";

import { useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { contact, mainNav, primaryCta } from "@/data/site";

// Same glass treatment as the "button 2" master (1:8) so it reads over the hero video.
const roundButtonClasses =
  "flex size-14 shrink-0 cursor-pointer items-center justify-center rounded-full border border-field/25 bg-white/5 text-snow backdrop-blur-nav transition-[filter,background-color] hover:bg-white/15";

/**
 * Hamburger button and the menu it opens below `xl`, where the header nav pill doesn't fit.
 * Neither is designed in Figma (PROGRESS.md, D9): a modal <dialog> gives focus trapping, Escape
 * to close and focus return for free.
 */
export function SiteMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };
  // State is set here too, not only in onClose (Escape), so aria-expanded never waits on the queued close event.
  const close = () => {
    dialogRef.current?.close();
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={roundButtonClasses}
        aria-label="Ouvrir le menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={show}
      >
        <MenuIcon />
      </button>

      <dialog
        ref={dialogRef}
        id="site-menu"
        aria-label="Menu principal"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // A click on the backdrop targets the dialog element itself.
          if (event.target === event.currentTarget) close();
        }}
        className="m-0 ml-auto h-dvh max-h-none w-full max-w-md overflow-y-auto bg-night text-snow backdrop:bg-black/60 backdrop:backdrop-blur-nav"
      >
        <div className="flex min-h-full flex-col gap-10 px-6 pt-6 pb-10 sm:px-10">
          <div className="flex justify-end">
            <button type="button" className={roundButtonClasses} aria-label="Fermer le menu" onClick={close}>
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Navigation principale">
            <ul className="flex flex-col gap-4">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={close} className="font-display text-price uppercase transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col items-start gap-4">
            <ButtonLink href={primaryCta.href} onClick={close}>
              {primaryCta.label}
            </ButtonLink>
            <a href={contact.phoneHref} className="transition-colors hover:text-accent">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">
              {contact.email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
