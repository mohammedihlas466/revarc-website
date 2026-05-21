"use client";

import { LocationMap } from "@/components/ui/expanded-map";

/**
 * RevArc wrapper — Joly UI Expanded Map (carto-dark) for About §C proving ground.
 * Coordinates: Tranquil Escape Villa, Hikkaduwa.
 */
export function RevArcOriginLocationMap() {
  return (
    <LocationMap
      className="revarc-location-map about-origin-location-map"
      location="Tranquil Escape Villa"
      latitude={6.1408}
      longitude={80.101}
      zoom={14}
      tileProvider="carto-dark"
      collapsedWidth={520}
      collapsedHeight={320}
      expandedWidth={520}
      expandedHeight={460}
    />
  );
}
