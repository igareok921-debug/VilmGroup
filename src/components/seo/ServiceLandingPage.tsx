"use client";

import Link from "next/link";
import AssistantRobot from "@/components/AssistantRobot";
import DesktopVisualEffects from "@/components/DesktopVisualEffects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingPackages, {
  type PricingPackage,
} from "@/components/seo/PricingPackages";
import { getBlogPost, getLocalizedBlogPost } from "@/data/blogPosts";
import { getPortfolioProject } from "@/data/portfolioProjects";
import { getServicePage, type ServicePage } from "@/data/servicePages";
import { useI18n } from "@/i18n/I18nProvider";
import { siteUrl, type Locale } from "@/i18n/config";

const localizedServices: Partial<
  Record<
    Locale,
    Record<string, Pick<ServicePage, "eyebrow" | "title" | "shortTitle" | "description" | "heroPoints" | "benefits" | "process" | "faqs">>
  >
> = {
  en: {
    "creare-website-uri": {
      eyebrow: "Web design · SEO · Conversion",
      title: "Website creation for brands that want to be found and chosen.",
      shortTitle: "Website creation",
      description: "We create fast, modern and SEO-ready websites for businesses in Chișinău, Bălți, Cahul, Orhei and across Moldova, plus clients from Romania and the diaspora. Presentation websites, landing pages, premium portfolios and service websites with real performance in Google.",
      heroPoints: ["Clear structure for services, portfolio, offers and contact, built for conversion.", "Premium custom UI/UX — no generic templates.", "Complete technical SEO: metadata, sitemap, schema, performance and correct Google indexing."],
      benefits: ["Fast, responsive website that works well on mobile, optimized for Core Web Vitals.", "Copy and structure focused on quote requests, not only visuals.", "Form, social media, tracking and optional AI chatbot integration.", "Ready for Google Search Console and correct indexing.", "Unique design adapted to your brand — every website is built from scratch, no templates.", "Local SEO optimized for Moldova: Chișinău, Bălți, Cahul, Orhei and the rest of the country.", "Fast hosting on modern infrastructure — loading under 2 seconds guaranteed.", "User manual and 30 days of technical support included."],
      process: ["We clarify the goal, services and target audience of your website.", "We research relevant keywords and local competition in Moldova and Romania.", "We build the page structure, main messages and call-to-actions.", "We design the interface around your business goals and adapt it for all devices.", "We implement content, forms, social integrations and AI chatbot if needed.", "We optimize technical SEO, test performance on Lighthouse and prepare launch."],
      faqs: [["How long does website creation take?", "A landing page can be delivered in 3-5 days, Website Business in 1-3 weeks and Website Premium in 3-6 weeks, depending on content and feedback."], ["How much does a website cost at Vilm Group?", "Landing Page starts at €150, Website Business at €499 and Website Premium at €999. The final quote depends on page count, languages and integrations."], ["Will the website be optimized for Google?", "Yes. We implement metadata, sitemap.xml, robots.txt, structured data, semantic structure, performance optimization and relevant SEO foundations."], ["Do you work with clients outside Chișinău?", "Yes. We work with businesses across Moldova, Romania and Europe. Communication is handled online through Telegram, WhatsApp or Zoom."], ["What do I receive after website launch?", "You receive the live website on your domain, analytics and Search Console where included, plus post-launch technical support according to your package."], ["How many revisions are included in the price?", "All packages include two major design revision rounds. Additional changes are quoted separately depending on complexity."], ["Can you add an AI chatbot?", "Yes. Website Premium can include an AI assistant for 24/7 answers, lead collection and routing users to contact, Telegram or WhatsApp."]].map(([question, answer]) => ({ question, answer })),
    },
    "smm-chisinau": {
      eyebrow: "SMM · Content · Campaigns",
      title: "SMM in Chișinău for brands that need consistent presence and strong content.",
      shortTitle: "SMM Chișinău",
      description: "SMM services in Chișinău and across Moldova: strategy, Instagram, Facebook and TikTok management, content plan, copy, visuals, reels and campaigns for local and international brands. Specialized in restaurants, salons, clinics, stores and personal brands.",
      heroPoints: ["Social media strategy adapted to your niche and brand goals.", "Content plan, copy, visuals and reels ideas — ready to publish.", "Consistent presence on Instagram, Facebook, TikTok and other relevant channels."],
      benefits: ["Consistent and professional communication with your audience.", "Coherent visual content across social channels.", "Clear messages for services, products, offers and campaigns.", "Regular analysis and performance-based adjustments.", "Reels and vertical video content optimized for Instagram and TikTok.", "Niche-adapted strategy: restaurants, salons, clinics, stores, personal brands.", "Monthly reports with real metrics (reach, engagement, leads, followers).", "Direct communication via Telegram or WhatsApp for quick approvals."],
      process: ["We analyze the brand, local competition and target audience in Moldova/Romania.", "We define content pillars, visual direction and monthly goals.", "We create the editorial calendar, copy and visual materials.", "We produce reels, stories, photos and video content as needed.", "We publish, monitor and engage with the community.", "We report results and optimize strategy for the following month."],
      faqs: [["What does SMM management include?", "Depending on the package: strategy, monthly editorial calendar, post design, copy, reels, stories, comment and message management, paid campaigns and monthly metrics report."], ["How much do SMM services cost at Vilm Group?", "SMM packages start at 200€/month for a small brand (weekly posts + stories). The mid-range package is 400€/month (regular posts + reels + basic campaigns). The premium package starts at 500€/month (full content, reels, advanced campaigns, detailed reporting)."], ["Do you work only with brands from Chișinău?", "No. We work with brands from Chișinău, Bălți, Cahul, Orhei and across Moldova, plus Romania and the diaspora. Communication is online via Telegram, WhatsApp or Zoom."], ["Do you create video content for reels?", "Yes. We can create concepts, scripts, guided filming, editing and direction for reels, TikTok and vertical video content. Reels are the key in 2026 for organic growth."], ["What niches have you managed?", "We have experience with restaurants and cafés, beauty and aesthetic salons, dental and medical clinics, online stores, personal brands (coaches, trainers, consultants) and lifestyle brands."], ["Can I see work examples?", "Yes. We have a portfolio on our website in the Portfolio section and on our Instagram @vilm_group. We can also send more detailed case studies on request."], ["How long until I see results?", "First visible results (engagement, new followers) appear in 4-6 weeks of consistent communication. Business results (requests, sales) depend on product/service and campaign budget — usually 2-3 months."], ["Can we combine SMM with paid ads?", "Yes. We configure and manage Meta Ads (Instagram + Facebook) and TikTok Ads campaigns. The ads budget is separate from the management fee, and we recommend a minimum of 100-200€/month for effective campaigns."]].map(([question, answer]) => ({ question, answer })),
    },
    "chatbots-ai": {
      eyebrow: "AI · Chatbots · Automation",
      title: "AI chatbots for websites and customer support workflows.",
      shortTitle: "AI chatbots",
      description: "We implement AI chatbots and custom assistants for customer support, quote collection and conversation automation for businesses in Chișinău, Moldova and Romania. Solutions for clinics, online stores, restaurants and service brands.",
      heroPoints: ["AI assistant connected to your clients' real questions.", "Fast answers for services, offers, bookings and contact.", "Available 24/7 — no client lost overnight or on weekends."],
      benefits: ["Visitors get immediate answers without waiting for a manual reply.", "You can collect quote requests and questions directly from the website.", "The chatbot can speak in the brand voice and guide users to contact.", "AI can support the team with copy, ideas and repetitive responses.", "24/7 availability — responds even outside working hours.", "Replies in Romanian, English or Russian depending on the visitor.", "Integration with Telegram, WhatsApp or contact forms for qualified leads."],
      process: ["We define what the assistant must know and do.", "We map conversation flows and key responses.", "We prepare prompts, rules, messages and fallbacks.", "We integrate the chatbot into the website with the right interface.", "We test answers with real scenarios and adjust tone.", "We launch carefully and monitor first conversations for optimization."],
      faqs: [["Can the chatbot answer about my services?", "Yes. We configure it with brand information, services, prices, tone of voice and response rules. The more documentation you provide, the more accurate it is."], ["How much does an AI chatbot cost at Vilm Group?", "A basic chatbot (answers based on simple documentation, integrated on website) starts at 200€. A mid-range chatbot (with conversation flows, CRM/email integration, multilingual) is between 400-500€. A complex AI assistant (with custom logic, multiple integrations, continuous training) starts from 500€."], ["Do I need an OpenAI account?", "For a chatbot based on OpenAI or Anthropic, an API key must be securely configured on the server, not exposed publicly in the browser. We help with account setup if needed."], ["Can the chatbot send users to Telegram or a form?", "Yes. It can guide users to offers, forms, Telegram, WhatsApp or other relevant channels, depending on visitor intent."], ["In how many languages can the chatbot speak?", "The chatbot can be configured to respond in Romanian, English, Russian, Ukrainian or any other languages relevant to your market. It automatically detects visitor language."], ["What types of businesses does it work best for?", "We most often implement chatbots for: clinics and offices (appointments, treatment questions), online stores (stock, prices, delivery), restaurants (menu, reservations), agencies and consultants (lead qualification), companies with high volume of repetitive requests."], ["How long does chatbot implementation take?", "A basic chatbot can be ready in 1-2 weeks. A mid-range one with custom flows and integrations takes 2-4 weeks. A complex project can reach 4-6 weeks with extended testing."]].map(([question, answer]) => ({ question, answer })),
    },
  },
};

