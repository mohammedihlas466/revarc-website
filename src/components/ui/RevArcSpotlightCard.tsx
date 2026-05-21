"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useRef } from "react";

type RevArcSpotlightCardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

/**
 * RevArc CTA card — soft elliptical cursor spotlight (Componentry-style, re-tokenized).
 */
export function RevArcSpotlightCard({
  children,
  className,
  contentClassName,
}: RevArcSpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(
    ellipse 85% 55% at ${mouseX}px ${mouseY}px,
    rgba(125, 211, 252, 0.11) 0%,
    rgba(125, 211, 252, 0.04) 32%,
    transparent 62%
  )`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
    spotlightOpacity.set(1);
  };

  const handlePointerLeave = () => {
    spotlightOpacity.set(0);
  };

  return (
    <div
      ref={containerRef}
      className={cn("revarc-cta-spotlight-card", className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="revarc-cta-spotlight-card__beam"
        aria-hidden="true"
        style={{
          background: spotlight,
          opacity: spotlightOpacity,
        }}
      />
      <div className={cn("revarc-cta-spotlight-card__content", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
