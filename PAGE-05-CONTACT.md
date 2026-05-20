# PAGE 05 — CONTACT

## Load alongside: `MASTER-DESIGN-SYSTEM.md` + `GLOBAL-CONTEXT.md`

---

## SECTION 1 — PAGE OBJECTIVE

This is the last page in the sequence. By the time the prospect arrives here, they have been through the full arc: they understand the problem (Homepage), the system (How We Work), the evidence (The Proof), and the person (About). They are ready to act.

This page has one job: remove every possible barrier between the prospect's conviction and a booked call.

It must accomplish this by:

1. **Restating the value in one breath** — not re-selling. A single paragraph that reminds the prospect what the call is and what they get from it.
2. **Providing the booking mechanism with zero friction** — a calendar embed, not a contact form with 12 fields. The prospect picks a time and confirms. Done.
3. **Offering an alternative contact path** — WhatsApp for prospects who want a conversation before committing to a scheduled slot, and email for those who prefer asynchronous communication.
4. **Maintaining institutional composure** — this page does not beg. It does not create urgency. It does not say "limited spots available." It extends an invitation with the same composure the rest of the site carries.

**Emotional arc:** Ready → Reassured by the framing of the call → Call booked (or message sent).

**End state:** A confirmed booking on the calendar, a WhatsApp conversation opened, or an email sent. Any of the three is a conversion.

**This is the shortest page on the site.** That is deliberate. Every word the prospect reads past "Book a Strategy Call" is a word that delays the booking. The page is lean because leanness is respect for the prospect's time and decision.

---

## SECTION 2 — WIREFRAME

Three sections. Minimal. Clean. The negative space is the design.

```
┌─────────────────────────────────────────────────┐
│  NAVIGATION BAR (shared layout)                 │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                                                 │
│  A. PAGE HERO + BOOKING                         │
│  Standard section wrapper. Generous top padding  │
│  (200px) to center the content vertically.      │
│  Atmospheric background only.                   │
│                                                 │
│  ROW 1 (5/7):                                   │
│  ┌─────────────┐ ┌───────────────────┐          │
│  │ LEFT:       │ │ RIGHT:            │          │
│  │ Eyebrow     │ │ Calendar embed    │          │
│  │ Headline    │ │ inside bento card │          │
│  │ Subtitle    │ │ (7 col)           │          │
│  │ Contact     │ │                   │          │
│  │ details     │ │ min-height:       │          │
│  │ (5 col)     │ │ 480px             │          │
│  │             │ │                   │          │
│  └─────────────┘ └───────────────────┘          │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  B. WHAT THE CALL COVERS                        │
│  Standard section wrapper. Reduced vertical     │
│  padding (100px top/bottom).                    │
│  3 items in a single row (4/4/4).               │
│                                                 │
└─────────────────────────────────────────────────┘

── SECTION DIVIDER ──

┌─────────────────────────────────────────────────┐
│                                                 │
│  C. CLOSING STATEMENT                           │
│  Standard section wrapper. Center-aligned.      │
│  Reduced vertical padding (100px top/bottom).   │
│  A single line. Nothing else.                   │
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

### A. PAGE HERO + BOOKING

**LEFT BLOCK (5-col) — no card, clean editorial text on section background.**

**Section Eyebrow:**

```
[pulsing dot] START HERE
```

**Headline:**

```
Line 1:  Book a
Line 2 (italic, silver):  strategy call.
```

**Subtitle (max-width: 420px):**

```
A 30-minute conversation about your property's revenue
architecture. RevArc audits your current state, identifies
the highest-leverage opportunities, and determines whether
a partnership makes sense for both sides.

This is a diagnostic, not a pitch. You will leave the call
with a clear understanding of your property's revenue gaps
and what closing them would look like — whether or not you
choose to work with RevArc.
```

**Contact Details Block:**

Below the subtitle, separated by 48px of vertical space. Each contact line is a discrete element.

```
CONTACT ITEM 1 — Email:
  Icon:    Mail icon (Lucide, 14×14, currentColor)
  Label:   EMAIL
  Value:   contact@revarcsystems.com
  Link:    mailto:contact@revarcsystems.com

