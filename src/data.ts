import type { LucideIcon } from "lucide-react";
import {
  Car,
  Wrench,
  Droplets,
  ScanLine,
  ClipboardCheck,
  CircleDot,
  Circle,
  Wind,
} from "lucide-react";

export const business = {
  name: "YHT Autos",
  city: "Sète",
  tagline: "Votre Expert en Mécanique Automobile",
  phoneDisplay: "06 26 26 26 58",
  phoneHref: "tel:+33626262658",
  email: "contact@yhtautos.fr",
  address: {
    street: "9 Rue d'Ingril",
    postalCode: "34200",
    city: "Sète",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=YHT+Autos+9+Rue+d%27Ingril+34200+Sete",
  hours: [
    { day: "Lundi", time: "8h00 – 20h30" },
    { day: "Mardi", time: "8h00 – 20h30" },
    { day: "Mercredi", time: "8h00 – 20h30" },
    { day: "Jeudi", time: "8h00 – 20h30" },
    { day: "Vendredi", time: "8h00 – 20h30" },
    { day: "Samedi", time: "8h00 – 20h30" },
    { day: "Dimanche", time: "9h00 – 17h00" },
  ],
};

export type Service = {
  name: string;
  icon: LucideIcon;
  description: string;
  price: string;
};

/**
 * ⚠️ Tarifs indicatifs — à remplacer par les vrais prix de YHT Autos
 * (non communiqués à ce stade). Les services ci-dessous correspondent
 * à ceux affichés sur l'enseigne du garage.
 */
export const services: Service[] = [
  {
    name: "Achat & Vente de Véhicule",
    icon: Car,
    description:
      "Achat et vente de véhicules d'occasion, préparation et service sur mesure. Performance, fiabilité et transparence garanties.",
    price: "Sur devis",
  },
  {
    name: "Mécanique de Précision",
    icon: Wrench,
    description:
      "Réparation et entretien moteur, embrayage, transmission. De la panne capteur à la révision complète, toutes marques.",
    price: "Devis gratuit",
  },
  {
    name: "Diagnostic Toutes Marques",
    icon: ScanLine,
    description:
      "Lecture valise OBD moteur, ABS, airbag, boîte de vitesses. On lit les codes et on vous explique ce qu'ils signifient vraiment.",
    price: "Dès 35 €",
  },
  {
    name: "Entretien & Révision",
    icon: ClipboardCheck,
    description:
      "Vidange, filtres, courroies, niveaux. Entretien constructeur sans perte de garantie, carnet d'entretien tamponné.",
    price: "Dès 79 €",
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
      "Montage et équilibrage toutes marques et dimensions. Équilibrage offert à chaque pose.",
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
    name: "Entretien & Lavage Automobile",
    icon: Droplets,
    description:
      "Lavage intérieur et extérieur, remise en état avant vente ou simple entretien. Véhicule rendu impeccable.",
    price: "Dès 19 €",
  },
];

export const trustPoints = [
  {
    title: "Devis clair avant travaux",
    detail:
      "On vous communique le prix avant de toucher au véhicule. Si un besoin supplémentaire apparaît, on vous appelle avant de continuer. Toujours.",
  },
  {
    title: "Mécanique de précision",
    detail:
      "Diagnostic toutes marques, réparations sérieuses. Performance, fiabilité et transparence au service de votre véhicule.",
  },
  {
    title: "Service rapide",
    detail:
      "La plupart des réparations sont faites dans la journée. Dépôt le matin, récupération l'après-midi.",
  },
  {
    title: "Garage de confiance à Sète",
    detail:
      "Achat, vente, entretien et réparation — un seul interlocuteur pour tout votre véhicule, au 9 Rue d'Ingril.",
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
  { service: "Lavage intérieur / extérieur", price: "Dès 19 €", time: "30 – 45 min" },
];

export const marqueeItems = [
  "YHT Autos",
  "Achat & Vente de Véhicules",
  "Mécanique de Précision",
  "Diagnostic Toutes Marques",
  "Entretien & Lavage",
  "Devis Gratuit",
  "Sète, Hérault",
];
