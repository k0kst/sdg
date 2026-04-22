# Specification Document: SDG Career Explorer
## Interactive SLS Resource — ECG/CCE Module for JC1 Students

**Version:** 2.0
**Prepared for:** MOE ECG Branch
**Target audience:** JC1 students (approx. 17 to 18 years old)
**Deployment platform:** MOE Student Learning Space (SLS)
**Document purpose:** Complete build specification for generating a fully functional, self-contained HTML5 interactive resource

---

## 1. Project Overview

This resource is a self-contained interactive activity embedded within a larger SLS module on linking the UN Sustainable Development Goals (SDGs) to Education and Career Guidance (ECG). Students will:

1. Browse all 17 SDGs and sort them into interest categories
2. Select their personal top 3 SDGs
3. Receive a visual summary of their selections with descriptions, pathways, and career fields

The pedagogical intent is to help students surface their existing values and motivations, using the SDGs as a structured common language for reflection, not to prescribe a purpose.

---

## 2. Technical Constraints (Mandatory)

| Constraint | Requirement |
|---|---|
| Delivery format | Single ZIP file with `index.html` at root |
| Runtime environment | Sandboxed SLS iframe |
| Browser support | Chrome on Windows/macOS, Safari on iPadOS 16+, SLS mobile app (iOS/Android) |
| External dependencies | None — no CDN, no API calls, no `fetch()` |
| Server-side code | Not permitted |
| Asset bundling | All images, fonts, audio bundled within ZIP |
| Storage APIs | No `localStorage`, `sessionStorage`, or file system access |
| Offline operation | Must function fully offline after initial SLS page load |
| Target ZIP size | 100MB or less (confirm with SLS team before final build) |
| Acceptance testing | Must pass inside SLS student interface, not standalone browser |

All state is managed in-memory using JavaScript variables within the session. No data persists between sessions, which is acceptable for this activity.

---

## 3. Visual Design Direction

### Palette

| Role | Colour | Hex |
|---|---|---|
| Primary (structural) | Civic blue | `#1A4F8A` |
| Page background | Warm cream | `#FAF7F2` |
| Card surface | White | `#FFFFFF` |
| Body text | Near-black | `#1A1A2E` |
| Heading text | Civic blue | `#1A4F8A` |
| Very Interested state | Forest green | `#2E7D32` |
| Slightly Interested state | Amber | `#F59E0B` |
| Not Interested state | Muted grey | `#9E9E9E` |
| SDG accents | Official UN per-goal colour | See Section 10 |

SDG accent colours are used only for card left-border strip, icon background, and category badge. They are never used as dominant page backgrounds.

### Typography

Font: **DM Sans Variable** (bundled as WOFF2 within the ZIP, downloaded from Google Fonts as a static file, not loaded via CDN at runtime).

Fallback stack: `'DM Sans', 'Helvetica Neue', Arial, sans-serif`

| Element | Size | Weight |
|---|---|---|
| Page title (Landing) | 28 to 32px | 700 |
| Stage heading | 22 to 24px | 700 |
| SDG name (card) | 17 to 18px | 700 |
| Body / description | 15 to 16px | 400 |
| Label / badge | 13 to 14px | 500 |
| Button text | 15 to 16px | 600 |

### Motion

All transitions wrapped in `@media (prefers-reduced-motion: reduce)` guard — disable all transitions when reduced motion is preferred.

| Interaction | Animation |
|---|---|
| Card expand | Max-height transition, 250ms ease-out |
| Category selection | Border colour and background colour fade, 150ms |
| Stage transition | Fade out current stage (200ms), then fade in next stage (200ms) |
| Progress bar fill | Width transition, 300ms ease-out |
| Top 3 selection | Card scale pulse (scale 1.02 to 1.00), 120ms |
| Copy button confirmation | Text swap with brief colour flash |
| Restart modal | Fade in backdrop and slide up modal, 200ms |

---

## 4. Icon Asset Specification

### Individual SDG Icons

Source: `E-SDG-Icons-WEB.zip`

All 17 goal icons are PNG files with transparent backgrounds. Naming convention:

```
E-WEB-Goal-01.png   (SDG 1 — No Poverty)
E-WEB-Goal-02.png   (SDG 2 — Zero Hunger)
E-WEB-Goal-03.png   (SDG 3 — Good Health and Well-Being)
...
E-WEB-Goal-17.png   (SDG 17 — Partnerships for the Goals)
```

File sizes range from approximately 29KB to 67KB. Total for all 17: approximately 780KB.

In the resource, each SDG card references its icon via:
```
icons/E-WEB-Goal-01.png
```
(zero-padded two-digit number, matching the SDG ID)

The `iconFile` field in `sdg-content.js` stores the filename for each SDG (see Section 10).

### SDG Wheel (Landing Page)

Source: `E-SDG-logos-SDG-wheel_No-UN-Emblem.zip`
File: `SDG Wheel_Transparent_WEB.png` (28KB, transparent background)

Use this on the landing screen as a decorative visual element. Bundle at: `icons/SDG_Wheel_Transparent_WEB.png`

