"use client";

import { useMemo, useState } from "react";
import { filmRoom, media } from "@/content/site";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { cn } from "@/lib/cn";

export function FilmRoom() {
  const [time, setTime] = useState(18);
  const active = useMemo(() => {
    let current = filmRoom.checkpoints[0];
    for (const point of filmRoom.checkpoints) {
      if (time >= point.time) current = point;
    }
    return current;
  }, [time]);

  return (
    <section id="film" className="relative z-30 border-t border-line bg-void-2">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionKicker>Film room</SectionKicker>
            <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.9] text-bone md:text-7xl">
              Delivery under glass.
            </h2>
          </div>
          <p className="max-w-sm font-serif text-bone-dim">
            Sample analysis interface. Replace the clip in content — the overlay is already built for coaching.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)_280px]">
          <aside className="border border-line bg-void p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
              Checkpoints
            </p>
            <ol className="mt-5 space-y-1">
              {filmRoom.checkpoints.map((point, index) => (
                <li key={point.id}>
                  <button
                    type="button"
                    onClick={() => setTime(point.time)}
                    className={cn(
                      "flex w-full items-center justify-between px-3 py-3 text-left transition-colors",
                      active?.id === point.id
                        ? "bg-bone text-void"
                        : "text-bone/70 hover:bg-white/5 hover:text-bone",
                    )}
                  >
                    <span className="font-display text-sm uppercase tracking-wider">
                      {point.label}
                    </span>
                    <span className="font-mono text-[10px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          <div className="relative min-h-[280px] border border-line bg-void">
            <MediaPlaceholder
              kind="film"
              label={media.film.label}
              caption={media.film.caption}
              src={media.film.src}
              className="h-full min-h-[320px] lg:min-h-[520px]"
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-4 top-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/80">
                  {filmRoom.athlete}
                  <span className="ml-3 text-stitch">{filmRoom.pitch}</span>
                </p>
              </div>
              <div className="absolute right-4 top-4 text-right">
                <p className="font-display text-5xl font-extrabold leading-none text-bone md:text-6xl">
                  {filmRoom.velocity}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-flood">
                  MPH · Sample
                </p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={time}
                  onChange={(event) => {
                    setTime(Number(event.target.value));
                  }}
                  className="h-px flex-1 cursor-pointer appearance-none bg-line accent-stitch"
                  aria-label="Film timeline"
                />
                <span className="min-w-[7rem] text-right font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                  {active?.label}
                </span>
              </div>
              <div className="relative mt-3 h-2">
                {filmRoom.checkpoints.map((point) => (
                  <span
                    key={point.id}
                    className="absolute top-0 h-2 w-px bg-stitch"
                    style={{ left: `${point.time}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="border border-line bg-void p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
                Pitch metrics
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                {filmRoom.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                      {metric.label}
                    </dt>
                    <dd className="mt-1 font-display text-2xl uppercase text-bone">
                      {metric.value}
                      <span className="ml-1 text-sm text-ash">{metric.unit}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-stitch">
                Sample data
              </p>
            </div>
            <div className="flex-1 border border-line bg-void p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
                Coaching notes
              </p>
              <p className="mt-4 font-display text-xl uppercase text-bone">
                {active?.label}
              </p>
              <p className="mt-2 font-serif text-bone-dim">{active?.note}</p>
              <ul className="mt-6 space-y-3">
                {filmRoom.notes.map((note) => (
                  <li
                    key={note}
                    className="border-t border-line pt-3 font-serif text-sm leading-relaxed text-bone/70"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
