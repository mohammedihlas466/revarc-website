"use client";

import { useRef } from "react";
import { RevArcDarkVeil } from "@/components/backgrounds/RevArcDarkVeil";
import { StatusPill } from "@/components/ui/StatusPill";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const EYEBROW = "ABOUT REVARC";

const HEADLINE_LINE_1 = "Built slowly.";

const HEADLINE_LINE_2 = "Built to last.";

const SUBTITLE =
  "RevArc is a revenue strategy firm for independent boutique hotels. One founder. A vetted operator network across European markets. A methodology refined over two years of hands-on property operation.";

export function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const eyebrow = section.querySelector(".about-hero__eyebrow");
      const line1 = section.querySelector(".about-hero__headline-line--primary");
      const line2 = section.querySelector(".about-hero__headline-line--silver");
      const subtitle = section.querySelector(".about-hero__subtitle");

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
      className="about-hero-section"
      aria-labelledby="about-hero-heading"
    >
      <div className="about-hero-bg-stack" aria-hidden="true">
        <div className="about-hero-darkveil-layer">
          <RevArcDarkVeil />
          <div className="about-hero-veil-blue-tint" />
          <div className="about-hero-veil-blue-screen" />
        </div>
        <div className="about-hero-scrim" />
      </div>

      <div className="about-hero-section__inner">
        <StatusPill className="about-hero__eyebrow">{EYEBROW}</StatusPill>

        <h1
          id="about-hero-heading"
          className={cn("about-hero__headline", fontDisplay.className)}
        >
          <span className="about-hero__headline-line about-hero__headline-line--primary">
            {HEADLINE_LINE_1}
          </span>
          <span className="about-hero__headline-line about-hero__headline-line--silver">
            {HEADLINE_LINE_2}
          </span>
        </h1>

        <p className={cn("about-hero__subtitle", fontUi.className)}>{SUBTITLE}</p>
      </div>
    </section>
  );
}
