"use client";

import { cn } from "@/lib/utils";

/** Normalized map coordinates (viewBox 400 × 220). */
const MARKET_DOTS = [
  { cx: 52, cy: 52 },
  { cx: 88, cy: 44 },
  { cx: 118, cy: 38 },
  { cx: 148, cy: 42 },
  { cx: 178, cy: 48 },
  { cx: 208, cy: 56 },
  { cx: 248, cy: 72 },
] as const;

const SRI_LANKA = { cx: 268, cy: 118 };

type MapPhase = 0 | 1 | 2;

type RevArcDottedMapProps = {
  className?: string;
  phase?: MapPhase;
};

/**
 * RevArc wrapper — manifest ID 11 (Dotted Map).
 * Phase 0: property focal · 1: markets wake · 2: full footprint.
 */
export function RevArcDottedMap({
  className,
  phase = 0,
}: RevArcDottedMapProps) {
  return (
    <div
      className={cn("dotted-map-wrap", `dotted-map-wrap--phase-${phase}`, className)}
      aria-hidden="true"
    >
      <svg
        className="dotted-map-svg"
        viewBox="0 0 400 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="revarc-dot-grid"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="0.9" fill="rgba(255, 255, 255, 0.09)" />
          </pattern>
          <radialGradient id="sri-lanka-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="400" height="220" fill="url(#revarc-dot-grid)" opacity="0.85" />

        <ellipse
          className="dotted-map-field"
          cx="200"
          cy="110"
          rx="175"
          ry="88"
          fill="rgba(125, 211, 252, 0.03)"
        />

        {MARKET_DOTS.map((dot, index) => (
          <circle
            key={`market-${index}`}
            className="dotted-map-market"
            cx={dot.cx}
            cy={dot.cy}
            r="2"
            fill="var(--accent)"
          />
        ))}

        <circle
          className="dotted-map-sri-glow"
          cx={SRI_LANKA.cx}
          cy={SRI_LANKA.cy}
          r="22"
          fill="url(#sri-lanka-glow)"
        />
        <circle
          className="dotted-map-sri-core"
          cx={SRI_LANKA.cx}
          cy={SRI_LANKA.cy}
          r="5"
          fill="var(--accent-bright)"
        />
        <circle
          className="dotted-map-sri-ring"
          cx={SRI_LANKA.cx}
          cy={SRI_LANKA.cy}
          r="9"
          stroke="var(--accent)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
