import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vilm Group",
    short_name: "Vilm Group",
    description:
      "Studio digital din Chișinău pentru SMM, branding, website-uri, design, conținut și automatizări AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#08070a",
    theme_color: "#c8a96a",
    lang: "ro-MD",
    categories: ["business", "marketing", "productivity"],
    icons: [
      {
        src: "/vilm-favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/vilm-favicon-48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
