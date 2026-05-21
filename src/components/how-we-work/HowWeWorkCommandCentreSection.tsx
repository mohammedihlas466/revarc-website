"use client";

import { useRef } from "react";
import { CircuitGridCanvas } from "@/components/animation/CircuitGridCanvas";
import { RevArcBarsWave } from "@/components/backgrounds/RevArcBarsWave";
import { CardVisual } from "@/components/backgrounds/CardVisual";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { MetricChip } from "@/components/ui/MetricChip";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const DESCRIPTION =
  "Every RevArc partnership comes with the Command Centre — a live operational dashboard where your property's revenue performance is visible at all times.\n\nDirect booking revenue. OTA channel performance. Rate parity monitoring. Revenue Architecture progress. Commission calculations — transparent, verified against your own data. The quarterly strategy decisions that shape your property's next twelve months.\n\nThis is not a reporting tool you check once a month. It is the operational surface where the partnership lives.";

const FEATURES = [
  {
    title: "Revenue Dashboard",
    body: "Direct vs. OTA split. Historical delta. Commission calculations. All verified against your PMS.",
  },
  {
    title: "Rate Alert System",
    body: "Real-time rate parity monitoring. When an OTA undercuts your direct rate, RevArc corrects it — and you see the resolution in minutes, not days.",
  },
  {
    title: "Strategy Surface",
    body: "The big quarterly decisions — queued, with RevArc's recommendation and supporting data. Where the strategic partnership comes to life.",
  },
] as const;

const METRIC_CHIPS = [
  { label: "DIRECT SHARE", value: "47%" },
  { label: "DELTA", value: "+€12,400" },
  { label: "PARITY", value: "PROTECTED" },
] as const;

export function HowWeWorkCommandCentreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const description = section.querySelector(".how-command-desc");
      const features = gsap.utils.toArray<HTMLElement>(".how-command-feature");
      const visualCard = section.querySelector(
        ".how-command-visual-card .bento-card"
      );
      const chips = gsap.utils.toArray<HTMLElement>(
        ".how-command-metric-chip"
      );
      const cardVisual = section.querySelector(".how-command-visual");

      if (reduceMotion) {
        gsap.set(
          [description, ...features, visualCard, ...chips].filter(Boolean),
          { opacity: 1, y: 0, clearProps: "all" }
        );
        return;
      }

      if (description) {
        gsap.from(description, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".how-command-row"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (features.length) {
        gsap.from(features, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "expo.out",
          stagger: 0.1,
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".how-command-features"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (visualCard) {
        gsap.from(visualCard, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          delay: 0.15,
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".how-command-row"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (chips.length) {
        gsap.from(chips, {
          y: 12,
          opacity: 0,
          duration: 0.5,
          ease: "expo.out",
          stagger: 0.1,
          delay: 0.25,
          immediateRender: false,
          scrollTrigger: {
            trigger: visualCard,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (cardVisual) {
        gsap.to(cardVisual, {
          y: -30,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".how-command-visual-card"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="how-command-section standard-section"
      aria-labelledby="how-command-title"
    >
      <SectionHeader
        eyebrow="THE COMMAND CENTRE"
        titleLine1="Your revenue,"
        titleLine2="visible in real time."
        titleId="how-command-title"
      />

      <div className="how-command-grid bento-grid">
        <div className="how-command-row bento-row">
          <div className="how-command-desc bento-card-slot bento-card-slot--5">
            <div className={cn("how-command-desc-body", fontUi.className)}>
              {DESCRIPTION.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="how-command-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="how-command-features">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="step-item how-command-feature"
                >
                  <div className="step-content">
                    <p className={cn("step-title", fontUi.className)}>
                      {feature.title}
                    </p>
                    <p className={cn("step-body", fontUi.className)}>
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <BentoCard
            colSpan={7}
            borderGlow
            className="how-command-visual-card"
            aria-labelledby="how-command-preview-label"
          >
            <CardVisual className="how-command-visual how-command-visual-layer">
              <RevArcBarsWave />
            </CardVisual>

            <div
              className="how-command-fallback-canvas card-canvas-layer"
              aria-hidden="true"
            >
              <CircuitGridCanvas />
            </div>

            <div className="bento-card-content how-command-preview-content">
              <p
                id="how-command-preview-label"
                className={cn("card-label", fontMono.className)}
              >
                <span className="card-label-dot" aria-hidden="true" />
                COMMAND CENTRE · PREVIEW
              </p>

              <div className="how-command-metric-chips">
                {METRIC_CHIPS.map((chip) => (
                  <MetricChip
                    key={chip.label}
                    label={chip.label}
                    value={chip.value}
                    className="how-command-metric-chip"
                  />
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
