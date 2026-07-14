import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageWithLocale from "@/components/seo/ServicePageWithLocale";
import { onlineStorePage } from "@/data/servicePages";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { buildLocalizedMetadata } from "@/i18n/seo";

const seo = {
  ro: {
    title: "Creare Magazin Online în Moldova",
    description:
      "Magazine online rapide și scalabile, cu produse, plăți online, checkout, automatizări și SEO pentru afaceri din Moldova și România.",
    keywords: onlineStorePage.keywords,
  },
  en: {
    title: "Online Store Development in Moldova",
    description:
      "Fast, scalable online stores with product management, online payments, checkout, automation and ecommerce SEO.",
    keywords: [
      "online store development Moldova",
      "ecommerce development Chișinău",
      "online shop Romania",
      "ecommerce website with payments",
    ],
  },
  ru: {
    title: "Создание интернет-магазина в Молдове",
    description:
      "Быстрые масштабируемые интернет-магазины с товарами, онлайн-платежами, checkout, автоматизацией и ecommerce SEO.",
    keywords: [
      "создание интернет магазина Молдова",
      "интернет магазин Кишинёв",
      "ecommerce разработка Молдова",
      "сайт магазина с оплатой",
    ],
  },
} satisfies Record<Locale, { title: string; description: string; keywords: string[] }>;

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

  return buildLocalizedMetadata({
    locale,
    path: "/creare-magazin-online",
    seo: seo[locale],
  });
}

export default async function OnlineStorePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <ServicePageWithLocale locale={locale} page={onlineStorePage} />;
}
