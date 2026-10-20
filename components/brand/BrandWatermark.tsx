import { cn } from "@/lib/cn";

type Props = {
  text?: string;
  className?: string;
};

export function BrandWatermark({ text = "TD", className }: Props) {
  return (
    <p
      aria-hidden
      className={cn(
        "pointer-events-none select-none font-display font-extrabold uppercase leading-none text-bone/[0.04]",
        className,
      )}
    >
      {text}
    </p>
  );
}
