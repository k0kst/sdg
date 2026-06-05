# SDG Pathways Explorer

A self-contained, single-page web app that helps students explore the UN
Sustainable Development Goals and connect them to career interests. It runs
entirely client-side (no build step, no server, no network calls) so it can be
uploaded to the Student Learning Space (SLS) as a static ZIP package.

The experience ships as **three separate ZIPs** — Primary, Secondary, and
Pre-University. All three share the exact same code; only the per-level
*content* file differs.

---

## Architecture at a glance

```
index.html              The entire app: markup, CSS, and JS in one file.
data/sdg-content.js     Shared BASE content + the "modes" (level) registry.
data/content.js         The active LEVEL pack — the ONLY file that changes per ZIP.
fonts/                  Bundled webfont (DMSans).
icons/                  Bundled SDG goal icons, wheel, and logo.
```

`index.html` loads `data/sdg-content.js` first, then `data/content.js`, then
**auto-detects how many levels registered**:

- **Exactly one level present** → the app boots straight into that level. There
  is **no level picker and no level-switch button**. This is what you ship to
  students.
- **Two or more levels present** → the app opens on the dedicated level-picker
  page (the age-group landing page). This is the "preview" build used for
  editing/reviewing all three levels at once.

The level is chosen **only once**, on that first level-picker page. The
subsequent "Let's begin" landing page intentionally contains **no** level
picker.

### Source files you edit

You only ever edit these three files (each holds just the wording that differs
for its level; everything else is inherited from `data/sdg-content.js`):

```
data/content-primary.js          (ages 11–12)
data/content-secondary.js        (ages 13–16)
data/content-pre-university.js   (ages 17–20)
```

> `data/content.js` is **generated** — do not edit it by hand. Edit the three
> `data/content-<level>.js` files and rebuild.

---

## What goes in the ZIP (the manual-zip manifest)

Each shipped single-level ZIP must contain **exactly** this tree, with
`index.html` at the **root of the archive** (not nested inside a folder), so
that the relative paths inside `index.html` resolve:

```
sdg-explorer-<level>.zip
├── index.html                 # the app (identical in every ZIP)
├── data/
│   ├── sdg-content.js         # shared base content + modes registry (identical in every ZIP)
│   └── content.js             # the ONE level pack for this ZIP (Primary | Secondary | Pre-U)
├── fonts/
│   └── DMSans-Variable.ttf    # bundled webfont
└── icons/
    ├── E-WEB-Goal-01.png … E-WEB-Goal-17.png   # the 17 SDG goal icons
    ├── SDG_Wheel_Transparent_WEB.png           # SDG colour wheel (landing visual)
    └── E_SDG_logo_horizontal_Transparent_WEB.png  # SDG logo
```

Rules that make the ZIP valid:

- **`index.html` sits at the archive root.** When the ZIP is opened, the very
  first entries are `index.html`, `data/`, `fonts/`, `icons/` — there must be no
  extra wrapping folder (e.g. *not* `sdg-explorer/index.html`).
- **`data/` always contains both `sdg-content.js` and `content.js`.**
  `content.js` is the single-level pack for that ZIP (one of the three
  `content-<level>.js` files, copied to the name `content.js`).
- **All paths are relative.** `index.html` references `fonts/…`, `icons/…`, and
  `data/…` relatively, so the folder layout above must be preserved exactly.
- The repo's top-level `assets/` directory is **not** part of the package — the
  app uses the top-level `fonts/` and `icons/` folders. Do not include
  `assets/`, `dist/`, `tools/`, `spec/`, or the per-level
  `content-<level>.js` source files in a shipped ZIP.

The **preview** ZIP is identical except its `data/content.js` is the combined
pack (all three levels concatenated), which makes the app open on the level
picker.

---

## Building the ZIPs

### Option A — build everything with the script (recommended)

```bash
bash tools/build-zips.sh
```

This regenerates the committed preview `data/content.js` (all three levels) and
produces four ZIPs in `dist/`:

```
dist/sdg-explorer-primary.zip
dist/sdg-explorer-secondary.zip
dist/sdg-explorer-pre-university.zip
dist/sdg-explorer-preview.zip      # all levels + picker, for your own review
```

Upload the three single-level ZIPs to SLS. Requires `bash` and `zip`.

### Option B — zip one level by hand (no shell needed)

For any one level, e.g. Primary:

1. Copy `data/content-primary.js` over `data/content.js` (replace it).
2. Select `index.html`, `data/`, `fonts/`, and `icons/` and compress them so
   that **`index.html` is at the root of the ZIP** (alongside the `data/`,
   `fonts/`, and `icons/` folders) — matching the manifest above.
3. That ZIP is the Primary version. Repeat with `content-secondary.js` and
   `content-pre-university.js` for the other two.

To return to the editing/preview view (the picker for all three levels), restore
`data/content.js` to the combined pack by re-running `tools/build-zips.sh`.

---

## Deployment notes

- This base + `content.js` model works for the standard SLS **ZIP package**
  (relative paths resolve). If you ever deploy via **signed URLs** (where the
  iframe cannot fetch sub-resources), the content would need to be inlined into
  `index.html` instead — ask before going down that path.
- See [`tools/README.md`](tools/README.md) for more detail on the build script
  and the editing workflow.
