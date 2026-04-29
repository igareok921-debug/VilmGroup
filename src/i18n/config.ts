export const locales = ["ro", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalePath(locale: Locale, pathname: string) {
  const cleanPath = pathname.replace(/^\/(ro|en|ru)(?=\/|$)/, "") || "/";
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export const localeLabels: Record<Locale, string> = {
  ro: "ro-MD",
  en: "en",
  ru: "ru",
};

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vilmgroup.md"
).replace(/\/$/, "");

export function getLocalizedPath(locale: Locale, path = "/") {
  const cleanPath = path === "/" ? "" : path.replace(/^\/(ro|en|ru)(?=\/|$)/, "");
  return `/${locale}${cleanPath}`;
}

export function getLanguageAlternates(path = "/") {
  return {
    ro: getLocalizedPath("ro", path),
    en: getLocalizedPath("en", path),
    ru: getLocalizedPath("ru", path),
    "x-default": getLocalizedPath(defaultLocale, path),
  };
}
