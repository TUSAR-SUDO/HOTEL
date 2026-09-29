import type { Room } from "./types";

/** Price line for a room card. Shows a TODO badge when the owner has not set a price. */
export function priceLine(room: Room): string {
  if (typeof room.priceFrom === "number" && room.priceFrom > 0) {
    return `From ₹${room.priceFrom.toLocaleString("en-IN")} / night`;
  }
  return "Price on request";
}

export function priceUnknown(room: Room): boolean {
  return !(typeof room.priceFrom === "number" && room.priceFrom > 0);
}

/** tel: href from a 91XXXXXXXXXX string. */
export function telHref(phone91: string): string {
  return `tel:+${phone91}`;
}

/** Display grouping 93375 92943 style. */
export function formatPhone(phone91: string): string {
  const rest = phone91.replace(/^91/, "");
  if (rest.length === 10) return `${rest.slice(0, 5)} ${rest.slice(5)}`;
  return phone91;
}

/** Google Maps links built from the address query (no API key needed). */
export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export function mapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
