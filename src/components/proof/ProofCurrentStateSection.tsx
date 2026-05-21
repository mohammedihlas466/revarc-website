"use client";

import { useRef } from "react";
import { StatCounter } from "@/components/animation/StatCounter";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const NARRATIVE = [
  "At the close of the documented period, Tranquil Escape operates with three independent revenue channels running in concert.",
  "The direct booking channel produces inquiries on demand, governed by a paid acquisition lever the owner controls. The OTA channel delivers global demand at improved economics, with a property profile the algorithm now amplifies rather than suppresses. The reputation channel feeds both — providing the proof signals that convert browsers into bookers.",
  "The property has a different relationship with seasonality than it did before. The off-season is no longer a quiet period to be endured. It is a programmable revenue window with its own products, its own ad spend, its own conversion economics, and its own confirmed history of producing revenue.",
] as const;

const STAT_ITEMS = [
  { value: "3", label: "REVENUE CHANNELS" },
  { value: "7", label: "INTERNATIONAL MARKETS" },
  { value: "2+", label: "YEARS OPERATED" },
  { value: "Owner", label: "CONTROLLED" },
] as const;

const CLOSING =
  "This is the methodology RevArc now applies to every hospitality engagement. The problems are universal. The architecture is the same. The property changes. The system translates.";

export function ProofCurrentStateSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const narrative = section.querySelector(".proof-current-narrative");
      const statBar = section.querySelector(".proof-closing-stat-bar");
      const closing = section.querySelector(".proof-current-closing");

      if (reduceMotion) {
        gsap.set([narrative, statBar, closing].filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

      if (narrative) {
        gsap.from(narrative, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: narrative,
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
      className="proof-current-section standard-section"
      aria-labelledby="proof-current-title"
    >
      <SectionHeader
        eyebrow="CURRENT STATE"
        titleLine1="A working"
        titleLine2="revenue engine."
        titleId="proof-current-title"
      />

      <div className={cn("proof-current-narrative", fontUi.className)}>
        {NARRATIVE.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="proof-current-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <StatCounter
        stats={STAT_ITEMS}
        className="proof-closing-stat-bar"
      />

      <p className={cn("proof-current-closing", fontUi.className)}>{CLOSING}</p>
    </section>
  );
}
