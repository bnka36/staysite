# Photos — Dar El Hout

This site is built so the restaurant's **own, authorized** photos can be
dropped in later with **zero code changes**. Nothing in this repo was
downloaded from restaurantguru.com or any other third-party aggregator
— reuse rights for those images are unclear, so they were intentionally
not used anywhere on the site (not even as a "real photo", not even as
a disclosed stock fallback).

## How it works

Every slot that must show **food** (specialty cards, menu, the
"illustration" half of the gallery) tries a real photo path first
(`public/images/restaurant/...`, not included in this repo) and, if
missing, falls back to a **licensed Unsplash stock photo** of a dish —
always captioned "photo d'illustration" so it's never presented as an
authentic photo of the restaurant.

Slots that must show a **specific place** — the hero, the facade, the
dining room — are different: they never fall back to a generic stock
photo of *some* restaurant or *some* view, because that would
misrepresent a random place as if it were Dar El Hout. Instead:
- The **hero** falls back to a licensed stock photo of a seafood dish
  only (no building, no skyline, nothing identifiable as a place), with
  a small "Photo d'illustration" badge in the corner.
- The **facade and dining-room** slots (Presentation section, Restaurant
  page) fall back to an honest "photo coming soon" placeholder card
  (brand colors + a muted icon) instead of any photo at all.
- The **gallery** is split into two clearly labelled sections: "Photos
  authentiques de Dar El Hout" (only ever shows a tile once a real file
  actually loads successfully — shows a plain text note if none exist
  yet) and "Nos plats — photos d'illustration" (dish stock photos,
  always tagged "Illustration").

An earlier version of this site used two additional stock photos
(`ambiance-bay.webp`, `ambiance-candles.webp`) as fallbacks for the
facade/dining-room slots. `ambiance-bay.webp` was removed after review
because it visibly shows the Golden Gate Bridge through a restaurant
window — a San Francisco view, not El Jadida — which is exactly the
kind of misleading "fake place" photo this project must avoid.
`ambiance-candles.webp` was removed for the same reason even though it
has no identifiable landmark: a generic candle-lit table could still be
mistaken for Dar El Hout's own dining room. Both files were deleted
from `public/images/stock/`.

To go live with real photos, just export/save them with these **exact
filenames** into `public/images/restaurant/` — the matching component
picks them up automatically:

| File | Used for | Recommended ratio |
|---|---|---|
| `hero.jpg` | Home hero background | wide, ~16:9 or wider (e.g. 2400×1350) |
| `facade-1.jpg` | Restaurant page — exterior | 4:3 or 3:2 |
| `facade-2.jpg` | Restaurant page — exterior (second shot) | 4:3 or 3:2 |
| `salle-1.jpg` | Home — presentation / dining room | 4:3 or 3:2 |
| `salle-2.jpg` | Restaurant page — dining room | 4:3 or 3:2 |
| `plat-1.jpg` … `plat-6.jpg` | Specialties cards (home) & menu preview | 4:3, square-ish works too |
| `galerie-1.jpg` … `galerie-8.jpg` | Gallery grid (home preview + full /galerie page) | 4:3 (grid assumes this) |

Expected counts: **1 hero**, **2 facade**, **2 salle/ambiance**, **6
plats**, **4–8 galerie** (not all 8 need to be filled — missing ones
simply keep showing their stock fallback).

Tips:
- JPEG or WebP both work; keep each file under ~500 KB for fast loading
  (resize to ~1600–2400px on the long edge, no need for more).
- Use real, specific alt text once you replace a photo — the
  components pass a generic (but accurate) `alt` for the real-photo
  path, separate from the stock fallback's "photo d'illustration" alt.

## Current stock fallbacks (temporary, licensed)

All files in `public/images/stock/` are real photographs from Unsplash,
used under the Unsplash License, purely as temporary filler for **food**
slots until real restaurant photos are supplied. None of them depict a
building, a room, or any place — only plated dishes, so none of them
could be mistaken for a photo of Dar El Hout itself.
