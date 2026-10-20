import { hero } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-topline">TD / PRIVATE PITCHING DEVELOPMENT</p>
        <h1 className="hero-title">
          Become a <span>complete</span> pitcher<span className="title-period">.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">{hero.body}</p>
          <div className="hero-actions">
            <ButtonLink href={hero.primary.href}>{hero.primary.label} <span aria-hidden="true">↗</span></ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="secondary">{hero.secondary.label}</ButtonLink>
          </div>
        </div>
        <div className="hero-footer" aria-hidden="true">
          <span>INTENT. EXECUTION. REPEAT.</span>
          <span>BUILT FOR THE NEXT LEVEL</span>
        </div>
      </div>
    </section>
  );
}