const relevantArticleByService: Record<string, string> = {
  "creare-website-uri": "cat-costa-un-website-in-moldova-2026",
  "smm-chisinau": "cat-costa-smm-chisinau-2026",
  "chatbots-ai": "ai-chatbot-cind-merita",
};

const proofProjectsByService: Record<string, string[]> = {
  "creare-website-uri": [
    "carocakes",
    "the-visibility-summit",
    "vilm-seo-ai",
  ],
};

type PricingSection = {
  title: string;
  eyebrow: string;
  description: string;
  packages: PricingPackage[];
  trustText?: string;
  additionalServices?: string[];
  popularLabel: string;
  additionalServicesTitle: string;
  ctaLabel: string;
};

const pricingByLocale: Record<Locale, Partial<Record<string, PricingSection>>> = {
  ro: {
    "creare-website-uri": {
    eyebrow: "Investiție clară",
    title: "Pachete Website",
    description:
      "Alege nivelul potrivit pentru obiectivul, complexitatea și etapa actuală a afacerii tale.",
    trustText: "Peste 80% dintre clienții noștri aleg Website Business.",
    popularLabel: "Cel mai popular",
    additionalServicesTitle: "Servicii suplimentare disponibile",
    ctaLabel: "Solicită ofertă",
    additionalServices: [
      "Creare Magazin Online",
      "Campanii Google Ads",
      "Campanii Meta Ads",
      "Automatizări AI personalizate",
      "Integrare CRM",
      "Copywriting",
      "Mentenanță lunară",
    ],
    packages: [
      {
        name: "Landing Page",
        price: "de la 150€",
        delivery: "🚀 Livrare: 3-5 zile",
        description: "Perfect pentru lansări, servicii și campanii.",
        features: [
          "UI/UX Design",
          "1 pagină",
          "Responsive Mobile & Desktop",
          "Formular contact",
          "WhatsApp & Telegram",
          "SEO Basic",
          "SSL Security",
          "Publicare pe domeniu",
          "Optimizare viteză",
        ],
      },
      {
        name: "Website Business",
        price: "de la 499€",
        delivery: "⭐ Livrare: 1-3 săptămâni",
        description: "Recomandat pentru majoritatea afacerilor.",
        features: [
          "Tot din Landing Page",
          "Până la 7 pagini",
          "Direcție UI inclusă",
          "Google Business Profile",
          "Google Analytics",
          "Google Search Console",
          "SEO Local",
          "Formulare avansate",
        ],
        popular: true,
      },
      {
        name: "Website Premium",
        price: "de la 999€",
        delivery: "👑 Livrare: 3-6 săptămâni",
        description: "Pentru companii care vor performanță și scalare.",
        features: [
          "Tot din Business",
          "Design personalizat",
          "Multilingv",
          "AI Chatbot",
          "Automatizări",
          "SEO Avansat",
          "Suport prioritar",
        ],
      },
    ],
    },
    "smm-chisinau": {
      eyebrow: "Investiție lunară clară",
      title: "Pachete SMM Chișinău",
      description:
        "Alege nivelul de administrare potrivit ritmului de publicare, volumului de video și obiectivelor de promovare.",
      trustText:
        "Bugetul pentru Meta Ads sau TikTok Ads se stabilește și se achită separat de administrarea lunară.",
      popularLabel: "Recomandat",
      additionalServicesTitle: "Servicii opționale",
      ctaLabel: "Solicită planul SMM",
      packages: [
        {
          name: "SMM Start",
          price: "de la 200€/lună",
          description:
            "Pentru branduri mici care au nevoie de prezență constantă și o direcție coerentă.",
          features: [
            "Direcție și piloni de conținut",
            "Calendar editorial lunar",
            "Postări săptămânale și stories",
            "Texte și design pentru postări",
            "Raport lunar de bază",
          ],
        },
        {
          name: "SMM Growth",
          price: "de la 400€/lună",
          description:
            "Pentru afaceri care vor conținut regulat, Reels și optimizare continuă.",
          features: [
            "Tot ce include SMM Start",
            "Postări și stories regulate",
            "Concepte, scripturi și editare Reels",
            "Campanii Meta Ads de bază",
            "Analiză și ajustări lunare",
          ],
          popular: true,
        },
        {
          name: "SMM Premium",
          price: "de la 500€/lună",
          description:
            "Pentru branduri care au nevoie de producție completă și campanii active.",
          features: [
            "Strategie și content complet",
            "Reels și conținut video vertical",
            "Administrarea campaniilor avansate",
            "Monitorizare și optimizare",
            "Raportare detaliată",
          ],
        },
      ],
    },
    "creare-magazin-online": {
    eyebrow: "Ecommerce scalabil",
    title: "Pachete Magazin Online",
    description:
      "Trei niveluri de implementare, de la primul catalog cu plăți până la un ecosistem ecommerce personalizat.",
    popularLabel: "Cel mai popular",
    additionalServicesTitle: "Servicii suplimentare disponibile",
    ctaLabel: "Solicită ofertă",
    packages: [
      {
        name: "Magazin Online Start",
        price: "de la 800€",
        description:
          "Pentru afaceri care lansează primul magazin și au nevoie de un flux de cumpărare simplu.",
        features: [
          "Catalog și categorii de produse",
          "Checkout și plăți online",
          "Administrare comenzi și stocuri",
          "SEO ecommerce de bază",
        ],
      },
      {
        name: "Magazin Online Business",
        price: "de la 1400€",
        description:
          "Pentru magazine cu mai multe produse, campanii active și nevoi de automatizare.",
        features: [
          "Filtre, promoții și variante produse",
          "Automatizări email și notificări",
          "Analytics și optimizare conversii",
          "Integrări livrare și facturare",
        ],
        popular: true,
      },
      {
        name: "Magazin Online Premium",
        price: "de la 1900€",
        description:
          "Pentru proiecte ecommerce complexe, cu design și funcționalități dezvoltate personalizat.",
        features: [
          "Experiență și design complet custom",
          "Integrări CRM, ERP sau API",
          "Automatizări și logică avansată",
          "Scalare, securitate și suport extins",
        ],
      },
    ],
    },
  },
  en: {
    "creare-website-uri": {
      eyebrow: "Clear investment",
      title: "Website Packages",
      description:
        "Choose the right level for your goals, project complexity and current business stage.",
      trustText: "Over 80% of our clients choose Website Business.",
      popularLabel: "Most popular",
      additionalServicesTitle: "Additional services available",
      ctaLabel: "Request a quote",
      additionalServices: [
        "Online Store Development",
        "Google Ads Campaigns",
        "Meta Ads Campaigns",
        "Custom AI Automation",
        "CRM Integration",
        "Copywriting",
        "Monthly Maintenance",
      ],
      packages: [
        {
          name: "Landing Page",
          price: "from €150",
          delivery: "🚀 Delivery: 3-5 days",
          description: "Perfect for launches, services and campaigns.",
          features: [
            "UI/UX Design",
            "1 page",
            "Responsive Mobile & Desktop",
            "Contact Form",
            "WhatsApp & Telegram",
            "Basic SEO",
            "SSL Security",
            "Domain Publishing",
            "Speed Optimization",
          ],
        },
        {
          name: "Website Business",
          price: "from €499",
          delivery: "⭐ Delivery: 1-3 weeks",
          description: "Recommended for most businesses.",
          features: [
            "Everything in Landing Page",
            "Up to 7 pages",
            "UI direction included",
            "Google Business Profile",
            "Google Analytics",
            "Google Search Console",
            "Local SEO",
            "Advanced Forms",
          ],
          popular: true,
        },
        {
          name: "Website Premium",
          price: "from €999",
          delivery: "👑 Delivery: 3-6 weeks",
          description: "For companies focused on performance and scale.",
          features: [
            "Everything in Business",
            "Custom Design",
            "Multilingual",
            "AI Chatbot",
            "Automation",
            "Advanced SEO",
            "Priority Support",
          ],
        },
      ],
    },
    "smm-chisinau": {
      eyebrow: "Clear monthly investment",
      title: "SMM Packages in Chișinău",
      description:
        "Choose the management level that fits your publishing rhythm, video volume and campaign goals.",
      trustText:
        "Meta Ads or TikTok Ads media budgets are agreed and paid separately from the monthly management fee.",
      popularLabel: "Recommended",
      additionalServicesTitle: "Optional services",
      ctaLabel: "Request an SMM plan",
      packages: [
        {
          name: "SMM Start",
          price: "from €200/month",
          description:
            "For small brands that need a consistent presence and a coherent direction.",
          features: [
            "Content direction and pillars",
            "Monthly editorial calendar",
            "Weekly posts and stories",
            "Copy and post design",
            "Basic monthly report",
          ],
        },
        {
          name: "SMM Growth",
          price: "from €400/month",
          description:
            "For businesses that need regular content, Reels and continuous optimization.",
          features: [
            "Everything in SMM Start",
            "Regular posts and stories",
            "Reels concepts, scripts and editing",
            "Basic Meta Ads campaigns",
            "Monthly analysis and adjustments",
          ],
          popular: true,
        },
        {
          name: "SMM Premium",
          price: "from €500/month",
          description:
            "For brands that need complete production and active campaigns.",
          features: [
            "Complete strategy and content",
            "Reels and vertical video",
            "Advanced campaign management",
            "Monitoring and optimization",
            "Detailed reporting",
          ],
        },
      ],
    },
    "creare-magazin-online": {
      eyebrow: "Scalable ecommerce",
      title: "Online Store Packages",
      description:
        "Three implementation levels, from your first store with payments to a custom ecommerce ecosystem.",
      popularLabel: "Most popular",
      additionalServicesTitle: "Additional services available",
      ctaLabel: "Request a quote",
      packages: [
        {
          name: "Online Store Start",
          price: "from €800",
          description: "For businesses launching their first online store.",
          features: [
            "Product catalog and categories",
            "Checkout and online payments",
            "Order and inventory management",
            "Basic ecommerce SEO",
          ],
        },
        {
          name: "Online Store Business",
          price: "from €1,400",
          description: "For stores with active campaigns and automation needs.",
          features: [
            "Filters, promotions and product variants",
            "Email automation and notifications",
            "Analytics and conversion optimization",
            "Delivery and invoicing integrations",
          ],
          popular: true,
        },
        {
          name: "Online Store Premium",
          price: "from €1,900",
          description: "For complex ecommerce projects with custom functionality.",
          features: [
            "Fully custom experience and design",
            "CRM, ERP or API integrations",
            "Advanced automation and logic",
            "Scaling, security and extended support",
          ],
        },
      ],
    },
  },
  ru: {
    "creare-website-uri": {
      eyebrow: "Понятная инвестиция",
      title: "Пакеты сайтов",
      description:
        "Выберите подходящий уровень для целей, сложности проекта и текущего этапа бизнеса.",
      trustText: "Более 80% наших клиентов выбирают Website Business.",
      popularLabel: "Самый популярный",
      additionalServicesTitle: "Дополнительные услуги",
      ctaLabel: "Запросить предложение",
      additionalServices: [
        "Создание интернет-магазина",
        "Кампании Google Ads",
        "Кампании Meta Ads",
        "Персональная AI-автоматизация",
        "Интеграция CRM",
        "Копирайтинг",
        "Ежемесячное обслуживание",
      ],
      packages: [
        {
          name: "Landing Page",
          price: "от 150€",
          delivery: "🚀 Срок: 3-5 дней",
          description: "Идеально для запусков, услуг и кампаний.",
          features: [
            "UI/UX Design",
            "1 страница",
            "Responsive Mobile & Desktop",
            "Контактная форма",
            "WhatsApp & Telegram",
            "Базовое SEO",
            "SSL Security",
            "Публикация на домене",
            "Оптимизация скорости",
          ],
        },
        {
          name: "Website Business",
          price: "от 499€",
          delivery: "⭐ Срок: 1-3 недели",
          description: "Рекомендуем для большинства компаний.",
          features: [
            "Всё из Landing Page",
            "До 7 страниц",
            "UI-направление включено",
            "Google Business Profile",
            "Google Analytics",
            "Google Search Console",
            "Локальное SEO",
            "Расширенные формы",
          ],
          popular: true,
        },
        {
          name: "Website Premium",
          price: "от 999€",
          delivery: "👑 Срок: 3-6 недель",
          description: "Для компаний, которым нужны результат и масштабирование.",
          features: [
            "Всё из Business",
            "Индивидуальный дизайн",
            "Мультиязычность",
            "AI-чатбот",
            "Автоматизация",
            "Продвинутое SEO",
            "Приоритетная поддержка",
          ],
        },
      ],
    },
    "smm-chisinau": {
      eyebrow: "Понятная ежемесячная инвестиция",
      title: "SMM-пакеты в Кишинёве",
      description:
        "Выберите уровень ведения под частоту публикаций, объём видео и цели рекламных кампаний.",
      trustText:
        "Бюджет Meta Ads или TikTok Ads согласуется и оплачивается отдельно от ежемесячного ведения.",
      popularLabel: "Рекомендуем",
      additionalServicesTitle: "Дополнительные услуги",
      ctaLabel: "Запросить SMM-план",
      packages: [
        {
          name: "SMM Start",
          price: "от 200€/месяц",
          description:
            "Для небольших брендов, которым нужна стабильная и целостная коммуникация.",
          features: [
            "Контент-направление и рубрики",
            "Ежемесячный контент-план",
            "Еженедельные посты и stories",
            "Тексты и дизайн публикаций",
            "Базовый ежемесячный отчёт",
          ],
        },
        {
          name: "SMM Growth",
          price: "от 400€/месяц",
          description:
            "Для бизнеса, которому нужны регулярный контент, Reels и оптимизация.",
          features: [
            "Всё из SMM Start",
            "Регулярные посты и stories",
            "Концепции, сценарии и монтаж Reels",
            "Базовые кампании Meta Ads",
            "Ежемесячный анализ и корректировки",
          ],
          popular: true,
        },
        {
          name: "SMM Premium",
          price: "от 500€/месяц",
          description:
            "Для брендов, которым нужны полное производство контента и активные кампании.",
          features: [
            "Полная стратегия и контент",
            "Reels и вертикальное видео",
            "Управление продвинутыми кампаниями",
            "Мониторинг и оптимизация",
            "Подробная отчётность",
          ],
        },
      ],
    },
    "creare-magazin-online": {
      eyebrow: "Масштабируемый ecommerce",
      title: "Пакеты интернет-магазина",
      description:
        "Три уровня реализации: от первого магазина с оплатой до персональной ecommerce-системы.",
      popularLabel: "Самый популярный",
      additionalServicesTitle: "Дополнительные услуги",
      ctaLabel: "Запросить предложение",
      packages: [
        {
          name: "Интернет-магазин Start",
          price: "от 800€",
          description: "Для бизнеса, который запускает первый интернет-магазин.",
          features: [
            "Каталог и категории товаров",
            "Checkout и онлайн-платежи",
            "Управление заказами и остатками",
            "Базовое ecommerce SEO",
          ],
        },
        {
          name: "Интернет-магазин Business",
          price: "от 1400€",
          description: "Для магазинов с активными кампаниями и автоматизацией.",
          features: [
            "Фильтры, акции и варианты товаров",
            "Email-автоматизация и уведомления",
            "Analytics и оптимизация конверсий",
            "Интеграции доставки и счетов",
          ],
          popular: true,
        },
        {
          name: "Интернет-магазин Premium",
          price: "от 1900€",
          description: "Для сложных ecommerce-проектов с custom-функционалом.",
          features: [
            "Полностью индивидуальный дизайн",
            "Интеграции CRM, ERP или API",
            "Продвинутая логика и автоматизация",
            "Масштабирование, безопасность и поддержка",
          ],
        },
      ],
    },
  },
};