CONTACT ITEM 2 — WhatsApp:
  Icon:    MessageCircle icon (Lucide, 14×14, currentColor)
  Label:   WHATSAPP
  Value:   Message RevArc
  Link:    https://wa.me/PLACEHOLDER_NUMBER
           (Replace PLACEHOLDER_NUMBER with final WhatsApp
           Business number before launch — format: country
           code + number, no spaces or symbols)

CONTACT ITEM 3 — LinkedIn:
  Icon:    Linkedin icon (Lucide, 14×14, currentColor)
  Label:   LINKEDIN
  Value:   Mohamed Ihlas
  Link:    https://linkedin.com/in/PLACEHOLDER
           (Replace PLACEHOLDER with final LinkedIn
           profile URL before launch)

CONTACT ITEM 4 — Phone (optional):
  Icon:    Phone icon (Lucide, 14×14, currentColor)
  Label:   PHONE
  Value:   PLACEHOLDER
  Link:    tel:PLACEHOLDER
           (Replace with final business phone number.
           If no non-Sri Lankan number is available at
           launch, REMOVE this item entirely — do not
           publish a number you are uncomfortable with.
           WhatsApp and email provide sufficient contact
           paths.)
```

**Contact Item Styling:**

```css
.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-whisper);
  text-decoration: none;
  transition: all var(--duration-fast) ease;
}
/* Last item has no border-bottom */

.contact-item:hover {
  border-bottom-color: var(--border-active);
}

.contact-item:hover .contact-value {
  color: var(--text-primary);
}

.contact-icon {
  color: var(--label);
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  transition: color var(--duration-fast) ease;
}

.contact-item:hover .contact-icon {
  color: var(--text-secondary);
}

.contact-label {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--label);
  min-width: 72px;
}

.contact-value {
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 300;
  color: var(--text-secondary);
  transition: color var(--duration-fast) ease;
}
```

---

**RIGHT BLOCK (7-col) — Calendar Embed Card**

A bento card containing the calendar booking widget.

```
Card Label:    [dot] SELECT A TIME

Card body: calendar embed iframe or widget.
```

**Calendar Embed Specification:**

```css
.calendar-card {
  /* Standard bento card base */
  background: var(--obsidian);
  border: 1px solid var(--border-whisper);
  border-radius: var(--card-radius);
  overflow: hidden;
  min-height: 480px;
  display: flex;
  flex-direction: column;
}

.calendar-card-header {
  padding: 20px var(--card-padding) 0;
}

.calendar-embed-container {
  flex: 1;
  padding: 16px;
}

.calendar-embed-container iframe {
  width: 100%;
  height: 100%;
  min-height: 420px;
  border: none;
  border-radius: var(--card-radius-inner);
  background: var(--obsidian-raised);
}
```

**Calendar tool:** Use Cal.com (recommended — supports custom CSS theming to match dark mode), Calendly, or TidyCal. The embed must be styled to match the site's dark palette. If the calendar tool does not support dark-mode theming, wrap the iframe and apply a CSS filter:

```css
.calendar-embed-container iframe {
  filter: invert(1) hue-rotate(180deg);
  /* Inverts a white-background calendar to dark mode.
     Test and adjust — some tools need additional
     brightness/contrast tweaks. */
}
```

**If calendar embed is not available at build time:** Display a fallback state inside the card:

```
Fallback content (centered within card):
  Eyebrow (DM Mono):  SCHEDULING
  Headline (Cormorant, 28px, --text-primary):
    Calendar coming soon.
  Body (Bricolage, 14px, --text-secondary):
    In the meantime, reach out directly
    via email or WhatsApp.
  [CTA Ghost button: Send an Email]
    → mailto:contact@revarcsystems.com
```

---

### B. WHAT THE CALL COVERS

Three items in a 4/4/4 row. Not bento cards — lighter treatment. Each item is a text block with no card background, no border. Just typography on the section background. The restraint keeps this section from competing with the booking section above.

**Item Styling:**

```css
.call-item {
  padding: 0 8px;
}

.call-item-number {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 300;
  color: var(--text-ghost);
  line-height: 1;
  margin-bottom: 16px;
}

