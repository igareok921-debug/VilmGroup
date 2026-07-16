"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import type { GoogleReviewsPayload } from "@/lib/googleBusinessReviews";

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
  const { dictionary, locale } = useI18n();
  const [activeVideo, setActiveVideo] = useState<
    (typeof videoTestimonials)[number] | null
  >(null);
  const [googleReviews, setGoogleReviews] = useState<GoogleReviewsPayload | null>(null);
  const [showAllGoogleReviews, setShowAllGoogleReviews] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/google-reviews", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: GoogleReviewsPayload | null) => setGoogleReviews(payload))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeVideo();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo, closeVideo]);

  return (
    <section
      id="testimoniale"
      className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-32"
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
              <button
                key={video.src}
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveVideo(video);
                }}
                className="group relative aspect-[9/16] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] text-left shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] transition hover:border-accent"
                aria-label={`${dictionary.testimonials.play} ${video.title} ${i + 1}`}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${video.poster})` }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-0 via-bg-0/15 to-transparent" />
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
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-bg-0 transition group-hover:bg-accent-soft" aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M8.25 5.25v13.5L18.75 12 8.25 5.25Z" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {googleReviews && googleReviews.reviews.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-border pt-8"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-accent">
                {dictionary.testimonials.googleReviews}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="font-display text-4xl font-bold text-text">
                  {googleReviews.averageRating.toFixed(1)}
                </span>
                <span className="flex text-lg text-accent" aria-label={`${googleReviews.averageRating} / 5`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} aria-hidden className={index < Math.round(googleReviews.averageRating) ? "" : "opacity-30"}>
                      ★
                    </span>
                  ))}
                </span>
                <span className="text-sm text-text-soft">
                  {dictionary.testimonials.basedOn} {googleReviews.totalReviewCount} {dictionary.testimonials.reviewsLabel}
                </span>
              </div>
            </div>
            <a
              href={googleReviews.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-border-strong px-5 py-2.5 font-display text-sm font-semibold text-text transition hover:border-accent hover:text-accent md:self-auto"
            >
              {dictionary.testimonials.viewOnGoogle}
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(showAllGoogleReviews
              ? googleReviews.reviews
              : googleReviews.reviews.slice(0, 6)
            ).map((review) => (
              <article
                key={review.id}
                className="flex min-h-56 flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display font-bold text-accent">
                      {review.author.charAt(0).toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-base font-semibold text-text">
                        {review.author}
                      </h3>
                      {review.createdAt ? (
                        <time className="text-xs text-muted" dateTime={review.createdAt}>
                          {new Intl.DateTimeFormat(
                            locale === "ro" ? "ro-MD" : locale === "ru" ? "ru-MD" : "en-GB",
                            { month: "long", year: "numeric" }
                          ).format(new Date(review.createdAt))}
                        </time>
                      ) : null}
                    </div>
                  </div>
                  <span className="font-display text-sm font-bold text-text" aria-label="Google">
                    G
                  </span>
                </div>
                <div className="mt-5 flex text-accent" aria-label={`${review.rating} / 5`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} aria-hidden className={index < review.rating ? "" : "opacity-25"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-4 line-clamp-6 text-sm leading-relaxed text-text-soft">
                  {review.comment || dictionary.testimonials.ratingOnly}
                </p>
              </article>
            ))}
          </div>

          {googleReviews.reviews.length > 6 ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllGoogleReviews((current) => !current)}
                className="min-h-11 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-bg-0 transition hover:bg-accent-soft"
              >
                {showAllGoogleReviews
                  ? dictionary.testimonials.showLess
                  : `${dictionary.testimonials.showAll} (${googleReviews.reviews.length})`}
              </button>
            </div>
          ) : null}
        </motion.div>
      ) : null}

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
            onClick={closeVideo}
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
                onClick={closeVideo}
                autoFocus
                className="absolute -top-12 right-0 min-h-11 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-text transition hover:border-accent hover:text-accent"
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
