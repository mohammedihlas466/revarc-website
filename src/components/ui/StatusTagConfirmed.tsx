import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type StatusTagConfirmedProps = {
  children: string;
  className?: string;
};

export function StatusTagConfirmed({
  children,
  className,
}: StatusTagConfirmedProps) {
  return (
    <span className={cn("status-tag-confirmed", fontMono.className, className)}>
      {children}
    </span>
  );
}
