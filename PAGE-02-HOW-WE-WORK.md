# PAGE 02 — HOW WE WORK

## Load alongside: `MASTER-DESIGN-SYSTEM.md` + `GLOBAL-CONTEXT.md`

---

## SECTION 1 — PAGE OBJECTIVE

The prospect arrives here from the Homepage — either via the nav link or because the Homepage made them want to understand the system. They know the problem. They've glimpsed the proof. Now they want to understand the mechanism.

This page must accomplish four things in sequence:

1. **Show the system** — not a list of services. Three pillars working together, not five line items on a menu.
2. **Introduce Revenue Architecture** as the commitment that makes RevArc categorically different from agencies. One new revenue stream per year is a promise nobody else is making.
3. **Show what the partnership looks like over time** — Year 1, Year 2, Year 3. The prospect should see a trajectory, not a transaction.
4. **Present the investment** — contextualized by what it returns. By the time the prospect sees €1,500/month, they've already calculated that OTA commission savings alone pay for it multiple times over.

**Emotional arc:** Curious → Understanding the system → Seeing the 3-year trajectory → Recognizing the ROI math → "This is not an expense. This is how I get my margin back."

**End state:** The prospect sees the retainer as a rational economic decision. The question shifts from "can I afford this" to "can I afford not to do this." They click through to The Proof or Book a Strategy Call.

**This page does NOT hard-sell.** It explains with clarity and lets the economics close the argument.

---

## SECTION 2 — WIREFRAME

The page consists of seven sections in this exact scroll order.

```
┌─────────────────────────────────────────────────┐
│  NAVIGATION BAR (shared layout — same as Home)  │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│  A. PAGE HERO                                   │
│  Standard section wrapper. Not full-viewport.   │
│  Left-aligned. No hero React background layer.  │
│  Uses atmospheric radials only.                 │
│                                                 │
│  Section eyebrow                                │
│  Display headline (2 lines)                     │
│  Subtitle paragraph (max-width: 560px)          │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  B. THE THREE PILLARS                           │
│  Standard section wrapper.                      │
│  Section header.                                │
│  Bento grid:                                    │
│                                                 │
│  ROW 1 (4/4/4):                                 │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐     │
│  │ PILLAR 1  │ │ PILLAR 2  │ │ PILLAR 3  │     │
│  │ Direct    │ │ Revenue   │ │ OTA &     │     │
│  │ Booking   │ │ Arch.     │ │ Reputation│     │
│  │ (4 col)   │ │ (4 col)   │ │ (4 col)   │     │
│  │ min-h:    │ │ min-h:    │ │ min-h:    │     │
│  │ 360px     │ │ 360px     │ │ 360px     │     │
│  └───────────┘ └───────────┘ └───────────┘     │
│                                                 │
│  Explanatory paragraph below grid               │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  C. REVENUE ARCHITECTURE (Deep Dive)            │
│  Standard section wrapper.                      │
│  Section header.                                │
│                                                 │
│  ROW 1 (7/5):                                   │
│  ┌───────────────────┐ ┌─────────────┐          │
│  │  LEFT: Narrative  │ │ RIGHT:      │          │
│  │  (What it is,     │ │ 5-step      │          │
│  │   why it matters, │ │ process     │          │
│  │   what you get)   │ │ (stacked)   │          │
│  │  (7 col)          │ │ (5 col)     │          │
│  └───────────────────┘ └─────────────┘          │
│                                                 │
│  ROW 2 (12):                                    │
│  ┌─────────────────────────────────────┐        │
│  │  VALIDATED EXAMPLES bar             │        │
│  │  3 Revenue Architecture examples    │        │
│  │  with confirmed booking status      │        │
│  └─────────────────────────────────────┘        │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  D. THE 3-YEAR PARTNERSHIP                      │
│  Standard section wrapper.                      │
│  Section header.                                │
│                                                 │
│  3 horizontal cards (stacked vertically):       │
│  ┌─────────────────────────────────────┐        │
│  │  YEAR 1 (12-col card)               │        │
│  └─────────────────────────────────────┘        │
│  ┌─────────────────────────────────────┐        │
│  │  YEAR 2 (12-col card)               │        │
│  └─────────────────────────────────────┘        │
│  ┌─────────────────────────────────────┐        │
│  │  YEAR 3 (12-col card)               │        │
│  └─────────────────────────────────────┘        │
│                                                 │
│  Closing paragraph on partnership terms         │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  E. THE INVESTMENT                              │
│  Standard section wrapper.                      │
│  Section header.                                │
│                                                 │
│  ROW 1 (7/5):                                   │
│  ┌───────────────────┐ ┌─────────────┐          │
│  │  LEFT: The ROI    │ │ RIGHT:      │          │
│  │  math. Plain.     │ │ Investment  │          │
│  │  Transparent.     │ │ structure   │          │
│  │  (7 col)          │ │ card        │          │
│  │                   │ │ (5 col)     │          │
│  └───────────────────┘ └─────────────┘          │
│                                                 │
│  Source citation below the math                 │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  F. THE COMMAND CENTRE (Preview)                │
│  Standard section wrapper.                      │
│  Section header.                                │
│                                                 │
│  ROW 1 (5/7):                                   │
│  ┌─────────────┐ ┌───────────────────┐          │
│  │  LEFT:      │ │ RIGHT:            │          │
│  │  Description│ │ Feature preview   │          │
│  │  (5 col)    │ │ card with         │          │
│  │             │ │ Card visual       │          │
│  │             │ │ (7 col)           │          │
│  └─────────────┘ └───────────────────┘          │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  G. CTA BLOCK                                   │
│  Same structure as Homepage CTA block.          │
│  Center-aligned. Reduced vertical padding.      │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FOOTER (same as Homepage)                      │
└─────────────────────────────────────────────────┘
```

