import { notFound } from "next/navigation";
import LegalPage from "@/components/legal/LegalPage";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/config";

export const metadata = { title: "Politica de cookies", robots: { index: true, follow: true } };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <I18nProvider locale={locale} dictionary={dictionaries[locale]}><LegalPage kind="cookies" /></I18nProvider>; }