localizedServices.ru = {
  "creare-website-uri": {
    eyebrow: "Web design · SEO · Конверсия",
    title: "Создание сайтов для брендов, которые хотят быть найденными и выбранными.",
    shortTitle: "Создание сайтов",
    description: "Создаём быстрые современные сайты с SEO-подготовкой для бизнеса в Кишинёве, Бельцах, Кагуле, Оргееве и по всей Молдове, плюс клиенты из Румынии и диаспоры. Сайты-презентации, landing pages, премиальные портфолио и сайты услуг с реальной производительностью в Google.",
    heroPoints: ["Понятная структура для услуг, портфолио, предложений и контакта, ориентированная на конверсию.", "Премиальный уникальный дизайн, адаптированный к айдентике бренда — никаких шаблонов.", "Полное техническое SEO: metadata, sitemap, schema, производительность и корректная индексация в Google."],
    benefits: ["Быстрый responsive-сайт, удобный на телефоне, оптимизированный для Core Web Vitals.", "Copy и структура, ориентированные на заявки, не только на внешний вид.", "Интеграция формы, соцсетей, tracking и AI-чатбота по необходимости.", "Полная подготовка к Google Search Console и корректной индексации.", "Уникальный дизайн под бренд — каждый сайт строится с нуля, без шаблонов.", "Локальное SEO, оптимизированное для Молдовы: Кишинёв, Бельцы, Кагул, Оргеев и вся страна.", "Быстрый хостинг на современной инфраструктуре — загрузка менее 2 секунд гарантирована.", "Руководство пользователя и 30 дней технической поддержки включены."],
    process: ["Определяем цель, услуги и целевую аудиторию сайта.", "Исследуем релевантные ключевые слова и локальную конкуренцию в Молдове и Румынии.", "Строим структуру страниц, основные сообщения и call-to-actions.", "Дизайним интерфейс в стиле бренда и адаптируем для всех устройств.", "Внедряем контент, формы, соцсети и AI-чатбот при необходимости.", "Оптимизируем техническое SEO, тестируем performance на Lighthouse и готовим запуск."],
    faqs: [["Сколько занимает создание сайта?", "Landing Page может быть готов за 3-5 дней, Website Business — за 1-3 недели, а Website Premium — за 3-6 недель, в зависимости от контента и скорости обратной связи."], ["Сколько стоит сайт в Vilm Group?", "Landing Page начинается от 150€, Website Business — от 499€, а Website Premium — от 999€. Финальная цена зависит от количества страниц, языков и интеграций."], ["Сайт будет оптимизирован для Google?", "Да. Внедряем metadata, sitemap.xml, robots.txt, structured data, семантическую структуру, оптимизацию скорости и необходимую SEO-базу."], ["Работаете ли с клиентами вне Кишинёва?", "Да. Работаем с бизнесом по всей Молдове, Румынии и Европе. Коммуникация полностью онлайн через Telegram, WhatsApp или Zoom."], ["Что получаю после запуска сайта?", "Вы получаете готовый сайт на своём домене, analytics и Search Console в соответствующих пакетах, а также техническую поддержку после запуска."], ["Сколько ревизий включено в цену?", "Все пакеты включают два крупных раунда правок дизайна. Дополнительные изменения оцениваются отдельно в зависимости от сложности."], ["Можно добавить AI-чатбот?", "Да. Website Premium может включать AI-ассистента для ответов 24/7, сбора заявок и направления пользователей в форму, Telegram или WhatsApp."]].map(([question, answer]) => ({ question, answer })),
  },
  "smm-chisinau": {
    eyebrow: "SMM · Контент · Кампании",
    title: "SMM в Кишинёве для брендов, которым нужна стабильная коммуникация и сильный контент.",
    shortTitle: "SMM Кишинёв",
    description: "SMM-услуги в Кишинёве и по всей Молдове: стратегия, ведение Instagram, Facebook и TikTok, content plan, тексты, визуалы, reels и кампании для локальных и международных брендов. Специализация на ресторанах, салонах, клиниках, магазинах и личных брендах.",
    heroPoints: ["Social media strategy, адаптированная к нише и целям бренда.", "Content plan, тексты, визуалы и идеи для reels — готовые к публикации.", "Целостное присутствие в Instagram, Facebook, TikTok и других релевантных каналах."],
    benefits: ["Постоянная и профессиональная коммуникация с аудиторией.", "Визуальный контент, связанный с айдентикой бренда.", "Понятные сообщения для услуг, продуктов, офферов и кампаний.", "Регулярный анализ и корректировки по результатам.", "Reels и вертикальный видеоконтент, оптимизированный для Instagram и TikTok.", "Стратегия, адаптированная к нише: рестораны, салоны, клиники, магазины, личные бренды.", "Ежемесячные отчёты с реальными метриками (reach, engagement, leads, подписчики).", "Прямая коммуникация через Telegram или WhatsApp для быстрых одобрений."],
    process: ["Анализируем бренд, локальную конкуренцию и целевую аудиторию в Молдове/Румынии.", "Определяем контент-пиллары, визуальное направление и месячные цели.", "Создаём editorial calendar, тексты и визуальные материалы.", "Производим reels, stories, фото и видеоконтент по необходимости.", "Публикуем, мониторим и взаимодействуем с сообществом.", "Отчитываемся по результатам и оптимизируем стратегию на следующий месяц."],
    faqs: [["Что входит в SMM-ведение?", "В зависимости от пакета: стратегия, ежемесячный editorial calendar, дизайн постов, тексты, reels, stories, управление комментариями и сообщениями, платные кампании и месячный отчёт по метрикам."], ["Сколько стоят SMM-услуги в Vilm Group?", "SMM-пакеты начинаются от 200€/месяц для малого бренда (еженедельные посты + stories). Mid-range пакет — 400€/месяц (регулярные посты + reels + базовые кампании). Премиум-пакет от 500€/месяц (полный контент, reels, продвинутые кампании, детальная отчётность)."], ["Вы работаете только с Кишинёвом?", "Нет. Работаем с брендами из Кишинёва, Бельц, Кагула, Оргеева и всей Молдовы, плюс Румыния и диаспора. Коммуникация онлайн через Telegram, WhatsApp или Zoom."], ["Делаете видео для reels?", "Да. Можем создавать концепции, сценарии, направляемую съёмку, монтаж и direction для reels, TikTok и вертикального видео. Reels — ключ 2026 для органического роста."], ["С какими нишами работали?", "Имеем опыт с ресторанами и кафе, салонами красоты и эстетики, стоматологическими и медицинскими клиниками, онлайн-магазинами, личными брендами (коучи, тренеры, консультанты) и lifestyle-брендами."], ["Можно увидеть примеры работ?", "Да. Портфолио на сайте в разделе Портфолио и в нашем Instagram @vilm_group. Можем также прислать более детальные case studies по запросу."], ["Через сколько увижу результаты?", "Первые видимые результаты (engagement, новые подписчики) появляются за 4-6 недель постоянной коммуникации. Бизнес-результаты (заявки, продажи) зависят от продукта/услуги и бюджета кампаний — обычно 2-3 месяца."], ["Можем ли комбинировать SMM с платной рекламой?", "Да. Настраиваем и ведём кампании Meta Ads (Instagram + Facebook) и TikTok Ads. Бюджет рекламы отдельный от fee за ведение, рекомендуем минимум 100-200€/месяц для эффективных кампаний."]].map(([question, answer]) => ({ question, answer })),
  },
  "chatbots-ai": {
    eyebrow: "AI · Chatbots · Автоматизация",
    title: "AI-чатботы для сайтов и поддержки клиентов.",
    shortTitle: "AI-чатботы",
    description: "Внедряем AI-чатботов и персональных ассистентов для поддержки клиентов, сбора заявок и автоматизации разговоров для бизнеса в Кишинёве, Молдове и Румынии. Решения для клиник, онлайн-магазинов, ресторанов и сервисных брендов.",
    heroPoints: ["AI-ассистент, подключённый к реальным вопросам клиентов.", "Быстрые ответы об услугах, офферах, записи и контактах.", "Доступность 24/7 — ни один клиент не теряется ночью или на выходных."],
    benefits: ["Посетители получают быстрый ответ без ожидания ручного сообщения.", "Можно собирать заявки и вопросы прямо с сайта.", "Чатбот говорит в тоне бренда и ведёт пользователя к контакту.", "AI помогает команде с текстами, идеями и повторяющимися ответами.", "Доступность 24/7 — отвечает даже вне рабочего времени.", "Ответы на румынском, английском или русском, в зависимости от посетителя.", "Интеграция с Telegram, WhatsApp или формой контакта для квалифицированных лидов."],
    process: ["Определяем, что ассистент должен знать и делать.", "Картируем разговорные сценарии и ключевые ответы.", "Готовим prompts, правила, сообщения и fallbacks.", "Интегрируем чатбота на сайт с правильным интерфейсом.", "Тестируем ответы с реальными сценариями и корректируем тон.", "Запускаем аккуратно и мониторим первые разговоры для оптимизации."],
    faqs: [["Чатбот может отвечать о моих услугах?", "Да. Мы настраиваем его на информацию бренда, услуги, цены, tone of voice и правила ответа. Чем больше документации предоставишь, тем точнее он будет."], ["Сколько стоит AI-чатбот в Vilm Group?", "Базовый чатбот (ответы на основе простой документации, интегрированный на сайте) начинается от 200€. Mid-range чатбот (с разговорными сценариями, CRM/email интеграцией, мультиязычностью) — 400-500€. Сложный AI-ассистент (с custom-логикой, множественными интеграциями, непрерывным training) начинается от 500€."], ["Нужен аккаунт OpenAI?", "Для чатбота на основе OpenAI или Anthropic нужен API key, безопасно настроенный на сервере, не публично в браузере. Помогаем с настройкой аккаунта при необходимости."], ["Может вести пользователя в Telegram или форму?", "Да. Может направлять пользователя к офферу, форме, Telegram, WhatsApp или другим релевантным каналам в зависимости от намерения посетителя."], ["На скольких языках может говорить чатбот?", "Чатбот можно настроить отвечать на румынском, английском, русском, украинском или других языках, релевантных твоему рынку. Автоматически определяет язык посетителя."], ["Для каких типов бизнеса лучше всего подходит?", "Чаще всего внедряем чатботы для: клиник и кабинетов (запись, вопросы о лечении), онлайн-магазинов (наличие, цены, доставка), ресторанов (меню, бронирование), агентств и консультантов (квалификация лидов), компаний с большим объёмом повторяющихся запросов."], ["Сколько занимает внедрение чатбота?", "Базовый чатбот может быть готов за 1-2 недели. Mid-range с custom-сценариями и интеграциями — 2-4 недели. Сложный проект может достигать 4-6 недель с расширенным тестированием."]].map(([question, answer]) => ({ question, answer })),
  },
};