.call-item-title {
  font-family: var(--font-display);
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 300;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 10px;
}
/* italic spans: color: var(--silver) */

.call-item-body {
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.7;
}
```

```
ITEM 1:
  Number:  01
  Title:   Revenue *diagnosis.*
  Body:    Your property's current revenue mix. OTA dependency
           percentage. Direct booking infrastructure — what
           exists and what's missing. Where the margin is going
           and why.

ITEM 2:
  Number:  02
  Title:   Opportunity *identification.*
  Body:    The three highest-leverage opportunities specific
           to your property. Revenue Architecture potential.
           Off-season gaps. Guest segments you are not reaching.

ITEM 3:
  Number:  03
  Title:   Partnership *assessment.*
  Body:    Whether a RevArc partnership is the right intervention
           for your property — or whether your situation calls
           for something different. An honest assessment, not
           a close.
```

---

### C. CLOSING STATEMENT

Center-aligned. A single line of display typography. Nothing else in this section.

This line is the emotional close for the entire website. It is the last thing the prospect reads. It must carry the same composure that opened the site.

**Closing Line:**

```
Line 1 (Cormorant, clamp(28px, 3.5vw, 44px), 300, --text-primary):
  Your property deserves
Line 2 (same size, italic, --silver):
  a revenue strategy.
```

No CTA below this. No button. No link. The booking mechanism is above. This line is the period at the end of the sentence. It trusts the prospect to scroll back up and book — or to have already booked. The restraint signals that RevArc does not chase. It invites.

---

### FOOTER

Same as other pages. But on this page, the footer is visually closer to the closing statement (reduced spacing — 60px instead of standard section padding). The page should feel like it ends quietly.

```
Footer top margin on this page: 60px (override standard section padding)
```

---

## SECTION 4 — COMPONENT USAGE

| Component | Count | Location |
|-----------|-------|----------|
| Navigation Bar | 1 | Shared layout |
| Status Pill | 1 | Page hero eyebrow (pulsing dot only, minimal) |
| Section Divider | 2 | Between Hero/Call Covers, Call Covers/Closing |
| Bento Card (base) | 1 | Calendar embed card |
| Contact Item (new) | 3–4 | Email, WhatsApp, LinkedIn, Phone (if included) |
| Call Item (new) | 3 | What the call covers section |
| CTA Ghost Button | 0–1 | Calendar fallback only (if embed unavailable) |
| Canvas Animation | 0 | None on this page |
| Card Visual | 0 | None on this page |
| Ghost Numeral | 0 | None on this page |
| Metric Chip | 0 | None on this page |
| Service Tag | 0 | None on this page |
| Source Citation | 0 | None on this page |
| Atmospheric Background | 1 | Full page (shared layout) |
| Footer | 1 | Bottom, reduced spacing |

### Accent Color Count

```
1. Status Pill pulsing dot — Hero (--accent)

TOTAL: 1 ✓

This is the most restrained page on the entire site. One single
accent dot. Everything else is void, obsidian, silver, and text
hierarchy. The page is almost monochrome.

The restraint is the design. This page does not need to impress.
It needs to convert. The prospect's conviction was built across
four previous pages. This page simply provides the mechanism.
```

---

## SECTION 5 — INTERACTIONS & ANIMATION

### Page Load

The simplest entrance on the site. No drama. Immediate utility.

```
T+0.2s    Eyebrow fades in (y:12 → 0, 0.5s, expo.out)
T+0.3s    Headline fades in (y:20 → 0, 0.7s, expo.out)
T+0.5s    Subtitle fades in (y:12 → 0, 0.6s, expo.out)
T+0.7s    Contact items stagger in (y:12 → 0, 0.5s, 0.08s stagger)
T+0.4s    Calendar card fades in (y:40 → 0, 0.8s, expo.out)
```

Note: the calendar card (right block) begins animating at T+0.4s — almost simultaneously with the left content. The prospect should see the booking mechanism immediately. No long wait for the functional element to appear.

### Scroll-Triggered Animations

**What the Call Covers:**

```
Three items stagger in:
  y:40 → 0, opacity 0 → 1, 0.8s, expo.out, 0.12s stagger
