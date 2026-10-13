/**
 * Photo convention — see PHOTOS.md for the full explanation.
 *
 * `public/images/restaurant/` is the drop-in spot for the restaurant's
 * OWN photos. None of those files ship in this repo (we have no
 * authorized real photos of Dar El Hout — see PHOTOS.md). Every path
 * below is wired into a component that tries to load it first and
 * falls back to a licensed Unsplash stock photo (see
 * `public/images/stock/`) if the file is missing, via <SmartImage />.
 *
 * To put real photos online: export/save them with these exact
 * filenames into public/images/restaurant/ — no code change needed.
 */

const base = `${import.meta.env.BASE_URL}images`;

export const restaurantPhotos = {
  hero: `${base}/restaurant/hero.webp`,
  facade1: `${base}/restaurant/facade-1.webp`,
  facade2: `${base}/restaurant/facade-2.jpg`,
  salle1: `${base}/restaurant/salle-1.jpg`,
  salle2: `${base}/restaurant/salle-2.jpg`,
  plats: Array.from({ length: 6 }, (_, i) => `${base}/restaurant/plat-${i + 1}.jpg`),
  galerie: Array.from({ length: 8 }, (_, i) => `${base}/restaurant/galerie-${i + 1}.jpg`),
};

/**
 * Licensed Unsplash stock photos used as temporary filler only. These
 * are real photographs under the Unsplash License, but they do NOT
 * depict Dar El Hout — every component using them as a fallback must
 * keep the alt text honest ("photo d'illustration").
 */
export const stockPhotos = {
  heroFallback: `${base}/stock/hero-grilled-fish.webp`,
  grilledFish: `${base}/stock/fish-plate.webp`,
  shrimp: `${base}/stock/shrimp.webp`,
  calamari: `${base}/stock/calamari.webp`,
  paella: `${base}/stock/paella.webp`,
  oysters: `${base}/stock/oysters.webp`,
  salad: `${base}/stock/salad.webp`,
};
