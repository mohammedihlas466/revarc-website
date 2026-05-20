# PAGE 01 — HOME

## Load alongside: `MASTER-DESIGN-SYSTEM.md` + `GLOBAL-CONTEXT.md` + `UI_MANIFEST.MD`

---

## SECTION 1 — PAGE OBJECTIVE

This is the front door. The prospect has just watched a Phantom Audit — a 5-minute Loom video diagnosing their property's revenue leaks. They clicked through to the site to answer one question: "Is this person real, and can they actually do what the video suggests?"

The homepage must accomplish three things in sequence:

1. **Name the problem** so the prospect feels understood — not sold to.
2. **Flash the proof** so the prospect believes the problem is solvable — by this firm specifically.
3. **Show enough of the system** that the prospect wants to learn more or book a call — without overwhelming them with methodology.

**Emotional arc:** Intrigued → Recognized ("they understand my problem") → Impressed ("these numbers are real") → Curious ("how does this actually work?") → Ready to explore or act.

**End state:** The prospect either clicks "See the Proof" to go deeper, clicks "How We Work" to understand the methodology, or clicks "Book a Strategy Call" because they've seen enough.

**This page does NOT try to close the sale.** It opens the conversation.

---

## SECTION 2 — WIREFRAME

The page consists of six sections in this exact scroll order. Each section is separated by an animated section divider (gradient line expanding from center).

```
┌─────────────────────────────────────────────────┐
│  NAVIGATION BAR (fixed, floats above all)       │
│  Logo · How We Work · The Proof · About · [CTA] │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│  A. HERO                                        │
│  Full-width section. Not in bento grid.         │
│  Left-aligned content. Right-aligned stats.     │
│  React hero background (Grainient + optional     │
│  Light Rays) at 35-40% opacity. Gradient scrim  │
│  on top. Global CSS atmosphere underneath.     │
│                                                 │
│  ┌──────────────────────┐  ┌──────────────┐     │
│  │ Status Pill           │  │              │     │
│  │                       │  │  Floating    │     │
│  │ HEADLINE LINE 1       │  │  Stats       │     │
│  │ HEADLINE LINE 2       │  │  (right-     │     │
│  │ HEADLINE LINE 3       │  │   aligned)   │     │
│  │                       │  │              │     │
│  │ Sub-copy paragraph    │  │  Stat 1      │     │
│  │                       │  │  Stat 2      │     │
│  │ [CTA Primary] [CTA]  │  │              │     │
│  └──────────────────────┘  └──────────────┘     │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER (gradient line) ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  B. THE DIAGNOSIS                               │
│  Standard section wrapper (1280px max, 160px    │
│  vertical padding, 48px horizontal padding).    │
│  Text-only section. No grid. No cards.          │
│                                                 │
│  Section eyebrow + pulsing dot                  │
│  Display headline (2 lines)                     │
│  3 body paragraphs (max-width: 640px)           │
│  Highlighted closing line                       │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  C. THE SYSTEM                                  │
│  Standard section wrapper.                      │
│  Section header (eyebrow + title + subtitle).   │
│  Bento grid:                                    │
│                                                 │
│  ROW 1 (7/5):                                   │
│  ┌───────────────────┐ ┌─────────────┐          │
│  │                   │ │             │          │
│  │  CARD A: REVENUE  │ │ CARD B:     │          │
│  │  STRATEGY         │ │ REVENUE     │          │
│  │  OWNERSHIP        │ │ ARCHITECTURE│          │
│  │  (7 col)          │ │ (5 col)     │          │
│  │  min-h: 340px     │ │ min-h:340px │          │
│  │                   │ │             │          │
│  │  Meteor Orbit /   │ │ Canvas      │          │
│  │  Light Rays       │ │ animation   │          │
│  │  (right bleed)    │ │ (waveform)  │          │
│  └───────────────────┘ └─────────────┘          │
│                                                 │
│  ROW 2 (12):                                    │
│  ┌─────────────────────────────────────┐        │
│  │  STAT BAR (12 col, min-h: 120px)    │        │
│  │  4 stats with dividers              │        │
│  └─────────────────────────────────────┘        │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  D. THE OPERATING RECORD (Case Study Preview)   │
│  Standard section wrapper.                      │
│  Section header.                                │
│                                                 │
│  Bento grid, single row (8/4):                  │
│  ┌──────────────────────┐ ┌──────────────┐      │
│  │                      │ │              │      │
│  │  LEFT: Narrative     │ │ RIGHT:       │      │
│  │  block. Eyebrow,     │ │ 3 stacked    │      │
│  │  body text,          │ │ metric       │      │
│  │  link to full proof  │ │ mini-cards   │      │
│  │  (8 col)             │ │ (4 col)      │      │
│  │                      │ │              │      │
│  └──────────────────────┘ └──────────────┘      │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  E. CTA BLOCK                                   │
│  Standard section wrapper. Center-aligned.      │
│  Reduced vertical padding (120px top/bottom).   │
│                                                 │
│  Eyebrow                                        │
│  Display headline                               │
│  Sub-copy (1 sentence)                          │
│  [CTA Primary Button]                           │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FOOTER (minimal)                               │
│  © 2026 RevArc Systems · Wyoming LLC            │
│  contact@revarcsystems.com                      │
└─────────────────────────────────────────────────┘
```

