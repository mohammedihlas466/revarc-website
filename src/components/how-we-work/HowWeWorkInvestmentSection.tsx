"use client";

import { useRef } from "react";
import { ScrollSpotlightText } from "@/components/animation/ScrollSpotlightText";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { SourceCitation } from "@/components/ui/SourceCitation";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const ROI_PARAGRAPHS = [
  "The question is not whether you can afford a revenue strategist. It is whether you can afford not to have one.",
  "Here is the arithmetic for a 40-room property at 70% occupancy and €200 ADR:",
] as const;

const ROI_MATH = [
  "Annual revenue: approximately €2 million.",
  "At 63% OTA share, more than €190,000 per year goes to platform commissions.",
  "Shifting just 10 percentage points of bookings from OTA to direct channels saves your property approximately €30,000 per year in commission alone.",
  "The RevArc partnership costs €18,000 per year in base retainer — plus a performance commission earned only on direct revenue that exceeds your rolling historical baseline.",
  "In the conservative scenario, the partnership pays for itself within the first two quarters. Every quarter after that is net margin your property keeps.",
] as const;

const ROI_CLOSING =
  "This does not account for the Revenue Architecture streams — the new income lines that did not exist before the partnership. That revenue is incremental. It is above and beyond the commission savings.";

const CITATION =
  "OTA share: 63.4% — Cloudbeds \"2026 State of Independent Hotels Report,\" 90 million bookings, 180 countries. Commission range: 15–25% — Booking.com published structure (Lodgify, 2026). Effective rate with Genius programme: up to 23.5% (Rield Revenue Management, 2026). European occupancy: 69–70% avg Q2–Q3 2025 (STR / CoStar). Calculation: €2,044,000 × 10% shift × 15% commission = €30,660.";

const GUARANTEE =
  "RevArc's commission structure is designed so that you always win more than RevArc does. In every scenario — conservative, base, or strong — the owner's net gain exceeds RevArc's total fees. This ratio is structural, not accidental. It is built into the contract.";

const INVESTMENT_ITEMS = [
  {
    label: "YEAR 1 RETAINER",
    value: "€1,500 /month",
    detail:
      "Annual: €18,000. Includes Revenue Architecture commitment, Command Centre access, and all three pillar operations.",
  },
  {
    label: "PERFORMANCE COMMISSION",
    value: "6% on the Delta",
    detail:
      "Earned only on direct booking revenue that exceeds your rolling 24-month historical baseline. Verified against your own PMS data. RevArc earns when your property earns more — never on a static floor.",
  },
  {
    label: "YEAR 2–3 ESCALATION",
    value: "10–15% annually",
    detail:
      "Built into the contract from signing. Reflects compounding value as the system matures. No surprise renegotiations.",
  },
  {
    label: "ANNUAL PREPAY OPTION",
    value: "5% discount",
    detail:
      "Pay the year's retainer upfront and receive a 5% reduction. Improves cash flow for both parties.",
  },
] as const;

export function HowWeWorkInvestmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const roi = section.querySelector(".how-investment-roi .bento-card");
      const structure = section.querySelector(
        ".how-investment-structure .bento-card"
      );

      if (reduceMotion) {
        gsap.set([roi, structure].filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

      if (roi) {
        gsap.from(roi, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".how-investment-row"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (structure) {
        gsap.from(structure, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0.15,
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".how-investment-row"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="how-investment-section standard-section"
      aria-labelledby="how-investment-title"
    >
      <SectionHeader
        eyebrow="THE INVESTMENT"
        titleLine1="The numbers"
        titleLine2="in plain language."
        titleId="how-investment-title"
      />

      <div className="how-investment-grid bento-grid">
        <div className="how-investment-row bento-row">
          <BentoCard
            colSpan={7}
            borderGlow
            className="how-investment-roi"
            aria-labelledby="how-investment-roi-label"
          >
            <div className="bento-card-content how-investment-roi-content">
              <p
                id="how-investment-roi-label"
                className={cn("card-label", fontMono.className)}
              >
                <span className="card-label-dot" aria-hidden="true" />
                WHAT THE PARTNERSHIP RETURNS
              </p>

              <div className={cn("how-investment-roi-body", fontUi.className)}>
                {ROI_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="how-investment-paragraph">
                    {paragraph}
                  </p>
                ))}

                <ul className="how-investment-math-list">
                  {ROI_MATH.map((line) => (
                    <li key={line.slice(0, 40)} className="how-investment-math-item">
                      {line}
                    </li>
                  ))}
                </ul>

                <p className="how-investment-paragraph">{ROI_CLOSING}</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard
            colSpan={5}
            borderGlow
            className="how-investment-structure"
            aria-labelledby="how-investment-structure-label"
          >
            <div className="bento-card-content how-investment-structure-content">
              <p
                id="how-investment-structure-label"
                className={cn("card-label", fontMono.className)}
              >
                <span className="card-label-dot" aria-hidden="true" />
                PARTNERSHIP STRUCTURE
              </p>

              <div className="how-investment-items">
                {INVESTMENT_ITEMS.map((item, index) => (
                  <div key={item.label} className="how-investment-item">
                    {index > 0 ? (
                      <span
                        className="how-investment-divider"
                        aria-hidden="true"
                      />
                    ) : null}
                    <p className={cn("how-investment-item-label", fontMono.className)}>
                      {item.label}
                    </p>
                    <p
                      className={cn(
                        "how-investment-item-value",
                        fontDisplay.className
                      )}
                    >
                      {item.value}
                    </p>
                    <p
                      className={cn(
                        "how-investment-item-detail",
                        fontUi.className
                      )}
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      <SourceCitation className="how-investment-citation">
        {CITATION}
      </SourceCitation>

      <div className="how-investment-guarantee">
        <ScrollSpotlightText text={GUARANTEE} variant="display" />
      </div>
    </section>
  );
}
