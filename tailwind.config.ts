import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-0": "var(--bg-0)",
        "bg-1": "var(--bg-1)",
        "brand-navy": "var(--brand-navy)",
        "brand-magenta": "var(--brand-magenta)",
        "brand-magenta-deep": "var(--brand-magenta-deep)",
        "surface-1": "var(--surface-1)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--muted)",
        "glow-cyan": "var(--glow-cyan)",
        "glow-violet": "var(--glow-violet)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      boxShadow: {
        glow: "0 0 34px rgba(200, 169, 106, 0.38)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
