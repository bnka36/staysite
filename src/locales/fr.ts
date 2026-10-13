/**
 * French (default) dictionary — source of truth for the `Dictionary` shape.
 * `en.ts` and `ar.ts` must implement the exact same shape (enforced via
 * `satisfies Dictionary` / the derived `Dictionary` type below).
 */

const fr = {
  meta: {
    languageName: "Français",
  },
  nav: {
    home: "Accueil",
    menu: "La carte",
    gallery: "Galerie",
    restaurant: "Le restaurant",
    reservation: "Réservation",
    contact: "Contact",
    reserveCta: "Réserver une table",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Langue",
  },
  common: {
    demoBadge: "Contenu de démonstration",
    toConfirm: "À confirmer",
    phoneToConfirm: "Numéro à confirmer",
    whatsappToConfirm: "WhatsApp à confirmer",
    hoursToConfirm: "Horaires à confirmer",
    currency: "MAD",
    skipToContent: "Aller au contenu",
  },
  hero: {
    kicker: "El Jadida, Maroc",
    titleLine1: "La mer,",
    titleLine2: "simplement servie.",
    subtitle:
      "Restaurant de poissons et fruits de mer à El Jadida — cuisine marocaine et méditerranéenne, avenue Annasr.",
    ctaReserve: "Réserver une table",
    ctaMenu: "Découvrir la carte",
    scrollHint: "Défiler",
  },
  presentation: {
    kicker: "Dar El Hout",
    title: "Un restaurant de poissons et fruits de mer à El Jadida",
    body:
      "Dar El Hout propose une cuisine centrée sur le poisson et les fruits de mer, entre influences marocaines et méditerranéennes, avenue Annasr à El Jadida. Poisson grillé, fruits de mer et quelques classiques revisités composent une carte simple, pensée pour mettre le produit en avant.",
    cuisineTagsLabel: "Cuisine",
  },
  specialties: {
    kicker: "Nos incontournables",
    title: "Les spécialités de la maison",
    subtitle: "Un aperçu de ce que l'on aime cuisiner — la carte complète détaille le reste.",
    ctaMenu: "Voir toute la carte",
    items: [
      {
        name: "Poisson grillé du jour",
        description: "Poisson entier grillé, assaisonné simplement pour laisser parler le produit.",
      },
      {
        name: "Dorade de ligne",
        description: "Dorade grillée, servie avec ses légumes de saison.",
      },
      {
        name: "Crevettes grillées",
        description: "Crevettes marinées et grillées, citron et herbes fraîches.",
      },
      {
        name: "Calamars frits",
        description: "Calamars frits croustillants, sauce maison et citron.",
      },
      {
        name: "Paella de fruits de mer",
        description: "Riz safrané généreusement garni de fruits de mer.",
      },
      {
        name: "Plateau de fruits de mer",
        description: "Sélection de fruits de mer à partager, servie fraîche.",
      },
    ],
  },
  menuPreview: {
    kicker: "La carte",
    title: "Un aperçu de notre carte",
    subtitle: "Entrées, poissons, fruits de mer, spécialités et desserts — la carte complète est disponible sur place.",
    viewFullMenu: "Voir la carte complète",
    demoNote:
      "Les plats et prix affichés sur ce site sont des exemples de démonstration et seront remplacés par la carte réelle du restaurant.",
  },
  gallery: {
    kicker: "Galerie",
    title: "Ambiance & inspiration",
    subtitle:
      "Ces photos illustrent le style de cuisine proposé — en attendant les vraies photos du restaurant, à venir prochainement.",
    viewAll: "Voir toute la galerie",
    close: "Fermer",
    previous: "Photo précédente",
    next: "Photo suivante",
  },
  reservation: {
    kicker: "Réservation",
    title: "Réserver une table",
    subtitle: "Remplissez ce formulaire, nous reviendrons vers vous pour confirmer votre réservation.",
    fields: {
      date: "Date",
      time: "Heure",
      partySize: "Nombre de personnes",
      name: "Nom complet",
      phone: "Téléphone",
      email: "E-mail (optionnel)",
      message: "Message (optionnel)",
    },
    placeholders: {
      name: "Votre nom",
      phone: "Votre numéro de téléphone",
      email: "vous@exemple.com",
      message: "Une demande particulière ?",
    },
    errors: {
      required: "Ce champ est requis.",
      invalidPhone: "Numéro de téléphone invalide.",
      invalidEmail: "Adresse e-mail invalide.",
      invalidPartySize: "Merci d'indiquer au moins 1 personne.",
      pastDate: "Merci de choisir une date à venir.",
    },
    submit: "Envoyer la demande",
    submitting: "Envoi en cours…",
    demoNoticeTitle: "Ceci est une démonstration",
    demoNotice:
      "Ceci est une démo. Pour réserver réellement, merci d'appeler ou d'envoyer un WhatsApp — intégration en attente de configuration. Votre demande n'a pas été transmise au restaurant.",
    successTitle: "Demande enregistrée (démo)",
  },
  location: {
    kicker: "Nous trouver",
    title: "Adresse & contact",
    addressTitle: "Adresse",
    hoursTitle: "Horaires",
    directions: "Itinéraire",
    call: "Appeler",
    whatsapp: "WhatsApp",
    mapUnavailable: "Carte précise à venir — l'emplacement exact est en cours de confirmation.",
  },
  mobileBar: {
    call: "Appeler",
    directions: "Itinéraire",
    reserve: "Réserver",
  },
  whatsappButton: {
    ariaLabel: "Contacter sur WhatsApp",
    disabledTooltip: "WhatsApp à confirmer",
  },
  footer: {
    aboutTitle: "Dar El Hout",
    aboutBody: "Restaurant de poissons et fruits de mer à El Jadida, cuisine marocaine et méditerranéenne.",
    quickLinksTitle: "Liens rapides",
    contactTitle: "Contact",
    legalTitle: "Informations légales",
    mentionsLegales: "Mentions légales",
    confidentialite: "Politique de confidentialité",
    rights: "Tous droits réservés.",
    demoSiteNote: "Site de démonstration — certaines informations restent à confirmer avant mise en ligne définitive.",
  },
  menuCategories: {
    entrees: "Entrées",
    salades: "Salades",
    poissonsGrilles: "Poissons grillés",
    poissonsFrits: "Poissons frits",
    fruitsDeMer: "Fruits de mer",
    specialites: "Spécialités",
    accompagnements: "Accompagnements",
    desserts: "Desserts",
    boissons: "Boissons",
  },
  pages: {
    home: {
      title: "Dar El Hout — Restaurant de poissons & fruits de mer à El Jadida",
      description:
        "Dar El Hout, restaurant de poissons et fruits de mer à El Jadida. Cuisine marocaine et méditerranéenne, avenue Annasr.",
    },
    carte: {
      title: "La carte",
      subtitle: "Entrées, poissons grillés et frits, fruits de mer, accompagnements et desserts.",
      metaTitle: "La carte — Dar El Hout El Jadida",
    },
    galerie: {
      title: "Galerie",
      subtitle: "Un aperçu visuel de l'ambiance et des plats proposés.",
      metaTitle: "Galerie — Dar El Hout El Jadida",
    },
    restaurant: {
      title: "Le restaurant",
      metaTitle: "Le restaurant — Dar El Hout El Jadida",
      body1:
        "Dar El Hout est un restaurant de poissons et fruits de mer situé avenue Annasr, à El Jadida. La cuisine proposée mêle recettes marocaines et influences méditerranéennes, autour du poisson et des fruits de mer.",
      body2:
        "La carte met en avant des produits de la mer préparés simplement : grillades, fritures et quelques spécialités comme la paella de fruits de mer.",
      valuesTitle: "L'esprit de la maison",
      values: [
        { title: "Produits de la mer", detail: "Poissons et fruits de mer au centre de la carte." },
        { title: "Cuisine marocaine & méditerranéenne", detail: "Des recettes qui mêlent les deux traditions culinaires." },
        { title: "Simplicité", detail: "Des préparations qui laissent la place au produit." },
      ],
    },
    reservation: {
      title: "Réservation",
      metaTitle: "Réservation — Dar El Hout El Jadida",
    },
    contact: {
      title: "Contact",
      metaTitle: "Contact — Dar El Hout El Jadida",
      subtitle: "Pour toute question, retrouvez nos coordonnées ci-dessous.",
    },
    mentionsLegales: {
      title: "Mentions légales",
      metaTitle: "Mentions légales — Dar El Hout",
      intro:
        "Les informations ci-dessous sont fournies à titre indicatif dans le cadre de ce site de démonstration et seront complétées avec les informations officielles du restaurant avant mise en ligne définitive.",
      sections: [
        {
          heading: "Éditeur du site",
          body: "Dar El Hout — avenue Annasr, El Jadida, Maroc. Les informations d'immatriculation complètes seront ajoutées ici par l'exploitant.",
        },
        {
          heading: "Hébergement",
          body: "Ce site de démonstration est hébergé via GitHub Pages.",
        },
        {
          heading: "Propriété intellectuelle",
          body: "Les photographies utilisées à titre d'illustration appartiennent à leurs auteurs respectifs (licence Unsplash) et seront remplacées par les photographies officielles du restaurant.",
        },
      ],
    },
    confidentialite: {
      title: "Politique de confidentialité",
      metaTitle: "Confidentialité — Dar El Hout",
      intro: "Cette page décrit, de façon générale, comment les informations transmises via ce site sont traitées.",
      sections: [
        {
          heading: "Formulaire de réservation",
          body:
            "Le formulaire de réservation de ce site est actuellement une démonstration : aucune donnée n'est transmise au restaurant ni stockée sur un serveur distant.",
        },
        {
          heading: "Cookies",
          body: "Ce site n'utilise pas de cookies de suivi publicitaire.",
        },
      ],
    },
  },
};

export default fr;
export type Dictionary = typeof fr;
