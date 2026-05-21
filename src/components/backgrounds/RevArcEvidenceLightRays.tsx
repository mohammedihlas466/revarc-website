"use client";

import LightRays from "@/components/LightRays";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type RevArcEvidenceLightRaysProps = {
  className?: string;
};

function detectWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl")
    );
  } catch {
    return false;
  }
}

/**
 * RevArc wrapper — React Bits Light Rays for Proof Evidence atmosphere.
 */
export function RevArcEvidenceLightRays({
  className,
}: RevArcEvidenceLightRaysProps) {
  const [ready, setReady] = useState(false);
  const [webglOk, setWebglOk] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setReady(true);
    setWebglOk(detectWebGL());

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
    <div
      className={cn("revarc-evidence-light-rays", className)}
      aria-hidden="true"
    >
      <LightRays
        raysOrigin="top-center"
        raysColor={CANVAS_TOKENS.lightRaysColor}
        raysSpeed={CANVAS_TOKENS.lightRaysSpeed}
        lightSpread={0.85}
        rayLength={1.65}
        pulsating={false}
        fadeDistance={1.15}
        saturation={0.9}
        followMouse={false}
        mouseInfluence={0}
        noiseAmount={0.08}
        distortion={0.04}
      />
    </div>
  );
}
