"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Locale } from "@/i18n/config";

const STORAGE_KEY = "vilm-cookie-consent";
const GA_ID = "G-95RJQJBB7H";

const copy = {
  ro: {
    title: "Preferințe cookies",
    text: "Folosim cookies necesare pentru funcționarea site-ului și, doar cu acordul tău, Google Analytics pentru a înțelege cum este utilizat site-ul.",
    accept: "Accept analytics",
    reject: "Doar necesare",
    details: "Detalii cookies",
  },
  en: {
    title: "Cookie preferences",
    text: "We use essential cookies to operate the website and, only with your permission, Google Analytics to understand how the website is used.",
    accept: "Accept analytics",
    reject: "Essential only",
    details: "Cookie details",
  },
  ru: {
    title: "Настройки cookies",
    text: "Мы используем необходимые cookies для работы сайта и только с вашего согласия Google Analytics, чтобы понимать, как используется сайт.",
    accept: "Разрешить analytics",
    reject: "Только необходимые",
    details: "Подробнее о cookies",
  },
} as const;

type Consent = "accepted" | "rejected" | null;

export default function CookieConsent({ locale }: { locale: Locale }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    } else {
      setIsOpen(true);
    }

    const openSettings = () => setIsOpen(true);
    window.addEventListener("vilm:open-cookie-settings", openSettings);
    return () => window.removeEventListener("vilm:open-cookie-settings", openSettings);
  }, []);

  const saveConsent = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setIsOpen(false);
  };

  const t = copy[locale];

  return (
    <>
      {consent === "accepted" ? <GoogleAnalytics gaId={GA_ID} /> : null}
      {isOpen ? (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-accent/35 bg-[#0c0a10]/95 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.7)] backdrop-blur-xl md:p-6"
        >
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 id="cookie-consent-title" className="font-display text-lg font-bold text-text">
                {t.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{t.text}</p>
              <Link
                href={`/${locale}/cookies`}
                className="mt-3 inline-flex text-xs font-semibold text-accent transition hover:text-accent-soft"
              >
                {t.details} →
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
              <button type="button" onClick={() => saveConsent("accepted")} className="btn-primary justify-center whitespace-nowrap">
                {t.accept}
              </button>
              <button type="button" onClick={() => saveConsent("rejected")} className="btn-ghost justify-center whitespace-nowrap">
                {t.reject}
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
