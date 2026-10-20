import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Choose your next step with Trey Dillard Pitching: book an evaluation or explore the Mental Dugout.",
};

export default function ContactPage() {
  return (
    <main id="main" className="px-5 pb-24 pt-32 md:px-8 md:pb-32 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:pt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-stitch">
            TD Pitching / Get started
          </p>
          <h1 className="mt-6 max-w-[12ch] font-display text-6xl font-extrabold uppercase leading-[0.86] tracking-tight text-bone md:text-7xl xl:text-8xl">
            Start where you are<span className="text-stitch">.</span>
          </h1>
          <p className="mt-7 max-w-lg font-serif text-lg leading-relaxed text-bone-dim">
            Choose the path that fits you. Book a conversation about your goals,
            or explore the Mental Dugout first.
          </p>
        </div>

        <div className="grid gap-4">
          <section className="flex flex-col border border-stitch/50 bg-void-2 p-7 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-stitch">
              01 / Talk it through
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none text-bone md:text-5xl">
              Book an evaluation
            </h2>
            <p className="mt-4 max-w-md font-serif text-base leading-relaxed text-bone-dim md:text-lg">
              Schedule a call to discuss your goals, current challenges, and what
              your next step could look like.
            </p>
            <div className="mt-auto pt-6">
              <ButtonLink href="/eval" className="w-full sm:w-auto">
                View available times <span aria-hidden="true">↗</span>
              </ButtonLink>
            </div>
          </section>

          <section className="flex flex-col border border-line bg-void-2 p-7 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              02 / Explore first
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none text-bone md:text-5xl">
              Mental Dugout
            </h2>
            <p className="mt-4 max-w-md font-serif text-base leading-relaxed text-bone-dim md:text-lg">
              Take a look at the Mental Dugout and see whether it is the right
              place for you to begin.
            </p>
            <div className="mt-auto pt-6">
              <ButtonLink href="/apply" variant="secondary" className="w-full sm:w-auto">
                Explore the Dugout <span aria-hidden="true">↗</span>
              </ButtonLink>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
