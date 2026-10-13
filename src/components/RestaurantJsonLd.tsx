import { useEffect } from "react";
import { business } from "../config/business";

/**
 * Injects Restaurant JSON-LD structured data using ONLY verified fields
 * (name, address, cuisine, url). `telephone`, `openingHours`,
 * `priceRange` and `aggregateRating` are intentionally omitted — they
 * are not confirmed, and a schema property should never carry a
 * placeholder value presented as fact.
 */
export default function RestaurantJsonLd() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "restaurant-jsonld";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: business.name,
      alternateName: business.alternateName,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressCountry: "MA",
      },
      servesCuisine: business.cuisineTypes,
      url: business.siteUrl,
    });

    document.head.appendChild(script);
    return () => {
      document.getElementById("restaurant-jsonld")?.remove();
    };
  }, []);

  return null;
}
