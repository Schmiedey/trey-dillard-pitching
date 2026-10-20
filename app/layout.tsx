import type { Metadata } from "next";
import {
  Big_Shoulders,
  IBM_Plex_Mono,
  Newsreader,
} from "next/font/google";
import { BrandRail } from "@/components/brand/BrandRail";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { site } from "@/content/site";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: "variable",
  axes: ["opsz"],
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif-family",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description:
    "Individualized pitching development, performance, and mentorship. Choose how to get started.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-svh bg-void font-serif text-bone antialiased">
        <div className="grain" />
        <BrandRail />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
