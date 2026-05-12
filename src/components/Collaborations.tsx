"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";

type Collaboration = {
  name: string;
  logo?: string;
  large?: boolean;
};

const collaborations: Collaboration[] = [
  { name: "Nutopia", logo: "/Nutopia4.webp" },
  { name: "ViaLaser Irlanda" },
  { name: "Ali Nails Chișinău" },
  { name: "Femeia în Roșu" },
  { name: "Valeria SMM" },
  { name: "Curs SMM" },
  { name: "Farmacia Salutaris Farm" },
  { name: "Dr. Daria Stratan" },
  { name: "Alpen Pharma" },
  { name: "Lina Beauty Art Studio" },
];

export default function Collaborations() {
  const loop = [...collaborations, ...collaborations];

  return (
    <section className="relative w-full py-16 md:py-28">
      <span id="colaborari" className="absolute -top-24" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              COLABORĂRI
            </span>
          </div>

          <Logo variant="gold" className="mt-8 h-9 w-auto md:h-11" />

          <h2 className="mt-8 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-text md:text-6xl">
            Colaborări care au devenit parte din povestea Vilmgroup.
          </h2>
        </motion.div>
      </div>

      <div className="mt-12">
        <div className="relative overflow-hidden border-y border-border py-6 md:py-8">
          <div className="marquee marquee-slow marquee-reverse">
            {loop.map((item, index) => (
              <span
                key={`${item.name}-${index}`}
                className="flex shrink-0 items-center gap-8 px-8 font-display text-4xl font-bold uppercase tracking-[-0.03em] md:text-6xl"
              >
                {item.logo ? (
                  <span
                    className={`relative block ${
                      item.large
                        ? "h-40 w-[32rem] md:h-56 md:w-[56rem]"
                        : "h-16 w-44 md:h-20 md:w-56"
                    }`}
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      fill
                      sizes="224px"
                      className="object-contain"
                    />
                  </span>
                ) : (
                  <span
                    className={
                      index % 3 === 0
                        ? "text-text"
                        : index % 3 === 1
                        ? "text-accent"
                        : "text-text/30"
                    }
                  >
                    {item.name}
                  </span>
                )}
                <span aria-hidden className="text-2xl text-accent md:text-3xl">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