---

## SECTION 3 — COPY

Every word below is final. Do not paraphrase, reorder, or generate alternatives.

---

### A. PAGE HERO

**Section Eyebrow:**

```
[pulsing dot] METHODOLOGY
```

**Headline:**

```
Line 1:  A revenue engine,
Line 2 (italic, silver):  not a service contract.
```

**Subtitle:**

```
Most agencies sell you a list of tasks. RevArc builds a revenue
system across three pillars — then operates it alongside you,
as a strategic partner accountable for the outcome.
```

---

### B. THE THREE PILLARS

**Section Eyebrow:**

```
[pulsing dot] THE THREE PILLARS [48px rule line]
```

**Section Title:**

```
Line 1:  Three channels.
Line 2 (italic, silver):  One system.
```

---

**PILLAR CARD 1 — DIRECT BOOKING ENGINE (4-col)**

```
Card Label:    [dot] PILLAR 01
Card Title:    Direct booking
               engine.
Card Body:     Paid acquisition through Meta Ads routed into
               a WhatsApp conversation pipeline. Every inquiry
               handled by a real operator. Every booking
               confirmed by deposit. The guests are yours —
               not the platform's.
Service Tags:  META ADS · WHATSAPP · DEPOSIT PIPELINE
Ghost Numeral: 01
```

Canvas animation: concentric pulse rings (acquisition/signal pattern).

---

**PILLAR CARD 2 — REVENUE ARCHITECTURE (4-col)**

```
Card Label:    [dot] PILLAR 02
Card Title:    Revenue
               architecture.
Card Body:     One new revenue stream identified, architected,
               and delivered every year. Private events.
               Off-season packages. Group bookings. Revenue
               from assets your property already owns.
Service Tags:  EVENTS · PACKAGES · GROUP HIRE · OFF-SEASON
Ghost Numeral: 02
```

Canvas animation: waveform with conversion spike.

---

**PILLAR CARD 3 — OTA & REPUTATION (4-col)**

