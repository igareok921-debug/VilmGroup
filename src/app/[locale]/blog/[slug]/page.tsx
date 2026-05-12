import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "@/components/blog/BlogPostPage";
import { getAllBlogSlugs, getBlogPost, getLocalizedBlogPost } from "@/data/blogPosts";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { buildLocalizedMetadata } from "@/i18n/seo";

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const post = getBlogPost(slug);
  if (!post) return {};

  const t = getLocalizedBlogPost(post, locale);

  return buildLocalizedMetadata({
    locale,
    path: `/blog/${slug}`,
    seo: {
      title: t.title,
      description: t.excerpt,
      keywords: t.keywords,
    },
  });
}

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <I18nProvider locale={locale as Locale} dictionary={dictionaries[locale as Locale]}>
      <BlogPostPage post={post} />
    </I18nProvider>
  );
}
