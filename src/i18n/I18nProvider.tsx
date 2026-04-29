"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import type { Dictionary } from "./dictionaries";
import type { Locale } from "./config";

type I18nContextValue = {
  locale: Locale;
  dictionary: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  dictionary,
  locale,
}: {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={dictionary}>
      <I18nContext.Provider value={{ dictionary, locale }}>
        {children}
      </I18nContext.Provider>
    </NextIntlClientProvider>
  );
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return value;
}
