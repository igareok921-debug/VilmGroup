import type { MetadataRoute } from "next";
import { servicePages } from "@/data/servicePages";
import { locales } from "@/i18n/config";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vilmgroup.md"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedHomePages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "ro" ? 0.95 : 0.8,
  }));
  const localizedServicePages = locales.flatMap((locale) =>
    servicePages.map((page) => ({
      url: `${siteUrl}/${locale}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...localizedHomePages,
    ...servicePages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...localizedServicePages,
  ];
}
