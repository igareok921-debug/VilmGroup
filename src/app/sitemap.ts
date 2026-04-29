import type { MetadataRoute } from "next";
import { servicePages } from "@/data/servicePages";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vilmgroup.md"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
