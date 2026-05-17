import { cn } from "@/lib/cn";
import { TYPE_COLORS, TYPE_FR } from "@/lib/constants";

type TypeBadgeProps = {
  type: string;
  small?: boolean;
  className?: string;
};

export function TypeBadge({ type, small = false, className }: TypeBadgeProps) {
  const color = TYPE_COLORS[type] ?? "#9FA19F";
  return (
    <span
      className={cn(
        "inline-block rounded-badge font-semibold uppercase tracking-wide text-white",
        small ? "px-2 py-0.5 text-[9px]" : "px-3 py-1 text-[10px]",
        className,
      )}
      style={{ backgroundColor: color }}
    >
      {TYPE_FR[type] ?? type}
    </span>
  );
}
