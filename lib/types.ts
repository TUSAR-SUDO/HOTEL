export type PropertyKey = "puri" | "bhubaneswar";
export type ThemeName = "coastal" | "practical" | "brand";

export interface DistanceChip {
  label: string;
  value: string;
}

export interface Nearby {
  name: string;
  line: string;
  imageId: string;
}

export interface Amenity {
  id: string;
  label: string;
}

export interface FestivalBanner {
  enabled: boolean;
  title: string;
  text: string;
  cta: string;
}

export interface Property {
  key: PropertyKey;
  name: string;
  shortName: string;
  brandSuffix: string;
  city: string;
  tagline: string;
  oneLiner: string;
  address: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsapp: string;
  email: string;
  geo: { lat: number | null; lng: number | null };
  mapsQuery: string;
  heroImageId: string;
  theme: ThemeName;
  priceNote: string | null;
  festivalBanner: FestivalBanner;
  distanceChips: DistanceChip[];
  nearby: Nearby[];
  localTips: { title: string; bullets: string[] };
  amenities: Amenity[];
  amenitiesNote?: string;
}

export interface Room {
  property: PropertyKey;
  id: string;
  name: string;
  size: string;
  bed: string;
  ac: boolean;
  maxGuests: number;
  priceFrom: number | null;
  priceNote?: string;
  facts: string[];
  amenityIds: string[];
  description: string;
  imageId: string;
}

export interface MediaItem {
  id: string;
  property: string; // includes "brand"
  category: string;
  type: "image" | "video";
  gallery?: boolean;
  src: string;
  poster?: string;
  alt: string;
  w: number;
  h: number;
}

export interface Review {
  nameInitial: string;
  city: string;
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
  property?: PropertyKey;
}

export interface FAQItem { q: string; a: string }
export interface PolicyItem { id: string; label: string; text: string }

export interface ExploreCity {
  title: string;
  top5: { name: string; line: string; imageId: string }[];
  route1day: string[];
  route2day: string[];
  bestSeason: string;
  food: string[];
  gettingAround: string[];
}
export interface ExploreContent {
  puri: ExploreCity;
  bhubaneswar: ExploreCity;
}

export interface OffersContent {
  hero: {
    directBooking: {
      enabled: boolean;
      title: string;
      benefit: string;
    };
  };
  seasonalNotices: { enabled: boolean; title: string; text: string; cta: string }[];
}