localizedServices.en = {
  ...localizedServices.en,
  "creare-magazin-online": {
    eyebrow: "ECOMMERCE · PAYMENTS · AUTOMATION",
    title: "Online stores built for sales and scalable growth.",
    shortTitle: "Online store development",
    description:
      "We build fast, scalable online stores for businesses in Moldova, Romania and Europe, with product management, categories, checkout, online payments, automation and SEO for commercial searches.",
    heroPoints: [
      "Simple management for products, categories, inventory and orders.",
      "Clear checkout, online payments and a conversion-focused shopping experience.",
      "Technical SEO for products and categories, analytics and sales automation.",
    ],
    benefits: [
      "Premium responsive UI/UX adapted to your business.",
      "Management for products, categories, prices, stock and promotions.",
      "Streamlined checkout and integration with suitable payment methods.",
      "Automated emails and notifications for orders and customers.",
      "Delivery, invoicing, CRM and other integrations when needed.",
      "SEO for products, categories and purchase-intent searches.",
      "Analytics for traffic, conversions, abandoned carts and product performance.",
      "Team training and technical support after launch.",
    ],
    process: [
      "We clarify the business model, catalog, market and sales goals.",
      "We define the store structure, categories, filters and purchase journey.",
      "We design the interface and checkout experience for mobile and desktop.",
      "We implement products, payments, delivery and required automation.",
      "We optimize speed, technical SEO, analytics and security.",
      "We test the complete order flow and prepare launch and team training.",
    ],
    faqs: [
      {
        question: "How much does an online store cost?",
        answer:
          "The Start package begins at €800, Business at €1,400 and a Premium store with custom functionality starts at €1,900. The final quote depends on product count and workflow complexity.",
      },
      {
        question: "Can I manage products and orders myself?",
        answer:
          "Yes. You receive access to an admin panel for products, categories, prices, inventory, promotions and orders, plus team training.",
      },
      {
        question: "Can you integrate online payments?",
        answer:
          "Yes. We integrate a payment solution suitable for your market and chosen provider, with a secure flow and automated confirmations.",
      },
      {
        question: "Will the store be optimized for mobile?",
        answer:
          "Yes. The interface, filters, product pages and checkout are designed mobile-first because most customers shop from their phones.",
      },
      {
        question: "Does it include product SEO?",
        answer:
          "Yes. We prepare the technical structure, metadata, product schema, sitemap and category pages for correct Google indexing.",
      },
      {
        question: "Can you connect delivery, CRM or invoicing?",
        answer:
          "Yes. We can integrate courier, invoicing, CRM, email marketing, analytics and other systems when suitable APIs are available.",
      },
    ],
  },
};

