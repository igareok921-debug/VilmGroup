"use client";

import { useState } from "react";
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
  formTitle: string;
  formText: string;
  formSubmit: string;
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
    eyebrow: "Website-uri & SMM în Chișinău",
    headlineLines: ["Website-uri care atrag.", "SMM care construiește"],
    accent: "branduri relevante.",
    subtitle: "SEO, strategie, content și conversii — într-o singură echipă.",
    primaryCta: "Hai să discutăm",
    secondaryCta: "Vezi portofoliul",
    offerEyebrow: "Ofertă specială",
    discount: "-20%",
    discountLabel: "Reducere",
    discountText: "la crearea website-urilor",
    formTitle: "Spune-ne despre proiect",
    formText: "Completează formularul și revenim cu o recomandare potrivită afacerii tale.",
    formSubmit: "Solicită oferta cu -20%",
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
      { label: "Website & SEO", icon: "website" },
      { label: "Magazine Online", icon: "brand" },
      { label: "SMM & Content", icon: "marketing" },
      { label: "AI & Automatizări", icon: "ai" },
    ],
  },
  en: {
    eyebrow: "Premium digital studio",
    headlineLines: ["Websites that attract.", "SMM that builds"],
    accent: "relevant brands.",
    subtitle: "SEO, strategy, content and conversion — from one team.",
    primaryCta: "Let’s talk",
    secondaryCta: "View portfolio",
    offerEyebrow: "Special offer",
    discount: "-20%",
    discountLabel: "Discount",
    discountText: "for website creation",
    formTitle: "Tell us about your project",
    formText: "Complete the form and we’ll return with a recommendation tailored to your business.",
    formSubmit: "Claim the -20% offer",
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
      { label: "Website & SEO", icon: "website" },
      { label: "Online Stores", icon: "brand" },
      { label: "SMM & Content", icon: "marketing" },
      { label: "AI & Automation", icon: "ai" },
    ],
  },
  ru: {
    eyebrow: "Сайты & SMM в Кишинёве",
    headlineLines: ["Сайты, которые привлекают.", "SMM, который развивает"],
    accent: "сильные бренды.",
    subtitle: "SEO, стратегия, контент и конверсии — в одной команде.",
    primaryCta: "Обсудить проект",
    secondaryCta: "Портфолио",
    offerEyebrow: "Специальное предложение",
    discount: "-20%",
    discountLabel: "Скидка",
    discountText: "на создание сайтов",
    formTitle: "Расскажите о проекте",
    formText: "Заполните форму, и мы предложим решение, подходящее вашему бизнесу.",
    formSubmit: "Получить предложение со скидкой -20%",
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
      { label: "Сайты & SEO", icon: "website" },
      { label: "Интернет-магазины", icon: "brand" },
      { label: "SMM & Контент", icon: "marketing" },
      { label: "AI & Автоматизация", icon: "ai" },
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

type FormStatus = "idle" | "sending" | "sent" | "error";

function HeroLeadForm({ copy }: { copy: HeroCopy }) {
  const { dictionary } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: `${copy.formSubmit}\n\n${message}`,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? dictionary.contactSection.error);
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : dictionary.contactSection.error
      );
    }
  };

  return (
    <motion.form
      id="hero-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[1.75rem] border border-accent/40 bg-[#0c0a10]/92 p-5 shadow-[0_32px_100px_rgba(0,0,0,0.58),0_0_80px_rgba(200,169,106,0.12)] backdrop-blur-xl sm:p-7 lg:p-8"
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(200,169,106,0.95),transparent)]" aria-hidden />
      <div className="flex items-start justify-between gap-5 border-b border-white/[0.09] pb-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            {copy.offerEyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-text sm:text-3xl">
            {copy.formTitle}
          </h2>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-display text-5xl font-extrabold leading-none tracking-[-0.07em] text-accent sm:text-6xl">
            {copy.discount}
          </p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-text-soft">
            {copy.discountLabel}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-text-soft sm:text-[15px]">
        {copy.formText} <strong className="font-semibold text-accent">{copy.discountText}</strong>
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="hero-name" className="font-mono text-[10px] tracking-[0.2em] text-muted">
            {dictionary.contactSection.name} <span aria-hidden>*</span>
          </label>
          <input
            id="hero-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={status === "sending"}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={dictionary.contactSection.namePlaceholder}
            className="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-white/[0.07] px-4 text-base text-text outline-none transition placeholder:text-muted hover:border-white/35 focus:border-accent disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="hero-email" className="font-mono text-[10px] tracking-[0.2em] text-muted">
            {dictionary.contactSection.email} <span aria-hidden>*</span>
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            inputMode="email"
            required
            autoComplete="email"
            disabled={status === "sending"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email@companie.md"
            className="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-white/[0.07] px-4 text-base text-text outline-none transition placeholder:text-muted hover:border-white/35 focus:border-accent disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="hero-message" className="font-mono text-[10px] tracking-[0.2em] text-muted">
          {dictionary.contactSection.message} <span aria-hidden>*</span>
        </label>
        <textarea
          id="hero-message"
          name="message"
          required
          rows={3}
          disabled={status === "sending"}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={dictionary.contactSection.messagePlaceholder}
          className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-white/[0.07] px-4 py-3 text-base leading-relaxed text-text outline-none transition placeholder:text-muted hover:border-white/35 focus:border-accent disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-5 w-full cursor-pointer justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? dictionary.contactSection.sending : copy.formSubmit}
        <span aria-hidden>→</span>
      </button>

      <div className="mt-4 min-h-5" aria-live="polite">
        {status === "sent" ? (
          <p role="status" className="text-sm font-medium text-accent">
            {dictionary.contactSection.sent}
          </p>
        ) : null}
        {status === "error" ? (
          <p role="alert" className="text-sm font-medium text-red-400">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </motion.form>
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
        <HeroBrand />

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
            className="mt-8 hidden gap-y-5 md:grid md:grid-cols-4 md:divide-x md:divide-white/15 xl:mt-9"
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
              <a className="btn-primary" href="#hero-form">
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

        <div className="relative z-10 lg:-mt-6 xl:ml-4">
          <HeroLeadForm copy={copy} />
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
