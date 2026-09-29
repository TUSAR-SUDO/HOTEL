/**
 * One-off helper: find the lead image of each landmark's Wikipedia article.
 * Usage: node scripts/fetch-landmarks.js
 */
const ARTICLES = {
  jagannath: "Jagannath_Temple,_Puri",
  "puri-beach": "Puri_Beach",
  konark: "Konark_Sun_Temple",
  chilika: "Chilika_Lake",
  raghurajpur: "Pattachitra",
  sudarshan: "Raghurajpur",
  lingaraj: "Lingaraja_Temple",
  caves: "Udayagiri_and_Khandagiri_Caves",
  museum: "Odisha_State_Museum",
  dhauli: "Dhauli",
  nandankanan: "Nandankanan_Zoological_Park",
};

async function main() {
  const out = {};
  for (const [key, title] of Object.entries(ARTICLES)) {
    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`, {
        headers: { "User-Agent": "shree-ram-site-builder/1.0 (site build)" },
      });
      if (!res.ok) {
        out[key] = `HTTP ${res.status}`;
        continue;
      }
      const json = await res.json();
      const img = json.originalimage || json.thumbnail;
      out[key] = img
        ? { url: img.source, w: img.width, h: img.height }
        : "no image";
    } catch (e) {
      out[key] = String(e);
    }
    await new Promise((r) => setTimeout(r, 400));
  }
  console.log(JSON.stringify(out, null, 1));
}
main();
