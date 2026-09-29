// Client-safe helpers over config/whatsapp.config.js.
// All links open in a new tab; every WhatsApp CTA must have a tel: fallback nearby.
import { WA, waLink, waMessageWithSource } from "../config/whatsapp.config";
import type { PropertyKey } from "./types";

export type { PropertyKey };

export function waHref(propertyKey: PropertyKey, message: string, pageSource?: string): string {
  return waLink(propertyKey, waMessageWithSource(message, pageSource));
}

export const generalEnquiry = (propertyLabel: string) => ({
  message: `Hello Shree Ram ${propertyLabel}! I'd like to know about room availability.`,
});

export const bookingEnquiry = (opts: {
  propertyLabel: string;
  checkin: string;
  checkout: string;
  adults: number;
  children: number;
  room?: string;
}) => ({
  message:
    `Hello Shree Ram ${opts.propertyLabel}!\n` +
    `I'd like to book:\n` +
    `Check-in: ${opts.checkin}\n` +
    `Check-out: ${opts.checkout}\n` +
    `Guests: ${opts.adults} adults, ${opts.children} children\n` +
    `Room: ${opts.room || "Any"}\n` +
    `Please share availability and price.`,
});

export const roomEnquiry = (roomName: string, propertyLabel: string) => ({
  message: `Hello! I'm interested in the ${roomName} at Shree Ram ${propertyLabel}. Is it available?`,
});

export const returningGuest = (propertyLabel: string) => ({
  message: `Hello! I've stayed with you before. Please share my member rate for ${propertyLabel}.`,
});

export const groupTrip = (n: number, month: string, propertyLabel: string) => ({
  message: `Hello! We're a group of ${n} planning a trip in ${month}. Please share options.`,
});

export const festivalOptIn = (propertyLabel: string) => ({
  message: `Hello! Please send me festival dates and offers for Shree Ram ${propertyLabel}.`,
});

export const referral = (friendName: string, propertyLabel: string) => ({
  message: `Hello! ${friendName} referred me to Shree Ram. I'd like to book.`,
});

export const contactFormMessage = (opts: {
  name: string;
  phone: string;
  propertyLabel: string;
  dates: string;
  note: string;
}) => ({
  message:
    `Hello Shree Ram ${opts.propertyLabel}!\n` +
    `Name: ${opts.name}\n` +
    `Phone: ${opts.phone}\n` +
    `Dates: ${opts.dates || "Flexible"}\n` +
    (opts.note ? `Message: ${opts.note}\n` : "") +
    `Please share availability and price.`,
});

export { WA };
