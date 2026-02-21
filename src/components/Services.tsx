"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

type ServiceMediaData =
  | {
      type: "video";
      src: string;
      mimeType: "video/mp4" | "video/webm" | "video/quicktime";
      label: string;
      gradient?: string;
    }
  | {
      type: "placeholder";
      label: string;
      gradient?: string;
    };

type ServiceItem = {
  title: string;
  desc: string;
  media: ServiceMediaData;
  points?: string[];
};

const services: ServiceItem[] = [
  {
    title: "Social Media Marketing",
    desc: "Strategii personalizate, optimizare de campanii și creștere organică.",
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
      label: "Video preview",
    },
  },
  {
    title: "Reels & Content Creation",
    desc: "Producție video verticală, scenarii și editare pentru reach maxim.",
    points: [
      "Producție video verticală pentru Reels, Instagram și alte platforme sociale.",
      "Concept creativ și dezvoltare scenarii orientate spre captarea rapidă a atenției.",
      "Filmări dinamice și editare optimizată pentru engagement și retenție ridicată.",
      "Creare de conținut strategic adaptat identității și obiectivelor brandului.",
      "Optimizare pentru algoritmi și maximizarea reach-ului organic și plătit.",
    ],
    media: {
      type: "video",
      src: "/Reels%20%26%20Content%20Creation.mp4",
      mimeType: "video/mp4",
      label: "Video preview",
      gradient: "from-[#1a1440] via-[#173061] to-[#114b7a]",
    },
  },
  {
    title: "Dezvoltare Aplicații",
    desc: "Aplicații mobile native sau cross-platform, cu focus pe UX.",
    points: [
      "Dezvoltare aplicații mobile native și cross-platform pentru iOS și Android.",
      "Design UI/UX modern, intuitiv și orientat pe experiența utilizatorului.",
      "Arhitectură scalabilă și integrare cu API-uri și servicii externe.",
      "Optimizare performanță, securitate și stabilitate pe termen lung.",
      "Mentenanță, actualizări și suport tehnic continuu post-lansare.",
    ],
    media: {
      type: "video",
      src: "/AppDEV.mp4",
      mimeType: "video/mp4",
      label: "Video preview",
      gradient: "from-[#101b3f] via-[#1b2f64] to-[#0b5d7a]",
    },
  },
  {
    title: "Website Development",
    desc: "Site-uri rapide, scalabile, optimizate pentru conversii.",
    points: [
      "Dezvoltare website-uri rapide, scalabile și optimizate pentru performanță ridicată.",
      "Design modern și structură UX orientată pe conversii și experiență intuitivă.",
      "Implementare funcționalități personalizate și integrare cu platforme externe.",
      "Optimizare SEO tehnică pentru vizibilitate și indexare eficientă.",
      "Mentenanță, actualizări și suport tehnic pentru stabilitate pe termen lung.",
    ],
    media: {
      type: "video",
      src: "/WebsiteDEV.mp4",
      mimeType: "video/mp4",
      label: "Video preview",
      gradient: "from-[#0d1d38] via-[#1a376f] to-[#155a83]",
    },
  },
  {
    title: "Inteligență Artificială",
    desc: "Automatizări, asistenți AI și fluxuri inteligente pentru procese mai rapide.",
    points: [
      "Automatizări inteligente pentru optimizarea proceselor interne și externe.",
      "Implementare asistenți virtuali și chatboți personalizați pentru suport rapid.",
      "Integrare AI în marketing, analiză date și generare conținut strategic.",
      "Dezvoltare fluxuri inteligente pentru eficiență operațională crescută.",
      "Optimizare continuă bazată pe date și algoritmi de învățare automată.",
    ],
    media: {
      type: "video",
      src: "/0221.mp4",
      mimeType: "video/mp4",
      label: "Video preview",
      gradient: "from-[#1a1436] via-[#23336d] to-[#1f6b8f]",
    },
  },
  {
    title: "Graphic Design",
    desc: "Identitate vizuală, materiale de brand și design creativ pentru campanii.",
    points: [
      "Creare identitate vizuală completă și ghid de brand profesional.",
      "Design logo, materiale de brand și elemente vizuale coerente.",
      "Concepte creative pentru campanii online și offline.",
      "Design grafic optimizat pentru social media și advertising digital.",
      "Adaptare vizuală pentru materiale print și suporturi digitale.",
    ],
    media: {
      type: "video",
      src: "/0223.mp4",
      mimeType: "video/mp4",
      label: "Video preview",
      gradient: "from-[#2a1738] via-[#3b2f72] to-[#2b6f99]",
    },
  },
];

function ServiceMedia({ media }: { media: ServiceMediaData }) {
  const [hasVideoError, setHasVideoError] = useState(false);
  const showVideo = media.type === "video" && !hasVideoError;
  const fallbackGradient = useMemo(
    () => media.gradient ?? "from-[#0b1d3a] via-[#12346b] to-[#0f6a8a]",
    [media.gradient]
  );

  return (
    <div className="relative mb-5 aspect-video overflow-hidden rounded-xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_55%_78%,rgba(255,255,255,0.12),transparent_35%)] transition-transform duration-500 ease-out group-hover:scale-105" />
      </div>

      {showVideo ? (
        <video
          className="relative z-10 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setHasVideoError(true)}
        >
          <source src={media.src} type={media.mimeType} />
        </video>
      ) : null}

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#020617]/55 via-[#020617]/20 to-transparent" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicii" className="mx-auto w-full max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col gap-3"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-muted">
          Servicii Digitale
        </p>
        <h2 className="text-3xl font-semibold text-text md:text-4xl">
          Tot ce ai nevoie pentru creștere digitală
        </h2>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 0 30px rgba(200, 169, 106, 0.28)",
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group rounded-2xl border border-border/70 bg-surface-1/70 p-6"
          >
            <ServiceMedia media={service.media} />
            <h3 className="mb-3 text-xl font-semibold text-text">
              {service.title}
            </h3>
            <p className="text-sm text-muted">
              {service.points ? null : service.desc}
            </p>
            {service.points ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted marker:text-white">
                {service.points.map((point) => (
                  <li key={point} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
            <Magnetic>
              <motion.a
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 24px rgba(88, 207, 255, 0.28)",
                }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-2.5 text-base font-semibold text-brand-navy shadow-glow transition hover:opacity-95"
              >
                Solicită ofertă
              </motion.a>
            </Magnetic>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
