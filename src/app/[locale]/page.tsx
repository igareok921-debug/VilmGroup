import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <I18nProvider
      dictionary={dictionaries[locale as Locale]}
      locale={locale as Locale}
    >
      <HomePage />
    </I18nProvider>
  );
}
