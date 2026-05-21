"use client";

import { useRef } from "react";
import { StatCounter } from "@/components/animation/StatCounter";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { MiniMetricCard } from "@/components/ui/MiniMetricCard";
import { RevArcBorderGlow } from "@/components/ui/RevArcBorderGlow";
import { SourceCitation } from "@/components/ui/SourceCitation";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const NARRATIVE_BODY = [
  "The direct booking engine was built on one architectural decision: collapse the entire acquisition flow into a conversation on a platform the guest already uses.",
  "A prospective guest sees a Meta-served reel or carousel. The ad opens directly into a WhatsApp conversation with the property. From the first message, the inquiry is handled by a real operator — the package is explained, dates are negotiated, a quote is sent, a deposit link is issued. The booking is confirmed only when the deposit lands.",
  "There is no abandonment funnel because there is no funnel. Only a conversation.",
  "This architectural decision is the reason the channel produces conversion economics that outperform regional benchmarks — at a fraction of the typical cost per acquisition.",
] as const;

const MINI_METRICS = [
  {
    label: "TOTAL META AD SPEND",
    value: "$2,800+",
    sub: "Lifetime, across all campaigns",
  },
  {
    label: "DIRECT BOOKINGS",
    value: "Hundreds",
    sub: "Confirmed via WhatsApp + deposit",
  },
  {
    label: "COST PER CONVERSATION",
    value: "$0.47",
    sub: "Average across 1,680+ conversations",
  },
  {
    label: "BEST CAMPAIGN RATE",
    value: "$0.24",
    sub: "Messaging Ad, January 13th",
  },
] as const;

const STAT_ITEMS = [
  { value: "1,680+", label: "WHATSAPP CONVERSATIONS" },
  { value: "3–4×", label: "RETURN ON AD SPEND" },
  { value: "100/100", label: "META OPPORTUNITY SCORE" },
  { value: "Rs. 2M+", label: "TRACKED REVENUE" },
] as const;

const CITATION =
  "Source: Meta Ads Manager — Tranquil Escape ad account. $2,840.23 lifetime spend. Opportunity Score: 100/100. WhatsApp does not return attribution data to Meta's reporting layer — revenue figures are sourced from named guest records at point of inquiry, not platform attribution.";

export function ProofPillarDirectBookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const narrative = section.querySelector(".proof-pillar01-narrative .bento-card");
      const metrics = gsap.utils.toArray<HTMLElement>(".proof-pillar01-metric");
      const statBar = section.querySelector(".proof-pillar01-stat-bar");
      const citation = section.querySelector(".proof-pillar01-citation");

      if (reduceMotion) {
        gsap.set(
          [narrative, ...metrics, statBar, citation].filter(Boolean),
          { opacity: 1, y: 0, clearProps: "all" }
        );
        return;
      }

      if (narrative) {
        gsap.from(narrative, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".proof-pillar01-grid"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (metrics.length) {
        gsap.from(metrics, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.12,
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".proof-pillar01-metrics"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (statBar) {
        gsap.from(statBar, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: statBar,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (citation) {
        gsap.from(citation, {
          y: 8,
          opacity: 0,
          duration: 0.4,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: citation,
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
      className="proof-pillar01-section standard-section"
      aria-labelledby="proof-pillar01-title"
    >
      <SectionHeader
        eyebrow="PILLAR 01 · DIRECT BOOKING"
        titleLine1="Owner-controlled."
        titleLine2="Owner-owned."
        titleId="proof-pillar01-title"
      />

      <div className="proof-pillar01-grid bento-grid">
        <div className="bento-row">
          <BentoCard
            colSpan={7}
            borderGlow
            className="proof-pillar01-narrative"
            aria-labelledby="proof-pillar01-channel-title"
          >
            <div className="bento-card-content">
              <p className={cn("card-label", fontMono.className)}>
                <span className="card-label-dot" aria-hidden="true" />
                THE CHANNEL
              </p>

              <div
                id="proof-pillar01-channel-title"
                className={cn("proof-pillar01-body", fontUi.className)}
              >
                {NARRATIVE_BODY.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="proof-pillar01-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </BentoCard>

          <div className="proof-pillar01-metrics bento-card-slot bento-card-slot--5">
            {MINI_METRICS.map((metric) => (
              <RevArcBorderGlow
                key={metric.label}
                className="mini-metric-border-glow"
                borderRadius={16}
              >
                <MiniMetricCard
                  label={metric.label}
                  value={metric.value}
                  sub={metric.sub}
                  className="proof-pillar01-metric"
                />
              </RevArcBorderGlow>
            ))}
          </div>
        </div>

        <RevArcBorderGlow className="proof-pillar01-stat-bar-glow">
          <StatCounter
            stats={STAT_ITEMS}
            className="proof-pillar01-stat-bar"
          />
        </RevArcBorderGlow>
      </div>

      <SourceCitation className="proof-pillar01-citation">{CITATION}</SourceCitation>
    </section>
  );
}