---

## SECTION 3 — COPY

Every word below is final. Do not paraphrase, reorder, or generate alternatives. Copy is organized by the wireframe section it belongs to.

---

### A. HERO

**Navigation links:**

```
Logo:       Rev[Arc]        ← "Arc" in var(--accent)
Link 1:     How We Work
Link 2:     The Proof
Link 3:     About
CTA:        Book a Call
```

**Status Pill:**

```
[pulsing dot] REVENUE STRATEGY · BOUTIQUE HOTELS
```

**Headline:**

```
Line 1 (--accent-bright):  You built the hotel.
Line 2 (--text-primary):   Who builds
Line 3 (--silver, italic): the revenue?
```

The headline is a question — not a claim. It honors the owner's work ("you built the hotel"), then names the gap ("who builds the revenue?"). The prospect reads it and immediately thinks "nobody." That recognition is the emotional hook.

**Sub-copy:**

```
Your General Manager runs operations. You run the property.
But nobody is making the strategic decisions about where your
next €100,000 of margin comes from. RevArc is the revenue
strategist your property has been missing — making the decisions,
building the systems, and sharing accountability for the outcome.
```

Note: "sharing accountability" — not "owning your revenue." RevArc is a partner who works alongside the owner, not a replacement for the owner. The owner remains in control. RevArc fills the strategic gap.

**CTA Primary:**

```
Book a Strategy Call  [→ arrow icon]
```

**CTA Ghost:**

```
See the Proof  [→ arrow icon]
```

**Floating Stats (right-aligned):**

```
Stat 1:
  Value:  3–4×
  Label:  RETURN ON AD SPEND

Stat 2:
  Value:  $0.47
  Label:  COST PER CONVERSATION
```

---

### B. THE DIAGNOSIS

**Section Eyebrow:**

```
[pulsing dot] THE DIAGNOSIS [48px rule line]
```

**Section Title:**

```
Line 1:  The role
Line 2 (italic, silver):  that doesn't exist.
```

**Body Paragraphs:**

```
Paragraph 1:
Your General Manager runs operations. You run the property.
Booking.com runs your distribution — and charges 15–25% commission
on every reservation. Factor in Genius discounts you fund and
Preferred Partner surcharges, and the effective rate climbs higher.

Paragraph 2:
But here is the structural problem: nobody runs the revenue.
Nobody is deciding where the next €100,000 of margin comes from.
Nobody is building a direct booking channel you own. Nobody is
engineering your off-season into productive revenue months.

Paragraph 3:
In 2025, independent hotels sent 63.4% of their bookings through
OTAs — up from 61.3% the year before. For a 40-room property at
70% occupancy and €200 ADR, that is more than €190,000 per year
in commission sent to platforms that own the guest relationship,
the data, and the pricing leverage.
```

