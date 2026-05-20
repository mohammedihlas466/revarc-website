# REVARC SYSTEMS — MASTER DESIGN SYSTEM

## Build Reference for Cursor/Claude

This document is the single source of truth for every visual decision on the RevArc website. It is a technical specification, not a design brief. Every value is implementable. Every rule is enforceable. Load this file into Cursor context for every page build alongside `GLOBAL-CONTEXT.md` and the relevant page document.

**Tech Stack:** Next.js 14 (App Router) · React 18 · TypeScript (strict) · Tailwind CSS (layout/spacing utilities only — all brand tokens use CSS variables) · GSAP (ScrollTrigger, SplitText, timeline animations) · @gsap/react (`useGSAP`) · lenis/react (smooth scroll) · Lucide React (icons) · Approved React background components from `UI_MANIFEST.MD` (no Spline, no Unicorn Studio, no Framer Motion)

**Critical Build Rules:**
- Use the CSS variables below exactly. Do not create new color values.
- Use the exact typography scale specified. Do not substitute fonts or weights.
- Follow component specifications precisely. Do not invent new component patterns.
- All animations use the specified easing curves. No bouncing. No elastic. No overshoot.
- The site moves like something expensive. Slow, deliberate, weighted.

---

## 01 — CSS VARIABLES

Lock these into the global stylesheet before any component work begins. Every color, every border, every shadow references these tokens. No raw hex values anywhere in component code.

```css
:root {
  /* ── VOID & SURFACES ── */
  --void: #020202;
  --obsidian: #0A0A0B;
  --obsidian-raised: #111113;
  --obsidian-high: #18181C;

  /* ── BORDERS ── */
  --border-whisper: rgba(255, 255, 255, 0.05);
  --border-active: rgba(192, 192, 192, 0.16);

  /* ── TEXT ── */
  --text-primary: #F0F0EE;
  --text-secondary: #A8A8B4;
  --text-body: #E4E4EC;
  --text-ui: #D2D2DC;
  --text-ghost: #1A1A1E;
  --label: #606068;

  /* ── SILVER — STRUCTURAL METAL ── */
  --silver: #C0C0C0;
  --silver-mid: #888892;
  --silver-dim: rgba(192, 192, 192, 0.08);

  /* ── ACCENT — THE SINGLE CHROMATIC MOMENT ── */
  --accent: #7DD3FC;
  --accent-bright: #38BDF8;
  --accent-glow: rgba(125, 211, 252, 0.10);
  --accent-glow-strong: rgba(125, 211, 252, 0.18);

  /* ── TYPOGRAPHY ── */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-ui: 'Bricolage Grotesque', sans-serif;
  --font-mono: 'DM Mono', monospace;

  /* ── MOTION ── */
  --ease-out-expo: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-fast: 0.3s;
  --duration-medium: 0.5s;
  --duration-slow: 0.8s;
  --duration-reveal: 1.2s;

  /* ── LAYOUT ── */
  --max-width: 1280px;
  --section-pad-x: 48px;
  --section-pad-y: 160px;
  --grid-gap: 16px;
  --card-padding: 36px;
  --card-radius: 20px;
  --card-radius-inner: 12px;
  --nav-height: 52px;
  --nav-top-offset: 24px;
}
```

### Google Fonts Import

Place in `<head>` before all other styles:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Bricolage+Grotesque:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
```

---

## 02 — COLOR USAGE RULES

### The 90/5/5 Ratio (Non-Negotiable)

- **90%** of every screen is shadow and darkness (--void, --obsidian, --obsidian-raised)
- **5%** is metallic structure (--border-active, --silver, --silver-mid)
- **5%** is text and the single chromatic accent (--text-primary, --accent)

### The Accent Rule (Non-Negotiable)

The accent color (`--accent` / `--accent-bright`) appears in exactly **5 places per page**:

1. Hero headline first clause (--accent-bright)
2. Primary CTA button background (--accent)
3. Status/live indicator dot (--accent)
4. Stat values in proof sections (--accent)
5. Card visual layer intensified glow on hover (--accent-glow on bento card visual)

**Count them as you build. If you reach 6, remove one.** This constraint is what creates the visual authority. Breaking it makes the site look like every other dark-theme SaaS page.

### Surface Elevation Hierarchy

| Layer | Token | Use |
|-------|-------|-----|
| Ground | `--void` (#020202) | Page background, deepest layer |
| Surface | `--obsidian` (#0A0A0B) | Bento card fills, primary containers |
| Raised | `--obsidian-raised` (#111113) | Hover fills, modals, metric chips, canvas containers |
| High | `--obsidian-high` (#18181C) | Highest elevation — tabs, mini-cards, tooltips |

Each layer is a subtle step lighter. The difference is felt, not seen. Never skip a layer.

---

## 03 — TYPOGRAPHY SCALE

Three fonts. Three jobs. They never swap roles.

### Font Roles

| Role | Family | Job |
|------|--------|-----|
| Display | Cormorant Garamond | Headlines, hero text, section titles, card h3, stat values |
| UI | Instrument Sans | Navigation, body copy, buttons, paragraphs |
| Data | DM Mono | Eyebrow labels, hex values, stat labels, timestamps, metadata |

### Complete Type Scale

```
HERO DISPLAY LINE 1
  font-family: var(--font-display)
  font-weight: 300
  font-size: clamp(64px, 8vw, 120px)
  line-height: 0.95
  letter-spacing: -0.02em
  color: var(--accent-bright)

