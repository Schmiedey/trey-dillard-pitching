"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

type Item = { q: string; a: string };

type Props = {
  items: Item[];
};

export function Accordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <li key={item.q} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-baseline justify-between gap-6 py-6 text-left md:py-7"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="font-display text-2xl font-medium uppercase tracking-[0.04em] text-bone md:text-[2rem]">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "font-mono text-xs tracking-[0.2em] text-stitch transition-transform duration-300",
                    isOpen ? "rotate-45" : "",
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 font-serif text-lg leading-relaxed text-bone-dim">
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
