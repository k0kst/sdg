# SDG Pathways Explorer — Guide for Teachers

This is the **handover guide** for keeping the SDG Pathways Explorer up to date.

You do **not** need to know how to code. Your only job is to change the **words**
(text) that students read. The design, colours, and how the activity works are
already built and should be left alone.

Everything here is written for a **Windows** computer using only the apps that
come with Windows: **Notepad** (for editing) and **File Explorer** (for zipping).

> 📌 **The 5 things this guide shows you**
> 1. How to edit a text/JavaScript file safely
> 2. Where to edit (which file holds which words)
> 3. How your change shows up on the student's screen
> 4. How to test your change on your own computer
> 5. How to package and publish the three versions to SLS

---

## 1. What this resource is

The SDG Pathways Explorer is a small website that helps students explore the
17 UN Sustainable Development Goals and connect them to interests and careers.

It comes in **three versions**, one for each age group:

| Version | Age group | File that holds its words |
|---|---|---|
| **Primary** | 11–12 | `data/content-primary.js` |
| **Secondary** | 13–16 | `data/content-secondary.js` |
| **Pre-University** | 17–20 | `data/content-pre-university.js` |

All three versions share the **same** program. Only the words differ.

---

## 2. Before you start (please read)

1. **Use Notepad — never Word or WordPad.**
   Word and WordPad secretly change normal quote marks (`"`) into "curly" quote
   marks (`“ ”`). Curly quotes **break** the file. Notepad is safe.

2. **Turn on file extensions** so you can see the `.js` at the end of file names
   (this lets you tell `content.js` apart from `content-primary.js`):
   - Open **File Explorer**.
   - Click the **View** menu → tick **File name extensions**.
   *(On Windows 10: View → tick "File name extensions". On Windows 11:
   View → Show → File name extensions.)*

