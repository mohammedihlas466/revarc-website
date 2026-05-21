"use client";

import { useRef } from "react";
import { StatCounter } from "@/components/animation/StatCounter";
import { CardVisual } from "@/components/backgrounds/CardVisual";
import { RevArcMeteorOrbit } from "@/components/backgrounds/RevArcMeteorOrbit";
import { WaveformCanvas } from "@/components/animation/WaveformCanvas";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { MetricChip } from "@/components/ui/MetricChip";
import { ServiceTag } from "@/components/ui/ServiceTag";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const SUBTITLE =
  "RevArc operates three independent revenue channels in concert. Each solves a different problem. Each is independently measurable. Each feeds the others.";

const CARD_A_BODY =
  "Where does your next €100,000 of margin come from? Which guest segment should you acquire? Should you defend your current ADR or reposition upmarket? These decisions shape your property's future. RevArc works alongside you to make them — with the data, the systems, and the accountability to follow through.";

const CARD_B_BODY =
  "Every partnership includes one new revenue stream identified, architected, and delivered per year. Private events. Off-season packages. Group bookings. Revenue from assets your property already owns but is not using.";

const METRIC_CHIPS = [
  { label: "3-YEAR", value: "Partnership" },
  { label: "ANNUAL", value: "Revenue Stream" },
  { label: "MONTH 10", value: "Mutual Renewal" },
] as const;

const SERVICE_TAGS = [
  "PRIVATE EVENTS",
  "OFF-SEASON",
  "GROUP HIRE",
  "PACKAGES",
] as const;

const STAT_ITEMS = [
  { value: "3–4×", label: "RETURN ON AD SPEND" },
  { value: "$0.47", label: "COST PER CONVERSATION" },
  { value: "7", label: "INTERNATIONAL MARKETS" },
  { value: "25×", label: "REVENUE VS. MEDIA INVESTMENT" },
] as const;

export function SystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      if (!section || !grid || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const cards = gsap.utils.toArray<HTMLElement>(
        grid.querySelectorAll(".system-bento-row .bento-card")
      );
      const statBar = section.querySelector(".stat-bar");

      if (reduceMotion) {
        gsap.set([...cards, statBar], { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      const scrollConfig = {
        trigger: grid,
        start: "top 88%",
        toggleActions: "play none none none",
        once: true,
      };

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.15,
        immediateRender: false,
        scrollTrigger: scrollConfig,
      });

      if (statBar) {
        gsap.from(statBar, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      const cardAVisual = section.querySelector(".card-a .card-visual");
      if (cardAVisual) {
        gsap.to(cardAVisual, {
          y: -30,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".card-a"),
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
      className="system-section standard-section"
      aria-labelledby="system-title"
    >
      <SectionHeader
        className="system-header"
        eyebrow="THE SYSTEM"
        titleLine1="Three channels."
        titleLine2="One revenue engine."
        subtitle={SUBTITLE}
        titleId="system-title"
      />

      <div ref={gridRef} className="system-bento-grid bento-grid">
        <div className="system-bento-row bento-row">
          <BentoCard
            colSpan={7}
            ghostNumeral="01"
            borderGlow
            className="card-a system-card-a"
            aria-labelledby="system-card-a-title"
          >
            <CardVisual className="card-a-visual">
              <RevArcMeteorOrbit />
            </CardVisual>

            <div className="bento-card-content">
              <p className={cn("card-label", fontMono.className)}>
                <span className="card-label-dot" aria-hidden="true" />
                01 — STRATEGY PARTNERSHIP
              </p>

              <h3
                id="system-card-a-title"
                className={cn("card-title", fontDisplay.className)}
              >
                <span className="card-title-line-1">
                  The strategic decisions
                </span>{" "}
                <span className="card-title-line-2">
                  your property deserves.
                </span>
              </h3>

              <p className={cn("card-body", fontUi.className)}>{CARD_A_BODY}</p>

              <div className="metric-chips-row">
                {METRIC_CHIPS.map((chip) => (
                  <MetricChip
                    key={chip.label}
                    label={chip.label}
                    value={chip.value}
                  />
                ))}
              </div>
            </div>
          </BentoCard>

          <BentoCard
            colSpan={5}
            ghostNumeral="02"
            borderGlow
            className="card-b system-card-b"
            aria-labelledby="system-card-b-title"
          >
            <div className="card-canvas-layer" aria-hidden="true">
              <WaveformCanvas />
            </div>

            <div className="bento-card-content">
              <p className={cn("card-label", fontMono.className)}>
                <span className="card-label-dot" aria-hidden="true" />
                02 — REVENUE ARCHITECTURE
              </p>

              <h3
                id="system-card-b-title"
                className={cn("card-title", fontDisplay.className)}
              >
                <span className="card-title-line-1">A new revenue stream.</span>{" "}
                <span className="card-title-line-2">Every year.</span>
              </h3>

              <p className={cn("card-body", fontUi.className)}>{CARD_B_BODY}</p>

              <div className="service-tags-row">
                {SERVICE_TAGS.map((tag) => (
                  <ServiceTag key={tag}>{tag}</ServiceTag>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>

        <StatCounter stats={STAT_ITEMS} className="system-stat-bar" />
      </div>
    </section>
  );
}
