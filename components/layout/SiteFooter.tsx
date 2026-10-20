import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <BrandMark variant="lockup" size="md" showDescriptor />
            <p className="mt-5 font-serif text-sm leading-relaxed text-ash">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 md:justify-end">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash hover:text-bone"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-mono text-[10px] uppercase tracking-[0.24em] text-stitch hover:text-bone"
            >
              Get started
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-display text-4xl font-extrabold uppercase tracking-[0.12em] text-bone/10 md:text-5xl">
            TD
          </p>
        </div>
      </div>
    </footer>
  );
}
