"use client";

import { useRef } from "react";
import { CircuitGridCanvas } from "@/components/animation/CircuitGridCanvas";
import { NetworkNodesCanvas } from "@/components/animation/NetworkNodesCanvas";
import { PulseRingsCanvas } from "@/components/animation/PulseRingsCanvas";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const SUBTITLE =
  "Before any creative was produced or any media was bought, the property was audited end to end. The audit revealed three distinct failures across three independent channels. Each one was costing the property revenue. Together, they explained everything.";

const CLOSING =
  "Across all three failures, the pattern was identical: the property had assets and demand, but no system. RevArc's mandate was to build that system.";

const FAILURE_CARDS = [
  {
    id: "failure-01",
    label: "FAILURE 01",
    titleLine1: "OTA listings were",
    titleLine2: "technically broken.",
    body: "On Agoda, the backend listed 20 rooms instead of 8, with critical underpricing on triple rooms — approximately $90 below market. Bank verification was incomplete. Payouts could not flow. On Booking.com, algorithmic penalties from poor content scores and ghost availability — rooms appearing available on dates the property was already full.\n\nThe property was paying for platform visibility. The platforms were suppressing it.",
    ghostNumeral: "01",
    Canvas: NetworkNodesCanvas,
  },
  {
    id: "failure-02",
    label: "FAILURE 02",
    titleLine1: "No direct acquisition",
    titleLine2: "channel existed.",
    body: "No paid acquisition. No content engine. No structured inquiry pipeline. Direct bookings, when they occurred, came from referrals and walk-ins — both unscalable, both collapsing during low season.\n\nA property that depends entirely on OTAs for new demand is a property that does not own its guests.",
    ghostNumeral: "02",
    Canvas: PulseRingsCanvas,
  },
  {
    id: "failure-03",
    label: "FAILURE 03",
    titleLine1: "Reputation was",
    titleLine2: "an afterthought.",
    body: "Google Business Profile unmanaged. Reviews not responded to. Photos not curated. The most important off-platform signal a boutique property has — the social proof a guest checks before they reach any OTA — was sitting idle.",
    ghostNumeral: "03",
    Canvas: CircuitGridCanvas,
    canvasProps: { dormant: true },
  },
] as const;

export function ProofDiagnosisSection() {
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
        ".proof-diagnosis-card .bento-card"
      );
      const closing = section.querySelector(".proof-diagnosis-closing");

      if (reduceMotion) {
        gsap.set([...cards, closing], { opacity: 1, y: 0, clearProps: "all" });
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
          trigger: section.querySelector(".proof-diagnosis-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (closing) {
        gsap.from(closing, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: closing,
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
      className="proof-diagnosis-section standard-section"
      aria-labelledby="proof-diagnosis-title"
    >
      <SectionHeader
        eyebrow="THE DIAGNOSIS"
        titleLine1="Three channels."
        titleLine2="Three failures. One pattern."
        subtitle={SUBTITLE}
        titleId="proof-diagnosis-title"
      />

      <div className="proof-diagnosis-grid bento-grid">
        <div className="bento-row">
          {FAILURE_CARDS.map((card) => {
            const CanvasComponent = card.Canvas;
            const canvasProps =
              "canvasProps" in card ? card.canvasProps : undefined;

            return (
              <BentoCard
                key={card.id}
                colSpan={4}
                ghostNumeral={card.ghostNumeral}
                borderGlow
                className="proof-diagnosis-card"
                aria-labelledby={`${card.id}-title`}
              >
                <div className="card-canvas-layer" aria-hidden="true">
                  <CanvasComponent {...canvasProps} />
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

                  <p className={cn("card-body", fontUi.className)}>
                    {card.body.split("\n\n").map((paragraph, index) => (
                      <span key={index}>
                        {index > 0 ? (
                          <>
                            <br />
                            <br />
                          </>
                        ) : null}
                        {paragraph}
                      </span>
                    ))}
                  </p>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>

      <p className={cn("proof-diagnosis-closing", fontUi.className)}>
        {CLOSING}
      </p>
    </section>
  );
}
