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
      title: "Blog Vilm Group — Website-uri, SEO și SMM în Moldova",
      description:
        "Articole practice despre creare website-uri, SEO, SMM, content și conversii pentru afaceri din Moldova. Cifre reale, greșeli și soluții aplicate.",
      keywords: [
        "blog Vilm Group",
        "blog website Moldova",
        "blog SMM Chișinău",
        "ghid creare website",
        "content marketing Moldova",
      ],
    },
    en: {
      title: "Vilm Group Blog — Websites, SEO and SMM in Moldova",
      description:
        "Practical articles about website creation, SEO, SMM, content and conversion for businesses in Moldova. Real numbers, mistakes and applied solutions.",
      keywords: [
        "Vilm Group blog",
        "website blog Moldova",
        "SMM blog Chișinău",
        "website creation guide",
        "content marketing Moldova",
      ],
    },
    ru: {
      title: "Блог Vilm Group — Сайты, SEO и SMM в Молдове",
      description:
        "Практические статьи о создании сайтов, SEO, SMM, контенте и конверсиях для бизнеса в Молдове. Реальные цифры, ошибки и решения.",
      keywords: [
        "блог Vilm Group",
        "блог сайты Молдова",
        "блог SMM Кишинев",
        "гид создания сайта",
        "контент маркетинг Молдова",
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
