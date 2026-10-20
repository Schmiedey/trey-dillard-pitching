import { development, developmentIntro, media } from "@/content/site";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { cn } from "@/lib/cn";

export function Development() {
  return (
    <section id="program" className="relative z-30 border-t border-line">
      <div className="relative overflow-hidden">
        <div className="stadium-wash absolute inset-0" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-void/20 via-void to-void"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionKicker className="text-flood/70">
                {developmentIntro.kicker}
              </SectionKicker>
              <h2 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.88] tracking-[-0.02em] text-bone md:text-7xl lg:text-8xl">
                {developmentIntro.headline.map((line, index) => (
                  <span
                    key={line}
                    className={cn(
                      "block",
                      index === 1 && "text-bone/35",
                    )}
                  >
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md font-serif text-lg leading-relaxed text-bone-dim md:text-xl">
                {developmentIntro.body}
              </p>
              <ul className="mt-8 grid grid-cols-3 gap-3">
                {development.map((area) => (
                  <li
                    key={area.id}
                    className="border border-line bg-void/60 px-3 py-4 backdrop-blur-sm md:px-4"
                  >
                    <p className="font-mono text-[10px] tracking-[0.24em] text-stitch">
                      {area.index}
                    </p>
                    <p className="mt-2 font-display text-sm uppercase leading-tight tracking-wide text-bone md:text-base">
                      {area.kicker}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {development.map((area, index) => (
          <article
            key={area.id}
            className={cn(
              "border-t border-line",
              area.tone === "clay" &&
                "bg-gradient-to-br from-clay/15 via-void to-void",
              area.tone === "stitch" && "bg-void-2",
              area.tone === "void" && "bg-void",
            )}
          >
            <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8 md:py-24 lg:px-12">
              <Reveal>
                <p className="font-mono text-[11px] tracking-[0.32em] text-stitch">
                  {area.index} / {area.kicker}
                </p>
                <h3 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.9] text-bone md:text-6xl">
                  {area.title}
                </h3>
                <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-bone-dim">
                  {area.body}
                </p>
                <div className="mt-10 inline-flex flex-col border-l-2 border-stitch pl-5">
                  <p className="font-display text-4xl font-extrabold uppercase leading-none text-bone md:text-5xl">
                    {area.metric.value}
                    <span className="ml-2 text-lg tracking-[0.2em] text-bone/50">
                      {area.metric.unit}
                    </span>
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                    {area.metric.note}
                  </p>
                </div>
              </Reveal>
              <Reveal
                delay={0.1}
                className="h-[52vw] max-h-[420px] min-h-[240px] md:h-[420px]"
              >
                <MediaPlaceholder
                  label={media.training[index]?.label ?? "TRAINING.JPG"}
                  caption={media.training[index]?.caption}
                  src={media.training[index]?.src}
                  kind={area.tone === "stitch" ? "film" : "image"}
                  className={cn(
                    "h-full border border-line",
                    index === 2 && "md:ml-12",
                    index === 1 && "md:-ml-6",
                  )}
                />
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
