# SHREE RAM — HOTEL & LODGE WEBSITE
## Project Documentation v1.0 (Frontend Phase)

**Purpose of this document:** Single source of truth for building the Shree Ram website. It is written so it can be pasted directly into an AI coding tool (see the Master Build Prompt in Section 20) and also used as a client-facing brief.

**Primary business goal:** Customer retention and repeat bookings (via direct WhatsApp contact), built on trust (real photos, real video, honest information).
**Phase 1 (now):** Frontend only, with WhatsApp click-to-chat as the "booking engine".
**Phase 2 (later):** Backend (booking engine, admin panel, payments, CRM, WhatsApp Business API).

---

## 0. How to read this document

| Tag | Meaning |
|---|---|
| **[CARD]** | Information read directly from the two business cards |
| **[VERIFIED]** | Confirmed from web sources during research |
| **[CONVENTION]** | Standard Indian hotel-industry practice / my professional recommendation |
| **[CLIENT TO CONFIRM]** | Unknown. Must be provided by the owner. **Never invent these on the site.** |

---

## 1. Business information extracted from the cards

### 1.1 Property A — Hotel Shree Ram (Puri) [CARD]

| Field | Value |
|---|---|
| Name | **Hotel Shree Ram** |
| Address | Market Square, Narendrakona Road, Puri-1 (Odisha) |
| Mobile 1 | 93375 92943 |
| Mobile 2 | 94393 31073 |
| Email | ramdewsoft@gmail.com |
| Logo | Gold "SR" monogram (interlocking S and R) on a dark circle |
| Card style | Red bold title on a sky-blue cloud/sky background |

### 1.2 Property B — Shree Ram Lodge (Bhubaneswar) [CARD]

| Field | Value |
|---|---|
| Name | **Shree Ram Lodge** |
| Odia script name | ଶ୍ରୀ ରାମ ଲଜ୍ (as printed on the card; **confirm spelling**) |
| Address | Samantarapur, Bhubaneswar-2 (Odisha) |
| Contact 1 | 99382 05167 |
| Contact 2 | 99382 15167 |
| Logo | Same "SR" monogram, in a gold/orange gradient on a dark circle |
| Card style | Green + navy + maroon lettering, gold lotus/floral motifs, two room photos (lounge, bedroom) |

### 1.3 Observations & flags

1. **Two properties, one brand (assumed).** The SR monogram, the "Shree Ram" name and the similar phone-number pattern strongly suggest the same owner/family. **[CLIENT TO CONFIRM]** If they are separate businesses, this becomes two separate sites.
2. **The Puri card's rightmost digits are slightly cut off in the photo.** Verify both Puri numbers against the client before publishing.
3. **The email `ramdewsoft@gmail.com` looks like a personal/developer address**, not a hotel address. Recommendation: create a domain email (e.g. `stay@<domain>`), which builds trust and looks professional on Google listings. **[CONVENTION]**
4. **Nothing on the cards tells us:** room types, prices, amenities, check-in/out times, GST number, star category, year established, photos of the Puri hotel, WhatsApp-enabled numbers. All are listed in Section 18 as items to collect.
5. **Brand name in UI:** use **"Shree Ram"** as the master brand, with the property names *Hotel Shree Ram, Puri* and *Shree Ram Lodge, Bhubaneswar*.
6. **Distances from each property to landmarks (Jagannath Temple, beach, railway station, airport) are not on the cards** and must be verified on Google Maps before being shown. Do not guess.

---

## 2. Research summary

### 2.1 What I verified [VERIFIED]

- **Puri** listings for hotels near the Jagannath Temple commonly lead with: distance to the temple and beach, free Wi-Fi, air conditioning, free parking, 24-hour front desk, breakfast, laundry and luggage storage. Guests compare on these first.
- Puri to Biju Patnaik Airport (Bhubaneswar) is typically listed around **80–90 minutes by road**. This makes "Puri ⇄ Bhubaneswar" a natural travel pair for a two-property brand.
- **Samantarapur** is a locality within Bhubaneswar Municipal Corporation, roughly **8 km from the city centre** (Wikipedia). It is not in the old-town temple area, so the site should sell it honestly (calm, practical, well-connected) instead of implying it is next to Lingaraj Temple.
- Bhubaneswar's core visitor draws: Lingaraj Temple (old town), Udayagiri & Khandagiri caves, Odisha State Museum. Winter (Oct–Mar) is the best season for visiting.

### 2.2 What I did NOT do

- I did not browse Pinterest directly (it is not reliably accessible to research tools). Section 8 gives you **exact Pinterest search terms** so your team can build a moodboard in 10 minutes. The visual direction in this document comes from established hospitality-design practice, not from copying any single site.
- I did not check competitors' live prices. Do a 30-minute manual check of 5 nearby competitors on Google Maps/Booking/MakeMyTrip and record: price range, review score, top complaint. (Template in Section 18.)

---

## 3. Who the guests are (and what each one needs)

### 3.1 Puri — Hotel Shree Ram

