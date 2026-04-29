import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vilmgroup.md"
);

const title = "Vilm Group — Website-uri, SMM, Branding & AI în Chișinău";
const description =
  "Creăm website-uri, SMM, branding, logo design, chatbots și automatizări AI pentru branduri din Chișinău, Moldova și România.";
const socialLinks = [
  "https://www.instagram.com/valeria_sirghii93/",
  "https://www.facebook.com/rusnac.valeria",
  "https://t.me/VALERIA_VILMGROUP",
];
const faqItems = [
  {
    question: "Cu ce se ocupă Vilm Group?",
    answer:
      "Vilm Group este un studio digital din Chișinău care oferă servicii de SMM, branding, logo design, creare website-uri, graphic design, content creation și automatizări AI.",
  },
  {
    question: "Faceți website-uri pentru afaceri?",
    answer:
      "Da. Creăm website-uri rapide, moderne și optimizate pentru conversii, potrivite pentru branduri, servicii, portofolii și afaceri locale sau internaționale.",
  },
  {
    question: "Puteți crea un logo și o identitate vizuală completă?",
    answer:
      "Da. Dezvoltăm logo, paletă de culori, direcție vizuală, materiale de brand și guideline pentru o imagine coerentă.",
  },
  {
    question: "Oferiți servicii SMM și administrare social media?",
    answer:
      "Da. Creăm strategie, content plan, vizualuri, texte, reels și campanii pentru Instagram, Facebook și alte platforme relevante.",
  },
  {
    question: "Puteți integra AI sau chatbot pe website?",
    answer:
      "Da. Putem crea chatboți AI, asistenți personalizați și automatizări pentru suport clienți, vânzări, conținut sau workflow intern.",
  },
  {
    question: "Cum pot primi o ofertă?",
    answer:
      "Ne trimiți câteva detalii despre proiect prin formularul de contact sau Telegram, iar noi revenim cu o propunere personalizată.",
  },
];

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Vilm Group",
  title: {
    default: title,
    template: "%s | Vilm Group",
  },
  description,
  keywords: [
    "Vilm Group",
    "Vilmgroup",
    "studio digital Chișinău",
    "SMM Chișinău",
    "servicii SMM Chișinău",
    "social media marketing Moldova",
    "branding Moldova",
    "branding Chișinău",
    "logo design Chișinău",
    "creare logo Moldova",
    "graphic design Moldova",
    "creare website-uri Moldova",
    "creare website Chișinău",
    "dezvoltare website Moldova",
    "website development Moldova",
    "web design Chișinău",
    "website pentru afaceri",
    "landing page Moldova",
    "chatbot AI Moldova",
    "chatbots pentru business",
    "asistenți AI personalizați",
    "AI pentru suport clienți",
    "automatizări AI Moldova",
    "AI automatizări business",
    "content creation Moldova",
    "producție reels Moldova",
  ],
  authors: [{ name: "Vilm Group", url: siteUrl.toString() }],
  creator: "Vilm Group",
  publisher: "Vilm Group",
  category: "Digital Marketing",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Vilm Group",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vilm Group — Website-uri, SMM, Branding & AI",
      },
    ],
    locale: "ro_MD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Vilm Group",
        url: siteUrl.toString(),
        logo: new URL("/LogoV5.svg", siteUrl).toString(),
        email: "info@vilmgroup.md",
        sameAs: socialLinks,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#business`,
        name: "Vilm Group",
        url: siteUrl.toString(),
        image: new URL("/opengraph-image", siteUrl).toString(),
        description,
        email: "info@vilmgroup.md",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chișinău",
          addressCountry: "MD",
        },
        areaServed: [
          { "@type": "Country", name: "Moldova" },
          { "@type": "Country", name: "Romania" },
          { "@type": "Place", name: "Europe" },
        ],
        serviceType: [
          "Social Media Marketing",
          "SMM",
          "Branding",
          "Logo Design",
          "Graphic Design",
          "Web Design",
          "Website Development",
          "Creare website-uri",
          "App Development",
          "AI Automation",
          "AI Assistants",
          "AI Chatbots",
          "Chatbots pentru suport clienți",
          "Content Creation",
          "Reels Production",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicii Vilm Group",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Creare website-uri și web design",
                description:
                  "Website-uri rapide, optimizate SEO, orientate spre conversie și experiență intuitivă.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SMM și social media marketing",
                description:
                  "Strategie, conținut, administrare social media și campanii pentru branduri.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Branding și logo design",
                description:
                  "Identitate vizuală, logo, guideline, direcție artistică și sistem vizual coerent.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI, chatbots și automatizări",
                description:
                  "Asistenți AI, chatboți personalizați și automatizări pentru suport clienți, vânzări și workflow.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Graphic design și content creation",
                description:
                  "Design pentru social media, campanii, materiale digitale, reels și conținut vizual.",
              },
            },
          ],
        },
        sameAs: socialLinks,
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}#webpage`,
        url: siteUrl.toString(),
        name: title,
        description,
        inLanguage: "ro-MD",
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
        about: {
          "@id": `${siteUrl}#business`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Vilm Group",
        url: siteUrl.toString(),
        inLanguage: "ro-MD",
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="ro-MD">
      <body
        className={`${syne.variable} ${manrope.variable} ${jetbrains.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
