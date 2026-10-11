import type { LucideIcon } from "lucide-react";
import {
  ClipboardCheck,
  Gauge,
  CircleDot,
  Circle,
  Wind,
  ScanLine,
  Wrench,
  Battery,
} from "lucide-react";

/**
 * ⚠️ À PERSONNALISER — remplace les valeurs ci-dessous par les vraies
 * informations de YHT Auto Sète (adresse, téléphone, horaires, prix réels).
 * Tout le site lit ces données depuis ce fichier unique.
 */
export const business = {
  name: "YHT Auto",
  city: "Sète",
  tagline: "Garage Indépendant · Hérault",
  phoneDisplay: "04 67 00 00 00",
  phoneHref: "tel:+33467000000",
  email: "contact@yhtauto-sete.fr",
  address: {
    street: "12 Avenue de la République",
    postalCode: "34200",
    city: "Sète",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=YHT+Auto+Sete",
  hours: [
    { day: "Lundi", time: "8h00 – 12h00 / 14h00 – 18h00" },
    { day: "Mardi", time: "8h00 – 12h00 / 14h00 – 18h00" },
    { day: "Mercredi", time: "8h00 – 12h00 / 14h00 – 18h00" },
    { day: "Jeudi", time: "8h00 – 12h00 / 14h00 – 18h00" },
    { day: "Vendredi", time: "8h00 – 12h00 / 14h00 – 18h00" },
    { day: "Samedi", time: "8h00 – 12h00" },
    { day: "Dimanche", time: "Fermé" },
  ],
};

export type Service = {
  name: string;
  icon: LucideIcon;
  description: string;
  price: string;
};

export const services: Service[] = [
  {
    name: "Entretien & Révision",
    icon: ClipboardCheck,
    description:
      "Vidange, filtres, courroies, niveaux. Entretien constructeur sans perte de garantie, carnet d'entretien tamponné.",
    price: "Dès 79 €",
  },
  {
    name: "Moteur & Mécanique",
    icon: Gauge,
    description:
      "Diagnostic et réparation moteur. De la panne capteur à la révision complète — on cherche la vraie cause, pas juste le symptôme.",
    price: "Devis gratuit",
  },
  {
    name: "Freinage",
    icon: CircleDot,
    description:
      "Plaquettes, disques, purge de frein, réglage du frein à main. Toutes nos interventions freinage sont garanties 1 an.",
    price: "Dès 69 € / essieu",
  },
  {
    name: "Pneumatiques",
    icon: Circle,
    description:
      "Montage et équilibrage toutes marques et dimensions. Budget, milieu de gamme ou premium — équilibrage offert à chaque pose.",
    price: "Dès 45 € posé",
  },
  {
    name: "Climatisation",
    icon: Wind,
    description:
      "Recharge complète du circuit de climatisation, contrôle d'étanchéité et test de performance avant restitution du véhicule.",
    price: "Dès 49 €",
  },
  {
    name: "Diagnostic Électronique",
    icon: ScanLine,
    description:
      "Lecture valise OBD moteur, ABS, airbag, boîte de vitesses. On lit les codes et on vous explique ce qu'ils signifient vraiment.",
    price: "Dès 35 €",
  },
  {
    name: "Embrayage & Transmission",
    icon: Wrench,
    description:
      "Remplacement d'embrayage, kit complet, cardans et transmission. Pièces d'origine ou équivalentes garanties.",
    price: "Devis gratuit",
  },
  {
    name: "Batterie & Électricité",
    icon: Battery,
    description:
      "Contrôle et remplacement de batterie, démarreur, alternateur. Diagnostic électrique complet du véhicule.",
    price: "Dès 39 €",
  },
];

export const trustPoints = [
  {
    title: "Devis clair avant travaux",
    detail:
      "On vous communique le prix avant de toucher au véhicule. Si un besoin supplémentaire apparaît, on vous appelle avant de continuer. Toujours.",
  },
  {
    title: "Garantie 12 mois pièces",
    detail:
      "Toute pièce posée chez nous est garantie 12 mois ou 15 000 km, selon la première limite atteinte.",
  },
  {
    title: "Service rapide",
    detail:
      "La plupart des réparations sont faites dans la journée. Dépôt le matin, récupération l'après-midi.",
  },
  {
    title: "Garage de confiance à Sète",
    detail:
      "Mécaniciens expérimentés, toutes marques. On vous explique chaque réparation en toute transparence.",
  },
];

export const pricingRows = [
  { service: "Révision / Entretien courant", price: "Dès 79 €", time: "1 – 2 h" },
  { service: "Vidange + filtre à huile", price: "Dès 59 €", time: "30 – 45 min" },
  { service: "Plaquettes de frein (par essieu)", price: "Dès 69 €", time: "1 h" },
  { service: "Disques + plaquettes (essieu)", price: "Dès 139 €", time: "1,5 h" },
  { service: "Recharge climatisation", price: "Dès 49 €", time: "30 – 45 min" },
  { service: "Diagnostic électronique", price: "Dès 35 €", time: "30 min" },
  { service: "Pneu monté + équilibré (unité)", price: "Dès 45 €", time: "20 min" },
  { service: "Changement de batterie", price: "Dès 39 €", time: "20 min" },
];

export const marqueeItems = [
  "Garage Indépendant",
  "Mécaniciens Expérimentés",
  "Toutes Marques",
  "Devis Gratuit",
  "Garantie 12 Mois Pièces",
  "Service Rapide",
  "Sète, Hérault",
];