### SDG Horizontal Logo (Optional)

Source: `E-SDG-logos-SDG-wheel_No-UN-Emblem.zip`
File: `E_SDG_logo_horizontal_Transparent_WEB.png` (45KB, transparent background)

Available for use in the resource header or footer if needed. Bundle at: `icons/E_SDG_logo_horizontal_Transparent_WEB.png`

---

## 5. Information Architecture and Flow

```
[LANDING / INTRO SCREEN]
        |
        v
[STAGE 1: Browse and Categorise]   <----+
  - View all 17 SDG cards               |
  - Expand cards to read details        |
  - Tap to categorise each SDG          |
  - Progress indicator: X of 17 sorted  |
  - "Next" unlocks when all 17 sorted   |
        |                               |
        v                               |
[STAGE 2: Select Top 3]            -----+
  - Pool shown based on sorting logic
  - Select exactly 3 SDGs
  - "Back to sorting" link available
  - "See My Results" unlocks at 3 selected
        |
        v
[STAGE 3: Summary / Conclusion]
  - Visual summary of all 17 categorised
  - Spotlight on Top 3 with full detail
  - Copy to clipboard button
  - Restart button (clears all state)
  - "Back to Top 3" link available
```

Navigation rules:
- Students must complete Stage 1 (all 17 sorted) before accessing Stage 2
- Students can navigate back from Stage 2 to Stage 1 — sortings are preserved
- Students can navigate back from Stage 3 to Stage 2 — top-3 selections are preserved
- Restart on Stage 3 clears all state and returns to landing

---

## 6. Landing / Introduction Screen

**Purpose:** Orient students to the activity before they begin.

**Visual:** The SDG Wheel PNG is displayed as a large decorative element on the right side of the screen (desktop/tablet) or above the text (mobile).

**Content:**

- Title: *"What Kind of World Do You Want to Build?"*
- Subheading: *"Discover how your interests connect to global goals, and the careers that make them happen."*
- Instruction steps (icon-led, 3 steps):
  1. *"Read through the 17 UN Sustainable Development Goals"*
  2. *"Sort each one by how much it interests you"*
  3. *"Pick your top 3 and see what careers might be waiting for you"*
- CTA button: *"Let's Begin"*

No data is collected on this screen. The CTA advances to Stage 1.

---

## 7. Layout and Orientation

The resource is designed primarily for landscape orientation on desktop and tablet. On mobile, portrait layout is used.

### Breakpoints and Column Grid (SDG Card Grid)

| Device / Context | Min Width | Orientation | Card Grid Columns |
|---|---|---|---|
| Desktop | 1280px+ | Landscape | 4 columns |
| Tablet landscape | 768px to 1279px | Landscape | 3 columns |
| Tablet portrait | 768px to 1023px | Portrait | 2 columns |
| Mobile | Below 768px | Portrait | 1 column |

### Orientation Guidance (Tablet)

On tablet in portrait mode, display a non-blocking orientation nudge at the top of the screen:
- Text: *"This activity looks best in landscape mode. Try rotating your device!"*
- Dismiss button: *"Got it"* (hides the nudge for the session)
- The resource remains fully functional in portrait on tablet — the nudge is advisory only

### Sticky Header Height

- Desktop/tablet: 60px maximum
- Mobile: 56px maximum
- The header must not overlap card content — use appropriate body padding-top

---

## 8. Stage 1 and Stage 2 Combined: Browse and Categorise

### 8.1 Stage Header (Sticky)

Displays:
- Stage label: *"Step 1 of 3: Explore and Sort"*
- Progress: *"X of 17 sorted"* with a progress bar
- *"Next Step"* button (disabled and greyed until all 17 are categorised)

### 8.2 SDG Card — Default State (Uncategorised)

Each card displays:
- SDG number and colour accent strip (left border or top strip in official UN SDG colour)
- SDG icon (PNG from `icons/` folder, referenced via `iconFile` in `sdg-content.js`)
- SDG name (e.g. "SDG 1 — No Poverty")
- Short description (goal statement)
- "Read More" expand toggle — collapsed by default
- Three category buttons below the card: *"Not Interested"*, *"Slightly Interested"*, *"Very Interested"*

### 8.3 SDG Card — Expanded State

Tapping "Read More" expands the card in-place (no modal, no page navigation) to reveal:

| Section label | Field from sdg-content.js |
|---|---|
| Industries | `industries` |
| Study Pathways | `studyPathways` |
| Career Roles | `careerRoles` |
| What Drives This | `purposefulIntention` |
| In Singapore | `singaporeContext` |

A "Read Less" toggle collapses back to default.

### 8.4 SDG Card — Categorised State

Once a student taps a category:
- A category badge appears prominently on the card
- The card receives a visual treatment matching the category:
  - Not Interested: grey card border, grey badge
  - Slightly Interested: amber card border, amber badge
  - Very Interested: green card border, green badge
- All three category buttons remain visible and tappable — students can change category at any time
- Tapping the already-active category does not deselect it (prevents accidental unsorting)

### 8.5 Progress and Gating

