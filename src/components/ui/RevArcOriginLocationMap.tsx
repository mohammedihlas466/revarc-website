"use client";

import { useEffect, useRef, useState } from "react";
import { LocationMap } from "@/components/ui/expanded-map";

function getMapDimensions(containerWidth: number) {
  const width = Math.floor(Math.min(520, Math.max(240, containerWidth)));
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
  const wrapRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({
    collapsedWidth: 320,
    collapsedHeight: 197,
    expandedWidth: 320,
    expandedHeight: 283,
  });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setDims(getMapDimensions(w));
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={wrapRef} className="about-origin-map-wrap">
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
        disableTilt
      />
    </div>
  );
}
