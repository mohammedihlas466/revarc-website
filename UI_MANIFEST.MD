# REVARC SYSTEMS: MASTER UI ARCHITECTURE & COMPONENT MANIFEST
## SYSTEM VERSION: 2026.1 // PRODUCTION READY

This document serves as the absolute technical and aesthetic blueprint for the RevArc systems web infrastructure. Every line of code generated, layout composed, and interactive timeline engineered via Cursor and Composer 2.5 must strictly adhere to the parameters, dependency controls, and implementation matrix detailed below.

### Excluded Technologies (Do Not Use)
* **Spline 3D** (`@splinetool/react-spline`) — removed from the stack.
* **Unicorn Studio** (iframe embeds) — removed from the stack.
* All hero, section, and card atmosphere must be built from **React components** listed in this manifest (registry IDs **45–51** for backgrounds, plus canvas patterns in `MASTER-DESIGN-SYSTEM.md` Section 09).

---

## 1. CORE ENGINEERING SPECIFICATIONS & DEPENDENCY CONTROLS

### A. Root Smooth Scroll Architecture (Lenis)
* **Package Enforcement:** Do not use legacy `@studio-freight/lenis` or `@studio-freight/react-lenis` packages, as they are fully deprecated. Use the unified `lenis` package under the Darkroom Engineering namespace.
* **Installation Command:** Run `npm install lenis` in the terminal.
* **Root Mount:** Import `{ ReactLenis } from "lenis/react"` and mount `<ReactLenis root />` exactly once within the root `app/layout.tsx` wrapper.
* **Performance Metrics:** Lenis remains the definitive industry standard due to its lightweight footprint (~3 KB) and permissive MIT license. It outclasses heavier alternatives like Locomotive-Scroll, whose development team has consolidated attention onto the Lenis ecosystem.
* **Production Configuration Object:** Pass the following precise options to control inertial damping and self-rendering frames:
    ```typescript
    options={{ 
      lerp: 0.08, 
      smoothWheel: true, 
      autoRaf: true 
    }}
    ```
* **Frame-Locked Sync Matrix:** To prevent rendering lag or visual tearing on high-refresh-rate displays during parallax sequences, explicitly bind the scroll instance to the GSAP global ticker:
    ```typescript
    lenis.on('scroll', ScrollTrigger.update)
    ```

### B. Cinematic Multi-Panel Horizontal Scroll (GSAP ScrollTrigger)
* **Package Enforcement:** Utilize core GSAP coupled with the ScrollTrigger plugin. Following GSAP's transition to a fully free MIT model (including all premium Club plugins), this setup provides the most robust orchestration layer available.
* **Engineering Rationale:** Avoid relying on Framer Motion for prolonged, heavy structural layout pins, as its scroll container event polling causes tracking jitter on extended scroll durations. GSAP handles frame-locked pin-and-scrub mechanics natively.
* **Production Implementation Logic:**
    * Pin the parent viewport container tracking the scroll animation timeline.
    * Scrub smoothly across exactly three full-viewport canvas sections representing the core partnership milestones (Year 1 / Year 2 / Year 3 Partnership or the Three Pillars).
    * Enforce a deliberate, immersive chapter-by-chapter pacing feel by executing a strict structural snap setting:
        ```typescript
        snap: 1 / (panels - 1)
        ```
* **Framer Motion Fallback Protocol:** If an isolated module explicitly mandates a localized fallback without GSAP overhead, deploy Aceternity's vertical `Sticky Scroll Reveal` or the React Bits `Scroll Stack` canvas wrapper, acknowledging that it offers a slightly less cinematic response than the native GSAP pin.

### C. Project Bootstrap (Run Once Before First Page Build)
* **Scaffold:** `npx create-next-app@14 revarc-website --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*"`
* **Core packages:** `npm install gsap @gsap/react lenis lucide-react`
* **GSAP plugins:** Register `ScrollTrigger` and `SplitText` in `/lib/gsap.ts` (SplitText requires GSAP Club access — use the licensed build you have on file).
* **Component sources:** Install or copy approved UI blocks from MagicUI, ScrollXUI, React Bits, and Motion Primitives per registry URLs below. Each background/visual is a **React component file** under `/components/backgrounds/`, not an iframe or external host.
* **Do not install:** `@splinetool/react-spline`, Unicorn Studio SDK, or Framer Motion (scroll and page motion are GSAP + Lenis only).

