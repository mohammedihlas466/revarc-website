"use client";

import { useRef } from "react";
import { DiagnosisProofRail } from "@/components/home/DiagnosisProofRail";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { SourceCitation } from "@/components/ui/SourceCitation";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const PARAGRAPH_1 =
  "Your General Manager runs operations. You run the property. Booking.com runs your distribution — and charges 15–25% commission on every reservation. Factor in Genius discounts you fund and Preferred Partner surcharges, and the effective rate climbs higher.";

const CITATION_1 =
  "Source: Booking.com commission structure, 10–25% range, avg 15%. Lodgify, \"Ultimate Guide to Hosting on Booking.com,\" 2026. Effective rate with Genius: Rield Revenue Management, 2026.";

const PARAGRAPH_2 =
  "But here is the structural problem: nobody runs the revenue. Nobody is deciding where the next €100,000 of margin comes from. Nobody is building a direct booking channel you own. Nobody is engineering your off-season into productive revenue months.";

const PARAGRAPH_3 =
  "In 2025, independent hotels sent 63.4% of their bookings through OTAs — up from 61.3% the year before. For a 40-room property at 70% occupancy and €200 ADR, that is more than €190,000 per year in commission sent to platforms that own the guest relationship, the data, and the pricing leverage.";

const CITATION_3 =
  "Source: Cloudbeds \"2026 State of Independent Hotels Report,\" 90 million bookings across 180 countries. OTA share: 63.4%. Commission math: 40 rooms × 70% occ. × €200 ADR × 365 days = €2,044,000 × 63.4% OTA × 15% commission = €194,382.";

const CLOSING_LINE_1 = "That money belongs in your property.";
const CLOSING_LINE_2 = "A revenue strategy puts it back.";

export function DiagnosisSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const layout = section.querySelector(".diagnosis-layout");
      if (!layout) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const railItems = gsap.utils.toArray<HTMLElement>(
        ".diagnosis-rail-reveal"
      );
      const panels = gsap.utils.toArray<HTMLElement>(
        ".diagnosis-panel-reveal"
      );
      const closing = section.querySelector(".diagnosis-closing-reveal");

      if (reduceMotion) {
        gsap.set([...railItems, ...panels, closing], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: layout,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      tl.from(railItems, {
        y: 36,
        opacity: 0,
        duration: 0.85,
        ease: "expo.out",
        stagger: 0.14,
      }).from(
        panels,
        {
          y: 48,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.22,
        },
        "-=0.1"
      );

      if (closing) {
        gsap.from(closing, {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: closing,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="diagnosis-section standard-section"
      aria-labelledby="diagnosis-title"
    >
      <div className="diagnosis-dots" aria-hidden="true" />

      <SectionHeader
        className="diagnosis-header"
        eyebrow="THE DIAGNOSIS"
        titleLine1="The role"
        titleLine2="that doesn't exist."
      />

      <div className="diagnosis-layout">
        <DiagnosisProofRail />

        <div className="diagnosis-narrative">
          <article className="diagnosis-panel diagnosis-panel-reveal">
            <div className="diagnosis-panel-inner">
              <p className={cn("diagnosis-paragraph", fontUi.className)}>
                {PARAGRAPH_1}
              </p>
              <SourceCitation>{CITATION_1}</SourceCitation>
            </div>
          </article>

          <article className="diagnosis-panel diagnosis-panel-reveal">
            <div className="diagnosis-panel-inner">
              <p className={cn("diagnosis-paragraph", fontUi.className)}>
                {PARAGRAPH_2}
              </p>
            </div>
          </article>

          <article className="diagnosis-panel diagnosis-panel-reveal">
            <div className="diagnosis-panel-inner">
              <p className={cn("diagnosis-paragraph", fontUi.className)}>
                {PARAGRAPH_3}
              </p>
              <SourceCitation>{CITATION_3}</SourceCitation>
            </div>
          </article>
        </div>
      </div>

      <div className="diagnosis-closing-band diagnosis-closing-reveal">
        <blockquote className={cn("diagnosis-closing", fontDisplay.className)}>
          <span className="diagnosis-closing-line">{CLOSING_LINE_1}</span>{" "}
          <span className="diagnosis-closing-line diagnosis-closing-line--italic">
            {CLOSING_LINE_2}
          </span>
        </blockquote>
      </div>
    </section>
  );
}
