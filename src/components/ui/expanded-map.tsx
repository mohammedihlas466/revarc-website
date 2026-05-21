"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import NextImage from "next/image";
import type React from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

interface LocationMapProps {
  /** Location name to display */
  location?: string;
  /** Latitude coordinate */
  latitude?: number;
  /** Longitude coordinate */
  longitude?: number;
  /** Zoom level for the map (1-18) */
  zoom?: number;
  /** Additional CSS classes */
  className?: string;
  /** Map tile provider */
  tileProvider?: "openstreetmap" | "carto-light" | "carto-dark";
  /** Collapsed card width (px) */
  collapsedWidth?: number;
  /** Collapsed card height (px) */
  collapsedHeight?: number;
  /** Expanded card width (px) */
  expandedWidth?: number;
  /** Expanded card height (px) */
  expandedHeight?: number;
  /** Disable 3D tilt (mobile / touch) */
  disableTilt?: boolean;
}

const TILE_SIZE = 256;

// Convert lat/lng to tile indices (integer)
function latLngToTile(lat: number, lng: number, zoom: number) {
  const n = 2 ** zoom;
  const x = Math.floor(((lng + 180) / 360) * n);
  const latRad = (lat * Math.PI) / 180;
  const y = Math.floor(
    ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n,
  );
  return { x, y };
}

// Fractional world pixel — aligns pin to exact coordinates within tiles
function latLngToWorldPx(lat: number, lng: number, zoom: number) {
  const n = 2 ** zoom;
  const x = ((lng + 180) / 360) * n * TILE_SIZE;
  const latRad = (lat * Math.PI) / 180;
  const y =
    ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) *
    n *
    TILE_SIZE;
  return { x, y };
}

