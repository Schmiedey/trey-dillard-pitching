"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand/BrandMark";
import { nav } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "bg-void/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-bone focus:px-3 focus:py-2 focus:text-void"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-stitch focus-visible:outline-offset-4"
        >
          <BrandMark variant="nav" size="sm" />
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.26em] text-bone/70 transition-colors hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="px-5 py-2.5 text-[11px]">
            Get started
          </ButtonLink>
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3 w-6">
            <span
              className={cn(
                "absolute left-0 h-px w-6 bg-bone transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-6 bg-bone transition-opacity duration-300",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-6 bg-bone transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn(
          "flex h-[calc(100svh-64px)] flex-col justify-between bg-void px-5 pb-10 transition-opacity duration-300 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        hidden={!open}
      >
        <div className="mt-4">
          <BrandMark variant="lockup" size="lg" showDescriptor />
        </div>
        <ul className="mt-8 space-y-2">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-display text-5xl uppercase leading-none tracking-wide text-bone"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonLink href="/contact" className="w-full">
          Get started
        </ButtonLink>
      </nav>
    </header>
  );
}
