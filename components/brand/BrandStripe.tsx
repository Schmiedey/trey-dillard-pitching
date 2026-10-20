import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

export function BrandStripe({ className }: Props) {
  return (
    <div
      className={cn("flex items-center gap-4", className)}
      aria-hidden
    >
      <span className="h-px w-10 bg-stitch" />
      <span className="h-1.5 w-1.5 bg-stitch" />
      <span className="h-px flex-1 max-w-32 bg-gradient-to-r from-line to-transparent" />
    </div>
  );
}
