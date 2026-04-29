"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ServiceMediaData = {
  type: "video";
  src: string;
  mimeType: "video/mp4" | "video/webm" | "video/quicktime";
  label: string;
  gradient?: string;
};

type ServiceItem = {
  title: string;
  tagline: string;
  href?: string;
  media: ServiceMediaData;
  points: string[];
};

const services: ServiceItem[] = [
  {
    title: "Social Media Marketing",
    tagline: "Strategie · Conținut · Performanță",
    href: "/smm-chisinau",
    points: [
      "Strategii personalizate, optimizare de campanii și creștere organică.",
      "Creare și administrare de conținut atractiv pentru branduri în creștere.",
      "Gestionare campanii plătite și optimizare continuă pentru conversii.",
      "Dezvoltare strategie de brand și poziționare pe piața digitală.",
      "Analiză de performanță și raportare bazată pe date reale.",
    ],
    media: {
      type: "video",
      src: "/0215.mp4",
      mimeType: "video/mp4",
      label: "Video preview SMM",
    },
  },
  {
    title: "Branding & Logo",
    tagline: "Identitate · Sistem vizual · Guideline",
    href: "/branding-logo-design",
    points: [
      "Creare identitate vizuală completă și ghid de brand profesional.",
      "Design logo, materiale de brand și elemente vizuale coerente.",
      "Sistem de tipografie, paletă cromatică și aplicații consistente.",
      "Direcție artistică și universul vizual al brandului.",
      "Adaptare vizuală pentru materiale print și suporturi digitale.",
    ],
    media: {
      type: "video",
      src: "/0223.mp4",
      mimeType: "video/mp4",
      label: "Video preview Branding",
    },
  },
  {
    title: "Graphic Design",
    tagline: "Print · Digital · Campanii",
    points: [
      "Concepte creative pentru campanii online și offline.",
      "Design grafic optimizat pentru social media și advertising digital.",
      "Materiale corporate și marketing collateral premium.",
      "Pitch decks, prezentări, broșuri și ediții speciale.",
      "Adaptare vizuală cross-canal cu coerență vizuală totală.",
    ],
    media: {
      type: "video",
      src: "/Reels%20%26%20Content%20Creation.mp4",
      mimeType: "video/mp4",
      label: "Video preview Graphic Design",
    },
  },
  {
    title: "Reels & Content",
    tagline: "Video vertical · Editing · Reach",
    points: [
      "Producție video verticală pentru Reels, Instagram și TikTok.",
      "Concept creativ și scenarii orientate spre captarea rapidă a atenției.",
      "Filmări dinamice și editare optimizată pentru engagement maxim.",
      "Conținut strategic adaptat identității și obiectivelor brandului.",
      "Optimizare pentru algoritmi și maximizarea reach-ului organic.",
    ],
    media: {
      type: "video",
      src: "/0221.mp4",
      mimeType: "video/mp4",
      label: "Video preview Content",
    },
  },
  {
    title: "Website Development",
    tagline: "Web Design · Performance · Conversie",
    href: "/creare-website-uri",
    points: [
      "Website-uri rapide, scalabile și optimizate pentru performanță ridicată.",
      "Design modern și UX orientat pe conversii și experiență intuitivă.",
      "Funcționalități personalizate și integrări cu platforme externe.",
      "Optimizare SEO tehnică pentru vizibilitate și indexare eficientă.",
      "Mentenanță, actualizări și suport tehnic pe termen lung.",
    ],
    media: {
      type: "video",
      src: "/WebsiteDEV.mp4",
      mimeType: "video/mp4",
      label: "Video preview Web",
    },
  },
  {
    title: "AI & Automatizări",
    tagline: "Asistenți AI · Workflow · Conținut",
    href: "/chatbots-ai",
    points: [
      "Implementare AI în workflow-ul de creație: text, imagini, video, brand.",
      "Asistenți și chatboți personalizați pentru suport clienți și vânzări.",
      "Generare conținut strategic la scară: copy, vizualuri, scripturi.",
      "Consultanță practică: cum integrezi AI inteligent în businessul tău.",
    ],
    media: {
      type: "video",
      src: "/AppDEV.mp4",
      mimeType: "video/mp4",
      label: "Video preview AI & Automatizări",
    },
  },
];

function ServiceMedia({ media }: { media: ServiceMediaData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const fallbackGradient = useMemo(
    () => media.gradient ?? "from-[#0c0a14] via-[#1c1a25] to-[#3a3445]",
    [media.gradient]
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const showVideo = shouldLoad && !hasVideoError;

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden bg-bg-1"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`} />

      {showVideo ? (
        <video
          className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.label}
          onError={() => setHasVideoError(true)}
        >
          <source src={media.src} type={media.mimeType} />
        </video>
      ) : null}

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-bg-0/80 via-bg-0/10 to-transparent" />
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="servicii"
      className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      {/* Section header */}
      <div className="mb-16 grid gap-8 md:mb-20 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              SERVICII
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-8"
        >
          <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
            Tot ce face <span className="italic text-accent">brandul tău</span>
            <br />
            să fie <span className="text-accent">remarcabil</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base font-normal text-text-soft md:text-lg">
            De la prima impresie până la sistemul vizual complet — un studio
            care lucrează ca o extensie a echipei tale.
          </p>
        </motion.div>
      </div>

      {/* Services grid — 3-col editorial layout with asymmetric offset */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
        {services.map((service, index) => {
          // Editorial offset: middle column nudged down for asymmetric rhythm
          const offsetClass =
            index % 3 === 1 ? "lg:mt-12" : index % 3 === 2 ? "lg:mt-24" : "";
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
              className={`group relative ${offsetClass}`}
            >
              <ServiceMedia media={service.media} />

              <div className="mt-5 space-y-3">
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-text md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[10px] tracking-[0.18em] text-accent">
                    {service.tagline.toUpperCase()}
                  </p>
                </div>

                <div className="editorial-rule" />

                <ul className="space-y-2.5 text-[14px] font-normal leading-relaxed text-text-soft">
                  {service.points.slice(0, 3).map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-2 h-px w-2.5 shrink-0 bg-accent"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {service.href ? (
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex font-display text-sm font-semibold text-accent transition hover:translate-x-1 hover:text-accent-soft"
                  >
                    Vezi detalii →
                  </Link>
                ) : null}

                <a
                  href="#contact"
                  className="cta-underline mt-4 text-sm"
                  aria-label={`Solicită ofertă pentru ${service.title}`}
                >
                  Solicită ofertă
                  <span aria-hidden className="cta-arrow">
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
