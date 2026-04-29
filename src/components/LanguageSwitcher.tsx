"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { getLocalePath, locales, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale } = useI18n();

  return (
    <div className="flex items-center rounded-full border border-border-strong bg-bg-1/70 p-1">
      {locales.map((item) => {
        const isActive = locale === item;
        const href = getLocalePath(item as Locale, pathname);

        return (
          <Link
            key={item}
            href={href}
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] transition ${
              isActive
                ? "bg-accent text-bg-0"
                : "text-muted hover:text-text"
            }`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