```
Card Label:    [dot] PILLAR 03
Card Title:    OTA leverage &
               reputation.
Card Body:     Your OTA listings rehabilitated and optimised —
               not abandoned. Broken backends corrected.
               Algorithmic penalties cleared. Google Business
               Profile actively managed. The platforms work
               for you, not against you.
Service Tags:  BOOKING.COM · AGODA · GOOGLE · RATE PARITY
Ghost Numeral: 03
```

Canvas animation: network nodes with traveling dot.

---

**Below-Grid Paragraph (max-width: 640px, centered):**

```
These three pillars are not independent services you
select from a menu. They are a single system, operated in
concert. The direct booking engine recovers margin from
OTAs. Revenue Architecture creates income your property
didn't have before. OTA leverage ensures platform algorithms
amplify your visibility instead of suppressing it. Each
feeds the others. Together, they form a revenue engine you
control.
```

---

### C. REVENUE ARCHITECTURE (Deep Dive)

**Section Eyebrow:**

```
[pulsing dot] REVENUE ARCHITECTURE [48px rule line]
```

**Section Title:**

```
Line 1:  Your property has assets
Line 2 (italic, silver):  it isn't using.
```

---

**LEFT BLOCK (7-col card)**

```
Card Label:    [dot] THE ANNUAL COMMITMENT

Body text:
Every RevArc partnership includes a guaranteed commitment:
one new revenue stream identified, architected, and delivered
per 12-month period.

This is not consulting. It is not a strategy deck that gathers
dust. You receive a complete, ready-to-launch revenue stream —
fully modelled with pricing, costs, operational requirements,
and a presentation that shows you exactly what the opportunity
looks like.

You decide whether to build it. If you say yes, RevArc runs
the marketing and lead generation as part of the partnership.

This commitment is what makes a RevArc partnership categorically
different from an agency retainer. An agency optimises your
existing channels. RevArc builds new ones.
```

---

**RIGHT BLOCK (5-col) — The Five Steps**

Five vertically stacked step items. Each step is a compact block, not a full card.

**Step Item Styling:**

```css
.step-item {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-whisper);
}
/* Last step has no border-bottom */

.step-number {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 300;
  color: var(--text-ghost);       /* subtle, not accent-colored */
  line-height: 1;
  min-width: 28px;
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

```
Step 1:
  Number: 01
  Title:  Asset Audit
  Body:   Map every physical and operational asset your
          property owns. Rooms, spaces, kitchen, staff
          capacity, time blocks. Identify what is underutilised.

Step 2:
  Number: 02
  Title:  Demand Mapping
  Body:   Identify underserved demand in your market.
          Corporate retreats, weddings, wellness, events,
          remote workers. Match demand to your idle assets.

Step 3:
  Number: 03
  Title:  Architecture
  Body:   Build the full revenue stream. Pricing structure,
          cost model, capacity constraints, operational
          requirements, marketing positioning.

Step 4:
  Number: 04
  Title:  Presentation
  Body:   You receive a complete pitch deck and financial
          model. You make the build decision with full
          information. No surprises. No hidden costs.

Step 5:
  Number: 05
  Title:  Operate
  Body:   Once approved, RevArc runs the marketing and
          lead generation for the new stream. Performance
          reported quarterly. Iterated based on results.
```

---

**ROW 2 — VALIDATED EXAMPLES (12-col card)**

A full-width card containing three validated Revenue Architecture examples. This card uses the stat bar layout pattern but with richer content per item.

```
Card Label:    [dot] DEPLOYED AND VALIDATED

Three items in a flex row with stat dividers between them:

Item 1:
  Title (Cormorant, 22px, --text-primary):  Valentine's Day Package
  Detail (Bricolage, 13px, --text-secondary):
    Single-night romantic experience. Two confirmed bookings
    against $87 in ad spend.
  Status tag:  CONFIRMED BOOKINGS ✓

Item 2:
  Title:  Day Out Experience
  Detail:
    Daytime villa package for local couples and groups.
    Multiple confirmed bookings, December 2024 – March 2025.
    Campaign reel: 301 reactions, 35 shares.
  Status tag:  CONFIRMED BOOKINGS ✓

