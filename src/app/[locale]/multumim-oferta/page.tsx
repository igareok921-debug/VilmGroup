import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DesktopVisualEffects from "@/components/DesktopVisualEffects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";

const copy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    response: string;
    home: string;
    service: string;
  }
> = {
  ro: {
    eyebrow: "CERERE PRIMITĂ",
    title: "Mulțumim. Revenim în curând.",
    description:
      "Am primit detaliile proiectului tău. Echipa VILM Group va analiza solicitarea și va reveni cu următorii pași.",
    response: "Răspundem, de regulă, în maximum 24 de ore.",
    home: "Înapoi la pagina principală",
    service: "Vezi serviciile de website",
  },
  en: {
    eyebrow: "REQUEST RECEIVED",
    title: "Thank you. We will be in touch.",
    description:
      "We received your project details. The VILM Group team will review your request and follow up with the next steps.",
    response: "We usually reply within 24 hours.",
    home: "Back to the homepage",
    service: "View website services",
  },
  ru: {
    eyebrow: "ЗАЯВКА ПОЛУЧЕНА",
    title: "Спасибо. Мы скоро свяжемся.",
    description:
      "Мы получили информацию о вашем проекте. Команда VILM Group изучит заявку и свяжется с вами, чтобы обсудить следующие шаги.",
    response: "Обычно мы отвечаем в течение 24 часов.",
    home: "Вернуться на главную",
    service: "Посмотреть услуги по созданию сайтов",
  },
};

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

  return {
    title: copy[locale].eyebrow,
    description: copy[locale].description,
    alternates: {
      canonical: `/${locale}/multumim-oferta`,
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}

export default async function QuoteConfirmationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const content = copy[locale];

  return (
    <I18nProvider dictionary={dictionaries[locale]} locale={locale}>
      <div className="relative min-h-screen overflow-hidden bg-bg-0 text-text">
        <DesktopVisualEffects />
        <div data-page-content className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1 items-center px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
            <section className="mx-auto w-full max-w-4xl border border-border bg-bg-0/85 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-14 lg:p-16">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <p className="font-mono text-[10px] tracking-[0.3em] text-accent">
                  {content.eyebrow}
                </p>
              </div>

              <h1 className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.045em] text-text md:text-7xl">
                {content.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-soft md:text-xl">
                {content.description}
              </p>
              <p className="mt-4 font-mono text-xs tracking-[0.12em] text-accent">
                {content.response}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}`} className="btn-primary justify-center">
                  {content.home}
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href={`/${locale}/creare-website-uri`}
                  className="btn-secondary justify-center"
                >
                  {content.service}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </I18nProvider>
  );
}
