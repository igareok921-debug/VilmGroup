"use client";

import Image from "next/image";
import Link from "next/link";
import AssistantRobot from "@/components/AssistantRobot";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import Navbar from "@/components/Navbar";
import ScrollPathLine from "@/components/ScrollPathLine";
import type { PortfolioProject } from "@/data/portfolioProjects";
import { useI18n } from "@/i18n/I18nProvider";
import { siteUrl } from "@/i18n/config";

const imageBlur =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy5vcmcvMjAwMC9zdmciIHdpZHRoPScxNicgaGVpZ2h0PScxMCc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzEwJyBmaWxsPScjZjVlYWRjJy8+PC9zdmc+";

export default function PortfolioCaseStudyPage({
  project,
}: {
  project: PortfolioProject;
}) {
  const { locale } = useI18n();
  const t = project.content[locale];
  const localePrefix = `/${locale}`;
  const pageUrl = `${siteUrl}${localePrefix}/portofoliu/${project.slug}`;
  const scope = project.scope[locale];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#project`,
        name: `${project.client} — ${scope}`,
        headline: t.title,
        description: t.intro,
        image: `${siteUrl}${project.coverImage}`,
        dateCreated: project.year,
        creator: { "@id": `${siteUrl}/#organization` },
        url: pageUrl,
        inLanguage: locale === "ro" ? "ro-MD" : locale,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Vilm Group", item: `${siteUrl}${localePrefix}` },
          { "@type": "ListItem", position: 2, name: "Portofoliu", item: `${siteUrl}${localePrefix}/#portofoliu` },
          { "@type": "ListItem", position: 3, name: project.client, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-0 text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroCanvas />
      <ScrollPathLine />
      <AssistantRobot />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <article>
            <header className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
              <nav className="mb-10 flex items-center gap-2 text-xs text-text-soft">
                <Link href={localePrefix} className="transition-colors hover:text-accent">
                  Vilm Group
                </Link>
                <span className="text-muted">/</span>
                <Link href={`${localePrefix}/#portofoliu`} className="transition-colors hover:text-accent">
                  {t.back}
                </Link>
              </nav>

              <div className="grid items-end gap-10 md:grid-cols-12">
                <div className="md:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-accent" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">
                      {t.eyebrow}
                    </span>
                  </div>
                  <p className="mt-8 font-display text-2xl font-semibold text-accent md:text-3xl">
                    {project.client}
                  </p>
                  <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.045em] text-text md:text-7xl lg:text-[5.5rem]">
                    {t.title}
                  </h1>
                </div>
                <div className="md:col-span-4 md:pb-2">
                  <p className="text-base leading-[1.75] text-text-soft md:text-lg">{t.intro}</p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-underline mt-7"
                  >
                    {t.visit} <span aria-hidden className="cta-arrow">↗</span>
                  </a>
                </div>
              </div>
            </header>

            <section className="mx-auto w-full max-w-7xl px-6 md:px-10">
              <div className="border border-[#eadac3]/20 bg-[#f5eadc] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:p-4">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#f5eadc]">
                  <Image
                    src={project.coverImage}
                    alt={`${project.client} — ${scope}`}
                    fill
                    priority
                    placeholder="blur"
                    blurDataURL={imageBlur}
                    sizes="(min-width: 1280px) 1200px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            <section className="mx-auto grid w-full max-w-7xl border-b border-border px-6 py-14 md:grid-cols-4 md:px-10 md:py-20">
              {[
                [t.labels.client, project.client],
                [t.labels.industry, project.industry[locale]],
                [t.labels.launch, project.launch[locale]],
                [t.labels.scope, scope],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-border py-5 md:border-l md:border-t-0 md:px-6 md:py-0 first:md:border-l-0 first:md:pl-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">{label}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-text">{value}</p>
                </div>
              ))}
            </section>

            <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
              <div className="md:col-span-5">
                <p className="eyebrow">01 — {t.challengeTitle}</p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">{t.challengeTitle}</h2>
                <p className="mt-6 text-lg leading-[1.8] text-text-soft">{t.challenge}</p>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="eyebrow">02 — {t.solutionTitle}</p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">{t.solutionTitle}</h2>
                <p className="mt-6 text-lg leading-[1.8] text-text-soft">{t.solution}</p>
              </div>
            </section>

            <section className="border-y border-border bg-surface-1/60">
              <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
                <div className="md:col-span-4">
                  <p className="eyebrow">{t.labels.services}</p>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-tight">{t.servicesTitle}</h2>
                </div>
                <ul className="grid gap-x-8 md:col-span-7 md:col-start-6 md:grid-cols-2">
                  {project.services.map((service, index) => (
                    <li key={service} className="flex items-center gap-4 border-b border-border py-4 text-text-soft">
                      <span className="font-mono text-[10px] text-accent">{String(index + 1).padStart(2, "0")}</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-32">
              <div className="grid gap-10 md:grid-cols-12">
                <div className="md:col-span-5">
                  <p className="eyebrow">03 — Results</p>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">{t.resultsTitle}</h2>
                </div>
                <p className="text-lg leading-relaxed text-text-soft md:col-span-5 md:col-start-8 md:pt-10">{t.resultsIntro}</p>
              </div>
              <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
                {t.results.map((result, index) => (
                  <div key={result} className="min-h-48 bg-bg-0 p-7 md:p-9">
                    <span className="font-display text-5xl font-bold text-accent/35">0{index + 1}</span>
                    <p className="mt-8 font-display text-xl font-semibold leading-snug text-text">{result}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-32">
              <div className="mb-12 max-w-3xl">
                <p className="eyebrow">04 — UI / UX</p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">{t.galleryTitle}</h2>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <figure key={image.src} className={index % 2 === 1 ? "md:mt-20" : ""}>
                    <div className="border border-[#eadac3]/20 bg-[#f5eadc] p-2">
                      <div
                        className={`relative overflow-hidden bg-[#f5eadc] ${
                          project.imageLayout === "wide" ? "aspect-[16/9]" : "aspect-[6/5]"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt[locale]}
                          fill
                          placeholder="blur"
                          blurDataURL={imageBlur}
                          sizes="(min-width: 768px) 48vw, 100vw"
                          className={`transition-transform duration-500 hover:scale-[1.015] ${
                            project.imageLayout === "wide" ? "object-contain" : "object-cover"
                          }`}
                        />
                      </div>
                    </div>
                    <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      {image.caption[locale]}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="border-y border-border bg-surface-1/60">
              <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
                <div className="md:col-span-4">
                  <p className="eyebrow">{t.proofEyebrow}</p>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-tight">{t.proofTitle}</h2>
                </div>
                <blockquote className="md:col-span-7 md:col-start-6">
                  {t.proofRating ? (
                    <div aria-label="5 din 5 stele" className="text-xl tracking-[0.2em] text-accent">★★★★★</div>
                  ) : null}
                  <p className={`${t.proofRating ? "mt-6" : ""} font-display text-2xl font-medium leading-[1.5] text-text md:text-4xl`}>“{t.proofQuote}”</p>
                  <footer className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t.proofNote}</footer>
                </blockquote>
              </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-32">
              <div className="relative overflow-hidden border border-accent/30 bg-accent/[0.06] px-7 py-12 md:px-14 md:py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
                <div className="relative grid items-end gap-8 md:grid-cols-12">
                  <div className="md:col-span-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">{t.ctaEyebrow}</p>
                    <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">{t.ctaTitle}</h2>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-soft">{t.ctaText}</p>
                  </div>
                  <div className="md:col-span-4 md:text-right">
                    <Link href={`${localePrefix}/#contact`} className="btn-primary">{t.ctaButton} <span aria-hidden>→</span></Link>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
