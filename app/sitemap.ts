import type { MetadataRoute } from "next";
import { site, brands } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/story", "/contact", ...brands.map((b) => `/${b.slug}`)];
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
