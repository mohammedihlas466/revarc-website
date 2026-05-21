"use client";

import { useRef } from "react";
import { StatusPill } from "@/components/ui/StatusPill";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const EYEBROW = "METHODOLOGY";

const HEADLINE_LINE_1 = "A revenue engine,";

const HEADLINE_LINE_2 = "not a service contract.";

const SUBTITLE =
  "Most agencies sell you a list of tasks. RevArc builds a revenue system across three pillars — then operates it alongside you, as a strategic partner accountable for the outcome.";

export function HowWeWorkHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const eyebrow = section.querySelector(".how-we-work-hero__eyebrow");
      const line1 = section.querySelector(
        ".how-we-work-hero__headline-line--primary"
      );
      const line2 = section.querySelector(
        ".how-we-work-hero__headline-line--silver"
      );
      const subtitle = section.querySelector(".how-we-work-hero__subtitle");

      if (reduceMotion) {
        gsap.set([eyebrow, line1, line2, subtitle].filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
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
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="how-we-work-hero-section standard-section"
      aria-labelledby="how-we-work-hero-heading"
    >
      <StatusPill className="how-we-work-hero__eyebrow">{EYEBROW}</StatusPill>

      <h1
        id="how-we-work-hero-heading"
        className={cn("how-we-work-hero__headline", fontDisplay.className)}
      >
        <span className="how-we-work-hero__headline-line how-we-work-hero__headline-line--primary">
          {HEADLINE_LINE_1}
        </span>
        <span className="how-we-work-hero__headline-line how-we-work-hero__headline-line--silver">
          {HEADLINE_LINE_2}
        </span>
      </h1>

      <p className={cn("how-we-work-hero__subtitle", fontUi.className)}>
        {SUBTITLE}
      </p>
    </section>
  );
}