```

**Closing Statement:**

```
Line 1: y:20 → 0, opacity 0 → 1, 0.8s, expo.out
Line 2: same, 0.15s delay
```

The closing statement animation is the slowest, most deliberate reveal on the page. Two lines arriving with a quiet pause between them. The prospect reads "Your property deserves" — pause — "a revenue strategy." The pause is 0.15s of real time but feels like a breath.

### Hover Interactions

- **Calendar card:** Border brightens on hover. No lift — the embed inside is interactive and lifting the card while the user is clicking dates would be disorienting.
- **Contact items:** Border brightens, value text transitions to --text-primary, icon transitions to --text-secondary. Entire row is clickable (anchor wrapping the full item).
- **Call items:** No hover. Static informational content.

### Calendar Embed Interaction

The calendar embed handles its own internal interaction (date selection, time slot picking, confirmation). RevArc's CSS does not interfere with the embed's internal UI beyond the dark-mode theming. The embed is given `pointer-events: all` and is not overlaid by any RevArc element.

---

## SECTION 6 — RESPONSIVE BEHAVIOR

### Desktop (1280px+)

All specs as documented. Hero section top padding: 200px.

### Laptop (1024px–1279px)

```
Hero: 5/7 maintained
  Top padding: 160px
  Calendar card min-height: 440px
Call items: 4/4/4 maintained
Closing: no change
```

### Tablet (768px–1023px)

```
Hero:
  Left and right both 12-col (stacked)
  Left content appears first (eyebrow, headline, subtitle,
    contact items)
  Calendar card below, full width, min-height: 460px
  Top padding: 120px

Contact items:
  Display as horizontal row (flex-direction: row, wrap)
  2 items per row if space allows, otherwise stack

Call items:
  Remain 4/4/4 if space allows
  Collapse to 12/12/12 at narrower tablet widths
  Padding: 80px top/bottom

Closing: padding 80px top/bottom
```

### Mobile (below 768px)

```
Hero:
  All stacked, single column
  Top padding: 100px
  Section padding: 20px left/right
  Headline: clamp minimum applies
  Subtitle: full width
  Contact items: full width, stacked vertically
  Calendar card: full width, min-height: 400px
    The calendar embed is critical on mobile — ensure
    the iframe is touch-friendly. Most calendar tools
    (Cal.com, Calendly) have responsive embeds. Test
    on actual mobile viewport.

Call items:
  Stacked 12/12/12
  Padding: 60px top/bottom

Closing:
  Padding: 60px top/bottom
  Font size scales via clamp (minimum 28px)

Footer:
  Reduced spacing: 40px top margin
  Stacked center-aligned (same as other pages)
