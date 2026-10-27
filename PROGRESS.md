# NPB (Ness Pare-Brise) French landing page: PROGRESS

Source: Figma file `i7ShFs4Hfhi9k3OWvS7w8z` ("Mecatronics"), page **final** → section **"Npb french"** (`31:7999`), root frame `31:3597` (1440 × 16557, desktop only).
Stack: Next.js 16.4.3 (App Router, `src/`, Cache Components on), React 19.3, TypeScript strict, Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`), `motion` 14.6. Scaffolded with `create-next-app` on 2026-10-27. Work branch: `feat/landing`.
Sibling projects from the same Figma file: `../nessglass`, `../oxxoglass`.

---

## Design data source (read before fetching anything from Figma)

The Figma REST API is **not usable for layer data** until about **Fri 2026-10-30 afternoon** (429, `x-figma-rate-limit-type: low`). The image-fills endpoint still works.

All node data comes from the local copy `C:\Users\triosweb\Downloads\Mecatronics - Partial file saved 26-10-2026.fig`, decoded with scripts kept outside the repo in `%TEMP%\nesstool` (deps `kiwi-schema`, `fzstd`). The decoded file is `%TEMP%\nessfig\fig_msg.json`.

| Script | Does |
|---|---|
| `decode.js`, `tree.js`, `spec.js`, `raw.js` | Decode the .fig, print a subtree, print the style spec per node, dump raw fields |
| `stats.js <json> <guid>` | Colours, fonts, effects, radii, gaps, symbols and prototype interactions over a subtree |
| `diff.js <json> A>B …` | Smart Animate diff between two variants (layers matched by name path) |
| `imguse.js`, `sheet.js` | Image fills per node with crop transforms; contact sheet of the images |
| `export-npb.js <sharp> <outDir>` | Crops each image like Figma and writes WebP at 2× node size (never upscaled) |
| `iconlist.js`, `svg.js`, `svg2tsx-npb.js` | Find icons, render nodes to SVG (`!` keeps hidden strokes), generate the TSX icons |

Cached outputs: `%TEMP%\nessfig\npb_spec.txt` (full style spec of `31:3597`), `npb_stats.txt`, `npb_imguse.txt`, `npb_tree3.txt`, `npbsvg/`.
Image fills missing from the partial .fig were downloaded by hash into `%TEMP%\nessfig\dl` (URL map `imagefills.json`, links valid until ~2026-11-09).
The file also opens **read-only in a browser without sign-in**, which works for the visual side-by-side checks in Phase 3.

---

## Phase status

- [x] Phase 0: Inventory (2026-10-27). Approved with the recommended defaults: **landing page only**; the user will supply the videos and the HOOKRIDE font later.
- [x] Phase 1: Foundation (2026-10-27, `tsc`, `npm run lint`, `npm run build` clean)
  - [x] Scaffold, branch `feat/landing`, `motion` installed
  - [x] Tokens in `@theme`, default Tailwind palette removed (`--color-*: initial`)
  - [x] Fonts via `next/font/google` in `src/app/layout.tsx` (HOOKRIDE stand-in Bebas Neue, see D2)
  - [x] 41 images in `public/images` (WebP, 1.8 MB), 24 icons in `src/components/icons`, France map in `public/illustrations`
  - [x] `src/lib/motion.ts` (all Figma timings, easings, springs and keyframes) + `MotionProvider` (reduced motion)
- [x] Phase 2: Components (2026-10-27, `tsc`, lint, build clean; checked on the dev-only `/kit` sheet against Figma at 1440 and for overflow at 320 / 375 / 768 / 1024 / 1280; see "Code map")
  - Cards (offer, service slide, benefit, step, Pourquoi, article, region, review) are built in Phase 3 with their section, each being used by one section only (same as the Ness Glass build).
- [ ] Phase 3: Sections of `/` (one at a time, compared with Figma at 1440 px)

---

## Design system (Phase 1)

**Fonts**
- Display: **HOOKRIDE Regular** in Figma (caps-only heavy condensed face): headings 78/0.9, watermarks, prices, slide titles. **Not supplied yet → stand-in Bebas Neue** (`--font-bebas-neue`, chosen 2026-10-27 by measuring: Figma "DOMMAGE, NOUS VOUS" ≈ 495 px at 78 px, Bebas Neue 523, Anton 653; Bebas gives Figma's line count on 3 of the 4 measured headings, Anton on 1). Bebas is lighter in weight than HOOKRIDE. To switch: add the files to `src/fonts`, load them with `next/font/local` as `--font-hookride`, and put that variable first in `--font-display`.
- Text: **Inter** (variable, 400–800), line-height 1.2 → `font-sans` (default).
- Alt: **Roboto** 300/400/500/700 (footer, consent, button master) → `font-alt`. **Manrope** 300 (language switch) → `font-lang`.

**Colours** (only the project palette exists as utilities)

| Token | Hex | Used for |
|---|---|---|
| `brand` | `#2fa0a6` | Figma style "nrp theme": buttons, eyebrow pills (10/12/28 % tints), icons, strokes |
| `brand-deep` | `#127075` | "Pourquoi" cards |
| `accent` / `accent-alt` | `#00dfeb` / `#00d8e3` | Cyan on dark (hero eyebrow, ghost button) / repair section |
| `accent-glow` / `accent-bright` | `#70f8ff` / `#06f3ff` | CTA inner glow / footer watermark gradient start |
| `signal` | `#fa5b2e` | Form submit button and button-master arrow (kept, see D4) |
| `ink`, `muted`, `muted-dark`, `muted-darker`, `placeholder` | `#232323`, `#696d76`, `#969696`, `#a4a4a4`, `#909090` | Text |
| `snow`, `cream` | `#fcfcfc`, `#f5f3f0` | Text on dark, chips |
| `surface`, `surface-alt`, `mist`, `tile`, `tile-line`, `field`, `faq`, `slide` | `#f8f8f8`, `#f4f4f4`, `#f6f6f6`, `#f5f5f5`, `#e6e6e6`, `#efefef`, `#e5e5e5`, `#c4c4c4` | Light cards, icon tiles, search field, FAQ (40 %), slide placeholder |
| `night`, `night-card`, `night-form`, `teal-night`, `teal-chip`, `chip-line`, `line` | `#141414`, `#1c1c1c`, `#272727`, `#0a1515`, `#0e1f1f`, `#262626`, `#5b5b5b` | Dark sections, chips, footer divider |
| `star` / `star-off` | `#fcbd03` / `#d9d9d9` | Ratings |

