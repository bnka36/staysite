import { restaurantPhotos, stockPhotos } from "../config/photos";

export type GalleryItem = {
  primary: string;
  fallback: string;
  alt: string;
};

/**
 * "Authentic" slots — real photos of Dar El Hout (facade, dining room,
 * dishes as actually served). None are shipped in this repo yet (see
 * PHOTOS.md): `primary` points at the real-photo path, which 404s until
 * the owner drops a file there. The Gallery component only renders a
 * tile from this list once a real file actually loads — it never shows
 * a stock photo pretending to be an authentic one.
 */
export const authenticGalleryItems: GalleryItem[] = [
  { primary: restaurantPhotos.facade1, fallback: "", alt: "Façade de Dar El Hout" },
  { primary: restaurantPhotos.salle1, fallback: "", alt: "Salle de Dar El Hout" },
  { primary: restaurantPhotos.salle2, fallback: "", alt: "Intérieur de Dar El Hout" },
  { primary: restaurantPhotos.facade2, fallback: "", alt: "Entrée de Dar El Hout" },
  ...restaurantPhotos.galerie.map((src, i) => ({
    primary: src,
    fallback: "",
    alt: `Dar El Hout — photo ${i + 1}`,
  })),
];

/**
 * Illustration-only slots — licensed stock photos of seafood dishes.
 * These never depict Dar El Hout itself (no building, no room, no
 * identifiable place) — safe to use as generic "what this kind of food
 * looks like" illustrations, always captioned as such.
 */
export const illustrationGalleryItems: GalleryItem[] = [
  { primary: stockPhotos.grilledFish, fallback: stockPhotos.grilledFish, alt: "Poisson grillé — photo d'illustration" },
  { primary: stockPhotos.shrimp, fallback: stockPhotos.shrimp, alt: "Crevettes — photo d'illustration" },
  { primary: stockPhotos.calamari, fallback: stockPhotos.calamari, alt: "Calamars — photo d'illustration" },
  { primary: stockPhotos.paella, fallback: stockPhotos.paella, alt: "Paella de fruits de mer — photo d'illustration" },
  { primary: stockPhotos.oysters, fallback: stockPhotos.oysters, alt: "Plateau de fruits de mer — photo d'illustration" },
  { primary: stockPhotos.salad, fallback: stockPhotos.salad, alt: "Salade — photo d'illustration" },
];
