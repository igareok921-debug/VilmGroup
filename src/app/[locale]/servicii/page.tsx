import Link from "next/link";
import { notFound } from "next/navigation";
import AssistantRobot from "@/components/AssistantRobot";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import Navbar from "@/components/Navbar";
import ScrollPathLine from "@/components/ScrollPathLine";
import { onlineStorePage, servicePages } from "@/data/servicePages";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, locales, siteUrl, type Locale } from "@/i18n/config";
import { buildLocalizedMetadata, serviceSeo } from "@/i18n/seo";

const pageCopy = {
  ro: {
    eyebrow: "Servicii digitale",
    title: "Servicii pentru branduri care vor vizibilitate, conversii și o imagine clară.",
    text: "Vilm Group combină creare website-uri, SMM, branding, logo design, chatbots AI și conținut pentru afaceri din Chișinău, Moldova, România și Europa.",
    choose: "Alege serviciul potrivit",
    includes: "Ce include",
    cta: "Cere ofertă",
    details: "Vezi detalii",
    local:
      "Lucrăm cu branduri locale și remote, cu accent pe structură, design, conținut și SEO tehnic pregătit pentru Google.",
  },
  en: {
    eyebrow: "Digital services",
    title: "Services for brands that need visibility, conversions and a clear online image.",
    text: "Vilm Group combines website creation, SMM, branding, logo design, AI chatbots and content for businesses in Chișinău, Moldova, Romania and Europe.",
    choose: "Choose the right service",
    includes: "What it includes",
    cta: "Request a quote",
    details: "View details",
    local:
      "We work with local and remote brands, focusing on structure, design, content and technical SEO prepared for Google.",
  },
  ru: {
    eyebrow: "Digital-услуги",
    title: "Услуги для брендов, которым нужны видимость, заявки и понятный онлайн-образ.",
    text: "Vilm Group объединяет создание сайтов, SMM, брендинг, дизайн логотипа, AI-чатботов и контент для бизнеса в Кишинёве, Молдове, Румынии и Европе.",
    choose: "Выберите нужную услугу",
    includes: "Что входит",
    cta: "Запросить цену",
    details: "Смотреть детали",
    local:
      "Мы работаем с локальными и remote-брендами, делая акцент на структуре, дизайне, контенте и техническом SEO для Google.",
  },
} as const;

const localizedNames: Record<Locale, Record<string, { title: string; description: string }>> = {
  ro: {
    "creare-website-uri": {
      title: "Creare website-uri în Chișinău",
      description:
        "Website-uri rapide, responsive și optimizate SEO pentru prezentare, servicii, portofoliu și cereri de ofertă.",
    },
    "smm-chisinau": {
      title: "SMM Chișinău",
      description:
        "Strategie social media, administrare Instagram/Facebook, content plan, design, reels și campanii.",
    },
    "branding-logo-design": {
      title: "Branding și logo design",
      description:
        "Identitate vizuală, logo, culori, tipografie și materiale de brand pentru o imagine coerentă.",
    },
    "chatbots-ai": {
      title: "Chatbots AI și automatizări",
      description:
        "Asistenți AI pentru website, suport clienți, vânzări, lead-uri și workflow-uri repetitive.",
    },
    "creare-magazin-online": {
      title: "Creare magazine online",
      description:
        "Magazine online cu produse, checkout, plăți, automatizări și SEO pentru vânzări.",
    },
  },
  en: {
    "creare-website-uri": {
      title: "Website creation in Chișinău",
      description:
        "Fast, responsive and SEO-ready websites for presentation, services, portfolio and quote requests.",
    },
    "smm-chisinau": {
      title: "SMM in Chișinău",
      description:
        "Social media strategy, Instagram/Facebook management, content plans, design, reels and campaigns.",
    },
    "branding-logo-design": {
      title: "Branding and logo design",
      description:
        "Visual identity, logo, colors, typography and brand materials for a consistent image.",
    },
    "chatbots-ai": {
      title: "AI chatbots and automation",
      description:
        "AI assistants for websites, customer support, sales, leads and repetitive workflows.",
    },
    "creare-magazin-online": {
      title: "Online store development",
      description:
        "Online stores with products, checkout, payments, automation and ecommerce SEO.",
    },
  },
  ru: {
    "creare-website-uri": {
      title: "Создание сайтов в Кишинёве",
      description:
        "Быстрые responsive-сайты с SEO-подготовкой для презентации, услуг, портфолио и заявок.",
    },
    "smm-chisinau": {
      title: "SMM в Кишинёве",
      description:
        "Стратегия social media, ведение Instagram/Facebook, content plan, дизайн, reels и кампании.",
    },
    "branding-logo-design": {
      title: "Брендинг и дизайн логотипа",
      description:
        "Айдентика, логотип, цвета, типографика и бренд-материалы для целостного образа.",
    },
    "chatbots-ai": {
      title: "AI-чатботы и автоматизация",
      description:
        "AI-ассистенты для сайта, поддержки клиентов, продаж, лидов и повторяющихся процессов.",
    },
    "creare-magazin-online": {
      title: "Создание интернет-магазинов",
      description:
        "Интернет-магазины с товарами, checkout, оплатой, автоматизацией и ecommerce SEO.",
    },
  },
};

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
    path: "/servicii",
    seo: serviceSeo.servicii[locale],
  });
}

