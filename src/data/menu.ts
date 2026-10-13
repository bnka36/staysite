/**
 * ⚠️ CONTENU DE DÉMONSTRATION — src/data/menu.ts
 * ──────────────────────────────────────────────────────────────────────
 * Every dish name, description and price (MAD) below is example/demo
 * content, NOT the real Dar El Hout menu. Nothing here was confirmed by
 * the restaurant — only the general cuisine focus (seafood, grilled
 * fish, paella, ceviche, "filet américain", parfait-style desserts) is
 * loosely inspired by the public listing's description, everything else
 * (exact dish names, descriptions, prices) is invented for layout
 * purposes and MUST be replaced by the real menu before launch.
 *
 * Centralizing it here means swapping in the real menu later is a
 * single-file edit — no component changes required.
 */

export type MenuCategoryKey =
  | "entrees"
  | "salades"
  | "poissonsGrilles"
  | "poissonsFrits"
  | "fruitsDeMer"
  | "specialites"
  | "accompagnements"
  | "desserts"
  | "boissons";

export type MenuItem = {
  name: string;
  description: string;
  priceMad: number;
  category: MenuCategoryKey;
  available: boolean;
  /** Optional stock-photo key from src/config/photos.ts (stockPhotos), for the handful of items featured with a picture. */
  photoKey?: "grilledFish" | "shrimp" | "calamari" | "paella" | "oysters" | "salad";
};

export const MENU_IS_DEMO_CONTENT = true;

export const menuCategoryOrder: MenuCategoryKey[] = [
  "entrees",
  "salades",
  "poissonsGrilles",
  "poissonsFrits",
  "fruitsDeMer",
  "specialites",
  "accompagnements",
  "desserts",
  "boissons",
];

export const menu: MenuItem[] = [
  // Entrées
  { name: "Soupe de poisson", description: "Soupe de poisson maison, croûtons et rouille.", priceMad: 45, category: "entrees", available: true },
  { name: "Ceviche de dorade", description: "Dorade marinée au citron, coriandre et piment doux.", priceMad: 65, category: "entrees", available: true },
  { name: "Filet américain", description: "Préparation de filet américain, toasts grillés.", priceMad: 55, category: "entrees", available: true },
  { name: "Briouates aux crevettes", description: "Briouates croustillantes farcies aux crevettes.", priceMad: 50, category: "entrees", available: true },

  // Salades
  { name: "Salade marocaine", description: "Tomates, oignons, poivrons et coriandre fraîche.", priceMad: 35, category: "salades", available: true, photoKey: "salad" },
  { name: "Salade de poulpe", description: "Poulpe tendre, pommes de terre et vinaigrette citronnée.", priceMad: 70, category: "salades", available: true },
  { name: "Salade César aux crevettes", description: "Laitue romaine, parmesan, croûtons et crevettes grillées.", priceMad: 68, category: "salades", available: true },

  // Poissons grillés
  { name: "Poisson du jour grillé", description: "Selon arrivage, grillé simplement.", priceMad: 120, category: "poissonsGrilles", available: true, photoKey: "grilledFish" },
  { name: "Dorade grillée", description: "Dorade entière grillée, légumes de saison.", priceMad: 110, category: "poissonsGrilles", available: true },
  { name: "Saumon grillé", description: "Pavé de saumon grillé, sauce citron et aneth.", priceMad: 130, category: "poissonsGrilles", available: true },
  { name: "Sole grillée", description: "Sole grillée entière, beurre citronné.", priceMad: 140, category: "poissonsGrilles", available: true },

  // Poissons frits
  { name: "Petite friture", description: "Petits poissons frits croustillants, citron.", priceMad: 75, category: "poissonsFrits", available: true },
  { name: "Calamars frits", description: "Calamars frits croustillants, sauce maison.", priceMad: 85, category: "poissonsFrits", available: true, photoKey: "calamari" },
  { name: "Crevettes panées", description: "Crevettes panées, sauce cocktail.", priceMad: 90, category: "poissonsFrits", available: true },

  // Fruits de mer
  { name: "Crevettes grillées", description: "Crevettes marinées et grillées, citron et herbes.", priceMad: 115, category: "fruitsDeMer", available: true, photoKey: "shrimp" },
  { name: "Plateau de fruits de mer", description: "Sélection de fruits de mer à partager.", priceMad: 320, category: "fruitsDeMer", available: true, photoKey: "oysters" },
  { name: "Moules marinière", description: "Moules à la marinière, vin blanc et persil.", priceMad: 80, category: "fruitsDeMer", available: true },
  { name: "Palourdes à l'ail", description: "Palourdes sautées à l'ail et au persil.", priceMad: 95, category: "fruitsDeMer", available: true },

  // Spécialités
  { name: "Paella de fruits de mer", description: "Riz safrané généreusement garni de fruits de mer.", priceMad: 150, category: "specialites", available: true, photoKey: "paella" },
  { name: "Tagine de poisson", description: "Tagine de poisson aux légumes et épices marocaines.", priceMad: 125, category: "specialites", available: true },
  { name: "Pastilla de fruits de mer", description: "Pastilla croustillante aux fruits de mer.", priceMad: 105, category: "specialites", available: true },

  // Accompagnements
  { name: "Riz safrané", description: "Riz parfumé au safran.", priceMad: 25, category: "accompagnements", available: true },
  { name: "Légumes grillés", description: "Légumes de saison grillés.", priceMad: 30, category: "accompagnements", available: true },
  { name: "Frites maison", description: "Pommes de terre fraîches, coupées et frites maison.", priceMad: 25, category: "accompagnements", available: true },

  // Desserts
  { name: "Parfait aux fruits", description: "Parfait glacé, fruits frais de saison.", priceMad: 40, category: "desserts", available: true },
  { name: "Salade d'oranges à la cannelle", description: "Oranges fraîches, cannelle et fleur d'oranger.", priceMad: 30, category: "desserts", available: true },
  { name: "Pâtisserie marocaine", description: "Assortiment de pâtisseries marocaines du moment.", priceMad: 35, category: "desserts", available: true },

  // Boissons
  { name: "Thé à la menthe", description: "Thé vert à la menthe fraîche.", priceMad: 15, category: "boissons", available: true },
  { name: "Jus d'orange frais", description: "Orange pressée du jour.", priceMad: 25, category: "boissons", available: true },
  { name: "Eau minérale", description: "Eau plate ou gazeuse.", priceMad: 15, category: "boissons", available: true },
  { name: "Café", description: "Expresso ou café au lait.", priceMad: 15, category: "boissons", available: true },
];

export function itemsByCategory(category: MenuCategoryKey): MenuItem[] {
  return menu.filter((item) => item.category === category);
}
