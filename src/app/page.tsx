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

export default function Home() {
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
          <MarqueeStrip />
          <OfferBanner />
          <Services />
          <MarqueeStrip
            reverse
            items={[
              "Conversie",
              "Performanță",
              "Identitate",
              "Strategie",
              "Execuție",
              "Creativitate",
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
