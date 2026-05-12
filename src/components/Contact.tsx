"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";

const CONTACT_EMAIL = "info@vilmgroup.md";

type Status = "idle" | "sending" | "sent" | "error";

const interests = [
  "SMM",
  "Branding",
  "Logo",
  "Graphic Design",
  "Website",
  "App",
  "AI",
];

export default function Contact() {
  const { dictionary, locale } = useI18n();
  const localizedInterests =
    locale === "ru"
      ? ["SMM", "Брендинг", "Логотип", "Графический дизайн", "Сайт", "Приложение", "AI"]
      : locale === "en"
      ? ["SMM", "Branding", "Logo", "Graphic Design", "Website", "App", "AI"]
      : interests;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleInterest = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((p) => p !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const composedMessage = selected.length
      ? `${dictionary.contactSection.interests}: ${selected.join(", ")}\n\n${message}`
      : message;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: composedMessage }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? dictionary.contactSection.error);
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setSelected([]);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : dictionary.contactSection.error
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-32"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        {/* Left — pitch */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 md:sticky md:top-32 md:self-start"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              {dictionary.contactSection.eyebrow}
            </span>
          </div>

          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-text md:text-7xl">
            {dictionary.contactSection.titleLine1}
            <br />
            {dictionary.contactSection.titleBeforeAccent}{" "}
            <span className="italic text-accent">
              {dictionary.contactSection.titleAccent}
            </span>.
          </h2>

          <p className="mt-6 max-w-md text-[17px] font-normal leading-relaxed text-text-soft">
            {dictionary.contactSection.text}
          </p>

          <div className="mt-12 space-y-6 border-t border-border pt-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-muted">
                {dictionary.contactSection.email}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="link-underline mt-1 inline-block font-display text-lg font-medium text-text"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-muted">
                {dictionary.contactSection.studio}
              </p>
              <span className="mt-1 inline-block font-display text-lg font-medium text-text">
                {dictionary.contactSection.city}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="relative space-y-10 rounded-2xl border border-white/15 bg-white/[0.05] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm md:p-10"
          >
            {/* Interests */}
            <div className="space-y-4">
              <label className="block font-mono text-[11px] tracking-[0.25em] text-muted">
                {dictionary.contactSection.interests}
              </label>
              <div className="flex flex-wrap gap-2">
                {localizedInterests.map((item) => {
                  const isOn = selected.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        isOn
                          ? "border-accent bg-accent text-bg-0"
                          : "border-white/25 bg-white/[0.08] text-text hover:border-accent hover:bg-white/[0.14]"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name + Email */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative">
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[11px] tracking-[0.25em] text-muted"
                >
                  {dictionary.contactSection.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-white/25 bg-white/[0.08] px-4 py-3.5 font-display text-lg text-text outline-none transition-colors placeholder:font-sans placeholder:font-normal placeholder:text-text-soft hover:border-white/40 hover:bg-white/[0.12] focus:border-accent focus:bg-white/[0.14]"
                  placeholder={dictionary.contactSection.namePlaceholder}
                />
              </div>
              <div className="group relative">
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[11px] tracking-[0.25em] text-muted"
                >
                  {dictionary.contactSection.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-white/25 bg-white/[0.08] px-4 py-3.5 font-display text-lg text-text outline-none transition-colors placeholder:font-sans placeholder:font-normal placeholder:text-text-soft hover:border-white/40 hover:bg-white/[0.12] focus:border-accent focus:bg-white/[0.14]"
                  placeholder="email@companie.md"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block font-mono text-[11px] tracking-[0.25em] text-muted"
              >
                  {dictionary.contactSection.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-2 w-full resize-none rounded-lg border border-white/25 bg-white/[0.08] px-4 py-3.5 font-display text-lg leading-relaxed text-text outline-none transition-colors placeholder:font-sans placeholder:font-normal placeholder:text-text-soft hover:border-white/40 hover:bg-white/[0.12] focus:border-accent focus:bg-white/[0.14]"
                placeholder={dictionary.contactSection.messagePlaceholder}
              />
            </div>

            <div className="flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
              <p className="font-mono text-[11px] tracking-[0.25em] text-muted">
                {dictionary.contactSection.reply}
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? dictionary.contactSection.sending
                  : dictionary.contactSection.submit}
                <span aria-hidden>→</span>
              </button>
            </div>

            {status === "sent" ? (
              <p
                role="status"
                className="font-mono text-xs tracking-[0.2em] text-accent"
              >
                ✓ {dictionary.contactSection.sent}
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="font-mono text-xs tracking-[0.2em] text-red-400">
                ✕ {errorMessage.toUpperCase()}
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
