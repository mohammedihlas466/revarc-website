"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";
import { gsap, useGSAP } from "@/lib/gsap";
import { fontUi } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const LEFT_COLUMN = [
  "Tranquil Escape is a boutique villa in Hikkaduwa — five double rooms, three triple rooms, on the southern coast of Sri Lanka. The property accommodates up to 20 guests for group hire. Owner-operated, with mixed domestic and international demand.",
  "When RevArc took on the revenue brief, the property was performing at a fraction of its potential. Strong physical assets. Competitive positioning. Natural demand. But no system to convert that demand into consistent revenue.",
] as const;

const RIGHT_COLUMN = [
  "The southern coast runs on a heavy seasonal cycle. Peak inbound demand sits between November and April. Between May and October, occupancy drops sharply across the region.",
  "For an owner-operated villa, that pattern does not just compress profits — it threatens cash continuity. A property without a deliberate plan for the off-season is a property whose worst months determine whether it survives the year.",
  "RevArc was engaged to solve the structural problem, not to run a campaign.",
] as const;

export function ProofPropertySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollReady = useScrollAnimationReady();

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || !scrollReady) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const columns = gsap.utils.toArray<HTMLElement>(
        ".proof-property-column"
      );

      if (reduceMotion) {
        gsap.set(columns, { opacity: 1, y: 0, clearProps: "all" });
        return;
      }

      gsap.from(columns, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        stagger: 0.15,
        immediateRender: false,
        scrollTrigger: {
          trigger: section.querySelector(".proof-property-grid"),
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
      className="proof-property-section standard-section"
      aria-labelledby="proof-property-title"
    >
      <SectionHeader
        eyebrow="THE PROPERTY"
        titleLine1="Eight rooms."
        titleLine2="A coastline. A structural problem."
        titleId="proof-property-title"
      />

      <div className="proof-property-grid">
        <div className="proof-property-column proof-property-column--left">
          {LEFT_COLUMN.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={cn("proof-property-paragraph", fontUi.className)}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="proof-property-column proof-property-column--right">
          {RIGHT_COLUMN.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className={cn("proof-property-paragraph", fontUi.className)}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