HERO DISPLAY LINE 2
  font-family: var(--font-display)
  font-weight: 300
  font-size: clamp(64px, 8vw, 120px)
  line-height: 0.95
  letter-spacing: -0.02em
  color: var(--text-primary)

HERO DISPLAY LINE 3
  font-family: var(--font-display)
  font-weight: 300
  font-size: clamp(64px, 8vw, 120px)
  line-height: 0.95
  letter-spacing: -0.02em
  font-style: italic
  color: var(--silver)

SECTION TITLE (h2)
  font-family: var(--font-display)
  font-weight: 300
  font-size: clamp(52px, 6vw, 84px)
  line-height: 1.0
  letter-spacing: -0.01em
  color: var(--text-primary)
  italic spans: color: var(--silver)

SECTION SUBTITLE (italic)
  font-family: var(--font-display)
  font-weight: 300
  font-style: italic
  font-size: clamp(52px, 6vw, 84px)
  color: var(--silver)

CARD TITLE (h3)
  font-family: var(--font-display)
  font-weight: 300
  font-size: clamp(28px, 2.8vw, 38px)
  line-height: 1.1
  letter-spacing: -0.01em
  color: var(--text-primary)
  italic spans: color: var(--silver)

BODY PARAGRAPH
  font-family: var(--font-ui)
  font-weight: 300
  font-size: 14–16px
  line-height: 1.75
  letter-spacing: 0.01em
  color: var(--text-secondary)

SECTION SUBTITLE (body)
  font-family: var(--font-ui)
  font-weight: 300
  font-size: 16px
  line-height: 1.7
  letter-spacing: 0.01em
  color: var(--text-secondary)
  max-width: 480px

NAV LINKS
  font-family: var(--font-ui)
  font-weight: 300
  font-size: 13px
  letter-spacing: 0.04em
  color: var(--label) → var(--text-primary) on hover

BUTTON LABELS
  font-family: var(--font-ui)
  font-weight: 400
  font-size: 13–14px
  letter-spacing: 0.04em

EYEBROW LABELS
  font-family: var(--font-mono)
  font-weight: 400
  font-size: 10–11px
  letter-spacing: 0.16–0.18em
  text-transform: uppercase
  color: var(--label)

STAT VALUES
  font-family: var(--font-display)
  font-weight: 300
  font-size: clamp(32px, 3.5vw, 48px)
  letter-spacing: -0.02em
  line-height: 1
  color: var(--accent)

CHIP LABELS
  font-family: var(--font-mono)
  font-weight: 400
  font-size: 9px
  letter-spacing: 0.14em
  text-transform: uppercase
  color: var(--label)

CHIP VALUES
  font-family: var(--font-display)
  font-weight: 400
  font-size: 22px
  line-height: 1
  color: var(--accent)

SERVICE TAG LABELS
  font-family: var(--font-mono)
  font-weight: 400
  font-size: 10px
  letter-spacing: 0.10em
  text-transform: uppercase
  color: var(--label) → var(--silver) on hover
```

### Typography Rule (Non-Negotiable)

**Typography carries hierarchy, not color.** Hierarchy is expressed through size, weight, and opacity. Secondary text is grey (`--text-secondary`), not a different chromatic color. The only chromatic color in typography is `--accent` / `--accent-bright` in stat values and the hero headline first clause.

---

## 04 — LAYOUT & SPACING

### Page Structure

```
MAX WIDTH:           1280px, centered (margin: 0 auto)
SECTION PADDING X:   48px left and right
SECTION PADDING Y:   160px top and bottom
BENTO GRID GAP:      16px (both row and column)
CARD INNER PADDING:  36px all sides
NAV HEIGHT:          52px
NAV TOP OFFSET:      24px from viewport top (fixed position)
```

### The 12-Column Bento Grid

All content sections use a 12-column grid. Every row must sum to 12.

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gap);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--section-pad-x);
}
```

### Standard Row Patterns