- Progress indicator updates in real-time with each categorisation
- *"Next Step"* button activates only when all 17 are categorised
- If student taps *"Next Step"* before completion: show inline prompt: *"You've sorted X of 17 goals. Sort all of them to continue!"*

### 8.6 Category Summary Tally (Footer, Below Grid)

A compact live tally at the bottom of the grid:
- "Very Interested: X" in green
- "Slightly Interested: X" in amber
- "Not Interested: X" in grey

Helps students monitor their distribution before proceeding.

---

## 9. Stage 2: Select Your Top 3

### 9.1 Pool Logic (Critical)

```
V = count of SDGs categorised as "Very Interested"

IF V is 3 or more:
    Pool = Very Interested SDGs only

IF V is 1 or 2:
    Pool = Very Interested SDGs + Slightly Interested SDGs

IF V is 0:
    Pool = Slightly Interested SDGs
```

Edge case: if the resulting pool has fewer than 3 SDGs, do not proceed to the selection UI. Instead show:

*"It looks like you haven't marked enough goals as Slightly or Very Interested. Head back and re-sort — give yourself more options to choose from!"*

Show a *"Back to Sorting"* button that returns to Stage 1 with all sortings preserved.

### 9.2 Layout and Header

- Stage header: *"Step 2 of 3: Choose Your Top 3"*
- Intro copy: *"From the goals you're most interested in, pick your top 3. These will shape your career reflection."*
- Counter: *"X of 3 chosen"* displayed prominently in sticky header
- Pool cards are displayed in the same expandable format as Stage 1, with category badge visible
- Each card has a prominent *"Add to My Top 3"* toggle button
- Once 3 are selected, remaining unselected cards show: *"You've already picked 3. Deselect one to swap it out."*
- *"See My Results"* button activates only when exactly 3 are selected

### 9.3 Revisability

- *"Change My Sorting"* link at top of Stage 2 returns to Stage 1 with all categorisations preserved
- A gentle prompt below the pool cards: *"Want to include a different goal? Go back to change your categories."*

### 9.4 Returning from Stage 3

If a student navigates back from Stage 3 to Stage 2, their top-3 selections are pre-populated. They can deselect and re-select freely.

---

## 10. Stage 3: Summary / Conclusion

### 10.1 Page Header

- Heading: *"Your Purpose Compass"*
- Subheading: *"Here's what your choices say about you, and where they might take you."*

### 10.2 Section A — Your Top 3 Goals

Three spotlight cards, one per selected SDG, displayed in a column or 3-column responsive grid. Each spotlight card shows all content fields (fully expanded, no "Read More" toggle needed):
- SDG colour, number, name, icon
- Goal description
- Industries
- Study pathways
- Career roles
- What drives this (purposeful intention)
- In Singapore (Singapore context)

Rank badge ("1st", "2nd", "3rd") displayed prominently on each card.

Visual elevation: larger shadow, wider card, accent colour header strip compared to browse-stage cards.

### 10.3 Section B — Your Full Sorting

A compact visual grid showing all 17 SDGs grouped into three columns or sections:
- Very Interested (green section)
- Slightly Interested (amber section)
- Not Interested (grey section)

Each SDG shown as a small pill or chip with SDG number and name. The goal icons can be shown at small scale (32px) if space allows.

### 10.4 Section C — Reflection Prompt

*"Look at your top 3. What do they have in common? Is it the people you want to help, the problems you want to solve, or the kind of work you want to do? There is no right answer — this is just the beginning of your career story."*

### 10.5 Section D — Actions

Two action buttons:

1. *"Copy My Results"* — copies a plain-text summary to clipboard (see Section 10.6)
2. *"Start Over"* — shows a confirmation modal before clearing all state

A *"Change My Top 3"* link at the top returns to Stage 2 with top-3 selections preserved.

### 10.6 Copy to Clipboard Output Format

```
My SDG Purpose Compass
======================

MY TOP 3 GOALS:

1. SDG [X] — [Name]
   [Goal description]
   Study pathways: [list]
   Career roles: [list]
   What drives this: [purposeful intention]

2. SDG [X] — [Name]
   [Goal description]
   Study pathways: [list]
   Career roles: [list]
   What drives this: [purposeful intention]

3. SDG [X] — [Name]
   [Goal description]
   Study pathways: [list]
   Career roles: [list]
   What drives this: [purposeful intention]

MY FULL SORTING:
Very Interested: [SDG list]
Slightly Interested: [SDG list]
Not Interested: [SDG list]
```

Implementation: use `navigator.clipboard.writeText()` with a try-catch fallback to `document.execCommand('copy')` for older iOS Safari.

Button states: default > "Copying..." > "Copied!" (green tick). Resets to default after 3 seconds.

After copying, show inline confirmation: *"Copied! Paste this into your reflection journal or share it with your ECG counsellor."*

### 10.7 Restart Confirmation Modal

An in-page modal (not `window.confirm()`, which may be blocked in SLS iframes):
- Backdrop: semi-transparent dark overlay
- Modal card: *"Are you sure you want to start over? Your choices will not be saved."*
- Two buttons: *"Yes, start over"* and *"Cancel"*
- On confirm: reset all state to initial values and render to Landing screen

