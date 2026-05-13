"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroCanvas from "@/components/HeroCanvas";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Collaborations from "@/components/Collaborations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MarqueeStrip from "@/components/MarqueeStrip";
import OfferBanner from "@/components/OfferBanner";
import ScrollPathLine from "@/components/ScrollPathLine";
import AssistantRobot from "@/components/AssistantRobot";
import { useI18n } from "@/i18n/I18nProvider";

export default function HomePage() {
  const { locale } = useI18n();
  const marqueeItems =
    locale === "en"
      ? ["Conversion", "Performance", "Identity", "Strategy", "Execution", "Creativity"]
      : locale === "ru"
      ? ["Конверсия", "Эффективность", "Айдентика", "Стратегия", "Реализация", "Креатив"]
      : ["Conversie", "Performanță", "Identitate", "Strategie", "Execuție", "Creativitate"];
  const primaryMarqueeItems =
    locale === "en"
      ? [
          "Social Media Marketing",
          "Branding & Identity",
          "Logo Design",
          "Graphic Design",
          "Website Development",
          "App Development",
          "Reels & Content",
          "AI Integration",
          "Visual Production",
        ]
      : locale === "ru"
      ? [
          "Social Media Marketing",
          "Брендинг & Айдентика",
          "Дизайн логотипа",
          "Графический дизайн",
          "Website Development",
          "App Development",
          "Reels & Content",
          "AI Integration",
          "Visual Production",
        ]
      : undefined;

  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vilmgroup.md"
  ).replace(/\/$/, "");

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Vilm Group",
    url: `${siteUrl}/`,
    image: `${siteUrl}/opengraph-image`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.svg`,
      width: 512,
      height: 512,
    },
    description:
      "Studio digital din Chișinău: creare website-uri, SMM, branding, logo design, chatbots AI și automatizări pentru branduri din Moldova, România și diaspora.",
    email: "info@vilmgroup.md",
    priceRange: "$$",
    currenciesAccepted: "EUR, USD, MDL, RON",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chișinău",
      addressRegion: "Sectorul Botanica",
      addressCountry: "MD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.0105,
      longitude: 28.8638,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.instagram.com/valeria_sirghii93/",
      "https://www.facebook.com/rusnac.valeria",
      "https://t.me/VALERIA_VILMGROUP",
    ],
  };

  return (
    <div className="relative min-h-screen bg-bg-0 text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroCanvas />
      <ScrollPathLine />
      <AssistantRobot />
      <div
        data-page-content
        className="relative z-10 flex min-h-screen flex-col"
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <MarqueeStrip items={primaryMarqueeItems} />
          <OfferBanner />
          <Services />
          <MarqueeStrip
            reverse
            items={[
              ...marqueeItems,
            ]}
            size="sm"
          />
          <Portfolio />
          <Collaborations />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
