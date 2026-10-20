import { credibility, site } from "@/content/site";
import { BrandStripe } from "@/components/brand/BrandStripe";

export function Credibility() {
  return (
    <section
      id="credentials"
      aria-label="Credentials"
      className="relative z-30 border-y border-line bg-void/80"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-8 md:py-10 lg:px-12">
        <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-stitch">
              {site.shortName}
            </p>
            <p className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-bone md:text-3xl">
              Built from the path.
            </p>
          </div>
          <BrandStripe className="md:max-w-xs" />
        </div>
        <ul className="flex gap-10 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:gap-0 md:overflow-visible md:pb-0">
          {credibility.map((item, index) => (
            <li
              key={item.title}
              className="min-w-[220px] shrink-0 md:min-w-0 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <article
                className={
                  index === 0
                    ? ""
                    : "md:border-l md:border-line"
                }
              >
                <p className="font-display text-2xl font-semibold uppercase leading-none tracking-wide text-bone md:text-[1.65rem] lg:text-3xl">
                  {item.title}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                  {item.detail}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