3. **Always make a backup first.** See [Section 7](#7-back-up-and-undo-mistakes).

---

## 3. The golden rules of safe editing

Think of the file as a fill-in-the-blanks form. The computer needs all the
punctuation to stay exactly where it is. You only change the words.

✅ **DO**
- Only change text that sits **between a pair of quote marks**: `"like this"`.
- Keep every quote mark `"`, comma `,`, curly bracket `{ }`, and square
  bracket `[ ]` exactly where it is.
- Make **one small change at a time**, then test it (Section 8).

🚫 **DON'T**
- Don't delete or add quote marks, commas, or brackets.
- Don't change the words that come **before a colon** (e.g. `description:`).
  Those are labels the program needs — leave them alone.
- Don't put a double quote `"` **inside** your sentence. If you need an
  apostrophe, the normal one is fine: `Singapore's plan` ✅.
  If you need to quote something, use single quotes: `the '30 by 30' plan` ✅.
- Don't rename the file or change `.js` to anything else.
- Don't edit `data/content.js` (the program rebuilds that one for you).

> ⚠️ **The most common mistake:** pasting text from Word, which brings in curly
> quotes. Always type or paste into **Notepad**, then re-type any quote marks by
> hand in Notepad to be safe.

---

## 4. Which file holds which words

Inside the `data` folder:

| File | What's inside | Who sees your change |
|---|---|---|
| `content-primary.js` | Words for the **Primary** version only | Primary students |
| `content-secondary.js` | Words for the **Secondary** version only | Secondary students |
| `content-pre-university.js` | Words for the **Pre-University** version only | Pre-U students |
| `sdg-content.js` | **Shared** words used by **all three** versions (goal names, industries, career roles, "sources of purpose" descriptions, the references list, and the default on-screen labels) | Everyone |
| `content.js` | ⛔ **Do not edit.** The program rebuilds this automatically. | — |

**Rule of thumb:** to change the wording for just one age group, edit that
group's file. To change something that should be the same for everyone (like a
job title or a goal's name), edit `sdg-content.js`.

---

## 5. How to edit a JavaScript file (step by step)

1. Open the `data` folder in File Explorer.
2. **Right-click** the file you want (e.g. `content-primary.js`) →
   **Open with** → **Notepad**.
   *(If Notepad isn't listed: choose "Choose another app", pick Notepad.)*
3. Press **Ctrl + F** to search. Type a few words of the sentence you want to
   change, and press Enter to jump to it.
4. **Carefully** change only the words **between the quote marks**.
5. Press **Ctrl + S** to save. (Use Save, *not* "Save As" — this keeps the file
   name and type correct.)

### Example A — changing one sentence

A goal description in `content-primary.js` looks like this:

```js
1:  { name: "No Poverty",
      description: "Make sure everyone has enough money for food, a home, and the things they need to live well.",
```

To reword it, change **only** the part inside the `description` quotes:

```js
1:  { name: "No Poverty",
      description: "Make sure every family has enough money for food, a safe home, and what they need each day.",
```

Notice: the `name:`, the quote marks, and the comma at the end are all left
exactly as they were. ✅

### Example B — changing a list

Some entries are **lists**. Each item is in its own quote marks, separated by
commas, inside square brackets `[ ]`. For example, career roles in
`sdg-content.js`:

```js
careerRoles: ["Social Worker", "Community Development Executive", "Policy Manager", "Programme Executive", "Estate Manager"],
```

You can reword an item, add one, or remove one — just keep each item in
`"quotes"` and put a comma **between** items (but **not** after the last one):

```js
careerRoles: ["Social Worker", "Community Worker", "Policy Manager", "Programme Executive", "Estate Manager"],
```

---

## 6. Where to edit, and where it shows up on screen

These tables show the common things you might change and where students see them.

### In a level file (`content-primary.js`, `content-secondary.js`, `content-pre-university.js`)

| You'll see this label in the file | What it controls | Where the student sees it |
|---|---|---|
| `description` | The one-line explanation of a goal | On each goal card |
| `singaporeContext` | The "In Singapore…" sentence for a goal | On each goal card |
| `studyPathways` | A list of study/talent areas. Shown as **"Possible Areas of Exploration"** (Primary, listing CCAs and subjects offered in Singapore secondary schools), **"Relevant Courses/Subjects"** (Secondary), or **"Relevant Courses"** (Pre-U) | On each goal card |
| `reflections` | The reflection prompts at the end | The results page |
| `purposes` → `name` / `description` | The wording of each "source of purpose" | The purpose-tagging step and results |
| `ui` labels (e.g. `landingSubtitle`, `stage1Heading`) | Headings and instructions on each screen | Across the activity, that version only |
| `ui` → `stage3SaveBanner` / `stage3CopyConfirm` | The "share your results with…" messages | The results page, that version only |

### In the shared file (`sdg-content.js`) — affects all three versions

| You'll see this label in the file | What it controls | Where the student sees it |
|---|---|---|
| `name` | The goal's title | Goal cards, everywhere |
| `industries` | The list of related industries | On each goal card |
| `careerRoles` | The list of related jobs | On each goal card |
| `singaporeContext` | The default "In Singapore…" sentence (used unless a level file overrides it) | Goal cards |
| `purposes` (the big list) | The names/descriptions of all 16 sources of purpose | The purpose-tagging step |
| `references` | The references and declaration list | Bottom of the first page |
| `ui` labels | The default on-screen labels shared by all versions | Across the activity |

> 💡 **Remember:** a change in a **level file** affects only that age group.
> A change in **`sdg-content.js`** affects **all three** versions.

---

## 7. Back up and undo mistakes

**Before you edit anything:**
- Copy the whole project folder and paste it somewhere safe. Rename the copy,
  e.g. `SDG Pathways Explorer - BACKUP (5 June)`.

**If something goes wrong:**
- To fix one file: copy that file from your backup and paste it back, replacing
  the broken one.
- If the whole activity stops working: delete your working folder and copy the
  backup folder back. You're returned to a known-good state.

---

## 8. Test your change on your own computer (before publishing)

You can run the activity straight from your computer — no internet upload needed.

### Quick check of all three versions at once

1. In File Explorer, go to the project folder.
2. **Double-click `index.html`.** It opens in your web browser.
3. If the file is set up for preview, you'll see the **age-group picker** —
   choose each level to check your wording.

### Checking one version after editing its level file

Because the activity reads from `data/content.js`, you need to point it at the
version you edited:

1. In the `data` folder, **copy** the level file you edited
   (e.g. `content-primary.js`).
2. **Paste it into `data`**, and when Windows offers, **replace** `content.js`
   with it. *(Tip: copy it, rename the copy to `content.js`, and confirm the
   replace.)*
3. **Double-click `index.html`** to open it.
4. Press **Ctrl + F5** (hard refresh) so the browser shows your new words and
   not an old saved copy.

### What a problem looks like

| What you see | What it usually means | Fix |
|---|---|---|
| A blank page, or a red "Content failed to load" message | A quote, comma, or bracket got deleted/added | Restore that file from your backup and re-do the edit carefully |
| Your new words don't appear | `content.js` wasn't updated, or the browser cached the old page | Repeat steps 1–2 above, then press **Ctrl + F5** |
| Text spills outside a card | Your text is too long | Shorten it |

---

## 9. Package the three ZIP files (the main, no-code way)

You publish **three separate ZIP files** to SLS — one per age group. Do these
steps **once for each** version.

> Do this on a **copy** of the folder so your originals stay intact.

**For each level (Primary, then Secondary, then Pre-University):**

1. In the `data` folder, copy that level's file
   (e.g. `content-primary.js`) and use it to **replace `content.js`**
   (copy it, rename the copy to `content.js`, confirm replace) — exactly like
   the test step in Section 8.

2. **Do not add a `?v=` version tag to the script paths in `index.html`.**
   The two content scripts must stay as plain paths (`data/sdg-content.js`
   and `data/content.js`). SLS serves packaged files by exact path and will
   return "not found" for a path with a `?v=...` query string, which makes the
   app show *"Content failed to load. Check data/sdg-content.js."* Re-uploading
   the ZIP to SLS already serves a fresh copy, so no version tag is needed.

3. Select these **four items together**, in the project folder:
   `index.html`, the `data` folder, the `fonts` folder, and the `icons` folder.

4. **Right-click** the selection → **Send to** → **Compressed (zipped) folder**.

5. Rename the new ZIP to match the level, e.g. `sdg-explorer-primary.zip`.

6. **Check the ZIP is correct:** double-click it to open it. You should see
   `index.html` sitting at the **top level** (next to `data`, `fonts`, `icons`).
   If everything is inside an extra folder instead, delete the ZIP and redo
   step 3, making sure you select the four items themselves (not the folder that
   contains them).

> 🚫 **Do not include** `assets`, `dist`, `tools`, `spec`, this `README.md`, or
> the backup folder in the ZIP. Only `index.html`, `data`, `fonts`, `icons`.
>
> ℹ️ It's fine if `data` still contains the three `content-<level>.js` files —
> the activity only reads `content.js`, so the extras are simply ignored.

Repeat for the other two levels, each time replacing `content.js` with the right
level file before zipping.

---

## 10. Optional faster way (for a technical helper)

If you have a colleague comfortable with Windows scripting, there is a script
that builds **all three ZIPs at once** and handles the cache version
automatically.

Double-click `tools/build-zips.bat` in File Explorer. It will open a command
window, build everything, and wait for you to press Enter when done.

It produces the ready-to-upload ZIPs in a `dist` folder.

See [`tools/README.md`](tools/README.md) for the technical details.

---

## 11. Publish to SLS

Upload each single-level ZIP to the Student Learning Space (SLS) as a
**file / ZIP package** resource:

- `sdg-explorer-primary.zip` → the Primary class/lesson
- `sdg-explorer-secondary.zip` → the Secondary class/lesson
- `sdg-explorer-pre-university.zip` → the Pre-University class/lesson

> The exact menu names in SLS change from time to time. Look for the option to
> add a **file** or **media/website** resource and upload the ZIP as a package.
> Follow your school's current SLS instructions for uploading a zipped website.

---

## 12. Glossary

| Term | Meaning |
|---|---|
| **SDG** | Sustainable Development Goal — the 17 UN global goals |
| **DSA** | Direct School Admission — the talent areas shown to Primary students |
| **ECG** | Education and Career Guidance |
| **SLS** | Student Learning Space — where the activity is published |
| **Preview build** | A version set up to show the age-group picker so you can check all three at once |
| **Level pack** | The single content file (`content.js`) that decides which age group a ZIP is for |

---

## 13. Troubleshooting quick reference

| Problem | Likely cause | What to do |
|---|---|---|
| Blank page or red error message | A quote/comma/bracket was changed | Restore the file from backup, redo the edit |
| New words don't show up | `content.js` not updated, or browser cached old page | Replace `content.js` with your level file, then press **Ctrl + F5** |
| Students still see old text after you republished | Browser cached the old page | Hard-refresh with **Ctrl + F5**; on SLS, confirm the new ZIP actually replaced the old resource |
| "Content failed to load. Check data/sdg-content.js." on SLS (but fine when you open the unzipped folder) | The ZIP stored its entries with backslash paths, so SLS can't find the `data/` folder | Rebuild with the current `build-zips.bat` (it now writes forward-slash ZIP entries), or zip by hand with Windows Explorer's "Send to → Compressed folder" |
| Text overflows the card | Text too long | Shorten it |
| Quotes look wrong / file won't load | Curly quotes from Word | Re-edit in **Notepad** and re-type the quote marks |
| Age-group picker missing or extra | `content.js` has one level (no picker) vs all three (picker) | Expected — one level = a publish ZIP; all three = the preview |

---

## 14. Getting more help

This guide covers everything a teacher needs for **wording** changes. For
anything beyond the words — layout, colours, new features, or the build script —
please contact a developer and share:

- [`tools/README.md`](tools/README.md) — the technical build and packaging notes
- the `spec/` folder — the full specification of how the activity works

---

## 15. Project Architecture (for developers)

The SDG Pathways Explorer is a **self-contained, offline-first single-page
application** — no backend, no package manager, no build step required to run.

### File layout

```
sdg-explorer/
├── index.html                      # The entire app: HTML + CSS + JS (~4 000 lines)
├── data/
│   ├── sdg-content.js              # Shared base: 17 SDGs, industries, career roles,
│   │                               #   purposes, default UI labels (all levels)
│   ├── content-primary.js          # Level overrides + UI copy (ages 11–12)
│   ├── content-secondary.js        # Level overrides + UI copy (ages 13–16)
│   ├── content-pre-university.js   # Level overrides + UI copy (ages 17–20)
│   └── content.js                  # Generated — do not edit; rebuilt by build-zips.bat
├── fonts/
│   └── DMSans-Variable.ttf         # Bundled — loaded locally, no CDN at runtime
├── icons/
│   └── E-WEB-Goal-*.png            # Official UN SDG icon set
├── spec/                           # Design and functional specification documents
└── tools/
    ├── build-zips.bat              # Windows build script (see below)
    └── README.md                   # Developer build guide
```

### Runtime model

`index.html` loads two scripts in order:

1. **`data/sdg-content.js`** — registers the shared content (SDG names,
   industries, career roles, 16 sources of purpose) into a global `SDG_CONTENT`
   registry.
2. **`data/content.js`** — registers one or more **level packs** (Primary,
   Secondary, Pre-U). Each pack overrides or extends the shared data for its age
   group and supplies its own UI copy.

After both scripts load, the app's `init()` function inspects which levels are
registered:

- **One level** — boots straight into that level (no picker). This is the
  published ZIP that students use.
- **Multiple levels** — shows the level-picker and an on-page level switch.
  This is the preview build used when reviewing all three at once.

All state is kept in-memory. There are no `localStorage`, `fetch()`, or network
calls — required by the SLS sandboxed iframe environment.

### Content model

```
data/sdg-content.js         shared base (17 × SDG goals, purposes, industries,
                                career roles, default UI labels)
         ↑ merged at runtime
data/content-<level>.js     per-level overrides (descriptions, study pathways,
                                Singapore context, UI labels for that age group)
         ↓ combined into
data/content.js             runtime content — one level for a publish ZIP,
                                all three concatenated for the preview build
```

### Build pipeline (`tools/build-zips.bat`)

1. Concatenates the three level files into `data/content.js` (preview pack).
2. Strips any `?v=...` query string from the two content `<script>` tags in
   `index.html` so they stay plain relative paths, and writes the files as
   UTF-8 without a BOM.
3. Packages four ZIPs into `dist/`, writing **forward-slash** entry names so
   the `data/` folder resolves inside the SLS package server (the previous
   `ZipFile.CreateFromDirectory` wrote backslash paths, which SLS could not
   resolve — the app then showed "Content failed to load"):

| ZIP | Contents | Purpose |
|---|---|---|
| `sdg-explorer-primary.zip` | `index.html`, shared data, primary content, fonts, icons | Upload to SLS (Primary) |
| `sdg-explorer-secondary.zip` | Same, but secondary content | Upload to SLS (Secondary) |
| `sdg-explorer-pre-university.zip` | Same, but pre-university content | Upload to SLS (Pre-U) |
| `sdg-explorer-preview.zip` | All three levels + level picker | Local review only |

The three single-level ZIPs are the ones published to SLS.
