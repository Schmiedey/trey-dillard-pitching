import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type Variant = "nav" | "lockup" | "monogram" | "wordmark";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  showDescriptor?: boolean;
  href?: string;
  className?: string;
};

const tdSize: Record<Size, string> = {
  sm: "text-[15px] tracking-[0.06em]",
  md: "text-[17px] tracking-[0.08em]",
  lg: "text-2xl tracking-[0.1em] md:text-3xl",
};

const subSize: Record<Size, string> = {
  sm: "text-[7px] tracking-[0.36em]",
  md: "text-[8px] tracking-[0.38em]",
  lg: "text-[10px] tracking-[0.4em]",
};

const wordSize: Record<Size, string> = {
  sm: "text-[11px] tracking-[0.28em]",
  md: "text-[13px] tracking-[0.32em]",
  lg: "text-base tracking-[0.34em]",
};

function NavMark({ size }: { size: Size }) {
  return (
    <span className="group relative inline-flex flex-col pl-3 leading-none">
      <span
        className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-stitch via-stitch/50 to-transparent transition-opacity group-hover:via-stitch"
        aria-hidden
      />
      <span
        className={cn(
          "font-display font-extrabold text-bone transition-colors group-hover:text-bone",
          tdSize[size],
        )}
      >
        TD
      </span>
      <span
        className={cn(
          "mt-[5px] font-mono uppercase text-bone/45 transition-colors group-hover:text-bone/65",
          subSize[size],
        )}
      >
        Pitching
      </span>
    </span>
  );
}

function LockupMark({
  size,
  showDescriptor,
}: {
  size: Size;
  showDescriptor: boolean;
}) {
  return (
    <span className="inline-flex flex-col">
      <span className="relative inline-flex flex-col pl-3 leading-none">
        <span
          className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-stitch via-stitch/50 to-transparent"
          aria-hidden
        />
        <span
          className={cn("font-display font-extrabold text-bone", tdSize[size])}
        >
          TD
        </span>
        <span
          className={cn(
            "mt-[6px] font-mono uppercase text-bone/45",
            subSize[size],
          )}
        >
          Pitching
        </span>
      </span>
      {showDescriptor ? (
        <span className="mt-3 pl-3 font-mono text-[9px] uppercase tracking-[0.22em] text-ash">
          {site.descriptor}
        </span>
      ) : null}
    </span>
  );
}

function MonogramMark({ size }: { size: Size }) {
  return (
    <span
      className={cn(
        "font-display font-extrabold leading-none text-bone",
        tdSize[size],
      )}
      aria-label={site.shortName}
    >
      TD
    </span>
  );
}

export function BrandMark({
  variant = "lockup",
  size = "md",
  showDescriptor = false,
  href,
  className,
}: Props) {
  const content = (
    <span className={cn("inline-flex", className)}>
      {variant === "nav" ? <NavMark size={size} /> : null}
      {variant === "lockup" ? (
        <LockupMark size={size} showDescriptor={showDescriptor} />
      ) : null}
      {variant === "monogram" ? <MonogramMark size={size} /> : null}
      {variant === "wordmark" ? (
        <span className="leading-none">
          <span
            className={cn(
              "block font-display font-semibold uppercase text-bone",
              wordSize[size],
            )}
          >
            {site.shortName}
          </span>
          {showDescriptor ? (
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.24em] text-ash">
              {site.name}
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
