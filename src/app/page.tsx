import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroCanvas from "@/components/HeroCanvas";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-0 text-text">
      <HeroCanvas />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
