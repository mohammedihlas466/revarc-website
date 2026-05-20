"use client";

import { DotWave } from "@/components/ui/dot-wave";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type RevArcDotWaveSectionProps = {
  className?: string;
};

/** ScrollXUI Dot Wave — preview parity: https://scrollxui.dev/docs/components/dot-wave */
const DOT_WAVE_DOT = "#ffffff";

export function RevArcDotWaveSection({ className }: RevArcDotWaveSectionProps) {
  return (
    <DotWave
      className={cn("revarc-dot-wave-section absolute inset-0 h-full w-full", className)}
      dotClassName="revarc-dot-wave-section__canvas"
      bgColor={CANVAS_TOKENS.void}
      dotColor={DOT_WAVE_DOT}
      dotGap={20}
      dotRadiusMax={3}
      expansionSpeed={250}
      lightIntensity={0.4}
      fadeIntensity={0.08}
      repeatAnimation
      followMouse={false}
      style={{
        backgroundColor: CANVAS_TOKENS.void,
        color: DOT_WAVE_DOT,
      }}
    />
  );
}
