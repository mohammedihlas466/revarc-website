import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type ServiceTagProps = {
  children: string;
  className?: string;
};

export function ServiceTag({ children, className }: ServiceTagProps) {
  return (
    <span className={cn("service-tag", fontMono.className, className)}>
      {children}
    </span>
  );
}
