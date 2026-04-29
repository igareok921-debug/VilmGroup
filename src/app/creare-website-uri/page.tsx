import type { Metadata } from "next";
import ServicePageWithLocale from "@/components/seo/ServicePageWithLocale";
import { getServicePage } from "@/data/servicePages";

const page = getServicePage("creare-website-uri");

export const metadata: Metadata = {
  title: "Creare Website-uri în Chișinău",
  description:
    "Creare website-uri rapide, moderne și optimizate SEO pentru afaceri din Chișinău, Moldova și România. Web design, landing page, chatbot AI și conversie.",
  keywords: page?.keywords,
  alternates: {
    canonical: "/creare-website-uri",
  },
  openGraph: {
    title: "Creare Website-uri în Chișinău | Vilm Group",
    description:
      "Website-uri rapide, moderne și optimizate SEO pentru branduri care vor să fie găsite și alese.",
    url: "/creare-website-uri",
  },
};

export default function WebsitePage() {
  if (!page) return null;
  return <ServicePageWithLocale locale="ro" page={page} />;
}
