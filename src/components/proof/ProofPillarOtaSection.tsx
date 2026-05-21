"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { CountryItem } from "@/components/ui/CountryItem";
import { MetricChip } from "@/components/ui/MetricChip";
import { ServiceTag } from "@/components/ui/ServiceTag";
import { SourceCitation } from "@/components/ui/SourceCitation";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const SUBTITLE =
  "The strategy was not to abandon the OTAs — that would forfeit the global demand layer they uniquely provide. The strategy was to rebuild the property's relationship with their algorithms.";

const OTA_BODY = [
  "On Agoda, the inventory was manually corrected from 20 erroneous rooms back to 8. Triple-room rates lifted off the floor. Mobile rates restructured to trigger the Green Deal Badge without sacrificing margin. Bank verification completed. Payouts began flowing.",
  "On Booking.com, the photo gallery was re-sequenced to match the platform's internal viewing logic. Ghost availability eliminated. Two-night minimum stay implemented to filter low-value single-night turnover.",
  "Result: Booking.com Preferred Partner status earned — a designation reserved for listings meeting defined performance and content standards.",
] as const;

const REPUTATION_BODY =
  "The Google Business Profile was rebuilt from inactive to actively managed. Reviews responded to within hours, in the operator's own voice. Photos curated. The profile now serves as the off-platform proof signal that converts an OTA browser into a confirmed booking.";

const METRIC_CHIPS = [
  { label: "RATING", value: "4.7★" },
  { label: "REVIEWS", value: "55+" },
  { label: "INTERACTIONS", value: "795" },
] as const;

const COUNTRIES = [
  { country: "Russia", source: "Booking.com" },
  { country: "United Kingdom", source: "Booking.com" },
  { country: "France", source: "Agoda" },
  { country: "Poland", source: "Agoda" },
  { country: "Netherlands", source: "Agoda" },
  { country: "Belarus", source: "Agoda" },
  { country: "Sweden", source: "Booking.com" },
] as const;

const BELOW_BAR =
  "International reach of this kind does not happen on a property whose OTA listings are technically broken. It is the consequence of a fully rehabilitated platform footprint.";

const CITATION =
  "Source: Booking.com Partner Extranet and Agoda YCS Dashboard. Confirmed reservations from named guests.";

export function ProofPillarOtaSection() {
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
        ".proof-ota-card .bento-card"
      );
      const reachBar = section.querySelector(".proof-international-reach");
      const countries = gsap.utils.toArray<HTMLElement>(".proof-country-item");
      const below = section.querySelector(".proof-ota-below");

      if (reduceMotion) {
        gsap.set(
          [...cards, reachBar, ...countries, below].filter(Boolean),
          { opacity: 1, y: 0, clearProps: "all" }
        );
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
          trigger: section.querySelector(".proof-ota-grid"),
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onComplete: () => {
          const chips = section.querySelectorAll(".proof-reputation-chip");
          gsap.from(chips, {
            opacity: 0,
            duration: 0.4,
            ease: "expo.out",
            stagger: 0.1,
          });
        },
      });

      if (reachBar) {
        gsap.from(reachBar, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: reachBar,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (countries.length) {
        gsap.from(countries, {
          y: 16,
          opacity: 0,
          duration: 0.4,
          ease: "expo.out",
          stagger: 0.08,
          immediateRender: false,
          scrollTrigger: {
            trigger: reachBar,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (below) {
        gsap.from(below, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: below,
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
      className="proof-ota-section standard-section"
      aria-labelledby="proof-ota-title"
    >
      <SectionHeader
        eyebrow="PILLAR 03 · OTA & REPUTATION"
        titleLine1="From algorithmic adversary"
        titleLine2="to acquisition partner."
        subtitle={SUBTITLE}
        titleId="proof-ota-title"
      />

      <div className="proof-ota-grid bento-grid">
        <div className="bento-row">
          <BentoCard
            colSpan={6}
            borderGlow
            className="proof-ota-card"
            aria-labelledby="proof-ota-rehab-title"
          >
            <div className="bento-card-content">
              <p className={cn("card-label", fontMono.className)}>
                <span className="card-label-dot" aria-hidden="true" />
                PLATFORM REHABILITATION
              </p>

              <h3
                id="proof-ota-rehab-title"
                className={cn("card-title", fontDisplay.className)}
              >
                <span className="card-title-line-1">Agoda & Booking.com</span>
                <br />
                <span className="card-title-line-2">rebuilt.</span>
              </h3>

              <div className={cn("proof-ota-body", fontUi.className)}>
                {OTA_BODY.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="service-tags-row">
                <ServiceTag>AGODA</ServiceTag>
                <ServiceTag>BOOKING.COM</ServiceTag>
                <ServiceTag>PREFERRED PARTNER</ServiceTag>
              </div>
            </div>
          </BentoCard>

          <BentoCard
            colSpan={6}
            borderGlow
            className="proof-ota-card proof-reputation-card"
            aria-labelledby="proof-reputation-title"
          >
            <div className="bento-card-content">
              <p className={cn("card-label", fontMono.className)}>
                <span className="card-label-dot" aria-hidden="true" />
                REPUTATION INFRASTRUCTURE
              </p>

              <h3
                id="proof-reputation-title"
                className={cn("card-title", fontDisplay.className)}
              >
                <span className="card-title-line-1">Google Business Profile</span>
                <br />
                <span className="card-title-line-2">rebuilt.</span>
              </h3>

              <p className={cn("card-body", fontUi.className)}>{REPUTATION_BODY}</p>

              <div className="metric-chips-row proof-reputation-chips">
                {METRIC_CHIPS.map((chip) => (
                  <MetricChip
                    key={chip.label}
                    label={chip.label}
                    value={chip.value}
                    className="proof-reputation-chip"
                  />
                ))}
              </div>

              <div className="service-tags-row">
                <ServiceTag>GOOGLE</ServiceTag>
                <ServiceTag>REVIEWS</ServiceTag>
                <ServiceTag>REPUTATION</ServiceTag>
              </div>
            </div>
          </BentoCard>
        </div>

        <div className="proof-international-reach bento-card bento-card--12">
          <div className="bento-card-inner">
            <p className={cn("card-label", fontMono.className)}>
              <span className="card-label-dot" aria-hidden="true" />
              INTERNATIONAL MARKETS REACHED
            </p>

            <div className="proof-countries-row">
              {COUNTRIES.map((item) => (
                <CountryItem
                  key={item.country}
                  country={item.country}
                  source={item.source}
                  className="proof-country-item"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className={cn("proof-ota-below", fontUi.className)}>{BELOW_BAR}</p>

      <SourceCitation className="proof-ota-citation">{CITATION}</SourceCitation>
    </section>
  );
}
