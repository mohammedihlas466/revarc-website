"use client";

import Aurora from "@/components/Aurora";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type RevArcPropertyAuroraProps = {
  className?: string;
};

function detectWebGL2(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

/**
 * RevArc wrapper — React Bits Aurora for Proof Property atmosphere.
 */
export function RevArcPropertyAurora({ className }: RevArcPropertyAuroraProps) {
  const [ready, setReady] = useState(false);
  const [webglOk, setWebglOk] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setReady(true);
    setWebglOk(detectWebGL2());

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;

    setEnabled(!reduceMotion && !narrow);
  }, []);

  if (!ready || !webglOk || !enabled) {
    return null;
  }

  return (
    <div className={cn("revarc-property-aurora", className)} aria-hidden="true">
      <Aurora
        colorStops={[...CANVAS_TOKENS.auroraColorStops]}
        amplitude={CANVAS_TOKENS.auroraAmplitude}
        blend={CANVAS_TOKENS.auroraBlend}
        speed={CANVAS_TOKENS.auroraSpeed}
        intensity={CANVAS_TOKENS.auroraIntensity}
      />
    </div>
  );
}
