export const locales = ["ro", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalePath(locale: Locale, pathname: string) {
  const cleanPath = pathname.replace(/^\/(ro|en|ru)(?=\/|$)/, "") || "/";
  if (locale === defaultLocale) return cleanPath;
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}