localizedServices.ru = {
  ...localizedServices.ru,
  "creare-magazin-online": {
    eyebrow: "ECOMMERCE · ПЛАТЕЖИ · АВТОМАТИЗАЦИЯ",
    title: "Интернет-магазины для продаж и масштабируемого роста.",
    shortTitle: "Создание интернет-магазина",
    description:
      "Создаём быстрые масштабируемые интернет-магазины для бизнеса в Молдове, Румынии и Европе: товары, категории, checkout, онлайн-платежи, автоматизация и SEO для коммерческих запросов.",
    heroPoints: [
      "Простое управление товарами, категориями, остатками и заказами.",
      "Понятный checkout, онлайн-платежи и путь покупки, оптимизированный для конверсий.",
      "Техническое SEO товаров и категорий, analytics и автоматизация продаж.",
    ],
    benefits: [
      "Премиальный responsive-дизайн в стиле вашего бренда.",
      "Управление товарами, категориями, ценами, остатками и акциями.",
      "Упрощённый checkout и интеграция подходящих способов оплаты.",
      "Автоматические email и уведомления для заказов и клиентов.",
      "Интеграции доставки, счетов, CRM и других сервисов.",
      "SEO для товаров, категорий и запросов с намерением покупки.",
      "Analytics трафика, конверсий, брошенных корзин и товаров.",
      "Обучение команды и техническая поддержка после запуска.",
    ],
    process: [
      "Уточняем бизнес-модель, каталог, рынок и цели продаж.",
      "Определяем структуру магазина, категории, фильтры и путь покупки.",
      "Проектируем интерфейс и checkout для мобильных и desktop-устройств.",
      "Внедряем товары, оплату, доставку и нужные автоматизации.",
      "Оптимизируем скорость, техническое SEO, analytics и безопасность.",
      "Тестируем полный цикл заказа и готовим запуск и обучение команды.",
    ],
    faqs: [
      {
        question: "Сколько стоит интернет-магазин?",
        answer:
          "Пакет Start начинается от 800€, Business — от 1400€, а Premium-магазин с индивидуальным функционалом — от 1900€. Финальная цена зависит от количества товаров и сложности процессов.",
      },
      {
        question: "Я смогу сам управлять товарами и заказами?",
        answer:
          "Да. Вы получите панель управления товарами, категориями, ценами, остатками, акциями и заказами, а также обучение команды.",
      },
      {
        question: "Можно подключить онлайн-платежи?",
        answer:
          "Да. Мы интегрируем подходящее для вашего рынка платёжное решение с безопасным процессом и автоматическими подтверждениями.",
      },
      {
        question: "Магазин будет оптимизирован для телефона?",
        answer:
          "Да. Интерфейс, фильтры, страницы товаров и checkout проектируются mobile-first, поскольку большинство покупателей используют телефон.",
      },
      {
        question: "Включено SEO для товаров?",
        answer:
          "Да. Мы готовим техническую структуру, metadata, schema товаров, sitemap и страницы категорий для корректной индексации Google.",
      },
      {
        question: "Можно подключить доставку, CRM или счета?",
        answer:
          "Да. Интегрируем курьерские службы, выставление счетов, CRM, email-маркетинг, analytics и другие системы при наличии API.",
      },
    ],
  },
};

