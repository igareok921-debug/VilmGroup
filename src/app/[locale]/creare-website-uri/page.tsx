import { notFound } from "next/navigation";
import ServicePageWithLocale from "@/components/seo/ServicePageWithLocale";
import { getServicePage } from "@/data/servicePages";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { buildLocalizedMetadata, serviceSeo } from "@/i18n/seo";

const page = getServicePage("creare-website-uri");

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return buildLocalizedMetadata({
    locale,
    path: "/creare-website-uri",
    seo: serviceSeo["creare-website-uri"][locale],
  });
}

export default async function LocalizedWebsitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || !page) notFound();
  return <ServicePageWithLocale locale={locale as Locale} page={page} />;
}