---

## 11. Content Architecture: sdg-content.js

All student-facing content is stored in a single separate file: `data/sdg-content.js`

This file is loaded in `index.html` via a standard `<script src="data/sdg-content.js">` tag before the application script. It defines a single global object `window.SDG_CONTENT`.

The application script reads from `window.SDG_CONTENT` and never hardcodes content strings directly.

**This separation means content editors can update any SDG description, career list, or pathway without touching the application code.**

### sdg-content.js File Format

```javascript
// ============================================================
// SDG Career Explorer — Editable Content File
// ============================================================
// Edit this file to update any SDG content.
// Do not change the variable name (window.SDG_CONTENT) or
// the field names — the application depends on them.
// ============================================================

window.SDG_CONTENT = {

  // -- Resource-level copy ----------------------------------
  ui: {
    landingTitle:       "What Kind of World Do You Want to Build?",
    landingSubtitle:    "Discover how your interests connect to global goals, and the careers that make them happen.",
    landingStep1:       "Read through the 17 UN Sustainable Development Goals",
    landingStep2:       "Sort each one by how much it interests you",
    landingStep3:       "Pick your top 3 and see what careers might be waiting for you",
    landingCta:         "Let's Begin",

    stage1Heading:      "Step 1 of 3: Explore and Sort",
    stage1NextBtn:      "Next Step",
    stage1NotDoneMsg:   "You've sorted {x} of 17 goals. Sort all of them to continue!",
    stage1TallyLabel:   ["Very Interested", "Slightly Interested", "Not Interested"],

    stage2Heading:      "Step 2 of 3: Choose Your Top 3",
    stage2Intro:        "From the goals you're most interested in, pick your top 3. These will shape your career reflection.",
    stage2BackLink:     "Change My Sorting",
    stage2NudgeLink:    "Want to include a different goal? Go back to change your categories.",
    stage2FullMsg:      "You've already picked 3. Deselect one to swap it out.",
    stage2TooFewMsg:    "It looks like you haven't marked enough goals as Slightly or Very Interested. Head back and re-sort — give yourself more options to choose from!",
    stage2ResultsBtn:   "See My Results",

    stage3Heading:      "Your Purpose Compass",
    stage3Subheading:   "Here's what your choices say about you, and where they might take you.",
    stage3BackLink:     "Change My Top 3",
    stage3Reflection:   "Look at your top 3. What do they have in common? Is it the people you want to help, the problems you want to solve, or the kind of work you want to do? There is no right answer — this is just the beginning of your career story.",
    stage3CopyBtn:      "Copy My Results",
    stage3CopyingBtn:   "Copying...",
    stage3CopiedBtn:    "Copied!",
    stage3CopyConfirm:  "Copied! Paste this into your reflection journal or share it with your ECG counsellor.",
    stage3RestartBtn:   "Start Over",

    restartTitle:       "Are you sure you want to start over?",
    restartBody:        "Your choices will not be saved.",
    restartConfirmBtn:  "Yes, start over",
    restartCancelBtn:   "Cancel",

    orientationNudge:   "This activity looks best in landscape mode. Try rotating your device!",
    orientationDismiss: "Got it",

    cardReadMore:       "Read more",
    cardReadLess:       "Read less",
    cardAddBtn:         "Add to My Top 3",
    cardBackSortBtn:    "Back to Sorting",

    categoryLabels: {
      not:      "Not Interested",
      slightly: "Slightly Interested",
      very:     "Very Interested"
    },

    rankLabels: ["1st", "2nd", "3rd"],

    sectionLabels: {
      industries:          "Industries",
      studyPathways:       "Study Pathways",
      careerRoles:         "Career Roles",
      purposefulIntention: "What Drives This",
      singaporeContext:    "In Singapore"
    }
  },

  // -- SDG data ---------------------------------------------
  sdgs: [
    {
      id: 1,
      name: "No Poverty",
      color: "#E5243B",
      iconFile: "E-WEB-Goal-01.png",
      description: "End poverty in all its forms everywhere.",
      singaporeContext: "ComLink+ supports lower-income families toward stability, self-reliance and social mobility. Public housing and grants remain a major social foundation.",
      industries: "Social services, public policy, housing, community development, CSR and philanthropy",
      studyPathways: "Social Work; Sociology; Public Policy; Community Development; Urban Studies; Business for social impact",
      careerRoles: "Social worker; community development officer; policy analyst; programme executive; housing officer",
      purposefulIntention: "Service; Positive impact"
    },
    {
      id: 2,
      name: "Zero Hunger",
      color: "#DDA63A",
      iconFile: "E-WEB-Goal-02.png",
      description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.",
      singaporeContext: "30 by 30 aims to produce 30% of Singapore's nutritional needs locally and sustainably by 2030, supported by agri-food innovation and capability building.",
      industries: "Agri-food tech, urban farming, aquaculture, food manufacturing, supply chain, food science",
      studyPathways: "Food Science; Environmental Science; Biotechnology; Engineering; Supply Chain; Business",
      careerRoles: "Food technologist; urban farm executive; aquaculture specialist; quality assurance officer; supply chain analyst",
      purposefulIntention: "Positive impact; Physical health"
    },
    {
      id: 3,
      name: "Good Health and Well-Being",
      color: "#4C9F38",
      iconFile: "E-WEB-Goal-03.png",
      description: "Ensure healthy lives and promote well-being for all at all ages.",
      singaporeContext: "Healthier SG shifts healthcare towards preventive care through family doctors, healthier lifestyles and stronger primary care.",
      industries: "Healthcare, public health, biomedical science, fitness and wellness, medtech, aged care",
      studyPathways: "Medicine; Nursing; Pharmacy; Public Health; Psychology; Sport Science; Biomedical Science",
      careerRoles: "Doctor; nurse; pharmacist; public health officer; psychologist; health data analyst",
      purposefulIntention: "Physical health; Service"
    },
    {
      id: 4,
      name: "Quality Education",
      color: "#C5192D",
      iconFile: "E-WEB-Goal-04.png",
      description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      singaporeContext: "MOE's Eco Stewardship Programme and lifelong learning through SkillsFuture show the push for relevant, future-ready and sustainability-linked education.",
      industries: "Education, training, edtech, learning design, youth development, HR and L&D",
      studyPathways: "Education; Psychology; English and History; Learning Sciences; HR; Communications; Computer Science for edtech",
      careerRoles: "Teacher; curriculum specialist; learning designer; education policy officer; training executive",
      purposefulIntention: "Self-improvement; Positive impact"
    },
    {
      id: 5,
      name: "Gender Equality",
      color: "#FF3A21",
      iconFile: "E-WEB-Goal-05.png",
      description: "Achieve gender equality and empower all women and girls.",
      singaporeContext: "The White Paper on Singapore Women's Development sets actions to empower, protect and uplift women in a fairer and more inclusive society.",
      industries: "HR, legal services, social policy, workplace consulting, advocacy, communications",
      studyPathways: "Law; Sociology; Psychology; HR; Communications; Public Policy; Business",
      careerRoles: "HR partner; diversity and inclusion executive; policy officer; legal associate; counsellor",
      purposefulIntention: "Internal standards; Positive impact"
    },
    {
      id: 6,
      name: "Clean Water and Sanitation",
      color: "#26BDE2",
      iconFile: "E-WEB-Goal-06.png",
      description: "Ensure availability and sustainable management of water and sanitation for all.",
      singaporeContext: "Singapore's Four National Taps (local catchment, imported water, NEWater and desalination) anchor water security and sanitation planning.",
      industries: "Water engineering, utilities, environmental services, wastewater treatment, cleantech, R&D",
      studyPathways: "Civil and Environmental Engineering; Chemistry; Sustainability; Data and Automation; Life Sciences",
      careerRoles: "Water engineer; process engineer; hydrologist; environmental consultant; laboratory analyst",
      purposefulIntention: "Positive impact; Service"
    },
    {
      id: 7,
      name: "Affordable and Clean Energy",
      color: "#FCC30B",
      iconFile: "E-WEB-Goal-07.png",
      description: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
      singaporeContext: "Under the Green Plan, Singapore targets large-scale solar deployment, greener power systems, storage and cleaner-energy transport.",
      industries: "Renewable energy, grid systems, energy storage, power engineering, carbon services, clean transport",
      studyPathways: "Electrical Engineering; Mechanical Engineering; Energy Studies; Physics; Data Science; Economics",
      careerRoles: "Energy analyst; solar engineer; grid systems engineer; ESG analyst; carbon project associate",
      purposefulIntention: "Positive impact; Occupational fulfillment"
    },
    {
      id: 8,
      name: "Decent Work and Economic Growth",
      color: "#A21942",
      iconFile: "E-WEB-Goal-08.png",
      description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all.",
      singaporeContext: "Singapore links inclusive growth to upskilling and better jobs through tripartism, SkillsFuture and the Progressive Wage Model.",
      industries: "Finance, advanced manufacturing, tourism, logistics, digital economy, workforce development",
      studyPathways: "Business; Economics; Accountancy; Engineering; Computing; Hospitality; HR",
      careerRoles: "Economist; operations manager; HR executive; business analyst; workforce planner",
      purposefulIntention: "Occupational fulfillment; Self-sufficiency"
    },
    {
      id: 9,
      name: "Industry, Innovation and Infrastructure",
      color: "#FD6925",
      iconFile: "E-WEB-Goal-09.png",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialisation and foster innovation.",
      singaporeContext: "Green buildings, sustainable industry and innovation are major Green Plan themes, including greener infrastructure and industrial transformation.",
      industries: "Advanced manufacturing, construction, semiconductors, infrastructure, smart cities, R&D",
      studyPathways: "Engineering; Architecture; Computer Science; Data Science; Materials Science; Design",
      careerRoles: "Engineer; product manager; architect; urban systems analyst; R&D scientist",
      purposefulIntention: "Occupational fulfillment; Positive impact"
    },
    {
      id: 10,
      name: "Reduced Inequalities",
      color: "#DD1367",
      iconFile: "E-WEB-Goal-10.png",
      description: "Reduce inequality within and among countries.",
      singaporeContext: "Policies such as ComLink+, social mobility efforts and targeted support aim to reduce disadvantage across income and life outcomes.",
      industries: "Social policy, inclusive design, accessibility, NGOs, healthcare outreach, public service",
      studyPathways: "Social Work; Psychology; Public Policy; Occupational Therapy; Design; Communications",
      careerRoles: "Case worker; inclusive design specialist; accessibility consultant; outreach coordinator; policy analyst",
      purposefulIntention: "Service; Positive impact"
    },
    {
      id: 11,
      name: "Sustainable Cities and Communities",
      color: "#FD9D24",
      iconFile: "E-WEB-Goal-11.png",
      description: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
      singaporeContext: "HDB's town planning, green buildings, transit targets and park access reflect Singapore's push for liveable, inclusive and low-carbon communities.",
      industries: "Urban planning, architecture, real estate, transport, municipal services, placemaking",
      studyPathways: "Architecture; Urban Planning; Geography; Civil Engineering; Real Estate; Environmental Studies",
      careerRoles: "Urban planner; architect; transport planner; estate manager; sustainability consultant",
      purposefulIntention: "Positive impact; Service"
    },
    {
      id: 12,
      name: "Responsible Consumption and Production",
      color: "#BF8B2E",
      iconFile: "E-WEB-Goal-12.png",
      description: "Ensure sustainable consumption and production patterns.",
      singaporeContext: "The Green Plan targets lower waste to landfill, greener buildings and more circular resource use across households and industry.",
      industries: "Circular economy, waste management, sustainable retail, packaging, procurement, life-cycle assessment",
      studyPathways: "Environmental Science; Industrial Design; Supply Chain; Materials; Business; Chemistry",
      careerRoles: "Sustainability executive; waste systems planner; packaging engineer; procurement analyst; LCA specialist",
      purposefulIntention: "Internal standards; Positive impact"
    },
    {
      id: 13,
      name: "Climate Action",
      color: "#3F7E44",
      iconFile: "E-WEB-Goal-13.png",
      description: "Take urgent action to combat climate change and its impacts.",
      singaporeContext: "Singapore has a carbon tax, emissions reduction targets and a net-zero-by-2050 goal, alongside coastal and heat resilience work.",
      industries: "Climate policy, carbon markets, risk advisory, adaptation planning, sustainability consulting, insurance",
      studyPathways: "Environmental Policy; Economics; Geography; Engineering; Data Science; Finance",
      careerRoles: "Climate risk analyst; carbon trader; sustainability consultant; policy officer; resilience planner",
      purposefulIntention: "Positive impact; Persevering"
    },
    {
      id: 14,
      name: "Life Below Water",
      color: "#0A97D9",
      iconFile: "E-WEB-Goal-14.png",
      description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
      singaporeContext: "Singapore is greening maritime activity and strengthening coastal resilience, including cleaner harbour craft and maritime decarbonisation.",
      industries: "Marine science, port operations, maritime decarbonisation, aquaculture, conservation, shipping",
      studyPathways: "Marine Science; Environmental Science; Naval Architecture; Engineering; Logistics",
      careerRoles: "Marine biologist; port sustainability officer; maritime engineer; fisheries specialist; ESG manager",
      purposefulIntention: "Positive impact; Service"
    },
    {
      id: 15,
      name: "Life on Land",
      color: "#56C02B",
      iconFile: "E-WEB-Goal-15.png",
      description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt biodiversity loss.",
      singaporeContext: "City in Nature includes more trees, nature parks and improved access to green spaces.",
      industries: "Biodiversity conservation, landscape design, ecology, parks management, environmental education",
      studyPathways: "Biological Sciences; Environmental Studies; Landscape Architecture; Geography; Education",
      careerRoles: "Ecologist; landscape architect; park manager; conservation educator; arborist",
      purposefulIntention: "Positive impact; Inner peace"
    },
    {
      id: 16,
      name: "Peace, Justice and Strong Institutions",
      color: "#00689D",
      iconFile: "E-WEB-Goal-16.png",
      description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
      singaporeContext: "Strong institutions are supported by anti-corruption enforcement, public trust, rule of law and transparent governance systems.",
      industries: "Law, governance, compliance, cybersecurity, audit, public administration",
      studyPathways: "Law; Political Science; Public Policy; Accountancy; Cybersecurity; Criminology",
      careerRoles: "Lawyer; compliance officer; auditor; policy officer; investigator; governance analyst",
      purposefulIntention: "Internal standards; Service"
    },
    {
      id: 17,
      name: "Partnerships for the Goals",
      color: "#19486A",
      iconFile: "E-WEB-Goal-17.png",
      description: "Strengthen the means of implementation and revitalise the Global Partnership for Sustainable Development.",
      singaporeContext: "Singapore advances regional and international cooperation through the Singapore Cooperation Programme and public-private partnerships.",
      industries: "International development, diplomacy, sustainability consulting, trade, partnerships, NGOs",
      studyPathways: "International Relations; Economics; Public Policy; Business; Communications; Sustainability",
      careerRoles: "Foreign service officer; partnership manager; development specialist; consultant; programme manager",
      purposefulIntention: "Relationships; Service; Positive impact"
    }
  ]

}; // end window.SDG_CONTENT
```

