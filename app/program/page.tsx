import type { Metadata } from "next";
import { Development } from "@/components/sections/Development";
import { Programs } from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: "Program",
  description:
    "Pitching development programs — velocity, command, mental performance, and complete mentorship.",
};

export default function ProgramPage() {
  return (
    <main id="main" className="pt-20 md:pt-24">
      <Development />
      <Programs />
    </main>
  );
}
