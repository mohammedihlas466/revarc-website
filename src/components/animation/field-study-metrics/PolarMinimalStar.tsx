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

      const star = svg.querySelector<SVGPathElement>(".polar-star-shape");
      if (!star) return;

      const len = star.getTotalLength();

      gsap.set(star, {
        strokeDasharray: len,
        strokeDashoffset: len,
        opacity: 0.7,
      });

      if (reduceMotion) {
        gsap.set(star, { strokeDashoffset: 0, opacity: 1 });
        return;
      }

      gsap.to(star, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: svg,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: rootRef }
  );

  return (
    <svg
      ref={rootRef}
      className={cn("polar-metric-hero polar-metric-hero--star", className)}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="4.7 star rating"
    >
      <path
        className="polar-star-shape"
        d="M80 28 L92 72 L138 72 L100 98 L112 142 L80 116 L48 142 L60 98 L22 72 L68 72 Z"
        stroke="var(--text-primary)"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}
