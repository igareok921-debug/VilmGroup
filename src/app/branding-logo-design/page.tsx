import type { Metadata } from "next";
import ServicePageWithLocale from "@/components/seo/ServicePageWithLocale";
import { getServicePage } from "@/data/servicePages";

const page = getServicePage("branding-logo-design");

export const metadata: Metadata = {
  title: "Branding și Logo Design",
  description:
    "Branding și logo design pentru afaceri din Chișinău, Moldova și România: identitate vizuală, paletă de culori, tipografie și materiale de brand.",
  keywords: page?.keywords,
  alternates: {
    canonical: "/branding-logo-design",
  },
  openGraph: {
    title: "Branding și Logo Design | Vilm Group",
    description:
      "Logo, identitate vizuală și sistem de brand pentru afaceri care vor o imagine memorabilă.",
    url: "/branding-logo-design",
  },
};

export default function BrandingPage() {
  if (!page) return null;
  return <ServicePageWithLocale locale="ro" page={page} />;
}
