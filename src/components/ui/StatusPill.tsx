import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type StatusPillProps = {
  children: React.ReactNode;
  className?: string;
};

export function StatusPill({ children, className }: StatusPillProps) {
  return (
    <div className={cn("status-pill", fontMono.className, className)}>
      <span className="status-pill-dot" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