---

## 2. PRODUCTION SITE ARCHITECTURE & SPECIFIC BLOCK MAPPING

When deploying page generations through Composer 2.5, structure the layout blocks using these exact component pairings to ensure optimal functional alignment:

### Block 1: Hero & Atmospheric Introduction
* **Aesthetic Layering:** Apply an obsidian-tier backdrop using React component **Grainient** (registry ID **45**) with optional **Interactive Light Rays** (ID **46**) layered at reduced opacity. Map all colors to CSS variables from `MASTER-DESIGN-SYSTEM.md` — never hardcoded hex in component files.
* **Global atmosphere (every page):** The three-radial CSS gradient + noise grain from Design System Section 06 stays in `layout.tsx`. Hero adds the manifest React layer on top — not a replacement.
* **Preloading Sequence:** Enforce an initial cold-load block using the multi-language community `Hello Preloader` to establish international scale before transitioning elements into view.
* **Text Entrance:** Animate high-impact hero positioning hooks via `Character Morph` to execute clean, cinematic character-by-character transitions on page entry.

### Block 2: The Analytical "Command Center" (Core Value & Metrics Display)
* **Structural Layout:** Arrange all functional engineering features inside a highly dense, scannable `Bento Grid` matrix.
* **Bento Interaction:** Apply reactive `Spotlight Effects` directly around the borders and buttons of the bento items to create a responsive, high-fidelity tactile feel.
* **Data Dashboards:** Embed crisp financial performance charts within the bento array using `Tremor Blocks Chart Compositions`.
* **Dynamic Counting:** Feed all analytical baselines, conversion tracking numbers, and ROAS outputs through fluid counters using `Animated Number` or `Sliding Number` to keep data visualizations responsive and dynamic.

### Block 3: Global Footprint & Validation Layout
* **Primary Visual Element:** Center the block around the premium `ScrollXUI Globe` (Obsidian variant) to visually anchor global brand reach. Use the vector-based `Dotted Map` as a lightweight alternative for performance-critical structural instances.
* **Social Proof Engineering:** Display high-tier enterprise reviews and case performance metrics using the premium `Animated Testimonials` deck to maintain polished, elegant layout transitions.

### Block 4: Strategic Call Capture & System Integrity
* **Mandatory Conversion Layout:** Build the closing lead-generation capture section exclusively using the `Contact with Globe` block layout. This configuration is mandatory.
* **Inbound Interface:** Embed the premium `ScrollXUI Calendar` directly into the scheduling dashboard to allow prospects to book real-time strategy calls.
* **Security Accents:** Stylize authentication verification flows or secure client zones with interactive `Vault Lock` or `Bot Detection` components from the ForgeUI Obsidian collection.

---

## 3. MASTER COMPONENT REGISTRY & INTERACTION MATRIX

The following index contains every approved interactive element available for system assembly. Composer 2.5 must cross-reference this registry to pull source documentation during layout generation:

