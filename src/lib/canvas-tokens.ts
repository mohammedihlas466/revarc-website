/**
 * Hex values mirrored from globals.css :root — for WebGL/canvas props only.
 * Shaders cannot read CSS variables; keep in sync with RevArc token definitions.
 */
export const CANVAS_TOKENS = {
  void: "#020202",
  atmospherePrimary: "#0f2438",
  atmosphereDeep: "#061018",
  /** Hero Grainient — high contrast (mirrors React Bits visibility, RevArc accent tones) */
  /** Three distinct stops — motion reads only when hues diverge (React Bits pattern, RevArc blues) */
  grainientColor1: "#5a9fc8",
  grainientColor2: "#0c1824",
  grainientColor3: "#1e4a6e",
  obsidian: "#0a0a0b",
  accent: "#7dd3fc",
  accentBright: "#38bdf8",
  /** Prism Proof hero — hue radians toward RevArc cyan (suppresses default green/yellow) */
  prismHueShift: 2.35,
  prismColorFrequency: 0.68,
  prismGlow: 0.84,
  prismBloom: 0.88,
  prismNoise: 0.22,
  /** Light Rays — accent beam for Proof Evidence section */
  lightRaysColor: "#7dd3fc",
  lightRaysSpeed: 0.32,
  lightRaysMouseInfluence: 0.14,
  /** Aurora — Proof Property (navy → luminous sky → cyan peak) */
  auroraColorStops: ["#1e4a6e", "#bae6fd", "#38bdf8"] as const,
  auroraAmplitude: 1.08,
  auroraBlend: 0.72,
  auroraSpeed: 0.42,
} as const;
