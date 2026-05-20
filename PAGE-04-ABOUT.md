# PAGE 04 — ABOUT

## Load alongside: `MASTER-DESIGN-SYSTEM.md` + `GLOBAL-CONTEXT.md`

---

## SECTION 1 — PAGE OBJECTIVE

The prospect has read the methodology. They've read the evidence. Now they want to know who is behind this. This is the most personal page on the site — and the most delicate. It must accomplish three things simultaneously:

1. **Establish the founder's credibility** without self-congratulation. The prospect should finish this page thinking "this person has spent years thinking about this problem at a level I haven't seen before" — not "this person is selling me on their credentials."
2. **Handle geography with composure.** Sri Lanka is stated, reframed as the proving ground, and never returned to. The rules from GLOBAL-CONTEXT.md Section 07 govern every word. No defensive language. No over-explanation. The geography is a fact carried with confidence.
3. **Introduce the operator network** as the structural moat that makes RevArc's model work across European markets without a European office. The prospect should understand that RevArc has physical-world capability in their market — not through a local office, but through a vetted network of local operators.

**Emotional arc:** Curious about the person → Recognizing depth of experience → Absorbing the geography without friction → Understanding the operator network → Trusting the founder's composure and judgment → "I trust this person with my property."

**End state:** The prospect feels they know who they're entering a partnership with. The geography question is resolved — not through argument, but through the composure with which it was carried. The operator network addresses the "but you're not local" concern before it fully forms.

**This page is quieter than the others.** Fewer bento cards. More editorial typography. More negative space. The restraint signals that RevArc doesn't need to perform on this page — it just needs to be present.

---

## SECTION 2 — WIREFRAME

Six sections. The shortest content page on the site. The brevity is deliberate — this page says what it needs to say and stops.

```
┌─────────────────────────────────────────────────┐
│  NAVIGATION BAR (shared layout)                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│  A. PAGE HERO                                   │
│  Standard section wrapper. Left-aligned.        │
│  Atmospheric background only.                   │
│                                                 │
│  Eyebrow                                        │
│  Display headline (2 lines)                     │
│  Subtitle paragraph                             │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  B. THE FOUNDER                                 │
│  Standard section wrapper.                      │
│  Section header.                                │
│                                                 │
│  ROW 1 (5/7):                                   │
│  ┌─────────────┐ ┌───────────────────┐          │
│  │ LEFT:       │ │ RIGHT:            │          │
│  │ Photo or    │ │ Founder           │          │
│  │ Photo or    │ │ narrative.        │          │
│  │ card visual │ │                   │          │
│  │ element     │ │ Bio. Posture.     │          │
│  │ (5 col)     │ │ (7 col)           │          │
│  └─────────────┘ └───────────────────┘          │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  C. WHERE THE METHODOLOGY WAS BUILT             │
│  Standard section wrapper.                      │
│  Section header.                                │
│  Text-only editorial section. No grid. No cards.│
│  3 paragraphs + closing line.                   │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  D. THE OPERATOR NETWORK                        │
│  Standard section wrapper.                      │
│  Section header.                                │
│                                                 │
│  ROW 1 (7/5):                                   │
│  ┌───────────────────┐ ┌─────────────┐          │
│  │  LEFT: Narrative  │ │ RIGHT:      │          │
│  │  (7 col)          │ │ Operator    │          │
│  │                   │ │ categories  │          │
│  │                   │ │ (5 col)     │          │
│  └───────────────────┘ └─────────────┘          │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  E. HOW REVARC OPERATES                         │
│  Standard section wrapper.                      │
│  Section header.                                │
│  3 principle cards (4/4/4).                     │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  F. CTA BLOCK                                   │
│  Same structure as other pages.                 │
│                                                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FOOTER                                         │
└─────────────────────────────────────────────────┘
```

---

## SECTION 3 — COPY

Every word below is final.

---

### A. PAGE HERO

**Section Eyebrow:**

```
[pulsing dot] ABOUT REVARC
```

**Headline:**

```
Line 1:  Built slowly.
Line 2 (italic, silver):  Built to last.
```

**Subtitle (max-width: 520px):**

```
RevArc is a revenue strategy firm for independent boutique
hotels. One founder. A vetted operator network across
European markets. A methodology refined over two years
of hands-on property operation.
```

---

### B. THE FOUNDER

**Section Eyebrow:**

```
[pulsing dot] THE FOUNDER [48px rule line]
```

**Section Title:**