**Type scale:** `text-eyebrow` 14, `text-chip` 14/20 px, `text-body` 16, `text-title` 18 (all 1.2); display `text-display` 78 (fluid, 0.9), `text-form-title` 58 (fluid, 1), `text-price` 38, `text-slide-title` 28, `text-card-display` 24; watermarks `text-watermark-rewards` 209.78 and `text-watermark-footer` 294.83 (scale with `vw`, capped at the Figma size). Letter-spacing is 0 everywhere.
**Layout:** `max-w-site` = 1280 (1440 frame, 80 px gutters). Spacing uses Tailwind's 4 px scale (Figma gaps 4/8/16/24/32/40/80). Breakpoints: Tailwind defaults plus `xs` = 375 px (header CTA).
**Radii:** `rounded-check` 4, `rounded-button` 8, `rounded-tile` 10, `rounded-card` 16, `rounded-thumb` 22, `rounded-panel` 32, `rounded-form` 42, pills `rounded-full` (Figma 45–52).
**Blurs** (Figma radius ÷ 2): `nav` 9.55, `pill` 9.8, `eyebrow` 13.85, `caption` 15.1, `form` 8.15, `form-panel` 87.9, `rewards-glow` 180.65, `sparkle-lg` 6.9, `sparkle` 2, `tyre` 1, `banknote` 1.4.
**Shadows:** only `inset-shadow-glow` (`inset 0 1px 30px #70f8ff`, "Réclamez maintenant"). The `0 4 #000/25 %` values on Figma blurs are Figma defaults, not shadows.
**Hover / focus:** not designed. Approved default (D5): 200 ms `cubic-bezier(0,0,0.2,1)` transitions, slight darken on hover, 2 px `brand` focus ring (`:focus-visible` in base).

**Images** (`public/images/*.webp`, exported at 2× the node size; `next/image` serves AVIF/WebP 1×/2× from them)

| File | Figma node | Block |
|---|---|---|
| `logo-npb` | `31:4415` (header `31:3602` is a low-res copy) | Header, footer |
| `hero-poster` | `31:3599` video poster | Hero (until the video arrives, D1) |
| `offer-euro-coin`, `offer-tyre`, `sparkle` | `1:1133`, `1:1165–68`, `1:1138` | Offers (animated) |
| `avatar-centre-1..3` | `31:3726–28` | Locations |
| `service-panoramic-roof`, `service-windshield` | `31:3826`, `31:3814` | Services carousel |
| `experts-1..4` | `1:1528–31` | Glass experts collage |
| `come-to-you-poster` | `31:3902` video poster | "Nous venons à vous" (D1) |
| `why-expertise`, `why-speed`, `why-insurance`, `why-guarantee`, `why-mobile` | `1:1986`, `1:1993`, `1:2001`, `1:2009`, `1:2016` | Pourquoi cards |
| `repair-impact`, `replace-windshield` | `31:3961`, `31:3963` | Repair or replace |
| `rewards-hand-left/right`, `rewards-banknote-1/2` | `31:4107`, `31:4125`, `31:4127`, `31:4128` | Referral |
| `article-insurance`, `article-impact-repair`, `article-inspection` | `31:4159`, `31:4176`, `31:4193` | Articles |
| `region-south-west`, `-pyrenees`, `-central-france`, `-north`, `-ile-de-france`, `-south-east` | `31:4221`, `4236`, `4251`, `4264`, `4279`, `4294` | Où nous intervenons |
| `reviewer-avatar` | `1:2020` | Reviews |
| `partner-nessglass`, `-oxxoglass`, `-npb`, `-nexxytire` | `1:1057`, `1:1059`, `1:1061`, `1:1063` | Partners marquee |
| `contact-technician` | `31:4349` | Enquiry form |

