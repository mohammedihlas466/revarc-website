"use client";

import { useEffect, useState } from "react";
import { LocationMap } from "@/components/ui/expanded-map";

function getMapDimensions(viewportWidth: number) {
  const width = Math.min(520, Math.max(280, viewportWidth - 40));
  return {
    collapsedWidth: width,
    collapsedHeight: Math.round(width * 0.615),
    expandedWidth: width,
    expandedHeight: Math.round(width * 0.885),
  };
}

/**
 * RevArc wrapper — Joly UI Expanded Map (carto-dark) for About §C proving ground.
 * Coordinates: Tranquil Escape Villa, Hikkaduwa.
 */
export function RevArcOriginLocationMap() {
  const [dims, setDims] = useState(() =>
    getMapDimensions(typeof window !== "undefined" ? window.innerWidth : 390)
  );

  useEffect(() => {
    const update = () => setDims(getMapDimensions(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <LocationMap
      className="revarc-location-map about-origin-location-map"
      location="Tranquil Escape Villa"
      latitude={6.1408}
      longitude={80.101}
      zoom={14}
      tileProvider="carto-dark"
      collapsedWidth={dims.collapsedWidth}
      collapsedHeight={dims.collapsedHeight}
      expandedWidth={dims.expandedWidth}
      expandedHeight={dims.expandedHeight}
    />
  );
}
