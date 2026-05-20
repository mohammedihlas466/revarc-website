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
} as const;
