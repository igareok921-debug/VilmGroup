"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

type CategoryKey = "all" | "social" | "webapp";

const categories: { key: CategoryKey }[] = [
  { key: "all" },
  { key: "social" },
  { key: "webapp" },
];

const portfolioImageBlur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy5vcmcvMjAwMC9zdmciIHdpZHRoPScxNicgaGVpZ2h0PScxMCc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzEwJyBmaWxsPScjMTQxMjFhJy8+PC9zdmc+";

const projects: {
  title: string;
  category: Exclude<CategoryKey, "all">;
  previewGradient: string;
  previewImages?: string[];
  link?: string;
  slug?: string;
  featuredGrid?: boolean;
  year?: string;
  copyIndex: number;
}[] = [
  {
    title: "The Visibility Summit",
    category: "webapp",
    previewGradient: "from-[#09090a] via-[#211719] to-[#c67a80]",
    previewImages: [
      "/portfolio/visibilitysummit/hero.webp",
      "/portfolio/visibilitysummit/trainers.webp",
      "/portfolio/visibilitysummit/tickets.webp",
      "/portfolio/visibilitysummit/stripe-checkout.webp",
    ],
    slug: "the-visibility-summit",
    featuredGrid: true,
    year: "LIVE · 2026",
    copyIndex: 5,
  },
  {
    title: "VILM SEO AI",
    category: "webapp",
    previewGradient: "from-[#11131f] via-[#24234f] to-[#6d5cf6]",
    previewImages: [
      "/portfolio/vilm-seo-ai/landing-light.png",
      "/portfolio/vilm-seo-ai/dashboard.png",
      "/portfolio/vilm-seo-ai/copilot.png",
      "/portfolio/vilm-seo-ai/keywords.png",
    ],
    slug: "vilm-seo-ai",
    featuredGrid: true,
    year: "BETA · 2026",
    copyIndex: 4,
  },
  {
    title: "CaroCakes",
    category: "webapp",
    previewGradient: "from-[#3a1d0f] via-[#6a3c24] to-[#e7cdb2]",
    previewImages: [
      "/portfolio/carocakes/gallery.png",
      "/portfolio/carocakes/prices.png",
      "/portfolio/carocakes/blog.png",
    ],
    slug: "carocakes",
    featuredGrid: true,
    year: "2026",
    copyIndex: 3,
  },
  {
    title: "Femeia în Roșu",
    category: "webapp",
    previewGradient: "from-[#1a0d18] via-[#2a1a26] to-[#3a1a2a]",
    previewImages: ["/p4.webp", "/p3.webp", "/p2.webp", "/P1.webp"],
    featuredGrid: true,
    year: "2025",
    copyIndex: 0,
  },
  {
    title: "Curs SMM",
    category: "webapp",
    previewGradient: "from-[#0d1424] via-[#1a2540] to-[#2a3560]",
    previewImages: ["/p1.1.webp", "/p1.2.webp", "/p1.3.webp", "/p1.4.webp"],
    featuredGrid: true,
    year: "2025",
    copyIndex: 1,
  },
  {
    title: "Valeria SMM",
    category: "social",
    previewGradient: "from-[#1a1a26] via-[#2a2a3a] to-[#3a3340]",
    previewImages: ["/v1.png", "/v2.png", "/v3.png"],
    featuredGrid: true,
    year: "2025",
    copyIndex: 2,
  },
];

export default function Portfolio() {
  const { dictionary, locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="portofoliu"
      className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-32"
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
              {dictionary.portfolio.eyebrow}
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
            {dictionary.portfolio.titleLine1}
            <br />
            <span className="italic text-accent">
              {dictionary.portfolio.titleAccent}
            </span>{" "}
            {dictionary.portfolio.titleRest}
          </h2>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-border pb-6 md:gap-4">
        <span className="mr-2 font-mono text-[10px] tracking-[0.25em] text-muted">
          {dictionary.portfolio.filter}
        </span>
        {categories.map((category) => {
          const isActive = activeCategory === category.key;
          return (
            <button
              key={category.key}
              type="button"
              aria-pressed={isActive}
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
              <span className="font-display font-medium">
                {dictionary.portfolio.categories[category.key]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects */}
      <motion.div layout className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const localizedProject = dictionary.portfolio.projects[project.copyIndex];
            const projectHref = project.slug
              ? `/${locale}/portofoliu/${project.slug}`
              : project.link ?? "#contact";

            return (
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
                href={projectHref}
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
                              alt={`Vilm Group portfoliu — ${project.title}, creare website și design Chișinău Moldova (imagine ${i + 1})`}
                              fill
                              placeholder="blur"
                              blurDataURL={portfolioImageBlur}
                              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                              className={`transform-gpu transition-transform duration-500 group-hover:scale-[1.025] ${
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
                        {localizedProject.desc}
                      </p>
                      {localizedProject.details ? (
                        <ul className="space-y-2.5 text-[14px] font-normal leading-relaxed text-text-soft">
                          {localizedProject.details.map((item) => (
                            <li key={item} className="flex gap-2.5">
                              <span className="mt-2 h-px w-2.5 shrink-0 bg-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <span className="cta-underline mt-2 text-sm">
                        {project.slug || project.link
                          ? dictionary.common.seeDetails
                          : dictionary.common.similar}
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
                          {localizedProject.desc}
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
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
