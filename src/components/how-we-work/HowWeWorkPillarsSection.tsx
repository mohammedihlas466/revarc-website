"use client";

import { useRef } from "react";
import { ScrollSpotlightText } from "@/components/animation/ScrollSpotlightText";
import { NetworkNodesCanvas } from "@/components/animation/NetworkNodesCanvas";
import { PulseRingsCanvas } from "@/components/animation/PulseRingsCanvas";
import { WaveformCanvas } from "@/components/animation/WaveformCanvas";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { ServiceTag } from "@/components/ui/ServiceTag";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const BELOW_GRID =
  "These three pillars are not independent services you select from a menu. They are a single system, operated in concert. The direct booking engine recovers margin from OTAs. Revenue Architecture creates income your property didn't have before. OTA leverage ensures platform algorithms amplify your visibility instead of suppressing it. Each feeds the others. Together, they form a revenue engine you control.";

const PILLAR_CARDS = [
  {
    id: "pillar-01",
    label: "PILLAR 01",
    titleLine1: "Direct booking",
    titleLine2: "engine.",
    body: "Paid acquisition through Meta Ads routed into a WhatsApp conversation pipeline. Every inquiry handled by a real operator. Every booking confirmed by deposit. The guests are yours — not the platform's.",
    tags: ["META ADS", "WHATSAPP", "DEPOSIT PIPELINE"] as const,
    ghostNumeral: "01",
    Canvas: PulseRingsCanvas,
  },
  {
    id: "pillar-02",
    label: "PILLAR 02",
    titleLine1: "Revenue",
    titleLine2: "architecture.",
    body: "One new revenue stream identified, architected, and delivered every year. Private events. Off-season packages. Group bookings. Revenue from assets your property already owns.",
    tags: ["EVENTS", "PACKAGES", "GROUP HIRE", "OFF-SEASON"] as const,
    ghostNumeral: "02",
    Canvas: WaveformCanvas,
  },
  {
    id: "pillar-03",
    label: "PILLAR 03",
    titleLine1: "OTA leverage &",
    titleLine2: "reputation.",
    body: "Your OTA listings rehabilitated and optimised — not abandoned. Broken backends corrected. Algorithmic penalties cleared. Google Business Profile actively managed. The platforms work for you, not against you.",
    tags: ["BOOKING.COM", "AGODA", "GOOGLE", "RATE PARITY"] as const,
    ghostNumeral: "03",
    Canvas: NetworkNodesCanvas,
  },
] as const;

export function HowWeWorkPillarsSection() {
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
        ".how-pillars-card .bento-card"
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
        stagger: 0.15,
        immediateRender: false,
        scrollTrigger: {
          trigger: section.querySelector(".how-pillars-grid"),
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
      className="how-pillars-section standard-section"
      aria-labelledby="how-pillars-title"
    >
      <SectionHeader
        eyebrow="THE THREE PILLARS"
        titleLine1="Three channels."
        titleLine2="One system."
        titleId="how-pillars-title"
      />

      <div className="how-pillars-grid bento-grid">
        <div className="bento-row">
          {PILLAR_CARDS.map((card) => {
            const CanvasComponent = card.Canvas;

            return (
              <BentoCard
                key={card.id}
                colSpan={4}
                ghostNumeral={card.ghostNumeral}
                borderGlow
                className="how-pillars-card"
                aria-labelledby={`${card.id}-title`}
              >
                <div className="card-canvas-layer" aria-hidden="true">
                  <CanvasComponent />
                </div>

                <div className="bento-card-content">
                  <p className={cn("card-label", fontMono.className)}>
                    <span className="card-label-dot" aria-hidden="true" />
                    {card.label}
                  </p>

                  <h3
                    id={`${card.id}-title`}
                    className={cn("card-title", fontDisplay.className)}
                  >
                    <span className="card-title-line-1">{card.titleLine1}</span>
                    <br />
                    <span className="card-title-line-2">{card.titleLine2}</span>
                  </h3>

                  <p className={cn("card-body", fontUi.className)}>{card.body}</p>

                  <div className="service-tags-row">
                    {card.tags.map((tag) => (
                      <ServiceTag key={tag}>{tag}</ServiceTag>
                    ))}
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>

      <div className="how-pillars-below">
        <ScrollSpotlightText text={BELOW_GRID} variant="display" />
      </div>
    </section>
  );
}
