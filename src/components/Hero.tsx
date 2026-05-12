"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/config";

type HeroCopy = {
  eyebrow: string;
  headlineLines: string[];
  accent: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  offerEyebrow: string;
  discount: string;
  discountLabel: string;
  discountText: string;
  mockupTitle: string[];
  mockupText: string;
  limitedOffer: string;
  limitedOfferStrong: string;
  nextLevel: string;
  nextLevelStrong: string;
  trust: { strong: string; text: string }[];
  services: { label: string; icon: ServiceIconName }[];
};

type ServiceIconName = "website" | "brand" | "marketing" | "video" | "ai";

const heroCopy: Record<Locale, HeroCopy> = {
  ro: {
    eyebrow: "Studio digital premium",
    headlineLines: ["Creăm soluții digitale", "care construiesc"],
    accent: "branduri puternice.",
    subtitle: "Design modern. Strategie clară. Rezultate reale.",
    primaryCta: "Hai să discutăm",
    secondaryCta: "Vezi portofoliul",
    offerEyebrow: "Ofertă specială",
    discount: "-20%",
    discountLabel: "Reducere",
    discountText: "la crearea website-urilor",
    mockupTitle: ["Strategie.", "Design.", "Rezultate."],
    mockupText: "Transformăm idei în experiențe digitale care aduc valoare brandului tău.",
    limitedOffer: "Ofertă valabilă pentru",
    limitedOfferStrong: "un număr limitat de proiecte.",
    nextLevel: "Contactează-ne acum și du-ți afacerea la",
    nextLevelStrong: "nivelul următor!",
    trust: [
      { strong: "Soluții personalizate", text: "pentru afacerea ta" },
      { strong: "Design premium", text: "și experiență impecabilă" },
      { strong: "Optimizare", text: "pentru performanță și viteză" },
    ],
    services: [
      { label: "Website-uri moderne", icon: "website" },
      { label: "Branding & Logo", icon: "brand" },
      { label: "SMM & Marketing", icon: "marketing" },
      { label: "Foto & Video", icon: "video" },
      { label: "Aplicații & AI", icon: "ai" },
    ],
  },
  en: {
    eyebrow: "Premium digital studio",
    headlineLines: ["We create digital systems", "that build"],
    accent: "powerful brands.",
    subtitle: "Modern design. Clear strategy. Real results.",
    primaryCta: "Let’s talk",
    secondaryCta: "View portfolio",
    offerEyebrow: "Special offer",
    discount: "-20%",
    discountLabel: "Discount",
    discountText: "for website creation",
    mockupTitle: ["Strategy.", "Design.", "Results."],
    mockupText: "We turn ideas into digital experiences that grow your brand.",
    limitedOffer: "Offer available for",
    limitedOfferStrong: "a limited number of projects.",
    nextLevel: "Contact us now and take your business to the",
    nextLevelStrong: "next level!",
    trust: [
      { strong: "Custom solutions", text: "for your business" },
      { strong: "Premium design", text: "and polished experience" },
      { strong: "Optimization", text: "for performance and speed" },
    ],
    services: [
      { label: "Modern websites", icon: "website" },
      { label: "Branding & Logo", icon: "brand" },
      { label: "SMM & Marketing", icon: "marketing" },
      { label: "Photo & Video", icon: "video" },
      { label: "Apps & AI", icon: "ai" },
    ],
  },
  ru: {
    eyebrow: "Премиальная digital-студия",
    headlineLines: ["Создаем digital-решения", "для сильных"],
    accent: "сильные бренды.",
    subtitle: "Современный дизайн. Четкая стратегия. Реальные результаты.",
    primaryCta: "Обсудить проект",
    secondaryCta: "Портфолио",
    offerEyebrow: "Специальное предложение",
    discount: "-20%",
    discountLabel: "Скидка",
    discountText: "на создание сайтов",
    mockupTitle: ["Стратегия.", "Дизайн.", "Результат."],
    mockupText: "Превращаем идеи в digital-опыт, который усиливает ваш бренд.",
    limitedOffer: "Предложение доступно для",
    limitedOfferStrong: "ограниченного числа проектов.",
    nextLevel: "Свяжитесь с нами и выведите бизнес на",
    nextLevelStrong: "новый уровень!",
    trust: [
      { strong: "Индивидуальные решения", text: "для вашего бизнеса" },
      { strong: "Премиальный дизайн", text: "и безупречный опыт" },
      { strong: "Оптимизация", text: "скорости и производительности" },
    ],
    services: [
      { label: "Современные сайты", icon: "website" },
      { label: "Брендинг & Logo", icon: "brand" },
      { label: "SMM & Маркетинг", icon: "marketing" },
      { label: "Фото & Видео", icon: "video" },
      { label: "Приложения & AI", icon: "ai" },
    ],
  },
};

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const shared = "h-10 w-10 text-accent md:h-11 md:w-11";

  if (name === "website") {
    return (
      <svg viewBox="0 0 32 32" className={shared} fill="none" aria-hidden>
        <rect x="4" y="7" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12h20M13 27h6M16 23v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 10h.1M11 10h.1M14 10h.1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "brand") {
    return (
      <svg viewBox="0 0 32 32" className={shared} fill="none" aria-hidden>
        <path d="M7 25l4.5-1 13-13-3.5-3.5-13 13L7 25Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M19 9l4 4M11.5 24l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="21.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "marketing") {
    return (
      <svg viewBox="0 0 32 32" className={shared} fill="none" aria-hidden>
        <path d="M7 17h4l11-6v14l-11-6H7v-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11 19l2 6M25 13l3-2M26 18h3M25 23l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "video") {
    return (
      <svg viewBox="0 0 32 32" className={shared} fill="none" aria-hidden>
        <rect x="5" y="9" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19 14l7-4v12l-7-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className={shared} fill="none" aria-hidden>
      <rect x="5" y="8" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 14l-3 2 3 2M20 14l3 2-3 2M17 13l-2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8V5M23 8V5M13 27h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeroBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="hidden md:block"
    >
      <p className="font-display text-4xl font-light leading-none tracking-[-0.08em] text-accent md:text-5xl">
        vilmgroup
      </p>
      <p className="mt-3 font-mono text-[12px] tracking-[0.58em] text-text">
        Studio Digital
      </p>
    </motion.div>
  );
}

function DeviceMockups({ copy }: { copy: HeroCopy }) {
  return (
    <div className="relative hidden min-h-[32rem] lg:block lg:min-h-[34rem] xl:min-h-[37rem]">
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 w-[min(15rem,22vw)] rounded-[1.85rem] border border-accent/45 bg-bg-0/55 px-5 pt-8 pb-32 text-center shadow-[0_0_90px_rgba(200,169,106,0.18)] backdrop-blur-md xl:w-[min(20rem,29vw)] xl:px-7 xl:pt-10 xl:pb-44"
      >
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-text">
          {copy.offerEyebrow}
        </p>
        <p className="mt-3 bg-[linear-gradient(135deg,#fff4c2,#d8b15c_50%,#8f6a24)] bg-clip-text font-display text-6xl font-extrabold leading-none tracking-[-0.07em] text-transparent xl:text-7xl">
          {copy.discount}
        </p>
        <p className="mt-1 font-display text-3xl font-bold uppercase tracking-[-0.03em] text-text xl:text-4xl">
          {copy.discountLabel}
        </p>
        <p className="mt-1 text-base text-text-soft">{copy.discountText}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="hero-float absolute right-6 bottom-0 w-[min(22rem,32vw)] rounded-[1.25rem] border border-white/15 bg-[#08080b] p-3 shadow-[0_38px_90px_rgba(0,0,0,0.72)] xl:right-10 xl:w-[min(31rem,42vw)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-bg-0 px-8 py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_76%,rgba(200,169,106,0.42),transparent_18%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.18),transparent_21%)]" />
          <div className="absolute -right-14 bottom-[-7rem] h-60 w-60 rounded-full border border-accent/25 bg-[radial-gradient(circle_at_35%_30%,rgba(225,200,150,0.2),rgba(20,18,26,0.95)_55%,rgba(0,0,0,0)_70%)]" />
          <p className="relative font-mono text-[10px] text-accent">vilmgroup</p>
          <h3 className="relative mt-10 max-w-[15rem] font-display text-4xl font-bold leading-[0.92] tracking-[-0.04em] text-text">
            {copy.mockupTitle[0]}
            <br />
            {copy.mockupTitle[1]}
            <br />
            <span className="text-accent">{copy.mockupTitle[2]}</span>
          </h3>
          <p className="relative mt-4 max-w-[15rem] text-xs leading-relaxed text-text-soft">
            {copy.mockupText}
          </p>
          <span className="relative mt-5 inline-flex rounded-full bg-accent px-4 py-2 font-display text-xs font-semibold text-bg-0">
            {copy.primaryCta} →
          </span>
        </div>
        <div className="mx-auto mt-2 h-2 w-28 rounded-full bg-white/10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="hero-float-slow absolute right-0 bottom-6 w-24 rounded-[1.65rem] border border-white/20 bg-[#07070a] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.78)] xl:w-36"
      >
        <div className="aspect-[9/18] rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_80%_80%,rgba(200,169,106,0.38),transparent_23%),#08070a] p-4">
          <p className="font-mono text-[8px] text-accent">vilmgroup</p>
          <p className="mt-9 font-display text-lg font-bold leading-[0.98] text-text lg:text-xl">
            {copy.mockupTitle[0]}
            <br />
            {copy.mockupTitle[1]}
            <br />
            <span className="text-accent">{copy.mockupTitle[2]}</span>
          </p>
          <div className="mt-8 h-1 w-12 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { locale } = useI18n();
  const copy = heroCopy[locale] ?? heroCopy.ro;

  return (
    <section className="relative isolate overflow-hidden px-6 pt-24 pb-10 md:min-h-[100svh] md:px-10 md:pt-28 md:pb-12 xl:pt-30">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_23%_16%,rgba(200,169,106,0.16),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(225,200,150,0.14),transparent_22%),linear-gradient(180deg,#08070a,#050407_70%,#08070a)]" />
      <div className="grain absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-[58%] top-0 -z-10 hidden h-[34rem] w-[34rem] rounded-full border border-accent/10 md:block xl:h-[42rem] xl:w-[42rem]" />
      <div className="pointer-events-none absolute left-[60%] top-[-7rem] -z-10 hidden h-[46rem] w-[46rem] rotate-[-28deg] rounded-full border border-accent/15 md:block xl:h-[56rem] xl:w-[56rem]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_18%_18%,rgba(225,200,150,0.9)_0_1.5px,transparent_2px),radial-gradient(circle_at_55%_7%,rgba(225,200,150,0.7)_0_1px,transparent_1.5px),radial-gradient(circle_at_92%_12%,rgba(225,200,150,0.85)_0_1.5px,transparent_2px),radial-gradient(circle_at_74%_46%,rgba(225,200,150,0.55)_0_1px,transparent_1.5px)]" />

      <div className="mx-auto w-full max-w-[1500px]">
        <div className="md:flex md:items-start md:justify-between md:gap-8">
          <HeroBrand />

          {/* Compact discount card — centered top on phones, right-aligned at tablet */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto mt-7 w-full max-w-[640px] rounded-[1.6rem] border border-accent/40 bg-[#0c0a10]/90 px-4 py-6 shadow-[0_0_80px_rgba(200,169,106,0.22)] backdrop-blur-md md:mx-0 md:mt-0 md:max-w-[420px] md:px-5 md:py-5 lg:hidden"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(200,169,106,0.9),transparent)]" aria-hidden />

            <div className="flex items-center gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                {copy.offerEyebrow}
              </p>
              <span className="h-px flex-1 bg-accent/30" aria-hidden />
            </div>

            <p
              style={{ fontSize: "clamp(60px, 16vw, 100px)" }}
              className="mt-3 font-display font-extrabold leading-[0.85] tracking-[-0.07em] text-accent"
            >
              {copy.discount}
            </p>

            <p className="mt-3 border-t border-white/[0.08] pt-3 text-[0.8rem] leading-snug text-text-soft">
              {copy.discountText}
            </p>
          </motion.div>
        </div>

        <div className="relative mt-7 grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-start xl:mt-8">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent md:hidden"
          >
            {copy.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[49rem] font-display text-[clamp(2.75rem,7.2vw,4.25rem)] font-bold leading-[0.98] tracking-[-0.04em] text-text md:mt-0 lg:text-[clamp(2.6rem,3vw,3.5rem)] xl:max-w-[53rem] xl:text-[clamp(3.65rem,4.05vw,5.05rem)]"
          >
            {copy.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="bg-[linear-gradient(135deg,#fff5c8,#d3af62_46%,#a78038)] bg-clip-text text-transparent">
              {copy.accent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-text-soft md:text-xl xl:text-2xl"
          >
            {copy.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 hidden gap-y-5 md:grid md:grid-cols-5 md:divide-x md:divide-white/15 xl:mt-9"
          >
            {copy.services.map((service) => (
              <div key={service.label} className="flex flex-col items-start gap-3.5 pr-4 sm:items-center sm:px-4 sm:text-center">
                <ServiceIcon name={service.icon} />
                <span className="max-w-[8rem] font-display text-base font-semibold leading-tight text-text">
                  {service.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 rounded-2xl border border-accent/35 bg-white/[0.035] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.38)] backdrop-blur md:max-w-[46rem] xl:mt-9"
          >
            <div className="grid gap-5 md:grid-cols-[1fr_1px_1fr] md:items-center">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff0b6,#c8a96a)] text-bg-0 shadow-[0_0_35px_rgba(200,169,106,0.28)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                    <path d="M7 3v3M17 3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="m8 14 2 2 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-base leading-relaxed text-text-soft">
                  {copy.limitedOffer}{" "}
                  <strong className="font-semibold text-text">{copy.limitedOfferStrong}</strong>
                </p>
              </div>
              <div className="hidden h-full bg-accent/55 md:block" />
              <p className="text-base leading-relaxed text-text-soft">
                {copy.nextLevel}{" "}
                <strong className="font-semibold text-accent">{copy.nextLevelStrong}</strong>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a className="btn-primary" href="#contact">
                {copy.primaryCta}
                <span aria-hidden>→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn-ghost" href="#portofoliu">
                {copy.secondaryCta}
              </a>
            </Magnetic>
          </motion.div>

        </div>

        <div className="relative z-10 lg:-mt-8 xl:-ml-6">
          <DeviceMockups copy={copy} />
        </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-10 border-t border-white/[0.07] pt-6 xl:mt-12"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {copy.trust.map((item) => (
              <div key={item.strong} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/55 bg-accent/[0.06]">
                  <svg viewBox="0 0 12 12" className="h-3.5 w-3.5 text-accent" fill="none" aria-hidden>
                    <path d="M2 6.5l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-[15px] leading-snug text-text-soft">
                  <span className="font-semibold text-text">{item.strong}</span>{" "}
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
