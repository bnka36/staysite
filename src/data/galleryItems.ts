import { restaurantPhotos, stockPhotos } from "../config/photos";

export type GalleryItem = {
  primary: string;
  fallback: string;
  alt: string;
};

/**
 * Shared gallery data used on the Home preview and the full Galerie page.
 * `primary` points at the real-photo slot (public/images/restaurant/galerie-N.jpg,
 * not shipped — see PHOTOS.md); `fallback` is a licensed Unsplash stock
 * photo shown until the owner drops in a real file at that path.
 */
export const galleryItems: GalleryItem[] = [
  { primary: restaurantPhotos.galerie[0], fallback: stockPhotos.grilledFish, alt: "Poisson grillé" },
  { primary: restaurantPhotos.galerie[1], fallback: stockPhotos.shrimp, alt: "Crevettes" },
  { primary: restaurantPhotos.galerie[2], fallback: stockPhotos.calamari, alt: "Calamars" },
  { primary: restaurantPhotos.galerie[3], fallback: stockPhotos.paella, alt: "Paella de fruits de mer" },
  { primary: restaurantPhotos.galerie[4], fallback: stockPhotos.oysters, alt: "Plateau de fruits de mer" },
  { primary: restaurantPhotos.galerie[5], fallback: stockPhotos.salad, alt: "Salade marocaine" },
  { primary: restaurantPhotos.galerie[6], fallback: stockPhotos.ambianceCandles, alt: "Ambiance de la salle" },
  { primary: restaurantPhotos.galerie[7], fallback: stockPhotos.ambianceBay, alt: "Ambiance au bord de mer" },
];
