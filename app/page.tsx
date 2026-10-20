import { Credibility } from "@/components/sections/Credibility";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Credibility />
      <Results />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