```
Line 1:  Mohamed Ihlas.
Line 2 (italic, silver):  Galle, Sri Lanka.
```

Note: the geography appears here naturally — as part of the founder's identity, not as a disclosure. "Galle, Sri Lanka" is stated in the same typographic hierarchy as the name. Same weight. Same composure. It is a fact like any other.

---

**LEFT BLOCK (5-col) — Founder Visual**

This block contains either:

**Option A (preferred):** A professional photograph of Mohamed Ihlas. Not a corporate headshot. An editorial portrait — natural light, composed, the kind of image that signals the person takes their work seriously without performing seriousness. Displayed within a bento card with standard border and radius.

**Option B (if photography is not available):** A React card visual — Light Pillar (UI_MANIFEST ID **47**) or Flickering Grid (ID **22**) suggesting precision and architecture. Positioned with right-edge bleed within the card. Opacity 0.15 at rest, 0.32 on hover. Placeholder until professional photography is available.

```
Card styling: standard bento card base
  background: var(--obsidian)
  border: 1px solid var(--border-whisper)
  min-height: 400px
  overflow: hidden

If photo: object-fit: cover, full card, no padding
If card visual: standard placement rules from Design System Section 07 apply
```

---

**RIGHT BLOCK (7-col) — Founder Narrative**

No bento card. Clean editorial text on the section background. This text breathes.

```
Paragraph 1:
I started RevArc because I spent two years operating every
revenue channel for a boutique villa — and discovered that
the structural problem was the same everywhere. Properties
with strong assets and natural demand were underperforming
because nobody was running the revenue. The General Manager
runs operations. The owner runs the property. The gap between
the property's potential and its actual revenue sits in that
missing role.

Paragraph 2:
RevArc fills that role. Not as a consultant who recommends
and leaves. Not as an agency that manages channels and sends
monthly reports. As the operator who makes the revenue
decisions alongside the owner, builds the systems to execute
them, and stays accountable for the outcome across a
multi-year partnership.

Paragraph 3:
Before RevArc, I built and operated the direct booking engine,
the OTA strategy, the reputation infrastructure, and multiple
Revenue Architecture streams for Tranquil Escape Villa in
Hikkaduwa — generating over Rs. 2 million in tracked revenue
across three channels, reaching seven international markets,
and earning Booking.com Preferred Partner status. Every
methodology documented in this site was built and refined
through that engagement.

Paragraph 4:
I work at the intersection of strategic judgment and
operational execution. The financial models, the Revenue
Architecture deliverables, the Command Centre, the operator
coordination — I built all of it. The methodology is not
theoretical. It was stress-tested on a live property, with
real money, for over two years.
```

---

### C. WHERE THE METHODOLOGY WAS BUILT

**Section Eyebrow:**

```
[pulsing dot] ORIGIN [48px rule line]
```

**Section Title:**

```
Line 1:  Where the methodology
Line 2 (italic, silver):  was built.
```

This is the geography section. It follows the rules from GLOBAL-CONTEXT.md Section 07 precisely: stated once, reframed to the methodology, no defensive language.

---

**Body Paragraphs (max-width: 600px):**

```
Paragraph 1:
RevArc was built in Sri Lanka because Sri Lanka is where the
modern boutique hospitality model gets stress-tested. Properties
here run on thinner margins than their European counterparts,
with the same OTA dependencies, the same direct booking
challenges, and the same need for disciplined revenue architecture.

Paragraph 2:
The methodology that survives in this market translates anywhere.
A property paying 18% to Booking.com in Hikkaduwa has the same
structural problem as a property paying 18% in the Algarve. The
diagnosis is the same. The architecture is the same. The platform
backends are identical. The revenue decisions are universal.

Paragraph 3:
Today, RevArc operates as a Wyoming LLC serving boutique hotels
across Europe. The operator network spans multiple European
markets with vetted local photographers, reputation specialists,
and technical operators in each active region. The methodology —
built and refined on the southern coast of Sri Lanka — is what
travels.
```

**Closing Line (styled as pull statement — larger type, --text-primary, max-width: 520px):**

```
Tranquil Escape is the proving ground.
The model is the export.
```

---

### D. THE OPERATOR NETWORK

**Section Eyebrow:**

```
[pulsing dot] THE OPERATOR NETWORK [48px rule line]
```

**Section Title:**

```
Line 1:  Hands and feet
Line 2 (italic, silver):  in your market.
```

---

**LEFT BLOCK (7-col card)**

