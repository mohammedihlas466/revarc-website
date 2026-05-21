"use client";

import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type FieldStudyPolarMetricCardProps = {
  index: string;
  caption: string;
  visual: ReactNode;
  subCaption?: string;
  valueHighlight?: string;
  statusTag?: string;
  className?: string;
};

export function FieldStudyPolarMetricCard({
  index,
  caption,
  visual,
  subCaption,
  valueHighlight,
  statusTag,
  className,
}: FieldStudyPolarMetricCardProps) {
  const titleId = `polar-metric-${index.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article
      className={cn("polar-metric-card", className)}
      aria-labelledby={titleId}
    >
      <div className="polar-metric-card__visual">{visual}</div>
      <div className="polar-metric-card__body">
        <p id={titleId} className={cn("polar-metric-card__index", fontUi.className)}>
          {index}
        </p>
        <hr className="polar-metric-card__rule" aria-hidden="true" />
        {valueHighlight ? (
          <p className={cn("polar-metric-card__value", fontDisplay.className)}>
            {valueHighlight}
          </p>
        ) : null}
        <p className={cn("polar-metric-card__caption", fontUi.className)}>
          {caption}
        </p>
        {subCaption ? (
          <p className={cn("polar-metric-card__sub", fontUi.className)}>
            {subCaption}
          </p>
        ) : null}
        {statusTag ? (
          <span
            className={cn(
              "status-tag-confirmed polar-metric-card__tag",
              fontMono.className
            )}
          >
            {statusTag}
          </span>
        ) : null}
      </div>
    </article>
  );
}
