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
};

/**
 * RevArc wrapper — React Bits Border Glow (re-tokenized for obsidian + accent).
 */
export function RevArcBorderGlow({
  children,
  className,
  animated = false,
}: RevArcBorderGlowProps) {
  return (
    <BorderGlow
      className={cn("bento-border-glow", className)}
      backgroundColor={CANVAS_TOKENS.obsidian}
      borderRadius={20}
      glowColor="199 87% 74%"
      glowIntensity={0.75}
      glowRadius={32}
      edgeSensitivity={28}
      coneSpread={22}
      fillOpacity={0.18}
      colors={[...REVARC_GLOW_COLORS]}
      animated={animated}
    >
      {children}
    </BorderGlow>
  );
}
