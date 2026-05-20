import { RevArcBorderGlow } from "@/components/ui/RevArcBorderGlow";
import { cn } from "@/lib/utils";
import { fontDisplay } from "@/lib/fonts";
import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  colSpan?: 4 | 5 | 7 | 12;
  ghostNumeral?: string;
  borderGlow?: boolean;
  "aria-labelledby"?: string;
};

export function BentoCard({
  children,
  className,
  colSpan = 12,
  ghostNumeral,
  borderGlow = false,
  "aria-labelledby": ariaLabelledBy,
}: BentoCardProps) {
  const card = (
    <article
      className={cn("bento-card", className)}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="bento-card-inner">{children}</div>
      {ghostNumeral ? (
        <span
          className={cn("card-number", fontDisplay.className)}
          aria-hidden="true"
        >
          {ghostNumeral}
        </span>
      ) : null}
    </article>
  );

  if (!borderGlow) {
    return (
      <div
        className={cn(
          "bento-card-slot",
          colSpan === 7 && "bento-card-slot--7",
          colSpan === 5 && "bento-card-slot--5",
          colSpan === 4 && "bento-card-slot--4",
          colSpan === 12 && "bento-card-slot--12"
        )}
      >
        {card}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bento-card-slot",
        colSpan === 7 && "bento-card-slot--7",
        colSpan === 5 && "bento-card-slot--5",
        colSpan === 4 && "bento-card-slot--4",
        colSpan === 12 && "bento-card-slot--12"
      )}
    >
      <RevArcBorderGlow>{card}</RevArcBorderGlow>
    </div>
  );
}