```
Card Label:    [dot] PHYSICAL-WORLD EXECUTION

Body text:
Revenue strategy for boutique hotels requires work that
cannot be done remotely. Golden hour photography. On-site
brand audits. Local reputation management in the native
language. Meetings with property staff. Technical
interventions in booking system backends.

RevArc maintains a vetted network of local operators across
European markets — photographers, videographers, reputation
management specialists, booking system technicians, and
market scouts. Every operator is tested through paid trial
projects before they handle priority work.

The network is not a marketplace. It is a curated roster,
built over years, managed directly by RevArc. Operators are
coordinated through the Command Centre. They work under
RevArc's quality standards, on RevArc's timeline, accountable
to RevArc's methodology.

When your partnership requires physical-world execution in
your market, RevArc already has trusted operators on the ground.
```

---

**RIGHT BLOCK (5-col) — Operator Categories**

Five vertically stacked step items (same component as Revenue Architecture steps on Page 02) listing the operator categories.

```
Category 1:
  Title:  Photographers & Videographers
  Body:   Hotel exteriors, interiors, lifestyle, food, drone,
          golden hour. Tested via paid trial shoot before
          roster inclusion.

Category 2:
  Title:  Reputation Specialists
  Body:   Local-language review monitoring and response
          drafting. Native voice. Escalation handling.
          Critical for non-English markets.

Category 3:
  Title:  Booking System Technicians
  Body:   Cloudbeds, SiteMinder, Mews specialists for
          backend configuration, audits, and interventions.

Category 4:
  Title:  PR & Media Contacts
  Body:   Local hospitality journalists, regional travel
          publications, industry newsletters. Relationship-
          based, built through warm introductions.

Category 5:
  Title:  Market Scouts
  Body:   On-the-ground operators who know which properties
          are underserved, which markets are shifting, and
          where the opportunities are forming.
```

---

### E. HOW REVARC OPERATES

**Section Eyebrow:**

```
[pulsing dot] PRINCIPLES [48px rule line]
```

**Section Title:**

```
Line 1:  Three principles
Line 2 (italic, silver):  that govern everything.
```

---

**PRINCIPLE CARD 1 (4-col)**

```
Card Label:    [dot] PRINCIPLE 01
Card Title:    The owner wins more
               than RevArc does.
Card Body:     In every scenario — conservative, base, or
               strong — the property's net gain exceeds
               RevArc's total fees. This ratio is structural.
               It is built into the contract. The commission
               is earned only on genuine incremental performance,
               verified against the property's own data. RevArc
               succeeds when the property succeeds more.
Ghost Numeral: 01
```

Canvas animation: orbital rings (balance/alignment pattern).

---

**PRINCIPLE CARD 2 (4-col)**

```
Card Label:    [dot] PRINCIPLE 02
Card Title:    Retention is earned,
               never engineered.
Card Body:     There is no lock-in penalty. Annual renewal
               is mutual — either party can walk away at
               month 10 with 60 days notice. The Command
               Centre, the Revenue Architecture, the operator
               network — they create value that makes staying
               the obvious choice. But the choice is always
               yours.
Ghost Numeral: 02
```

Canvas animation: concentric pulse rings (trust/signal pattern).

---

**PRINCIPLE CARD 3 (4-col)**

```
Card Label:    [dot] PRINCIPLE 03
Card Title:    Every number
               is verifiable.
Card Body:     Commission calculations reference your own
               PMS data. Revenue Architecture projections
               include full cost models. Dashboard metrics
               are sourced from named platforms. Nothing on
               this website or in any RevArc deliverable is
               estimated, rounded for convenience, or presented
               without a source. If you ask where a number
               comes from, there is always an answer.
Ghost Numeral: 03
```

Canvas animation: circuit grid (data/verification pattern).

---

### F. CTA BLOCK

**Section Eyebrow (centered):**

```
[pulsing dot] CONVERSATION
```

**Display Headline (centered):**

```
Line 1:  Let's find out if this
Line 2 (italic, silver):  makes sense for your property.
```

**Sub-copy (centered, max-width: 520px):**

