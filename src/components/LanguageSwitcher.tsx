"use client";

import { useEffect, useState } from "react";

type LanguageCode = "ro" | "en" | "ru";

const languages: { code: LanguageCode; label: string }[] = [
  { code: "ro", label: "RO" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

function getCookie(name: string) {
  if (typeof document === "undefined") return "";
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

function writeTranslateCookie(value: string) {
  const host = window.location.hostname;
  const domains = ["", host, ".vilmgroup.md"];

  domains.forEach((domain) => {
    document.cookie = `googtrans=${value};path=/;max-age=31536000;${
      domain ? `domain=${domain};` : ""
    }SameSite=Lax`;
  });
}

export default function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState<LanguageCode>(() => {
    const cookie = decodeURIComponent(getCookie("googtrans") ?? "");
    if (cookie.endsWith("/en")) return "en";
    if (cookie.endsWith("/ru")) return "ru";
    return "ro";
  });

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ro",
          includedLanguages: "ro,en,ru",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src*="translate.google.com/translate_a/element.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const changeLanguage = (language: LanguageCode) => {
    setActiveLanguage(language);
    writeTranslateCookie(`/ro/${language}`);
    window.location.reload();
  };

  return (
    <div className="notranslate flex items-center rounded-full border border-border-strong bg-bg-1/70 p-1">
      <div id="google_translate_element" className="hidden" />
      {languages.map((language) => {
        const isActive = activeLanguage === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => changeLanguage(language.code)}
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] transition ${
              isActive
                ? "bg-accent text-bg-0"
                : "text-muted hover:text-text"
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
