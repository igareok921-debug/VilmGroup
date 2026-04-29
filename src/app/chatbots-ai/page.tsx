import type { Metadata } from "next";
import ServiceLandingPage from "@/components/seo/ServiceLandingPage";
import { getServicePage } from "@/data/servicePages";

const page = getServicePage("chatbots-ai");

export const metadata: Metadata = {
  title: "Chatbots AI și Automatizări",
  description:
    "Chatbots AI, asistenți personalizați și automatizări pentru website-uri, suport clienți, vânzări, conținut și workflow-uri de business.",
  keywords: page?.keywords,
  alternates: {
    canonical: "/chatbots-ai",
  },
  openGraph: {
    title: "Chatbots AI și Automatizări | Vilm Group",
    description:
      "Asistenți AI și automatizări pentru website-uri, suport clienți, vânzări și procese interne.",
    url: "/chatbots-ai",
  },
};

export default function ChatbotsAiPage() {
  if (!page) return null;
  return <ServiceLandingPage page={page} />;
}
