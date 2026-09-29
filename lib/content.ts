// Central content access layer. Components import from here, never from JSON directly.
import {
  propertiesData,
  roomsData,
  reviewsData,
  mediaData,
  faqData,
  policiesData,
  policiesPrivacyNote,
  exploreData,
  offersData,
  siteExtrasData,
} from "../.content/generated";
import type {
  Property, Room, MediaItem, Review, FAQItem, PolicyItem,
  ExploreContent, OffersContent, PropertyKey,
} from "./types";

export const ownerWelcome: {
  enabled: boolean;
  name: string;
  role: string;
  note: string;
  photo: string;
  photoAlt: string;
} = siteExtrasData.ownerWelcome;

export { propertiesData, roomsData, reviewsData, mediaData, faqData, policiesData, policiesPrivacyNote, exploreData, offersData };

// JSON imports widen literals to string; validate + narrow once at this boundary.
export const properties: Property[] = propertiesData as Property[];
export const rooms: Room[] = roomsData as Room[];
export const reviews: Review[] = reviewsData as Review[];
export const media: MediaItem[] = mediaData as MediaItem[];
export const faqs: FAQItem[] = faqData as FAQItem[];
export const policies: PolicyItem[] = policiesData as PolicyItem[];
export const privacyNote: string = policiesPrivacyNote;
export const explore: ExploreContent = exploreData as ExploreContent;
export const offers: OffersContent = offersData as OffersContent;

export function getProperty(key: PropertyKey): Property {
  const p = properties.find((x) => x.key === key);
  if (!p) throw new Error(`Unknown property: ${key}`);
  return p;
}

export function getMedia(id: string | undefined | null): MediaItem | undefined {
  if (!id) return undefined;
  return media.find((m) => m.id === id);
}

export function mediaFor(propertyKey: string, opts?: { gallery?: boolean; type?: string; category?: string }): MediaItem[] {
  return media.filter((m) => {
    if (m.property !== propertyKey) return false;
    if (opts?.gallery !== undefined && !!m.gallery !== opts.gallery) return false;
    if (opts?.type && m.type !== opts.type) return false;
    if (opts?.category && m.category !== opts.category) return false;
    return true;
  });
}

export function roomsFor(propertyKey: string): Room[] {
  return rooms.filter((r) => r.property === propertyKey);
}
