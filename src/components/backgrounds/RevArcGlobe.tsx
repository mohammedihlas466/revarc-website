"use client";

import Globe from "@/components/ui/globe";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

/** RGB 0–1 for cobe globe shader */
function hexToRgb01(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0.1, 0.1, 0.12];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
}

const MARKET_MARKERS: {
  location: [number, number];
  size: number;
}[] = [
  { location: [6.9271, 79.8612], size: 0.14 },
  { location: [51.5074, -0.1278], size: 0.05 },
  { location: [40.7128, -74.006], size: 0.05 },
  { location: [25.2048, 55.2708], size: 0.05 },
  { location: [1.3521, 103.8198], size: 0.05 },
  { location: [35.6762, 139.6503], size: 0.05 },
  { location: [48.8566, 2.3522], size: 0.05 },
  { location: [-33.8688, 151.2093], size: 0.05 },
];

type RevArcGlobeProps = {
  className?: string;
  focus?: "sri-lanka" | "markets";
};

/**
 * RevArc wrapper — ScrollXUI Globe (manifest ID 07).
 */
export function RevArcGlobe({
  className,
  focus = "markets",
}: RevArcGlobeProps) {
  return (
    <div
      className={cn(
        "revarc-globe-wrap",
        focus === "markets" && "revarc-globe-wrap--markets",
        focus === "sri-lanka" && "revarc-globe-wrap--sri-lanka",
        className
      )}
    >
      <Globe
        className="revarc-globe-canvas"
        baseColor={[0.14, 0.16, 0.2]}
        markerColor={hexToRgb01(CANVAS_TOKENS.accentBright)}
        glowColor={hexToRgb01(CANVAS_TOKENS.accent)}
        markers={MARKET_MARKERS}
        rotateToLocation={focus === "sri-lanka" ? [6.9271, 79.8612] : undefined}
        rotateCities={
          focus === "markets"
            ? ["london", "dubai", "singapore", "paris", "tokyo"]
            : []
        }
        autoRotate
        scale={1.05}
      />
    </div>
  );
}
