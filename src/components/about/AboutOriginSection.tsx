"use client";

import { useRef } from "react";
import { RevArcOriginLocationMap } from "@/components/ui/RevArcOriginLocationMap";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const ORIGIN_PARAGRAPHS = [
  "RevArc was built in Sri Lanka because Sri Lanka is where the modern boutique hospitality model gets stress-tested. Properties here run on thinner margins than their European counterparts, with the same OTA dependencies, the same direct booking challenges, and the same need for disciplined revenue architecture.",
  "The methodology that survives in this market translates anywhere. A property paying 18% to Booking.com in Hikkaduwa has the same structural problem as a property paying 18% in the Algarve. The diagnosis is the same. The architecture is the same. The platform backends are identical. The revenue decisions are universal.",
  "Today, RevArc operates as a Wyoming LLC serving boutique hotels across Europe. The operator network spans multiple European markets with vetted local photographers, reputation specialists, and technical operators in each active region. The methodology — built and refined on the southern coast of Sri Lanka — is what travels.",
] as const;

const PULL_LINE_1 = "Tranquil Escape is the proving ground.";

const PULL_LINE_2 = "The model is the export.";

export function AboutOriginSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const paragraphs = gsap.utils.toArray<HTMLElement>(
        ".about-origin__paragraph"
      );
      const pull = section.querySelector(".about-origin__pull");
      const map = section.querySelector(".about-origin__map-slot");

      if (reduceMotion) {
        gsap.set([...paragraphs, pull, map].filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

      if (paragraphs.length) {
        gsap.from(paragraphs, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.15,
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".about-origin__content"),
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (map) {
        gsap.from(map, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: map,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }

      if (pull) {
        gsap.from(pull, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "expo.out",
          delay: 0.2,
          immediateRender: false,
          scrollTrigger: {
            trigger: pull,
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
      className="about-origin-section standard-section"
      aria-labelledby="about-origin-title"
    >
      <SectionHeader
        eyebrow="ORIGIN"
        titleLine1="Where the methodology"
        titleLine2="was built."
        titleId="about-origin-title"
      />

      <div className="about-origin__row bento-row">
        <div className="about-origin__content">
          {ORIGIN_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={cn("about-origin__paragraph", fontUi.className)}
            >
              {paragraph}
            </p>
          ))}

          <p className={cn("about-origin__pull", fontDisplay.className)}>
            <span className="about-origin__pull-line">{PULL_LINE_1}</span>
            <span className="about-origin__pull-line">{PULL_LINE_2}</span>
          </p>
        </div>

        <div className="about-origin__map-slot">
          <RevArcOriginLocationMap />
        </div>
      </div>
    </section>
  );
}