```
A 30-minute strategy call. No pitch. A direct conversation
about your property's revenue architecture — where the gaps
are, what the opportunities look like, and whether a RevArc
partnership is the right fit.
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

Same as other pages.

---

## SECTION 4 — COMPONENT USAGE

| Component | Count | Location |
|-----------|-------|----------|
| Navigation Bar | 1 | Shared layout |
| Status Pill | 1 | Page hero eyebrow |
| Section Header | 5 | Founder, Origin, Operator Network, Principles, CTA (eyebrow only) |
| Section Divider | 5 | Between each section |
| Bento Card (base) | 5 | Founder photo/card visual card, operator network narrative card, 3 principle cards |
| Step Item | 5 | Operator categories (right block) |
| Ghost Numeral | 3 | Principle cards (01, 02, 03) |
| Canvas Animation | 3 | One per principle card |
| Service Tag | 0 | Not used on this page |
| Metric Chip | 0 | Not used on this page |
| Source Citation | 0 | Not used on this page — the proof lives on Page 03 |
| CTA Primary Button | 1 | CTA Block |
| CTA Ghost Button | 1 | CTA Block |
| Card Visual (Light Pillar / Flickering Grid) | 0–1 | Founder card (Option B only, if no photo) |
| Atmospheric Background | 1 | Full page (shared layout) |
| Footer | 1 | Bottom |

### Accent Color Count

```
1. CTA Primary button — CTA Block (--accent background)
2. Status Pill pulsing dot — Hero (--accent)

TOTAL: 2 ✓ (well under the 5 limit)

This page is the most chromatically restrained page on the
site. The restraint is deliberate. This page builds trust
through typography, negative space, and composure — not
through visual emphasis. The accent color recedes. The words
carry everything.
```

---

## SECTION 5 — INTERACTIONS & ANIMATION

### Page Load (Hero)

Same quiet entrance as Pages 02 and 03:

```
T+0.2s    Eyebrow fades in (y:16 → 0, 0.6s, expo.out)
T+0.4s    Headline Line 1 fades in (y:24 → 0, 0.8s, expo.out)
T+0.6s    Headline Line 2 fades in (same, overlaps 0.3s)
T+0.8s    Subtitle fades in (y:16 → 0, 0.6s)
```

### Scroll-Triggered Animations

All use GSAP ScrollTrigger, `start: "top 85%"`.

**Founder Section:**

```
1. Section header: standard reveal
2. Left block (photo/card visual card): y:60 → 0, 1.0s, expo.out
3. Right block paragraphs: sequential fade in, y:24 → 0, 0.8s
   each, 0.15s stagger between paragraphs
```

The paragraph stagger is important here. Each paragraph arrives separately, giving the reader time to absorb the founder's narrative. This is the only section on the site where the stagger between text blocks is deliberately slow enough to feel like someone speaking.

**Origin Section (Geography):**

```
1. Section header: standard reveal
2. Body paragraphs: sequential fade in, y:24 → 0, 0.8s, 0.15s stagger
3. Closing pull statement: y:24 → 0, 0.8s, 0.2s after last paragraph
```

**Operator Network:**

```
1. Section header: standard reveal
2. Left narrative card: y:60 → 0, 1.0s
3. Right operator categories: staggered, y:30 → 0, 0.6s, 0.1s stagger
```

**Principles:**

```
1. Section header: standard reveal
2. Three principle cards: stagger, y:60 → 0, 1.0s, 0.15s stagger
3. Canvas animations begin their loops once card enters viewport
```

**CTA Block:**

```
Same as other pages.
```

### Hover Interactions

- **Founder photo/card visual card:** Border brightens on hover. If card visual: opacity 0.15 → 0.32. If photo: subtle `brightness(1.03)` filter transition, 0.5s. No lift — this is a portrait, not an interactive element.
- **Operator network narrative card:** Full bento card hover (border, lift, shadow, overlay, bottom accent line).
- **Principle cards:** Full bento card hover.
- **Step items (operator categories):** No hover state. Static informational content.

### Parallax

If the founder card contains a card visual:

```javascript
gsap.to('.founder-card .card-visual', {
  y: -25,
  ease: "none",
  scrollTrigger: {
    trigger: '.founder-card',
    start: "top bottom",
    end: "bottom top",
    scrub: 1.5
  }
});
```

---

## SECTION 6 — RESPONSIVE BEHAVIOR

### Desktop (1280px+)

All specs as documented.

### Laptop (1024px–1279px)

```
Founder: 5/7 maintained, card padding 28px
Origin: no layout change, paragraph max-width adjusts
Operator Network: 7/5 maintained, card padding 28px
Principles: 4/4/4 maintained, card padding 28px
```

### Tablet (768px–1023px)

```
Founder:
  Left and right both 12-col (stacked)
  Photo/card visual card: min-height 300px, full width
  Narrative paragraphs: below card, full width
  Section padding: 80px top/bottom