**Source Citations (styled below Paragraph 1 and Paragraph 3):**

These appear directly below the paragraphs they support. They are not footnotes — they are inline credibility signals.

```
Below Paragraph 1:
  Source: Booking.com commission structure, 10–25% range, avg 15%.
  Lodgify, "Ultimate Guide to Hosting on Booking.com," 2026.
  Effective rate with Genius: Rield Revenue Management, 2026.

Below Paragraph 3:
  Source: Cloudbeds "2026 State of Independent Hotels Report,"
  90 million bookings across 180 countries. OTA share: 63.4%.
  Commission math: 40 rooms × 70% occ. × €200 ADR × 365 days =
  €2,044,000 × 63.4% OTA × 15% commission = €194,382.
```

**Source Citation Styling (new component — add to Design System):**

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
```

This treatment signals: "We cite our sources. We show our math. You can verify every number." It is a trust accelerator — especially for prospects who have been burned by vendors making unverifiable claims.

**Closing Line (styled as a pull statement — larger type, --text-primary instead of --text-secondary, max-width: 580px):**

```
That money belongs in your property.
A revenue strategy puts it back.
```

---

### C. THE SYSTEM

**Section Eyebrow:**

```
[pulsing dot] THE SYSTEM [48px rule line]
```

**Section Title:**

```
Line 1:  Three channels.
Line 2 (italic, silver):  One revenue engine.
```

**Section Subtitle:**

```
RevArc operates three independent revenue channels in concert.
Each solves a different problem. Each is independently measurable.
Each feeds the others.
```

---

**CARD A — REVENUE STRATEGY OWNERSHIP (7-col, Row 1 left)**

```
Card Label:    [dot] 01 — STRATEGY PARTNERSHIP
Card Title:    Line 1:  The strategic decisions
               Line 2 (italic, silver):  your property deserves.
Card Body:     Where does your next €100,000 of margin come from?
               Which guest segment should you acquire? Should you
               defend your current ADR or reposition upmarket?
               These decisions shape your property's future. RevArc
               works alongside you to make them — with the data,
               the systems, and the accountability to follow through.
Metric Chips:  [3-YEAR · Partnership]  [ANNUAL · Revenue Stream]  [MONTH 10 · Mutual Renewal]
Ghost Numeral: 01
```

React card visual (Meteor Orbit, UI_MANIFEST ID **08**, or Interactive Light Rays ID **46**) positioned on the right edge, bleeding partially out of frame. Opacity 0.15 at rest, 0.32 on card hover. Text anchors bottom-left. `pointer-events: none` on the visual layer.

---

**CARD B — REVENUE ARCHITECTURE (5-col, Row 1 right)**

```
Card Label:    [dot] 02 — REVENUE ARCHITECTURE
Card Title:    Line 1:  A new revenue stream.
               Line 2 (italic, silver):  Every year.
Card Body:     Every partnership includes one new revenue stream
               identified, architected, and delivered per year.
               Private events. Off-season packages. Group bookings.
               Revenue from assets your property already owns
               but is not using.
Service Tags:  PRIVATE EVENTS · OFF-SEASON · GROUP HIRE · PACKAGES
Ghost Numeral: 02
```

Canvas animation: waveform with conversion spike (as specified in Design System, Section 09).

---

**STAT BAR (12-col, Row 2)**

```
Stat 1:
  Value:  3–4×
  Label:  RETURN ON AD SPEND

  [divider]

Stat 2:
  Value:  $0.47
  Label:  COST PER CONVERSATION

  [divider]

Stat 3:
  Value:  7
  Label:  INTERNATIONAL MARKETS

  [divider]

Stat 4:
  Value:  25×
  Label:  REVENUE VS. MEDIA INVESTMENT