Item 3:
  Title:  Group Bookings
  Detail:
    Full-property group reservations. Three documented bookings
    totalling Rs. 480,000 across four nights of inventory.
  Status tag:  CONFIRMED BOOKINGS ✓
```

**Status Tag Styling (new sub-variant of Service Tag):**

```css
.status-tag-confirmed {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #4ADE80;                    /* soft green — used ONLY for confirmed status */
  padding: 4px 10px;
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 100px;
  margin-top: 8px;
  display: inline-block;
}
```

Note: the green status tag is NOT an accent color violation. It is a semantic status indicator (confirmed/validated) and is confined to this single component type. It never appears elsewhere on the page.

**Source citation below the card:**

```
Source: All bookings verified through Meta Ads Manager,
Booking.com Partner Extranet, and named guest records.
Revenue Architecture methodology documented in full
in the operating record.
```

---

### D. THE 3-YEAR PARTNERSHIP

**Section Eyebrow:**

```
[pulsing dot] THE PARTNERSHIP [48px rule line]
```

**Section Title:**

```
Line 1:  A trajectory,
Line 2 (italic, silver):  not a transaction.
```

**Section Subtitle (max-width: 560px):**

```
RevArc partnerships are structured as 3-year strategic
engagements with annual milestones. Each year builds on the
last. The value compounds. The owner's share of the gains
grows every year the relationship matures.
```

---

**YEAR CARD 1 — YEAR 1 (12-col)**

Year cards are full-width bento cards with a unique internal layout: a large year label on the left, content on the right.

**Year Card Internal Layout:**

```css
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
}

.year-title {
  font-family: var(--font-display);
  font-size: clamp(24px, 2.2vw, 32px);
  font-weight: 300;
  color: var(--text-primary);
  margin-bottom: 16px;
  line-height: 1.15;
}

/* Italic span within title: color: var(--silver) */

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
}
```

```
YEAR 1 CARD:
  Year Label:   01
  Title:        Foundation. *Trust established.*
  Body:         Direct booking infrastructure built and operational.
                OTA listings rehabilitated. Reputation infrastructure
                actively managed. First Revenue Architecture stream
                identified, architected, and delivered. This is the
                year RevArc earns your confidence — with numbers, not
                promises.
  Milestones (service tags):
    DIRECT ENGINE LIVE · OTA REHABILITATED · FIRST REVENUE STREAM · TRUST EARNED
  Target:       OTA share: 60% → 50%
```

```
YEAR 2 CARD:
  Year Label:   02
  Title:        Expansion. *New markets open.*
  Body:         Direct booking channel optimised for conversion and
                retention. International guest acquisition begins.
                Second Revenue Architecture stream delivered. The
                system you now trust is producing compounding returns.
                Your property is earning revenue it did not have
                twelve months ago.
  Milestones:
    CONVERSION OPTIMISED · INTERNATIONAL GUESTS · SECOND REVENUE STREAM
  Target:       OTA share: 50% → 42%
```

```
YEAR 3 CARD:
  Year Label:   03
  Title:        Diversification. *Full revenue control.*
  Body:         Your property now operates with a diversified revenue
                mix — direct bookings, productised packages, group
                events, and optimised OTA presence working together.
                Third Revenue Architecture stream or international
                market expansion. You are no longer dependent on any
                single channel for your livelihood.
  Milestones:
    REVENUE DIVERSIFIED · THIRD STREAM OR EXPANSION · FULL CONTROL
  Target:       OTA share: 42% → 35%
```

---

**Closing Paragraph (below Year 3 card, max-width: 560px):**

```
Every year reaches a mutual renewal point at month 10.
Either party can elect not to continue with 60 days notice.
There is no lock-in penalty. RevArc does not engineer retention
through contracts — it earns retention through results. A
partnership that stops producing should stop. That is true
for you, and it is true for RevArc.
```

---

### E. THE INVESTMENT

**Section Eyebrow:**

```
[pulsing dot] THE INVESTMENT [48px rule line]
```

**Section Title:**

```
Line 1:  The numbers
Line 2 (italic, silver):  in plain language.
```

---

**LEFT BLOCK (7-col card) — The ROI Math**

```
Card Label:    [dot] WHAT THE PARTNERSHIP RETURNS

