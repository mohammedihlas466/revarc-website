"use client";

import { useRef } from "react";
import { RevArcBorderGlow } from "@/components/ui/RevArcBorderGlow";
import { RevArcCtaGhost } from "@/components/ui/RevArcCtaGhost";
import { RevArcCtaPrimary } from "@/components/ui/RevArcCtaPrimary";
import { StatusPill } from "@/components/ui/StatusPill";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const EYEBROW = "NEXT STEP";

const HEADLINE_LINE_1 = "See if your property";

const HEADLINE_LINE_2 = "is a fit.";

const SUB_COPY =
  "A 30-minute strategy call. We diagnose your property's revenue architecture, identify the three highest-leverage opportunities, and determine whether a RevArc partnership makes sense for both sides.";

const CTA_PRIMARY = "Book a Strategy Call";

const CTA_GHOST = "Read the Operating Record";

export function HowWeWorkCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const eyebrow = section.querySelector(".how-cta-section__eyebrow");
      const lines = gsap.utils.toArray<HTMLElement>(
        ".how-cta-section__headline-line"
      );
      const subcopy = section.querySelector(".how-cta-section__subcopy");
      const actions = section.querySelector(".how-cta-section__actions");
      const card = section.querySelector(".how-cta-section__card-wrap");

      if (reduceMotion) {
        gsap.set([eyebrow, card, subcopy, actions, ...lines].filter(Boolean), {
          opacity: 1,
          y: 0,
          scale: 1,
          clearProps: "all",
        });
        return;
      }

      const scrollConfig = {
        trigger: section,
        start: "top 82%",
        toggleActions: "play none none none",
        once: true,
      };

      if (eyebrow) {
        gsap.from(eyebrow, {
          opacity: 0,
          duration: 0.6,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: scrollConfig,
        });
      }

      if (card) {
        gsap.from(card, {
          y: 24,
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: scrollConfig,
        });
      }

      if (lines.length) {
        gsap.from(lines, {
          y: 28,
          opacity: 0,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.14,
          immediateRender: false,
          scrollTrigger: scrollConfig,
        });
      }

      if (subcopy) {
        gsap.from(subcopy, {
          y: 12,
          opacity: 0,
          duration: 0.6,
          ease: "expo.out",
          delay: 0.25,
          immediateRender: false,
          scrollTrigger: scrollConfig,
        });
      }

      if (actions) {
        gsap.from(actions, {
          y: 12,
          opacity: 0,
          duration: 0.6,
          ease: "expo.out",
          delay: 0.4,
          immediateRender: false,
          scrollTrigger: scrollConfig,
        });
      }
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="cta-section how-cta-section"
      aria-labelledby="how-cta-section-title"
    >
      <div className="cta-section__glow" aria-hidden="true" />

      <div className="cta-section__inner">
        <div className="cta-section__eyebrow-wrap">
          <StatusPill className="how-cta-section__eyebrow how-cta-section__eyebrow--muted">
            {EYEBROW}
          </StatusPill>
        </div>

        <RevArcBorderGlow
          className="how-cta-section__card-wrap cta-card-border-glow"
          borderRadius={24}
        >
          <div className="cta-section__card-panel">
            <h2 id="how-cta-section-title" className="cta-section__headline">
              <span
                className={cn(
                  "how-cta-section__headline-line cta-section__headline-line cta-section__headline-line--primary",
                  fontDisplay.className
                )}
              >
                {HEADLINE_LINE_1}
              </span>
              <span
                className={cn(
                  "how-cta-section__headline-line cta-section__headline-line cta-section__headline-line--silver",
                  fontDisplay.className
                )}
              >
                {HEADLINE_LINE_2}
              </span>
            </h2>

            <p
              className={cn(
                "how-cta-section__subcopy cta-section__subcopy",
                fontUi.className
              )}
            >
              {SUB_COPY}
            </p>

            <div className="how-cta-section__actions">
              <RevArcBorderGlow
                className="cta-btn-border-glow"
                borderRadius={100}
                glowRadius={22}
                glowIntensity={0.9}
                edgeSensitivity={22}
                coneSpread={28}
                fillOpacity={0.22}
              >
                <RevArcCtaPrimary
                  href="/contact"
                  className="how-cta-section__button-primary"
                >
                  {CTA_PRIMARY}
                </RevArcCtaPrimary>
              </RevArcBorderGlow>

              <RevArcCtaGhost
                href="/proof"
                className="how-cta-section__button-ghost"
              >
                {CTA_GHOST}
              </RevArcCtaGhost>
            </div>
          </div>
        </RevArcBorderGlow>
      </div>
    </section>
  );
}
