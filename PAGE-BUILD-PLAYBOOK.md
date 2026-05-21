# RevArc — Page Build Playbook

Use this document for every page after Homepage. It turns the Home build into a repeatable pipeline so you do not re-discover Lenis, GSAP, tokens, or layout patterns in each chat.

**App path:** `revarc-website/` (this repo root)  
**Spec files:** `@PAGE-BUILD-PLAYBOOK.md`, `@PAGE-0X-*.md`, `@MASTER-DESIGN-SYSTEM.md`, `@GLOBAL-CONTEXT.md` — all at repo root  
**Live repo:** `mohammedihlas466/revarc-website`  
**Workflow:** Local `npm run dev:fresh` → verify → commit + push → Vercel auto-deploys

---

## 1. Four-file protocol (mandatory)

Load exactly these before writing code:

| File | Role |
|------|------|
| `MASTER-DESIGN-SYSTEM.md` | Tokens, typography, components, breakpoints, GSAP rules |
| `GLOBAL-CONTEXT.md` | Voice, banned words, audience, proof rules |
| `PAGE-0X-[NAME].md` | Wireframe, **exact copy**, components, animations, responsive |
| `.cursorrules` | Engineering locks (Next 14, React 18, accent max 5, etc.) |

**Add `UI_MANIFEST.MD` only when** the page’s Section 4 component table lists a new third-party install. Otherwise skip it to save tokens.

**Never attach** full chat history, screenshots, or the whole repo.

---

## 2. Already built globally (do not rebuild)

These live in `src/app/layout.tsx` or shared components:

- `NavBar` — `/components/layout/NavBar.tsx`
- `SiteFooter` — `/components/layout/SiteFooter.tsx`
- `SmoothScroll` + Lenis/GSAP sync — `/components/animation/SmoothScroll.tsx`
- `PageAtmosphere` — `/components/layout/PageAtmosphere.tsx`
- `scroll-animation.ts` + `useScrollAnimationReady` — required for all scroll-driven GSAP

New page = **one route file** + **section components** + **page-specific CSS** in `globals.css`.

**Reuse from About (do not reinstall):** `RevArcDarkVeil` + `DarkVeil.jsx`, `RevArcOriginLocationMap` / `expanded-map.tsx`, `StepItem.tsx` — only if the next PAGE doc calls for them.

---

## 3. Homepage pattern library (copy, do not reinvent)

| Pattern | Reference file |
|---------|----------------|
| Section eyebrow + title + subtitle | `src/components/layout/SectionHeader.tsx` |
| Section dividers | `src/components/layout/SectionDivider.tsx` |
| Bottom CTA block | `src/components/home/CtaSection.tsx` |
| Bento card + border glow | `src/components/ui/BentoCard.tsx`, `RevArcBorderGlow.tsx` |
| Status pill eyebrow | `src/components/ui/StatusPill.tsx` |
| Primary / ghost CTAs | `RevArcCtaPrimary.tsx`, `RevArcCtaGhost.tsx` |
| Scroll reveals | `useGSAP` + `useScrollAnimationReady()` in any Home section |
| 12-column grid | `globals.css` bento utilities + PAGE responsive block |
| GSAP easing | `expo.out` only; durations per PAGE doc |

---

## 4. Build order

| Status | Route | Page doc | Notes |
|--------|-------|----------|-------|
| ✅ Shipped | `/` | `PAGE-01-HOME.md` | — |
| ✅ Shipped | `/contact` | `PAGE-05-CONTACT.md` | Accent **1** |
| ✅ Shipped | `/about` | `PAGE-04-ABOUT.md` | Accent **2**; see §8 |
| **Next** | `/proof` | `PAGE-03-THE-PROOF.md` | Per PAGE-03 table |
| **Next** | `/how-we-work` | `PAGE-02-HOW-WE-WORK.md` | Per PAGE-02 table |

**One page per new Composer chat.** One git commit per completed page. Do not re-open shipped routes unless fixing a regression.

---

## 5. Standard implementation steps (per page)

### Step 0 — Scaffold route only (~2 min)

```
src/app/contact/page.tsx   → compose section components only
```

No copy changes. No new global layout.

### Step 1 — Build sections in order

Follow **SECTION 3** letters in the active `PAGE-0X` file (A → B → C …).  
Do not skip ahead. Do not merge sections.

### Step 2 — CSS

- Structural layout: Tailwind (`grid`, `flex`, `gap`, `p-*`) only.
- Colors/fonts: `var(--*)` in `globals.css` or arbitrary values `bg-[var(--void)]`.
- No raw hex in component files.
- Mobile-first: base styles for `<768px`, then `768px`, `1024px`, `1280px` per PAGE Section 6.

### Step 3 — Animation

- Page load timelines: `useGSAP` in hero (no ScrollTrigger).
- Scroll sections: `scrollTrigger` + **`dependencies: [scrollReady]`** from `useScrollAnimationReady()`.
- Register pattern:

