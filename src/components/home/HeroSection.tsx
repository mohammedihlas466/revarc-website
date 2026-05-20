"use client";

import { useRef } from "react";
import { RevArcGrainientHero } from "@/components/backgrounds/RevArcGrainientHero";
import { HeroTextReveal } from "@/components/animation/HeroTextReveal";
import { StatusPill } from "@/components/ui/StatusPill";
import { RevArcCtaGhost } from "@/components/ui/RevArcCtaGhost";
import { RevArcCtaPrimary } from "@/components/ui/RevArcCtaPrimary";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const FLOATING_STATS = [
  { value: "3–4×", label: "RETURN ON AD SPEND" },
  { value: "$0.47", label: "COST PER CONVERSATION" },
] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const statusPill = section.querySelector(".hero-status-pill");
      const subcopy = section.querySelector(".hero-subcopy");
      const ctas = section.querySelector(".hero-ctas");
      const stats = gsap.utils.toArray<HTMLElement>(".hero-floating-stat");

      if (reduceMotion) {
        gsap.set([statusPill, subcopy, ctas, ...stats].filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      if (statusPill) {
        tl.from(statusPill, { y: 20, opacity: 0, duration: 0.8, immediateRender: false }, 0.2);
      }

      if (subcopy) {
        tl.from(subcopy, { y: 20, opacity: 0, duration: 0.8, immediateRender: false }, 1.4);
      }

      if (ctas) {
        tl.from(ctas, { y: 16, opacity: 0, duration: 0.6, immediateRender: false }, 1.7);
      }

      if (stats.length) {
        tl.from(
          stats,
          { y: 20, opacity: 0, duration: 0.8, stagger: 0.15, immediateRender: false },
          1.9
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-bg-stack">
        <div className="hero-grainient-layer">
          <RevArcGrainientHero />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <StatusPill className="hero-status-pill">
            REVENUE STRATEGY · BOUTIQUE HOTELS
          </StatusPill>

          <HeroTextReveal />

          <p className={cn("hero-subcopy", fontUi.className)}>
            Your General Manager runs operations. You run the property.
            But nobody is making the strategic decisions about where your
            next €100,000 of margin comes from. RevArc is the revenue
            strategist your property has been missing — making the decisions,
            building the systems, and sharing accountability for the outcome.
          </p>

          <div className="hero-ctas">
            <RevArcCtaPrimary href="/contact">
              Book a Strategy Call
            </RevArcCtaPrimary>
            <RevArcCtaGhost href="/proof">See the Proof</RevArcCtaGhost>
          </div>

          <aside className="hero-stats" aria-label="Key metrics">
            {FLOATING_STATS.map((stat) => (
              <div key={stat.label} className="hero-floating-stat">
                <p className={cn("hero-stat-value", fontDisplay.className)}>
                  {stat.value}
                </p>
                <p className={cn("hero-stat-label", fontMono.className)}>
                  {stat.label}
                </p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
