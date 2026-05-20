"use client";

import { DottedMap } from "@/components/ui/dotted-map";
import { CANVAS_TOKENS } from "@/lib/canvas-tokens";
import { cn } from "@/lib/utils";

type RevArcMagicDottedMapProps = {
  className?: string;
  variant?: "property" | "footprint";
};

const FOOTPRINT_MARKERS = [
  { lat: 6.9271, lng: 79.8612, size: 1.2, pulse: true },
  { lat: 51.5, lng: -0.1, size: 0.5 },
  { lat: 40.7, lng: -74.0, size: 0.5 },
  { lat: 25.2, lng: 55.3, size: 0.5 },
  { lat: 1.35, lng: 103.8, size: 0.5 },
  { lat: 35.6, lng: 139.6, size: 0.5 },
  { lat: 48.8, lng: 2.3, size: 0.5 },
];

/**
 * RevArc wrapper — Magic UI Dotted Map (manifest ID 11).
 */
export function RevArcMagicDottedMap({
  className,
  variant = "property",
}: RevArcMagicDottedMapProps) {
  const markers =
    variant === "property"
      ? [{ lat: 6.9271, lng: 79.8612, size: 1.4, pulse: true }]
      : FOOTPRINT_MARKERS;

  return (
    <div className={cn("revarc-magic-dotted-map", className)}>
      <DottedMap
        width={320}
        height={160}
        mapSamples={5500}
        markers={markers}
        dotColor="rgba(255, 255, 255, 0.14)"
        markerColor={CANVAS_TOKENS.accentBright}
        dotRadius={0.18}
        stagger
        pulse
        className="h-full w-full text-[var(--accent)]"
      />
    </div>
  );
}