```

---

### D. THE OPERATING RECORD (Case Study Preview)

**Section Eyebrow:**

```
[pulsing dot] FIELD STUDY [48px rule line]
```

**Section Title:**

```
Line 1:  Two years. Three channels.
Line 2 (italic, silver):  One property rebuilt.
```

---

**LEFT BLOCK (8-col card)**

```
Card Label:    [dot] THE OPERATING RECORD

Body text:
A boutique villa on the southern coast of Sri Lanka — five
double rooms, three triple rooms, performing at a fraction of
its potential. Broken OTA listings. No direct acquisition channel.
Unmanaged reputation. Zero off-season programming.

RevArc rebuilt three revenue channels in parallel and operated
all three in concert for over two years. The direct booking
engine generated hundreds of confirmed bookings through
Meta Ads and WhatsApp at $0.47 per conversation. The OTA
channel was rehabilitated to Booking.com Preferred Partner
status, reaching seven international markets. Two productised
revenue packages — a Valentine's Day experience and a Day Out
package — were architected, launched, and both generated
confirmed bookings and real revenue.

The result is a working revenue engine: owner-controlled,
year-round, and re-engineerable.

Source line (styled as .source-citation):
  All metrics sourced from Meta Ads Manager, Booking.com Partner
  Extranet, Agoda YCS Dashboard, and Google Business Profile.
  Named guest records available on request.

Link text (styled as inline link, not button):
Read the full operating record →
```

---

**RIGHT BLOCK (4-col, 3 stacked mini-cards)**

Three vertically stacked mini-cards inside the 4-col space. Each card has a metric label (DM Mono eyebrow) and a metric value (Cormorant display, accent color).

```
Mini-card 1:
  Label:  DIRECT ACQUISITION
  Value:  Hundreds
  Sub:    of confirmed bookings

Mini-card 2:
  Label:  OTA STATUS
  Value:  Preferred
  Sub:    Partner — Booking.com

Mini-card 3:
  Label:  REPUTATION
  Value:  4.7★
  Sub:    across 55+ reviews
```

Mini-card styling:

```css
/* Inherits from base card styling with modifications */
background: var(--obsidian);
border: 1px solid var(--border-whisper);
border-radius: 16px;
padding: 24px;
/* No hover lift — these are informational, not interactive */

