import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-bone text-void hover:bg-white hover:shadow-[0_0_40px_rgba(243,226,176,0.18)]",
  secondary:
    "border border-bone/25 text-bone hover:border-bone hover:bg-bone/5",
  ghost: "text-bone/70 hover:text-bone",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-3 px-6 py-3.5 font-display text-[13px] font-semibold tracking-[0.22em] uppercase transition-[color,background,border,box-shadow] duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
