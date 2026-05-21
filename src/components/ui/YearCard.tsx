import { BentoCard } from "@/components/ui/BentoCard";
import { ServiceTag } from "@/components/ui/ServiceTag";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type YearCardProps = {
  yearLabel: string;
  titlePrimary: string;
  titleItalic: string;
  body: string;
  milestones: readonly string[];
  target: string;
  className?: string;
  titleId?: string;
};

export function YearCard({
  yearLabel,
  titlePrimary,
  titleItalic,
  body,
  milestones,
  target,
  className,
  titleId,
}: YearCardProps) {
  return (
    <BentoCard
      colSpan={12}
      borderGlow
      className={cn("year-card", className)}
      aria-labelledby={titleId}
    >
      <div className="year-card-inner">
        <span
          className={cn("year-label", fontDisplay.className)}
          aria-hidden="true"
        >
          {yearLabel}
        </span>

        <div className="year-card-content">
          <h3
            id={titleId}
            className={cn("year-title", fontDisplay.className)}
          >
            {titlePrimary}{" "}
            <span className="year-title-italic">{titleItalic}</span>
          </h3>

          <p className={cn("year-body", fontUi.className)}>{body}</p>

          <div className="year-milestones">
            {milestones.map((tag) => (
              <ServiceTag key={tag}>{tag}</ServiceTag>
            ))}
          </div>

          <p className={cn("year-target", fontMono.className)}>{target}</p>
        </div>
      </div>
    </BentoCard>
  );
}
