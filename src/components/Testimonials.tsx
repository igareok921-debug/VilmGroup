"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

const videoTestimonials = [
  {
    title: "ViaLaser Irlanda",
    duration: "00:40",
    src: "/reviews/review-1.mp4",
    poster: "/reviews/review-1.jpg",
  },
  {
    title: "Ali Nails Chișinău",
    duration: "00:57",
    src: "/reviews/review-2.mp4",
    poster: "/reviews/review-2-30.jpg",
  },
  {
    title: "Lina Beauty Art Studio",
    duration: "00:49",
    src: "/reviews/review-3.mp4",
    poster: "/reviews/review-3.jpg",
  },
];

export default function Testimonials() {
  const { dictionary } = useI18n();
  const [activeVideo, setActiveVideo] = useState<
    (typeof videoTestimonials)[number] | null
  >(null);

  return (
    <section
      id="testimoniale"
      className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
            {dictionary.testimonials.eyebrow}
          </span>
        </div>
        <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">
          {dictionary.testimonials.titleBefore}{" "}
          <span className="italic text-accent">
            {dictionary.testimonials.titleAccent1}
          </span>{" "}
          {dictionary.testimonials.titleMiddle}{" "}
          <span className="italic text-accent">
            {dictionary.testimonials.titleAccent2}
          </span>.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-text-soft">
          {dictionary.testimonials.text}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-14"
      >
        <div className="border-t border-border pt-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="font-mono text-[10px] tracking-[0.25em] text-accent">
              {dictionary.testimonials.videoReviews}
            </p>
            <p className="hidden font-mono text-[10px] tracking-[0.2em] text-muted sm:block">
              {dictionary.testimonials.clickPlay}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((video, i) => (
              <div
                key={video.src}
                className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] text-left shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition hover:border-accent"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.poster})` }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-0 via-bg-0/15 to-transparent" />
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="absolute inset-0 z-10 cursor-pointer"
                  aria-label={`${dictionary.testimonials.play} ${video.title} ${i + 1}`}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-accent">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {dictionary.testimonials.video}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-text">
                      {video.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted">
                      {video.duration}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActiveVideo(video);
                    }}
                    className="pointer-events-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-bg-0 transition hover:bg-accent-soft"
                    aria-label={`${dictionary.testimonials.play} ${video.title} ${i + 1}`}
                  >
                    ▶
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {activeVideo ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-bg-0/85 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[26rem]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-text transition hover:border-accent hover:text-accent"
              >
                {dictionary.testimonials.close}
              </button>
              <video
                className="max-h-[82svh] w-full rounded-2xl border border-white/15 bg-bg-0 shadow-[0_30px_90px_rgba(0,0,0,0.75)]"
                src={activeVideo.src}
                poster={activeVideo.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