```
ROW PATTERN A (7/5):    Card A spans 7 columns · Card B spans 5 columns
ROW PATTERN B (5/7):    Card A spans 5 columns · Card B spans 7 columns
ROW PATTERN C (4/4/4):  Three equal cards, 4 columns each
ROW PATTERN D (12):     Full-width card or stat bar
ROW PATTERN E (6/6):    Two equal cards
ROW PATTERN F (8/4):    Primary card 8 columns · Secondary 4 columns
```

### Card Minimum Heights

```
LARGE CARD (Row 1, 7-col or 5-col):   min-height: 340px
MEDIUM CARD (Row 2, 4-col):           min-height: 280px
STAT BAR (Row 3, 12-col):             min-height: 120px
MINI CARD (proof sidebar):            min-height: 160px
```

### Section Dividers

```css
.section-divider {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--border-whisper),
    var(--border-active),
    var(--border-whisper),
    transparent
  );
}
```

---

## 05 — COMPONENT SPECIFICATIONS

### 05.1 — Bento Card (Base)

Every card in the system inherits from this base. No exceptions.

```css
.bento-card {
  position: relative;
  background: var(--obsidian);
  border: 1px solid var(--border-whisper);
  border-radius: var(--card-radius);       /* 20px */
  overflow: hidden;
  cursor: default;
  transition: all var(--duration-medium) var(--ease-out-expo);
}

/* Hover overlay — radial gradient from top center */
.bento-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(125, 211, 252, 0.04) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity var(--duration-medium) ease;
  pointer-events: none;
  z-index: 0;
}

/* Bottom accent line — appears on hover */
.bento-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-glow-strong),
    transparent
  );
  opacity: 0;
  transition: opacity var(--duration-medium) ease;
}

/* HOVER STATE */
.bento-card:hover {
  border-color: var(--border-active);
  transform: translateY(-4px);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(192, 192, 192, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.bento-card:hover::before { opacity: 1; }
.bento-card:hover::after { opacity: 1; }

/* Inner content container */
.bento-card-inner {
  position: relative;
  z-index: 1;
  height: 100%;
  padding: var(--card-padding);            /* 36px */
  display: flex;
  flex-direction: column;
}

/* Ghost numeral — bottom right corner */
.card-number {
  font-family: var(--font-display);
  font-size: 80px;
  font-weight: 300;
  color: var(--text-ghost);                /* #1A1A1E */
  line-height: 1;
  position: absolute;
  bottom: -8px;
  right: 24px;
  pointer-events: none;
  user-select: none;
  transition: color var(--duration-medium) ease;
}

.bento-card:hover .card-number {
  color: #222226;
}
```

### 05.2 — Card Eyebrow Label

```css
.card-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--label);
  text-transform: uppercase;
  margin-bottom: 24px;
}

.card-label-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--silver);
  opacity: 0.5;
}
```

### 05.3 — Primary CTA Button

```css
.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: var(--accent);
  color: var(--void);
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.04em;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--duration-fast) ease;
}

.cta-primary:hover {
  background: var(--accent-bright);
  transform: translateY(-2px);
  box-shadow:
    0 0 32px rgba(125, 211, 252, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.4);
}

/* Arrow icon: 14x14 SVG, currentColor stroke */
```

### 05.4 — Ghost / Secondary CTA Button

```css
.cta-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: var(--label);
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.04em;
  border: 1px solid var(--border-whisper);
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--duration-fast) ease;
}

.cta-ghost:hover {
  border-color: var(--border-active);
  color: var(--text-primary);
}
```

### 05.5 — Navigation Bar

```css
nav {
  position: fixed;
  top: var(--nav-top-offset);              /* 24px */
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 14px 28px;
  background: rgba(10, 10, 11, 0.70);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid var(--border-whisper);
  border-radius: 100px;
  white-space: nowrap;
}

/* Logo */
.nav-logo {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: var(--text-primary);
}
/* "Arc" portion renders in var(--accent) */

/* Nav Links */
.nav-links a {
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: var(--label);
  transition: color var(--duration-fast) ease;
}
.nav-links a:hover { color: var(--text-primary); }

/* Nav CTA */
.nav-cta {
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 400;
  color: var(--void);
  background: var(--text-primary);
  padding: 10px 22px;
  border-radius: 100px;
  border: none;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all var(--duration-fast) ease;
}
.nav-cta:hover {
  background: var(--silver);
  box-shadow: 0 0 24px rgba(192, 192, 192, 0.2);
}
```

### 05.6 — Live Status Pill (Eyebrow Element)

Used above hero headlines and section headers.

```css
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid var(--border-whisper);
  border-radius: 100px;
  backdrop-filter: blur(10px);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.14em;
  color: var(--label);
  text-transform: uppercase;
}

.status-pill-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 8px var(--accent);
  }
  50% {
    opacity: 0.5;
    box-shadow: 0 0 16px var(--accent);
  }
}
```

