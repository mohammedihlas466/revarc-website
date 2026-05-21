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

      const rays = gsap.utils.toArray<SVGLineElement>(".polar-check-ray");
      const ring = svg.querySelector<SVGCircleElement>(".polar-check-ring");
      const mark = svg.querySelector<SVGPathElement>(".polar-check-mark");

      if (!ring || !mark) return;

      const ringLen = ring.getTotalLength();
      const markLen = mark.getTotalLength();

      gsap.set(rays, { opacity: 0 });
      gsap.set(ring, {
        strokeDasharray: ringLen,
        strokeDashoffset: ringLen,
        opacity: 0.5,
      });
      gsap.set(mark, {
        strokeDasharray: markLen,
        strokeDashoffset: markLen,
      });

      if (reduceMotion) {
        gsap.set([ring, mark, rays], {
          strokeDashoffset: 0,
          opacity: 1,
        });
        gsap.set(rays, { opacity: 0.28 });
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

      tl.to(rays, {
        opacity: 0.28,
        duration: 1.1,
        ease: "expo.out",
        stagger: { each: 0.02, from: "center" },
      })
        .to(
          ring,
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.85"
        )
        .to(
          mark,
          {
            strokeDashoffset: 0,
            duration: 0.75,
            ease: "expo.out",
          },
          "-=0.45"
        );
    },
    { scope: rootRef }
  );

  const rays = Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    const inner = 52;
    const outer = i % 3 === 0 ? 92 : i % 2 === 0 ? 78 : 68;
    const cx = 100;
    const cy = 118;
    return (
      <line
        key={i}
        className="polar-check-ray"
        x1={cx + Math.cos(angle) * inner}
        y1={cy + Math.sin(angle) * inner}
        x2={cx + Math.cos(angle) * outer}
        y2={cy + Math.sin(angle) * outer}
        stroke="var(--text-primary)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
    );
  });

  return (
    <svg
      ref={rootRef}
      className={cn("polar-metric-hero polar-metric-hero--check", className)}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Confirmed partner status"
    >
      <g className="polar-check-rays">{rays}</g>
      <circle
        className="polar-check-ring"
        cx="100"
        cy="118"
        r="54"
        stroke="var(--silver-mid)"
        strokeWidth="1"
      />
      <path
        className="polar-check-mark"
        d="M62 124 L88 150 L142 92"
        stroke="var(--text-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
