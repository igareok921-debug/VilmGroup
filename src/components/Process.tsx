"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & audit",
    desc: "Analizăm brandul, audiența și competiția pentru direcția corectă.",
  },
  {
    title: "Strategie & concept",
    desc: "Definim mesajele, canalele și planul de creștere.",
  },
  {
    title: "Producție & launch",
    desc: "Executăm conținutul, campaniile și produsul digital.",
  },
  {
    title: "Optimizare continuă",
    desc: "Iterăm săptămânal pe date reale și KPI-uri clare.",
  },
];

export default function Process() {
  return (
    <section id="proces" className="mx-auto w-full max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col gap-3"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Proces
        </p>
        <h2 className="text-3xl font-semibold text-text md:text-4xl">
          Cum lucrăm împreună
        </h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, boxShadow: "0 0 30px rgba(143, 180, 216, 0.26)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-border/70 bg-surface-1/70 p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-sm text-muted">
              {index + 1}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-text">
              {step.title}
            </h3>
            <p className="text-sm text-muted">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
