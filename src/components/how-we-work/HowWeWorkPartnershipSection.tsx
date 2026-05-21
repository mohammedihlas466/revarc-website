"use client";

import { useRef } from "react";
import { ScrollSpotlightText } from "@/components/animation/ScrollSpotlightText";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { YearCard } from "@/components/ui/YearCard";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";

const SUBTITLE =
  "RevArc partnerships are structured as 3-year strategic engagements with annual milestones. Each year builds on the last. The value compounds. The owner's share of the gains grows every year the relationship matures.";

const CLOSING =
  "Every year reaches a mutual renewal point at month 10. Either party can elect not to continue with 60 days notice. There is no lock-in penalty. RevArc does not engineer retention through contracts — it earns retention through results. A partnership that stops producing should stop. That is true for you, and it is true for RevArc.";

const YEAR_CARDS = [
  {
    yearLabel: "01",
    titlePrimary: "Foundation.",
    titleItalic: "Trust established.",
    body: "Direct booking infrastructure built and operational. OTA listings rehabilitated. Reputation infrastructure actively managed. First Revenue Architecture stream identified, architected, and delivered. This is the year RevArc earns your confidence — with numbers, not promises.",
    milestones: [
      "DIRECT ENGINE LIVE",
      "OTA REHABILITATED",
      "FIRST REVENUE STREAM",
      "TRUST EARNED",
    ] as const,
    target: "Target: OTA share: 60% → 50%",
    titleId: "how-partnership-year-1",
  },
  {
    yearLabel: "02",
    titlePrimary: "Expansion.",
    titleItalic: "New markets open.",
    body: "Direct booking channel optimised for conversion and retention. International guest acquisition begins. Second Revenue Architecture stream delivered. The system you now trust is producing compounding returns. Your property is earning revenue it did not have twelve months ago.",
    milestones: [
      "CONVERSION OPTIMISED",
      "INTERNATIONAL GUESTS",
      "SECOND REVENUE STREAM",
    ] as const,
    target: "Target: OTA share: 50% → 42%",
    titleId: "how-partnership-year-2",
  },
  {
    yearLabel: "03",
    titlePrimary: "Diversification.",
    titleItalic: "Full revenue control.",
    body: "Your property now operates with a diversified revenue mix — direct bookings, productised packages, group events, and optimised OTA presence working together. Third Revenue Architecture stream or international market expansion. You are no longer dependent on any single channel for your livelihood.",
    milestones: [
      "REVENUE DIVERSIFIED",
      "THIRD STREAM OR EXPANSION",
      "FULL CONTROL",
    ] as const,
    target: "Target: OTA share: 42% → 35%",
    titleId: "how-partnership-year-3",
  },
] as const;

export function HowWeWorkPartnershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const cards = gsap.utils.toArray<HTMLElement>(
        ".how-partnership-year .bento-card"
      );

      if (reduceMotion) {
        gsap.set(cards, { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.2,
        immediateRender: false,
        scrollTrigger: {
          trigger: section.querySelector(".how-partnership-years"),
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="how-partnership-section standard-section"
      aria-labelledby="how-partnership-title"
    >
      <SectionHeader
        eyebrow="THE PARTNERSHIP"
        titleLine1="A trajectory,"
        titleLine2="not a transaction."
        subtitle={SUBTITLE}
        titleId="how-partnership-title"
      />

      <div className="how-partnership-years bento-grid">
        {YEAR_CARDS.map((card) => (
          <YearCard
            key={card.yearLabel}
            className="how-partnership-year"
            yearLabel={card.yearLabel}
            titlePrimary={card.titlePrimary}
            titleItalic={card.titleItalic}
            body={card.body}
            milestones={card.milestones}
            target={card.target}
            titleId={card.titleId}
          />
        ))}
      </div>

      <div className="how-partnership-closing">
        <ScrollSpotlightText text={CLOSING} variant="display" />
      </div>
    </section>
  );
}
