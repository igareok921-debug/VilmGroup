import type { Metadata } from "next";
import ServicePageWithLocale from "@/components/seo/ServicePageWithLocale";
import { getServicePage } from "@/data/servicePages";

const page = getServicePage("smm-chisinau");

export const metadata: Metadata = {
  title: "SMM Chișinău",
  description:
    "Servicii SMM în Chișinău: strategie social media, administrare Instagram și Facebook, content plan, vizualuri, reels și campanii pentru branduri.",
  keywords: page?.keywords,
  alternates: {
    canonical: "/smm-chisinau",
  },
  openGraph: {
    title: "SMM Chișinău | Vilm Group",
    description:
      "Strategie, conținut și administrare social media pentru branduri din Chișinău și Moldova.",
    url: "/smm-chisinau",
  },
};

export default function SmmPage() {
  if (!page) return null;
  return <ServicePageWithLocale locale="ro" page={page} />;
}
