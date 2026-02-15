"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Aurora Cosmetics",
    tag: "Reels + Performance Ads",
    desc: "+230% engagement și dublare a conversiilor pe e-commerce.",
  },
  {
    title: "Atlas Mobility",
    tag: "App Design + MVP",
    desc: "Lansare aplicație în 10 săptămâni cu retenție 42%.",
  },
  {
    title: "Nordic Hotels",
    tag: "Website + SMM",
    desc: "Creștere rezervări directe cu 3.4x în 4 luni.",
  },
];

export default function Portfolio() {
  return (
    <section id="portofoliu" className="mx-auto w-full max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col gap-3"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Portofoliu
        </p>
        <h2 className="text-3xl font-semibold text-text md:text-4xl">
          Studii de caz care vorbesc prin rezultate
        </h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, boxShadow: "0 0 34px rgba(88, 207, 255, 0.24)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-border/70 bg-surface-1/60 p-6"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">
              {project.tag}
            </p>
            <h3 className="mb-3 text-xl font-semibold text-text">
              {project.title}
            </h3>
            <p className="text-sm text-muted">{project.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