Body text:
The question is not whether you can afford a revenue
strategist. It is whether you can afford not to have one.

Here is the arithmetic for a 40-room property at 70%
occupancy and €200 ADR:

  Annual revenue: approximately €2 million.
  At 63% OTA share, more than €190,000 per year
  goes to platform commissions.

  Shifting just 10 percentage points of bookings
  from OTA to direct channels saves your property
  approximately €30,000 per year in commission alone.

  The RevArc partnership costs €18,000 per year in
  base retainer — plus a performance commission earned
  only on direct revenue that exceeds your rolling
  historical baseline.

  In the conservative scenario, the partnership pays
  for itself within the first two quarters. Every
  quarter after that is net margin your property keeps.

This does not account for the Revenue Architecture
streams — the new income lines that did not exist before
the partnership. That revenue is incremental. It is above
and beyond the commission savings.

Source citation:
  OTA share: 63.4% — Cloudbeds "2026 State of Independent
  Hotels Report," 90 million bookings, 180 countries.
  Commission range: 15–25% — Booking.com published structure
  (Lodgify, 2026). Effective rate with Genius programme:
  up to 23.5% (Rield Revenue Management, 2026).
  European occupancy: 69–70% avg Q2–Q3 2025 (STR / CoStar).
  Calculation: €2,044,000 × 10% shift × 15% commission = €30,660.
```

---

**RIGHT BLOCK (5-col) — Investment Structure Card**

A single bento card with the pricing breakdown.

```
Card Label:    [dot] PARTNERSHIP STRUCTURE

Investment Items (stacked, with divider lines between):

Item 1:
  Label (DM Mono eyebrow):    YEAR 1 RETAINER
  Value (Cormorant, 28px, --text-primary):  €1,500 /month
  Detail (Bricolage, 13px, --text-secondary):
    Annual: €18,000. Includes Revenue Architecture
    commitment, Command Centre access, and all three
    pillar operations.

Divider (1px, --border-whisper)

Item 2:
  Label:    PERFORMANCE COMMISSION
  Value:    6% on the Delta
  Detail:
    Earned only on direct booking revenue that exceeds
    your rolling 24-month historical baseline. Verified
    against your own PMS data. RevArc earns when your
    property earns more — never on a static floor.

Divider

Item 3:
  Label:    YEAR 2–3 ESCALATION
  Value:    10–15% annually
  Detail:
    Built into the contract from signing. Reflects
    compounding value as the system matures. No surprise
    renegotiations.

Divider

Item 4:
  Label:    ANNUAL PREPAY OPTION
  Value:    5% discount
  Detail:
    Pay the year's retainer upfront and receive a 5%
    reduction. Improves cash flow for both parties.
```

---

**Below Both Blocks — The Guarantee Statement:**

A standalone paragraph, centered, max-width: 580px, styled with --text-primary (not --text-secondary) for emphasis.

```
RevArc's commission structure is designed so that you always
win more than RevArc does. In every scenario — conservative,
base, or strong — the owner's net gain exceeds RevArc's total
fees. This ratio is structural, not accidental. It is built
into the contract.
```

---

### F. THE COMMAND CENTRE (Preview)

**Section Eyebrow:**

```
[pulsing dot] THE COMMAND CENTRE [48px rule line]
```

**Section Title:**

```
Line 1:  Your revenue,
Line 2 (italic, silver):  visible in real time.
```

---

**LEFT BLOCK (5-col) — Description**

```
Body text:
Every RevArc partnership comes with the Command Centre —
a live operational dashboard where your property's revenue
performance is visible at all times.

Direct booking revenue. OTA channel performance. Rate
parity monitoring. Revenue Architecture progress.
Commission calculations — transparent, verified against
your own data. The quarterly strategy decisions that
shape your property's next twelve months.

