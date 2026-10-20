import { programs } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { cn } from "@/lib/cn";

export function Programs() {
  const featured = programs.find((program) => program.featured);
  const rest = programs.filter((program) => !program.featured);

  return (
    <section className="relative z-30 border-t border-line px-5 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionKicker>Programs</SectionKicker>
        <h2 className="mt-4 max-w-[14ch] font-display text-5xl font-bold uppercase leading-[0.9] text-bone md:text-7xl">
          Choose the work.
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {featured ? (
            <Reveal className="lg:col-span-7">
              <article className="relative flex h-full flex-col justify-between overflow-hidden border border-stitch/50 bg-void-2 p-7 md:p-10">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-stitch/12 via-transparent to-transparent"
                  aria-hidden
                />
                <div className="relative z-10">
                  {featured.badge ? (
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-flood">
                      {featured.badge}
                    </p>
                  ) : null}
                  <h3 className="mt-4 max-w-[14ch] font-display text-4xl font-bold uppercase leading-[0.92] text-bone md:text-5xl lg:text-6xl">
                    {featured.name}
                  </h3>
                  <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-bone-dim">
                    {featured.summary}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {featured.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/80"
                      >
                        <span className="text-stitch">/</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative z-10 mt-10">
                  <ButtonLink href="/contact">Get started</ButtonLink>
                </div>
              </article>
            </Reveal>
          ) : null}

          <div className="grid gap-6 lg:col-span-5">
            {rest.map((program, index) => (
              <Reveal key={program.id} delay={0.08 * (index + 1)}>
                <article
                  className={cn(
                    "flex h-full flex-col border border-line bg-void-2 p-7",
                  )}
                >
                  <h3 className="font-display text-3xl font-semibold uppercase leading-none text-bone">
                    {program.name}
                  </h3>
                  <p className="mt-4 font-serif text-base leading-relaxed text-bone-dim">
                    {program.summary}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {program.includes.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink href="/contact" variant="secondary">
                      Get started
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
