"use client";

import BorderGlow from "@/components/BorderGlow";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const REVARC_GLOW_COLORS = [
  "hsla(199, 90%, 72%, 0.45)",
  "hsla(199, 70%, 58%, 0.28)",
  "hsla(0, 0%, 75%, 0.14)",
] as const;

type RevArcBorderGlowProps = {
  children: ReactNode;
  className?: string;
  animated?: boolean;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  edgeSensitivity?: number;
  coneSpread?: number;
  fillOpacity?: number;
};

/**
 * RevArc wrapper — React Bits Border Glow (re-tokenized for obsidian + accent).
 */
export function RevArcBorderGlow({
  children,
  className,
  animated = false,
  borderRadius = 20,
  glowRadius = 32,
  glowIntensity = 0.75,
  edgeSensitivity = 28,
  coneSpread = 22,
  fillOpacity = 0.18,
}: RevArcBorderGlowProps) {
  return (
    <BorderGlow
      className={cn("bento-border-glow", className)}
      backgroundColor={CANVAS_TOKENS.obsidian}
      borderRadius={borderRadius}
      glowColor="199 87% 74%"
      glowIntensity={glowIntensity}
      glowRadius={glowRadius}
      edgeSensitivity={edgeSensitivity}
      coneSpread={coneSpread}
      fillOpacity={fillOpacity}
      colors={[...REVARC_GLOW_COLORS]}
      animated={animated}
    >
      {children}
    </BorderGlow>
  );
}
