"use client";

const DEFAULT_ITEMS = [
  "Social Media Marketing",
  "Branding & Identitate",
  "Logo Design",
  "Graphic Design",
  "Website Development",
  "App Development",
  "Reels & Content",
  "AI Integration",
  "Visual Production",
];

type Props = {
  items?: string[];
  reverse?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function MarqueeStrip({
  items = DEFAULT_ITEMS,
  reverse,
  size = "md",
}: Props) {
  const sizeClass =
    size === "lg"
      ? "text-6xl md:text-8xl"
      : size === "sm"
      ? "text-2xl md:text-3xl"
      : "text-4xl md:text-6xl";

  // duplicate so the loop is seamless
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border py-6 md:py-8">
      <div className={`marquee marquee-slow ${reverse ? "marquee-reverse" : ""}`}>
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex shrink-0 items-center gap-8 px-8 font-display font-bold uppercase tracking-[-0.03em] ${sizeClass}`}
          >
            <span
              className={
                i % 3 === 0
                  ? "text-text"
                  : i % 3 === 1
                  ? "text-accent"
                  : "text-text/30"
              }
            >
              {item}
            </span>
            <span aria-hidden className="text-accent text-2xl md:text-3xl">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
