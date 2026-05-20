"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { Building2, Package, Sparkles, UsersRound } from "lucide-react";

const BEAM_PATH =
  "M 48 168 L 148 72 L 272 72 L 372 168";

type RevArcRevenueBeamPathProps = {
  className?: string;
};

/**
 * Aceternity-style animated beam path — RevArc token pass (accent beam, void field).
 * Illustrates revenue architecture flow across property assets.
 */
export function RevArcRevenueBeamPath({ className }: RevArcRevenueBeamPathProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const beam = root.querySelector<SVGPathElement>(".revenue-beam-active");
      if (!beam) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const length = beam.getTotalLength();
      gsap.set(beam, {
        strokeDasharray: `${Math.min(length * 0.22, 72)} ${length}`,
        strokeDashoffset: 0,
      });

      if (reduceMotion) return;

      gsap.to(beam, {
        strokeDashoffset: -length,
        duration: 2.8,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className={cn("revenue-beam-path", className)} aria-hidden="true">
      <svg
        className="revenue-beam-svg"
        viewBox="0 0 420 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="revenue-beam-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--accent-bright)" stopOpacity="1" />
          </linearGradient>
          <filter id="revenue-beam-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="revenue-beam-dots"
          d={BEAM_PATH}
          stroke="var(--border-active)"
          strokeWidth="1"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />

        <path
          className="revenue-beam-active"
          d={BEAM_PATH}
          stroke="url(#revenue-beam-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#revenue-beam-glow)"
        />
      </svg>

      <div className="revenue-beam-node revenue-beam-node--start">
        <Building2 size={14} strokeWidth={1.2} />
      </div>
      <div className="revenue-beam-node revenue-beam-node--mid-left">
        <Package size={14} strokeWidth={1.2} />
      </div>
      <div className="revenue-beam-node revenue-beam-node--mid-right">
        <UsersRound size={14} strokeWidth={1.2} />
      </div>
      <div className="revenue-beam-node revenue-beam-node--end">
        <Sparkles size={14} strokeWidth={1.2} />
      </div>
    </div>
  );
}