export default function ServiceLandingPage({ page }: { page: ServicePage }) {
  const { dictionary, locale } = useI18n();
  const localizedPage = localizedServices[locale]?.[page.slug] ?? page;
  const localePrefix = `/${locale}`;
  const relatedPages = page.related
    .map((slug) => getServicePage(slug))
    .filter((item): item is ServicePage => Boolean(item));
  const relevantArticle = getBlogPost(relevantArticleByService[page.slug]);
  const relevantArticleContent = relevantArticle
    ? getLocalizedBlogPost(relevantArticle, locale)
    : null;
  const pricing = pricingByLocale[locale]?.[page.slug];
  const proofProjects = (proofProjectsByService[page.slug] ?? [])
    .map((slug) => getPortfolioProject(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const pageUrl = `${siteUrl}${localePrefix}/${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: localizedPage.shortTitle,
        description: localizedPage.description,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: [
          { "@type": "Country", name: "Moldova" },
          { "@type": "Country", name: "Romania" },
          { "@type": "City", name: "Chișinău" },
        ],
        serviceType: page.keywords,
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${localizedPage.shortTitle} | Vilm Group`,
        description: localizedPage.description,
        inLanguage: locale === "ro" ? "ro-MD" : locale,
        about: {
          "@id": `${pageUrl}#service`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Vilm Group",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: localizedPage.shortTitle,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: localizedPage.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-bg-0 text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DesktopVisualEffects />
      <AssistantRobot />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-36 md:grid-cols-12 md:px-10 md:pb-28 md:pt-44">
            <div className="md:col-span-4">
              <div className="sticky top-28">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                    {localizedPage.eyebrow}
                  </span>
                </div>
                <p className="mt-8 max-w-sm text-sm leading-relaxed text-text-soft">
                  {localizedPage.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col">
                  <Link href={`${localePrefix}/#contact`} className="btn-primary justify-center">
                    {dictionary.servicePageUi.quote}
                    <span aria-hidden>→</span>
                  </Link>
                  <Link href={`${localePrefix}/servicii`} className="btn-ghost justify-center">
                    {dictionary.servicePageUi.services}
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
                {localizedPage.title}
              </h1>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {localizedPage.heroPoints.map((point) => (
                  <div
                    key={point}
                    className="border border-border bg-bg-1/55 p-5 backdrop-blur-sm"
                  >
                    <span className="mb-5 block h-1.5 w-1.5 rounded-full bg-accent" />
                    <p className="text-sm leading-relaxed text-text-soft">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {pricing ? (
            <PricingPackages
              title={pricing.title}
              eyebrow={pricing.eyebrow}
              description={pricing.description}
              packages={pricing.packages}
              trustText={pricing.trustText}
              additionalServices={pricing.additionalServices}
              popularLabel={pricing.popularLabel}
              additionalServicesTitle={pricing.additionalServicesTitle}
              ctaLabel={pricing.ctaLabel}
              contactHref={`${localePrefix}/#contact`}
            />
          ) : null}

          {proofProjects.length ? (
            <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
              <div className="grid gap-8 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {locale === "ro"
                      ? "Proiecte relevante"
                      : locale === "ru"
                        ? "Релевантные проекты"
                        : "Relevant projects"}
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
                    {locale === "ro"
                      ? "Website-uri construite pentru obiective reale."
                      : locale === "ru"
                        ? "Сайты, созданные под реальные задачи."
                        : "Websites built around real objectives."}
                  </h2>
                </div>
                <p className="max-w-xl leading-relaxed text-text-soft md:col-span-5 md:justify-self-end">
                  {locale === "ro"
                    ? "Vezi problema, soluția, tehnologia și rezultatele confirmate pentru fiecare proiect."
                    : locale === "ru"
                      ? "Посмотрите задачу, решение, технологии и подтверждённые результаты каждого проекта."
                      : "See the problem, solution, technology and confirmed outcomes for each project."}
                </p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {proofProjects.map((project) => {
                  const content = project.content[locale];
                  return (
                    <Link
                      key={project.slug}
                      href={`${localePrefix}/portofoliu/${project.slug}`}
                      className="group flex min-h-full flex-col border border-border bg-bg-1/50 p-6 transition hover:border-accent hover:bg-bg-1/80 md:p-7"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                        {project.scope[locale]}
                      </p>
                      <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-text">
                        {project.client}
                      </h3>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-text-soft">
                        {content.intro}
                      </p>
                      <span className="mt-7 inline-flex font-display text-sm font-semibold text-accent transition group-hover:translate-x-1">
                        {locale === "ro"
                          ? "Vezi studiul de caz"
                          : locale === "ru"
                            ? "Смотреть кейс"
                            : "View case study"}{" "}
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : null}

          <section className="border-y border-border bg-bg-1/45">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-24">
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] tracking-[0.3em] text-accent">
                  {dictionary.servicePageUi.benefitsEyebrow}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
                  {dictionary.servicePageUi.benefitsTitle}
                </h2>
              </div>
              <div className="grid gap-4 md:col-span-8 md:grid-cols-2">
                {localizedPage.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-4 border-t border-border pt-5"
                  >
                    <span
                      aria-hidden
                      className="mt-3 h-px w-8 shrink-0 bg-accent"
                    />
                    <p className="text-base leading-relaxed text-text-soft">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent">
                {dictionary.servicePageUi.processEyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
                {dictionary.servicePageUi.processTitle}
              </h2>
            </div>
            <div className="md:col-span-8">
              <ol className="grid gap-0 border-y border-border md:grid-cols-2">
                {localizedPage.process.map((step, index) => {
                  const isRightColumn = index % 2 === 1;
                  const isLastRow = index >= localizedPage.process.length - 2;

                  return (
                  <li
                    key={step}
                    className={`border-b border-border p-6 last:border-b-0 md:border-r ${
                      isRightColumn ? "md:border-r-0" : ""
                    } ${isLastRow ? "md:border-b-0" : ""}`}
                  >
                    <span className="font-mono text-xs tracking-[0.25em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-5 text-lg leading-relaxed text-text">
                      {step}
                    </p>
                  </li>
                  );
                })}
              </ol>
            </div>
          </section>

          <section className="border-y border-border bg-bg-1/35">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-24">
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] tracking-[0.3em] text-accent">
                  {dictionary.servicePageUi.faqEyebrow}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
                  {dictionary.servicePageUi.faqTitle}
                </h2>
              </div>
              <div className="space-y-5 md:col-span-8">
                {localizedPage.faqs.map((faq) => (
                  <article key={faq.question} className="border-t border-border pt-5">
                    <h3 className="font-display text-xl font-semibold text-text">
                      {faq.question}
                    </h3>
                    <p className="mt-3 leading-relaxed text-text-soft">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                {dictionary.servicePageUi.relatedEyebrow}
              </span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedPages.map((related) => (
                <Link
                  key={related.slug}
                  href={`${localePrefix}/${related.slug}`}
                  className="group border border-border bg-bg-1/50 p-6 transition hover:border-accent hover:bg-bg-1/80"
                >
                  <p className="font-display text-2xl font-bold text-text">
                    {(localizedServices[locale]?.[related.slug] ?? related).shortTitle}
                  </p>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-text-soft">
                    {(localizedServices[locale]?.[related.slug] ?? related).description}
                  </p>
                  <span className="mt-6 inline-flex font-display text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    {dictionary.servicePageUi.seePage} →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {relevantArticle && relevantArticleContent ? (
            <section className="border-t border-border bg-bg-1/35">
              <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-16 md:grid-cols-12 md:px-10 md:py-20">
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {locale === "ro" ? "Ghid relevant" : locale === "ru" ? "Полезный гид" : "Relevant guide"}
                  </p>
                </div>
                <Link
                  href={`${localePrefix}/blog/${relevantArticle.slug}`}
                  className="group border border-border bg-bg-0/60 p-6 transition hover:border-accent md:col-span-8 md:p-8"
                >
                  <h2 className="font-display text-2xl font-bold leading-tight text-text md:text-3xl">
                    {relevantArticleContent.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-soft">
                    {relevantArticleContent.excerpt}
                  </p>
                  <span className="mt-6 inline-flex font-display text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    {locale === "ro" ? "Citește articolul" : locale === "ru" ? "Читать статью" : "Read the article"} →
                  </span>
                </Link>
              </div>
            </section>
          ) : null}
        </main>
        <Footer />
      </div>
    </div>
  );
}