| Guest segment | What they worry about | What the website must answer instantly |
|---|---|---|
| **Pilgrim families / groups** (largest segment) | Distance to temple, clean rooms, elders' comfort, early check-in after a night train | "How far is the temple?", ground-floor/lift access, 24-hr reception, family rooms |
| **Bengali & out-of-state leisure tourists** (a very large share of Puri's demand **[CONVENTION]**) | Beach access, food, safety, value | Beach distance, AC rooms, parking, meals nearby |
| **Senior citizens** | Stairs, walking distance, quiet, hot water | Lift/ground floor, hot water, wheelchair-friendly? |
| **Festival-season travellers** (Rath Yatra etc.) | Availability, price surge, cancellation | Early booking prompt, transparent price, WhatsApp to lock room |
| **Solo / couples / friends** | Privacy, ID rules, safety | Clear ID/check-in policy, women-friendly signals |

### 3.2 Bhubaneswar — Shree Ram Lodge

| Guest segment | What they worry about | What the website must answer instantly |
|---|---|---|
| **Business / official / contractors** | Reliable Wi-Fi, quiet, GST invoice, parking | Wi-Fi, GST bill, parking, monthly/weekly rates |
| **Medical visitors & attendants** | Nearby hospitals, long stays, low cost | Long-stay discount, distance to hospitals **[CLIENT TO CONFIRM]** |
| **Students / exam candidates** | Budget, quiet, safety | Budget rooms, safe, near coaching/exam centres |
| **Temple-circuit tourists & transit travellers** | Airport / station distance, cab pickup | Airport/station distance, pickup service |

### 3.3 The 8 things Indian hotel guests decide on (in order) [CONVENTION]

1. **Real photos** (is it really like this?)
2. **Price** (a visible "Starting from ₹___ / night")
3. **Location** (map + distance to the one landmark they care about)
4. **Cleanliness & safety** (recent reviews, women/family-friendly signals)
5. **Amenities that matter** (AC, hot water, Wi-Fi, parking, lift, 24-hr desk)
6. **Ease of contact** (one tap to call / WhatsApp)
7. **Cancellation & payment clarity** (pay at hotel? UPI? refunds?)
8. **Social proof** (Google rating, real guest comments)

**Design rule:** every section on the site must serve one of these eight. If it doesn't, delete it.

---

## 4. Retention strategy (the real goal)

Most independent Indian hotels lose repeat business because guests have no reason or easy way to come back directly. The website's job is to (a) win the first booking on trust and (b) make the second booking one WhatsApp tap.

### 4.1 Retention levers, and how each is built

| # | Lever | Phase 1 (frontend only) | Phase 2 (backend) |
|---|---|---|---|
| 1 | **"Stay Again" returning-guest offer** | A "Stayed with us before?" button → opens WhatsApp with prefilled "Returning guest, please share member rate" | Guest database, auto-recognise by phone number |
| 2 | **Family Circle loyalty** (name is a suggestion) | Simple static section: "Book direct on WhatsApp, get [benefit]". Benefit set by owner | Points/credits, tiers, admin control |
| 3 | **Cross-property loop** | On each property page: "Continuing to Puri/Bhubaneswar? Stay with us there too" (link + WhatsApp) | Combined booking, shared guest profile |
| 4 | **Festival & season alerts** | "Get festival-date alerts on WhatsApp" button → prefilled opt-in message | WhatsApp Business API broadcasts (opt-in only) |
| 5 | **Post-stay review request** | QR code at reception + a `/review` page that redirects to Google review link | Automated WhatsApp message on checkout day |
| 6 | **Referral** | "Refer a friend" WhatsApp share button with prefilled text | Unique referral codes, tracked rewards |
| 7 | **Occasion reminders** | Not possible on frontend | Birthday/anniversary capture + reminders |
| 8 | **Group & annual booking** | "Planning a family trip / group?" WhatsApp button with group template | Group quote form + admin |
| 9 | **Digital travel guide** | Short, beautiful "Plan your trip" page (Section 9.6) that guests bookmark | Personalised itinerary emails |

### 4.2 Retention principles

- **Make direct booking clearly better than OTAs** (MakeMyTrip, Booking, OYO): "Best rate when you book with us directly", free early check-in / late check-out when available, free pickup, a welcome drink, or a room upgrade. The owner picks the benefit. **[CLIENT TO CONFIRM]**
- **Capture the phone number, not the email.** In India the WhatsApp number is the loyalty key.
- **Every guest gets asked for a Google review** within 24 hours of checkout. Reviews feed the trust loop for the next guest.

---

## 5. Brand & positioning

**Positioning statement (draft):** *"A clean, honest, family-run stay in Odisha's two most-visited cities, with the owner a WhatsApp message away."*

**Brand personality:** Warm, trustworthy, rooted in Odisha's heritage, quietly premium. **Not** flashy, not corporate-cold, not OYO-generic.

**Tagline options (short, pick one; confirm with client):**
- "Your home in Puri." / "Your home in Bhubaneswar."
- "Stay peaceful. Stay close."
- Odia/English pair: *ସ୍ବାଗତ* (Swagata, "welcome") used as a small greeting element **[confirm with a native Odia speaker before use]**

**Logo usage:** The gold SR monogram on a dark circle is the strongest asset. The site should be **built around it**: Teak Espresso + Antique Gold + Pattachitra Maroon as the core palette. Ask the client for a high-resolution logo file (SVG/PNG). If unavailable, recreate a clean vector from the card **only with the client's approval**.

---

## 6. Colour palette

### 6.1 Direction: "Odisha Heritage", warm, not corporate

Navy-and-gold is the default for generic hotel templates, so it has been dropped. The palette now comes from Odisha itself and from the two cards:

- **Pattachitra Maroon** = the deep red-brown in the Lodge card lettering and the Jagannath/Pattachitra tradition. It becomes the brand colour.
- **Teak Espresso** = warm dark wood and temple stone in place of black or navy. It sits well with the dark circle of the SR logo.
- **Antique Gold** = the gold of the SR monogram and the lotus motifs on the Lodge card.
- **Bottle Green** = the green of "SHREE RAM" on the Lodge card, used sparingly for trust cues.
- **Ivory / Khadi Sand** = warm handloom-paper backgrounds that let real photos carry the page.

### 6.2 Core tokens

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary dark | **Teak Espresso** | `#2A1B14` | Header, footer, headings, dark sections, mobile action bar |
| Brand / primary CTA | **Pattachitra Maroon** | `#7B1E2B` | "Book on WhatsApp", primary buttons, key accents |
| Accent (decorative) | **Antique Gold** | `#B98A3B` | Lines, icons, borders on dark backgrounds |
| Gold for text on light | **Deep Gold** | `#7E5A14` | Gold-coloured text on ivory |
| Background | **Ivory** | `#FBF6EC` | Page background |
| Surface | **Khadi Sand** | `#F0E6D2` | Cards, alternating sections |
| Trust / available | **Bottle Green** | `#23503F` | Ratings, checkmarks, "Available" |
| Coastal tint (Puri) | **Sage Mist** | `#E3EAE0` | Soft section tint on the Puri page |
| Body text | **Warm Umber** | `#5A4E46` | Paragraph text |
| WhatsApp | **WhatsApp Green** | `#25D366` | WhatsApp button only (Espresso icon/label) |

### 6.3 Contrast (WCAG), checked

| Combination | Ratio | Result |
|---|---|---|
| Espresso `#2A1B14` on Ivory | 15.4:1 | Pass (AAA) |
| Warm Umber `#5A4E46` on Ivory | 7.5:1 | Pass (AAA) |
| White on Maroon `#7B1E2B` | 10.2:1 | Pass (AAA) |
| Maroon on Ivory | 9.5:1 | Pass (AAA) |
| White on Bottle Green `#23503F` | 9.2:1 | Pass (AAA) |
| Deep Gold `#7E5A14` on Ivory | 5.8:1 | Pass (AA) |
| Antique Gold `#B98A3B` on Espresso | 5.3:1 | Pass (AA) |
| Espresso on WhatsApp Green | 8.4:1 | Pass (AAA) |
| Antique Gold `#B98A3B` on Ivory | 2.9:1 | **Fail for text.** Decoration and borders only |
| White on WhatsApp Green | 2.0:1 | **Fail.** Use an Espresso icon/label |

### 6.4 Property theming (optional but recommended)

- **Puri page:** Sage Mist tint with Maroon accents (coastal, festive).
- **Bhubaneswar page:** Khadi Sand with Bottle Green accents (calm, practical).
- The master brand and shared components stay the same.

### 6.5 Colour rules

- Roughly 60% Ivory/Khadi Sand, 25% Espresso, 10% Maroon/Green, 5% Gold.
- **No gradients** except a subtle dark overlay on the hero video for text legibility.
- No pure black (`#000`), no pure white backgrounds, and **no blue-based colours** in the UI. Use Espresso and Ivory.
- Maroon is a button/accent colour, not a page-wide wash. Keep large areas calm and let photography provide the colour.

---

## 7. Typography & visual language

| Element | Recommendation | Notes |
|---|---|---|
| Headings | **Cormorant Garamond** (600) or **Playfair Display** | Elegant serif, "heritage hospitality" feel |
| Body/UI | **DM Sans** or **Inter** (400/500/600) | Highly legible on low-end phones |
| Odia script | **Noto Sans Oriya** | Load only when Odia text is present |
| Hindi (future) | **Noto Sans Devanagari** | For the later language toggle |

- Body text min **16px** on mobile; line-height 1.6; max line length ~65 characters.
- Section titles are **short** (2–5 words). Sub-lines max ~12 words.
- **Icons:** one line-icon set (Lucide). No emoji as icons.
- **Shape:** 12–16px rounded corners on cards/buttons, subtle shadows. A very subtle **lotus/temple-line motif** may be used as a divider (SVG, gold, 1.5px stroke), never as a heavy pattern.
- **Motion:** gentle only: fade/slide-up on scroll (200–400ms), smooth image hover zoom (1.03), sticky header shrink. Respect `prefers-reduced-motion`.

---

## 8. Design references & moodboard direction

### 8.1 Visual direction (one sentence)
*"Heritage boutique-guesthouse warmth, with the clarity of a modern booking site."*

### 8.2 Pinterest search terms (build a board of ~30 pins)

- `boutique hotel website design`
- `hotel website UI mobile`
- `heritage hotel website india`
- `guesthouse landing page design`
- `hotel room photography warm lighting`
- `Odisha temple architecture` / `Pattachitra art` (for motif inspiration)
- `Puri beach sunrise photography`
- `hotel lobby maroon gold ivory`
- `hospitality brand identity maroon gold`

### 8.3 What to take from good hotel sites, and what to avoid

**Take:**
- Full-bleed hero (video or image) with one headline and one CTA
- Large photography with generous whitespace
- Sticky bottom action bar on mobile (Call / WhatsApp)
- Room cards with price, 3–4 key facts and a single button
- Map + "distance chips"

**Avoid (these make a site look like generic AI output):**
- Purple/blue gradient hero blobs
- Identical 3-column "feature cards" repeated on every section
- Stock photos of unrelated hotels/Western people
- Fake statistics ("10,000+ happy guests"), fake reviews, fake awards
- Lorem ipsum, placeholder names, "John Doe" testimonials
- Long paragraphs about "our commitment to excellence"
- Pop-ups on page load, auto-playing audio, carousels that auto-advance too fast
- Emoji in headings

---

## 9. Site architecture & page specifications

### 9.1 Sitemap

```
/                     Home (brand landing + property chooser)
/puri                 Hotel Shree Ram, Puri
/bhubaneswar          Shree Ram Lodge, Bhubaneswar
/rooms                All rooms (filter by property)  [or nested under each property]
/gallery              Photo + video gallery
/explore              "Plan your trip": Puri & Bhubaneswar essentials
/offers               Direct-booking benefits & seasonal notices
/contact              Map, phones, WhatsApp, hours
/review               Redirect to Google review (QR target)
/policies             Check-in/out, ID, cancellation, payment (short, plain language)
```

Global: sticky header, floating WhatsApp button, mobile bottom action bar, footer.

### 9.2 Global components

**Header (sticky):**
- Logo (SR monogram + "Shree Ram")
- Links: Puri · Bhubaneswar · Rooms · Gallery · Explore · Contact
- Right: **Call** (icon) and **WhatsApp** (Pattachitra Maroon button "Book on WhatsApp")
- Transparent over hero, becomes solid Teak Espresso after scroll.

**Mobile bottom bar (always visible, <768px):**
`[ Call ]  [ WhatsApp ]  [ Directions ]`, 56px high, Teak Espresso background, gold icons. This is the highest-converting element on Indian hotel sites. **[CONVENTION]**

**Footer:** both properties' address/phones, email, hours, map links, Google rating badge (only when real), policies link, social links (only if they exist). Small print: GST/registration number **[CLIENT TO CONFIRM]**.

### 9.3 Home page (brand level)

Order matters. Each block is intentionally short.

| # | Section | Content | Notes |
|---|---|---|---|
| 1 | **Hero** | Full-bleed muted looping video (property exterior + room + street, 10–15s). Headline (≤7 words), sub-line (≤12 words), two buttons: **Book on WhatsApp** and **View Rooms** | Poster image loads first. Dark overlay for text legibility |
| 2 | **Property chooser** | Two large image cards: *Hotel Shree Ram, Puri* and *Shree Ram Lodge, Bhubaneswar*. Each: one photo, one line, "Starting ₹___", **Explore** button | Answers "which city?" in 2 seconds |
| 3 | **Quick enquiry bar** | Property select, check-in, check-out, guests → **Send on WhatsApp** | Builds a prefilled WhatsApp message (Section 10) |
| 4 | **Why guests stay with us** | 4 items max, icon + 3–5 words each (e.g. "24-hour reception", "Family-friendly", "Clean & sanitised rooms", "Free Wi-Fi"). Only what is actually true **[CLIENT TO CONFIRM]** | Not a 3-column template cliché: use a slim horizontal strip |
| 5 | **Room highlights** | 3 rooms per property (photo, name, price, 3 facts, "Enquire") | Photo-led |
| 6 | **Video tour** | One 45–90s walkthrough with a custom poster frame and play button. Lazy-loaded | Biggest trust-builder |
| 7 | **Guest voices** | 3–4 **real** Google reviews (name initial + city + stars + 1–2 lines) with "See all on Google" | Only real, verified reviews. If none yet, **hide the section**, do not fake it |
| 8 | **Location snapshot** | Map + distance chips per property | Distances verified on Google Maps |
| 9 | **Returning guest strip** | "Stayed with us before? Get your member rate" → WhatsApp | Retention lever #1 |
| 10 | **FAQ (5 questions max)** | Check-in time, ID needed, parking, cancellation, pay-at-hotel | Accordion; one line each |
| 11 | **Final CTA** | Full-width Teak Espresso band: "Ready to stay?" + WhatsApp + Call | |

### 9.4 Puri page — Hotel Shree Ram

- **Hero:** photo/video of the hotel entrance + street; headline like "A peaceful stay in the heart of Puri" (confirm claims).
- **Distance chips [CLIENT TO CONFIRM, verify on Maps]:** Jagannath Temple · Puri Beach · Puri Railway Station · Bhubaneswar Airport (typically ~80–90 min drive per public listings).
- **Rooms** (photo, size, bed, AC/Non-AC, max guests, price from, 4 amenity icons, "Enquire on WhatsApp").
- **Amenities grid:** icons only + short label (Wi-Fi, AC, hot water, TV, parking, lift, 24-hr desk, luggage storage, laundry, power backup, CCTV, lockers). **Show only what exists.**
- **Festival banner (JSON-driven):** e.g. "Rath Yatra: book early", with editable dates. Rath Yatra is in the Ashadha month (usually June–July); dates to be set by the owner each year.
- **Nearby (max 6 cards):** Jagannath Temple, Puri Beach, Konark Sun Temple, Chilika Lake, Raghurajpur (heritage craft village), Sudarshan Crafts Museum. Each = photo + name + distance + 1 line.
- **Cross-sell:** "Visiting Bhubaneswar too?" → Lodge page.
- **Local tips strip (retention):** "Best time to visit", "Darshan tips" (3 bullets, short).

### 9.5 Bhubaneswar page — Shree Ram Lodge

- **Hero:** lounge/bedroom photo; headline like "Comfortable, connected, close to the city" (confirm claims).
- **Honest location:** state "Samantarapur, Bhubaneswar-2". Show real drive times to Railway Station, Airport, Lingaraj Temple, Old Town. Highlight *practical* strengths: easy parking, quieter area, value.
- **Rooms:** same component as Puri. Highlight long-stay and business-friendly rates if available.
- **Amenities:** same icon grid.
- **Nearby:** Lingaraj Temple, Udayagiri & Khandagiri Caves, Odisha State Museum, Dhauli Shanti Stupa, Nandankanan Zoo. Each with drive time.
- **Business/long-stay strip:** GST invoice, weekly/monthly rates → WhatsApp.
- **Cross-sell:** "Heading to Puri?" → Hotel page.

### 9.6 Explore / Plan your trip (a retention page)

Short, visual, bookmarkable. Two tabs (Puri | Bhubaneswar), each with:
- **Top 5 places** (photo + one line + distance)
- **1-day / 2-day suggested route** (timeline graphic, not paragraphs)
- **Best season** (small graphic)
- **Local food to try** (5 items: e.g. dalma, pakhala, chhena poda, Puri mahaprasad **[verify wording]**, seafood)
- **Getting around** (auto, cab, e-rickshaw)
- CTA: "Need a cab or guide? Ask us on WhatsApp."

### 9.7 Gallery page

- Filters: **All · Rooms · Exterior · Common areas · Views · Video**
- Masonry grid, lightbox, keyboard/swipe navigation
- Each image tagged with its property; captions are optional and short
- Video tiles open in a modal player

### 9.8 Contact page

- Two blocks (Puri | Bhubaneswar): address, both phone numbers (tap-to-call), WhatsApp button, email, Google Maps embed, "Get Directions" button
- Reception hours **[CLIENT TO CONFIRM]**
- One simple enquiry form (Name, Phone, Property, Dates, Message) that on submit **opens WhatsApp with the message prefilled** (no backend needed in Phase 1)
- "How to reach us" mini-cards: from railway station / airport (short, with approximate cab fare only if the owner confirms)

### 9.9 Policies page (plain language, tiny)

Check-in/out times, valid ID requirements (Aadhaar / passport / driving licence: **[CLIENT TO CONFIRM]**), cancellation & refund, payment modes (cash/UPI/cards), child/extra-bed policy, pets, smoking, visitors. Presented as icon + one-liner rows, not legal paragraphs.

---

## 10. WhatsApp feature (Phase 1 core feature)

### 10.1 Numbers

Use international format without `+` or spaces:

| Property | Candidate numbers (must be WhatsApp-enabled, confirm) | wa.me format |
|---|---|---|
| Puri | 93375 92943 / 94393 31073 | `919337592943` / `919439331073` |
| Bhubaneswar | 99382 05167 / 99382 15167 | `919938205167` / `919938215167` |

**[CLIENT TO CONFIRM]** which number on each card is on WhatsApp and who monitors it. Recommendation: use **WhatsApp Business** (free app) with a business profile, catalogue (rooms), greeting message, away message and quick replies.

### 10.2 Entry points

1. **Floating button** (bottom-right, desktop + mobile above the bottom bar): Green `#25D366` circle, Espresso WhatsApp glyph, subtle pulse animation every ~8 seconds (stop after 3 pulses). Tooltip on desktop: "Chat with us".
2. **Header button:** "Book on WhatsApp" (Pattachitra Maroon).
3. **Room cards:** "Enquire on WhatsApp" (prefills room name).
4. **Quick enquiry bar** (home + property pages): builds a full prefilled message.
5. **Contact form:** on submit, opens WhatsApp.
6. **Returning-guest, festival-alert, group, referral buttons** (Section 4): each has its own template.

### 10.3 Property-aware behaviour

- On `/puri` → uses Puri number. On `/bhubaneswar` → uses Bhubaneswar number.
- On the Home page (no property known) → the floating button opens a **small chooser sheet**: "Chat with: Puri | Bhubaneswar".
- The number/message config lives in **one file** (`whatsapp.config.js`) so the owner can change it without touching components.

### 10.4 Message templates (English; Hindi/Odia later)

```text
GENERAL
Hello Shree Ram {property}! I'd like to know about room availability.

BOOKING ENQUIRY (from quick bar)
Hello Shree Ram {property}!
I'd like to book:
Check-in: {checkin}
Check-out: {checkout}
Guests: {adults} adults, {children} children
Room: {room|Any}
Please share availability and price.

ROOM ENQUIRY
Hello! I'm interested in the {roomName} at Shree Ram {property}. Is it available?

RETURNING GUEST
Hello! I've stayed with you before. Please share my member rate for {property}.

GROUP / FAMILY TRIP
Hello! We're a group of {n} planning a trip in {month}. Please share options.

FESTIVAL ALERTS OPT-IN
Hello! Please send me festival dates and offers for Shree Ram {property}.

REFERRAL
Hello! {friendName} referred me to Shree Ram. I'd like to book.
```

Include the page source, e.g. append `(via website: /puri)`, so staff know where the lead came from.

### 10.5 Implementation notes

```js
// whatsapp.config.js
export const WA = {
  puri:        { name: "Hotel Shree Ram, Puri",         number: "91XXXXXXXXXX" }, // TODO confirm
  bhubaneswar: { name: "Shree Ram Lodge, Bhubaneswar",  number: "91XXXXXXXXXX" }, // TODO confirm
};

export const waLink = (propertyKey, message) =>
  `https://wa.me/${WA[propertyKey].number}?text=${encodeURIComponent(message)}`;
```

- Open in a new tab (`target="_blank" rel="noopener"`).
- On mobile, `wa.me` opens the app. On desktop, it opens WhatsApp Web/Desktop.
- Always show a **Call** fallback (`tel:+91…`) next to WhatsApp for guests without WhatsApp.
- Track clicks (Phase 1: Google Analytics 4 event `whatsapp_click` with `property`, `source_section`, `room`).

### 10.6 WhatsApp UX rules

- Never open WhatsApp automatically. Only on a user tap.
- The button label says what happens: "Book on WhatsApp", not "Click here".
- Show a one-line reassurance near the quick bar: "No payment needed to enquire" **[CLIENT TO CONFIRM]**.
- Response-time promise ("We usually reply within 15 minutes") only if the owner can honour it.

---

## 11. Photography & video plan (the trust engine)

The client asked for high-quality images and video to build trust. The site will only be as good as the media. **Recommend a half-day professional shoot per property** (hire a local hotel/real-estate photographer). Do **not** use stock photos of other hotels.

### 11.1 Photo shot list (per property)

| Shot | Quantity | Notes |
|---|---|---|
| Exterior at golden hour + signage (with SR logo) | 3–4 | Twilight shot is the hero candidate |
| Entrance / reception / lobby | 3–4 | Warm lights on, staff optional and only with consent |
| **Each room type** | 6–8 per type | Wide bed shot, corner shot, bathroom, window view, desk/TV, amenities close-up |
| Bathroom (clean, well lit) | 2 per room type | Guests judge cleanliness here |
| Corridors, stairs, lift | 3–4 | Proves it's well kept |
| Dining / breakfast area (if any) | 3–4 | |
| Rooftop / balcony / views (if any) | 3–4 | |
| Details: linen, towels, lamps, lotus/decor | 6–8 | Adds craft and warmth |
| **Neighbourhood**: street, temple/beach approach, sunrise | 6–10 | Puri: temple area and beach. Bhubaneswar: Lingaraj, caves |

**Photo specs:** shoot RAW, 3:2 landscape + some 4:5 vertical. Delivered as sRGB JPEG at ≥3000px on the long edge. Natural, warm, straight-line edits. No heavy HDR, no fake sky replacement.

### 11.2 Video shot list

| Video | Length | Use |
|---|---|---|
| **Hero loop** (muted, no text) | 10–15 s | Exterior → lobby → room → sunrise/street |
| **Room walkthrough** (one per room type) | 20–30 s | Room cards / rooms page |
| **Property tour** (with soft music, optional Odia/Hindi/English voiceover) | 60–90 s | Home + property pages |
| **Guest-arrival story** (optional) | 20 s | Social + gallery |
| **Vertical 9:16 cuts** | 15 s each | Instagram Reels, WhatsApp status |

**Video specs:** 4K capture, gimbal-stabilised, delivered 1080p H.264 (MP4) + WebM. Hero video **≤ 3 MB**, no audio track, `autoplay muted loop playsinline`, with a WebP poster. Provide captions (VTT) for the tour video.

### 11.3 Implementation rules

- Store all media in a single manifest (`media.manifest.json`) with `src`, `alt`, `property`, `category`, `aspect`, `focalPoint`. **Swapping placeholders for real photos must be a one-file change.**
- Images: WebP/AVIF, responsive `srcset`, lazy-loaded below the fold, explicit width/height to avoid layout shift, `alt` text that describes the scene (also good for SEO).
- **Until the real shoot is complete**, the builder must use **neutral placeholder frames** clearly labelled `PLACEHOLDER: replace with real photo` (never stock photos of other hotels presented as ours).

---

## 12. Content & copy guidelines

- **Tone:** warm, direct, respectful ("Namaskar" greeting is appropriate once, in the hero or footer).
- **Word budget:** Home page total visible copy ≲ 350 words. Each room description ≤ 20 words. Each FAQ answer ≤ 25 words.
- **Every claim must be true and specific.** "Clean rooms" is weak; "Rooms cleaned daily with fresh linen" is specific *if true*.
- **Price display:** "From ₹___ / night (taxes extra/included)" **[CLIENT TO CONFIRM]**. Price transparency is a top trust signal.
- **Languages:** Phase 1 in English with clean structure for i18n. Phase 2: **English / ଓଡ଼ିଆ / हिन्दी** toggle. Have all Odia translated by a native speaker, not a machine.
- **Sample copy blocks** (to be verified by the client):
  - Home hero: *"Stay with family in Puri & Bhubaneswar."* / *"Clean rooms. Honest prices. One WhatsApp away."*
  - Property card: *"Puri: Hotel Shree Ram. Comfortable rooms, close to the sea and the temple."* (confirm proximity)
  - CTA microcopy: "Check availability", "Book on WhatsApp", "Call reception", "Get directions".

---

## 13. Trust checklist (must-haves before launch)

- [ ] Real, recent photos of **every** room type and the exterior
- [ ] At least one property video
- [ ] Real Google rating + 3–4 genuine reviews (or hide the section)
- [ ] Visible phone numbers and address in header/footer and contact page
- [ ] Google Maps embed with the correct pin (verify on-site)
- [ ] Price shown ("From ₹…")
- [ ] Clear ID, check-in/out and cancellation info
- [ ] GST / trade-licence number in the footer if applicable
- [ ] Professional domain email (not a personal Gmail)
- [ ] HTTPS, fast load, no broken links
- [ ] Privacy note near any form ("We only use your number to reply")
- [ ] Owner/staff photo and name (optional but strongly builds trust)

---

## 14. SEO & local visibility (frontend-friendly)

- **Google Business Profile** for each property (photos, hours, phone, website link). This drives most local bookings and reviews. **[CONVENTION]**
- **Name-Address-Phone consistency** across the site, Google, and social.
- **Title/description patterns:**
  - Puri: `Hotel Shree Ram, Puri | Rooms near Jagannath Temple & Beach` (only if the distance claim is verified)
  - Bhubaneswar: `Shree Ram Lodge, Samantarapur | Budget & Comfortable Stay in Bhubaneswar`
- **Structured data:** JSON-LD `Hotel`/`LodgingBusiness` per property (name, address, telephone, geo, priceRange, image, aggregateRating **only if real**).
- Clean URLs, sitemap.xml, robots.txt, Open Graph images (so WhatsApp link previews look great; this matters because the site will be shared on WhatsApp).
- Target queries: "hotel in Puri near Jagannath Temple", "budget hotel Puri", "lodge in Bhubaneswar", "hotel Samantarapur Bhubaneswar".

---

## 15. Performance, accessibility, devices

- **Mobile-first**: most Indian travellers browse on phones, often on 4G. **[CONVENTION]** Design at 360px first, then scale up.
- Targets (Lighthouse mobile): Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95. LCP < 2.5 s.
- Hero video only loads on decent connections; otherwise the poster image is shown (`navigator.connection` / `prefers-reduced-data`).
- Touch targets ≥ 44×44px. Visible focus states. Keyboard-navigable menus and lightbox. Alt text on all images. `prefers-reduced-motion` respected.
- Test on: Chrome Android (low-end device profile), Safari iOS, desktop Chrome/Edge.

---

## 16. Technical approach

### 16.1 Recommended stack (Phase 1)

- **Next.js (App Router) + TypeScript + Tailwind CSS**
- Animation: **Framer Motion** (sparingly) or CSS only
- Icons: **Lucide**
- Video/gallery: native `<video>` + a lightweight lightbox
- Deploy: Vercel/Netlify (free tier fine for Phase 1)
- Analytics: GA4 + Microsoft Clarity (heatmaps) **[CONVENTION]**

*(If the team prefers, static HTML/CSS/JS also works, but the component structure below is easier to extend to a backend.)*

### 16.2 Content-driven structure (so a backend can plug in later)

```
/content
  properties.json       // name, address, phones, geo, amenities, policies, festival banners
  rooms.json            // per property: name, size, beds, ac, maxGuests, priceFrom, amenities[], images[]
  reviews.json          // real reviews only
  media.manifest.json   // all photos & videos
  faq.json
/config
  whatsapp.config.js
  theme.tokens.css      // the palette above as CSS variables
```

Components read from these JSON files. In Phase 2, these become API endpoints/database tables with no UI rewrite.

### 16.3 Component list

`Header`, `MobileActionBar`, `FloatingWhatsApp`, `Hero`, `PropertyCard`, `QuickEnquiryBar`, `RoomCard`, `AmenityIcon`, `DistanceChip`, `VideoTour`, `GalleryGrid`, `Lightbox`, `ReviewCard`, `FAQAccordion`, `MapBlock`, `FestivalBanner`, `CrossSellBand`, `Footer`, `WhatsAppChooserSheet`.

### 16.4 Design-token CSS (starter)

```css
:root {
  --teak-espresso:#2A1B14; --antique-gold:#B98A3B; --deep-gold:#7E5A14;
  --ivory:#FBF6EC;    --khadi-sand:#F0E6D2;        --pattachitra-maroon:#7B1E2B;
  --bottle-green:#23503F; --sage-mist:#E3EAE0; --warm-umber:#5A4E46;
  --whatsapp:#25D366;
  --radius:14px; --shadow:0 6px 24px rgba(42,27,20,.12);
  --font-head:"Cormorant Garamond", Georgia, serif;
  --font-body:"DM Sans", system-ui, sans-serif;
}
```

---

## 17. Phase 2 (backend) — plan so nothing is thrown away

| Module | Description |
|---|---|
| Booking engine | Real-time availability + rates, room inventory, date blocking |
| Admin dashboard | Owner updates rooms, prices, offers, photos, festival banners, reviews |
| Payments | Razorpay/UPI, advance deposit, invoices with GST |
| Guest CRM | Phone-number-keyed guest profiles, stay history, notes, tags |
| WhatsApp Business API | Confirmations, reminders, review requests, opt-in broadcasts |
| Loyalty | Points/credits, referral codes, returning-guest auto-discount |
| Reports | Leads by source, occupancy, repeat-guest rate |
| Channel manager (optional) | Sync availability with OTAs to avoid double-bookings |

---

## 18. Information to collect from the client

1. Confirmation: same owner/brand for both properties?
2. Which numbers are WhatsApp-enabled; who replies; hours.
3. Domain name preference and a professional email.
4. High-resolution logo (SVG/PNG).
5. Room types per property: name, size, beds, AC/non-AC, max guests, price range, inclusions (breakfast?).
6. Amenities list (only real ones).
7. Check-in/check-out times, ID policy, cancellation policy, payment modes.
8. GST/registration details.
9. Distances/drive times (or we verify on Maps): temple, beach, station, airport.
10. Google Business Profile links and current rating/reviews.
11. Owner's direct-booking benefit (discount, free pickup, early check-in, etc.).
12. Number of rooms, year established, any awards/certifications.
13. Photos/videos available now; schedule the professional shoot.
14. Competitor snapshot (fill in):

| Competitor | Area | Price range | Google rating | What guests praise | What guests complain about |
|---|---|---|---|---|---|
| | | | | | |

---

## 19. Delivery plan & acceptance criteria

### Phase 1 milestones

| Step | Deliverable |
|---|---|
| 1 | Design tokens, typography, component library (Figma optional, or built in code) |
| 2 | Home, Puri, Bhubaneswar pages (mobile-first) |
| 3 | Rooms, Gallery, Explore, Contact, Policies |
| 4 | WhatsApp system (floating, bar, templates, chooser, analytics) |
| 5 | Media integration once shoot is complete |
| 6 | SEO, schema, performance, accessibility pass |
| 7 | Client review and launch |

### Acceptance criteria

- Lighthouse mobile ≥ 90 performance / ≥ 95 accessibility.
- A visitor can reach **WhatsApp within 1 tap** from any page on mobile.
- Every WhatsApp button opens the **correct property's number** with the **correct prefilled message**.
- No lorem ipsum, no fabricated reviews/prices/amenities anywhere.
- All `[CLIENT TO CONFIRM]` values live in JSON/config files, not hard-coded.
- Works on 360px–1440px+ with no horizontal scroll.
- Hero video muted/autoplay/inline on iOS and Android, with the poster fallback.

---

## 20. MASTER BUILD PROMPT (paste this into your AI coding tool)

```text
ROLE
You are a senior hospitality-web designer and front-end engineer who has built
booking-focused sites for Indian hotels. Build a polished, production-quality,
mobile-first website. It must NOT look like generic AI output.

PROJECT
Website for "Shree Ram": two properties under one brand.
1) Hotel Shree Ram: Market Square, Narendrakona Road, Puri-1, Odisha.
   Phones: 9337592943, 9439331073. Email: ramdewsoft@gmail.com
