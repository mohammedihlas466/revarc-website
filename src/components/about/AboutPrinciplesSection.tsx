"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BentoCard } from "@/components/ui/BentoCard";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontDisplay, fontMono, fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const PRINCIPLE_CARDS = [
  {
    ghostNumeral: "01",
    label: "PRINCIPLE 01",
    titleLine1: "The owner wins more",
    titleLine2: "than RevArc does.",
    body: "In every scenario — conservative, base, or strong — the property's net gain exceeds RevArc's total fees. This ratio is structural. It is built into the contract. The commission is earned only on genuine incremental performance, verified against the property's own data. RevArc succeeds when the property succeeds more.",
  },
  {
    ghostNumeral: "02",
    label: "PRINCIPLE 02",
    titleLine1: "Retention is earned,",
    titleLine2: "never engineered.",
    body: "There is no lock-in penalty. Annual renewal is mutual — either party can walk away at month 10 with 60 days notice. The Command Centre, the Revenue Architecture, the operator network — they create value that makes staying the obvious choice. But the choice is always yours.",
  },
  {
    ghostNumeral: "03",
    label: "PRINCIPLE 03",
    titleLine1: "Every number",
    titleLine2: "is verifiable.",
    body: "Commission calculations reference your own PMS data. Revenue Architecture projections include full cost models. Dashboard metrics are sourced from named platforms. Nothing on this website or in any RevArc deliverable is estimated, rounded for convenience, or presented without a source. If you ask where a number comes from, there is always an answer.",
  },
] as const;

export function AboutPrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      if (!section || !grid || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const cards = gsap.utils.toArray<HTMLElement>(
        grid.querySelectorAll(".about-principle-card")
      );

      if (reduceMotion) {
        gsap.set(cards, { opacity: 1, y: 0, clearProps: "all" });
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
          trigger: grid,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [scrollReady] }
  );

  return (
    <section
      ref={sectionRef}
      className="about-principles-section standard-section"
      aria-labelledby="about-principles-title"
    >
      <SectionHeader
        eyebrow="PRINCIPLES"
        titleLine1="Three principles"
        titleLine2="that govern everything."
        titleId="about-principles-title"
      />

      <div ref={gridRef} className="about-principles__grid bento-row">
        {PRINCIPLE_CARDS.map((card) => (
          <BentoCard
            key={card.ghostNumeral}
            colSpan={4}
            borderGlow
            ghostNumeral={card.ghostNumeral}
            className="about-principle-card"
            aria-labelledby={`about-principle-${card.ghostNumeral}-title`}
          >
            <div className="bento-card-content">
              <p className={cn("card-label", fontMono.className)}>
                <span className="card-label-dot" aria-hidden="true" />
                {card.label}
              </p>

              <h3
                id={`about-principle-${card.ghostNumeral}-title`}
                className={cn("card-title", fontDisplay.className)}
              >
                <span className="card-title-line-1">{card.titleLine1}</span>{" "}
                <span className="card-title-line-2">{card.titleLine2}</span>
              </h3>

              <p className={cn("card-body", fontUi.className)}>{card.body}</p>
            </div>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