---

## 12. State Management Specification

All state is held in a single in-memory JavaScript object. This object is the single source of truth for all stage rendering.

```javascript
const appState = {
  currentStage: 'landing',    // 'landing' | 'browse' | 'select' | 'summary'
  sdgSortings: {              // keyed by SDG id (1 to 17)
    1: null,                  // null = unsorted; 'not' | 'slightly' | 'very' once sorted
    2: null,
    // ... through 17
  },
  topThree: [],               // array of SDG ids, max length 3, e.g. [3, 7, 13]
  expandedCards: new Set(),   // SDG ids currently expanded in browse view
  orientationNudgeDismissed: false
};
```

State transition rules:
- `currentStage` advances only when gating conditions are met (Sections 8.5 and 9.2)
- `sdgSortings` updates immediately on each categorisation tap, no confirmation required
- `topThree` updates on each select or deselect in Stage 2
- Clicking "Start Over" and confirming resets all fields to initial values

---

## 13. Component Specification

### 13.1 Navigation Header (Sticky)

- Fixed to top of viewport
- Shows: current stage label, progress (Stage 1 only), primary CTA button
- Must not obscure card content — apply matching `padding-top` to the page body
- On mobile: compress label text; retain progress bar and primary CTA

### 13.2 SDG Card States

| State | Description |
|---|---|
| Uncategorised | Default, no category badge, category buttons visible |
| Not Interested | Grey border, grey badge, category buttons visible |
| Slightly Interested | Amber border, amber badge, category buttons visible |
| Very Interested | Green border, green badge, category buttons visible |
| Expanded | Any of the above, plus detail sections visible below description |