| ID | Component Name | Source URL | Core Implementation Notes |
| :--- | :--- | :--- | :--- |
| **01** | Lenis Smooth Scroll | https://lenis.darkroom.engineering/ | Mandatory global root scroll framework; frame-locked configuration. |
| **02** | GSAP ScrollTrigger | https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | Core multi-panel horizontal section pin-and-scrub orchestration. |
| **03** | Scroll Stack | https://www.reactbits.dev/components/scroll-stack | Fragmented layout fallback for non-GSAP motion containers. |
| **04** | Progressive Blur | https://motion-primitives.com/docs/progressive-blur | Smooth transitions and edge-feathering on overlay elements. |
| **05** | Hello Preloader | https://21st.dev/community/components/info-mdshakeeb/preloader/default | Multi-language sequential loading animation for cold site access. |
| **06** | Bento Grid | https://magicui.design/docs/components/bento-grid | Multi-column layouts to organize functional analytics. |
| **07** | ScrollXUI Globe | https://scrollxui.dev/docs/components/globe | Premium Obsidian-styled 3D globe visualization asset. |
| **08** | Meteor Orbit | https://scrollxui.dev/docs/components/meteor-orbit | Orbital background details for data focal points. |
| **09** | Stats Count Premium | https://scrollxui.dev/docs/components/statscount | High-priority revenue metrics display block. |
| **10** | Contact with Globe | https://scrollxui.dev/blocks/contact-sections/contact-with-globe | Mandatory final contact layout form block. |
| **11** | Dotted Map | https://magicui.design/docs/components/dotted-map | Lightweight dot-matrix geographical vector asset. |
| **12** | Spotlight Card (Premium) | https://scrollxui.dev/docs/components/spotlightcard | High-end hover illumination framework for value blocks. |
| **13** | Magic Card | https://magicui.design/docs/components/magic-card | Smooth, glowing pointer-tracking border rendering. |
| **14** | Number Ticker | https://magicui.design/docs/components/number-ticker | Linear numerical increment element for static stats. |
| **15** | Animated List | https://magicui.design/docs/components/animated-list | Continuous feed orchestration inside the Command Center layout. |
| **16** | Tremor Charts | https://blocks.tremor.so/blocks/chart-compositions | Analytical composition layout charts for baseline displays. |
| **17** | Count Up | https://reactbits.dev/text-animations/count-up | Alternate fluid text animation counter for general stats. |
| **18** | Animated Testimonials | https://scrollxui.dev/docs/components/animated-testimonials | Interactive review switching deck for enterprise social proof. |
| **19** | Bars Wave Background | https://scrollxui.dev/docs/components/barswave | Obsidian premium background grid with rhythmic audio/motion waves. |
| **20** | Premium Calendar | https://scrollxui.dev/docs/components/calendar | Elegant inbound scheduler layout for booking growth calls. |
| **21** | Hyper Text | https://magicui.design/docs/components/hyper-text | Randomized character decoding effect on text hover. |
| **22** | Flickering Grid | https://magicui.design/docs/components/flickering-grid | Semitransparent background noise matrix with flashing nodes. |
| **23** | Interactive Hover Button | https://magicui.design/docs/components/interactive-hover-button | Magnetic, physics-bounded CTA interaction button. |
| **24** | Ripple | https://magicui.design/docs/components/ripple | Concentric focal lines behind central product elements. |
| **25** | Spotlight Effect | https://ui.aceternity.com/components/spotlight | Large radial overlay beam tracking the layout hero element. |
| **26** | Bot Detection | https://forgeui.in/components/bot-detection | Ultra-premium dark cybersecurity interaction simulation. |
| **27** | Vault Lock | https://forgeui.in/components/vault-lock | Animated mechanical lock graphics for secure data entries. |
| **28** | Text Animate (Blur In Up)| https://www.componentry.fun/docs/components/text-animate | Fluid vertical text layout reveal with a clean gaussian pass. |
| **29** | Spotlight Card (Interactive)| https://www.componentry.fun/docs/components/spotlight-card | Alternate responsive spotlight card container. |
| **30** | Highlighted Text | https://spell.sh/docs/highlighted-text | Micro-drawn SVG callout markers under critical headers. |
| **31** | Words Stagger | https://spell.sh/docs/words-stagger | Ordered sequential string parser for long headlines. |
| **32** | Gradient Wave Text | https://spell.sh/docs/gradient-wave-text | Moving color-gradient masks applied across copy items. |
| **33** | Text Scramble | https://motion-primitives.com/docs/text-scramble | Complex character cycling transition script for text copy. |
| **34** | Text Loop | https://motion-primitives.com/docs/text-loop | Continuous vertical or horizontal phrase cycling carousel. |
| **35** | Text Effect | https://motion-primitives.com/docs/text-effect | Fine-grained, frame-by-frame character or word animation. |
| **36** | Animated Number | https://motion-primitives.com/docs/animated-number | Spring-physics numerical tracker ideal for live ROI data. |
| **37** | Sliding Number | https://motion-primitives.com/docs/sliding-number | Cinematic odometer-style rolling number transformation. |
| **38** | Spotlight Border | https://motion-primitives.com/docs/spotlight | Perimeter neon spotlight track for grid structures. |
| **39** | Border Trail | https://motion-primitives.com/docs/border-trail | Moving precise illumination node tracing container borders. |
| **40** | Character Morph | https://www.jolyui.dev/docs/components/text-animations/character-morph | Clean typography transitions for hero headers. |
| **41** | Scroll Text Progress | https://www.jolyui.dev/docs/components/text-animations/scroll-text | High-end horizontal scroll-linked typographic reveal. |
| **42** | Shutter Text | https://www.jolyui.dev/docs/components/text-animations/shutter-text | Structural horizontal typography window shutter reveal. |
| **43** | Expanded Map | https://www.jolyui.dev/docs/components/creative/expanded-map | Fluid immersive map expansion layout for locations. |
| **44** | Fancy Text | https://scrollxui.dev/docs/components/fancy-text | Premium typography layouts for high-end subheadings. |
| **45** | Grainient Background | https://reactbits.dev/backgrounds/grainient?color2=000000 | Frosted glass texture canvas overlaid with deep grain. |
| **46** | Interactive Light Rays | https://reactbits.dev/backgrounds/light-rays | Dynamic ambient backlighting tracking user engagement. |
| **47** | Light Pillar | https://reactbits.dev/backgrounds/light-pillar?topColor=000000&bottomColor=00a8ff | Vertical light pillars slicing dark background layouts. |
| **48** | Background Dot Pattern | https://magicui.design/docs/components/dot-pattern | Minimalist CSS vector-based dot grids for sections. |
| **49** | Texture Overlays | https://www.cult-ui.com/docs/components/texture-overlay | High-fidelity industrial material overlays. |
| **50** | Animated Gradient | https://spell.sh/docs/animated-gradient | Morphing liquid color backgrounds (Lava/Prism presets). |
| **51** | Shadcn Cards Core | https://allshadcn.com/components/?category_child%5B0%5D=cards | Underlying structured layouts for dashboard UI blocks. |

