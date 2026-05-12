"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

export default function FAQ() {
  const { dictionary } = useI18n();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dictionary.faqSection.items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              {dictionary.faqSection.eyebrow}
            </span>
          </div>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
            {dictionary.faqSection.titleBefore}{" "}
            <span className="italic text-accent">
              {dictionary.faqSection.titleAccent}
            </span>.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-text-soft">
            {dictionary.faqSection.text}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="border-t border-border">
            {dictionary.faqSection.items.map(([question, answer]) => (
              <details
                key={question}
                className="group border-b border-border py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold leading-tight text-text marker:hidden">
                  {question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent transition group-open:rotate-45 group-open:border-accent">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-soft">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
