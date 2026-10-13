# Photos — Dar El Hout

This site is built so the restaurant's **own, authorized** photos can be
dropped in later with **zero code changes**. Nothing in this repo was
downloaded from restaurantguru.com or any other third-party aggregator
— reuse rights for those images are unclear, so they were intentionally
not used anywhere on the site (not even as a "real photo", not even as
a disclosed stock fallback).

## How it works

Every image slot tries a **real photo path** first
(`public/images/restaurant/...`, not included in this repo) and, if
that file is missing, transparently falls back to a **licensed
Unsplash stock photo** already included in `public/images/stock/`
(always captioned "photo d'illustration" / "for illustration" so it's
never presented as an authentic photo of the restaurant). The Hero
background falls back to a neutral brand gradient + logo instead of a
stock photo, so the hero can never be mistaken for a real photo of the
place.

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
used under the Unsplash License, purely as temporary filler until real
restaurant photos are supplied. None of them depict Dar El Hout.
