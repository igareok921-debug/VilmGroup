"use client";

import Link from "next/link";
import AssistantRobot from "@/components/AssistantRobot";
import DesktopVisualEffects from "@/components/DesktopVisualEffects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { blogCategoryLabels, blogImageBlurDataURL, getLocalizedBlogPost, getRelatedPosts, type BlogPost } from "@/data/blogPosts";
import { getServicePage } from "@/data/servicePages";
import { useI18n } from "@/i18n/I18nProvider";
import { siteUrl } from "@/i18n/config";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  const { locale } = useI18n();
  const localePrefix = `/${locale}`;
  const pageUrl = `${siteUrl}${localePrefix}/blog/${post.slug}`;
  const related = getRelatedPosts(post.slug, 2);
  const relatedService = post.relatedService ? getServicePage(post.relatedService) : null;
  const t = getLocalizedBlogPost(post, locale);
  const labels = blogCategoryLabels[locale];
  const faqTitle = {
    ro: {
      website: "Întrebări frecvente despre website-uri",
      smm: "Întrebări frecvente despre servicii SMM",
      ai: "Întrebări frecvente despre chatbot-uri AI",
    },
    en: {
      website: "Frequently asked questions about websites",
      smm: "Frequently asked questions about SMM services",
      ai: "Frequently asked questions about AI chatbots",
    },
    ru: {
      website: "Частые вопросы о создании сайтов",
      smm: "Частые вопросы об SMM-услугах",
      ai: "Частые вопросы об AI-чатботах",
    },
  }[locale][post.category];
  const serviceLinks = [
    {
      slug: "chatbots-ai",
      label: locale === "ro" ? "Chatbots AI" : locale === "ru" ? "AI-чатботы" : "AI chatbots",
    },
    {
      slug: "creare-website-uri",
      label: locale === "ro" ? "Creare website-uri" : locale === "ru" ? "Создание сайтов" : "Website creation",
    },
    {
      slug: "smm-chisinau",
      label: locale === "ro" ? "SMM Chișinău" : locale === "ru" ? "SMM в Кишинёве" : "SMM Chișinău",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Article", "BlogPosting"],
        "@id": `${pageUrl}#article`,
        headline: t.title,
        description: t.excerpt,
        image: post.coverImage ? `${siteUrl}${post.coverImage}` : `${siteUrl}/opengraph-image`,
        datePublished: `${post.date}T08:00:00+02:00`,
        dateModified: `${post.date}T08:00:00+02:00`,
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        keywords: t.keywords.join(", "),
        inLanguage: locale === "ro" ? "ro-MD" : locale,
        articleSection: labels[post.category],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Vilm Group", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}${localePrefix}/blog` },
          { "@type": "ListItem", position: 3, name: t.title, item: pageUrl },
        ],
      },
      ...(t.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: t.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
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
          <article className="mx-auto w-full max-w-3xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
            <nav className="mb-10 flex items-center gap-2 text-xs text-text-soft">
              <Link href={`${localePrefix}`} className="hover:text-accent">
                Acasă
              </Link>
              <span className="text-muted">/</span>
              <Link href={`${localePrefix}/blog`} className="hover:text-accent">
                Blog
              </Link>
              <span className="text-muted">/</span>
              <span className="truncate text-muted">{t.title}</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase">
                {labels[post.category]}
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-text md:text-6xl">
              {t.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-text-soft">
              <span>
                {locale === "ro"
                  ? "Echipa Vilm Group"
                  : locale === "ru"
                    ? "Команда Vilm Group"
                    : "Vilm Group team"}
              </span>
              <span className="text-muted">·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(
                  locale === "ro" ? "ro-RO" : locale === "ru" ? "ru-RU" : "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </time>
              <span className="text-muted">·</span>
              <span>
                {post.readingTime} {locale === "ro" ? "min citire" : locale === "ru" ? "мин чтения" : "min read"}
              </span>
            </div>

            <p className="mt-10 border-l-2 border-accent pl-6 text-lg leading-relaxed text-text-soft md:text-xl">
              {t.excerpt}
            </p>

            {post.coverImage ? (
              <div className="relative mt-12 aspect-[16/9] overflow-hidden border border-border">
                <Image
                  src={post.coverImage}
                  alt={t.title}
                  fill
                  placeholder="blur"
                  blurDataURL={blogImageBlurDataURL}
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : null}

            <div className="mt-12 space-y-7">
              {t.content.map((block, idx) => {
                if (block.type === "p") {
                  return (
                    <p
                      key={idx}
                      className="text-[17px] leading-[1.75] text-text-soft md:text-lg"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "h2") {
                  return (
                    <h2
                      key={idx}
                      id={block.id}
                      className="mt-16 scroll-mt-24 font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-text md:text-4xl"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={idx}
                      className="mt-10 font-display text-xl font-semibold leading-tight text-accent md:text-2xl"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={idx} className="space-y-3 pl-1">
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-6 text-[17px] leading-relaxed text-text-soft md:text-lg"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.85em] h-px w-3.5 bg-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "ol") {
                  return (
                    <ol key={idx} className="space-y-3 pl-1">
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-9 text-[17px] leading-relaxed text-text-soft md:text-lg"
                        >
                          <span
                            aria-hidden
                            className="absolute left-0 top-[0.1em] font-mono text-xs font-semibold text-accent"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-2 border-accent/60 pl-6 italic text-text md:text-lg"
                    >
                      “{block.text}”
                      {block.author ? (
                        <footer className="mt-3 not-italic text-sm text-muted">
                          — {block.author}
                        </footer>
                      ) : null}
                    </blockquote>
                  );
                }
                if (block.type === "callout") {
                  return (
                    <div
                      key={idx}
                      className="my-2 border border-accent/30 bg-accent/[0.04] px-6 py-5"
                    >
                      <p className="text-[16px] leading-relaxed text-text md:text-base">
                        {block.text}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {t.faqs?.length ? (
              <section
                aria-labelledby="article-faq-title"
                className="mt-20 border-t border-border pt-12"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  FAQ
                </p>
                <h2
                  id="article-faq-title"
                  className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl"
                >
                  {faqTitle}
                </h2>
                <div className="mt-8 space-y-6">
                  {t.faqs.map((faq) => (
                    <article key={faq.question} className="border-t border-border pt-5">
                      <h3 className="font-display text-xl font-semibold text-text">
                        {faq.question}
                      </h3>
                      <p className="mt-3 leading-relaxed text-text-soft">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            <aside className="mt-16 border border-border bg-bg-1/45 p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                {locale === "ro"
                  ? "Servicii conexe"
                  : locale === "ru"
                    ? "Связанные услуги"
                    : "Related services"}
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold text-text md:text-3xl">
                {locale === "ro"
                  ? "Construiește un sistem digital coerent"
                  : locale === "ru"
                    ? "Создайте целостную digital-систему"
                    : "Build a coherent digital system"}
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.slug}
                    href={`${localePrefix}/${service.slug}`}
                    className="border border-border px-4 py-3 font-display text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
                  >
                    {service.label} →
                  </Link>
                ))}
              </div>
            </aside>

            {relatedService ? (
              <div className="mt-20 border-y border-border bg-bg-1/45 px-6 py-10 md:px-10 md:py-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {locale === "ro"
                    ? "Vrei să discutăm proiectul tău?"
                    : locale === "ru"
                      ? "Хочешь обсудить свой проект?"
                      : "Want to discuss your project?"}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-text md:text-3xl">
                  {locale === "ro"
                    ? `Vezi pachetele complete pentru ${relatedService.shortTitle.toLowerCase()}`
                    : locale === "ru"
                      ? "Смотри полные пакеты услуг"
                      : "See the complete service packages"}
                </h3>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`${localePrefix}/${relatedService.slug}`}
                    className="btn-primary justify-center"
                  >
                    {locale === "ro" ? "Vezi serviciul" : locale === "ru" ? "Смотреть услугу" : "See the service"}
                    <span aria-hidden>→</span>
                  </Link>
                  <Link href={`${localePrefix}/#contact`} className="btn-ghost justify-center">
                    {locale === "ro" ? "Cere ofertă" : locale === "ru" ? "Запросить цену" : "Get a quote"}
                  </Link>
                </div>
              </div>
            ) : null}
          </article>

          {related.length > 0 ? (
            <section className="border-t border-border">
              <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {locale === "ro" ? "Mai citește" : locale === "ru" ? "Читать ещё" : "Read more"}
                  </span>
                </div>
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {related.map((item) => {
                    const itemT = getLocalizedBlogPost(item, locale);
                    return (
                      <Link
                        key={item.slug}
                        href={`${localePrefix}/blog/${item.slug}`}
                        className="group border border-border bg-bg-1/50 p-6 transition hover:border-accent hover:bg-bg-1/80"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                          {labels[item.category]}
                        </span>
                        <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-text">
                          {itemT.title}
                        </h3>
                        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-text-soft">
                          {itemT.excerpt}
                        </p>
                        <span className="mt-6 inline-flex font-display text-sm font-semibold text-accent transition group-hover:translate-x-1">
                          {locale === "ro" ? "Citește articolul →" : locale === "ru" ? "Читать статью →" : "Read article →"}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : null}
        </main>
        <Footer />
      </div>
    </div>
  );
}