2) Shree Ram Lodge: Samantarapur, Bhubaneswar-2, Odisha.
   Phones: 9938205167, 9938215167.
Logo: gold "SR" monogram on a dark circle.

GOAL
Customer trust and repeat/direct bookings. Phase 1 is frontend only. The main
conversion is WhatsApp click-to-chat (wa.me links with prefilled messages).
Backend comes later, so drive all content from JSON files.

STACK
Next.js (App Router) + TypeScript + Tailwind + Lucide icons. Minimal Framer Motion.

DESIGN SYSTEM
Colours (CSS variables): teak-espresso #2A1B14, antique-gold #B98A3B (decorative only),
deep-gold #7E5A14 (gold text), ivory #FBF6EC (page bg), khadi-sand #F0E6D2 (surfaces),
pattachitra-maroon #7B1E2B (primary CTA, white text), bottle-green #23503F,
sage-mist #E3EAE0, warm-umber #5A4E46 (body text), whatsapp #25D366 (Espresso icon/label).
Fonts: Cormorant Garamond (headings), DM Sans (body), Noto Sans Oriya (Odia text).
Radius 14px, soft shadows, no gradients except a dark overlay on the hero video,
no emoji icons, no purple/blue AI gradients, no navy-blue anywhere, no repeated identical 3-card layouts.
Motion: subtle fade/slide-up only; respect prefers-reduced-motion.
Meet WCAG AA contrast. Body text 16px+, touch targets 44px+.

