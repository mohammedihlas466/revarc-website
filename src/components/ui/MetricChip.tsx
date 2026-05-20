import { fontDisplay, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type MetricChipProps = {
  label: string;
  value: string;
  className?: string;
};

export function MetricChip({ label, value, className }: MetricChipProps) {
  return (
    <div className={cn("metric-chip", className)}>
      <span className={cn("metric-chip-label", fontMono.className)}>{label}</span>
      <span className={cn("metric-chip-value", fontDisplay.className)}>{value}</span>
    </div>
  );
}
