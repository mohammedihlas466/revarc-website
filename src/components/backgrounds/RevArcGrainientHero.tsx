"use client";

import Grainient from "@/components/Grainient";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type RevArcGrainientHeroProps = {
  className?: string;
};

/**
 * RevArc wrapper for manifest ID 45 (Grainient).
 * Colors map to brand void / atmosphere tones via canvas-tokens.
 */
export function RevArcGrainientHero({ className }: RevArcGrainientHeroProps) {
  return (
    <div className={cn("hero-react-bg", className)} aria-hidden="true">
      <Grainient
        alwaysAnimate
        color1={CANVAS_TOKENS.grainientColor1}
        color2={CANVAS_TOKENS.grainientColor2}
        color3={CANVAS_TOKENS.grainientColor3}
        timeSpeed={0.5}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2.6}
        warpAmplitude={50}
        rotationAmount={500}
        noiseScale={2.2}
        grainAmount={0.2}
        grainScale={1.6}
        grainAnimated={true}
        contrast={1.6}
        saturation={1.05}
        zoom={0.9}
        blendSoftness={0.05}
        colorBalance={0}
      />
    </div>
  );
}
