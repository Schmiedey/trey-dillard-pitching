"use client";

import { cn } from "@/lib/cn";

type Kind = "video" | "image" | "portrait" | "film";

type Props = {
  label: string;
  caption?: string;
  src?: string;
  kind?: Kind;
  alt?: string;
  className?: string;
};

export function MediaPlaceholder({
  label,
  caption,
  src,
  kind = "image",
  alt = "",
  className,
}: Props) {
  if (src) {
    if (kind === "video" || kind === "film") {
      return (
        <video
          className={cn("h-full w-full object-cover", className)}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          aria-label={alt || caption || label}
        />
      );
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || caption || label}
        className={cn("h-full w-full object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full overflow-hidden bg-void-2",
        className,
      )}
      aria-hidden={alt ? undefined : true}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
    >
      <div className="absolute inset-0 stadium-wash" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-void/90 via-void/50 to-transparent p-4 md:p-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/55">
            {label}
          </p>
          {caption ? (
            <p className="mt-1 font-serif text-sm text-bone/70">{caption}</p>
          ) : null}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-stitch">
          Media slot
        </span>
      </div>
    </div>
  );
}
