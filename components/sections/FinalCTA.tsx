import { finalCta, site } from "@/content/site";
import { BrandMark } from "@/components/brand/BrandMark";
import { BrandWatermark } from "@/components/brand/BrandWatermark";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCTA() {
  return (
    <section className="relative z-30 overflow-hidden border-t border-line">
      <div className="stadium-wash absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void/40 to-void" />
      <BrandWatermark
        text="TD PITCHING"
        className="absolute -bottom-8 left-0 whitespace-nowrap text-[18vw] md:text-[12rem]"
      />
      <div className="relative mx-auto flex min-h-[80svh] max-w-[1440px] flex-col items-start justify-center px-5 py-28 md:px-8 md:py-36 lg:px-12">
        <BrandMark variant="wordmark" size="lg" />
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-flood/80">
          {site.tagline}
        </p>
        <h2 className="mt-8 max-w-[12ch] font-display text-[14vw] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] text-bone sm:text-8xl md:text-9xl lg:text-[9rem]">
          {finalCta.headline}
        </h2>
        <p className="mt-8 max-w-lg font-serif text-xl text-bone-dim">
          {finalCta.body}
        </p>
        <div className="mt-10">
          <ButtonLink href="/contact" className="px-8 py-4 text-sm">
            {finalCta.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
