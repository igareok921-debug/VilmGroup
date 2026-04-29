import Link from "next/link";
import AssistantRobot from "@/components/AssistantRobot";
import Footer from "@/components/Footer";
import HeroCanvas from "@/components/HeroCanvas";
import Navbar from "@/components/Navbar";
import ScrollPathLine from "@/components/ScrollPathLine";
import { getServicePage, type ServicePage } from "@/data/servicePages";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vilmgroup.md"
).replace(/\/$/, "");

export default function ServiceLandingPage({ page }: { page: ServicePage }) {
  const relatedPages = page.related
    .map((slug) => getServicePage(slug))
    .filter((item): item is ServicePage => Boolean(item));
  const pageUrl = `${siteUrl}/${page.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: page.shortTitle,
        description: page.description,
        provider: {
          "@type": "Organization",
          name: "Vilm Group",
          url: siteUrl,
        },
        areaServed: [
          { "@type": "Country", name: "Moldova" },
          { "@type": "Country", name: "Romania" },
          { "@type": "City", name: "Chișinău" },
        ],
        serviceType: page.keywords,
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${page.shortTitle} | Vilm Group`,
        description: page.description,
        inLanguage: "ro-MD",
        about: {
          "@id": `${pageUrl}#service`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Vilm Group",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.shortTitle,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
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
          <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-36 md:grid-cols-12 md:px-10 md:pb-28 md:pt-44">
            <div className="md:col-span-4">
              <div className="sticky top-28">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-accent" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                    {page.eyebrow}
                  </span>
                </div>
                <p className="mt-8 max-w-sm text-sm leading-relaxed text-text-soft">
                  {page.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col">
                  <Link href="/#contact" className="btn-primary justify-center">
                    Cere ofertă
                    <span aria-hidden>→</span>
                  </Link>
                  <Link href="/#servicii" className="btn-ghost justify-center">
                    Vezi serviciile
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
                {page.title}
              </h1>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {page.heroPoints.map((point) => (
                  <div
                    key={point}
                    className="border border-border bg-bg-1/55 p-5 backdrop-blur-sm"
                  >
                    <span className="mb-5 block h-1.5 w-1.5 rounded-full bg-accent" />
                    <p className="text-sm leading-relaxed text-text-soft">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-border bg-bg-1/45">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-24">
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] tracking-[0.3em] text-accent">
                  CE OBȚII
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
                  Un serviciu gândit pentru rezultate, nu doar pentru aspect.
                </h2>
              </div>
              <div className="grid gap-4 md:col-span-8 md:grid-cols-2">
                {page.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-4 border-t border-border pt-5"
                  >
                    <span
                      aria-hidden
                      className="mt-3 h-px w-8 shrink-0 bg-accent"
                    />
                    <p className="text-base leading-relaxed text-text-soft">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-24">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent">
                PROCES
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
                Cum lucrăm.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ol className="grid gap-0 border-y border-border md:grid-cols-2">
                {page.process.map((step, index) => {
                  const isRightColumn = index % 2 === 1;
                  const isLastRow = index >= page.process.length - 2;

                  return (
                  <li
                    key={step}
                    className={`border-b border-border p-6 last:border-b-0 md:border-r ${
                      isRightColumn ? "md:border-r-0" : ""
                    } ${isLastRow ? "md:border-b-0" : ""}`}
                  >
                    <span className="font-mono text-xs tracking-[0.25em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-5 text-lg leading-relaxed text-text">
                      {step}
                    </p>
                  </li>
                  );
                })}
              </ol>
            </div>
          </section>

          <section className="border-y border-border bg-bg-1/35">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-24">
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] tracking-[0.3em] text-accent">
                  FAQ
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
                  Întrebări frecvente.
                </h2>
              </div>
              <div className="space-y-5 md:col-span-8">
                {page.faqs.map((faq) => (
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
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
                SERVICII CONECTATE
              </span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedPages.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="group border border-border bg-bg-1/50 p-6 transition hover:border-accent hover:bg-bg-1/80"
                >
                  <p className="font-display text-2xl font-bold text-text">
                    {related.shortTitle}
                  </p>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-text-soft">
                    {related.description}
                  </p>
                  <span className="mt-6 inline-flex font-display text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    Vezi pagina →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
