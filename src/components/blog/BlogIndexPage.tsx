"use client";

import Image from "next/image";
import Link from "next/link";
import AssistantRobot from "@/components/AssistantRobot";
import DesktopVisualEffects from "@/components/DesktopVisualEffects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogCategoryLabels, blogImageBlurDataURL, blogPosts, getLocalizedBlogPost, type BlogCategory, type BlogPost } from "@/data/blogPosts";
import { useI18n } from "@/i18n/I18nProvider";
import { siteUrl } from "@/i18n/config";

function CategoryIcon({ name, className }: { name: BlogCategory; className?: string }) {
  const cls = className ?? "h-16 w-16";
  if (name === "website") {
    return (
      <svg viewBox="0 0 32 32" className={cls} fill="none" aria-hidden>
        <rect x="4" y="7" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 12h20M13 27h6M16 23v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M8 10h.1M11 10h.1M14 10h.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "smm") {
    return (
      <svg viewBox="0 0 32 32" className={cls} fill="none" aria-hidden>
        <path d="M7 17h4l11-6v14l-11-6H7v-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M11 19l2 6M25 13l3-2M26 18h3M25 23l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={cls} fill="none" aria-hidden>
      <rect x="5" y="8" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 14l-3 2 3 2M20 14l3 2-3 2M17 13l-2 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8V5M23 8V5M13 27h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BlogCardCover({
  post,
  variant = "small",
  index,
  alt,
  topLabel,
  bottomLabel,
}: {
  post: BlogPost;
  variant?: "small" | "featured";
  index?: number;
  alt: string;
  topLabel?: string;
  bottomLabel?: string;
}) {
  const isFeatured = variant === "featured";
  const aspectClass = isFeatured ? "aspect-[4/5]" : "aspect-[16/10]";
  const iconClass = isFeatured ? "h-32 w-32" : "h-20 w-20";

  return (
    <div
      className={`relative overflow-hidden border border-border bg-gradient-to-br ${post.gradient} ${aspectClass}`}
    >
      {post.coverImage ? (
        <Image
          src={post.coverImage}
          alt={alt}
          fill
          placeholder="blur"
          blurDataURL={blogImageBlurDataURL}
          sizes={isFeatured ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="scale-[1.001] transform-gpu object-cover transition-transform duration-500 ease-out will-change-transform [backface-visibility:hidden] group-hover:scale-105"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(200,169,106,0.4),transparent_50%)]" />
          <div className="absolute right-5 top-5 text-accent/30">
            <CategoryIcon name={post.category} className={iconClass} />
          </div>
          {typeof index === "number" ? (
            <div className="absolute -left-2 bottom-2 select-none font-display text-[10rem] font-bold leading-none tracking-[-0.08em] text-accent/10 md:text-[14rem]">
              {String(index + 1).padStart(2, "0")}
            </div>
          ) : null}
        </>
      )}
      {(topLabel || bottomLabel) && !post.coverImage ? (
        <div className="absolute bottom-6 left-6 right-6">
          {topLabel ? (
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
              {topLabel}
            </span>
          ) : null}
          {bottomLabel ? (
            <p className="mt-2 font-display text-xl font-bold leading-tight text-text">
              {bottomLabel}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}


const indexLabels = {
  ro: {
    eyebrow: "Blog · Vilm Group",
    title: "Idei, lecții și ghiduri despre digital, fără filtru.",
    description:
      "Articole scrise onest despre creare website-uri, SEO, SMM, content și conversii în Moldova. Cifre reale, greșeli observate și soluții aplicate.",
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
      "Honest articles about website creation, SEO, SMM, content and conversion in Moldova. Real numbers, observed mistakes and applied solutions.",
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
      "Честные статьи о создании сайтов, SEO, SMM, контенте и конверсиях в Молдове. Реальные цифры, ошибки и применённые решения.",
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
    publisher: { "@id": `${siteUrl}/#organization` },
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
      <DesktopVisualEffects />
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
                  <div className="hidden md:col-span-4 md:block">
                    <BlogCardCover
                      post={featured}
                      variant="featured"
                      alt={featuredT.title}
                      topLabel={labels.featured}
                      bottomLabel={labels.latest}
                    />
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
                {rest.map((post, idx) => {
                  const postT = getLocalizedBlogPost(post, locale);
                  return (
                    <Link
                      key={post.slug}
                      href={`${localePrefix}/blog/${post.slug}`}
                      className="group flex flex-col border border-border bg-bg-1/45 p-6 transition hover:border-accent hover:bg-bg-1/80"
                    >
                      <div className="mb-6 overflow-hidden">
                        <BlogCardCover post={post} variant="small" index={idx + 1} alt={postT.title} />
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
