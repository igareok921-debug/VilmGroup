import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { primaryServicePages } from "@/data/servicePages";
import { portfolioProjects } from "@/data/portfolioProjects";
import { locales, siteUrl } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languageAlternates = (path = "/") => ({
    languages: {
      ro: `${siteUrl}/ro${path === "/" ? "" : path}`,
      en: `${siteUrl}/en${path === "/" ? "" : path}`,
      ru: `${siteUrl}/ru${path === "/" ? "" : path}`,
      "x-default": `${siteUrl}/ro${path === "/" ? "" : path}`,
    },
  });
  const localizedHomePages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "ro" ? 0.95 : 0.8,
    alternates: languageAlternates("/"),
  }));
  const localizedServiceIndexPages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/servicii`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
    alternates: languageAlternates("/servicii"),
  }));
  const localizedServicePages = locales.flatMap((locale) =>
    primaryServicePages.map((page) => ({
      url: `${siteUrl}/${locale}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: languageAlternates(`/${page.slug}`),
    }))
  );
  const localizedOnlineStorePages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/creare-magazin-online`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: languageAlternates("/creare-magazin-online"),
  }));

  const localizedBlogIndexPages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
    alternates: languageAlternates("/blog"),
  }));
  const localizedBlogPostPages = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
      alternates: languageAlternates(`/blog/${post.slug}`),
    }))
  );
  const localizedPortfolioPages = locales.flatMap((locale) =>
    portfolioProjects.map((project) => ({
      url: `${siteUrl}/${locale}/portofoliu/${project.slug}`,
      lastModified: new Date(`${project.year}-01-01`),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: languageAlternates(`/portofoliu/${project.slug}`),
    }))
  );

  return [
    ...localizedHomePages,
    ...localizedServiceIndexPages,
    ...localizedServicePages,
    ...localizedOnlineStorePages,
    ...localizedBlogIndexPages,
    ...localizedBlogPostPages,
    ...localizedPortfolioPages,
  ];
}
