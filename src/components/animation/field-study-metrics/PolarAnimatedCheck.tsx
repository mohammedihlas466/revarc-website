"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type PolarAnimatedCheckProps = {
  className?: string;
};

export function PolarAnimatedCheck({ className }: PolarAnimatedCheckProps) {
  const rootRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = rootRef.current;
      if (!svg) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const ring = svg.querySelector<SVGCircleElement>(".polar-check-ring");
      const mark = svg.querySelector<SVGPathElement>(".polar-check-mark");

      if (!ring || !mark) return;

      const ringLen = ring.getTotalLength();
      const markLen = mark.getTotalLength();

      gsap.set(ring, {
        strokeDasharray: ringLen,
        strokeDashoffset: ringLen,
        opacity: 0.4,
      });
      gsap.set(mark, {
        strokeDasharray: markLen,
        strokeDashoffset: markLen,
        opacity: 0.85,
      });

      if (reduceMotion) {
        gsap.set([ring, mark], { strokeDashoffset: 0, opacity: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(ring, {
        strokeDashoffset: 0,
        opacity: 0.65,
        duration: 1.8,
        ease: "power2.inOut",
      }).to(
        mark,
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=0.9"
      );
    },
    { scope: rootRef }
  );

  return (
    <svg
      ref={rootRef}
      className={cn("polar-metric-hero polar-metric-hero--check", className)}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Confirmed partner status"
    >
      <circle
        className="polar-check-ring"
        cx="80"
        cy="80"
        r="52"
        stroke="var(--silver-mid)"
        strokeWidth="1"
      />
      <path
        className="polar-check-mark"
        d="M48 82 L68 102 L114 58"
        stroke="var(--text-primary)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
