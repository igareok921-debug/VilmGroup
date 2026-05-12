"use client";

import { useEffect, useState } from "react";
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
  { href: "/#faq", key: "faq" },
  { href: "/#contact", key: "contact" },
] as const;

export default function Navbar() {
  const { dictionary, locale } = useI18n();
  const localePrefix = locale === "ro" ? "" : `/${locale}`;
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
            href="/"
            className="inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <Logo variant="gold" className="h-7 w-auto md:h-8" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`${localePrefix}${item.href}`}
                className="group flex items-baseline"
              >
                <span className="link-underline font-display text-[15px] font-medium text-text">
                  {dictionary.nav[item.key]}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <span
              aria-hidden
              className="font-mono text-[10px] tracking-[0.2em] text-muted"
            >
              {time}
            </span>
            <LanguageSwitcher />
            <Link href={`${localePrefix}/#contact`} className="btn-primary text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-bg-0" aria-hidden />
              {dictionary.nav.cta}
            </Link>
          </div>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center lg:hidden"
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
            className="lg:hidden"
          >
            <motion.div
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              exit={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className="border-b border-border bg-bg-0/95 backdrop-blur-xl"
            >
              <nav className="flex flex-col px-6 py-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    href={`${localePrefix}${item.href}`}
                    onClick={closeMenu}
                    className="flex items-baseline border-b border-border py-4"
                  >
                    <span className="font-display text-2xl font-semibold text-text">
                      {dictionary.nav[item.key]}
                    </span>
                  </motion.a>
                ))}
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
                  onClick={closeMenu}
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
