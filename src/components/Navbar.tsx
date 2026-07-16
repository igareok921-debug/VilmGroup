"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";

const navItems = [
  { href: "/#servicii", key: "services" },
  { href: "/#portofoliu", key: "portfolio" },
  { href: "/#colaborari", key: "collaborations" },
  { href: "/#testimoniale", key: "testimonials" },
  { href: "/blog", key: "blog" },
  { href: "/#faq", key: "faq" },
  { href: "/#contact", key: "contact" },
] as const;

const serviceNavItems = [
  {
    href: "/creare-website-uri",
    label: {
      ro: "Creare website-uri & SEO",
      en: "Website development & SEO",
      ru: "Создание сайтов & SEO",
    },
  },
  {
    href: "/smm-chisinau",
    label: {
      ro: "Social Media Marketing",
      en: "Social Media Marketing",
      ru: "Social Media Marketing",
    },
  },
  {
    href: "/creare-magazin-online",
    label: {
      ro: "Creare magazin online",
      en: "Online store development",
      ru: "Создание интернет-магазина",
    },
  },
  {
    href: "/chatbots-ai",
    label: {
      ro: "Chatbots & automatizări AI",
      en: "AI chatbots & automation",
      ru: "AI-чатботы и автоматизация",
    },
  },
] as const;

export default function Navbar() {
  const { dictionary, locale } = useI18n();
  // Keep anchor navigation on the active localized page. Going through `/`
  // triggers the locale redirect, and browsers drop `#contact` during it.
  const localePrefix = `/${locale}`;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} EET`);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const currentPath = window.location.pathname.replace(/\/$/, "");

    if (currentPath === localePrefix) {
      event.preventDefault();
      window.history.replaceState(null, "", localePrefix);
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  };

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);

    const currentPath = window.location.pathname.replace(/\/$/, "");
    if (currentPath !== localePrefix) return;

    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    event.preventDefault();
    window.history.replaceState(null, "", `${localePrefix}/#contact`);
    contactSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  const handleServicesClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);

    const currentPath = window.location.pathname.replace(/\/$/, "");
    if (currentPath !== localePrefix) return;

    const servicesSection = document.getElementById("servicii");
    if (!servicesSection) return;

    event.preventDefault();
    window.history.replaceState(null, "", `${localePrefix}/#servicii`);
    servicesSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-border/60 bg-bg-0/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href={localePrefix}
            onClick={handleLogoClick}
            aria-label="Vilm Group"
            className="inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <Logo variant="gold" className="h-7 w-auto md:h-8" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
            {navItems.map((item) => {
              const isAnchor = item.href.startsWith("/#");
              const href = isAnchor
                ? `${localePrefix}${item.href}`
                : `/${locale}${item.href}`;

              if (item.key === "services") {
                return (
                  <div key={item.href} className="group/services relative">
                    <Link
                      href={href}
                      onClick={handleServicesClick}
                      className="flex min-h-11 items-center gap-1.5"
                      aria-haspopup="true"
                    >
                      <span className="link-underline font-display text-[15px] font-medium text-text">
                        {dictionary.nav[item.key]}
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover/services:rotate-180 group-focus-within/services:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="m4 6 4 4 4-4" />
                      </svg>
                    </Link>

                    <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100 group-focus-within/services:visible group-focus-within/services:translate-y-0 group-focus-within/services:opacity-100">
                      <div className="border border-border bg-bg-0/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        <div className="py-1">
                          {serviceNavItems.map((service) => (
                            <Link
                              key={service.href}
                              href={`${localePrefix}${service.href}`}
                              className="group/item flex min-h-11 items-center justify-between gap-4 px-4 py-3 font-display text-sm font-medium text-text-soft transition-colors hover:bg-white/[0.04] hover:text-text focus-visible:bg-white/[0.04]"
                            >
                              {service.label[locale]}
                              <span
                                aria-hidden
                                className="text-accent transition-transform duration-200 group-hover/item:translate-x-1"
                              >
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a key={item.href} href={href} className="group flex items-baseline">
                  <span className="link-underline font-display text-[15px] font-medium text-text">
                    {dictionary.nav[item.key]}
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <span
              aria-hidden
              className="w-[5.75rem] shrink-0 text-right font-mono text-[10px] tabular-nums tracking-[0.2em] text-muted"
            >
              {time}
            </span>
            <LanguageSwitcher />
            <Link
              href={`${localePrefix}/#contact`}
              onClick={handleContactClick}
              className="btn-primary text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-bg-0" aria-hidden />
              {dictionary.nav.cta}
            </Link>
          </div>

          <button
            type="button"
            className="relative inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/[0.06] xl:hidden"
            aria-label={isOpen ? dictionary.nav.close : dictionary.nav.open}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((p) => !p)}
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-text transition-all duration-300 ${
                  isOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-text transition-all duration-300 ${
                  isOpen ? "top-1/2 -rotate-45" : "top-full"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden"
          >
            <motion.div
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              exit={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="border-b border-border bg-bg-0/95 backdrop-blur-xl"
            >
              <nav aria-label="Mobile" className="flex max-h-[calc(100dvh-4.75rem)] flex-col overflow-y-auto px-6 py-6">
                {navItems.map((item, i) => {
                  const isAnchor = item.href.startsWith("/#");
                  const href = isAnchor
                    ? `${localePrefix}${item.href}`
                    : `/${locale}${item.href}`;

                  if (item.key === "services") {
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05 }}
                        className="border-b border-border pb-3"
                      >
                        <Link
                          href={href}
                          onClick={handleServicesClick}
                          className="flex min-h-14 items-center justify-between py-3"
                        >
                          <span className="font-display text-2xl font-semibold text-text">
                            {dictionary.nav[item.key]}
                          </span>
                          <span aria-hidden className="text-accent">→</span>
                        </Link>
                        <div className="border-l border-border pl-4">
                          {serviceNavItems.map((service) => (
                            <Link
                              key={service.href}
                              href={`${localePrefix}${service.href}`}
                              onClick={closeMenu}
                              className="flex min-h-11 items-center py-2 text-sm font-medium text-text-soft transition-colors hover:text-accent"
                            >
                              {service.label[locale]}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.a
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                      href={href}
                      onClick={closeMenu}
                      className="flex items-baseline border-b border-border py-4"
                    >
                      <span className="font-display text-2xl font-semibold text-text">
                        {dictionary.nav[item.key]}
                      </span>
                    </motion.a>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-6"
                >
                  <LanguageSwitcher />
                </motion.div>
                <motion.a
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  href={`${localePrefix}/#contact`}
                  onClick={handleContactClick}
                  className="btn-primary mt-6 justify-center"
                >
                  {dictionary.nav.cta}
                </motion.a>
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
