import { method } from "@/content/site";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function HowItWorks() {
  return (
    <section
      id="method"
      className="relative z-30 border-t border-line px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionKicker>How it works</SectionKicker>
        <h2 className="mt-4 max-w-[10ch] font-display text-5xl font-bold uppercase leading-[0.9] text-bone md:text-7xl">
          A path, not a package.
        </h2>

        <div className="relative mt-20 grid gap-12 md:grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr]">
          <div className="relative hidden md:block" aria-hidden>
            <div className="absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-line" />
            <div className="absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-stitch" />
            <div className="absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 rotate-45 bg-stitch" />
          </div>

          <ol className="space-y-16 md:space-y-24">
            {method.map((step, index) => (
              <li
                key={step.n}
                className="grid items-start gap-6 md:grid-cols-[0.4fr_1fr]"
              >
                <div>
                  <p className="font-display text-7xl font-extrabold leading-none text-bone/15 md:text-8xl">
                    {step.n}
                  </p>
                  <div className="mt-4 h-px w-16 bg-stitch md:hidden" aria-hidden />
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-4xl font-semibold uppercase tracking-wide text-bone md:text-5xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed text-bone-dim md:text-xl">
                    {step.body}
                  </p>
                  {index < method.length - 1 ? (
                    <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
                      Next
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