.mini-metric-label {
  /* DM Mono eyebrow spec */
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

---

### E. CTA BLOCK

Center-aligned. Reduced vertical padding (120px top/bottom instead of 160px).

**Section Eyebrow (centered):**

```
[pulsing dot] BEGIN
```

**Display Headline (centered):**

```
Line 1:  The revenue conversation
Line 2 (italic, silver):  starts here.
```

**Sub-copy (centered, max-width: 520px):**

```
A 30-minute strategy call to diagnose your property's
revenue architecture and determine whether a RevArc
partnership is the right intervention.
```

**CTA Primary (centered):**

```
Book a Strategy Call  [→ arrow icon]
```

---

### FOOTER

Minimal footer. Not a mega-footer. The site is five pages — it does not need a sitemap in the footer.

```
Layout: Flex row, space-between, aligned center.
Left:   © 2026 RevArc Systems · Wyoming LLC
Right:  contact@revarcsystems.com

Styling:
  background: var(--void)
  border-top: 1px solid var(--border-whisper)
  padding: 32px 48px
  max-width: 1280px
  margin: 0 auto
  font-family: var(--font-mono)
  font-size: 10px
  letter-spacing: 0.10em
  color: var(--label)
  text-transform: uppercase
```

---

## SECTION 4 — COMPONENT USAGE

A complete list of every component from the Design System used on this page, and where.

| Component | Count | Location |
|-----------|-------|----------|
| Navigation Bar | 1 | Fixed, top of page (shared layout) |
| Status Pill | 3 | Hero eyebrow, System section eyebrow (pulsing dot + eyebrow text only), CTA block eyebrow |
| Section Header (eyebrow + title + subtitle) | 3 | Diagnosis, System, Operating Record |
| Section Divider | 4 | Between Hero/Diagnosis, Diagnosis/System, System/Operating Record, Operating Record/CTA |
| Bento Card (base) | 2 | System section: Card A (7-col), Card B (5-col) |
| Stat Bar | 1 | System section, Row 2 (12-col) |
| Metric Chip | 3 | Inside Card A: Partnership, Revenue Stream, Mutual Renewal |
| Service Tag | 4 | Inside Card B: Private Events, Off-Season, Group Hire, Packages |
| Ghost Numeral | 2 | Card A (01), Card B (02) |
| Source Citation | 3 | Diagnosis (below P1 and P3), Operating Record (below body text) |
| CTA Primary Button | 2 | Hero, CTA Block |
| CTA Ghost Button | 1 | Hero |
| Mini Metric Card | 3 | Operating Record section, right column |
| Card Visual (Meteor Orbit / Light Rays) | 1 | Card A right edge |
| Canvas Animation (waveform) | 1 | Card B background |
| Hero React Background (Grainient) | 1 | Hero background layer |
| Atmospheric Background | 1 | Full page (shared layout) |
| Footer | 1 | Bottom of page |

### Accent Color Count (must equal 5 or fewer)

```
1. Hero headline Line 1 (--accent-bright)
2. CTA Primary button — Hero (--accent background)
3. Status Pill pulsing dot — Hero (--accent)
4. Stat values in Stat Bar — 4 values (--accent) ← counts as 1 instance (same component row)
5. Mini metric values in Operating Record — 3 values (--accent) ← counts as 1 instance (same component group)

TOTAL: 5 ✓

NOTE: The CTA Primary in the CTA Block at the bottom of the page reuses the
same accent as #2 (same component type). Section eyebrow dots use --accent
but are 6×6px indicator elements, functionally identical to #3.
Count is within the 5-instance spirit of the rule.
```

---

## SECTION 5 — INTERACTIONS & ANIMATION

### Page Load Sequence (Hero — No Scroll Required)

All hero elements animate on page load, not on scroll. The sequence is a GSAP timeline:

```
T+0.0s    Hero React background (Grainient) fades in (opacity 0 → 0.38, 1.5s, power2.inOut)
T+0.3s    Status Pill fades in (y:20 → 0, opacity 0 → 1, 0.8s, expo.out)
T+0.5s    Hero Line 1 "You built the hotel." — word-by-word reveal via SplitText (y:60 → 0, 1.0s, expo.out, stagger 0.08)
T+0.8s    Hero Line 2 "Who builds" — word-by-word reveal (same params, overlaps previous by 0.4s)
T+1.1s    Hero Line 3 "the revenue?" — word-by-word reveal (same params, overlaps previous by 0.4s)
T+1.6s    Sub-copy fades in (y:20 → 0, opacity 0 → 1, 0.8s, expo.out)
T+1.9s    CTA buttons fade in together (y:16 → 0, opacity 0 → 1, 0.6s, expo.out)
T+2.0s    Floating stats fade in (y:20 → 0, opacity 0 → 1, 0.8s, expo.out, stagger 0.15)
```

Total hero entrance: ~2.8 seconds. Feels deliberate, not slow. Each element arrives with weight.

### Scroll-Triggered Animations

All elements below the hero use GSAP ScrollTrigger with `start: "top 85%"` and `toggleActions: "play none none none"`.

**Diagnosis Section:**

```
1. Section eyebrow (dot + text + rule): fade in, y:20→0, 0.8s
2. Section title Line 1: word-by-word SplitText reveal, y:40→0, 1.0s, stagger 0.06
3. Section title Line 2 (italic): same, overlaps by 0.3s
4. Body paragraphs: sequential fade in, y:24→0, 0.8s each, 0.2s stagger between paragraphs
5. Closing pull statement: fade in, y:24→0, 0.8s, 0.15s after last paragraph
```

**System Section:**

```
1. Section header animates same as Diagnosis
2. Card A and Card B: staggered reveal, y:60→0, 1.0s, expo.out, 0.15s stagger
3. Stat Bar: fade in, y:40→0, 0.8s, 0.2s after cards complete
4. Stat values inside the bar: counter animation (0 → final value, 2.0s, expo.out)
   triggered when stat bar enters viewport
```

**Operating Record Section:**

```
1. Section header animates same as above
2. Left block (8-col card): fade in, y:60→0, 1.0s
3. Right block mini-cards: staggered reveal, y:40→0, 0.8s, 0.15s stagger between cards
```

**CTA Block:**

```
1. Eyebrow: fade in, 0.6s
2. Headline: word-by-word SplitText, y:40→0, 1.0s
3. Sub-copy: fade in, y:16→0, 0.6s
4. CTA button: fade in, y:16→0, 0.6s, scale 0.97→1.0
```

### Section Dividers

Each section divider animates on scroll entry: `scaleX: 0 → 1`, `transformOrigin: "center"`, `1.2s`, `expo.out`.

### Hover Interactions

All hover states are defined in the Design System. Page-specific notes:

- **Card A and Card B:** Full bento card hover (border brightens, 4px lift, shadow, overlay gradient, bottom accent line appears, card visual / canvas opacity increases).
- **Mini metric cards (Operating Record):** Border brightens on hover (`--border-whisper` → `rgba(192,192,192,0.08)`). No lift. No shadow. These are informational, not interactive.
- **Floating stats (Hero):** No hover state. Static display.
- **"Read the full operating record →" link:** Color transition `--text-secondary` → `--accent` on hover, 0.3s ease.

### Card Visual Interaction (Card A)

The React visual in Card A is atmospheric, not interactive. On card hover, `.card-visual` opacity increases from 0.15 to 0.32 (0.5s ease). Optional GSAP scale to 1.02 on the visual wrapper. The layer uses `pointer-events: none`.

### Parallax

The card visual in Card A has a subtle parallax effect on scroll:

```javascript
gsap.to('.card-a .card-visual', {
  y: -30,
  ease: "none",
  scrollTrigger: {
    trigger: '.card-a',
    start: "top bottom",
    end: "bottom top",
    scrub: 1.5
  }
});
```

---

## SECTION 6 — RESPONSIVE BEHAVIOR

### Desktop (1280px+)

All specs as documented above. Full layout.

### Laptop (1024px–1279px)

```
Hero:
  - Hero headline scales via clamp (no layout change)
  - Floating stats remain right-aligned
  - Sub-copy max-width: 400px

Diagnosis:
  - Body paragraph max-width: 580px
  - No layout change

System Bento:
  - Card A: 7-col, Card B: 5-col (maintained)
  - Card padding: 28px
  - Stat bar padding: 28px 36px

Operating Record:
  - 8/4 split maintained
  - Mini-card padding: 20px

CTA Block:
  - No change
```

### Tablet (768px–1023px)

```
Navigation:
  - Hamburger menu replaces link list
  - Logo + hamburger + CTA button only visible

Hero:
  - Floating stats move below hero text
  - Floating stats display as horizontal row (flex-direction: row)
  - Sub-copy max-width: 100%
  - Section padding: 180px top, 60px bottom

Diagnosis:
  - Section padding: 80px top/bottom, 24px left/right
  - Body paragraph max-width: 100%

System Bento:
  - Row 1: Card A spans 12 cols, Card B spans 12 cols (stacked)
  - Row 2: Stat bar spans 12 cols (no change)
  - Both cards get min-height: auto (content-driven)

Operating Record:
  - Left block: 12-col
  - Right block: 12-col (mini-cards display as horizontal row of 3)
  - Mini-cards: flex-direction: row, equal width, gap: 12px

CTA Block:
  - Padding: 80px top/bottom
  - No other changes
```

### Mobile (below 768px)

```
Navigation:
  - Condensed pill: Logo + hamburger icon only
  - CTA button hidden in nav (appears in hamburger menu)
  - Hamburger opens full-screen overlay with links + CTA

Hero:
  - Section padding: 140px top, 48px bottom, 20px left/right
  - Headline: clamp minimum (64px) applies
  - Floating stats: hidden entirely (metrics appear in stat bar below)
  - Hero React background: opacity reduced to 0.25
  - CTAs stack vertically (flex-direction: column, full width)

Diagnosis:
  - Section padding: 60px top/bottom, 20px left/right
  - Closing pull statement: font-size reduces to clamp(22px, 4vw, 28px)

System Bento:
  - All cards stack to 12-col
  - Card A: React card visual hidden, canvas animation replaces
  - Card B: full width
  - Stat bar: 2×2 grid layout
    - stat-dividers hidden
    - stat-items arranged in grid-template-columns: 1fr 1fr
    - gap: 20px
  - Metric chips inside Card A: wrap to 2-per-row
  - Ghost numerals: hidden

Operating Record:
  - Left and right blocks both stack to 12-col
  - Mini-cards stack vertically (flex-direction: column)
  - Section title font-size scales down via clamp

CTA Block:
  - Padding: 60px top/bottom
  - CTA button: full width

Footer:
  - flex-direction: column
  - text-align: center
  - gap: 8px
```

---

## APPENDIX — INTERNAL NOTES

### What This Page Deliberately Does NOT Include

1. **A services list or services grid.** The homepage does not present RevArc as a menu of services. It presents a system. The bento grid shows two strategic concepts (Revenue Strategy Ownership + Revenue Architecture), not five service lines.

2. **Pricing.** No retainer amounts appear on the homepage. The prospect learns what RevArc does and sees the proof. Pricing lives on the How We Work page, contextualized by ROI.

3. **The full case study.** The Operating Record section is a preview — enough to establish credibility, not enough to satisfy curiosity. The prospect clicks through to Page 3 for the full depth.

4. **Testimonials.** No fabricated quotes. No placeholder testimonials. If a real owner testimonial is captured in the future, it can be added to the Operating Record preview. Until then, the metrics speak.

5. **Client logos, "Trusted By" banners, or client count references.** None of these appear anywhere on this page.

6. **The geography conversation.** Sri Lanka is not mentioned on the homepage. Geography lives on the About page. The homepage is about the prospect's problem and RevArc's system — not about where RevArc is located.

7. **The AI thesis.** The homepage does not explain why RevArc is AI-resistant. It demonstrates AI-resistance through the nature of the work being described (strategic decisions, multi-year accountability, physical-world execution). The About page can reference the thesis. The homepage just embodies it.

### Content Dependency

This page requires the following assets before it can be fully built:

```
REQUIRED:
  - React components installed: Grainient (hero), Meteor Orbit or Light Rays (Card A)
  - Canvas waveform animation for Card B (Design System Section 09)
  - Final email address (contact@revarcsystems.com — confirmed)
  - Calendar booking link for "Book a Strategy Call" CTA

OPTIONAL (can launch without):
  - Property photography for potential use in Operating Record section
  - Owner testimonial (if captured — would strengthen Operating Record preview)
```

### Link Destinations

```
"Book a Strategy Call" (CTA Primary)  →  /contact (Page 5)
"See the Proof" (CTA Ghost)          →  /proof (Page 3)
"How We Work" (Nav link)             →  /how-we-work (Page 2)
"The Proof" (Nav link)               →  /proof (Page 3)
"About" (Nav link)                   →  /about (Page 4)
"Book a Call" (Nav CTA)              →  /contact (Page 5)
"Read the full operating record →"   →  /proof (Page 3)
Logo click                           →  / (Homepage — scroll to top)
```

---

*End of Page 01. Build this page by loading four files into Cursor context: `MASTER-DESIGN-SYSTEM.md` + `GLOBAL-CONTEXT.md` + `UI_MANIFEST.MD` + `PAGE-01-HOME.md`. The Design System provides every visual specification. The UI Manifest provides component sources and background rules. The Global Context provides voice, audience, and content rules. This document provides the wireframe, copy, component usage, animation sequence, and responsive behavior.*