PAGES
/ (brand home), /puri, /bhubaneswar, /rooms, /gallery, /explore, /offers,
/contact, /policies, /review (redirect to Google review link from config).

HOME PAGE ORDER
Hero (muted looping video with poster, headline <=7 words, 2 CTAs) ->
Property chooser (2 large image cards with "Starting ₹___") ->
Quick enquiry bar (property, dates, guests -> builds WhatsApp message) ->
Why guests stay with us (slim strip, 4 icon+label items) ->
Room highlights -> Video tour -> Guest reviews (hide if reviews.json is empty) ->
Location + distance chips -> Returning-guest strip -> FAQ (max 5) -> Final CTA band.
Keep total visible copy on Home under ~350 words.

GLOBAL UI
Sticky header (logo, nav, Call icon, pattachitra-maroon "Book on WhatsApp"),
mobile bottom action bar (Call | WhatsApp | Directions),
floating WhatsApp button (property-aware; on the Home page it opens a chooser
sheet: Puri | Bhubaneswar), footer with both properties' details.

WHATSAPP SYSTEM
Central config file whatsapp.config.js with per-property numbers in the format
91XXXXXXXXXX (placeholders until confirmed) and a helper
waLink(property, message) using encodeURIComponent.
Templates: general, booking enquiry (check-in, check-out, guests, room),
room enquiry, returning guest, group trip, festival-alert opt-in, referral.
Append the page/source to each message. Add GA4 event "whatsapp_click" with
property and source_section. Always show a tel: fallback.

