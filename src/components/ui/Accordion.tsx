"use client";

import { motion } from "motion/react";
import { useId, useState, type ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/ArrowButton";
import { faqChevron, faqTransition } from "@/lib/motion";
import { cn } from "@/lib/cn";

/*
 * FAQ item (Figma component "FaQ" 1:2096): faq grey at 40 %, radius 16, padding 16. Open (1:2097):
 * question + answer, chevron pointing up. Closed (1:2107): question only, chevron pointing down.
 * Figma toggles on click with Smart Animate, 500 ms cubic-bezier(.976,-.002,0,.995).
 * Question: Inter Medium 18/1.3 across the row, answer: Inter Medium 16/1.3 in a 470 px column (the French
 * overrides switch Manrope to Inter). Figma keeps closed questions on one line (auto width, the last one
 * truncated); here long questions wrap instead (PROGRESS.md, D12).
 */

type AccordionItemProps = {
  question: ReactNode;
  answer: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export function AccordionItem({ question, answer, defaultOpen = false, className }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className={cn("rounded-card bg-faq/40 p-4", className)}>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="group flex w-full cursor-pointer items-start justify-between rounded-button text-left"
        >
          <span className="flex-1 px-4 py-2 text-title leading-faq font-medium text-ink uppercase">{question}</span>
          <motion.span
            className="shrink-0 transition-[filter] group-hover:brightness-90"
            initial={false}
            animate={{ rotate: open ? faqChevron.open : faqChevron.closed }}
            transition={faqTransition}
          >
            <ArrowIcon variant="brand" />
          </motion.span>
        </button>
      </h3>
      {/* Always mounted so aria-controls resolves; inert hides the collapsed answer from focus and assistive tech. */}
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        className="overflow-hidden"
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={faqTransition}
      >
        <p className="max-w-117.5 px-4 py-2 leading-faq font-medium text-muted">{answer}</p>
      </motion.div>
    </div>
  );
}