Origin:
  Paragraph max-width: 100%
  Section padding: 80px top/bottom

Operator Network:
  Left and right both 12-col (stacked)
  Narrative card first, categories below
  Categories display as 2-column grid (2×3, last row single)

Principles:
  Cards collapse to 12/12/12 (stacked)

CTA: padding 80px top/bottom
```

### Mobile (below 768px)

```
All sections: 60px top/bottom, 20px left/right

Founder:
  Photo/card visual card: min-height 280px, full width
  If card visual: hidden, replaced with atmospheric gradient fill
  If photo: maintained, aspect-ratio preserved
  Narrative: single column below card
  Ghost numerals: hidden in principle cards

Origin:
  Single column. Pull statement font-size scales via clamp.

Operator Network:
  All stacked. Categories in single column.

Principles:
  Cards stacked. Ghost numerals hidden.

CTA: CTAs stack vertically, full width.
Footer: same as other mobile pages.
```

---

## APPENDIX — INTERNAL NOTES

### What This Page Deliberately Does NOT Include

1. **A biography.** The founder section is not a CV. It does not list education, previous employment, certifications, or years of experience as line items. It is a narrative that establishes how the founder came to this work and what they built. The credibility comes from the specificity of the work described, not from credentials listed.

2. **A team section.** RevArc is one founder with an operator network. There is no "Our Team" section with headshots of people who don't exist. The operator network section is the honest answer to "who does the work" — and it's a stronger answer than a fabricated team page.

3. **A mission statement.** No "Our Mission" or "Our Vision" section. These are filler on most agency sites. RevArc's mission is self-evident from the methodology page: own the revenue strategy of boutique hotels and be accountable for the outcome. It does not need a separate statement.

4. **Client logos or testimonials.** Consistent with every other page — no logos section, no fabricated quotes.

5. **Defensive infrastructure details.** The V5 document describes the Mercury/Stripe/Wise/PandaDoc stack. This does not appear on the About page. Mentioning payment infrastructure on a public website signals that RevArc thinks prospects need reassurance about its ability to process payments. They don't. The infrastructure works. That's all that matters.

6. **The AI thesis in explicit form.** The About page does not contain a section explaining "why RevArc is AI-resistant." The principle cards gesture toward it — strategic ownership, verifiable numbers, earned retention — but the thesis is structural, not promotional. It lives in the V5 document, not on the website.

7. **Pricing.** Consistent with other pages — pricing lives on How We Work only.

### The Geography Decision — Why This Structure

The geography appears in three places on this page, each with a different function:

1. **Section Title of The Founder:** "Galle, Sri Lanka." — stated as a fact of identity, same weight as the name. No emphasis. No de-emphasis. A fact.

2. **Section C — Where The Methodology Was Built:** The full geography narrative. Three paragraphs. This is the one place on the entire website where Sri Lanka is discussed at length. The framing follows GLOBAL-CONTEXT.md Section 07 precisely: origin-as-proving-ground, universal problems, methodology transfers. No "but." No "despite." No "even though."

3. **Section D — The Operator Network:** The structural answer to "but you're not local." RevArc has vetted operators in the prospect's market. The concern is addressed through capability, not through argument.

These three touchpoints handle the geography conversation completely. After this page, the prospect has:
- Absorbed the geography without friction (it was stated, not defended)
- Understood why Sri Lanka is the origin (stress-testing ground, methodology export)
- Understood that RevArc has physical-world capability in their market (operator network)

The geography question is closed. It does not need to be reopened on any other page.

### Content Dependency

```
REQUIRED:
  - Calendar booking link for CTA

STRONGLY RECOMMENDED:
  - Professional photograph of Mohamed Ihlas
    (editorial portrait, not corporate headshot)
    If not available: React card visual as specified in Option B

OPTIONAL:
  - Operator network map visualization (could replace or complement
    the text-based categories — only if real market coverage data
    exists to populate it honestly)
```

### Link Destinations

```
"Book a Strategy Call" (CTA Primary)       →  /contact (Page 5)
"Read the Operating Record" (CTA Ghost)    →  /proof (Page 3)
All nav links                              →  same as other pages
```

---

*End of Page 04. Build by loading three files into Cursor: `MASTER-DESIGN-SYSTEM.md` + `GLOBAL-CONTEXT.md` + `PAGE-04-ABOUT.md`.*
