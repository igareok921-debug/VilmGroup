import { notFound } from "next/navigation";
import ServicePageWithLocale from "@/components/seo/ServicePageWithLocale";
import { getServicePage } from "@/data/servicePages";
import { isLocale, type Locale } from "@/i18n/config";

const page = getServicePage("creare-website-uri");

export default async function LocalizedWebsitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || !page) notFound();
  return <ServicePageWithLocale locale={locale as Locale} page={page} />;
}
