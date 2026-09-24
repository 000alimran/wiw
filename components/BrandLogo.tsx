import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BrandLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid size-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-limebrand shadow-sm">
        <TrendingUp className="size-5" strokeWidth={2.4} />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-sm font-extrabold tracking-[-0.03em]">WEALTH IN</span>
          <span className="block text-sm font-extrabold tracking-[-0.03em] text-limebrand">WHISPERS</span>
        </span>
      )}
    </Link>
  );
}