### 05.7 — Metric Chip

```css
.metric-chip {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 16px;
  background: var(--obsidian-raised);
  border: 1px solid var(--border-whisper);
  border-radius: 10px;
  transition: border-color var(--duration-fast) ease;
}

/* Border brightens when parent card is hovered */
.bento-card:hover .metric-chip {
  border-color: rgba(192, 192, 192, 0.08);
}

.metric-chip-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--label);
}

.metric-chip-value {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
  color: var(--accent);
}
```

### 05.8 — Service Tag / Pill

```css
.service-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.10em;
  text-transform: uppercase;
  color: var(--label);
  padding: 5px 12px;
  border: 1px solid var(--border-whisper);
  border-radius: 100px;
  transition: all var(--duration-fast) ease;
}

/* Brightens when parent card is hovered */
.bento-card:hover .service-tag {
  border-color: var(--border-active);
  color: var(--silver);
}
```

### 05.9 — Stat Bar (Full-Width Row)

```css
.stat-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 48px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  text-align: center;
}

.stat-value {
  font-family: var(--font-display);
  font-size: clamp(32px, 3.5vw, 48px);
  font-weight: 300;
  color: var(--accent);
  letter-spacing: -0.02em;
  line-height: 1;
}

.stat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  color: var(--label);
  text-transform: uppercase;
}

.stat-divider {
  width: 1px;
  height: 48px;
  background: var(--border-whisper);
}
```

### 05.10 — Section Header

Standard header block used at the top of each content section.

```css
.section-header {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 72px;
}

.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-rule {
  width: 48px;
  height: 1px;
  background: var(--border-active);
}
```

Structure: `[pulsing dot] [EYEBROW TEXT] [48px rule line]`

### 05.11 — Source Citation

Used below bold claims to show verified sources. A trust accelerator that signals integrity.

```css
.source-citation {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.08em;
  color: var(--label);               /* #606068 */
  line-height: 1.6;
  margin-top: 12px;
  padding-left: 16px;
  border-left: 1px solid var(--border-whisper);
  max-width: 480px;
  opacity: 0.8;
}

.source-citation a {
  color: var(--label);
  text-decoration: underline;
  text-decoration-color: rgba(96, 96, 104, 0.3);
  text-underline-offset: 2px;
  transition: color var(--duration-fast) ease;
}

.source-citation a:hover {
  color: var(--text-secondary);
}
```

Placement: directly below the paragraph or claim it supports, with 12px top margin. Never at the bottom of a section in a footnotes block — always inline with the claim. This keeps the evidence proximate to the statement, which is the entire point.

### 05.12 — Mini Metric Card

Used on Homepage (Operating Record preview) and The Proof (Pillar 01 stats). A smaller, informational card for stacking metric displays vertically.

```css
.mini-metric-card {
  background: var(--obsidian);
  border: 1px solid var(--border-whisper);
  border-radius: 16px;
  padding: 24px;
  transition: border-color var(--duration-fast) ease;
  /* No hover lift — these are informational, not interactive */
}

.mini-metric-card:hover {
  border-color: rgba(192, 192, 192, 0.08);
}

.mini-metric-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--label);
  margin-bottom: 8px;
}

.mini-metric-value {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 300;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 4px;
}

.mini-metric-sub {
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 300;
  color: var(--text-secondary);
}
```

### 05.13 — Status Tag (Confirmed Variant)

A semantic status indicator showing validated/confirmed states. Uses green — the only non-accent chromatic color on the site. Confined exclusively to this component. Used on How We Work (Revenue Architecture examples) and The Proof (package cards).

```css
.status-tag-confirmed {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #4ADE80;
  padding: 4px 10px;
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 100px;
  margin-top: 8px;
  display: inline-block;
}
```

Note: #4ADE80 is NOT an accent color violation. It is a semantic status indicator (confirmed/validated) and never appears outside this component type.

### 05.14 — Step Item

Used on How We Work (Revenue Architecture process) and About (Operator Network categories). A compact, vertically stacked list item for sequential or categorical information.

```css
.step-item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-whisper);
}
/* Last step-item in a group has no border-bottom */
.step-item:last-child {
  border-bottom: none;
}

.step-number {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 300;
  color: var(--text-ghost);
  line-height: 1;
  min-width: 28px;
  flex-shrink: 0;
}

.step-title {
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 400;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.step-body {
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

No hover state. Static informational content.

### 05.15 — Year Card

Full-width bento card variant with a large year label on the left and content on the right. Used on How We Work (3-Year Partnership section).

```css
.year-card {
  /* Inherits from bento-card base — all hover states apply */
}

.year-card-inner {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 48px;
  padding: var(--card-padding);
  align-items: start;
}

