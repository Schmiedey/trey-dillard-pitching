import { faq } from "@/content/site";
import { Accordion } from "@/components/ui/Accordion";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function FAQ() {
  return (
    <section className="relative z-30 border-t border-line px-5 py-24 md:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionKicker>FAQ</SectionKicker>
        <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.9] text-bone md:text-7xl">
          Straight answers.
        </h2>
        <div className="mt-12">
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  );
}
