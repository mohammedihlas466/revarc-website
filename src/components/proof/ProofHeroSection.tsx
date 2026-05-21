"use client";

import { useRef } from "react";
import { RevArcProofPrism } from "@/components/backgrounds/RevArcProofPrism";
import { StatusPill } from "@/components/ui/StatusPill";
import { SourceCitation } from "@/components/ui/SourceCitation";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const EYEBROW = "FIELD STUDY · 2024–2026";

const HEADLINE_LINE_1 = "Two years.";

const HEADLINE_LINE_2 = "One property rebuilt.";

const SUBTITLE =
  "A five-month documented record from a boutique villa on the southern coast of Sri Lanka — rebuilt from underperforming asset to year-round revenue engine across three pillars, operated in concert by RevArc.";

const HERO_STATS = [
  { value: "3–4×", label: "ROAS" },
  { value: "$0.47", label: "COST/CONVERSATION" },
  { value: "Rs. 2M+", label: "TRACKED REVENUE" },
] as const;

const CITATION =
  "All figures sourced from Meta Ads Manager, Booking.com Partner Extranet, Agoda YCS Dashboard, Google Business Profile, and named guest records. No estimates. No annualised projections.";

export function ProofHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const eyebrow = section.querySelector(".proof-hero__eyebrow");
      const line1 = section.querySelector(".proof-hero__headline-line--primary");
      const line2 = section.querySelector(".proof-hero__headline-line--silver");
      const subtitle = section.querySelector(".proof-hero__subtitle");
      const stats = gsap.utils.toArray<HTMLElement>(".proof-hero-stat");
      const citation = section.querySelector(".proof-hero__citation");

      if (reduceMotion) {
        gsap.set(
          [eyebrow, line1, line2, subtitle, citation, ...stats].filter(Boolean),
          { opacity: 1, y: 0, clearProps: "all" }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      if (eyebrow) {
        tl.from(
          eyebrow,
          { y: 16, opacity: 0, duration: 0.6, immediateRender: false },
          0.2
        );
      }

      if (line1) {
        tl.from(
          line1,
          { y: 24, opacity: 0, duration: 0.8, immediateRender: false },
          0.4
        );
      }

      if (line2) {
        tl.from(
          line2,
          { y: 24, opacity: 0, duration: 0.8, immediateRender: false },
          0.6
        );
      }

      if (subtitle) {
        tl.from(
          subtitle,
          { y: 16, opacity: 0, duration: 0.6, immediateRender: false },
          0.8
        );
      }

      if (stats.length) {
        tl.from(
          stats,
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.1, immediateRender: false },
          1.0
        );
      }

      if (citation) {
        tl.from(
          citation,
          { y: 8, opacity: 0, duration: 0.4, immediateRender: false },
          1.2
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="proof-hero-section"
      aria-labelledby="proof-hero-heading"
    >
      <div className="proof-hero-bg-stack" aria-hidden="true">
        <div className="proof-hero-prism-layer">
          <RevArcProofPrism />
        </div>
        <div className="proof-hero-prism-blue-tint" />
        <div className="proof-hero-prism-blue-screen" />
        <div className="proof-hero-scrim" />
      </div>

      <div className="proof-hero-section__inner standard-section">
        <StatusPill className="proof-hero__eyebrow">{EYEBROW}</StatusPill>

        <h1
          id="proof-hero-heading"
          className={cn("proof-hero__headline", fontDisplay.className)}
        >
          <span className="proof-hero__headline-line proof-hero__headline-line--primary">
            {HEADLINE_LINE_1}
          </span>
          <span className="proof-hero__headline-line proof-hero__headline-line--silver">
            {HEADLINE_LINE_2}
          </span>
        </h1>

        <p className={cn("proof-hero__subtitle", fontUi.className)}>{SUBTITLE}</p>

        <div
          className="proof-hero-stats"
          role="list"
          aria-label="Field study metrics"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="proof-hero-stat" role="listitem">
              <span
                className={cn("proof-hero-stat-value", fontDisplay.className)}
              >
                {stat.value}
              </span>
              <span className={cn("proof-hero-stat-label", fontMono.className)}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <SourceCitation className="proof-hero__citation">{CITATION}</SourceCitation>
      </div>
    </section>
  );
}