### 13.3 Progress Bar (Stage 1)

- Tracks count of sorted cards out of 17
- Updates in real-time
- Turns fully green and shows a tick when 17 of 17 reached, at which point the "Next Step" button activates

### 13.4 Top 3 Selector (Stage 2)

- Same expandable card format as Stage 1
- Large "Add to My Top 3" button per card
- Counter displayed in sticky header: "X of 3 chosen"
- At 3 selected: remaining cards show inline message rather than an active button
- "See My Results" CTA activates at exactly 3

### 13.5 Spotlight Cards (Stage 3)

- Fully expanded by default (no "Read More" toggle needed)
- Rank badge ("1st", "2nd", "3rd") displayed prominently
- Visually elevated: larger shadow, wider card, accent colour header strip

### 13.6 Clipboard Copy

- `navigator.clipboard.writeText()` with try-catch fallback to `document.execCommand('copy')` for older iOS Safari
- Button cycles through: default > "Copying..." > "Copied!" (resets after 3 seconds)

### 13.7 Restart Modal

In-page modal only (not `window.confirm()`):
- Semi-transparent dark backdrop
- Modal card with confirm and cancel buttons
- On confirm: reset `appState`, re-render to Landing

---

## 14. Accessibility Requirements

| Requirement | Specification |
|---|---|
| Keyboard navigability | All interactive elements focusable via Tab; category buttons and expand toggles keyboard-operable |
| Focus indicators | Visible focus ring on all interactive elements (do not suppress `outline`) |
| Colour contrast | WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text and UI components |
| SDG colour dependency | Never rely solely on SDG colour to convey meaning — always pair with text label |
| Touch targets | Minimum 44 by 44px for all tappable elements (critical for iPad and mobile) |
| Font size | Body text minimum 16px; labels minimum 14px |
| ARIA labels | Category buttons: `aria-label="Mark SDG [N] — [Name] as Very Interested"` |
| Expanded state | Use `aria-expanded` attribute on expand toggle button |
| Reduced motion | All animations wrapped in `@media (prefers-reduced-motion: reduce)` |
| Icon alt text | Each SDG icon `<img>` has `alt="SDG [N] icon"` |

