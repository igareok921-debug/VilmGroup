import type { Locale } from "@/i18n/config";

export type PortfolioProject = {
  slug: string;
  client: string;
  year: string;
  industry: Record<Locale, string>;
  launch: Record<Locale, string>;
  scope: Record<Locale, string>;
  seoKeywords: Record<Locale, string[]>;
  liveUrl: string;
  coverImage: string;
  imageLayout: "editorial" | "wide";
  gallery: {
    src: string;
    alt: Record<Locale, string>;
    caption: Record<Locale, string>;
  }[];
  services: string[];
  content: Record<
    Locale,
    {
      eyebrow: string;
      title: string;
      intro: string;
      challengeTitle: string;
      challenge: string;
      solutionTitle: string;
      solution: string;
      resultsTitle: string;
      resultsIntro: string;
      results: string[];
      galleryTitle: string;
      servicesTitle: string;
      proofEyebrow: string;
      proofTitle: string;
      proofQuote: string;
      proofNote: string;
      proofRating?: boolean;
      visit: string;
      back: string;
      ctaEyebrow: string;
      ctaTitle: string;
      ctaText: string;
      ctaButton: string;
      labels: {
        client: string;
        industry: string;
        launch: string;
        scope: string;
        services: string;
      };
    }
  >;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "carocakes",
    client: "CaroCakes",
    year: "2026",
    industry: {
      ro: "Atelier de cofetărie",
      en: "Cake atelier",
      ru: "Кондитерская студия",
    },
    launch: { ro: "2026", en: "2026", ru: "2026" },
    scope: {
      ro: "Website · AI · SEO",
      en: "Website · AI · SEO",
      ru: "Сайт · AI · SEO",
    },
    seoKeywords: {
      ro: ["CaroCakes website", "website cofetărie Chișinău", "website development Moldova", "AI chatbot Moldova", "SEO local Chișinău", "Vilm Group portofoliu"],
      en: ["CaroCakes website", "cake business website", "website development Moldova", "AI chatbot Moldova", "local SEO Chișinău", "Vilm Group portfolio"],
      ru: ["сайт CaroCakes", "сайт кондитерской Кишинёв", "разработка сайтов Молдова", "AI чатбот Молдова", "локальное SEO Кишинёв", "портфолио Vilm Group"],
    },
    liveUrl: "https://www.carocakes.md/ro",
    coverImage: "/portfolio/carocakes/gallery.png",
    imageLayout: "editorial",
    gallery: [
      {
        src: "/portfolio/carocakes/prices.png",
        alt: {
          ro: "Pagina de prețuri CaroCakes, optimizată pentru comenzi locale",
          en: "CaroCakes pricing page, optimized for local orders",
          ru: "Страница цен CaroCakes, оптимизированная для локальных заказов",
        },
        caption: {
          ro: "Prețuri și conversie",
          en: "Pricing and conversion",
          ru: "Цены и конверсия",
        },
      },
      {
        src: "/portfolio/carocakes/blog.png",
        alt: {
          ro: "Blogul SEO CaroCakes pentru căutări și intenții de comandă",
          en: "CaroCakes SEO blog for search and order intent",
          ru: "SEO-блог CaroCakes для поиска и заказов",
        },
        caption: {
          ro: "Strategie de conținut SEO",
          en: "SEO content strategy",
          ru: "SEO-контент стратегия",
        },
      },
    ],
    services: [
      "Web Development",
      "UI/UX Design",
      "AI Chatbot Integration",
      "Technical SEO",
      "Local SEO",
      "Content Strategy",
      "Conversion Optimization",
    ],
    content: {
      ro: {
        eyebrow: "Studiu de caz · Web, AI & SEO",
        title: "Un website premium care transformă căutările în comenzi.",
        intro:
          "Pentru CaroCakes am construit o prezență digitală completă, gândită pentru vizibilitate organică, o experiență simplă și conversii reale prin website și WhatsApp.",
        challengeTitle: "Provocarea",
        challenge:
          "CaroCakes avea nevoie de mai mult decât o prezentare frumoasă. Website-ul trebuia să explice oferta, să fie ușor de găsit în căutările locale și să reducă pașii dintre inspirație și comandă.",
        solutionTitle: "Soluția",
        solution:
          "Am creat o experiență bilingvă RO/RU, cu pagini dedicate serviciilor și intențiilor locale, galerie, prețuri, blog SEO și un traseu clar către comandă. Chatbotul AI răspunde despre produse și gusturi și ghidează clientul spre alegerea potrivită.",
        resultsTitle: "Impact observabil",
        resultsIntro:
          "Fără cifre inventate: prezentăm rezultatele confirmate direct de client și de utilizarea website-ului.",
        results: [
          "Vizibilitate organică în Google",
          "Comenzi și vânzări generate prin website",
          "Proces de comandă simplificat prin WhatsApp",
        ],
        galleryTitle: "Un sistem digital, nu doar o pagină de prezentare.",
        servicesTitle: "Web, AI și SEO într-un singur ecosistem.",
        proofEyebrow: "Recenzie Google",
        proofTitle: "Clientul despre colaborare",
        proofQuote:
          "Very satisfied with their services. Everything is at a very professional level. They are not the kind of company that just does work for the sake of work, but really helps you grow. Top!",
        proofNote: "Carolina Ghimpu · Recenzie Google · 5★",
        proofRating: true,
        visit: "Vizitează website-ul",
        back: "Înapoi la portofoliu",
        ctaEyebrow: "Ai un proiect similar?",
        ctaTitle: "Construim următorul tău canal de vânzare.",
        ctaText:
          "Website, SEO și automatizări AI într-o experiență coerentă, adaptată afacerii tale.",
        ctaButton: "Discută proiectul",
        labels: {
          client: "Client",
          industry: "Industrie",
          launch: "Lansare",
          scope: "Direcție",
          services: "Servicii livrate",
        },
      },
      en: {
        eyebrow: "Case study · Web, AI & SEO",
        title: "A premium website that turns searches into orders.",
        intro:
          "For CaroCakes, we built a complete digital presence focused on organic visibility, a simple user experience and real conversions through the website and WhatsApp.",
        challengeTitle: "The challenge",
        challenge:
          "CaroCakes needed more than a beautiful presentation. The website had to explain the offer, rank for local searches and shorten the path from inspiration to order.",
        solutionTitle: "The solution",
        solution:
          "We created a bilingual RO/RU experience with dedicated service and local-intent pages, a gallery, pricing, an SEO blog and a clear path to ordering. The AI chatbot answers product and flavour questions and guides customers toward the right choice.",
        resultsTitle: "Observable impact",
        resultsIntro:
          "No invented numbers: these are outcomes confirmed by the client and the website's real use.",
        results: [
          "Organic visibility in Google",
          "Orders and sales generated through the website",
          "A simpler WhatsApp ordering flow",
        ],
        galleryTitle: "A digital system, not just a presentation page.",
        servicesTitle: "Web, AI and SEO in one ecosystem.",
        proofEyebrow: "Google review",
        proofTitle: "The client on our collaboration",
        proofQuote:
          "Very satisfied with their services. Everything is at a very professional level. They are not the kind of company that just does work for the sake of work, but really helps you grow. Top!",
        proofNote: "Carolina Ghimpu · Google review · 5★",
        proofRating: true,
        visit: "Visit the website",
        back: "Back to portfolio",
        ctaEyebrow: "Have a similar project?",
        ctaTitle: "Let’s build your next sales channel.",
        ctaText:
          "Website, SEO and AI automation in one coherent experience, shaped around your business.",
        ctaButton: "Discuss your project",
        labels: {
          client: "Client",
          industry: "Industry",
          launch: "Launch",
          scope: "Scope",
          services: "Services delivered",
        },
      },
      ru: {
        eyebrow: "Кейс · Web, AI & SEO",
        title: "Премиальный сайт, который превращает поиск в заказы.",
        intro:
          "Для CaroCakes мы создали полноценное digital-присутствие с фокусом на органическую видимость, понятный пользовательский опыт и реальные конверсии через сайт и WhatsApp.",
        challengeTitle: "Задача",
        challenge:
          "CaroCakes требовалась не просто красивая презентация. Сайт должен был понятно раскрывать предложение, появляться в локальном поиске и сокращать путь от вдохновения до заказа.",
        solutionTitle: "Решение",
        solution:
          "Мы создали двуязычный опыт RO/RU со страницами под услуги и локальные запросы, галереей, ценами, SEO-блогом и понятным переходом к заказу. AI-чатбот отвечает на вопросы о продукции и вкусах и помогает сделать выбор.",
        resultsTitle: "Подтверждённый эффект",
        resultsIntro:
          "Без выдуманных цифр: показываем результаты, подтверждённые клиентом и реальным использованием сайта.",
        results: [
          "Органическая видимость в Google",
          "Заказы и продажи через сайт",
          "Упрощённый заказ через WhatsApp",
        ],
        galleryTitle: "Digital-система, а не просто страница-презентация.",
        servicesTitle: "Web, AI и SEO в единой экосистеме.",
        proofEyebrow: "Отзыв Google",
        proofTitle: "Клиент о сотрудничестве",
        proofQuote:
          "Very satisfied with their services. Everything is at a very professional level. They are not the kind of company that just does work for the sake of work, but really helps you grow. Top!",
        proofNote: "Carolina Ghimpu · Отзыв Google · 5★",
        proofRating: true,
        visit: "Открыть сайт",
        back: "Назад к портфолио",
        ctaEyebrow: "Есть похожий проект?",
        ctaTitle: "Создадим ваш следующий канал продаж.",
        ctaText:
          "Сайт, SEO и AI-автоматизация в едином опыте, адаптированном под ваш бизнес.",
        ctaButton: "Обсудить проект",
        labels: {
          client: "Клиент",
          industry: "Сфера",
          launch: "Запуск",
          scope: "Направление",
          services: "Выполненные услуги",
        },
      },
    },
  },
  {
    slug: "vilm-seo-ai",
    client: "VILM SEO AI",
    year: "2026",
    industry: {
      ro: "Platformă SaaS pentru SEO",
      en: "SEO SaaS platform",
      ru: "SEO SaaS-платформа",
    },
    launch: {
      ro: "Beta Testing · 2026",
      en: "Beta Testing · 2026",
      ru: "Бета-тестирование · 2026",
    },
    scope: {
      ro: "SaaS · AI · SEO",
      en: "SaaS · AI · SEO",
      ru: "SaaS · AI · SEO",
    },
    seoKeywords: {
      ro: [
        "VILM SEO AI",
        "platformă SEO cu inteligență artificială",
        "SaaS SEO Moldova",
        "audit SEO automatizat",
        "AI SEO Copilot",
        "keyword research AI",
      ],
      en: [
        "VILM SEO AI",
        "AI powered SEO platform",
        "SEO SaaS platform",
        "automated SEO audit",
        "AI SEO Copilot",
        "AI keyword research",
      ],
      ru: [
        "VILM SEO AI",
        "SEO платформа с искусственным интеллектом",
        "SEO SaaS платформа",
        "автоматический SEO аудит",
        "AI SEO Copilot",
        "AI анализ ключевых слов",
      ],
    },
    liveUrl: "https://vilm-seo-ai.vercel.app",
    coverImage: "/portfolio/vilm-seo-ai/landing-light.png",
    imageLayout: "wide",
    gallery: [
      {
        src: "/portfolio/vilm-seo-ai/dashboard.png",
        alt: {
          ro: "Dashboard VILM SEO AI cu scor SEO, pagini analizate și probleme detectate",
          en: "VILM SEO AI dashboard with SEO score, analyzed pages and detected issues",
          ru: "Dashboard VILM SEO AI с SEO-оценкой, проанализированными страницами и найденными проблемами",
        },
        caption: {
          ro: "Dashboard și date SEO reale",
          en: "Dashboard and real SEO data",
          ru: "Dashboard и реальные SEO-данные",
        },
      },
      {
        src: "/portfolio/vilm-seo-ai/copilot.png",
        alt: {
          ro: "AI SEO Copilot care analizează datele reale ale website-ului",
          en: "AI SEO Copilot analyzing real website data",
          ru: "AI SEO Copilot, анализирующий реальные данные сайта",
        },
        caption: {
          ro: "AI SEO Copilot cu context centralizat",
          en: "AI SEO Copilot with centralized context",
          ru: "AI SEO Copilot с единым контекстом",
        },
      },
      {
        src: "/portfolio/vilm-seo-ai/keywords.png",
        alt: {
          ro: "Keyword research cu oportunități, priorități și clustere SEO generate cu AI",
          en: "Keyword research with AI-generated SEO opportunities, priorities and clusters",
          ru: "Анализ ключевых слов с AI-возможностями, приоритетами и SEO-кластерами",
        },
        caption: {
          ro: "Keyword research și oportunități de conținut",
          en: "Keyword research and content opportunities",
          ru: "Ключевые слова и контент-возможности",
        },
      },
      {
        src: "/portfolio/vilm-seo-ai/login-light.png",
        alt: {
          ro: "Ecranul de autentificare VILM SEO AI cu Google și email",
          en: "VILM SEO AI login screen with Google and email authentication",
          ru: "Экран входа VILM SEO AI через Google и email",
        },
        caption: {
          ro: "Autentificare și acces securizat",
          en: "Authentication and secure access",
          ru: "Авторизация и безопасный доступ",
        },
      },
    ],
    services: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "OpenAI",
      "Google Search Console API",
      "Puppeteer",
      "Vercel",
    ],
    content: {
      ro: {
        eyebrow: "Beta Testing · SaaS Project",
        title: "O platformă SEO alimentată de AI, construită dintr-un workflow real.",
        intro:
          "VILM SEO AI centralizează crawling-ul, auditul tehnic, keyword research-ul, recomandările AI, planificarea conținutului, datele Search Console și raportarea PDF într-un singur workspace.",
        challengeTitle: "De la procese fragmentate",
        challenge:
          "Workflow-urile SEO foloseau instrumente și surse de date separate. Auditul, oportunitățile de keywords, planul editorial și raportarea necesitau mult context mutat manual între platforme.",
        solutionTitle: "La un produs SaaS unificat",
        solution:
          "Am dezvoltat inițial platforma pentru proiectele VILM Group, apoi am extins-o către arhitectură multi-user. Datele reale din crawl, audit și Search Console alimentează recomandările, Copilotul SEO și generarea de pagini dedicate pentru cuvintele-cheie identificate.",
        resultsTitle: "Capabilități construite",
        resultsIntro:
          "Produsul este în Beta Testing. Prezentăm funcțiile implementate, nu metrici comerciale sau promisiuni de performanță.",
        results: [
          "Workflow SEO complet, de la crawl și audit până la raport PDF",
          "Oportunități de keywords transformate în pagini SEO și drafturi de conținut",
          "Arhitectură multi-user cu separarea organizațiilor și website-urilor",
        ],
        galleryTitle: "O experiență SaaS clară, pregătită pentru procese SEO complexe.",
        servicesTitle: "Un stack modern pentru analiză, AI și automatizare.",
        proofEyebrow: "Direcția produsului",
        proofTitle: "De la instrument intern la platformă globală.",
        proofQuote:
          "Obiectivul pe termen lung este să facem analiza SEO profesională și optimizarea asistată de AI mai accesibile și mai ușor de administrat.",
        proofNote: "VILM SEO AI · Product vision · Beta 2026",
        visit: "Deschide Live Beta",
        back: "Înapoi la portofoliu",
        ctaEyebrow: "Construiești un produs SaaS?",
        ctaTitle: "Transformăm un workflow real într-un produs scalabil.",
        ctaText:
          "De la strategie și UX până la arhitectură, integrare AI și pregătire pentru producție.",
        ctaButton: "Discută produsul",
        labels: {
          client: "Produs",
          industry: "Categorie",
          launch: "Status",
          scope: "Direcție",
          services: "Tech stack",
        },
      },
      en: {
        eyebrow: "Beta Testing · SaaS Project",
        title: "An AI-powered SEO platform built from a real workflow.",
        intro:
          "VILM SEO AI brings crawling, technical audits, keyword research, AI recommendations, content planning, Search Console data and PDF reporting into one workspace.",
        challengeTitle: "From fragmented processes",
        challenge:
          "SEO workflows relied on separate tools and data sources. Audits, keyword opportunities, editorial planning and reporting required context to be moved manually between platforms.",
        solutionTitle: "To a unified SaaS product",
        solution:
          "We first developed the platform for VILM Group projects, then expanded it into a multi-user architecture. Real crawl, audit and Search Console data powers recommendations, the SEO Copilot and dedicated page generation for identified keywords.",
        resultsTitle: "Capabilities built",
        resultsIntro:
          "The product is in Beta Testing. We present implemented capabilities, not commercial metrics or performance promises.",
        results: [
          "A complete SEO workflow from crawl and audit to PDF reporting",
          "Keyword opportunities turned into dedicated SEO pages and content drafts",
          "Multi-user architecture with organization and website isolation",
        ],
        galleryTitle: "A clear SaaS experience designed for complex SEO operations.",
        servicesTitle: "A modern stack for analysis, AI and automation.",
        proofEyebrow: "Product direction",
        proofTitle: "From an internal tool to a global platform.",
        proofQuote:
          "Our long-term goal is to make professional SEO analysis and AI-assisted optimization more accessible and easier to manage.",
        proofNote: "VILM SEO AI · Product vision · Beta 2026",
        visit: "Open Live Beta",
        back: "Back to portfolio",
        ctaEyebrow: "Building a SaaS product?",
        ctaTitle: "We turn a real workflow into a scalable product.",
        ctaText:
          "From strategy and UX to architecture, AI integration and production readiness.",
        ctaButton: "Discuss your product",
        labels: {
          client: "Product",
          industry: "Category",
          launch: "Status",
          scope: "Scope",
          services: "Tech stack",
        },
      },
      ru: {
        eyebrow: "Бета-тестирование · SaaS-проект",
        title: "SEO-платформа с AI, созданная на основе реального workflow.",
        intro:
          "VILM SEO AI объединяет crawling, технический аудит, анализ ключевых слов, AI-рекомендации, контент-планирование, данные Search Console и PDF-отчёты в одном workspace.",
        challengeTitle: "От разрозненных процессов",
        challenge:
          "SEO-workflow опирался на разные инструменты и источники данных. Аудит, ключевые возможности, контент-план и отчёты требовали вручную переносить контекст между платформами.",
        solutionTitle: "К единому SaaS-продукту",
        solution:
          "Сначала мы разработали платформу для проектов VILM Group, а затем расширили её до multi-user архитектуры. Реальные данные crawl, audit и Search Console используются для рекомендаций, SEO Copilot и генерации отдельных страниц под найденные ключевые слова.",
        resultsTitle: "Реализованные возможности",
        resultsIntro:
          "Продукт находится на этапе бета-тестирования. Мы показываем реализованные функции, а не коммерческие метрики или обещания результата.",
        results: [
          "Полный SEO-workflow от crawl и audit до PDF-отчёта",
          "Преобразование ключевых возможностей в SEO-страницы и черновики контента",
          "Multi-user архитектура с изоляцией организаций и сайтов",
        ],
        galleryTitle: "Понятный SaaS-интерфейс для сложных SEO-процессов.",
        servicesTitle: "Современный stack для анализа, AI и автоматизации.",
        proofEyebrow: "Развитие продукта",
        proofTitle: "От внутреннего инструмента к глобальной платформе.",
        proofQuote:
          "Наша долгосрочная цель — сделать профессиональный SEO-анализ и AI-оптимизацию доступнее и проще в управлении.",
        proofNote: "VILM SEO AI · Видение продукта · Beta 2026",
        visit: "Открыть Live Beta",
        back: "Назад к портфолио",
        ctaEyebrow: "Создаёте SaaS-продукт?",
        ctaTitle: "Превращаем реальный workflow в масштабируемый продукт.",
        ctaText:
          "От стратегии и UX до архитектуры, AI-интеграции и подготовки к production.",
        ctaButton: "Обсудить продукт",
        labels: {
          client: "Продукт",
          industry: "Категория",
          launch: "Статус",
          scope: "Направление",
          services: "Tech stack",
        },
      },
    },
  },
  {
    slug: "the-visibility-summit",
    client: "The Visibility Summit",
    year: "2026",
    industry: {
      ro: "Eveniment educațional",
      en: "Educational event",
      ru: "Образовательное мероприятие",
    },
    launch: {
      ro: "Live · Londra",
      en: "Live · London",
      ru: "Live · Лондон",
    },
    scope: {
      ro: "Event Website · Stripe",
      en: "Event Website · Stripe",
      ru: "Сайт события · Stripe",
    },
    seoKeywords: {
      ro: [
        "The Visibility Summit",
        "website eveniment premium",
        "website workshop Londra",
        "integrare Stripe bilete",
        "landing page eveniment",
        "Vilm Group portofoliu",
      ],
      en: [
        "The Visibility Summit",
        "premium event website",
        "London workshop website",
        "Stripe ticket integration",
        "event landing page",
        "Vilm Group portfolio",
      ],
      ru: [
        "The Visibility Summit",
        "премиальный сайт мероприятия",
        "сайт воркшопа Лондон",
        "интеграция Stripe для билетов",
        "landing page мероприятия",
        "портфолио Vilm Group",
      ],
    },
    liveUrl: "https://www.visibilitysummit.md/",
    coverImage: "/portfolio/visibilitysummit/hero.webp",
    imageLayout: "wide",
    gallery: [
      {
        src: "/portfolio/visibilitysummit/experience.webp",
        alt: {
          ro: "Secțiune editorială despre experiența practică The Visibility Summit",
          en: "Editorial section about The Visibility Summit practical experience",
          ru: "Редакционный раздел о практическом опыте The Visibility Summit",
        },
        caption: {
          ro: "Povestea și beneficiile experienței",
          en: "Experience story and benefits",
          ru: "История и преимущества события",
        },
      },
      {
        src: "/portfolio/visibilitysummit/social-media.webp",
        alt: {
          ro: "Prezentarea modulului Social Media din website-ul Visibility Summit",
          en: "Social Media module presentation on the Visibility Summit website",
          ru: "Презентация модуля Social Media на сайте Visibility Summit",
        },
        caption: {
          ro: "Prezentarea celor trei domenii educaționale",
          en: "Presentation of the three educational areas",
          ru: "Презентация трёх образовательных направлений",
        },
      },
      {
        src: "/portfolio/visibilitysummit/trainers.webp",
        alt: {
          ro: "Trainerii și organizatorii The Visibility Summit prezentați în website",
          en: "The Visibility Summit trainers and organizers presented on the website",
          ru: "Тренеры и организаторы The Visibility Summit на сайте",
        },
        caption: {
          ro: "Traineri, autoritate și încredere",
          en: "Trainers, authority and trust",
          ru: "Тренеры, авторитет и доверие",
        },
      },
      {
        src: "/portfolio/visibilitysummit/tickets.webp",
        alt: {
          ro: "Pachetele și prețurile pentru participarea la The Visibility Summit",
          en: "The Visibility Summit participation packages and pricing",
          ru: "Пакеты участия и цены The Visibility Summit",
        },
        caption: {
          ro: "Pachete, prețuri și CTA-uri de conversie",
          en: "Packages, pricing and conversion CTAs",
          ru: "Пакеты, цены и конверсионные CTA",
        },
      },
      {
        src: "/portfolio/visibilitysummit/stripe-checkout.webp",
        alt: {
          ro: "Checkout Stripe securizat pentru cumpărarea biletelor Visibility Summit",
          en: "Secure Stripe checkout for Visibility Summit ticket purchases",
          ru: "Безопасный Stripe checkout для покупки билетов Visibility Summit",
        },
        caption: {
          ro: "Checkout Stripe și plăți securizate",
          en: "Stripe checkout and secure payments",
          ru: "Stripe checkout и безопасные платежи",
        },
      },
    ],
    services: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Stripe",
      "Vercel",
    ],
    content: {
      ro: {
        eyebrow: "Studiu de caz · Event Website & Stripe",
        title: "O experiență digitală premium care transformă interesul în bilete.",
        intro:
          "Website premium realizat pentru The Visibility Summit, un workshop educațional din Londra dedicat vizibilității personale, social media și public speaking.",
        challengeTitle: "Provocarea",
        challenge:
          "Evenimentul avea nevoie de o prezență distinctă care să transmită valoarea workshopului, să construiască încredere în traineri și să explice rapid diferențele dintre pachetele de participare.",
        solutionTitle: "Soluția",
        solution:
          "Am construit o interfață premium, un layout editorial și un traseu clar de la descoperirea experienței până la cumpărarea biletului. Stripe gestionează plata online pentru pachetele Standard, Duo, Premium Experience și Business Partner, cu pagini dedicate de confirmare și anulare.",
        resultsTitle: "Ce livrează website-ul",
        resultsIntro:
          "Proiectul conectează prezentarea evenimentului, autoritatea trainerilor și procesul de plată într-o singură experiență responsive.",
        results: [
          "Prezentare premium pentru program, traineri și cele trei domenii",
          "Patru pachete de participare conectate la checkout Stripe securizat",
          "Experiență responsive, SEO tehnic și deployment pe domeniul oficial",
        ],
        galleryTitle: "Design editorial, ierarhie clară și conversie integrată.",
        servicesTitle: "Design, dezvoltare și plăți într-un singur flux.",
        proofEyebrow: "Flux de conversie",
        proofTitle: "De la primul scroll până la plata biletului.",
        proofQuote:
          "Fiecare pachet conduce către un checkout Stripe securizat, reducând pașii dintre decizia de participare și confirmarea plății.",
        proofNote: "Stripe Checkout · Standard · Duo · Premium Experience · Business Partner",
        visit: "Vizitează website-ul",
        back: "Înapoi la portofoliu",
        ctaEyebrow: "Organizezi un eveniment?",
        ctaTitle: "Construim experiența digitală care îl face memorabil.",
        ctaText:
          "Strategie, UI/UX, website și vânzare de bilete într-un sistem coerent.",
        ctaButton: "Discută proiectul",
        labels: {
          client: "Proiect",
          industry: "Categorie",
          launch: "Status",
          scope: "Direcție",
          services: "Tehnologii",
        },
      },
      en: {
        eyebrow: "Case study · Event Website & Stripe",
        title: "A premium digital experience that turns interest into ticket sales.",
        intro:
          "A premium website created for The Visibility Summit, a London educational workshop focused on personal visibility, social media and public speaking.",
        challengeTitle: "The challenge",
        challenge:
          "The event needed a distinctive presence that communicated the workshop's value, built trust in its trainers and quickly explained the differences between participation packages.",
        solutionTitle: "The solution",
        solution:
          "We built a premium interface, an editorial layout and a clear journey from discovering the experience to purchasing a ticket. Stripe handles online payments for Standard, Duo, Premium Experience and Business Partner packages, with dedicated confirmation and cancellation pages.",
        resultsTitle: "What the website delivers",
        resultsIntro:
          "The project connects event presentation, trainer authority and payment into one responsive experience.",
        results: [
          "A premium presentation of the program, trainers and three learning areas",
          "Four participation packages connected to secure Stripe checkout",
          "Responsive experience, technical SEO and deployment on the official domain",
        ],
        galleryTitle: "Editorial design, clear hierarchy and integrated conversion.",
        servicesTitle: "Design, development and payments in one flow.",
        proofEyebrow: "Conversion flow",
        proofTitle: "From the first scroll to ticket payment.",
        proofQuote:
          "Every package leads to a secure Stripe checkout, reducing the steps between the decision to attend and payment confirmation.",
        proofNote: "Stripe Checkout · Standard · Duo · Premium Experience · Business Partner",
        visit: "Visit the website",
        back: "Back to portfolio",
        ctaEyebrow: "Organizing an event?",
        ctaTitle: "We build the digital experience that makes it memorable.",
        ctaText:
          "Strategy, UI/UX, website and ticket sales in one coherent system.",
        ctaButton: "Discuss your project",
        labels: {
          client: "Project",
          industry: "Category",
          launch: "Status",
          scope: "Scope",
          services: "Technologies",
        },
      },
      ru: {
        eyebrow: "Кейс · Сайт события & Stripe",
        title: "Премиальный digital-опыт, который превращает интерес в продажи билетов.",
        intro:
          "Премиальный сайт для The Visibility Summit — образовательного воркшопа в Лондоне о личной узнаваемости, social media и public speaking.",
        challengeTitle: "Задача",
        challenge:
          "Событию требовался узнаваемый образ, который передаёт ценность воркшопа, формирует доверие к тренерам и быстро объясняет разницу между пакетами участия.",
        solutionTitle: "Решение",
        solution:
          "Мы создали премиальный интерфейс, редакционный layout и понятный путь от знакомства с событием до покупки билета. Stripe принимает оплату пакетов Standard, Duo, Premium Experience и Business Partner, включая страницы подтверждения и отмены.",
        resultsTitle: "Что обеспечивает сайт",
        resultsIntro:
          "Проект объединяет презентацию события, авторитет тренеров и оплату в одном responsive-опыте.",
        results: [
          "Премиальная презентация программы, тренеров и трёх направлений",
          "Четыре пакета участия, подключённые к безопасному Stripe checkout",
          "Responsive-интерфейс, техническое SEO и deployment на официальном домене",
        ],
        galleryTitle: "Редакционный дизайн, понятная иерархия и встроенная конверсия.",
        servicesTitle: "Дизайн, разработка и платежи в едином потоке.",
        proofEyebrow: "Конверсионный путь",
        proofTitle: "От первого scroll до оплаты билета.",
        proofQuote:
          "Каждый пакет ведёт к безопасному Stripe checkout, сокращая путь от решения участвовать до подтверждения оплаты.",
        proofNote: "Stripe Checkout · Standard · Duo · Premium Experience · Business Partner",
        visit: "Открыть сайт",
        back: "Назад к портфолио",
        ctaEyebrow: "Организуете событие?",
        ctaTitle: "Создадим digital-опыт, который сделает его запоминающимся.",
        ctaText:
          "Стратегия, UI/UX, сайт и продажа билетов в единой системе.",
        ctaButton: "Обсудить проект",
        labels: {
          client: "Проект",
          industry: "Категория",
          launch: "Статус",
          scope: "Направление",
          services: "Технологии",
        },
      },
    },
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getLocalizedPortfolioProject(project: PortfolioProject, locale: Locale) {
  return {
    ...project,
    industry: project.industry[locale],
    content: project.content[locale],
    gallery: project.gallery.map((image) => ({
      src: image.src,
      alt: image.alt[locale],
      caption: image.caption[locale],
    })),
  };
}