This is not a reporting tool you check once a month.
It is the operational surface where the partnership lives.
```

**Feature List (styled as step items, not bullets):**

```
Feature 1:
  Title:  Revenue Dashboard
  Body:   Direct vs. OTA split. Historical delta. Commission
          calculations. All verified against your PMS.

Feature 2:
  Title:  Rate Alert System
  Body:   Real-time rate parity monitoring. When an OTA
          undercuts your direct rate, RevArc corrects it —
          and you see the resolution in minutes, not days.

Feature 3:
  Title:  Strategy Surface
  Body:   The big quarterly decisions — queued, with
          RevArc's recommendation and supporting data.
          Where the strategic partnership comes to life.
```

---

**RIGHT BLOCK (7-col) — Visual Preview Card**

A large bento card with a React card visual (Bars Wave Background, UI_MANIFEST ID **19**, or Circuit Grid canvas) representing the Command Centre. This is the visual centrepiece of this section.

```
Card Label:    [dot] COMMAND CENTRE · PREVIEW

The card body is primarily visual — the React card visual
occupies the majority of the card, positioned right-of-center
with partial bleed. A subtle overlay of UI elements (metric
chips) in the bottom-left corner suggests the dashboard
interface without showing a full mockup.

Metric Chips (bottom-left cluster, 3 chips):
  Chip 1:  DIRECT SHARE · 47%
  Chip 2:  DELTA · +€12,400
  Chip 3:  PARITY · PROTECTED

These chips use real-looking but generic data — they are
illustrative of the interface, not real client data.
Ghost Numeral: none (card visual is the focal point)
```

React card visual: Bars Wave Background (ID **19**) or canvas Circuit Grid — suggesting data/infrastructure. Positioned right-edge, bleeding. `pointer-events: none`. Opacity 0.15 at rest, 0.32 on card hover. Accent glow via `--accent-glow` on hover.

---

### G. CTA BLOCK

Same structure as Homepage CTA block. Center-aligned. Reduced vertical padding (120px top/bottom).

**Section Eyebrow (centered):**

```
[pulsing dot] NEXT STEP
```

**Display Headline (centered):**

```
Line 1:  See if your property
Line 2 (italic, silver):  is a fit.
```

**Sub-copy (centered, max-width: 520px):**

```
A 30-minute strategy call. We diagnose your property's revenue
architecture, identify the three highest-leverage opportunities,
and determine whether a RevArc partnership makes sense for both
sides.
```

**CTA Primary (centered):**

```
Book a Strategy Call  [→ arrow icon]
```

**CTA Ghost (centered):**

```
Read the Operating Record  [→ arrow icon]
```

---

### FOOTER

Same as Homepage.

---

## SECTION 4 — COMPONENT USAGE

| Component | Count | Location |
|-----------|-------|----------|
| Navigation Bar | 1 | Shared layout |
| Status Pill | 1 | Page hero eyebrow |
| Section Header (eyebrow + title + subtitle) | 6 | Page Hero (eyebrow + title only), Pillars, Revenue Architecture, Partnership, Investment, Command Centre |
| Section Divider | 6 | Between each section |
| Bento Card (base) | 10 | 3 Pillar cards, 1 RA narrative card, 1 RA validated examples card, 3 Year cards, 1 Investment structure card, 1 Command Centre visual card |
| Step Item (new) | 5 | Revenue Architecture right block |
| Year Card (new) | 3 | Partnership section |
| Status Tag Confirmed (new) | 3 | RA validated examples |
| Source Citation | 2 | RA validated examples, Investment ROI math |
| Service Tag | 12 | 3 per pillar card (9 total) + 3-4 milestone tags per year card |
| Metric Chip | 3 | Command Centre preview card |
| Ghost Numeral | 3 | Pillar cards (01, 02, 03) |
| CTA Primary Button | 1 | CTA Block |
| CTA Ghost Button | 1 | CTA Block |
| Card Visual (Bars Wave / Circuit Grid) | 1 | Command Centre visual card |
| Canvas Animation | 3 | One per pillar card |
| Atmospheric Background | 1 | Full page (shared layout) |
| Footer | 1 | Bottom of page |

### Accent Color Count

```
1. CTA Primary button — CTA Block (--accent background)
2. Status Pill pulsing dot — Page hero (--accent)
3. Metric Chip values in Command Centre card (--accent) ← 1 instance (same component group)
4. Card visual hover glow — Command Centre card (--accent-glow)

