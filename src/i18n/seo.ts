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
    title: "Vilm Group — Website-uri, SMM, Branding & AI în Chișinău",
    description:
      "Creăm website-uri, SMM, branding, logo design, chatbots și automatizări AI pentru branduri din Chișinău, Moldova și România.",
    keywords: [
      "creare website Chișinău",
      "SMM Chișinău",
      "branding Moldova",
      "logo design Chișinău",
      "chatbot AI Moldova",
      "automatizări AI",
    ],
  },
  en: {
    title: "Vilm Group — Websites, SMM, Branding & AI in Chișinău",
    description:
      "We create websites, SMM, branding, logo design, AI chatbots and automation for brands in Chișinău, Moldova, Romania and Europe.",
    keywords: [
      "website development Moldova",
      "web design Chișinău",
      "SMM Moldova",
      "branding Moldova",
      "logo design Moldova",
      "AI chatbot for business",
    ],
  },
  ru: {
    title: "Vilm Group — Сайты, SMM, брендинг и AI в Кишинёве",
    description:
      "Создаём сайты, SMM, брендинг, дизайн логотипа, AI-чатботов и автоматизацию для брендов в Кишинёве, Молдове, Румынии и Европе.",
    keywords: [
      "создание сайтов Кишинёв",
      "SMM Кишинёв",
      "брендинг Молдова",
      "дизайн логотипа Кишинёв",
      "AI чатбот для бизнеса",
      "автоматизация AI",
    ],
  },
};

export const serviceSeo: Record<
  string,
  Record<Locale, { title: string; description: string; keywords: string[] }>
> = {
  servicii: {
    ro: {
      title: "Servicii digitale în Chișinău",
      description:
        "Servicii digitale Vilm Group în Chișinău: creare website-uri, SMM, branding, logo design, chatbots AI, automatizări și conținut.",
      keywords: [
        "servicii digitale Chișinău",
        "agenție digitală Chișinău",
        "creare website Chișinău",
        "SMM Chișinău",
        "branding Moldova",
      ],
    },
    en: {
      title: "Digital Services in Chișinău",
      description:
        "Vilm Group digital services in Chișinău: website creation, SMM, branding, logo design, AI chatbots, automation and content.",
      keywords: [
        "digital agency Chișinău",
        "digital services Moldova",
        "website creation Chișinău",
        "SMM Chișinău",
        "branding Moldova",
      ],
    },
    ru: {
      title: "Digital-услуги в Кишинёве",
      description:
        "Digital-услуги Vilm Group в Кишинёве: создание сайтов, SMM, брендинг, дизайн логотипа, AI-чатботы, автоматизация и контент.",
      keywords: [
        "digital агентство Кишинёв",
        "digital услуги Молдова",
        "создание сайтов Кишинёв",
        "SMM Кишинёв",
        "брендинг Молдова",
      ],
    },
  },
  "creare-website-uri": {
    ro: {
      title: "Creare Website-uri în Chișinău",
      description:
        "Creare website-uri rapide, moderne și optimizate SEO pentru afaceri din Chișinău, Moldova și România.",
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
      title: "SMM Chișinău",
      description:
        "Servicii SMM în Chișinău: strategie social media, administrare Instagram și Facebook, content plan, vizualuri, reels și campanii.",
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
  "branding-logo-design": {
    ro: {
      title: "Branding și Logo Design",
      description:
        "Branding și logo design pentru afaceri: identitate vizuală, paletă de culori, tipografie și materiale de brand.",
      keywords: ["branding Moldova", "logo design Chișinău", "identitate vizuală Moldova"],
    },
    en: {
      title: "Branding and Logo Design",
      description:
        "Branding and logo design for businesses: visual identity, color palette, typography and brand materials.",
      keywords: ["branding Moldova", "logo design Moldova", "visual identity Chișinău"],
    },
    ru: {
      title: "Брендинг и дизайн логотипа",
      description:
        "Брендинг и дизайн логотипа для бизнеса: визуальная айдентика, палитра цветов, типографика и бренд-материалы.",
      keywords: ["брендинг Молдова", "дизайн логотипа Кишинёв", "визуальная айдентика"],
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
