"use client";

import Link from "next/link";
import AssistantRobot from "@/components/AssistantRobot";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import Navbar from "@/components/Navbar";
import ScrollPathLine from "@/components/ScrollPathLine";
import { getServicePage, type ServicePage } from "@/data/servicePages";
import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/config";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vilmgroup.md"
).replace(/\/$/, "");

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
      description: "We create fast, modern and SEO-ready websites for businesses in Chișinău, Moldova and Romania: presentation websites, landing pages, portfolios and service websites.",
      heroPoints: ["Clear structure for services, portfolio, offers and contact.", "Premium design adapted to your brand identity.", "Basic technical SEO: metadata, sitemap, performance and correct indexing."],
      benefits: ["Fast, responsive website that works well on mobile.", "Copy and structure focused on quote requests, not only visuals.", "Form, social media, tracking and optional AI chatbot integration.", "Ready for Google Search Console and correct indexing."],
      process: ["We clarify the goal, services and target audience.", "We build the page structure and main messages.", "We design and develop the responsive interface.", "We optimize technical SEO, test performance and prepare launch."],
      faqs: [["How long does website creation take?", "A presentation website can be ready in a few weeks, depending on content, sections and functionality."], ["Will the website be optimized for Google?", "Yes. We implement metadata, sitemap, semantic structure, good performance and content aligned with relevant searches."], ["Can you add an AI chatbot?", "Yes. We can integrate an AI assistant that answers visitors and guides them toward an offer or contact."]].map(([question, answer]) => ({ question, answer })),
    },
    "smm-chisinau": {
      eyebrow: "SMM · Content · Campaigns",
      title: "SMM in Chișinău for brands that need consistent presence and strong content.",
      shortTitle: "SMM Chișinău",
      description: "SMM services in Chișinău: strategy, Instagram and Facebook management, content plan, copy, visuals, reels and campaigns for local brands.",
      heroPoints: ["Social media strategy adapted to your niche and goals.", "Content plan, copy, visuals and reels ideas.", "Consistent presence on Instagram, Facebook and relevant channels."],
      benefits: ["Consistent and professional communication with your audience.", "Visual content connected to your brand identity.", "Clear messages for services, products, offers and campaigns.", "Regular analysis and performance-based adjustments."],
      process: ["We analyze the brand, competitors and target audience.", "We define content pillars and visual direction.", "We create the editorial calendar, copy and visuals.", "We publish, monitor and optimize communication."],
      faqs: [["What does SMM management include?", "It can include strategy, editorial calendar, post design, copy, reels, stories, campaigns and reporting."], ["Do you work only with brands from Chișinău?", "No. We work with brands from Moldova, Romania and the diaspora."], ["Do you create video content for reels?", "Yes. We can create concepts, scripts, editing and direction for vertical video content."]].map(([question, answer]) => ({ question, answer })),
    },
    "branding-logo-design": {
      eyebrow: "Logo · Identity · Visual system",
      title: "Branding and logo design for businesses that want a memorable image.",
      shortTitle: "Branding & Logo",
      description: "We create logos, visual identity, color palettes, typography, brand materials and visual direction for businesses in Moldova and Romania.",
      heroPoints: ["Logo and visual identity built strategically, not decoratively.", "A coherent system for social media, website, print and campaigns.", "Visual direction that makes the brand recognizable."],
      benefits: ["A brand that is easier to recognize and remember.", "Coherent visuals across digital channels.", "Materials ready for social media, website and presentations.", "A solid base for campaigns, content and growth."],
      process: ["We understand positioning, audience and brand personality.", "We explore visual directions and choose the right route.", "We build the logo, colors, fonts and graphic elements.", "We prepare visual applications and usage recommendations."],
      faqs: [["Do I receive only a logo or a complete identity?", "We can work only on the logo, but recommend a complete identity for consistency."], ["Do you redesign existing logos?", "Yes. We can modernize an existing logo or rebuild the visual identity."], ["Can branding be used for SMM?", "Yes. We build the visual system so it can be applied in posts, stories, reels and campaigns."]].map(([question, answer]) => ({ question, answer })),
    },
    "chatbots-ai": {
      eyebrow: "AI · Chatbots · Automation",
      title: "AI chatbots and automation for websites and business workflows.",
      shortTitle: "AI chatbots",
      description: "We implement AI chatbots, custom assistants and automation for customer support, sales, content and internal processes.",
      heroPoints: ["AI assistant connected to your clients’ real questions.", "Fast answers for services, offers, bookings and contact.", "Automation for content, support, leads and internal workflow."],
      benefits: ["Visitors get immediate answers without waiting for a manual reply.", "You can collect quote requests and questions directly from the website.", "The chatbot can speak in the brand voice and guide users to contact.", "AI can support the team with copy, ideas, scripts and repetitive processes."],
      process: ["We define what the assistant must know and do.", "We prepare prompts, rules, messages and main flows.", "We integrate the chatbot into the website.", "We test answers, adjust tone and launch carefully."],
      faqs: [["Can the chatbot answer about my services?", "Yes. We configure it with brand information, services, tone of voice and response rules."], ["Do I need an OpenAI account?", "For an OpenAI-based chatbot, an API key must be configured securely on the server."], ["Can the chatbot send users to Telegram or a form?", "Yes. It can guide users to offer, form, Telegram, WhatsApp or other relevant channels."]].map(([question, answer]) => ({ question, answer })),
    },
  },
};