.year-label {
  font-family: var(--font-display);
  font-size: clamp(64px, 5vw, 84px);
  font-weight: 300;
  color: var(--text-ghost);
  line-height: 1;
  transition: color var(--duration-medium) ease;
}

/* Year label brightens subtly on card hover */
.year-card:hover .year-label {
  color: #222226;
}

.year-title {
  font-family: var(--font-display);
  font-size: clamp(24px, 2.2vw, 32px);
  font-weight: 300;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.15;
}
/* italic spans: color: var(--silver) */

.year-body {
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 20px;
  max-width: 520px;
}

.year-milestones {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  /* Uses standard service-tag components for milestone items */
}

.year-target {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--label);
  margin-top: 16px;
}
```

Responsive: at tablet (768px), grid becomes `grid-template-columns: 80px 1fr`. At mobile, single column with year label above content, `font-size: 48px`, `margin-bottom: 16px`.

### 05.16 — Footer

Minimal footer used on every page. Not a mega-footer.

```css
footer {
  border-top: 1px solid var(--border-whisper);
  padding: 32px var(--section-pad-x);
  max-width: var(--max-width);
  margin: 0 auto;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.10em;
  color: var(--label);
  text-transform: uppercase;
}

.footer-email {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.10em;
  color: var(--label);
  text-transform: uppercase;
  text-decoration: none;
  transition: color var(--duration-fast) ease;
}

.footer-email:hover {
  color: var(--text-secondary);
}
```

Content: Left side — `© 2026 RevArc Systems · Wyoming LLC`. Right side — `contact@revarcsystems.com` (linked).

Responsive: at mobile, `flex-direction: column; text-align: center; gap: 8px`.

On the Contact page, footer has reduced top margin (60px instead of standard section padding) to keep the page ending quiet.

---

## 06 — ATMOSPHERIC BACKGROUND

The background is never flat. This creates the feeling that the void has geometry — a room with walls, a distant light source from above.

### Three-Radial Atmosphere (Always Present)

```css
.page-atmosphere {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% -10%, #0C1A2E 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 90% 90%, #05101A 0%, transparent 55%),
    radial-gradient(ellipse 40% 30% at 10% 60%, #07111C 0%, transparent 50%);
}
```

Three overlapping radials: one from above-center (primary light source), one from lower-right, one from mid-left. Together they create depth without any decorative elements.

### Noise Grain Overlay

```css
.page-atmosphere::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* fractalNoise SVG */
  opacity: 0.35;
  mix-blend-mode: overlay;
}
```

Subtle film grain texture. Adds physicality to the digital surface.

### Hero React Background Layer (Homepage Hero Only)

The homepage hero adds a manifest React background **on top of** the global atmosphere (Section 06 above). Default pairing from `UI_MANIFEST.MD`:

* **Primary:** Grainient (registry ID **45**)
* **Optional accent:** Interactive Light Rays (ID **46**) at reduced opacity

```
Z-INDEX STACK:   page-atmosphere z:0 → hero React background z:1 → gradient scrim z:2 → hero content z:3
WRAPPER CSS:     position: absolute; inset: 0; width: 100%; height: 100%; overflow: hidden;
LAYER OPACITY:   0.35–0.40 at rest (subsurface motion — lower than instinct suggests)
POINTER-EVENTS:  none on the background wrapper

GRADIENT SCRIM ON TOP OF REACT BACKGROUND:
  background: linear-gradient(
    to bottom,
    var(--void) 0%,
    transparent 40%,
    transparent 75%,
    var(--void) 100%
  );
```

The React background runs underneath hero content at reduced opacity. It should feel like something is operating beneath the surface — not like a background video. **No iframes. No Unicorn Studio. No Spline.**

Other pages may omit the hero React layer unless their page document specifies one.

### Hero — Locked Reference (May 2026 — do not regress)

**Status:** SHIPPED · quality bar for all remaining homepage sections. See workspace `MASTER-DESIGN-SYSTEM.md` same section. Code: `src/components/home/HeroSection.tsx`, `src/components/backgrounds/RevArcGrainientHero.tsx`, `src/app/globals.css` hero block.

---

## 07 — REACT CARD VISUAL COMPONENTS

Card visuals are React components or canvas animations from `UI_MANIFEST.MD` — never third-party 3D embeds. They provide depth inside bento cards without competing with typography.

### Integration Method

```jsx
// Example: CardVisual wrapper in /components/backgrounds/
<div
  className="card-visual"
  aria-hidden="true"
  style={{
    position: 'absolute',
    top: 0,
    right: '-10%',
    width: '60%',
    height: '100%',
    opacity: 0.15,
    pointerEvents: 'none',
    zIndex: 1,
  }}
