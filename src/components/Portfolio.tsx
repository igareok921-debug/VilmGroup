"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type CategoryKey = "all" | "social" | "webapp" | "creative";

const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "Toate proiectele" },
  { key: "social", label: "Social Media & Content Marketing" },
  { key: "webapp", label: "Web & App Development" },
  { key: "creative", label: "Creative & Visual Production" },
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
}[] = [
  {
    title: "Femeia în Roșu",
    desc: "Landing pentru eveniment feminin premium. Platformă dedicată promovării unui eveniment inspirațional, construită pentru impact vizual și conversii.",
    category: "webapp",
    previewGradient: "from-[#0e223f] via-[#18406b] to-[#1e6a8f]",
    previewImages: [
      "/p4.png",
      "/p3.png",
      "/p2.png",
      "/P1.png",
    ],
    details: [
      "Speakeri: Alexandru Bordea — Business Mentor · Caraush Alina — Stylist · Emilia Ceaglic — Moderator · Maria Baciu — Tricoterapeut",
      "Livrare: Design elegant · UX orientat pe înscrieri · Evidențiere autoritate · CTA strategic",
    ],
    link: "https://femeia-in-rosu.vercel.app/",
    featuredGrid: true,
  },
  {
    title: "Curs SMM",
    desc: "Platformă educațională pentru Social Media Marketing. Landing dedicat promovării unui curs practic de SMM, structurat pentru claritate, autoritate și conversii.",
    category: "webapp",
    previewGradient: "from-[#11233a] via-[#1f4364] to-[#2f6f8a]",
    previewImages: ["/p1.1.png", "/p1.2.png", "/p1.3.png", "/p1.4.png"],
    details: [
      "Obiectiv: Prezentarea modulelor și facilitarea înscrierii rapide.",
      "Livrare: Design modern · Structură UX intuitivă · CTA strategic · Optimizare pentru conversii",
      "Impact: Platformă pregătită pentru campanii ads și scalare digitală.",
    ],
    link: "https://curs-smm.vercel.app/",
    featuredGrid: true,
  },
  {
    title: "Valeria SMM",
    desc: "Landing pentru Ghid Simplu CapCut. Pagină creată pentru promovarea unui ghid gratuit despre realizarea reel-urilor direct de pe telefon.",
    category: "social",
    previewGradient: "from-[#1b2942] via-[#23446d] to-[#2b6f95]",
    previewImages: ["/v1.png", "/v2.png", "/v3.png"],
    details: [
      "Livrare: Design curat · Structură pas cu pas · CTA pentru acces gratuit",
    ],
    link: "https://valeria-smm.vercel.app/",
    featuredGrid: true,
  },
  {
    title: "Core Systems Platform",
    desc: "Arhitectură web scalabilă cu integrare API și infrastructură pregătită pentru creștere.",
    category: "webapp",
    previewGradient: "from-[#0f2742] via-[#224872] to-[#2d7091]",
    link: "#contact",
  },
  {
    title: "Aurora Cosmetics Campaign",
    desc: "Content strategy și execuție Reels cu rezultate constante în engagement și conversii.",
    category: "social",
    previewGradient: "from-[#152740] via-[#1a3d67] to-[#255a8a]",
    link: "#contact",
  },
  {
    title: "Sierra Labs Product Launch",
    desc: "Campanii social media integrate cu funnel de conținut video optimizat pentru performanță.",
    category: "social",
    previewGradient: "from-[#201841] via-[#2c3975] to-[#1d5f8f]",
    link: "#contact",
  },
  {
    title: "Nova Brand Identity",
    desc: "Sistem vizual complet și guideline de brand pentru comunicare coerentă multi-canal.",
    category: "creative",
    previewGradient: "from-[#29193f] via-[#3c2f6f] to-[#2b6a90]",
    link: "#contact",
  },
  {
    title: "Pulse Visual Campaign",
    desc: "Direcție artistică și producție vizuală pentru campanii social-first premium.",
    category: "creative",
    previewGradient: "from-[#251d4a] via-[#3e3a7f] to-[#3473a3]",
    link: "#contact",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portofoliu" className="mx-auto w-full max-w-6xl px-6 py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col gap-3 md:mb-10"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Portofoliu
        </p>
        <h2 className="text-3xl font-semibold text-text md:text-4xl">
          Studii de caz care vorbesc prin rezultate
        </h2>
      </motion.div>

      <div className="mb-8 flex flex-wrap gap-3 md:mb-10">
        {categories.map((category) => {
          const isActive = activeCategory === category.key;
          return (
            <button
              key={category.key}
              type="button"
              onClick={() => setActiveCategory(category.key)}
              className={`rounded-2xl border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-accent-pink/70 bg-surface-1/90 text-text shadow-[0_0_18px_rgba(255,0,170,0.2)]"
                  : "border-border/70 bg-surface-1/50 text-muted hover:border-brand-magenta/60 hover:text-text"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              whileHover={{ y: -6, boxShadow: "0 0 34px rgba(88, 207, 255, 0.24)" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`group overflow-hidden rounded-2xl border border-border/70 bg-surface-1/60 p-5 ${
                project.featuredGrid ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div
                className={`relative mb-5 overflow-hidden rounded-xl ${
                  project.featuredGrid ? "aspect-[21/8]" : "aspect-video"
                }`}
              >
                {project.featuredGrid && project.previewImages?.length ? (
                  <div
                    className={`grid h-full gap-2 p-2 ${
                      project.previewImages.length === 3
                        ? "grid-cols-3"
                        : "grid-cols-2 grid-rows-2"
                    }`}
                  >
                    {project.previewImages.map((src) => (
                      <div
                        key={src}
                        className={`relative overflow-hidden rounded-lg ${
                          project.title === "Valeria SMM" ? "bg-bg-0/70" : ""
                        }`}
                      >
                        <Image
                          src={src}
                          alt={project.title}
                          fill
                          unoptimized
                          className={`transition-transform duration-500 group-hover:scale-105 ${
                            project.title === "Valeria SMM"
                              ? "object-contain"
                              : "object-cover"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/45 via-transparent to-transparent" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.previewGradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_55%_82%,rgba(255,255,255,0.12),transparent_35%)] transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/55 via-[#020617]/25 to-transparent" />
                  </div>
                )}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-text">{project.title}</h3>
              <p className="mb-5 text-sm text-muted">{project.desc}</p>
              {project.details ? (
                <div className="mb-5 space-y-2 text-sm text-muted">
                  {project.details.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              ) : null}

              <motion.a
                whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(88, 207, 255, 0.28)" }}
                whileTap={{ scale: 0.98 }}
                href={project.link ?? "#contact"}
                target={project.link?.startsWith("http") ? "_blank" : undefined}
                rel={project.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-brand-navy transition hover:opacity-95"
              >
                Vezi proiectul
              </motion.a>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