CONTENT RULES
- All text, prices, amenities, distances, policies live in /content/*.json and
  are marked TODO where unknown. NEVER invent reviews, ratings, prices, awards,
  amenities, or statistics. If data is missing, hide the section or show a clearly
  marked placeholder.
- Headlines 2-5 words; sublines <=12 words; room descriptions <=20 words.
- Use only real photography from media.manifest.json. Until provided, use neutral
  labelled placeholder frames ("PLACEHOLDER: replace with real photo"),
  never stock photos of other hotels.
- Images: WebP/AVIF, srcset, lazy-load, explicit dimensions, descriptive alt text.
- Hero video: muted, autoplay, loop, playsinline, <=3MB, poster image, and fall back
  to the poster on slow connections / reduced-data.

RETENTION FEATURES (frontend versions)
Returning-guest WhatsApp button, festival-alert opt-in button, referral share
button, cross-property "Visiting Puri/Bhubaneswar too?" bands, Google review QR
page (/review), FestivalBanner component driven by JSON, "Explore / Plan your trip"
page with a timeline-style route (not paragraphs).

QUALITY BAR
Lighthouse mobile: Performance >= 90, Accessibility >= 95, SEO >= 95.
Add JSON-LD (Hotel/LodgingBusiness) per property, OG images for WhatsApp previews,
sitemap.xml, robots.txt. No horizontal scroll from 360px to 1440px+.

DELIVERABLE
Working project with the folder structure: /content, /config, /components,
/app pages, /public/media. Include a README explaining how to (1) change WhatsApp
numbers, (2) add rooms, (3) swap photos/videos, (4) edit festival banners.
Build mobile-first, review each page at 360px before scaling up.
```

---

## 21. Open risks & honest notes

- **Media is the biggest risk.** Without real professional photos/videos, no design will build trust. Budget for the shoot.
- **WhatsApp as the only booking channel** means leads depend on fast replies. The owner needs a clear response routine, or the site will underperform.
- **Two properties with different customer profiles** (pilgrim/leisure in Puri; business/practical in Bhubaneswar) should share one brand but have distinct property pages so neither audience is confused.
- Everything tagged **[CLIENT TO CONFIRM]** must be verified before launch. A single wrong phone number or false claim damages trust more than a missing section.
