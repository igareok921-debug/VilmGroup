import type { Metadata } from "next";
import { getLanguageAlternates, localeLabels, type Locale } from "./config";

export const homeSeo: Record<
  Locale,
  {
    title: string;
    description: string;
    keywords: string[];
  }
> = {
  ro: {
    title: "Creare Website-uri și SMM în Chișinău",
    description:
      "Creăm website-uri rapide și optimizate SEO și oferim servicii SMM cu strategie, content, Reels și Meta Ads pentru afaceri din Chișinău și Moldova.",
    keywords: [
      "creare website Chișinău",
      "creare site Moldova",
      "SMM Chișinău",
      "servicii SMM Moldova",
      "administrare Instagram Chișinău",
      "social media marketing Moldova",
    ],
  },
  en: {
    title: "Website Development and SMM in Chișinău",
    description:
      "SEO-ready website development and SMM with strategy, content, Reels and Meta Ads for businesses in Chișinău and Moldova.",
    keywords: [
      "website development Moldova",
      "web design Chișinău",
      "SMM Moldova",
      "social media marketing Moldova",
      "Instagram management Moldova",
      "SMM services Moldova",
    ],
  },
  ru: {
    title: "Создание сайтов и SMM в Кишинёве",
    description:
      "Создаём быстрые сайты с SEO и ведём SMM со стратегией, контентом, Reels и Meta Ads для бизнеса в Кишинёве и Молдове.",
    keywords: [
      "создание сайтов Кишинёв",
      "SMM Кишинёв",
      "SMM услуги Молдова",
      "ведение Instagram Кишинёв",
      "social media marketing Молдова",
    ],
  },
};

export const serviceSeo: Record<
  string,
  Record<Locale, { title: string; description: string; keywords: string[] }>
> = {
  servicii: {
    ro: {
      title: "Creare Website-uri și Servicii SMM în Chișinău",
      description:
        "Două servicii principale pentru creștere: creare website-uri cu SEO și SMM cu strategie, administrare social media, content, Reels și Meta Ads.",
      keywords: [
        "creare website Chișinău",
        "creare site Moldova",
        "SMM Chișinău",
        "servicii SMM Moldova",
        "administrare Instagram Chișinău",
      ],
    },
    en: {
      title: "Website Development and SMM Services in Chișinău",
      description:
        "Two core growth services: SEO-ready website development and SMM with social media management, content, Reels and Meta Ads.",
      keywords: [
        "website creation Chișinău",
        "SMM Chișinău",
        "SMM services Moldova",
        "Instagram management Moldova",
      ],
    },
    ru: {
      title: "Создание сайтов и SMM-услуги в Кишинёве",
      description:
        "Два главных направления роста: создание сайтов с SEO и SMM со стратегией, ведением соцсетей, контентом, Reels и Meta Ads.",
      keywords: [
        "создание сайтов Кишинёв",
        "SMM Кишинёв",
        "SMM услуги Молдова",
        "ведение Instagram Кишинёв",
      ],
    },
  },
  "creare-website-uri": {
    ro: {
      title: "Creare website în Chișinău de la 150€",
      description:
        "Website-uri personalizate pentru afaceri din Moldova. Pachete de la 150€, SEO tehnic, design unic și 30 de zile de suport după lansare.",
      keywords: ["creare website Chișinău", "creare site Moldova", "web design Chișinău"],
    },
    en: {
      title: "Website Creation in Chișinău",
      description:
        "Fast, modern and SEO-ready website creation for businesses in Chișinău, Moldova, Romania and Europe.",
      keywords: ["website creation Chișinău", "web design Moldova", "website development Moldova"],
    },
    ru: {
      title: "Создание сайтов в Кишинёве",
      description:
        "Быстрое современное создание сайтов с SEO-подготовкой для бизнеса в Кишинёве, Молдове, Румынии и Европе.",
      keywords: ["создание сайтов Кишинёв", "разработка сайта Молдова", "web design Кишинёв"],
    },
  },
  "smm-chisinau": {
    ro: {
      title: "SMM Chișinău: Instagram, Reels și Meta Ads",
      description:
        "Strategie, content plan, administrare Instagram și Facebook, Reels și Meta Ads pentru branduri din Chișinău. Vezi procesul, pachetele și portofoliul.",
      keywords: ["SMM Chișinău", "servicii SMM Moldova", "administrare Instagram Chișinău"],
    },
    en: {
      title: "SMM in Chișinău",
      description:
        "SMM services in Chișinău: social media strategy, Instagram and Facebook management, content plans, visuals, reels and campaigns.",
      keywords: ["SMM Chișinău", "social media marketing Moldova", "Instagram management Moldova"],
    },
    ru: {
      title: "SMM в Кишинёве",
      description:
        "SMM-услуги в Кишинёве: стратегия, ведение Instagram и Facebook, content plan, визуалы, reels и кампании.",
      keywords: ["SMM Кишинёв", "ведение Instagram Молдова", "social media marketing Молдова"],
    },
  },
  "chatbots-ai": {
    ro: {
      title: "Chatbots AI și Automatizări",
      description:
        "Chatbots AI, asistenți personalizați și automatizări pentru website-uri, suport clienți, vânzări și workflow-uri de business.",
      keywords: ["chatbot AI Moldova", "automatizări AI", "asistent AI pentru business"],
    },
    en: {
      title: "AI Chatbots and Automation",
      description:
        "AI chatbots, custom assistants and automation for websites, customer support, sales, content and business workflows.",
      keywords: ["AI chatbot Moldova", "AI automation", "AI assistant for business"],
    },
    ru: {
      title: "AI-чатботы и автоматизация",
      description:
        "AI-чатботы, персональные ассистенты и автоматизация для сайтов, поддержки клиентов, продаж, контента и бизнес-процессов.",
      keywords: ["AI чатбот Молдова", "автоматизация AI", "AI ассистент для бизнеса"],
    },
  },
};

export function buildLocalizedMetadata({
  locale,
  path = "/",
  seo,
}: {
  locale: Locale;
  path?: string;
  seo: { title: string; description: string; keywords: string[] };
}): Metadata {
  const canonical = `/${locale}${path === "/" ? "" : path}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: "Vilm Group",
      locale: localeLabels[locale].replace("-", "_"),
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Vilm Group",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/opengraph-image"],
    },
  };
}
