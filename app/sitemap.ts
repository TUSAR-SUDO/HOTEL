import type { MetadataRoute } from "next";
import { SITE } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const routes = [
    ["", { priority: 1 }],
    ["/puri", { priority: 0.9 }],
    ["/bhubaneswar", { priority: 0.9 }],
    ["/rooms", { priority: 0.8 }],
    ["/gallery", { priority: 0.7 }],
    ["/explore", { priority: 0.7 }],
    ["/offers", { priority: 0.6 }],
    ["/contact", { priority: 0.8 }],
    ["/policies", { priority: 0.4 }],
  ] as const;

  return routes.map(([path, opts]) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    ...opts,
  }));
}
