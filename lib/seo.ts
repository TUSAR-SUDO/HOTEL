import type { Property } from "./types";
import { getMedia } from "./content";

/**
 * LodgingBusiness JSON-LD per property.
 * aggregateRating is deliberately omitted until real Google reviews exist.
 */
export function propertyJsonLd(p: Property) {
  const hero = getMedia(p.heroImageId);
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: p.name,
    description: p.oneLiner,
    address: {
      "@type": "PostalAddress",
      streetAddress: p.address,
      addressLocality: p.city,
      addressRegion: "Odisha",
      addressCountry: "IN",
    },
    telephone: `+${p.phonePrimary}`,
    email: p.email,
    ...(p.geo.lat !== null && p.geo.lng !== null
      ? { geo: { "@type": "GeoCoordinates", latitude: p.geo.lat, longitude: p.geo.lng } }
      : {}),
    ...(hero ? { image: hero.src } : {}),
    priceRange: "TODO_CLIENT_CONFIRM",
  };
}