**Illustration:** `public/illustrations/france-map.svg` = map vectors of `1:1190` without the pins (pins are positioned in code, they animate).

**Icons** (`src/components/icons`, generated from the Figma vectors, `currentColor` except Google): `SparkIcon` (eyebrow star), `ArrowRightIcon` (button arrow), `ArrowRightLargeIcon` (slide button), `ChevronRightIcon` (carousel prev/next, FAQ; rotated in code), `ChevronBoldIcon` (button master), `InsurersIcon`, `EuroIcon`, `BoltIcon`, `DocumentIcon`, `MapIcon`, `LockIcon` (insurance benefits), `CalendarIcon`, `MapPinOutlineIcon`, `ChatIcon` (help block), `MapPinIcon` (map), `CheckIcon`, `PlusIcon` (repair / replace), `BulletIcon` (list bullets), `TickIcon` (checkbox, hidden stroke in Figma = checked state), `StarIcon`, `GoogleIcon`, `FacebookIcon`, `InstagramIcon` (outer stroke clipped by its 20 px frame, as in Figma), `YoutubeIcon`.

---

## Code map (Phase 2)

- `src/app/layout.tsx`: fonts, `MotionProvider`, skip link "Aller au contenu" (→ `#contenu`), `SiteHeader`, `SiteFooter`.
- `src/app/kit/page.tsx`: **dev-only** component sheet (every component and state with Figma copy); `notFound()` in production (verified 404).
- `src/data/site.ts`: nav, CTA, contact, footer columns, socials, legal line (Figma text verbatim).
- `src/lib/cn.ts`: class joiner. It does **not** resolve conflicting utilities: wrap an element to hide it instead of adding `hidden` to a component that sets its own `display`.
- `src/components/ui/`
  - `Container`: 1280 column, gutters 20 / 40 / 80 px (`box-content`).
  - `Button.tsx`: `ButtonLink` / `Button` / `buttonClasses()`; `variant` primary | ghost, `tone` light | dark (ghost colour), `arrow`, `strong` (Bold 16/0.9, "Rechercher"), `glow` (inner glow). Verified: 194 / 218 / 215 / 152 / 492 px wide × 56, as in Figma.
  - `PillButton`: Figma "button" master, `light` | `glass` (54 px, padding 8) | `signal` (form submit override).
  - `Eyebrow`: `brand` | `glass` | `accent` tones, `uppercase` (false only for the hero, 31:3625).
  - `SectionIntro`: eyebrow + 78 px heading + paragraph, `layout` center | start | split, `tone` light | dark, per-section width classes, keeps Figma's manual line breaks.
  - `ArrowButton` / `ArrowIcon`: 36 px round, `dark` | `light` | `brand`, direction next | prev | up | down.
  - `FormFields.tsx`: `TextField`, `TextArea`, `Checkbox` (dark enquiry form), `SearchField` (centre search); visually hidden labels, placeholder = Figma label.
  - `Accordion.tsx` (client): FAQ item, open 173 px / closed 71 px at 618 px (as Figma), Figma easing; panel stays mounted and `inert` when closed.
- `src/components/layout/`: `Logo`, `SiteHeader` (nav pill from `xl`), `SiteMenu` (client, `<dialog>` below `xl`), `SiteFooter` (positions match Figma to the pixel; height 627 vs 625).
- `src/components/motion/` (client unless noted)
  - `FigmaFrame` (server): a Figma master as a fluid box; `placeNode` places children in % of the frame, `rotateFromCorner` reproduces Figma's corner-pivot rotation.
  - `Sparkle`, `OfferFloat`, `TyreStack` (springs in px: motion snapped large % springs to their end value), `LocationPin`, `Reveal`, `Marquee` (pauses on hover / focus), `MotionProvider`.
- `src/components/icons/`: generated icons + `MenuIcon` (Figma export from the Ness Glass header, same file) and `CloseIcon` (drawn to match it, see D13).

