import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type SourceCitationProps = {
  children: React.ReactNode;
  className?: string;
};

export function SourceCitation({ children, className }: SourceCitationProps) {
  return (
    <p className={cn("source-citation", fontMono.className, className)}>
      {children}
    </p>
  );
}
