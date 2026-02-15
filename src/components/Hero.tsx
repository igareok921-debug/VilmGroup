"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-pink/10 via-bg-0/10 to-bg-0/25" />
      <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-[0.3em] text-muted"
          >
            Agenție digitală premium
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 text-4xl font-semibold leading-[1.12] text-text md:text-6xl"
          >
            <span className="block">Construim infrastructura digitală</span>
            <span className="mt-1 block">și imaginea online a brandului tău</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 text-lg text-muted md:mt-6 md:text-xl"
          >
            Social media, content video, website-uri, magazine online și
            aplicații mobile dezvoltate pentru o prezență digitală solidă
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-7 flex flex-row flex-wrap gap-4 md:mt-8"
          >
            <Magnetic>
              <motion.a
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 30px rgba(255, 0, 170, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl bg-gradient-to-r from-brand-magenta via-accent-pink to-glow-cyan px-5 py-2.5 text-[0.95rem] font-semibold text-white shadow-glow transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
                href="#contact"
              >
                Programează un call
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(255, 0, 170, 0.8)",
                }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl border border-border/80 px-5 py-2.5 text-[0.95rem] font-semibold text-text transition hover:border-brand-magenta/60 sm:px-6 sm:py-3 sm:text-sm"
                href="#portofoliu"
              >
                Vezi portofoliul
              </motion.a>
            </Magnetic>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-8 grid gap-4 text-[0.85rem] text-muted sm:grid-cols-3 md:mt-10 md:text-sm"
        >
          <div className="flex items-center rounded-2xl border border-border/70 bg-surface-1/70 px-4 py-2.5">
            Strategie & creștere pe social media
          </div>
          <div className="flex items-center rounded-2xl border border-border/70 bg-surface-1/70 px-4 py-2.5">
            Conținut premium pentru Reels și ads
          </div>
          <div className="flex items-center rounded-2xl border border-border/70 bg-surface-1/70 px-4 py-2.5">
            Produse digitale scalabile end-to-end
          </div>
        </motion.div>
      </div>
    </section>
  );
}