>
  <MeteorOrbit /> {/* or canvas per Section 09 — page doc names the variant */}
</div>
```

Install the underlying component from the manifest registry URL, then wrap it so all colors map to `var(--*)` tokens.

### Placement Rules (Non-Negotiable)

| Rule | Specification |
|------|---------------|
| Position in card | Right-edge or top-right bleed — **never centered** |
| Overflow | Allow partial bleed outside card boundary (clip at card level via `overflow: hidden`) |
| Text anchor | Bottom-left or left-column — **opposite corner** from the visual |
| z-index | Visual behind text (z:1) but above card background |
| Interaction | `pointer-events: none` on the layer (canvas animations may read parent hover via CSS) |
| Opacity at rest | 0.15 |
| Opacity on card hover | 0.32 — transition `0.5s ease opacity` |
| Hover response | Parent `.bento-card:hover .card-visual` increases opacity; optional `transform: scale(1.02)` via GSAP |

### Approved Visual Sources (Homepage Reference)

| Card | Visual | Source |
|------|--------|--------|
| Card A — Revenue Strategy | Meteor Orbit or Interactive Light Rays | UI_MANIFEST IDs **08** or **46** |
| Card B — Revenue Architecture | Canvas: Waveform + Spike | Section 09 below |

### Fallback for Cards Without a Named Visual

Use a CSS canvas animation from Section 09. Canvas animations sit at `opacity: 0.15` at rest, `opacity: 0.32` on card hover. Transition: `0.5s ease opacity`.

---

## 08 — GSAP ANIMATION SYSTEM

GSAP handles all scroll-triggered animations and hero/page entrance timelines. Route changes use a subtle CSS or GSAP opacity fade (0.5s, `power2.inOut`) — no Framer Motion dependency.

### Required GSAP Plugins

```
gsap (core)
ScrollTrigger
SplitText (Club plugin — required for text animations)
```

### Global Easing

All GSAP animations use one of two easings:

```
PRIMARY:    "expo.out"       — for reveals, entrances, position changes
SECONDARY:  "power2.inOut"   — for opacity fades, color transitions
```

**Never use:** `bounce`, `elastic`, `back` (overshoot). The site moves like something expensive. Nothing bounces. Nothing overshoots. Nothing snaps.

### Scroll Reveal System

Replace the CSS-only IntersectionObserver reveal with GSAP ScrollTrigger:

```javascript
// Base reveal — every element with .reveal class
gsap.utils.toArray('.reveal').forEach((el, i) => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    delay: el.dataset.delay || 0
  });
});
```

### Hero Text Animation (SplitText)

The hero headline animates word-by-word on page load, not on scroll:

```javascript
// Split each hero line into words
const line1 = new SplitText('.hero-line-1', { type: 'words' });
const line2 = new SplitText('.hero-line-2', { type: 'words' });
const line3 = new SplitText('.hero-line-3', { type: 'words' });

const tl = gsap.timeline({ delay: 0.3 });

