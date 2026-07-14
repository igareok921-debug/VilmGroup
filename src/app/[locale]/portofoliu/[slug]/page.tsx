import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioCaseStudyPage from "@/components/portfolio/PortfolioCaseStudyPage";
import {
  getLocalizedPortfolioProject,
  getPortfolioProject,
  portfolioProjects,
} from "@/data/portfolioProjects";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { buildLocalizedMetadata } from "@/i18n/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    portfolioProjects.map((project) => ({ locale, slug: project.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const project = getPortfolioProject(slug);
  if (!project) return {};
  const localized = getLocalizedPortfolioProject(project, locale);

  return buildLocalizedMetadata({
    locale,
    path: `/portofoliu/${slug}`,
    seo: {
      title: `${project.client} — ${project.scope[locale]}`,
      description: localized.content.intro,
      keywords: project.seoKeywords[locale],
    },
  });
}

export default async function PortfolioProjectRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const project = getPortfolioProject(slug);
  if (!project) notFound();

  return (
    <I18nProvider locale={locale as Locale} dictionary={dictionaries[locale as Locale]}>
      <PortfolioCaseStudyPage project={project} />
    </I18nProvider>
  );
}
