"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type PolarMinimalStarProps = {
  className?: string;
};

export function PolarMinimalStar({ className }: PolarMinimalStarProps) {
  const rootRef = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = rootRef.current;
      if (!svg) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const outer = svg.querySelector<SVGPathElement>(".polar-star-outer");
      const inner = svg.querySelector<SVGPathElement>(".polar-star-inner");

      if (!outer || !inner) return;

      const outerLen = outer.getTotalLength();
      const innerLen = inner.getTotalLength();

      gsap.set(outer, {
        strokeDasharray: outerLen,
        strokeDashoffset: outerLen,
      });
      gsap.set(inner, {
        strokeDasharray: innerLen,
        strokeDashoffset: innerLen,
        opacity: 0.55,
      });

      if (reduceMotion) {
        gsap.set([outer, inner], { strokeDashoffset: 0, opacity: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(outer, {
        strokeDashoffset: 0,
        duration: 1.1,
        ease: "expo.out",
      }).to(
        inner,
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 0.85,
          ease: "expo.out",
        },
        "-=0.55"
      );
    },
    { scope: rootRef }
  );

  return (
    <svg
      ref={rootRef}
      className={cn("polar-metric-hero polar-metric-hero--star", className)}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="4.7 star rating"
    >
      <path
        className="polar-star-outer"
        d="M100 36 L112 88 L168 88 L122 120 L138 172 L100 140 L62 172 L78 120 L32 88 L88 88 Z"
        stroke="var(--text-primary)"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        className="polar-star-inner"
        d="M100 72 L106 100 L134 100 L110 118 L118 146 L100 130 L82 146 L90 118 L66 100 L94 100 Z"
        stroke="var(--silver)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