```

---

## APPENDIX — INTERNAL NOTES

### What This Page Deliberately Does NOT Include

1. **A contact form.** Forms with name, email, company, phone number, message, and dropdown fields create friction. Every field is a micro-decision the prospect has to make. A calendar embed reduces the interaction to: pick a time, confirm. WhatsApp reduces it to: send a message. Email reduces it to: write what's on your mind. All three paths are lower friction than a form.

2. **"Limited availability" or scarcity language.** "Only 3 spots remaining this month." "Book before slots fill up." This language is manipulative and undermines institutional positioning. RevArc does not manufacture urgency. The prospect books when they're ready. The composure of the invitation is what makes it credible.

3. **A map.** RevArc does not have a physical office that prospects visit. A map showing Galle, Sri Lanka on a page targeting European hotel owners would reopen the geography conversation that Page 4 carefully closed. No map.

4. **Social media links beyond LinkedIn.** No Twitter/X, no Instagram, no Facebook. RevArc is not a consumer brand. LinkedIn is the professional presence. Adding social icons creates visual clutter and signals a business that needs social proof from follower counts. RevArc's proof is on Page 3.

5. **A FAQ section.** Frequently asked questions on a contact page signal that the preceding pages failed to answer those questions. If the FAQ topics are important (pricing, timeline, what's included), they belong on How We Work. If they're about the process (what happens after I book), the subtitle on this page answers it. No FAQ.

6. **Pricing recap.** The prospect has already seen pricing on How We Work. Repeating it here turns the contact page into a checkout page. The strategy call is a diagnostic conversation, not a purchase confirmation.

7. **Testimonials or proof points.** The conviction was built on Pages 1–4. This page converts conviction into action. Adding proof elements here signals insecurity — as if the site doesn't trust that the preceding four pages did their job.

### The WhatsApp Decision

WhatsApp is included as a contact path for three reasons:

1. **Methodological consistency.** RevArc's Pillar 01 is built on WhatsApp-based conversion. The entire direct booking engine routes Meta Ads into WhatsApp conversations. If RevArc's own contact page doesn't offer WhatsApp, there is a disconnect between the methodology and the practice.

2. **Market fit.** Southern European hotel owners — particularly in Portugal, Italy, and Spain — use WhatsApp as a primary business communication tool. For many prospects in the target market, sending a WhatsApp message is lower friction than booking a calendar slot with an unfamiliar firm.

3. **Conversion path diversity.** Some prospects are ready to book a call. Some want to ask a question first. Some want to send a message at 11pm and get a response tomorrow. WhatsApp captures the second and third categories that a calendar-only page would lose.

WhatsApp is secondary to the calendar. The calendar embed is larger, more prominent, and positioned as the primary action. WhatsApp sits in the contact details list as an alternative path. The visual hierarchy is clear: book a call is primary, message us is available.

### The Phone Number Decision

The phone number field is marked as optional with explicit instructions:

- If a non-Sri Lankan business number is available (US number via the Wyoming LLC infrastructure, or a European virtual number), include it.
- If only a Sri Lankan mobile number is available at launch, **remove the phone item entirely.** Do not publish a number that reopens the geography question on the page designed to convert. WhatsApp and email provide sufficient contact paths.
- This decision can be revisited at any time by adding the contact item back when a suitable number is available.

### Content Dependency

```
REQUIRED:
  - Calendar booking link or embed code
    (Cal.com recommended for dark-mode theming support)
  - Final email: contact@revarcsystems.com (confirmed)
  - Final WhatsApp Business number (or placeholder until ready)
  - Final LinkedIn profile URL (or placeholder until ready)

OPTIONAL:
  - Non-Sri Lankan phone number (include only if available)
```

### Link Destinations

```
contact@revarcsystems.com        →  mailto:contact@revarcsystems.com
WhatsApp                         →  https://wa.me/PLACEHOLDER_NUMBER
LinkedIn                         →  https://linkedin.com/in/PLACEHOLDER
Phone (if included)              →  tel:PLACEHOLDER
Calendar embed                   →  Cal.com / Calendly / TidyCal embed
All nav links                    →  same as other pages
```

---

*End of Page 05. Build by loading three files into Cursor: `MASTER-DESIGN-SYSTEM.md` + `GLOBAL-CONTEXT.md` + `PAGE-05-CONTACT.md`.*

*This completes the five-page specification for the RevArc website.*

---

## FULL BUILD FILE INDEX

```
01.  MASTER-DESIGN-SYSTEM.md     CSS variables, components, typography,
                                  layout, animation, GSAP, responsive

02.  GLOBAL-CONTEXT.md           Positioning, audience, voice, proof library,
                                  banned words, geography frame, one-client
                                  frame, narrative arc, content principles

03.  PAGE-01-HOME.md             Homepage wireframe, copy, components,
                                  interactions, responsive

04.  PAGE-02-HOW-WE-WORK.md     Methodology page wireframe, copy, components,
                                  interactions, responsive

05.  PAGE-03-THE-PROOF.md        Case study page wireframe, copy, components,
                                  interactions, responsive

06.  PAGE-04-ABOUT.md            About page wireframe, copy, components,
                                  interactions, responsive

07.  PAGE-05-CONTACT.md          Contact page wireframe, copy, components,
                                  interactions, responsive
```

*For each page build in Cursor, load three files: MASTER-DESIGN-SYSTEM.md + GLOBAL-CONTEXT.md + the relevant PAGE document. The Design System provides visual specifications. The Global Context provides voice and rules. The Page document provides wireframe, copy, and behavior.*
