"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type CategoryKey = "all" | "social" | "webapp";

const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "Toate" },
  { key: "social", label: "Social & Content" },
  { key: "webapp", label: "Web & App" },
];

const projects: {
  title: string;
  desc: string;
  category: Exclude<CategoryKey, "all">;
  previewGradient: string;
  previewImages?: string[];
  details?: string[];
  link?: string;
  featuredGrid?: boolean;
  year?: string;
}[] = [
  {
    title: "Femeia în Roșu",
    desc: "Landing pentru eveniment feminin premium. Platformă dedicată promovării unui eveniment inspirațional, construită pentru impact vizual și conversii.",
    category: "webapp",
    previewGradient: "from-[#1a0d18] via-[#2a1a26] to-[#3a1a2a]",
    previewImages: ["/p4.png", "/p3.png", "/p2.png", "/P1.png"],
    details: [
      "Speakeri: Alexandru Bordea — Business Mentor · Caraush Alina — Stylist · Emilia Ceaglic — Moderator · Maria Baciu — Tricoterapeut",
      "Livrare: Design elegant · UX orientat pe înscrieri · Evidențiere autoritate · CTA strategic",
    ],
    featuredGrid: true,
    year: "2025",
  },
  {
    title: "Curs SMM",
    desc: "Platformă educațională pentru Social Media Marketing. Landing dedicat promovării unui curs practic de SMM, structurat pentru claritate, autoritate și conversii.",
    category: "webapp",
    previewGradient: "from-[#0d1424] via-[#1a2540] to-[#2a3560]",
    previewImages: ["/p1.1.png", "/p1.2.png", "/p1.3.png", "/p1.4.png"],
    details: [
      "Obiectiv: Prezentarea modulelor și facilitarea înscrierii rapide.",
      "Livrare: Design modern · Structură UX intuitivă · CTA strategic · Optimizare pentru conversii",
      "Impact: Platformă pregătită pentru campanii ads și scalare digitală.",
    ],
    featuredGrid: true,
    year: "2025",
  },
  {
    title: "Valeria SMM",
    desc: "Landing pentru Ghid Simplu CapCut. Pagină creată pentru promovarea unui ghid gratuit despre realizarea reel-urilor direct de pe telefon.",
    category: "social",
    previewGradient: "from-[#1a1a26] via-[#2a2a3a] to-[#3a3340]",
    previewImages: ["/v1.png", "/v2.png", "/v3.png"],
    details: [
      "Livrare: Design curat · Structură pas cu pas · CTA pentru acces gratuit",
    ],
    featuredGrid: true,
    year: "2025",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="portofoliu"
      className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      {/* Header */}
      <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              SELECȚIE / 2025 — 2026
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-8"
        >
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
            Cazuri reale,
            <br />
            <span className="italic text-accent">rezultate</span> care vorbesc.
          </h2>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-border pb-6 md:gap-4">
        <span className="mr-2 font-mono text-[10px] tracking-[0.25em] text-muted">
          FILTREAZĂ:
        </span>
        {categories.map((category) => {
          const isActive = activeCategory === category.key;
          return (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              className={`group flex items-center gap-1.5 px-3 py-1.5 text-sm transition-colors ${
                isActive ? "text-accent" : "text-muted hover:text-text"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  isActive ? "bg-accent" : "bg-border-strong"
                }`}
              />
              <span className="font-display font-medium">{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects */}
      <motion.div layout className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className={`group relative ${
                project.featuredGrid
                  ? "md:col-span-2"
                  : index % 2 === 1
                  ? "md:mt-12"
                  : ""
              }`}
            >
              <a
                href={project.link ?? "#contact"}
                target={project.link?.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.link?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                {/* Top meta line */}
                <div className="mb-4 flex items-baseline justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
                    {String(index + 1).padStart(2, "0")} ·{" "}
                    {project.category === "webapp"
                      ? "WEB · APP"
                      : project.category === "social"
                      ? "SOCIAL · CONTENT"
                      : "BRAND · CREATIVE"}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
                    {project.year ?? "2025"}
                  </span>
                </div>

                {/* Visual */}
                {project.featuredGrid && project.previewImages?.length ? (
                  <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-center">
                    <div
                      className={`relative aspect-[2/1] overflow-hidden bg-bg-1`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.previewGradient}`}
                      />
                      <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-1.5 p-1.5">
                        {project.previewImages.map((src, i) => (
                          <div
                            key={src}
                            className={`relative overflow-hidden ${
                              project.previewImages!.length === 3 && i === 0
                                ? "row-span-2"
                                : ""
                            } ${
                              project.title === "Valeria SMM"
                                ? "bg-bg-0"
                                : ""
                            }`}
                          >
                            <Image
                              src={src}
                              alt={`${project.title} preview ${i + 1}`}
                              fill
                              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                              className={`transition-transform duration-700 group-hover:scale-105 ${
                                project.title === "Valeria SMM"
                                  ? "object-contain"
                                  : "object-cover"
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-2">
                      <h3 className="font-display text-3xl font-bold leading-[0.95] tracking-[-0.03em] text-text md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="text-[15px] font-normal leading-relaxed text-text-soft">
                        {project.desc}
                      </p>
                      {project.details ? (
                        <ul className="space-y-2.5 text-[14px] font-normal leading-relaxed text-text-soft">
                          {project.details.map((item) => (
                            <li key={item} className="flex gap-2.5">
                              <span className="mt-2 h-px w-2.5 shrink-0 bg-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <span className="cta-underline mt-2 text-sm">
                        {project.link ? "Vezi proiectul" : "Vreau ceva similar"}
                        <span aria-hidden className="cta-arrow">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative aspect-[5/4] overflow-hidden bg-bg-1">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.previewGradient} transition-transform duration-700 group-hover:scale-105`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(200,169,106,0.18),transparent_50%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.06),transparent_50%)]" />
                      </div>
                      <div className="absolute inset-0 grain" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-0 via-bg-0/40 to-transparent p-6">
                        <span className="font-display text-5xl font-extrabold leading-none text-text/20 md:text-7xl">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-6">
                      <div>
                        <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-text md:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-2 max-w-md text-[15px] font-normal leading-relaxed text-text-soft">
                          {project.desc}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="shrink-0 font-mono text-xs text-accent transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </>
                )}
              </a>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
