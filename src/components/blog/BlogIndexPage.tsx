"use client";

import Link from "next/link";
import AssistantRobot from "@/components/AssistantRobot";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import Navbar from "@/components/Navbar";
import ScrollPathLine from "@/components/ScrollPathLine";
import { blogCategoryLabels, blogPosts, getLocalizedBlogPost } from "@/data/blogPosts";
import { useI18n } from "@/i18n/I18nProvider";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vilmgroup.md"
).replace(/\/$/, "");

const indexLabels = {
  ro: {
    eyebrow: "Blog · Vilm Group",
    title: "Idei, lecții și ghiduri despre digital, fără filtru.",
    description:
      "Articole onest scrise despre cum funcționează cu adevărat un website, SMM, branding și AI în Moldova și România. Cifre reale, greșeli pe care le-am văzut, lucruri pe care le facem.",
    featured: "Featured",
    latest: "Cel mai nou articol",
    readingTime: (n: number) => `${n} min citire`,
    readMore: "Citește articolul →",
    readShort: "Citește →",
  },
  en: {
    eyebrow: "Blog · Vilm Group",
    title: "Honest ideas, lessons and guides about digital — no filter.",
    description:
      "Honest articles about how a website, SMM, branding and AI actually work in Moldova and Romania. Real numbers, mistakes we've seen, things we do.",
    featured: "Featured",
    latest: "Latest article",
    readingTime: (n: number) => `${n} min read`,
    readMore: "Read the article →",
    readShort: "Read →",
  },
  ru: {
    eyebrow: "Блог · Vilm Group",
    title: "Идеи, уроки и гиды о digital, без фильтра.",
    description:
      "Честные статьи о том, как на самом деле работает сайт, SMM, брендинг и AI в Молдове и Румынии. Реальные цифры, ошибки, которые мы видели, вещи, которые мы делаем.",
    featured: "Featured",
    latest: "Самая новая статья",
    readingTime: (n: number) => `${n} мин чтения`,
    readMore: "Читать статью →",
    readShort: "Читать →",
  },
} as const;

export default function BlogIndexPage() {
  const { locale } = useI18n();
  const localePrefix = `/${locale}`;
  const pageUrl = `${siteUrl}${localePrefix}/blog`;
  const labels = indexLabels[locale];
  const categoryLabels = blogCategoryLabels[locale];

  const sortedPosts = [...blogPosts].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
  const [featured, ...rest] = sortedPosts;
  const featuredT = featured ? getLocalizedBlogPost(featured, locale) : null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${pageUrl}#blog`,
    name: "Vilm Group — Blog",
    description: labels.description,
    url: pageUrl,
    inLanguage: locale === "ro" ? "ro-MD" : locale,
    publisher: {
      "@type": "Organization",
      name: "Vilm Group",
      url: siteUrl,
    },
    blogPost: sortedPosts.map((post) => {
      const t = getLocalizedBlogPost(post, locale);
      return {
        "@type": "BlogPosting",
        headline: t.title,
        description: t.excerpt,
        datePublished: post.date,
        url: `${siteUrl}${localePrefix}/blog/${post.slug}`,
      };
    }),
  };

  return (
    <div className="relative min-h-screen bg-bg-0 text-text">
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
          <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-32 md:px-10 md:pb-16 md:pt-44">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                {labels.eyebrow}
              </span>
            </div>
            <h1 className="mt-8 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-text md:text-7xl">
              {labels.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-soft md:text-lg">
              {labels.description}
            </p>
          </section>

          {featured && featuredT ? (
            <section className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
              <Link
                href={`${localePrefix}/blog/${featured.slug}`}
                className="group block border border-border bg-bg-1/45 transition hover:border-accent"
              >
                <div className="grid gap-10 p-8 md:grid-cols-12 md:gap-12 md:p-12">
                  <div
                    className={`relative hidden aspect-[4/5] overflow-hidden border border-border bg-gradient-to-br ${featured.gradient} md:col-span-4 md:block`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(200,169,106,0.35),transparent_45%)]" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
                        {labels.featured}
                      </span>
                      <p className="mt-2 font-display text-xl font-bold leading-tight text-text">
                        {labels.latest}
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                        {categoryLabels[featured.category]}
                      </span>
                      <span className="text-muted">·</span>
                      <span className="text-xs text-text-soft">
                        {labels.readingTime(featured.readingTime)}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-text md:text-5xl">
                      {featuredT.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-soft md:text-lg">
                      {featuredT.excerpt}
                    </p>
                    <span className="mt-8 inline-flex font-display text-sm font-semibold text-accent transition group-hover:translate-x-1">
                      {labels.readMore}
                    </span>
                  </div>
                </div>
              </Link>
            </section>
          ) : null}

          {rest.length > 0 ? (
            <section className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => {
                  const postT = getLocalizedBlogPost(post, locale);
                  return (
                    <Link
                      key={post.slug}
                      href={`${localePrefix}/blog/${post.slug}`}
                      className="group flex flex-col border border-border bg-bg-1/45 p-6 transition hover:border-accent hover:bg-bg-1/80"
                    >
                      <div
                        className={`relative mb-6 aspect-[16/10] overflow-hidden bg-gradient-to-br ${post.gradient}`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(200,169,106,0.4),transparent_50%)]" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                        {categoryLabels[post.category]}
                      </span>
                      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-text">
                        {postT.title}
                      </h3>
                      <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-text-soft">
                        {postT.excerpt}
                      </p>
                      <span className="mt-6 inline-flex font-display text-sm font-semibold text-accent transition group-hover:translate-x-1">
                        {labels.readShort}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : null}
        </main>
        <Footer />
      </div>
    </div>
  );
}
