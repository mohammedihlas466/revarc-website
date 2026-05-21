"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { RevArcCtaGhost } from "@/components/ui/RevArcCtaGhost";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const CALENDAR_EMBED_URL = process.env.NEXT_PUBLIC_CALENDAR_EMBED_URL ?? "";

const FALLBACK_EYEBROW = "SCHEDULING";

const FALLBACK_HEADLINE = "Calendar coming soon.";

const FALLBACK_BODY =
  "In the meantime, reach out directly via email or WhatsApp.";

const CTA_LABEL = "Send an Email";

const MAILTO = "mailto:contact@revarcsystems.com";

type CalendarCardProps = {
  className?: string;
};

export function CalendarCard({ className }: CalendarCardProps) {
  const hasEmbed = CALENDAR_EMBED_URL.length > 0;

  return (
    <BentoCard
      colSpan={7}
      borderGlow
      className={cn("calendar-bento-card", className)}
      aria-labelledby="calendar-card-label"
    >
      <div className="calendar-card">
        <div className="calendar-card-header">
          <p
            id="calendar-card-label"
            className={cn("card-label", fontMono.className)}
          >
            <span className="card-label-dot" aria-hidden="true" />
            SELECT A TIME
          </p>
        </div>

        {hasEmbed ? (
          <div className="calendar-embed-container">
            <iframe
              src={CALENDAR_EMBED_URL}
              title="Book a strategy call"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="calendar-fallback">
            <p className={cn("calendar-fallback-eyebrow", fontMono.className)}>
              {FALLBACK_EYEBROW}
            </p>
            <h3
              className={cn("calendar-fallback-headline", fontDisplay.className)}
            >
              {FALLBACK_HEADLINE}
            </h3>
            <p className={cn("calendar-fallback-body", fontUi.className)}>
              {FALLBACK_BODY}
            </p>
            <RevArcCtaGhost href={MAILTO} className="calendar-fallback-cta">
              {CTA_LABEL}
            </RevArcCtaGhost>
          </div>
        )}
      </div>
    </BentoCard>
  );
}
