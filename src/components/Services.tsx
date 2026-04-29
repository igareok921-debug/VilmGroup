"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

type ServiceMediaData = {
  type: "video";
  src: string;
  mimeType: "video/mp4" | "video/webm" | "video/quicktime";
  label: string;
  gradient?: string;
};

type ServiceItem = {
  href?: string;
  media: ServiceMediaData;
};

const services: ServiceItem[] = [
  {
    href: "/smm-chisinau",
    media: {
      type: "video",
      src: "/0215.mp4",
      mimeType: "video/mp4",
      label: "Video preview SMM",
    },
  },
  {
    href: "/branding-logo-design",
    media: {
      type: "video",
      src: "/0223.mp4",
      mimeType: "video/mp4",
      label: "Video preview Branding",
    },
  },
  {
    media: {
      type: "video",
      src: "/Reels%20%26%20Content%20Creation.mp4",
      mimeType: "video/mp4",
      label: "Video preview Graphic Design",
    },
  },
  {
    media: {
      type: "video",
      src: "/0221.mp4",
      mimeType: "video/mp4",
      label: "Video preview Content",
    },
  },
  {
    href: "/creare-website-uri",
    media: {
      type: "video",
      src: "/WebsiteDEV.mp4",
      mimeType: "video/mp4",
      label: "Video preview Web",
    },
  },
  {
    href: "/chatbots-ai",
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
  const { dictionary } = useI18n();

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
              {dictionary.servicesSection.eyebrow}
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
            {dictionary.servicesSection.titleBefore}{" "}
            <span className="italic text-accent">
              {dictionary.servicesSection.titleAccent}
            </span>
            <br />
            {dictionary.servicesSection.titleAfter}{" "}
            <span className="text-accent">
              {dictionary.servicesSection.titleStrong}
            </span>.
          </h2>
          <p className="mt-6 max-w-xl text-base font-normal text-text-soft md:text-lg">
            {dictionary.servicesSection.text}
          </p>
        </motion.div>
      </div>

      {/* Services grid — 3-col editorial layout with asymmetric offset */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
        {services.map((service, index) => {
          const content = dictionary.servicesSection.cards[index];
          // Editorial offset: middle column nudged down for asymmetric rhythm
          const offsetClass =
            index % 3 === 1 ? "lg:mt-12" : index % 3 === 2 ? "lg:mt-24" : "";
          return (
            <motion.article
              key={content.title}
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
                    {content.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-[10px] tracking-[0.18em] text-accent">
                    {content.tagline.toUpperCase()}
                  </p>
                </div>

                <div className="editorial-rule" />

                <ul className="space-y-2.5 text-[14px] font-normal leading-relaxed text-text-soft">
                  {content.points.map((point) => (
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
                    {dictionary.common.seeDetails} →
                  </Link>
                ) : null}

                <a
                  href="#contact"
                  className="cta-underline mt-4 text-sm"
                  aria-label={`${dictionary.common.requestOffer} ${content.title}`}
                >
                  {dictionary.common.requestOffer}
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
