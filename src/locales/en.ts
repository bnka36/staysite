import type { Dictionary } from "./fr";

const en: Dictionary = {
  meta: {
    languageName: "English",
  },
  nav: {
    home: "Home",
    menu: "Menu",
    gallery: "Gallery",
    restaurant: "The restaurant",
    reservation: "Reservation",
    contact: "Contact",
    reserveCta: "Book a table",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },
  common: {
    demoBadge: "Demo content",
    toConfirm: "To be confirmed",
    phoneToConfirm: "Phone number to be confirmed",
    whatsappToConfirm: "WhatsApp to be confirmed",
    hoursToConfirm: "Opening hours to be confirmed",
    currency: "MAD",
    skipToContent: "Skip to content",
  },
  hero: {
    kicker: "El Jadida, Morocco",
    titleLine1: "The sea,",
    titleLine2: "simply served.",
    subtitle:
      "A seafood restaurant in El Jadida — Moroccan and Mediterranean cuisine, avenue Annasr.",
    ctaReserve: "Book a table",
    ctaMenu: "Discover the menu",
    scrollHint: "Scroll",
  },
  presentation: {
    kicker: "Dar El Hout",
    title: "A seafood restaurant in El Jadida",
    body:
      "Dar El Hout offers fish- and seafood-focused cooking, blending Moroccan and Mediterranean influences, on avenue Annasr in El Jadida. Grilled fish, seafood and a few revisited classics make up a simple menu designed to let the produce speak for itself.",
    cuisineTagsLabel: "Cuisine",
  },
  specialties: {
    kicker: "House favourites",
    title: "Our signature dishes",
    subtitle: "A glimpse of what we love to cook — the full menu covers the rest.",
    ctaMenu: "View the full menu",
    items: [
      {
        name: "Grilled catch of the day",
        description: "Whole grilled fish, simply seasoned to let the produce speak for itself.",
      },
      {
        name: "Line-caught sea bream",
        description: "Grilled sea bream, served with seasonal vegetables.",
      },
      {
        name: "Grilled shrimp",
        description: "Marinated and grilled shrimp, lemon and fresh herbs.",
      },
      {
        name: "Fried calamari",
        description: "Crispy fried calamari, house sauce and lemon.",
      },
      {
        name: "Seafood paella",
        description: "Saffron rice generously topped with seafood.",
      },
      {
        name: "Seafood platter",
        description: "A selection of seafood to share, served fresh.",
      },
    ],
  },
  menuPreview: {
    kicker: "The menu",
    title: "A glimpse of our menu",
    subtitle: "Starters, fish, seafood, specialties and desserts — the full menu is available on site.",
    viewFullMenu: "View the full menu",
    demoNote:
      "The dishes and prices shown on this site are demo examples and will be replaced with the restaurant's real menu.",
  },
  gallery: {
    kicker: "Gallery",
    title: "Mood & inspiration",
    subtitle:
      "These photos illustrate the style of cooking on offer — real restaurant photos are coming soon.",
    viewAll: "View full gallery",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
  },
  reservation: {
    kicker: "Reservation",
    title: "Book a table",
    subtitle: "Fill in this form and we'll get back to you to confirm your reservation.",
    fields: {
      date: "Date",
      time: "Time",
      partySize: "Party size",
      name: "Full name",
      phone: "Phone",
      email: "Email (optional)",
      message: "Message (optional)",
    },
    placeholders: {
      name: "Your name",
      phone: "Your phone number",
      email: "you@example.com",
      message: "Any special request?",
    },
    errors: {
      required: "This field is required.",
      invalidPhone: "Invalid phone number.",
      invalidEmail: "Invalid email address.",
      invalidPartySize: "Please enter at least 1 guest.",
      pastDate: "Please choose an upcoming date.",
    },
    submit: "Send request",
    submitting: "Sending…",
    demoNoticeTitle: "This is a demo",
    demoNotice:
      "This is a demo. To actually book, please call or send a WhatsApp message — a real integration is pending configuration. Your request was not sent to the restaurant.",
    successTitle: "Request recorded (demo)",
  },
  location: {
    kicker: "Find us",
    title: "Address & contact",
    addressTitle: "Address",
    hoursTitle: "Opening hours",
    directions: "Directions",
    call: "Call",
    whatsapp: "WhatsApp",
    mapUnavailable: "Precise map coming soon — the exact location is still being confirmed.",
  },
  mobileBar: {
    call: "Call",
    directions: "Directions",
    reserve: "Book",
  },
  whatsappButton: {
    ariaLabel: "Contact on WhatsApp",
    disabledTooltip: "WhatsApp to be confirmed",
  },
  footer: {
    aboutTitle: "Dar El Hout",
    aboutBody: "Seafood restaurant in El Jadida, Moroccan and Mediterranean cuisine.",
    quickLinksTitle: "Quick links",
    contactTitle: "Contact",
    legalTitle: "Legal information",
    mentionsLegales: "Legal notice",
    confidentialite: "Privacy policy",
    rights: "All rights reserved.",
    demoSiteNote: "Demo site — some information is still to be confirmed before going live.",
  },
  menuCategories: {
    entrees: "Starters",
    salades: "Salads",
    poissonsGrilles: "Grilled fish",
    poissonsFrits: "Fried fish",
    fruitsDeMer: "Seafood",
    specialites: "Specialties",
    accompagnements: "Side dishes",
    desserts: "Desserts",
    boissons: "Drinks",
  },
  pages: {
    home: {
      title: "Dar El Hout — Seafood restaurant in El Jadida",
      description: "Dar El Hout, a seafood restaurant in El Jadida. Moroccan and Mediterranean cuisine, avenue Annasr.",
    },
    carte: {
      title: "The menu",
      subtitle: "Starters, grilled and fried fish, seafood, side dishes and desserts.",
      metaTitle: "Menu — Dar El Hout El Jadida",
    },
    galerie: {
      title: "Gallery",
      subtitle: "A visual glimpse of the mood and dishes on offer.",
      metaTitle: "Gallery — Dar El Hout El Jadida",
    },
    restaurant: {
      title: "The restaurant",
      metaTitle: "The restaurant — Dar El Hout El Jadida",
      body1:
        "Dar El Hout is a seafood restaurant located on avenue Annasr, in El Jadida. The cooking blends Moroccan recipes with Mediterranean influences, built around fish and seafood.",
      body2:
        "The menu highlights simply prepared seafood: grilled, fried, and a few specialties such as seafood paella.",
      valuesTitle: "In the spirit of the house",
      values: [
        { title: "Seafood first", detail: "Fish and seafood at the heart of the menu." },
        { title: "Moroccan & Mediterranean cooking", detail: "Recipes blending both culinary traditions." },
        { title: "Simplicity", detail: "Preparations that let the produce speak for itself." },
      ],
    },
    reservation: {
      title: "Reservation",
      metaTitle: "Reservation — Dar El Hout El Jadida",
    },
    contact: {
      title: "Contact",
      metaTitle: "Contact — Dar El Hout El Jadida",
      subtitle: "For any question, find our contact details below.",
    },
    mentionsLegales: {
      title: "Legal notice",
      metaTitle: "Legal notice — Dar El Hout",
      intro:
        "The information below is provided for guidance as part of this demo site and will be completed with the restaurant's official information before going live.",
      sections: [
        {
          heading: "Site publisher",
          body: "Dar El Hout — avenue Annasr, El Jadida, Morocco. Full registration details will be added here by the operator.",
        },
        {
          heading: "Hosting",
          body: "This demo site is hosted via GitHub Pages.",
        },
        {
          heading: "Intellectual property",
          body: "The photographs used for illustration belong to their respective authors (Unsplash license) and will be replaced with the restaurant's official photographs.",
        },
      ],
    },
    confidentialite: {
      title: "Privacy policy",
      metaTitle: "Privacy — Dar El Hout",
      intro: "This page describes, in general terms, how information submitted via this site is handled.",
      sections: [
        {
          heading: "Reservation form",
          body:
            "This site's reservation form is currently a demo: no data is sent to the restaurant or stored on a remote server.",
        },
        {
          heading: "Cookies",
          body: "This site does not use advertising tracking cookies.",
        },
      ],
    },
  },
};

export default en;
