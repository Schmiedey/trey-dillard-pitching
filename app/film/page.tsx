import type { Metadata } from "next";
import { FilmRoom } from "@/components/sections/FilmRoom";

export const metadata: Metadata = {
  title: "Film",
  description:
    "Film-based pitching analysis — delivery checkpoints, metrics, and coaching notes.",
};

export default function FilmPage() {
  return (
    <main id="main" className="pt-20 md:pt-24">
      <FilmRoom />
    </main>
  );
}
