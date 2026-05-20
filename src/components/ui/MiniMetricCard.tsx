import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type MiniMetricCardProps = {
  label: string;
  value: string;
  sub: string;
  statusTag?: string;
  isActive?: boolean;
  className?: string;
};

export function MiniMetricCard({
  label,
  value,
  sub,
  statusTag,
  isActive = false,
  className,
}: MiniMetricCardProps) {
  return (
    <article
      className={cn(
        "mini-metric-card",
        isActive && "mini-metric-card--active",
        className
      )}
      data-active={isActive ? "true" : "false"}
    >
      <p className={cn("mini-metric-label", fontMono.className)}>{label}</p>
      <p className={cn("mini-metric-value", fontDisplay.className)}>{value}</p>
      <p className={cn("mini-metric-sub", fontUi.className)}>{sub}</p>
      {statusTag ? (
        <span className={cn("status-tag-confirmed", fontMono.className)}>
          {statusTag}
        </span>
      ) : null}
    </article>
  );
}
