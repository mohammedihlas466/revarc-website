"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * CPPN band + in-shader RevArc blue pass (no green hueShift).
 * CSS tint layers reinforce accent — never filter the WebGL canvas.
 */
const REVARC_HUE_SHIFT = 28;
const REVARC_BLUE_STRENGTH = 1;

const DarkVeil = dynamic(() => import("@/components/DarkVeil"), { ssr: false });

type RevArcDarkVeilProps = {
  className?: string;
};

/**
 * RevArc wrapper for React Bits Dark Veil (manifest — hero atmosphere).
 */
export function RevArcDarkVeil({ className }: RevArcDarkVeilProps) {
  const [ready, setReady] = useState(false);
  const [config, setConfig] = useState({
    speed: 0.32,
    resolutionScale: 1,
  });

  useEffect(() => {
    setReady(true);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    const tablet = window.matchMedia("(max-width: 1023px)").matches;

    setConfig({
      speed: reduceMotion ? 0 : 0.32,
      resolutionScale: narrow ? 0.75 : tablet ? 0.88 : 1,
    });
  }, []);

  return (
    <div className={cn("revarc-darkveil", className)} aria-hidden="true">
      {ready ? (
        <DarkVeil
          hueShift={REVARC_HUE_SHIFT}
          revarcBlue={REVARC_BLUE_STRENGTH}
          speed={config.speed}
          warpAmount={0.55}
          noiseIntensity={0.04}
          scanlineIntensity={0}
          scanlineFrequency={0}
          resolutionScale={config.resolutionScale}
        />
      ) : null}
    </div>
  );
}
