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
      description: "We create fast, modern and SEO-ready websites for businesses in Chișinău, Bălți, Cahul, Orhei and across Moldova, plus clients from Romania and the diaspora. Presentation websites, landing pages, premium portfolios and service websites with real performance in Google.",
      heroPoints: ["Clear structure for services, portfolio, offers and contact, built for conversion.", "Premium unique design adapted to your brand identity — no templates.", "Complete technical SEO: metadata, sitemap, schema, performance and correct Google indexing."],
      benefits: ["Fast, responsive website that works well on mobile, optimized for Core Web Vitals.", "Copy and structure focused on quote requests, not only visuals.", "Form, social media, tracking and optional AI chatbot integration.", "Ready for Google Search Console and correct indexing.", "Unique design adapted to your brand — every website is built from scratch, no templates.", "Local SEO optimized for Moldova: Chișinău, Bălți, Cahul, Orhei and the rest of the country.", "Fast hosting on modern infrastructure — loading under 2 seconds guaranteed.", "User manual and 30 days of technical support included."],
      process: ["We clarify the goal, services and target audience of your website.", "We research relevant keywords and local competition in Moldova and Romania.", "We build the page structure, main messages and call-to-actions.", "We design the interface in your brand style and adapt it for all devices.", "We implement content, forms, social integrations and AI chatbot if needed.", "We optimize technical SEO, test performance on Lighthouse and prepare launch."],
      faqs: [["How long does website creation take?", "A presentation website can be ready in 2-4 weeks. A more complex site with custom animations, multilingual or integrations (AI chatbot, online payments, CMS) can take 4-8 weeks, depending on scope and feedback speed."], ["How much does a website cost at Vilm Group?", "Prices start at 200€ for a presentation landing page. A service site with 5-7 sections is between 400-500€, and a premium project with complex animations, multilingual and custom integrations starts from 500€. All prices include design, development, basic SEO and 30 days of support."], ["Will the website be optimized for Google?", "Yes. We implement metadata, sitemap.xml, robots.txt, structured data (JSON-LD), semantic structure, good performance (Lighthouse 90+) and content aligned with relevant searches. We also configure Google Search Console for you."], ["Do you work with clients outside Chișinău?", "Yes. We work with businesses across Moldova (Bălți, Cahul, Orhei, Comrat, Hâncești, Ungheni), Romania (Bucharest, Iași, Cluj), Russia and the European diaspora. Communication happens entirely online via Telegram, WhatsApp or Zoom."], ["What do I receive after website launch?", "You receive the live site on your domain, access to the admin panel (if applicable), Google Search Console configured, sitemap.xml, user manual in your language and 30 days of free technical support for minor adjustments."], ["Can I update content myself after launch?", "Yes. For static sites we offer a simple editor or manual updates on request. For sites with CMS (WordPress, Sanity, Strapi) you get video training and full admin access to modify texts and images yourself."], ["How many revisions are included in the price?", "All packages include 2 major rounds of design revisions and 30 days of minor adjustments after launch. Additional changes are billed hourly or based on a clear offer, depending on complexity."], ["Can you add an AI chatbot?", "Yes. We can integrate an AI assistant that answers visitors 24/7, collects quote requests and guides users to contact, Telegram or WhatsApp. The chatbot speaks in your brand's tone."]].map(([question, answer]) => ({ question, answer })),
    },
    "smm-chisinau": {
      eyebrow: "SMM · Content · Campaigns",
      title: "SMM in Chișinău for brands that need consistent presence and strong content.",
      shortTitle: "SMM Chișinău",
      description: "SMM services in Chișinău and across Moldova: strategy, Instagram, Facebook and TikTok management, content plan, copy, visuals, reels and campaigns for local and international brands. Specialized in restaurants, salons, clinics, stores and personal brands.",
      heroPoints: ["Social media strategy adapted to your niche and brand goals.", "Content plan, copy, visuals and reels ideas — ready to publish.", "Consistent presence on Instagram, Facebook, TikTok and other relevant channels."],
      benefits: ["Consistent and professional communication with your audience.", "Visual content connected to your brand identity.", "Clear messages for services, products, offers and campaigns.", "Regular analysis and performance-based adjustments.", "Reels and vertical video content optimized for Instagram and TikTok.", "Niche-adapted strategy: restaurants, salons, clinics, stores, personal brands.", "Monthly reports with real metrics (reach, engagement, leads, followers).", "Direct communication via Telegram or WhatsApp for quick approvals."],
      process: ["We analyze the brand, local competition and target audience in Moldova/Romania.", "We define content pillars, visual direction and monthly goals.", "We create the editorial calendar, copy and visual materials.", "We produce reels, stories, photos and video content as needed.", "We publish, monitor and engage with the community.", "We report results and optimize strategy for the following month."],
      faqs: [["What does SMM management include?", "Depending on the package: strategy, monthly editorial calendar, post design, copy, reels, stories, comment and message management, paid campaigns and monthly metrics report."], ["How much do SMM services cost at Vilm Group?", "SMM packages start at 200€/month for a small brand (weekly posts + stories). The mid-range package is 400€/month (regular posts + reels + basic campaigns). The premium package starts at 500€/month (full content, reels, advanced campaigns, detailed reporting)."], ["Do you work only with brands from Chișinău?", "No. We work with brands from Chișinău, Bălți, Cahul, Orhei and across Moldova, plus Romania and the diaspora. Communication is online via Telegram, WhatsApp or Zoom."], ["Do you create video content for reels?", "Yes. We can create concepts, scripts, guided filming, editing and direction for reels, TikTok and vertical video content. Reels are the key in 2026 for organic growth."], ["What niches have you managed?", "We have experience with restaurants and cafés, beauty and aesthetic salons, dental and medical clinics, online stores, personal brands (coaches, trainers, consultants) and lifestyle brands."], ["Can I see work examples?", "Yes. We have a portfolio on our website in the Portfolio section and on our Instagram @vilm_group. We can also send more detailed case studies on request."], ["How long until I see results?", "First visible results (engagement, new followers) appear in 4-6 weeks of consistent communication. Business results (requests, sales) depend on product/service and campaign budget — usually 2-3 months."], ["Can we combine SMM with paid ads?", "Yes. We configure and manage Meta Ads (Instagram + Facebook) and TikTok Ads campaigns. The ads budget is separate from the management fee, and we recommend a minimum of 100-200€/month for effective campaigns."]].map(([question, answer]) => ({ question, answer })),
    },
    "branding-logo-design": {
      eyebrow: "Logo · Identity · Visual system",
      title: "Branding and logo design for businesses that want a memorable image.",
      shortTitle: "Branding & Logo",
      description: "We create professional logos, complete visual identity, color palettes, typography, brand materials and visual direction for businesses in Chișinău, Moldova, Romania and the diaspora. Strategic branding for startups, rebranding for existing companies and premium identities for personal brands.",
      heroPoints: ["Logo and visual identity built strategically, not decoratively.", "A coherent system for social media, website, print and campaigns.", "Visual direction that makes the brand recognizable on any channel."],
      benefits: ["A brand that is easier to recognize and remember by your audience.", "Coherent visuals across all digital and print channels.", "Materials ready for social media, website and presentations.", "A solid base for campaigns, content and long-term growth.", "Complete brand book (PDF guideline) with clear usage rules.", "Logo in multiple formats: vector (SVG, AI, EPS) + raster (PNG, JPG) for any scenario.", "Color palette, typography and mockups ready to implement.", "Revisions and adjustments included until the final approved version."],
      process: ["We understand positioning, audience and brand personality.", "We analyze local and international competition in your niche.", "We explore 2-3 visual directions and choose the right route together.", "We build the logo, colors, fonts and main graphic elements.", "We prepare mockups on business cards, social media, website and products.", "We deliver PDF brand book, final files and usage recommendations."],
      faqs: [["Do I receive only a logo or a complete identity?", "We can work only on the logo, but recommend a complete identity (logo + palette + typography + brand book) when the brand needs consistency across website, social media and materials."], ["How much does a logo or complete brand cost at Vilm Group?", "A single logo starts at 200€. A visual identity package (logo + palette + typography + mockups) is between 400-500€. A complete branding project (with strategy, extended brand book, collateral materials) starts from 500€."], ["Do you redesign existing logos?", "Yes. We can modernize an existing logo while preserving recognizable elements, or completely rebuild the visual identity, depending on rebranding goals."], ["What do I receive in the final logo files?", "You receive the logo in vector formats (AI, EPS, SVG, PDF) and raster (transparent PNG, JPG, WEBP) at multiple resolutions, plus the monochrome variant, inverted variant and simplified version for favicon/app icon."], ["How long does the brand creation process take?", "A simple logo can be ready in 1-2 weeks. A complete visual identity project with brand book takes 3-5 weeks, depending on complexity and feedback speed."], ["How many initial logo variations do I receive?", "We present 2-3 different visual directions in the first iteration. You choose a preferred one, and based on it we refine until the final version."], ["Can branding be used for SMM?", "Yes. We build the visual system so it can be easily applied in posts, stories, reels, banners and campaign materials. We can also provide editable templates for your team."], ["Do you work with individual entrepreneurs or only companies?", "We work with both. Personal brands (coaches, consultants, trainers, freelancers), startups, SMEs and established companies that want rebranding."]].map(([question, answer]) => ({ question, answer })),
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

localizedServices.ru = {
  "creare-website-uri": {
    eyebrow: "Web design · SEO · Конверсия",
    title: "Создание сайтов для брендов, которые хотят быть найденными и выбранными.",
    shortTitle: "Создание сайтов",
    description: "Создаём быстрые современные сайты с SEO-подготовкой для бизнеса в Кишинёве, Бельцах, Кагуле, Оргееве и по всей Молдове, плюс клиенты из Румынии и диаспоры. Сайты-презентации, landing pages, премиальные портфолио и сайты услуг с реальной производительностью в Google.",
    heroPoints: ["Понятная структура для услуг, портфолио, предложений и контакта, ориентированная на конверсию.", "Премиальный уникальный дизайн, адаптированный к айдентике бренда — никаких шаблонов.", "Полное техническое SEO: metadata, sitemap, schema, производительность и корректная индексация в Google."],
    benefits: ["Быстрый responsive-сайт, удобный на телефоне, оптимизированный для Core Web Vitals.", "Copy и структура, ориентированные на заявки, не только на внешний вид.", "Интеграция формы, соцсетей, tracking и AI-чатбота по необходимости.", "Полная подготовка к Google Search Console и корректной индексации.", "Уникальный дизайн под бренд — каждый сайт строится с нуля, без шаблонов.", "Локальное SEO, оптимизированное для Молдовы: Кишинёв, Бельцы, Кагул, Оргеев и вся страна.", "Быстрый хостинг на современной инфраструктуре — загрузка менее 2 секунд гарантирована.", "Руководство пользователя и 30 дней технической поддержки включены."],
    process: ["Определяем цель, услуги и целевую аудиторию сайта.", "Исследуем релевантные ключевые слова и локальную конкуренцию в Молдове и Румынии.", "Строим структуру страниц, основные сообщения и call-to-actions.", "Дизайним интерфейс в стиле бренда и адаптируем для всех устройств.", "Внедряем контент, формы, соцсети и AI-чатбот при необходимости.", "Оптимизируем техническое SEO, тестируем performance на Lighthouse и готовим запуск."],
    faqs: [["Сколько занимает создание сайта?", "Сайт-презентация может быть готов за 2-4 недели. Более сложный сайт с кастомными анимациями, мультиязычностью или интеграциями (AI-чатбот, онлайн-платежи, CMS) занимает 4-8 недель, в зависимости от scope и скорости feedback."], ["Сколько стоит сайт в Vilm Group?", "Цены начинаются от 200€ за landing page-презентацию. Сайт услуг с 5-7 секциями стоит 400-500€, а премиальный проект с комплексными анимациями, мультиязычностью и кастомными интеграциями начинается от 500€. Все цены включают дизайн, разработку, базовое SEO и 30 дней поддержки."], ["Сайт будет оптимизирован для Google?", "Да. Мы внедряем metadata, sitemap.xml, robots.txt, structured data (JSON-LD), семантическую структуру, хорошую производительность (Lighthouse 90+) и контент, ориентированный на релевантные запросы. Также настраиваем Google Search Console."], ["Работаете ли с клиентами вне Кишинёва?", "Да. Работаем с бизнесом по всей Молдове (Бельцы, Кагул, Оргеев, Комрат, Хынчешты, Унгены), Румынии (Бухарест, Яссы, Клуж), России и европейской диаспоре. Коммуникация полностью онлайн через Telegram, WhatsApp или Zoom."], ["Что получаю после запуска сайта?", "Сайт live на твоём домене, доступ к админ-панели (если применимо), настроенная Google Search Console, sitemap.xml, руководство пользователя на твоём языке и 30 дней бесплатной техподдержки для мелких корректировок."], ["Могу ли сам обновлять контент после запуска?", "Да. Для статических сайтов предлагаем простой редактор или manual updates по запросу. Для сайтов с CMS (WordPress, Sanity, Strapi) получаешь видео-training и полный доступ к админке для самостоятельного изменения текстов и изображений."], ["Сколько ревизий включено в цену?", "Все пакеты включают 2 крупные раунда ревизий дизайна и 30 дней мелких корректировок после запуска. Дополнительные изменения тарифицируются почасово или на основе чёткого предложения, в зависимости от сложности."], ["Можно добавить AI-чатбот?", "Да. Мы можем интегрировать AI-ассистента, который отвечает посетителям 24/7, собирает заявки и ведёт пользователей к контакту, Telegram или WhatsApp. Чатбот говорит в тоне твоего бренда."]].map(([question, answer]) => ({ question, answer })),
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
  "branding-logo-design": {
    eyebrow: "Логотип · Айдентика · Визуальная система",
    title: "Брендинг и дизайн логотипа для бизнеса, которому нужен запоминающийся образ.",
    shortTitle: "Брендинг & Logo",
    description: "Создаём профессиональный логотип, полную визуальную айдентику, палитру цветов, типографику, бренд-материалы и визуальное направление для бизнеса в Кишинёве, Молдове, Румынии и диаспоре. Стратегический брендинг для стартапов, ребрендинг для существующих компаний и премиальные айдентики для личных брендов.",
    heroPoints: ["Логотип и айдентика, построенные стратегически, а не декоративно.", "Целостная система для соцсетей, сайта, печати и кампаний.", "Визуальное направление, которое делает бренд узнаваемым на любом канале."],
    benefits: ["Бренд легче узнаваем и запоминаем твоей аудиторией.", "Единые визуалы во всех digital и print каналах.", "Материалы готовы для соцсетей, сайта и презентаций.", "Сильная база для кампаний, контента и долгосрочного роста.", "Полный brand book (PDF guideline) с чёткими правилами использования.", "Логотип в нескольких форматах: vector (SVG, AI, EPS) + raster (PNG, JPG) для любого сценария.", "Палитра цветов, типографика и mockups, готовые к внедрению.", "Ревизии и корректировки включены до финальной утверждённой версии."],
    process: ["Понимаем позиционирование, аудиторию и характер бренда.", "Анализируем локальную и международную конкуренцию в твоей нише.", "Исследуем 2-3 визуальных направления и выбираем правильный путь вместе.", "Создаём логотип, цвета, шрифты и основные графические элементы.", "Готовим mockups на визитках, соцсетях, сайте и продуктах.", "Поставляем PDF brand book, финальные файлы и рекомендации по использованию."],
    faqs: [["Я получаю только логотип или полную айдентику?", "Можем сделать только логотип, но для целостности рекомендуем полную айдентику (логотип + палитра + типографика + brand book), когда бренду нужна согласованность на сайте, в соцсетях и материалах."], ["Сколько стоит логотип или полный бренд в Vilm Group?", "Один логотип начинается от 200€. Пакет визуальной айдентики (логотип + палитра + типографика + mockups) — 400-500€. Полный проект брендинга (со стратегией, расширенным brand book, collateral материалами) начинается от 500€."], ["Делаете редизайн существующего логотипа?", "Да. Мы можем модернизировать существующий логотип, сохраняя узнаваемые элементы, или полностью перестроить визуальную айдентику в зависимости от целей ребрендинга."], ["Что получаю в финальных файлах логотипа?", "Получаешь логотип в векторных форматах (AI, EPS, SVG, PDF) и raster (прозрачный PNG, JPG, WEBP) в нескольких разрешениях, плюс монохромный вариант, инвертированный вариант и упрощённую версию для favicon/app icon."], ["Сколько занимает процесс создания бренда?", "Простой логотип может быть готов за 1-2 недели. Полный проект визуальной айдентики с brand book занимает 3-5 недель, в зависимости от сложности и скорости feedback."], ["Сколько начальных вариантов логотипа получаю?", "Презентуем 2-3 различных визуальных направления на первой итерации. Выбираешь предпочтительный, и на его основе делаем рафинирования до финальной версии."], ["Брендинг можно использовать для SMM?", "Да. Мы строим визуальную систему так, чтобы её можно было легко применять в постах, stories, reels, баннерах и материалах кампаний. Можем также предоставить редактируемые шаблоны для твоей команды."], ["Работаете с индивидуальными предпринимателями или только компаниями?", "Работаем с обоими. Личные бренды (коучи, консультанты, тренеры, фрилансеры), стартапы, IMM-ы и устоявшиеся компании, которые хотят ребрендинг."]].map(([question, answer]) => ({ question, answer })),
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

export default function ServiceLandingPage({ page }: { page: ServicePage }) {
  const { dictionary, locale } = useI18n();
  const localizedPage = localizedServices[locale]?.[page.slug] ?? page;
  const localePrefix = `/${locale}`;
  const relatedPages = page.related
    .map((slug) => getServicePage(slug))
    .filter((item): item is ServicePage => Boolean(item));
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
        </main>
        <Footer />
      </div>
    </div>
  );
}
