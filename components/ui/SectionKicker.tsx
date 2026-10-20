import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
  branded?: boolean;
};

export function SectionKicker({
  children,
  className,
  branded = true,
}: Props) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.32em] text-ash",
        className,
      )}
    >
      {branded ? (
        <>
          <span className="text-stitch">{site.shortName.split(" ")[0]}</span>
          <span className="mx-2 text-line">/</span>
        </>
      ) : null}
      {children}
    </p>
  );
}
