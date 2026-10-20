import type { Metadata } from "next";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Philosophy } from "@/components/sections/Philosophy";

export const metadata: Metadata = {
  title: "Method",
  description:
    "How Trey Dillard Pitching evaluates, builds, coaches, and develops complete pitchers.",
};

export default function MethodPage() {
  return (
    <main id="main" className="pt-20 md:pt-24">
      <Philosophy />
      <HowItWorks />
    </main>
  );
}
