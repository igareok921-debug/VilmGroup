 "use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-6xl">
        <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-bg-0/85 px-6 py-3 backdrop-blur-md">
          <div className="h-12 w-12 overflow-visible">
            <Image
              src="/logo-v5.svg"
              alt="Vilm Group"
              width={48}
              height={48}
              unoptimized
              priority
              className="h-12 w-12 origin-left scale-[1.0] rounded-md object-cover"
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white md:flex">
            <a className="transition hover:text-accent-pink" href="#servicii">
              Servicii digitale
            </a>
            <a className="transition hover:text-accent-pink" href="#portofoliu">
              Studii de caz
            </a>
            <a className="transition hover:text-accent-pink" href="#proces">
              Metodologia noastră
            </a>
            <a className="transition hover:text-accent-pink" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="hidden rounded-2xl border border-border/80 px-4 py-2 text-sm font-medium text-white transition hover:border-accent-pink/80 hover:text-accent-pink md:inline-flex"
            href="#contact"
          >
            Cere ofertă
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-magenta via-accent-pink to-glow-cyan p-2 text-white shadow-glow transition hover:opacity-90 md:hidden"
            aria-label="Deschide meniul"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "mt-3 max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-border/60 bg-bg-0/90 p-4 backdrop-blur-md">
            <nav className="flex flex-col gap-2 text-sm text-white">
              <a
                className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-accent-pink"
                href="#servicii"
                onClick={closeMenu}
              >
                Servicii digitale
              </a>
              <a
                className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-accent-pink"
                href="#portofoliu"
                onClick={closeMenu}
              >
                Studii de caz
              </a>
              <a
                className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-accent-pink"
                href="#proces"
                onClick={closeMenu}
              >
                Metodologia noastră
              </a>
              <a
                className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-accent-pink"
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </nav>
            <a
              className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-border/80 px-4 py-2 text-sm font-medium text-white transition hover:border-accent-pink/80 hover:text-accent-pink"
              href="#contact"
              onClick={closeMenu}
            >
              Cere ofertă
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
