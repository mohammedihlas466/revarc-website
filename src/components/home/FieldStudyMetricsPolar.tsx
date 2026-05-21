"use client";

import { useRef } from "react";
import { FieldStudyPolarMetricCard } from "@/components/animation/field-study-metrics/FieldStudyPolarMetricCard";
import { PolarAnimatedCheck } from "@/components/animation/field-study-metrics/PolarAnimatedCheck";
import { PolarMinimalStar } from "@/components/animation/field-study-metrics/PolarMinimalStar";
import { PolarRetroCountdown } from "@/components/animation/field-study-metrics/PolarRetroCountdown";
import { gsap, useGSAP } from "@/lib/gsap";

const METRICS = [
  {
    index: "01 — DIRECT ACQUISITION",
    caption: "Millions worth of direct bookings",
    subCaption: "Millions of Confirmed Direct Bookings",
    visual: <PolarRetroCountdown />,
  },
  {
    index: "02 — OTA STATUS",
    caption: "Preferred Partner — Booking.com",
    statusTag: "CONFIRMED",
    visual: <PolarAnimatedCheck />,
  },
  {
    index: "03 — REPUTATION",
    valueHighlight: "4.7★",
    caption: "across 55+ reviews",
    visual: <PolarMinimalStar />,
  },
] as const;

export function FieldStudyMetricsPolar() {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const cards = gsap.utils.toArray<HTMLElement>(".polar-metric-card");

      if (reduceMotion) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(cards, {
        y: 48,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.12,
        immediateRender: false,
        scrollTrigger: {
          trigger: grid,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: gridRef }
  );

  return (
    <div
      ref={gridRef}
      className="field-study-metrics-polar"
      aria-label="Case study proof metrics"
    >
      <div className="field-study-metrics-polar__row">
        {METRICS.map((metric) => (
          <FieldStudyPolarMetricCard
            key={metric.index}
            index={metric.index}
            caption={metric.caption}
            visual={metric.visual}
            subCaption={"subCaption" in metric ? metric.subCaption : undefined}
            valueHighlight={
              "valueHighlight" in metric ? metric.valueHighlight : undefined
            }
            statusTag={"statusTag" in metric ? metric.statusTag : undefined}
          />
        ))}
      </div>
    </div>
  );
}
