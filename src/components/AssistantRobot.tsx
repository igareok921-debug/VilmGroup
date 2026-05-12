"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/valeria_sirghii93/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="3.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="16.2" cy="7.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/rusnac.valeria?mibextid=wwXIfr&rdid=R9QlNIKZvhVc0a1f&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CFmXFSwx2%2F%3Fmibextid%3DwwXIfr%26ref%3D1#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          d="M14 8.2h2V5.1c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05v2.85H5v3.48h3.13V24h3.84v-7.67h3l.48-3.48h-3.48v-2.5c0-1 .27-2.15 2.03-2.15Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/37360718756",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          d="M12.1 4.4a7.35 7.35 0 0 0-6.3 11.15L5 20l4.55-.75A7.36 7.36 0 1 0 12.1 4.4Zm0 1.7a5.66 5.66 0 0 1 0 11.32c-.85 0-1.7-.2-2.45-.57l-.34-.17-1.82.3.3-1.78-.2-.35A5.66 5.66 0 0 1 12.1 6.1Zm-2.08 2.85c-.13 0-.33.05-.5.24-.18.2-.68.66-.68 1.6s.7 1.86.8 2c.1.13 1.35 2.15 3.34 2.92 1.65.64 2 .5 2.36.46.36-.03 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.38-.23l-1.12-.55c-.2-.1-.34-.15-.48.1-.15.25-.55.8-.67.96-.13.17-.25.18-.46.07-.2-.1-.86-.32-1.64-1.02-.6-.54-1.02-1.22-1.14-1.42-.12-.2-.01-.32.1-.43.1-.1.2-.25.3-.38.1-.13.13-.23.2-.38.07-.15.03-.28-.02-.38l-.5-1.2c-.13-.32-.27-.46-.47-.47Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/VALERIA_VILMGROUP",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          d="M20.8 4.65 17.9 18.3c-.22.97-.8 1.2-1.62.75l-4.48-3.3-2.16 2.08c-.24.24-.44.44-.9.44l.32-4.56 8.3-7.5c.36-.32-.08-.5-.56-.18L6.53 12.5l-4.42-1.38c-.96-.3-.98-.96.2-1.42L19.62 3c.8-.3 1.5.18 1.18 1.65Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function AssistantRobot() {
  const { dictionary, locale } = useI18n();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: dictionary.assistant.greeting,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = inputValue.trim();
    if (!message || isSending) {
      return;
    }

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: message },
    ];

    setMessages(nextMessages);
    setInputValue("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          history: messages,
          locale,
        }),
      });

      const data = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      if (!response.ok || !data.reply) {
        throw new Error(dictionary.assistant.fallback);
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply ?? "" },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : dictionary.assistant.fallback,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <nav
        className="pointer-events-auto fixed top-24 right-3 z-50 hidden flex-col gap-2 sm:right-6 md:top-36 md:right-10 md:flex"
        aria-label="Social media"
      >
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="social-cta-icon"
          >
            {item.icon}
          </a>
        ))}
      </nav>

      <div className="pointer-events-none fixed right-1 bottom-1 z-50 flex flex-col items-end sm:right-4 sm:bottom-4">
        <div
          className={`pointer-events-auto mb-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 ${
            isChatOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <div className="border-b border-white/15 px-4 py-3">
            <p className="font-mono text-[10px] tracking-[0.25em] text-accent">
              VILM AI ASSISTANT
            </p>
            <p className="mt-1 font-display text-base font-semibold text-text">
              {dictionary.assistant.bubble}
            </p>
          </div>

          <div className="space-y-3 px-4 py-4">
            <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                    message.role === "assistant"
                      ? "rounded-bl-md border-white/10 bg-white/[0.08] text-text-soft"
                      : "ml-8 rounded-br-md border-accent/35 bg-accent text-bg-0"
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isSending ? (
                <div className="inline-flex rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-text-soft">
                  {dictionary.assistant.typing}
                </div>
              ) : null}
            </div>

            <form onSubmit={handleSend} className="flex gap-2 border-t border-white/10 pt-3">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                maxLength={1200}
                placeholder={dictionary.assistant.placeholder}
                className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 text-sm text-text outline-none transition placeholder:text-muted hover:border-white/35 focus:border-accent"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isSending}
                className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-bg-0 transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-50"
              >
                {dictionary.assistant.send}
              </button>
            </form>
          </div>
        </div>

        {!isChatOpen ? (
          <button
            type="button"
            onClick={() => setIsChatOpen(true)}
            className="pointer-events-auto mb-1 max-w-[11.5rem] rounded-2xl rounded-br-md border border-white/15 bg-white/[0.05] px-3.5 py-2.5 text-left text-xs leading-snug text-text shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:border-accent sm:mb-2 sm:max-w-[13rem] sm:px-4 sm:py-3 sm:text-sm"
          >
            {dictionary.assistant.bubble}
          </button>
        ) : null}

        <div className="group relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="pointer-events-none h-32 w-32 object-contain drop-shadow-[0_22px_42px_rgba(0,0,0,0.45)] transition duration-300 group-hover:scale-[1.03] sm:h-52 sm:w-52 md:h-64 md:w-64"
            src="/robot-ai-safari.png"
            alt=""
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={() => setIsChatOpen((value) => !value)}
            className="pointer-events-auto absolute right-6 bottom-1 h-24 w-16 rounded-full sm:right-10 sm:bottom-3 sm:h-36 sm:w-28 md:right-12 md:bottom-4 md:h-44 md:w-36"
            aria-label={
              isChatOpen
                ? dictionary.assistant.closeChat
                : dictionary.assistant.openChat
            }
            aria-expanded={isChatOpen}
          />
        </div>
      </div>
    </>
  );
}