```tsx
import { useScrollAnimationReady } from "@/hooks/useScrollAnimationReady";

const scrollReady = useScrollAnimationReady();

useGSAP(() => {
  if (!scrollReady) return;
  // ...
}, { scope: ref, dependencies: [scrollReady] });
```


### Step 4 — Validate before you stop

- [ ] Copy diff matches `PAGE-0X` exactly (no paraphrase, no `!`, no banned words, no "agency")
- [ ] Accent count ≤ PAGE Section 4 limit
- [ ] Bento rows sum to 12 columns on desktop; mobile cards span 12
- [ ] Touch targets ≥ 44px on mobile
- [ ] `npm run build` passes
- [ ] Visual check at 390 / 768 / 1280px
- [ ] No horizontal overflow

### Step 5 — Git (when user asks)

```powershell
cd revarc-website
git add <page files only>
git commit -m "Add Contact page with booking hero and call covers."
git push
```

---

## 6. Token-saving rules for Cursor

1. **@ mention files** — do not paste MD contents into the prompt.
2. **No Task/explore agents** unless a single symbol search fails.
3. **No new npm installs** unless PAGE component table + UI_MANIFEST require it.
4. **No screenshot iteration** — use PAGE Section 6 responsive specs as acceptance criteria.
5. **Section-scoped prompts** if quality slips: “Build §B only from PAGE-05.”
6. **Do not re-fix Home** unless a shared component change breaks it.
7. **Dev cache:** if the site looks unstyled (default serif, broken words), run `npm run dev:fresh` from `revarc-website` — not a code bug.

---

## 7. Shipped pages — quick reference (do not rebuild)

**Contact** — `src/components/contact/*`; accent **1** (status dot only). Calendar: embed or PAGE-05 email fallback. Omit phone if no real number.

**About** — `src/components/about/*` (§A–F). Key installs already in repo: `ogl` (Dark Veil), `motion` (expanded map). Wrappers: `RevArcDarkVeil`, `RevArcOriginLocationMap`.

---

## 8. Page-specific overrides

### Contact (`/contact`)

- Shortest page; 3 sections only.
- Hero: 5/7 grid — left editorial, right calendar bento (7 col).
- Footer: reduced top spacing — `60px` margin above footer (PAGE-05).
- Top padding hero: `200px` desktop (PAGE-05).
- WhatsApp / LinkedIn: use PLACEHOLDER URLs from PAGE until client supplies finals.

### About (`/about`) — shipped; reference only

- **Accent: 2** — hero `StatusPill` dot + §F `RevArcCtaPrimary` only. Section header dots stay silver (`.about-page` CSS).
- **Hero Dark Veil:** `RevArcDarkVeil` → `hueShift` ~28 + `revarcBlue={1}` in shader. **Never** `hueShift` ~168 (reads green). **Never** CSS `filter` on the WebGL canvas. Blue reinforced by `.about-hero-veil-blue-tint` (`mix-blend-mode: hue`) + `.about-hero-veil-blue-screen` (`screen`).
- **Hero height:** `100vh` / `100svh` — not `min(92vh, 920px)` (1080p bottom gap).
- **Origin map:** `RevArcOriginLocationMap` — fractional **tile pixel offset** in `expanded-map.tsx` (pin must land on lat/lng, not tile center). Tiles need `remotePatterns` in `next.config.mjs` (Carto/OSM). Restart dev after config edits.
- **Principles §E:** text-only cards (no canvas layers) per final build.

### The Proof (`/proof`) — next

- Longest copy; pillar sections; reuse Operating Record / proof patterns from Home where PAGE allows.

### How We Work (`/how-we-work`) — next

- Pricing + Command Centre preview; reuse Home System bento patterns. Load `PAGE-02` + `UI_MANIFEST` only for new installs listed in Section 4.

---

## 9. Failure modes (known)

| Symptom | Fix |
|---------|-----|
| 404 on `layout.css` / unstyled HTML | `npm run dev:fresh` in `revarc-website` |
| Scroll animations dead | `useScrollAnimationReady` missing on ScrollTrigger sections |
| GSAP fires before Lenis ready | Add `scrollReady` dependency |
| Accent over limit | Audit `var(--accent)` uses; revert extras |
| Dark Veil green / wrong hue | Use `revarcBlue` shader + CSS tint layers; avoid `hueShift` ~168 |
| Dark Veil invisible / near-black | Do not push `hueShift` >~200; no CSS filter on canvas; lighten scrim |
| Map tiles blank | Add Carto/OSM `remotePatterns` in `next.config.mjs`; restart dev |
| Map pin in ocean | Tile grid must offset by fractional lat/lng pixels (`expanded-map.tsx`) |

---

## 10. After Proof + How We Work (2 pages left)

- Smoke-test all nav + footer links.
- Run full `npm run build`.
- Optional cleanup: unused About experiments (`RevArcSpotlightCard`, `RevArcBorderMagicButton`) — only if still unreferenced.

---

*Playbook version: May 2026 — Home, Contact, About shipped. Next: Proof, How We Work.*
