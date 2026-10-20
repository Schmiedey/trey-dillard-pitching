"use client";

import { useState } from "react";
import { results } from "@/content/site";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { cn } from "@/lib/cn";

export function Results() {
  const [active, setActive] = useState(0);
  const athlete = results[active];

  if (!athlete) return null;

  return (
    <section className="relative z-30 border-t border-line px-5 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionKicker>Results</SectionKicker>
            <h2 className="mt-4 max-w-[14ch] font-display text-5xl font-bold uppercase leading-[0.9] text-bone md:text-7xl">
              The work, documented.
            </h2>
          </div>
          <p className="max-w-sm font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
            Placeholder athletes — no invented results. Swap portraits, film, and metrics in content/site.ts.
          </p>
        </div>

        <div className="mt-12 flex gap-3 overflow-x-auto pb-2">
          {results.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "shrink-0 border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors",
                index === active
                  ? "border-bone bg-bone text-void"
                  : "border-line text-ash hover:text-bone",
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        <Reveal className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-[360px] sm:h-[460px]">
              <MediaPlaceholder
                kind="portrait"
                label={`${athlete.name.toUpperCase()}.JPG`}
                caption={athlete.role}
                src={athlete.portrait}
                className="h-full border border-line"
              />
            </div>
            <div className="h-[360px] sm:h-[460px]">
              <MediaPlaceholder
                kind="video"
                label={`${athlete.name.toUpperCase()}.MP4`}
                caption="Athlete film — placeholder"
                src={athlete.video}
                className="h-full border border-line"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between border border-line bg-void-2 p-7 md:p-10">
            <blockquote className="font-serif text-2xl leading-snug text-bone md:text-3xl">
              “{athlete.quote}”
            </blockquote>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                  Velocity
                </p>
                <p className="mt-3 font-display text-4xl uppercase text-bone">
                  {athlete.velo.before}
                  <span className="mx-2 text-stitch">→</span>
                  {athlete.velo.after}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                  {athlete.metric.label}
                </p>
                <p className="mt-3 font-display text-4xl uppercase text-bone">
                  {athlete.metric.value}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