---

## 15. Copy and Tone Guidelines

- Grammatically correct Standard English throughout
- Warm and conversational, appropriate for 17 to 18 year olds
- Use "you" and "your" consistently — keep it personal
- Avoid jargon: "careers" not "occupational pathways"; "study areas" not "academic disciplines"
- Do not moralize — the SDGs frame purpose without prescribing it
- Short sentences preferred; avoid walls of text
- No em dashes anywhere in student-facing copy — use commas, "and", or restructured sentences instead

---

## 16. File Structure (ZIP Package)

```
sdg-explorer/
├── index.html                              -- application layout and logic
├── data/
│   └── sdg-content.js                     -- all editable content (edit this to revise copy)
├── fonts/
│   └── DMSans-Variable.woff2              -- bundled from Google Fonts (not CDN)
└── icons/
    ├── E-WEB-Goal-01.png                  -- SDG 1 icon
    ├── E-WEB-Goal-02.png                  -- SDG 2 icon
    ├── E-WEB-Goal-03.png
    ├── E-WEB-Goal-04.png
    ├── E-WEB-Goal-05.png
    ├── E-WEB-Goal-06.png
    ├── E-WEB-Goal-07.png
    ├── E-WEB-Goal-08.png
    ├── E-WEB-Goal-09.png
    ├── E-WEB-Goal-10.png
    ├── E-WEB-Goal-11.png
    ├── E-WEB-Goal-12.png
    ├── E-WEB-Goal-13.png
    ├── E-WEB-Goal-14.png
    ├── E-WEB-Goal-15.png
    ├── E-WEB-Goal-16.png
    ├── E-WEB-Goal-17.png
    ├── SDG_Wheel_Transparent_WEB.png      -- landing page decoration
    └── E_SDG_logo_horizontal_Transparent_WEB.png  -- optional header/footer logo
```