---

## 4. REACT BACKGROUND & CARD VISUAL RULES

All motion backgrounds are **installed React components** copied or CLI-added from the registry URLs above, then wrapped for RevArc tokens.

| Layer | Implementation | Registry IDs |
| :--- | :--- | :--- |
| Site-wide atmosphere | CSS only (three radials + grain) | Design System §06 |
| Hero (Home) | `Grainient` + optional `Interactive Light Rays` | **45**, **46** |
| Bento card visuals | Canvas animation (Design System §09) or `Meteor Orbit`, `Bars Wave`, `Flickering Grid` | **08**, **19**, **22** |
| Section accents | `Background Dot Pattern`, `Light Pillar` | **48**, **47** |

**Placement (non-negotiable):**
* Card visuals sit `position: absolute`, anchored **right or top-right**, bleeding past the card edge. Text stays **bottom-left** or left column.
* Default opacity at rest: **0.15**. On card hover: **0.32** (0.5s ease).
* `pointer-events: none` on background layers unless the component requires cursor tracking (e.g. Light Rays).
* Below **768px**: hide heavy React backgrounds; use CSS gradient fallback per page document.

**File location:** `/components/backgrounds/[ComponentName].tsx` — one wrapper per manifest component.

---

## 5. BRAND AESTHETIC, TYPOGRAPHY, & SYSTEM STANDARDS

To maintain a consistent, ultra-premium aesthetic across all generated code, ensure the implementation adheres to these styling principles:

* **Aesthetic Profile:** Elite dark mode, industrial luxury, consulting firm precision mixed with luxury fashion house restraint. No erratic, over-saturated, or game-like bouncing motions.
* **Color Workspace Architecture:**
    * **Dominant Base:** Deep Obsidian Obsidian blacks, matte carbon slabs, and deep muted slates.
    * **Accents:** Highly targeted, sharp light pillars, fine border trails, and soft, low-opacity dot grids.
* **Micro-Interaction Rules:** Keep animations fast but heavily dampened. Rely on spring physics for counters, progressive blurs for menu overlays, and sharp, tracking spotlight effects to guide user focus through the conversion funnel.