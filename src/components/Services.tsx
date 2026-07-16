"use client";

import type { MouseEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/config";
import websiteImage from "../../public/services/website-development-seo-natural.webp";
import onlineStoreImage from "../../public/services/magazin-online-natural.webp";
import socialMediaImage from "../../public/services/social-media-marketing-natural.webp";
import aiAutomationImage from "../../public/services/ai-automatizari-natural.webp";

type ServiceCard = {
  title: string;
  tagline: string;
  description: string;
  slug: string;
  image: StaticImageData;
  imageAlt: string;
  benefits: string[];
};

const servicesByLocale: Record<Locale, ServiceCard[]> = {
  ro: [
    {
      title: "Website Development & SEO",
      tagline: "WEBSITES · SEO · CONVERSIE · AI",
      description:
        "Website-uri moderne, rapide și optimizate pentru conversii, cu UI/UX, SEO și integrare AI.",
      slug: "creare-website-uri",
      image: websiteImage,
      imageAlt: "Designer lucrând la un website și un dashboard SEO într-un studio luminos",
      benefits: [
        "Strategie, structură UX și dezvoltare responsive",
        "UI/UX și direcție vizuală adaptate afacerii",
        "SEO tehnic, conținut și pregătire pentru Google",
        "Formulare, analytics și integrare chatbot AI",
      ],
    },
    {
      title: "Creare Magazine Online",
      tagline: "ECOMMERCE · PLĂȚI · AUTOMATIZĂRI",
      description:
        "Magazine online scalabile, cu administrare produse, plăți online, checkout și optimizare pentru vânzări.",
      slug: "creare-magazin-online",
      image: onlineStoreImage,
      imageAlt: "Comandă online pregătită manual lângă un laptop cu magazin ecommerce",
      benefits: [
        "Catalog produse și administrare simplă",
        "Checkout, plăți online și notificări automate",
        "Design orientat spre încredere și conversie",
        "SEO pentru produse, categorii și căutări comerciale",
      ],
    },
    {
      title: "Social Media Marketing",
      tagline: "CONTENT · REELS · ADS",
      description:
        "Strategie, conținut, reels, campanii Meta Ads și administrare social media pentru branduri în creștere.",
      slug: "smm-chisinau",
      image: socialMediaImage,
      imageAlt: "Creator filmând un produs cu telefonul într-un studio de content luminos",
      benefits: [
        "Strategie și calendar editorial",
        "Reels, content creation și graphic design",
        "Administrare Instagram, Facebook și TikTok",
        "Campanii Meta Ads și optimizare lunară",
      ],
    },
    {
      title: "AI & Automatizări",
      tagline: "CHATBOTS · AI AGENTS · WORKFLOWS",
      description:
        "Chatboți AI, asistenți personalizați și automatizări pentru suport, vânzări și procese interne.",
      slug: "chatbots-ai",
      image: aiAutomationImage,
      imageAlt: "Specialist folosind un dashboard AI cu fluxuri de automatizare",
      benefits: [
        "Chatboți AI pentru website și suport 24/7",
        "AI agents conectați la informațiile companiei",
        "Automatizări pentru lead-uri și procese repetitive",
        "Integrări cu formulare, email, CRM și Telegram",
      ],
    },
  ],
  en: [
    {
      title: "Website Development & SEO",
      tagline: "WEBSITES · SEO · CONVERSION · AI",
      description:
        "Modern, fast, conversion-focused websites with UI/UX, SEO and AI integration.",
      slug: "creare-website-uri",
      image: websiteImage,
      imageAlt: "Designer working on a website and SEO dashboard in a bright studio",
      benefits: [
        "Strategy, UX structure and responsive development",
        "UI/UX and visual direction tailored to the business",
        "Technical SEO, content and Google readiness",
        "Forms, analytics and AI chatbot integration",
      ],
    },
    {
      title: "Online Store Development",
      tagline: "ECOMMERCE · PAYMENTS · AUTOMATION",
      description:
        "Scalable online stores with product management, online payments, checkout and sales optimization.",
      slug: "creare-magazin-online",
      image: onlineStoreImage,
      imageAlt: "Online order being packed beside a laptop displaying an ecommerce store",
      benefits: [
        "Product catalog and simple management",
        "Checkout, online payments and automated notifications",
        "Design focused on trust and conversion",
        "SEO for products, categories and commercial searches",
      ],
    },
    {
      title: "Social Media Marketing",
      tagline: "CONTENT · REELS · ADS",
      description:
        "Strategy, content, reels, Meta Ads campaigns and social media management for growing brands.",
      slug: "smm-chisinau",
      image: socialMediaImage,
      imageAlt: "Creator filming a product with a phone in a bright content studio",
      benefits: [
        "Strategy and editorial calendar",
        "Reels, content creation and graphic design",
        "Instagram, Facebook and TikTok management",
        "Meta Ads campaigns and monthly optimization",
      ],
    },
    {
      title: "AI & Automation",
      tagline: "CHATBOTS · AI AGENTS · WORKFLOWS",
      description:
        "AI chatbots, custom assistants and automation for support, sales and internal processes.",
      slug: "chatbots-ai",
      image: aiAutomationImage,
      imageAlt: "Professional using an AI dashboard with connected automation workflows",
      benefits: [
        "AI chatbots for websites and 24/7 support",
        "AI agents connected to company knowledge",
        "Automation for leads and repetitive processes",
        "Integrations with forms, email, CRM and Telegram",
      ],
    },
  ],
  ru: [
    {
      title: "Разработка сайтов & SEO",
      tagline: "САЙТЫ · SEO · КОНВЕРСИИ · AI",
      description:
        "Современные быстрые сайты для конверсий с UI/UX, SEO и интеграцией AI.",
      slug: "creare-website-uri",
      image: websiteImage,
      imageAlt: "Дизайнер работает с сайтом и SEO-аналитикой в светлой студии",
      benefits: [
        "Стратегия, UX-структура и responsive-разработка",
        "UI/UX и визуальное направление под задачи бизнеса",
        "Техническое SEO, контент и подготовка для Google",
        "Формы, analytics и интеграция AI-чатбота",
      ],
    },
    {
      title: "Создание интернет-магазинов",
      tagline: "ECOMMERCE · ПЛАТЕЖИ · АВТОМАТИЗАЦИЯ",
      description:
        "Масштабируемые интернет-магазины с товарами, онлайн-платежами, checkout и оптимизацией продаж.",
      slug: "creare-magazin-online",
      image: onlineStoreImage,
      imageAlt: "Подготовка онлайн-заказа рядом с ноутбуком и интернет-магазином",
      benefits: [
        "Каталог товаров и простое управление",
        "Checkout, онлайн-платежи и автоматические уведомления",
        "Дизайн для доверия и конверсий",
        "SEO для товаров, категорий и коммерческих запросов",
      ],
    },
    {
      title: "Social Media Marketing",
      tagline: "КОНТЕНТ · REELS · РЕКЛАМА",
      description:
        "Стратегия, контент, reels, кампании Meta Ads и ведение соцсетей для растущих брендов.",
      slug: "smm-chisinau",
      image: socialMediaImage,
      imageAlt: "Создатель контента снимает продукт на телефон в светлой студии",
      benefits: [
        "Стратегия и контент-план",
        "Reels, создание контента и графический дизайн",
        "Ведение Instagram, Facebook и TikTok",
        "Кампании Meta Ads и ежемесячная оптимизация",
      ],
    },
    {
      title: "AI & Автоматизация",
      tagline: "ЧАТБОТЫ · AI-АГЕНТЫ · WORKFLOWS",
      description:
        "AI-чатботы, персональные ассистенты и автоматизация поддержки, продаж и внутренних процессов.",
      slug: "chatbots-ai",
      image: aiAutomationImage,
      imageAlt: "Специалист работает с AI-панелью и потоками автоматизации",
      benefits: [
        "AI-чатботы для сайта и поддержки 24/7",
        "AI-агенты, подключённые к информации компании",
        "Автоматизация лидов и повторяющихся процессов",
        "Интеграции с формами, email, CRM и Telegram",
      ],
    },
  ],
};

export default function Services() {
  const { dictionary, locale } = useI18n();
  const localePrefix = `/${locale}`;
  const viewService =
    locale === "ro" ? "Vezi serviciul" : locale === "ru" ? "Смотреть услугу" : "View service";
  const primaryServices = servicesByLocale[locale].filter(
    ({ slug }) => slug === "creare-website-uri" || slug === "smm-chisinau"
  );

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const currentPath = window.location.pathname.replace(/\/$/, "");

    if (currentPath !== localePrefix) return;

    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    event.preventDefault();
    window.history.replaceState(null, "", `${localePrefix}/#contact`);
    contactSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="servicii"
      className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-32"
    >
      <div className="mb-12 grid gap-8 md:mb-20 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              {dictionary.servicesSection.eyebrow}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-8"
        >
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
            {dictionary.servicesSection.titleBefore}{" "}
            <span className="italic text-accent">{dictionary.servicesSection.titleAccent}</span>
            <br />
            {dictionary.servicesSection.titleAfter}{" "}
            <span className="text-accent">{dictionary.servicesSection.titleStrong}</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base text-text-soft md:text-lg">
            {dictionary.servicesSection.text}
          </p>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {primaryServices.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
            className="group flex min-w-0 flex-col overflow-hidden border border-border bg-bg-1/45 transition-[border-color,background-color] duration-300 hover:border-accent/60 hover:bg-bg-1/70"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-1">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="scale-[1.001] transform-gpu object-cover transition-transform duration-500 ease-out will-change-transform [backface-visibility:hidden] group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-0 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <p className="font-mono text-[9px] leading-relaxed tracking-[0.19em] text-accent md:text-[10px]">
                {service.tagline}
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.025em] text-text md:text-4xl">
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-text-soft md:text-base">
                {service.description}
              </p>
              <div className="mt-7 grid gap-x-5 gap-y-3 border-t border-border pt-6 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 text-sm leading-relaxed text-text-soft">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <Link
                  href={`${localePrefix}/${service.slug}`}
                  className="btn-primary justify-center sm:flex-1"
                >
                  {viewService}
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href={`${localePrefix}/#contact`}
                  onClick={handleContactClick}
                  className="btn-ghost justify-center sm:flex-1"
                >
                  {dictionary.common.requestOffer}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
