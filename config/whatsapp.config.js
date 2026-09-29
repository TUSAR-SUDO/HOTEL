/**
 * WhatsApp configuration — the ONLY file to edit to change numbers.
 * Format: country code + number, no "+", no spaces. Example: 919337592943
 * TODO_CLIENT_CONFIRM: verify which number on each card is WhatsApp-enabled
 * and who monitors it. The numbers below are from the business cards.
 */
export const WA = {
  puri: {
    name: "Hotel Shree Ram, Puri",
    city: "Puri", // used inside message greetings: "Hello Shree Ram Puri!"
    number: "919337592943", // TODO_CLIENT_CONFIRM
  },
  bhubaneswar: {
    name: "Shree Ram Lodge, Bhubaneswar",
    city: "Bhubaneswar",
    number: "919938205167", // TODO_CLIENT_CONFIRM
  },
};

export const waLink = (propertyKey, message) =>
  `https://wa.me/${WA[propertyKey].number}?text=${encodeURIComponent(message)}`;

/** Append the page the guest came from so staff know the lead source. */
export function waMessageWithSource(message, pageSource) {
  return pageSource ? `${message}\n(via website: ${pageSource})` : message;
}

export const WA_TEMPLATES = {
  general: (propertyLabel) =>
    `Hello Shree Ram ${propertyLabel}! I'd like to know about room availability.`,
  bookingEnquiry: ({ propertyLabel, checkin, checkout, adults, children, room }) =>
    `Hello Shree Ram ${propertyLabel}!\n` +
    `I'd like to book:\n` +
    `Check-in: ${checkin}\n` +
    `Check-out: ${checkout}\n` +
    `Guests: ${adults} adults, ${children} children\n` +
    `Room: ${room || "Any"}\n` +
    `Please share availability and price.`,
  roomEnquiry: (roomName, propertyLabel) =>
    `Hello! I'm interested in the ${roomName} at Shree Ram ${propertyLabel}. Is it available?`,
  returningGuest: (propertyLabel) =>
    `Hello! I've stayed with you before. Please share my member rate for ${propertyLabel}.`,
  group: (n, month, propertyLabel) =>
    `Hello! We're a group of ${n} planning a trip in ${month}. Please share options.`,
  festivalOptIn: (propertyLabel) =>
    `Hello! Please send me festival dates and offers for Shree Ram ${propertyLabel}.`,
  referral: (friendName, propertyLabel) =>
    `Hello! ${friendName} referred me to Shree Ram. I'd like to book.`,
};
