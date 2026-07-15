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
import { siteUrl } from "@/i18n/config";

export default function HomePage() {
  const { locale } = useI18n();
  const marqueeItems =
    locale === "en"
      ? ["Conversion", "Performance", "Identity", "Strategy", "Execution", "Creativity"]
      : locale === "ru"
      ? ["Конверсия", "Эффективность", "Айдентика", "Стратегия", "Реализация", "Креатив"]
      : ["Conversie", "Performanță", "Identitate", "Strategie", "Execuție", "Creativitate"];
  const primaryMarqueeItems =
    locale === "ro"
      ? [
          "Website Development & SEO",
          "Social Media Marketing",
          "Content · Reels · Meta Ads",
          "Magazine Online & AI integrate",
        ]
      : locale === "en"
      ? [
          "Website Development & SEO",
          "Social Media Marketing",
          "Content · Reels · Meta Ads",
          "Ecommerce & AI integrations",
        ]
      : locale === "ru"
      ? [
          "Разработка сайтов & SEO",
          "Social Media Marketing",
          "Контент · Reels · Meta Ads",
          "Ecommerce & AI интеграции",
        ]
      : undefined;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Vilm Group",
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/opengraph-image`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon.svg`,
      width: 512,
      height: 512,
    },
    description:
      locale === "en"
        ? "Digital studio in Chișinău focused on SEO-ready websites and SMM with strategy, content, Reels and Meta Ads for businesses in Moldova."
        : locale === "ru"
          ? "Digital-студия в Кишинёве, сфокусированная на сайтах с SEO и SMM со стратегией, контентом, Reels и Meta Ads для бизнеса в Молдове."
          : "Studio digital din Chișinău specializat în creare website-uri cu SEO și servicii SMM cu strategie, content, Reels și Meta Ads pentru afaceri din Moldova.",
    inLanguage: locale === "ro" ? "ro-MD" : locale,
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
    sameAs: [
      "https://www.instagram.com/valeria_sirghii93/",
      "https://www.facebook.com/rusnac.valeria",
      "https://t.me/VALERIA_VILMGROUP",
    ],
  };

  return (
    <div className="relative min-h-screen bg-bg-0 text-text">
      <a href="#main-content" className="skip-link">
        {locale === "ro"
          ? "Sari la conținut"
          : locale === "ru"
          ? "Перейти к содержимому"
          : "Skip to content"}
      </a>
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
        <main id="main-content" tabIndex={-1} className="flex-1">
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
