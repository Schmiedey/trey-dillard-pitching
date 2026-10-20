"use client";

import { philosophy } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section className="relative z-30 overflow-hidden px-5 py-28 md:px-8 md:py-36 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="max-w-[16ch] font-display text-[12vw] font-extrabold uppercase leading-[0.82] tracking-[-0.03em] text-bone sm:text-7xl md:text-8xl lg:text-[6.5rem]">
          {philosophy.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
          <Reveal>
            <p className="max-w-xl font-serif text-xl leading-relaxed text-bone-dim md:text-2xl">
              {philosophy.body}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-2">
              {philosophy.pillars.map((pillar) => (
                <li key={pillar.n} className="border-t border-line pt-4">
                  <p className="font-mono text-[10px] tracking-[0.28em] text-stitch">
                    {pillar.n}
                  </p>
                  <p className="mt-2 font-display text-xl uppercase tracking-wide text-bone">
                    {pillar.label}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
