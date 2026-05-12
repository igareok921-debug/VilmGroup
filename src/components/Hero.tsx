"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { useI18n } from "@/i18n/I18nProvider";

function CountUp({
  to,
  delay = 0,
  duration = 1.6,
}: {
  to: number;
  delay?: number;
  duration?: number;
}) {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    const controls = animate(value, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => {
      unsub();
      controls.stop();
    };
  }, [to, delay, duration, value, rounded]);

  return <>{display}</>;
}

export default function Hero() {
  const { dictionary } = useI18n();
  const titleLines = dictionary.hero.titleLines;
  const titleAccent = dictionary.hero.accent;

  return (
    <section className="relative flex min-h-0 items-start overflow-hidden pt-20 pb-2 md:min-h-[100svh] md:items-center md:pt-28 md:pb-20">
      {/* Editorial top labels */}
      <div className="pointer-events-none absolute inset-x-0 top-24 z-[6] mx-auto flex max-w-7xl items-start justify-between px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden flex-col gap-1 md:flex"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
            {dictionary.hero.studio}
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
            {dictionary.hero.location}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden flex-col items-end gap-1 text-right md:flex"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
            {dictionary.hero.scroll}
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
            {dictionary.hero.explore}
          </span>
        </motion.div>
      </div>

      {/* Watermark — VILM GROUP huge in background */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-[1] -translate-y-1/2 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="font-display text-[22vw] font-extrabold leading-[0.85] tracking-[-0.05em] text-text/[0.09] md:text-[14vw]"
          >
            VILM
            <br />
            GROUP
          </motion.h2>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-[5] mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-12">
          {/* Headline column */}
          <div className="md:col-span-9">
            <h1 className="font-display text-balance text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl lg:text-[6rem]">
              {titleLines.map((line, lineIdx) => (
                <Fragment key={lineIdx}>
                  <span className="block">
                    {line.map((word, wIdx) => {
                      const delay = 0.25 + (lineIdx * 4 + wIdx) * 0.07;
                      const isAccent =
                        lineIdx === titleAccent.line &&
                        wIdx === titleAccent.word;
                      return (
                        <Fragment key={wIdx}>
                          <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.7,
                              delay,
                              ease: [0.65, 0, 0.35, 1],
                            }}
                            className={`inline-block ${
                              isAccent ? "italic text-accent" : ""
                            }`}
                          >
                            {word}
                          </motion.span>
                          {wIdx < line.length - 1 && " "}
                        </Fragment>
                      );
                    })}
                  </span>
                </Fragment>
              ))}
            </h1>
          </div>

          {/* Side column — subtitle + meta */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="md:col-span-3 md:pb-2"
          >
            <p className="text-base font-medium leading-relaxed text-text md:text-[16px]">
              {dictionary.hero.services}
            </p>
            <p className="mt-3 text-[15px] font-light leading-relaxed text-text-soft">
              {dictionary.hero.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Bottom row — CTAs + stats */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10 flex flex-col gap-6 border-t border-border pt-6 md:mt-24 md:flex-row md:items-end md:justify-between md:gap-8 md:pt-8"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <a className="btn-primary" href="#contact">
                {dictionary.hero.primaryCta}
                <span aria-hidden>→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn-ghost" href="#portofoliu">
                {dictionary.hero.secondaryCta}
              </a>
            </Magnetic>
          </div>

          <dl className="flex gap-10 md:gap-14">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.25em] text-muted">
                {dictionary.hero.stats.projects}
              </dt>
              <dd className="mt-1.5 font-display text-3xl font-bold leading-none tracking-[-0.03em] text-text md:text-4xl">
                <CountUp to={30} delay={1.3} />
                <span className="text-accent">+</span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.25em] text-muted">
                {dictionary.hero.stats.brands}
              </dt>
              <dd className="mt-1.5 font-display text-3xl font-bold leading-none tracking-[-0.03em] text-text md:text-4xl">
                <CountUp to={15} delay={1.45} />
                <span className="text-accent">+</span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-[0.25em] text-muted">
                {dictionary.hero.stats.years}
              </dt>
              <dd className="mt-1.5 font-display text-3xl font-bold leading-none tracking-[-0.03em] text-text md:text-4xl">
                <CountUp to={4} delay={1.6} duration={1.2} />
                <span className="text-accent">+</span>
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