tl.from(line1.words, {
  y: 60,
  opacity: 0,
  duration: 1.0,
  ease: "expo.out",
  stagger: 0.08
})
.from(line2.words, {
  y: 60,
  opacity: 0,
  duration: 1.0,
  ease: "expo.out",
  stagger: 0.08
}, "-=0.6")
.from(line3.words, {
  y: 60,
  opacity: 0,
  duration: 1.0,
  ease: "expo.out",
  stagger: 0.08
}, "-=0.6");
```

### Staggered Card Reveals

Bento cards in the same row reveal with staggered timing:

```javascript
gsap.from('.bento-row .bento-card', {
  y: 60,
  opacity: 0,
  duration: 1.0,
  ease: "expo.out",
  stagger: 0.15,
  scrollTrigger: {
    trigger: '.bento-row',
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
```

### Stat Counter Animation

Stat values count up from 0 when they enter the viewport:

```javascript
gsap.utils.toArray('.stat-value').forEach(stat => {
  const target = parseFloat(stat.dataset.value);
  const suffix = stat.dataset.suffix || '';
  const prefix = stat.dataset.prefix || '';

  gsap.from(stat, {
    textContent: 0,
    duration: 2.0,
    ease: "expo.out",
    snap: { textContent: 1 },
    scrollTrigger: {
      trigger: stat,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    modifiers: {
      textContent: (value) => prefix + Math.round(value) + suffix
    }
  });
});
```

### Parallax on Scroll (Card Visual Layers)

```javascript
gsap.to('.card-visual', {
  y: -40,
  ease: "none",
  scrollTrigger: {
    trigger: '.card-visual',
    start: "top bottom",
    end: "bottom top",
    scrub: 1.5      /* smooth scrub, 1.5s lag */
  }
});
```

### Section Divider Animation

Section dividers expand from center on scroll:

```javascript
gsap.from('.section-divider', {
  scaleX: 0,
  transformOrigin: "center center",
  duration: 1.2,
  ease: "expo.out",
  scrollTrigger: {
    trigger: '.section-divider',
    start: "top 90%",
    toggleActions: "play none none none"
  }
});
```

---

## 09 — CANVAS ANIMATIONS (Bento Card Backgrounds)

Used as atmospheric backgrounds inside bento cards when a manifest React visual is not assigned. Each card type has a unique animation.

### Global Canvas Rules

```
OPACITY AT REST:     0.15
OPACITY ON HOVER:    0.32
TRANSITION:          0.5s ease opacity
POSITION:            absolute, inset: 0, behind card content
CANVAS BACKGROUND:   var(--obsidian-raised) or transparent
ACCENT COLOR:        rgba(125, 211, 252, ...) at varying alphas
```

### Animation Types (assign per card based on content)

| Type | Description | Use For |
|------|-------------|---------|
| Network Nodes | 7 connected points with traveling dot along bezier path | OTA/platform cards |
| Waveform + Spike | Animated sine wave with conversion spike at 68% mark | Revenue/performance cards |
| Concentric Pulse | 3 rings expanding from center dot, 1s stagger | Direct booking / acquisition cards |
| Circuit Grid | Dot matrix with random firing nodes, 1.5px dots | Infrastructure / systems cards |
| Orbital Rings | Concentric ellipses with orbiting particle | Strategy / architecture cards |

Canvas animations are visual texture, not content. They should be felt, not studied.

---

## 10 — RESPONSIVE BREAKPOINTS

### Breakpoint Scale

```
DESKTOP:     1280px+ (max-width container)
LAPTOP:      1024px–1279px
TABLET:      768px–1023px
MOBILE:      below 768px
```

### Responsive Rules

```
DESKTOP (1280px+)
  Full 12-column grid. All specs as documented.
  Section padding: 160px top/bottom, 48px left/right.

LAPTOP (1024px–1279px)
  12-column grid maintained.
  Section padding: 120px top/bottom, 36px left/right.
  Hero font size scales down via clamp().
  Card padding: 28px.

TABLET (768px–1023px)
  Grid collapses: Row Pattern A (7/5) → 12/12 stacked.
  Row Pattern C (4/4/4) → 6/6 then 12 stacked.
  Section padding: 80px top/bottom, 24px left/right.
  Nav: hamburger menu replaces link list.
  Hero stats move below hero text, horizontal layout.
  Card visual layers scale to 40% width or hide.

MOBILE (below 768px)
  All cards stack to single column (12-col spans).
  Section padding: 60px top/bottom, 20px left/right.
  Card padding: 24px.
  Hero font size: clamp minimum applies (64px).
  Stat bar: wraps to 2×2 grid or vertical stack.
  Ghost numerals: hidden.
  Card visual layers: hidden (replaced by static gradient or reduced canvas animation).
  Nav: condensed pill with logo + hamburger only.
  Bento grid gap: 12px.
```

### Mobile-Specific Overrides

```css
@media (max-width: 767px) {
  :root {
    --section-pad-x: 20px;
    --section-pad-y: 60px;
    --card-padding: 24px;
    --grid-gap: 12px;
  }

  .card-number { display: none; }
  .card-visual { display: none; }

  .stat-bar-inner {
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }

  .stat-divider { display: none; }
}
```

---

## 11 — SCROLLBAR & GLOBAL STYLES

```css
/* Custom scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--void); }
::-webkit-scrollbar-thumb {
  background: var(--obsidian-raised);
  border-radius: 2px;
}

/* Global resets */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

body {
  background: var(--void);
  color: var(--text-primary);
  font-family: var(--font-ui);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  min-height: 100vh;
}

/* All main content sits above atmospheric background */
main {
  position: relative;
  z-index: 1;
}

/* Selection highlight */
::selection {
  background: rgba(125, 211, 252, 0.2);
  color: var(--text-primary);
}
```

---

## 12 — PAGE TRANSITION

Route changes use a subtle opacity fade via GSAP or CSS (no Framer Motion):

```
DURATION:     0.5s
EASING:       power2.inOut (opacity only)
MOVEMENT:     Optional 12px vertical shift on exit — never bounce or overshoot
```

Transitions are subtle. The site never feels like it's loading a new page. It feels like a camera moving through a space.

---

## 13 — NON-NEGOTIABLE RULES

These are the structural integrity of the brand. Break one and the system degrades. They exist because the most common failure mode in dark premium design is adding "just one more" accent or "just a bit more" color until the restraint that created the authority is gone.

### RULE 01 — THE ACCENT CAP
The accent color appears exactly 5 times per page. Hero headline clause, CTA button, status dot, stat values, card visual hover glow. Count them. If you reach 6, remove one.

### RULE 02 — THE VOID IS ALIVE
The background is never flat. The three-radial atmosphere CSS is always present on every page. The homepage hero adds the manifest React background layer (Grainient / Light Rays) at reduced opacity. The void has depth.

### RULE 03 — CARD VISUALS NEVER CENTER
The card visual layer is never centered in a card. It bleeds to an edge. Text anchors the opposite corner. The visual is atmosphere — not decoration competing with copy.

### RULE 04 — TYPOGRAPHY CARRIES HIERARCHY
Hierarchy is expressed through size, weight, and opacity — never through color changes. Secondary text is grey, not a different color. The only chromatic text is accent-colored stat values and the hero first line.

### RULE 05 — MOTION IS SLOW AND DELIBERATE
No bouncing. No elastic easing. No overshoot. No fast animations. Primary easing: `cubic-bezier(0.23, 1, 0.32, 1)`. Cards lift 4px. Transitions take 0.5s minimum. Scroll reveals take 1.2s. The site moves like something expensive.

### RULE 06 — NEVER IMPROVISE COMPONENTS
Every component on the site is specified in this document. If a new component is needed, it must be defined here first — with exact colors, spacing, typography, and interaction states — before it enters any page build. Claude in Cursor does not invent components.

### RULE 07 — NO RAW VALUES
Every color references a CSS variable. Every font references a CSS variable. Every spacing value references a CSS variable or uses the documented pixel values. No `#7DD3FC` in component code — only `var(--accent)`. No `'Cormorant Garamond'` in component code — only `var(--font-display)`.

---

## 14 — FILE STRUCTURE

```
/app
  /layout.tsx              Global layout, nav, atmosphere, fonts
  /page.tsx                Homepage
  /how-we-work/page.tsx    Methodology page
  /proof/page.tsx          Case study page
  /about/page.tsx          About page
  /contact/page.tsx        Contact page

/components
  /ui
    BentoCard.tsx           Base card component
    Button.tsx              CTA Primary + Ghost variants
    MetricChip.tsx          Stat chip component
    ServiceTag.tsx          Tag pill component
    StatBar.tsx             Full-width stat row
    StatusPill.tsx          Live indicator eyebrow
    SectionHeader.tsx       Eyebrow + title + subtitle block
    SectionDivider.tsx      Gradient divider line
    NavBar.tsx              Fixed navigation
  /backgrounds
    GrainientHero.tsx       Hero background wrapper (manifest ID 45)
    CardVisual.tsx          Reusable right-bleed visual slot for bento cards
    MeteorOrbit.tsx         Card visual variant (manifest ID 08)
  /animation
    ScrollReveal.tsx        GSAP ScrollTrigger wrapper
    TextReveal.tsx          SplitText word-by-word animation
    StatCounter.tsx         Counting animation for stat values
    ParallaxWrap.tsx        Scroll-linked parallax container

/styles
  globals.css              CSS variables, resets, atmosphere, scrollbar
  typography.css            Full type scale definitions

/lib
  gsap.ts                  GSAP registration and plugin setup
```

---

## 15 — CURSOR INSTRUCTIONS

Paste the following into Cursor's rules or system prompt for every build session:

```
DESIGN SYSTEM RULES — REVARC WEBSITE BUILD

1. Use the CSS variables from MASTER-DESIGN-SYSTEM.md exactly. Do not create new color values, font stacks, or spacing tokens.

2. Use the exact copy from the page document. Do not paraphrase, reorder, or generate alternative copy under any circumstances.

3. Follow the wireframe section order exactly. Do not rearrange sections or invent new sections.

4. All components must match the specifications in the Design System. Do not invent new component patterns. If a component does not exist in the spec, flag it — do not improvise one.

5. Responsive behavior must follow the Design System's Section 10. Do not assume breakpoint behavior.

6. All GSAP animations use "expo.out" easing for reveals and "power2.inOut" for fades. No bounce. No elastic. No overshoot.

7. The accent color (--accent / --accent-bright) appears maximum 5 times per page. Count before committing.

8. Card visual React components are never centered in a card. They bleed to the right edge. Text anchors the opposite corner. No Spline. No Unicorn Studio.

9. The atmospheric background (three-radial gradient + noise grain) is present on every page. It is never removed. Hero React layers are additive, not a replacement.

10. Motion is slow and deliberate. Minimum transition duration is 0.3s for micro-interactions, 0.5s for component transitions, 0.8s–1.2s for scroll reveals. Nothing moves fast.
```

---

*End of Design System. This document is referenced by every page build. It does not contain copy, wireframes, or page-specific decisions. Those live in the individual page documents.*