// Get tile URL based on provider
function getTileUrl(provider: string, x: number, y: number, z: number) {
  switch (provider) {
    case "carto-light":
      return `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;
    case "carto-dark":
      return `https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/${z}/${x}/${y}.png`;
    default:
      return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
  }
}

// Format coordinates for display
function formatCoordinates(lat: number, lng: number) {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lng).toFixed(4)}° ${lngDir}`;
}

export function LocationMap({
  location = "San Francisco, CA",
  latitude = 37.7749,
  longitude = -122.4194,
  zoom = 14,
  className,
  tileProvider = "carto-light",
  collapsedWidth = 240,
  collapsedHeight = 140,
  expandedWidth = 360,
  expandedHeight = 280,
  disableTilt = false,
}: LocationMapProps) {
  const gridPatternId = useId().replace(/:/g, "");
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [tilesLoaded, setTilesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const coordinates = useMemo(
    () => formatCoordinates(latitude, longitude),
    [latitude, longitude],
  );

  // Generate tile URLs for a 3x3 grid around the center tile
  const tiles = useMemo(() => {
    const centerTile = latLngToTile(latitude, longitude, zoom);
    const tileUrls: { url: string; offsetX: number; offsetY: number }[] = [];

    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        tileUrls.push({
          url: getTileUrl(
            tileProvider,
            centerTile.x + dx,
            centerTile.y + dy,
            zoom,
          ),
          offsetX: dx,
          offsetY: dy,
        });
      }
    }

    return tileUrls;
  }, [latitude, longitude, zoom, tileProvider]);

  /** Shift tile grid so the pin (card center) sits on exact lat/lng, not tile center */
  const tilePixelOffset = useMemo(() => {
    const world = latLngToWorldPx(latitude, longitude, zoom);
    const centerTile = latLngToTile(latitude, longitude, zoom);
    const tileOriginX = centerTile.x * TILE_SIZE;
    const tileOriginY = centerTile.y * TILE_SIZE;
    const pinInGridX = TILE_SIZE + (world.x - tileOriginX);
    const pinInGridY = TILE_SIZE + (world.y - tileOriginY);
    const gridCenter = (TILE_SIZE * 3) / 2;
    return {
      x: gridCenter - pinInGridX,
      y: gridCenter - pinInGridY,
    };
  }, [latitude, longitude, zoom]);

  // Preload tiles
  useEffect(() => {
    let loadedCount = 0;
    const totalTiles = tiles.length;

    tiles.forEach((tile) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalTiles) {
          setTilesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalTiles) {
          setTilesLoaded(true);
        }
      };
      img.src = tile.url;
    });
  }, [tiles]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`${location} map. ${isExpanded ? "Collapse" : "Expand"} location map.`}
      className={`relative mx-auto w-full max-w-full cursor-pointer select-none ${className ?? ""}`}
      style={{
        perspective: disableTilt ? undefined : 1000,
        width: "100%",
        maxWidth: isExpanded ? expandedWidth : collapsedWidth,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <motion.div
        className="revarc-location-map__card relative overflow-hidden rounded-[var(--card-radius)] border border-[var(--border-whisper)] bg-[var(--obsidian)]"
        style={
          disableTilt
            ? { maxWidth: "100%" }
            : {
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
                maxWidth: "100%",
              }
        }
        animate={{
          width: isExpanded ? expandedWidth : collapsedWidth,
          height: isExpanded ? expandedHeight : collapsedHeight,
          ...(disableTilt ? { rotateX: 0, rotateY: 0 } : {}),
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* Subtle gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-[var(--obsidian-raised)]/40 via-transparent to-[var(--void)]/50"
          aria-hidden="true"
        />

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Real map tiles */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute"
                  style={{
                    width: `${TILE_SIZE * 3}px`,
                    height: `${TILE_SIZE * 3}px`,
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${tilePixelOffset.x}px), calc(-50% + ${tilePixelOffset.y}px))`,
                  }}
                >
                  {tiles.map((tile, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        width: "256px",
                        height: "256px",
                        left: `${(tile.offsetX + 1) * 256}px`,
                        top: `${(tile.offsetY + 1) * 256}px`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: tilesLoaded ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <NextImage
                        src={tile.url}
                        alt=""
                        width={256}
                        height={256}
                        unoptimized
                        crossOrigin="anonymous"
                        className="h-full w-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map loading placeholder */}
              {!tilesLoaded && (
                <div className="absolute inset-0 animate-pulse bg-[var(--obsidian-raised)]" />
              )}

              {/* Location marker */}
              <motion.div
                className="revarc-location-map__marker absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0.3,
                }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="revarc-location-map__marker-icon"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    className="revarc-location-map__marker-pin"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    className="fill-[var(--obsidian)]"
                  />
                </svg>
              </motion.div>

              {/* Gradient overlays for better text readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--obsidian)] via-transparent to-transparent opacity-70" />
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[var(--obsidian)]/50 via-transparent to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern - only show when collapsed */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{ opacity: isExpanded ? 0 : 0.03 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id={gridPatternId}
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="var(--border-whisper)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${gridPatternId})`} />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-20 flex h-full flex-col justify-between p-5">
          {/* Top section */}
          <div className="flex items-start justify-between">
            <div className="relative">
              <motion.div
                className="relative"
                animate={{
                  opacity: isExpanded ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Map Icon SVG */}
                <motion.svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="revarc-location-map__fold-icon"
                  animate={{
                    filter: isHovered
                      ? "drop-shadow(0 0 10px var(--accent-glow-strong))"
                      : "drop-shadow(0 0 5px var(--accent-glow))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                  <line x1="9" x2="9" y1="3" y2="18" />
                  <line x1="15" x2="15" y1="6" y2="21" />
                </motion.svg>
              </motion.div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="space-y-1">
            <motion.h3
              className="revarc-location-map__title text-sm font-normal tracking-tight text-[var(--text-primary)]"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>

            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="revarc-location-map__coords text-xs font-normal text-[var(--label)]"
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Animated underline */}
            <motion.div
              className="revarc-location-map__underline h-px"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: isHovered || isExpanded ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
