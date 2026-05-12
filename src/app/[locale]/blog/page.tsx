import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndexPage from "@/components/blog/BlogIndexPage";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { buildLocalizedMetadata } from "@/i18n/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const seoByLocale = {
    ro: {
      title: "Blog Vilm Group — Idei despre website-uri, SMM, branding și AI",
      description:
        "Articole oneste despre creare website-uri, SMM, branding și AI pentru afaceri din Moldova, România și diaspora. Cifre reale, greșeli, sfaturi practice.",
      keywords: [
        "blog Vilm Group",
        "blog website Moldova",
        "blog SMM Chișinău",
        "ghid creare website",
        "blog branding Moldova",
      ],
    },
    en: {
      title: "Vilm Group Blog — Ideas about websites, SMM, branding and AI",
      description:
        "Honest articles about website creation, SMM, branding and AI for businesses in Moldova, Romania and the diaspora. Real numbers, mistakes, practical advice.",
      keywords: [
        "Vilm Group blog",
        "website blog Moldova",
        "SMM blog Chișinău",
        "website creation guide",
        "branding blog Moldova",
      ],
    },
    ru: {
      title: "Блог Vilm Group — Идеи о сайтах, SMM, брендинге и AI",
      description:
        "Честные статьи о создании сайтов, SMM, брендинге и AI для бизнеса в Молдове, Румынии и диаспоре. Реальные цифры, ошибки, практические советы.",
      keywords: [
        "блог Vilm Group",
        "блог сайты Молдова",
        "блог SMM Кишинев",
        "гид создания сайта",
        "блог брендинг Молдова",
      ],
    },
  };

  return buildLocalizedMetadata({
    locale,
    path: "/blog",
    seo: seoByLocale[locale],
  });
}

export default async function BlogIndexRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <I18nProvider locale={locale as Locale} dictionary={dictionaries[locale as Locale]}>
      <BlogIndexPage />
    </I18nProvider>
  );
}