**Verification limits.** The in-app browser pane was hidden during the checks, which pauses `requestAnimationFrame`, IntersectionObserver and the dialog `close` event. Linear loops (float, sparkle, pin pulse, marquee at 143 px/s vs Figma 142) were confirmed running; the tyre step sequence was confirmed with the in-view gate bypassed. Spring feel, in-view starts and exit animations still need a look in a visible browser.

---

## Motion inventory (Phase 0 → `src/lib/motion.ts`)

No sticky/fixed/scroll behaviours and no page transitions in the file (single route, so no `template.tsx` transition is added).

| Component | Trigger | Change | Timing |
|---|---|---|---|
| Offer image float `1:1131` | auto, ping-pong | image (−15.4, −23.9), −7.8° | 5000 ms linear |
| Sparkle `1:1136` (×7) | auto loop | path + rotation 0 → 73.1 → 137°, instant reset | 2000 ms linear / step |
| Tyre stack `1:1143` | auto loop | 4 tyres drop in sequence, hold 5 s, reset | spring m1 k265.5 c15 |
| Map pin pulse `1:1169` | auto loop | ring 2 then ring 1 opacity 0 → 10 % | 500 ms linear |
| Map pin `1:1209` | hover | "Parise" tooltip | 300 ms |
| Map tooltip `1:1253` | click | map ×3.572 zoom on pin | 300 ms |
| Collage `1:1289` | Figma mouse enter → **in view once** (D6) | 4 photos rise, fan, settle; features then CTA fade in | 1000 ms/step, `cubic-bezier(.993,-.017,0,1.014)` / `(.99,-.02,0,1.01)` |
| Steps `1:1927`/`1:1626` | Figma mouse enter → **in view once** (D6) | step 1, connector, 2, 3, CTA fade in | 1000 ms linear |
| Pourquoi `1:1938` | Figma mouse enter → **in view once** (D6) | 5 icons slide −110 px | 1000 ms `cubic-bezier(1,-.007,0,.997)` |
| Reviews `1:2047` | auto | slide one card, 3 positions, loop | hold 2 s, 1000 ms `cubic-bezier(0,0,0,1.01)` |
| Partners `1:1054` | auto | marquee, one 1417 px set per 10 s | linear |
| FAQ `1:2096` | click | height 71 ↔ 129, chevron 90° ↔ −90° | 500 ms `cubic-bezier(.976,-.002,0,.995)` |

All motion runs under `<MotionConfig reducedMotion="user">`; looping and auto-advancing motion must also stop completely with reduced motion and pause on hover/focus (reviews).

---

## Decisions (Phase 0 questions, approved defaults 2026-10-27)

- **D1 · Videos.** The hero (1280×720) and "Nous venons à vous" (720×1280) video fills can't be downloaded. Use the poster frames until the user sends the MP4s.
- **D2 · HOOKRIDE.** Font files and licence pending; Bebas Neue stands in (Anton in the first Phase 1 commit). The form heading's GC EPICPRO Demo (leftover from Oxxoglass, the demo face also lacks "é") is set in the display font.
- **D3 · Scope.** Landing page `/` only. The Figma page "NPB " (`192:15503`: landing, about, faq, service, blogs, contact) is not built and isn't in the local .fig.
- **D4 · Orange `#fa5b2e`.** Kept as in Figma (`signal` token).
- **D5 · Hover / focus.** Not designed; approved default above.
- **D6 · Reveal triggers.** Figma's mouse-enter stand-ins play once on scroll into view.
- **D7 · Services carousel.** "01/06" but only 2 slides designed and no motion: the 2 slides with a slide transition in the house easing; counter "/02" (D14).
- **D8 · Copy.** Kept exactly as in Figma, including English strings, "Parise", "renvoi" and "Voir tous les articles" under the regions block.
- **D9 · Mobile.** No mobile frames; responsive behaviour follows the Ness Glass build and is flagged per section.
- **D10 · Map and search.** Static data, no backend; the search filters a mock list of centres.
- **D11 · Link targets.** Figma has none; nav and footer links point to the matching landing sections (`src/data/site.ts`). Social URLs are `#` until supplied.
- **D12 · FAQ wrapping.** Figma's closed questions are auto-width (never wrap; the last one is truncated with an ellipsis). Here questions wrap, so no text is cut off; heights match Figma whenever the question fits on one line.
- **D13 · Mobile menu.** Not designed. Below `xl` the nav pill becomes a hamburger (glass treatment of the "button 2" master) opening a modal `<dialog>`. `MenuIcon` comes from the same Figma file (Ness Glass header); `CloseIcon` is drawn to match it.
- **D14 · Services counter.** User decision 2026-10-27: show "/02" (2 designed slides).
- **Open · FAQ answers.** Only the first FAQ item has an answer in Figma; the three closed items have questions only. Needed before Phase 3 builds the FAQ.
