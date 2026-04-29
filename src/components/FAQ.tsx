"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Cu ce se ocupă Vilm Group?",
    answer:
      "Vilm Group este un studio digital din Chișinău care oferă servicii de SMM, branding, logo design, creare website-uri, graphic design, content creation și automatizări AI.",
  },
  {
    question: "Faceți website-uri pentru afaceri?",
    answer:
      "Da. Creăm website-uri rapide, moderne și optimizate pentru conversii, potrivite pentru branduri, servicii, portofolii și afaceri locale sau internaționale.",
  },
  {
    question: "Puteți crea un logo și o identitate vizuală completă?",
    answer:
      "Da. Dezvoltăm logo, paletă de culori, direcție vizuală, materiale de brand și guideline pentru o imagine coerentă.",
  },
  {
    question: "Oferiți servicii SMM și administrare social media?",
    answer:
      "Da. Creăm strategie, content plan, vizualuri, texte, reels și campanii pentru Instagram, Facebook și alte platforme relevante.",
  },
  {
    question: "Puteți integra AI sau chatbot pe website?",
    answer:
      "Da. Putem crea chatboți AI, asistenți personalizați și automatizări pentru suport clienți, vânzări, conținut sau workflow intern.",
  },
  {
    question: "Cum pot primi o ofertă?",
    answer:
      "Ne trimiți câteva detalii despre proiect prin formularul de contact sau Telegram, iar noi revenim cu o propunere personalizată.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
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
              ÎNTREBĂRI FRECVENTE
            </span>
          </div>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
            Clar înainte de{" "}
            <span className="italic text-accent">colaborare</span>.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-text-soft">
            Răspunsuri rapide despre website-uri, SMM, branding, logo design,
            chatboți AI și procesul de ofertare.
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
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group border-b border-border py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-semibold leading-tight text-text marker:hidden">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent transition group-open:rotate-45 group-open:border-accent">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-soft">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
