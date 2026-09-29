/**
 * Generates high-quality themed artwork for every entry in media.manifest.json.
 * Scenes evoke Odisha heritage — temple silhouettes, golden-hour coasts, warm
 * interiors, lotus water — in the site palette, with a small clear PLACEHOLDER
 * tag. No stock photos of other hotels. Re-run: node scripts/generate-placeholders.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "media.manifest.json"), "utf8")
);

// ---- palette (design tokens) ----
const C = {
  espresso: "#2A1B14",
  maroon: "#7B1E2B",
  gold: "#B98A3B",
  deepGold: "#7E5A14",
  ivory: "#FBF6EC",
  khadi: "#F0E6D2",
  green: "#23503F",
  sage: "#E3EAE0",
  umber: "#5A4E46",
};

const THEMES = {
  puri: { sky1: "#F3E3C2", sky2: "#E7C9A1", sea1: "#3E6B5A", sea2: "#23503F", haze: "#F6D9AE", line: C.deepGold, deep: C.maroon },
  bhubaneswar: { sky1: "#EFE3CC", sky2: "#D9C39A", sea1: "#4A4436", sea2: "#2E2A1E", haze: "#EBD9B4", line: C.gold, deep: C.green },
  brand: { sky1: "#F0E6D2", sky2: "#E0CCA4", sea1: "#4A3A2C", sea2: "#2A1B14", haze: "#EBD9B4", line: C.gold, deep: C.espresso },
};

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const r = (n) => Math.round(n * 10) / 10;

// ---- defs: gradients + film grain ----
function defs(id, t) {
  return `
  <defs>
    <linearGradient id="sky${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${t.sky1}"/>
      <stop offset="100%" stop-color="${t.sky2}"/>
    </linearGradient>
    <linearGradient id="sea${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${t.sea1}"/>
      <stop offset="100%" stop-color="${t.sea2}"/>
    </linearGradient>
    <radialGradient id="glow${id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#FBE9C8" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#F3D9A4" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#F3D9A4" stop-opacity="0"/>
    </radialGradient>
    <filter id="grain${id}">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n"/>
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.6 0.6 0.6 0 0"/>
      <feComposite operator="in" in2="SourceGraphic"/>
    </filter>
  </defs>`;
}

// ---- reusable shapes ----
function sun(cx, cy, rad, id, opacity = 0.9) {
  return `<circle cx="${r(cx)}" cy="${r(cy)}" r="${r(rad * 3.2)}" fill="url(#glow${id})" opacity="${opacity}"/>
<circle cx="${r(cx)}" cy="${r(cy)}" r="${r(rad)}" fill="#F6DFB2" opacity="${opacity}"/>`;
}

function birds(cx, cy, s, color, op = 0.55) {
  return `<g stroke="${color}" stroke-width="${r(s * 0.12)}" fill="none" opacity="${op}" stroke-linecap="round">
  <path d="M ${r(cx - s)} ${r(cy)} Q ${r(cx - s * 0.5)} ${r(cy - s * 0.6)} ${r(cx)} ${r(cy)} Q ${r(cx + s * 0.5)} ${r(cy - s * 0.6)} ${r(cx + s)} ${r(cy)}"/>
  <path d="M ${r(cx + s * 1.8)} ${r(cy - s * 0.5)} Q ${r(cx + s * 2.2)} ${r(cy - s * 0.95)} ${r(cx + s * 2.6)} ${r(cy - s * 0.5)} Q ${r(cx + s * 3)} ${r(cy - s * 0.95)} ${r(cx + s * 3.4)} ${r(cy - s * 0.5)}"/>
</g>`;
}

function temple(x, baseY, s, color, opacity = 1) {
  // Jagannath-style rekha deul: stepped base, pidha body, curved tower (deul), kalasha
  const w = s * 0.62;
  return `<g fill="${color}" opacity="${opacity}">
  <rect x="${r(x - w * 0.85)}" y="${r(baseY - s * 0.16)}" width="${r(w * 1.7)}" height="${r(s * 0.16)}"/>
  <rect x="${r(x - w * 0.68)}" y="${r(baseY - s * 0.34)}" width="${r(w * 1.36)}" height="${r(s * 0.2)}"/>
  <rect x="${r(x - w * 0.5)}" y="${r(baseY - s * 0.5)}" width="${r(w)}" height="${r(s * 0.2)}"/>
  <path d="M ${r(x - w * 0.34)} ${r(baseY - s * 0.5)}
           C ${r(x - w * 0.42)} ${r(baseY - s * 0.9)}, ${r(x - w * 0.2)} ${r(baseY - s * 1.1)}, ${r(x)} ${r(baseY - s * 1.32)}
           C ${r(x + w * 0.2)} ${r(baseY - s * 1.1)}, ${r(x + w * 0.42)} ${r(baseY - s * 0.9)}, ${r(x + w * 0.34)} ${r(baseY - s * 0.5)} Z"/>
  <rect x="${r(x - w * 0.06)}" y="${r(baseY - s * 1.44)}" width="${r(w * 0.12)}" height="${r(s * 0.12)}"/>
  <circle cx="${r(x)}" cy="${r(baseY - s * 1.5)}" r="${r(s * 0.05)}"/>
</g>`;
}

function palm(cx, baseY, s, color, opacity = 0.9) {
  const trunk = `M ${r(cx)} ${r(baseY)} C ${r(cx + s * 0.06)} ${r(baseY - s * 0.4)}, ${r(cx - s * 0.05)} ${r(baseY - s * 0.7)}, ${r(cx + s * 0.04)} ${r(baseY - s)}`;
  const fronds = [];
  for (let i = 0; i < 6; i++) {
    const a = Math.PI + (i / 5) * Math.PI;
    const tipX = cx + s * 0.52 * Math.cos(a);
    const tipY = baseY - s + s * 0.3 * Math.sin(a);
    fronds.push(`M ${r(cx + s * 0.04)} ${r(baseY - s)} Q ${r(cx + s * 0.04 + (tipX - cx) * 0.5)} ${r(baseY - s - s * 0.18)}, ${r(tipX)} ${r(tipY)}`);
  }
  return `<g stroke="${color}" fill="none" stroke-linecap="round" opacity="${opacity}">
  <path d="${trunk}" stroke-width="${r(s * 0.05)}"/>
  ${fronds.map((d) => `<path d="${d}" stroke-width="${r(s * 0.035)}"/>`).join("")}
</g>`;
}

function waves(y, w, color, opacity = 0.25) {
  let d = "";
  for (let x = 0; x < w; x += 90) d += `M ${x} ${r(y)} q 22 -10 45 0 t 45 0 `;
  return `<path d="${d}" stroke="${color}" stroke-width="3" fill="none" opacity="${opacity}" stroke-linecap="round"/>`;
}

function lotus(cx, cy, s, color, opacity) {
  const petals = [];
  for (let i = 0; i < 5; i++) {
    const a = (-90 + i * 72) * (Math.PI / 180);
    const px = cx + Math.cos(a) * s;
    const py = cy + Math.sin(a) * s;
    const c1x = cx + Math.cos(a - 0.5) * s * 1.9;
    const c1y = cy + Math.sin(a - 0.5) * s * 1.9;
    const c2x = cx + Math.cos(a + 0.5) * s * 1.9;
    const c2y = cy + Math.sin(a + 0.5) * s * 1.9;
    petals.push(`M ${r(cx)} ${r(cy)} Q ${r(c1x)} ${r(c1y)} ${r(px)} ${r(py)} Q ${r(c2x)} ${r(c2y)} ${r(cx)} ${r(cy)}`);
  }
  return `<g fill="none" stroke="${color}" stroke-width="1.5" opacity="${opacity}">${petals
    .map((d) => `<path d="${d}"/>`)
    .join("")}</g>`;
}

// ---- scene painters (id: unique suffix, w/h in px, unit u = min(w,h)/100) ----
function sceneExterior(id, w, h, t, label) {
  const u = Math.min(w, h) / 100;
  const horizon = h * 0.68;
  return `
  <rect width="${w}" height="${h}" fill="url(#sky${id})"/>
  ${sun(w * 0.72, horizon - 34 * u, 9 * u, id)}
  ${birds(w * 0.3, h * 0.22, 6 * u, t.deep)}
  <rect y="${r(horizon)}" width="${w}" height="${h - horizon}" fill="url(#sea${id})"/>
  ${waves(horizon + 8 * u, w, t.haze, 0.35)}
  ${waves(horizon + 18 * u, w, t.haze, 0.2)}
  <g opacity="0.92">
    ${temple(w * 0.2, horizon, 30 * u, t.deep, 0.9)}
    ${temple(w * 0.38, horizon, 18 * u, t.deep, 0.55)}
    <rect x="0" y="${r(horizon - 2 * u)}" width="${w}" height="${2 * u}" fill="${t.sea2}" opacity="0.5"/>
  </g>
  ${palm(w * 0.9, horizon + 2 * u, 16 * u, t.sea2, 0.85)}
  ${palm(w * 0.06, horizon + 4 * u, 12 * u, t.sea2, 0.7)}
  ${label(id, w, h, t)}`;
}

function sceneRoom(id, w, h, t, label) {
  const u = Math.min(w, h) / 100;
  const floor = h * 0.78;
  return `
  <rect width="${w}" height="${h}" fill="${C.khadi}"/>
  <rect width="${w}" height="${floor}" fill="#EFE0C4"/>
  <rect y="${r(floor)}" width="${w}" height="${h - floor}" fill="#D9C29B"/>
  ${sun(w * 0.78, h * 0.2, 7 * u, id, 0.55)}
  <g>
    <rect x="${r(w * 0.08)}" y="${r(floor - 26 * u)}" width="${r(w * 0.5)}" height="${r(20 * u)}" rx="${r(3 * u)}" fill="#FBF3E2"/>
    <rect x="${r(w * 0.08 + 2 * u)}" y="${r(floor - 29 * u)}" width="${r(w * 0.5 - 4 * u)}" height="${r(7 * u)}" rx="${r(3 * u)}" fill="#F6EAD0"/>
    <rect x="${r(w * 0.1)}" y="${r(floor - 33 * u)}" width="${r(10 * u)}" height="${r(7 * u)}" rx="${r(2 * u)}" fill="#FFFDF6"/>
    <rect x="${r(w * 0.1 + 12 * u)}" y="${r(floor - 33 * u)}" width="${r(10 * u)}" height="${r(7 * u)}" rx="${r(2 * u)}" fill="#FFFDF6"/>
    ${[-0.06, 0.52].map((dx) => `<rect x="${r(w * 0.08 + w * 0.5 * (dx + 0.06))}" y="${r(floor - 6 * u)}" width="${r(2.4 * u)}" height="${r(6 * u)}" fill="#8A6A44"/>`).join("")}
    <rect x="${r(w * 0.66)}" y="${r(floor - 20 * u)}" width="${r(14 * u)}" height="${r(14 * u)}" rx="${r(1.6 * u)}" fill="#5A4E46"/>
    <rect x="${r(w * 0.67)}" y="${r(floor - 19 * u)}" width="${r(12 * u)}" height="${r(12 * u)}" rx="${r(1 * u)}" fill="${C.espresso}"/>
    <circle cx="${r(w * 0.73)}" cy="${r(floor - 13 * u)}" r="${r(0.6 * u)}" fill="#6B7B74"/>
  </g>
  ${lotus(w * 0.86, h * 0.14, 5 * u, t.line, 0.5)}
  ${label(id, w, h, t)}`;
}

function sceneLobby(id, w, h, t, label) {
  const u = Math.min(w, h) / 100;
  const floor = h * 0.8;
  return `
  <rect width="${w}" height="${h}" fill="#EFE2C8"/>
  <rect y="${r(floor)}" width="${w}" height="${h - floor}" fill="#C8A876"/>
  ${sun(w * 0.5, h * 0.16, 8 * u, id, 0.5)}
  <g>
    <path d="M ${r(w * 0.16)} ${r(floor)} L ${r(w * 0.3)} ${r(h * 0.3)} L ${r(w * 0.7)} ${r(h * 0.3)} L ${r(w * 0.84)} ${r(floor)} Z" fill="${C.maroon}" opacity="0.85"/>
    ${[0.38, 0.5, 0.62].map((fx) => `<rect x="${r(w * fx - 1.4 * u)}" y="${r(h * 0.3 + (floor - h * 0.3) * 0.12)}" width="${r(2.8 * u)}" height="${r((floor - h * 0.3) * 0.76)}" fill="${C.espresso}" opacity="0.25"/>`).join("")}
    <rect x="${r(w * 0.42)}" y="${r(h * 0.24)}" width="${r(w * 0.16)}" height="${r(6 * u)}" rx="${r(3 * u)}" fill="${C.gold}"/>
  </g>
  ${label(id, w, h, t)}`;
}

function sceneNearby(id, w, h, t, kind, label) {
  const u = Math.min(w, h) / 100;
  const horizon = h * 0.7;
  let body = "";
  if (kind === "temple") {
    body = `${sun(w * 0.5, horizon - 40 * u, 8 * u, id)}
    ${temple(w * 0.5, horizon, 52 * u, C.espresso, 0.95)}
    <rect y="${r(horizon)}" width="${w}" height="${h - horizon}" fill="${C.green}" opacity="0.35"/>`;
  } else if (kind === "sea") {
    body = `${sun(w * 0.74, horizon - 20 * u, 10 * u, id)}
    <rect y="${r(horizon)}" width="${w}" height="${h - horizon}" fill="url(#sea${id})"/>
    ${waves(horizon + 10 * u, w, t.haze, 0.4)}
    ${waves(horizon + 20 * u, w, t.haze, 0.22)}
    ${palm(w * 0.14, horizon, 18 * u, C.espresso, 0.8)}
    ${birds(w * 0.5, h * 0.2, 5 * u, t.deep)}`;
  } else if (kind === "lake") {
    body = `${sun(w * 0.6, h * 0.25, 7 * u, id)}
    <rect y="${r(horizon)}" width="${w}" height="${h - horizon}" fill="url(#sea${id})"/>
    <path d="M ${r(w * 0.3)} ${r(horizon + 14 * u)} q ${r(8 * u)} ${r(-10 * u)} ${r(16 * u)} 0 q ${r(8 * u)} ${r(10 * u)} ${r(16 * u)} 0 q ${r(8 * u)} ${r(-10 * u)} ${r(16 * u)} 0" stroke="${t.haze}" stroke-width="${r(1.6 * u)}" fill="none" opacity="0.7"/>
    <path d="M ${r(w * 0.62)} ${r(horizon + 6 * u)} a ${r(7 * u)} ${r(7 * u)} 0 0 1 ${r(7 * u)} ${r(-7 * u)} l ${r(-2 * u)} 0 a ${r(5 * u)} ${r(5 * u)} 0 0 0 ${r(-5 * u)} ${r(5 * u)} Z" fill="${C.espresso}" opacity="0.85"/>
    ${birds(w * 0.25, h * 0.18, 4.5 * u, t.deep)}`;
  } else if (kind === "craft") {
    body = `<rect width="${w}" height="${h}" fill="${C.khadi}"/>
    ${lotus(w * 0.5, h * 0.34, 14 * u, C.maroon, 0.9)}
    ${lotus(w * 0.5, h * 0.34, 7 * u, C.gold, 0.9)}
    <rect x="${r(w * 0.2)}" y="${r(h * 0.68)}" width="${r(w * 0.6)}" height="${r(1.6 * u)}" fill="${C.gold}" opacity="0.8"/>`;
  } else if (kind === "caves") {
    body = `<rect width="${w}" height="${h}" fill="#E9DBBE"/>
    <path d="M 0 ${r(h * 0.75)} Q ${r(w * 0.2)} ${r(h * 0.3)} ${r(w * 0.42)} ${r(h * 0.42)} L ${r(w * 0.42)} ${r(h * 0.75)} Z" fill="#9C7A4E"/>
    <path d="M ${w} ${r(h * 0.72)} Q ${r(w * 0.78)} ${r(h * 0.26)} ${r(w * 0.58)} ${r(h * 0.4)} L ${r(w * 0.58)} ${r(h * 0.72)} Z" fill="#8A683F"/>
    <path d="M ${r(w * 0.42)} ${r(h * 0.75)} L ${r(w * 0.42)} ${r(h * 0.42)} Q ${r(w * 0.5)} ${r(h * 0.2)} ${r(w * 0.58)} ${r(h * 0.4)} L ${r(w * 0.58)} ${r(h * 0.75)} Z" fill="${C.espresso}"/>
    ${sun(w * 0.5, h * 0.18, 6 * u, id, 0.7)}`;
  } else if (kind === "museum") {
    body = `<rect width="${w}" height="${h}" fill="${C.khadi}"/>
    <rect x="${r(w * 0.18)}" y="${r(h * 0.28)}" width="${r(w * 0.64)}" height="${r(h * 0.44)}" fill="${C.maroon}" opacity="0.9"/>
    ${[0.3, 0.44, 0.58, 0.72].map((fx) => `<rect x="${r(w * fx - 2 * u)}" y="${r(h * 0.24)}" width="${r(4 * u)}" height="${r(h * 0.1)}" fill="${C.gold}"/>`).join("")}
    <rect x="${r(w * 0.18)}" y="${r(h * 0.24)}" width="${r(w * 0.64)}" height="${r(4 * u)}" fill="${C.espresso}"/>
    ${lotus(w * 0.5, h * 0.5, 8 * u, C.ivory, 0.9)}`;
  } else if (kind === "stupa") {
    body = `${sun(w * 0.5, h * 0.3, 8 * u, id)}
    <ellipse cx="${r(w * 0.5)}" cy="${r(h * 0.62)}" rx="${r(w * 0.2)}" ry="${r(h * 0.16)}" fill="${C.ivory}"/>
    <rect x="${r(w * 0.47)}" y="${r(h * 0.36)}" width="${r(w * 0.06)}" height="${r(h * 0.14)}" fill="${C.ivory}"/>
    <circle cx="${r(w * 0.5)}" cy="${r(h * 0.33)}" r="${r(2.4 * u)}" fill="${C.gold}"/>
    <rect y="${r(h * 0.74)}" width="${w}" height="${r(h * 0.26)}" fill="${C.green}" opacity="0.5"/>`;
  } else {
    // zoo: hills + trees + bird
    body = `${sun(w * 0.7, h * 0.22, 7 * u, id)}
    <path d="M 0 ${r(h * 0.78)} Q ${r(w * 0.25)} ${r(h * 0.4)} ${r(w * 0.5)} ${r(h * 0.78)} Z" fill="${C.green}" opacity="0.7"/>
    <path d="M ${r(w * 0.4)} ${r(h * 0.78)} Q ${r(w * 0.7)} ${r(h * 0.32)} ${r(w)} ${r(h * 0.78)} Z" fill="${C.green}" opacity="0.9"/>
    ${palm(w * 0.2, h * 0.78, 14 * u, C.espresso, 0.85)}
    ${birds(w * 0.4, h * 0.18, 5 * u, C.espresso)}`;
  }
  return `<rect width="${w}" height="${h}" fill="url(#sky${id})"/>${body}${label(id, w, h, t)}`;
}

function scenePoster(id, w, h, t, label) {
  const u = Math.min(w, h) / 100;
  return `
  <rect width="${w}" height="${h}" fill="${C.espresso}"/>
  ${sun(w * 0.5, h * 0.36, 10 * u, id, 0.35)}
  ${temple(w * 0.5, h * 0.72, 34 * u, "#3E2A1E", 0.95)}
  <rect y="${r(h * 0.72)}" width="${w}" height="${r(h * 0.28)}" fill="#1E120C"/>
  ${lotus(w * 0.5, h * 0.84, 6 * u, C.gold, 0.8)}
  ${label(id, w, h, t)}`;
}

function sceneOg(id, w, h, t, label) {
  const u = Math.min(w, h) / 100;
  return `
  <rect width="${w}" height="${h}" fill="${C.espresso}"/>
  ${sun(w * 0.78, h * 0.3, 9 * u, id, 0.4)}
  ${temple(w * 0.2, h * 0.82, 26 * u, "#3E2A1E", 0.95)}
  <rect y="${r(h * 0.82)}" width="${w}" height="${r(h * 0.18)}" fill="#1E120C"/>
  ${lotus(w * 0.84, h * 0.7, 7 * u, C.gold, 0.9)}`;
}

// ---- label / SR roundel (scaled down on wide heroes so it never fights the headline) ----
function labelBlock(id, w, h, t) {
  const u = Math.min(w, h) / 100;
  const cx = w / 2;
  const cy = h * 0.5;
  const isWide = w >= 1400;
  if (isWide) {
    // Hero-scale artwork: a small caption near the bottom, no big roundel.
    return `
  <g>
    <text x="${r(cx)}" y="${r(h - 5 * u)}" text-anchor="middle" font-family="Georgia, serif" font-size="${r(2.2 * u)}" fill="#FBF6EC" opacity="0.75" letter-spacing="3">${esc("PLACEHOLDER · REAL PHOTO COMING")}</text>
  </g>`;
  }
  return `
  <g>
    <circle cx="${r(cx)}" cy="${r(cy - 6 * u)}" r="${r(7.5 * u)}" fill="${C.espresso}" opacity="0.92"/>
    <circle cx="${r(cx)}" cy="${r(cy - 6 * u)}" r="${r(7.5 * u)}" fill="none" stroke="${C.gold}" stroke-width="${r(0.45 * u)}"/>
    <text x="${r(cx)}" y="${r(cy - 3.4 * u)}" text-anchor="middle" font-family="Georgia, serif" font-weight="bold" font-size="${r(8.4 * u)}" fill="${C.gold}" letter-spacing="-0.5">SR</text>
    <text x="${r(cx)}" y="${r(cy + 7.5 * u)}" text-anchor="middle" font-family="Georgia, serif" font-size="${r(2.8 * u)}" fill="${C.espresso}" opacity="0.85" letter-spacing="2">${esc("PLACEHOLDER · REAL PHOTO COMING")}</text>
  </g>`;
}

function svgFor(item, idNum) {
  const t = THEMES[item.property] || THEMES.brand;
  const id = `g${idNum}`;
  const w = item.w || 1200;
  const h = item.h || 800;
  const label = (i, ww, hh, tt) => labelBlock(i, ww, hh, tt);

  let scene;
  const nid = item.id;
  if (item.type === "video") scene = scenePoster(id, w, h, t, label);
  else if (nid === "og-image") scene = sceneOg(id, w, h, t, label);
  else if (item.category === "Exterior") scene = sceneExterior(id, w, h, t, label);
  else if (item.category === "Rooms") scene = sceneRoom(id, w, h, t, label);
  else if (item.category === "Common areas") scene = sceneLobby(id, w, h, t, label);
  else if (item.category === "Nearby" || item.category === "Explore") {
    const kind =
      /temple|lingaraj|jagannath|konark/i.test(nid) ? "temple" :
      /beach|sea/i.test(nid) ? "sea" :
      /chilika/i.test(nid) ? "lake" :
      /raghurajpur|craft/i.test(nid) ? "craft" :
      /caves|udayagiri|khandagiri/i.test(nid) ? "caves" :
      /museum/i.test(nid) ? "museum" :
      /dhauli|stupa/i.test(nid) ? "stupa" :
      "zoo";
    scene = sceneNearby(id, w, h, t, kind, label);
  } else scene = sceneExterior(id, w, h, t, label);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(item.alt)}">${defs(id, t)}${scene}
</svg>`;
}

let written = 0;
const uniq = new Map();
for (const item of manifest.items) {
  // Video entries have an empty src until real footage arrives; generate their poster instead.
  const src = item.src || item.poster;
  if (!src || !src.endsWith(".svg")) continue;
  if (uniq.has(src)) continue; // several ids reuse the same file
  uniq.set(src, true);
  const outPath = path.join(ROOT, "public", src.replace(/^\//, ""));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, svgFor(item, written), "utf8");
  written++;
}
console.log(`✓ Wrote ${written} themed placeholder artworks to /public/media.`);
