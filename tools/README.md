# Building the three age-group versions

The SDG Pathways Explorer ships as **three separate ZIPs** (Primary, Secondary,
Pre-University). They all share the same code; only the content differs.

## How it fits together

```
index.html              <- the app (same in every ZIP)
data/sdg-content.js     <- shared BASE content + the "modes" registry (same in every ZIP)
data/content.js         <- the LEVEL pack for THIS ZIP (this is the only file that changes)
fonts/ icons/           <- bundled assets (same in every ZIP)
```

`index.html` loads `data/sdg-content.js` then `data/content.js`, and then
**auto-detects** how many levels registered:

- **One level present** -> the app boots straight into that level. No level
  picker, no level-switch buttons. This is what you ship to students.
- **Two or more present** -> the app opens on the level picker and shows an
  on-page level switch. This is the "preview" build for editing/reviewing all
  three at once.

The three editable source files are:

```
data/content-primary.js          (ages 11-12)
data/content-secondary.js        (ages 13-16)
data/content-pre-university.js   (ages 17-20)
```

**You only ever edit these three files.** Each holds just the wording that
differs for its level; everything else is inherited from `data/sdg-content.js`.

## Option A - build everything with the script (recommended)

```bash
bash tools/build-zips.sh
```

This:

1. Regenerates the committed preview `data/content.js` (all three levels) so the
   repo opens with the picker.
2. Produces four ZIPs in `dist/`:
   - `sdg-explorer-primary.zip`
   - `sdg-explorer-secondary.zip`
   - `sdg-explorer-pre-university.zip`
   - `sdg-explorer-preview.zip` (all levels + picker, for your own review)

Upload the three single-level ZIPs to SLS. Requires `bash` and `zip`.

## Option B - do it by hand (no shell needed)

For any one level, e.g. Primary:

1. Copy `data/content-primary.js` over `data/content.js` (replace it).
2. Zip the folder so that `index.html` sits at the root of the ZIP, alongside
   `data/` (containing `sdg-content.js` + `content.js`), `fonts/` and `icons/`.
3. That ZIP is the Primary version. Repeat with `content-secondary.js` and
   `content-pre-university.js` for the other two.

To get back to the editing/preview view (picker for all three), restore
`data/content.js` to the combined pack by re-running `tools/build-zips.sh`, or
paste the three source files one after another into `data/content.js`.

## Notes

- `data/content.js` is generated. Do not edit it directly; edit the three
  `data/content-<level>.js` files and rebuild.
- Cache-busting is automatic. The content scripts load as `data/...js?v=<VER>`;
  the build stamps `<VER>` from a checksum of the content files, so it changes
  whenever (and only when) the content changes. You no longer bump it by hand —
  just rerun the build. (If you edit content without rebuilding, the old `?v=`
  sticks and browsers may serve cached JS, so always rebuild before shipping.)
- Deployment: this base + `content.js` model works for the standard SLS *ZIP
  package* (relative paths resolve). If you ever deploy via *signed URLs* (where
  the iframe cannot fetch sub-resources), the content would need to be inlined
  into `index.html` instead - ask before going down that path.
