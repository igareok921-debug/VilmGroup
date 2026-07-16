"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

export default function OfferBanner() {
  const { dictionary, locale } = useI18n();
  const localePrefix = `/${locale}`;

  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-[linear-gradient(135deg,rgba(200,169,106,0.16),rgba(255,255,255,0.035)_42%,rgba(8,7,10,0.9))] p-6 shadow-[0_40px_120px_-55px_rgba(200,169,106,0.75)] backdrop-blur md:p-8"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(225,200,150,0.22),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(200,169,106,0.16),transparent_24%)]"
        />
        <div
          aria-hidden
          className="absolute -left-1/3 top-0 h-px w-1/3 animate-[offerSweep_5.5s_linear_infinite] bg-gradient-to-r from-transparent via-accent-soft to-transparent"
        />
        <div
          aria-hidden
          className="absolute -right-20 -bottom-28 h-56 w-56 rounded-full border border-accent/20"
        />
        <div
          aria-hidden
          className="absolute -right-8 -bottom-12 h-28 w-28 rounded-full border border-accent/25"
        />

        <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <motion.div
              animate={{ opacity: [0.72, 1, 0.72] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-accent">
                {dictionary.offer.eyebrow}
              </span>
            </motion.div>

            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-text md:text-6xl">
              {dictionary.offer.title}
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="max-w-md text-[16px] leading-relaxed text-text-soft md:text-lg">
              {dictionary.offer.text}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`${localePrefix}/#contact`} className="btn-primary justify-center">
                {dictionary.offer.primary}
                <span aria-hidden>→</span>
              </a>
              <a href={`${localePrefix}/#servicii`} className="btn-ghost justify-center">
                {dictionary.offer.secondary}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