All JavaScript and CSS is embedded inline within `index.html` (in `<style>` and `<script>` tags), with the exception of the externally loaded `data/sdg-content.js`. No other external files are loaded at runtime.

The entire application is plain HTML5, CSS3 and vanilla JavaScript. No frameworks, no build tools, no external dependencies of any kind.

---

## 17. Files to Provide to Opus Alongside This Spec

Opus should receive the following files to build the resource:

| File | Source | Purpose |
|---|---|---|
| `SDG_SLS_Resource_Spec_v2.md` | This document | Full build brief |
| `E-WEB-Goal-01.png` through `E-WEB-Goal-17.png` | `E-SDG-Icons-WEB.zip` | SDG card icons |
| `SDG_Wheel_Transparent_WEB.png` | `E-SDG-logos-SDG-wheel_No-UN-Emblem.zip` | Landing page decoration |
| `E_SDG_logo_horizontal_Transparent_WEB.png` | `E-SDG-logos-SDG-wheel_No-UN-Emblem.zip` | Optional header logo |
| `DMSans-Variable.woff2` | Download from fonts.google.com/specimen/DM+Sans (select "Download family", extract WOFF2) | Bundled body font |

Opus does not need to receive the source docx or the SDG reference md file — all content is already embedded in `sdg-content.js` within this spec.

---

## 18. Acceptance Criteria

The resource passes acceptance when all of the following are true:

- [ ] All 17 SDG cards render with correct content, icons and SDG accent colours in Stage 1
- [ ] Cards expand and collapse correctly on click and tap
- [ ] Correct SDG PNG icon loads for each card from the `icons/` folder
- [ ] Category selection updates visual state immediately (border colour, badge)
- [ ] Progress counter and progress bar update in real-time
- [ ] Category tally (footer) updates in real-time
- [ ] "Next Step" button is disabled until all 17 are sorted
- [ ] Pool logic for Stage 2 correctly applies the V >= 3 / V 1-2 / V = 0 rules
- [ ] Stage 2 edge case message and "Back to Sorting" button display when pool has fewer than 3 SDGs
- [ ] Top 3 selection is limited to exactly 3; "full" message appears on remaining cards
- [ ] "See My Results" is disabled until exactly 3 are selected
- [ ] Stage 3 spotlight cards display all content fields for the top 3, with rank badges
- [ ] Stage 3 full sorting summary correctly groups all 17 SDGs into three categories
- [ ] Copy to clipboard produces correctly formatted plain-text output
- [ ] Copy button fallback (`execCommand`) works on iOS Safari
- [ ] Restart confirmation modal works and resets all state to initial values
- [ ] Back navigation from Stage 2 to Stage 1 preserves all 17 sortings
- [ ] Back navigation from Stage 3 to Stage 2 preserves top-3 selections
- [ ] Landscape 4-column grid renders correctly on desktop (1280px+)
- [ ] Landscape 3-column grid renders correctly on tablet landscape (768 to 1279px)
- [ ] Portrait 2-column or 1-column layout renders correctly on mobile (below 768px)
- [ ] Orientation nudge appears on tablet in portrait mode and dismisses correctly
- [ ] DM Sans font loads from bundled WOFF2 (no CDN call)
- [ ] All interactions work via touch on iPadOS 16+ in Safari
- [ ] All interactions work on SLS mobile app (iOS and Android)
- [ ] Resource functions fully offline after initial load
- [ ] No console errors or warnings in Chrome DevTools
- [ ] WCAG AA contrast met for all text elements
- [ ] Touch targets are at least 44 by 44px for all interactive elements
- [ ] Animations suppressed under `prefers-reduced-motion`
- [ ] No em dashes appear anywhere in student-facing copy

---

## 19. Out of Scope

- Audio or video content
- Teacher-facing analytics or logging
- Multi-student or collaborative modes
- Integration with any external platform or SLS backend API
- Persistent storage of student responses between sessions
- Translation to other languages

---

*End of specification. Version 2.0. Provide this document, the icon PNGs, the SDG wheel PNG, and the DM Sans WOFF2 to Opus as the complete build package.*