TOTAL: 4 ✓ (under the 5 limit)

NOTE: The status-tag-confirmed uses #4ADE80 green, not --accent.
Year card year labels use --text-ghost, not --accent.
Step numbers use --text-ghost, not --accent.
Investment structure values use --text-primary, not --accent.
This page is deliberately restrained — the content carries
the authority, not chromatic emphasis.
```

---

## SECTION 5 — INTERACTIONS & ANIMATION

### Page Load (Hero — Above Fold)

This page does NOT have the dramatic SplitText hero animation from the Homepage. The hero is quieter — a simple fade-in.

```
T+0.2s    Eyebrow fades in (y:16 → 0, opacity 0 → 1, 0.6s, expo.out)
T+0.4s    Headline Line 1 fades in (y:24 → 0, opacity 0 → 1, 0.8s, expo.out)
T+0.6s    Headline Line 2 fades in (same, overlaps by 0.3s)
T+0.8s    Subtitle fades in (y:16 → 0, opacity 0 → 1, 0.6s, expo.out)
```

No SplitText word-by-word on this page. The Homepage earned the dramatic entrance. This page is a working document — composed, methodical, informative.

### Scroll-Triggered Animations

All elements below the hero use GSAP ScrollTrigger with `start: "top 85%"`.

**Pillar Cards:**

```
Three cards stagger in together:
  y:60 → 0, opacity 0 → 1, 1.0s, expo.out, stagger: 0.15
Canvas animations begin their loops once the card enters viewport.
```

**Revenue Architecture Section:**

```
1. Section header: standard reveal
2. Left block (7-col): y:60 → 0, 1.0s
3. Right block steps: staggered reveal, y:30 → 0, 0.6s per step, 0.1s stagger
4. Validated Examples card: y:40 → 0, 0.8s
5. Status tags within examples: fade in 0.15s after their parent item
```

**Year Cards:**

```
Each Year card reveals sequentially:
  y:60 → 0, opacity 0 → 1, 1.0s, expo.out
  0.2s stagger between cards

Year label (01, 02, 03): counter animation is NOT used here.
The numeral appears with the card — it is a label, not a stat.
```

**Investment Section:**

```
1. ROI math block: y:60 → 0, 1.0s
2. Investment structure card: y:60 → 0, 1.0s, 0.15s delay
3. Guarantee statement: y:24 → 0, 0.8s, 0.2s after cards
```

**Command Centre Section:**

```
1. Left description block: y:60 → 0, 1.0s
2. Feature items: staggered, y:24 → 0, 0.6s, 0.1s stagger
3. Right visual card: y:60 → 0, 1.0s, 0.15s delay
4. Metric chips inside card: stagger in after card, 0.1s apart
5. Card visual: parallax on scroll (y: -30, scrub: 1.5)
```

### Hover Interactions

- **Pillar cards:** Full bento card hover (border, lift, shadow, overlay, bottom accent line, canvas opacity increase).
- **Year cards:** Full bento card hover. Year label transitions from `--text-ghost` to `#222226` on hover (subtle brightening, same as ghost numeral behavior).
- **Investment structure card:** Full bento card hover.
- **Command Centre visual card:** Full bento card hover. Card visual opacity increases; optional scale 1.02 via GSAP.
- **Step items:** No hover state. Static informational content.
- **Validated examples items:** No hover state. Static.

---

## SECTION 6 — RESPONSIVE BEHAVIOR

### Desktop (1280px+)

