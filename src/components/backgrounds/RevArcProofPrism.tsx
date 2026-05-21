"use client";

import Prism from "@/components/Prism";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type RevArcProofPrismProps = {
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
 * RevArc wrapper — React Bits Prism with brand hue + restrained motion.
 */
export function RevArcProofPrism({ className }: RevArcProofPrismProps) {
  const [ready, setReady] = useState(false);
  const [webglOk, setWebglOk] = useState(false);
  const [config, setConfig] = useState({
    timeScale: 0.38,
    resolutionScale: 1,
  });

  useEffect(() => {
    setReady(true);
    setWebglOk(detectWebGL());

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    const tablet = window.matchMedia("(max-width: 1023px)").matches;

    setConfig({
      timeScale: reduceMotion ? 0 : 0.38,
      resolutionScale: narrow ? 0 : tablet ? 0.88 : 1,
    });
  }, []);

  if (!ready || !webglOk || config.resolutionScale === 0) {
    return null;
  }

  return (
    <div className={cn("revarc-proof-prism", className)} aria-hidden="true">
      <Prism
        animationType="3drotate"
        hueShift={CANVAS_TOKENS.prismHueShift}
        glow={CANVAS_TOKENS.prismGlow}
        bloom={CANVAS_TOKENS.prismBloom}
        noise={CANVAS_TOKENS.prismNoise}
        scale={2.05}
        timeScale={config.timeScale}
        colorFrequency={CANVAS_TOKENS.prismColorFrequency}
        offset={{ x: 0, y: 28 }}
        suspendWhenOffscreen={false}
        transparent
      />
    </div>
  );
}
