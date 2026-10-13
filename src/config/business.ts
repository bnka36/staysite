/**
 * Business configuration — Dar El Hout (Dar Lhout)
 * ──────────────────────────────────────────────────────────────────────
 * This file centralizes every fact about the restaurant used across the
 * site. It is split in two parts on purpose:
 *
 *   1. `business`   — facts that are VERIFIED (sourced from a public
 *      restaurant listing — restaurantguru.com/Dar-Lhout-El-Jadida).
 *   2. `unverified` — facts that are NOT confirmed. They are explicitly
 *      typed as `null` here. DO NOT invent values for them. Every
 *      component that depends on one of these must check the matching
 *      `has*` flag below and degrade gracefully (hide the element,
 *      disable the button with a "à confirmer" tooltip, etc.) instead
 *      of rendering a fabricated phone number, link or schedule.
 *
 * Before the site goes live, the restaurant owner (or whoever manages
 * this repo) should fill in the `unverified` block with real data and
 * review the `business` block too.
 */

export type DayHours = {
  day: string;
  time: string;
};

export const business = {
  /** Commercial name used throughout the site. */
  name: "Dar El Hout",
  /** Alternate spelling found on public listings — kept for search/SEO context only. */
  alternateName: "Dar Lhout",
  city: "El Jadida",
  region: "El Jadida, Maroc",
  country: "Maroc",

  /**
   * VERIFIED — avenue Annasr, El Jadida (restaurantguru.com listing).
   * No house number / postal code was published, so none is invented here.
   */
  address: {
    street: "Avenue Annasr",
    city: "El Jadida",
    country: "Maroc",
  },

  /** VERIFIED — general cuisine/dish focus mentioned on the public listing. */
  cuisineTypes: [
    "Fruits de mer",
    "Poissons grillés",
    "Cuisine marocaine",
    "Cuisine méditerranéenne",
  ],

  /**
   * A Google Maps *text search* link built straight from the verified
   * address string above (no fabricated coordinates). Maps resolves the
   * query itself, so this degrades gracefully even if there are several
   * same-named results — it never claims a precise pin.
   */
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Dar Lhout, Avenue Annasr, El Jadida, Maroc"),

  /**
   * Public demo URL for this site (GitHub Pages). Replace with the
   * restaurant's own domain once one exists — used only for canonical /
   * JSON-LD "url", never presented as an official restaurant fact.
   */
  siteUrl: "https://bnka36.github.io/staysite/",
} as const;

/**
 * UNVERIFIED — every field below is `null` on purpose. None of this was
 * confirmed from an official source (owner, official social account, or
 * a verified phone/business listing). Components must treat `null` as
 * "not configured yet", never substitute a placeholder-looking-real value.
 */
export const unverified = {
  /** Provided directly by the restaurant/owner contact — not re-verified against an official public source. */
  phone: "+212 6 61 69 35 28" as string | null,
  /** tel: href, e.g. "tel:+212523000000". */
  phoneHref: "tel:+212661693528" as string | null,
  /** WhatsApp number in international format without "+", e.g. "212600000000". */
  whatsapp: "212661693528" as string | null,
  /** Weekly opening hours — only set once confirmed with the restaurant. */
  hours: null as DayHours[] | null,
  socials: {
    instagram: null as string | null,
    facebook: null as string | null,
  },
  /**
   * An embeddable Google Maps iframe URL with a precise pin. The
   * restaurantguru listing only gives an approximate Plus Code
   * ("7F29+FXR El Jadida"), which is not precise enough to embed as a
   * reliable pin, so this stays null until the exact location is confirmed.
   */
  mapsEmbedUrl: null as string | null,
};

export const hasPhone = Boolean(unverified.phone && unverified.phoneHref);
export const hasWhatsapp = Boolean(unverified.whatsapp);
export const hasHours = Boolean(unverified.hours && unverified.hours.length > 0);
export const hasInstagram = Boolean(unverified.socials.instagram);
export const hasFacebook = Boolean(unverified.socials.facebook);
export const hasAnySocial = hasInstagram || hasFacebook;
export const hasMapsEmbed = Boolean(unverified.mapsEmbedUrl);

export function whatsappHref(message?: string): string | null {
  if (!unverified.whatsapp) return null;
  const base = `https://wa.me/${unverified.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
