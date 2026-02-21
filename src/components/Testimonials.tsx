"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Vilm Group a înțeles rapid ADN-ul brandului nostru și a livrat conținut care convertește.",
    name: "Ana Popescu",
    role: "CMO, Aurora Cosmetics",
  },
  {
    quote:
      "Ne-au ajutat să trecem de la idee la un produs digital scalabil în timp record.",
    name: "Mihai Dobre",
    role: "Founder, Atlas Mobility",
  },
  {
    quote:
      "Echipa lor combină strategie, creativitate și execuție impecabilă.",
    name: "Ioana Marin",
    role: "Marketing Lead, Nordic Hotels",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoniale" className="mx-auto w-full max-w-6xl px-6 py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col gap-3"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Testimoniale
        </p>
        <h2 className="text-3xl font-semibold text-text md:text-4xl">
          Ce spun clienții despre noi
        </h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.figure
            key={item.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, boxShadow: "0 0 30px rgba(200, 169, 106, 0.22)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-border/70 bg-surface-1/60 p-6"
          >
            <blockquote className="mb-4 text-sm text-muted">
              “{item.quote}”
            </blockquote>
            <figcaption className="text-sm font-semibold text-text">
              {item.name}
            </figcaption>
            <p className="text-xs text-muted">{item.role}</p>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
