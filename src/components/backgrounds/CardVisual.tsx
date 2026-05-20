import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CardVisualProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Right-bleed atmospheric slot for bento cards (Design System §07).
 */
export function CardVisual({ children, className }: CardVisualProps) {
  return (
    <div className={cn("card-visual", className)} aria-hidden="true">
      {children}
    </div>
  );
}