localizedServices.ru = {
  "creare-website-uri": {
    eyebrow: "Web design · SEO · Конверсия",
    title: "Создание сайтов для брендов, которые хотят быть найденными и выбранными.",
    shortTitle: "Создание сайтов",
    description: "Создаём быстрые современные сайты с SEO-подготовкой для бизнеса в Кишинёве, Молдове и Румынии: сайты-презентации, landing pages, портфолио и сайты услуг.",
    heroPoints: ["Понятная структура для услуг, портфолио, предложений и контакта.", "Премиальный дизайн, адаптированный к айдентике бренда.", "Базовое техническое SEO: metadata, sitemap, performance и корректная индексация."],
    benefits: ["Быстрый responsive-сайт, удобный на телефоне.", "Copy и структура, ориентированные на заявки, не только на внешний вид.", "Интеграция формы, соцсетей, tracking и AI-чатбота по необходимости.", "Подготовка к Google Search Console и корректной индексации."],
    process: ["Определяем цель, услуги и аудиторию.", "Строим структуру страниц и основные сообщения.", "Дизайним и разрабатываем responsive-интерфейс.", "Оптимизируем техническое SEO, тестируем performance и готовим запуск."],
    faqs: [["Сколько занимает создание сайта?", "Сайт-презентация может быть готов за несколько недель, в зависимости от контента, секций и функционала."], ["Сайт будет оптимизирован для Google?", "Да. Мы внедряем metadata, sitemap, семантическую структуру, хорошую производительность и релевантный контент."], ["Можно добавить AI-чатбот?", "Да. Мы можем интегрировать AI-ассистента, который отвечает посетителям и ведёт их к заявке или контакту."]].map(([question, answer]) => ({ question, answer })),
  },
  "smm-chisinau": {
    eyebrow: "SMM · Контент · Кампании",
    title: "SMM в Кишинёве для брендов, которым нужна стабильная коммуникация и сильный контент.",
    shortTitle: "SMM Кишинёв",
    description: "SMM-услуги в Кишинёве: стратегия, ведение Instagram и Facebook, content plan, тексты, визуалы, reels и кампании для локальных брендов.",
    heroPoints: ["Social media strategy, адаптированная к нише и целям.", "Content plan, тексты, визуалы и идеи для reels.", "Целостное присутствие в Instagram, Facebook и релевантных каналах."],
    benefits: ["Постоянная и профессиональная коммуникация с аудиторией.", "Визуальный контент, связанный с айдентикой бренда.", "Понятные сообщения для услуг, продуктов, офферов и кампаний.", "Регулярный анализ и корректировки по результатам."],
    process: ["Анализируем бренд, конкурентов и аудиторию.", "Определяем контент-пиллары и визуальное направление.", "Создаём editorial calendar, тексты и визуалы.", "Публикуем, мониторим и оптимизируем коммуникацию."],
    faqs: [["Что входит в SMM-ведение?", "Стратегия, editorial calendar, дизайн постов, тексты, reels, stories, кампании и отчётность в зависимости от пакета."], ["Вы работаете только с Кишинёвом?", "Нет. Мы работаем с брендами из Молдовы, Румынии и диаспоры."], ["Делаете видео для reels?", "Да. Мы можем создавать концепции, сценарии, монтаж и direction для вертикального видео."]].map(([question, answer]) => ({ question, answer })),
  },
  "branding-logo-design": {
    eyebrow: "Логотип · Айдентика · Визуальная система",
    title: "Брендинг и дизайн логотипа для бизнеса, которому нужен запоминающийся образ.",
    shortTitle: "Брендинг & Logo",
    description: "Создаём логотипы, визуальную айдентику, палитру цветов, типографику, бренд-материалы и визуальное направление для бизнеса в Молдове и Румынии.",
    heroPoints: ["Логотип и айдентика, построенные стратегически, а не декоративно.", "Целостная система для соцсетей, сайта, печати и кампаний.", "Визуальное направление, которое делает бренд узнаваемым."],
    benefits: ["Бренд легче узнавать и запоминать.", "Единые визуалы во всех digital-каналах.", "Материалы готовы для соцсетей, сайта и презентаций.", "Сильная база для кампаний, контента и роста."],
    process: ["Понимаем позиционирование, аудиторию и характер бренда.", "Исследуем визуальные направления и выбираем правильный путь.", "Создаём логотип, цвета, шрифты и графические элементы.", "Готовим визуальные применения и рекомендации."],
    faqs: [["Я получаю только логотип или полную айдентику?", "Можем сделать только логотип, но для целостности рекомендуем полную айдентику."], ["Делаете редизайн существующего логотипа?", "Да. Мы можем модернизировать логотип или перестроить визуальную айдентику."], ["Брендинг можно использовать для SMM?", "Да. Мы строим систему так, чтобы её можно было применять в постах, stories, reels и кампаниях."]].map(([question, answer]) => ({ question, answer })),
  },
  "chatbots-ai": {
    eyebrow: "AI · Chatbots · Автоматизация",
    title: "AI-чатботы и автоматизация для сайтов и бизнес-процессов.",
    shortTitle: "AI-чатботы",
    description: "Внедряем AI-чатботов, персональных ассистентов и автоматизацию для поддержки клиентов, продаж, контента и внутренних процессов.",
    heroPoints: ["AI-ассистент, подключённый к реальным вопросам клиентов.", "Быстрые ответы об услугах, офферах, записи и контактах.", "Автоматизация для контента, поддержки, лидов и внутренних workflow."],
    benefits: ["Посетители получают быстрый ответ без ожидания ручного сообщения.", "Можно собирать заявки и вопросы прямо с сайта.", "Чатбот говорит в тоне бренда и ведёт пользователя к контакту.", "AI помогает команде с текстами, идеями, сценариями и повторяющимися процессами."],
    process: ["Определяем, что ассистент должен знать и делать.", "Готовим prompts, правила, сообщения и основные сценарии.", "Интегрируем чатбота на сайт.", "Тестируем ответы, корректируем тон и запускаем аккуратно."],
    faqs: [["Чатбот может отвечать о моих услугах?", "Да. Мы настраиваем его на информацию бренда, услуги, tone of voice и правила ответа."], ["Нужен аккаунт OpenAI?", "Для чатбота на OpenAI нужен API key, безопасно настроенный на сервере."], ["Может вести пользователя в Telegram или форму?", "Да. Он может направлять к офферу, форме, Telegram, WhatsApp или другим каналам."]].map(([question, answer]) => ({ question, answer })),
  },
};

export default function ServiceLandingPage({ page }: { page: ServicePage }) {
  const { dictionary, locale } = useI18n();
  const localizedPage = localizedServices[locale]?.[page.slug] ?? page;
  const localePrefix = locale === "ro" ? "" : `/${locale}`;
  const relatedPages = page.related
    .map((slug) => getServicePage(slug))
    .filter((item): item is ServicePage => Boolean(item));
  const pageUrl = `${siteUrl}/${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: localizedPage.shortTitle,
        description: localizedPage.description,
        provider: {
          "@type": "Organization",
          name: "Vilm Group",
          url: siteUrl,
        },
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
            name: page.shortTitle,
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
      <HeroCanvas />
      <ScrollPathLine />
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
                  <Link href={`${localePrefix}/#servicii`} className="btn-ghost justify-center">
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
                    {related.shortTitle}
                  </p>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-text-soft">
                    {related.description}
                  </p>
                  <span className="mt-6 inline-flex font-display text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    {dictionary.servicePageUi.seePage} →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