export default async function LocalizedServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = pageCopy[locale];
  const serviceList = [...servicePages, onlineStorePage].map((page) => ({
    ...page,
    localized: localizedNames[locale as Locale][page.slug],
  }));
  const localePrefix = `/${locale}`;
  const pageUrl = `${siteUrl}${localePrefix}/servicii`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: serviceSeo.servicii[locale].title,
        description: serviceSeo.servicii[locale].description,
        inLanguage: locale === "ro" ? "ro-MD" : locale,
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#services`,
        itemListElement: serviceList.map((page, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteUrl}${localePrefix}/${page.slug}`,
          name: page.localized.title,
        })),
      },
    ],
  };

  return (
    <I18nProvider dictionary={dictionaries[locale as Locale]} locale={locale as Locale}>
      <div className="relative min-h-screen bg-bg-0 text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <HeroCanvas />
        <ScrollPathLine />
        <AssistantRobot />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-36 md:grid-cols-12 md:px-10 md:pb-28 md:pt-44">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                    {copy.eyebrow}
                  </span>
                </div>
              </div>
              <div className="md:col-span-8">
                <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
                  {copy.title}
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-soft">
                  {copy.text}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-soft">
                  {copy.local}
                </p>
              </div>
            </section>

            <section className="border-y border-border bg-bg-1/40">
              <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
                <div className="mb-10 flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <h2 className="font-mono text-[10px] tracking-[0.3em] text-accent">
                    {copy.choose}
                  </h2>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {serviceList.map((page) => (
                    <article
                      key={page.slug}
                      className="border border-border bg-bg-0/55 p-6 backdrop-blur-sm transition hover:border-accent"
                    >
                      <p className="font-mono text-[10px] tracking-[0.25em] text-accent">
                        {copy.includes}
                      </p>
                      <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-text">
                        {page.localized.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-text-soft">
                        {page.localized.description}
                      </p>
                      <ul className="mt-6 space-y-3 text-sm leading-relaxed text-text-soft">
                        {(serviceSeo[page.slug]?.[locale]?.keywords ?? page.keywords)
                          .slice(0, 3)
                          .map((keyword) => (
                          <li key={keyword} className="flex gap-3">
                            <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-accent" />
                            <span>{keyword}</span>
                          </li>
                          ))}
                      </ul>
                      <div className="mt-7 flex flex-wrap gap-2">
                        <Link
                          href={`${localePrefix}/#contact`}
                          className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 font-display text-xs font-semibold text-bg-0 transition hover:bg-accent-soft"
                        >
                          {copy.cta}
                          <span aria-hidden>→</span>
                        </Link>
                        <Link
                          href={`${localePrefix}/${page.slug}`}
                          className="inline-flex items-center rounded-full border border-border-strong px-3.5 py-1.5 font-display text-xs font-semibold text-text transition hover:border-accent hover:bg-accent/[0.06]"
                        >
                          {copy.details}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </I18nProvider>
  );
}
