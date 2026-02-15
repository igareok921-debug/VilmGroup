"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="grid gap-10 rounded-2xl border border-border/70 bg-surface-1/70 p-8 md:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Hai să construim următorul tău proiect digital
          </h2>
          <p className="text-sm text-muted">
            Trimite-ne un mesaj și revenim cu o propunere personalizată în cel
            mult 24 de ore.
          </p>
          <div className="flex flex-col gap-3 text-sm text-muted">
            <span>WhatsApp: +40 7xx xxx xxx</span>
            <span>Telegram: @vilmgroup</span>
          </div>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted">
              Nume
            </label>
            <input
              className="w-full rounded-2xl border border-border/70 bg-bg-1/60 px-4 py-3 text-sm text-text focus:border-brand-magenta focus:outline-none"
              placeholder="Numele tău"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted">
              Email
            </label>
            <input
              className="w-full rounded-2xl border border-border/70 bg-bg-1/60 px-4 py-3 text-sm text-text focus:border-brand-magenta focus:outline-none"
              placeholder="email@companie.ro"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.2em] text-muted">
              Mesaj
            </label>
            <textarea
              className="min-h-[120px] w-full rounded-2xl border border-border/70 bg-bg-1/60 px-4 py-3 text-sm text-text focus:border-brand-magenta focus:outline-none"
              placeholder="Spune-ne despre obiectivele tale"
            />
          </div>
          <Magnetic className="w-full">
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 26px rgba(255, 0, 170, 0.35)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-2xl bg-gradient-to-r from-brand-magenta via-accent-pink to-glow-cyan px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
              type="submit"
            >
              Trimite mesaj
            </motion.button>
          </Magnetic>
        </form>
      </motion.div>
    </section>
  );
}
