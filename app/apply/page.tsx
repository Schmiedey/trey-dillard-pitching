import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply/ApplyForm";
import { BrandMark } from "@/components/brand/BrandMark";
import { apply } from "@/content/site";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply for Trey Dillard Pitching coaching.",
};

export default function ApplyPage() {
  return (
    <main id="main" className="px-5 pb-24 pt-28 md:px-8 md:pt-32 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <BrandMark variant="lockup" size="md" />
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.32em] text-stitch">
            {apply.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-6xl font-extrabold uppercase leading-[0.85] text-bone md:text-8xl">
            {apply.headline}
          </h1>
          <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-bone-dim">
            {apply.body}
          </p>
        </div>
        <ApplyForm />
      </div>
    </main>
  );
}
