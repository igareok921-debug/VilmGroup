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

  return (
    <div className="relative min-h-screen bg-bg-0 text-text">
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