All specs as documented above.

### Laptop (1024px–1279px)

```
Pillar cards: remain 4/4/4, card padding 28px
Revenue Architecture: remain 7/5
Year cards: remain 12-col, year-card grid becomes
  grid-template-columns: 100px 1fr
Investment: remain 7/5
Command Centre: remain 5/7
```

### Tablet (768px–1023px)

```
Pillar cards: collapse to 12/12/12 (stacked)
  min-height: auto (content-driven)

Revenue Architecture:
  Left and right blocks both 12-col (stacked)
  Steps appear below narrative
  Validated examples: items stack vertically, dividers hidden

Year cards: remain 12-col
  Internal grid: grid-template-columns: 80px 1fr
  Year label font-size: 56px

Investment:
  Left and right both 12-col (stacked)
  ROI math appears first, investment structure below

Command Centre:
  Left and right both 12-col (stacked)
  Description appears first, visual card below
  Card visual scales to 50% width or hides

CTA Block: padding 80px top/bottom
```

### Mobile (below 768px)

```
All sections: padding 60px top/bottom, 20px left/right

Pillar cards: stacked, full width, card padding 24px
  Ghost numerals: hidden

Revenue Architecture:
  All stacked. Steps in single column.
  Validated examples: fully stacked, dividers hidden.

Year cards: full width
  Internal grid: single column (year label above content)
  Year label: font-size: 48px, margin-bottom: 16px
  Milestone tags: wrap to 2 per row

Investment:
  Full stack. ROI math first, structure card below.
  Card padding: 24px

Command Centre:
  Full stack. Description first.
  Visual card: React visual hidden. Card shows metric chips
  and canvas animation fallback only.

CTA Block: padding 60px top/bottom
  CTAs stack vertically, full width

Footer: same as Homepage mobile
```

---

## APPENDIX — INTERNAL NOTES

### What This Page Deliberately Does NOT Include

1. **Case study details.** The proof is previewed on the Homepage and lives in full on Page 3. This page is about the methodology, not the evidence. The validated Revenue Architecture examples are the only case study elements here — and they exist to prove the RA commitment is real, not to retell the Tranquil Escape story.

2. **The AI thesis.** This page does not explain why RevArc is AI-resistant. It demonstrates it structurally — the work being described (strategic decisions, new revenue streams, multi-year accountability, physical-world operator network) is inherently above the AI execution layer. The prospect feels the difference without being lectured about it.

3. **Competitor comparisons.** No "RevArc vs. agencies" table. No "why we're different" section. The entire page IS the differentiation. The prospect reads about Revenue Architecture commitments, 3-year trajectories, and transparent commission structures — and recognizes that no agency they've worked with has ever offered anything like this.

4. **The Anchor Engagement (€8,000–12,000).** The V5 business model includes this as a pricing anchor. It is not on the website. The anchor is presented in the sales conversation, not on the methodology page. Showing all pricing tiers on the website turns it into a rate card. The website shows the primary retainer tier only.

5. **The pilot offer.** The €750/90-day pilot is discussed on the strategy call, not on the website. Putting discounted pricing on the site undermines the institutional positioning. The prospect learns about the pilot when it's contextualised by their specific property's opportunity.

### Content Dependency

```
REQUIRED:
  - Bars Wave Background or Circuit Grid canvas for Command Centre card
  - Calendar booking link for CTA

OPTIONAL:
  - Command Centre screenshots (if Layer 1 MVP is built before
    site launch — would strengthen Section F significantly)
  - Property photography for pillar card backgrounds
```

### Link Destinations

```
"Book a Strategy Call" (CTA Primary)       →  /contact (Page 5)
"Read the Operating Record" (CTA Ghost)    →  /proof (Page 3)
All nav links                              →  same as Homepage
```

---

*End of Page 02. Build by loading three files into Cursor: `MASTER-DESIGN-SYSTEM.md` + `GLOBAL-CONTEXT.md` + `PAGE-02-HOW-WE-WORK.md`.*
