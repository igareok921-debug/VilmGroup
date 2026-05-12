import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vilmgroup.md"
);

const title = "Vilm Group — Website-uri, SMM, Branding & AI în Chișinău";
const description =
  "Creăm website-uri, SMM, branding, logo design, chatbots și automatizări AI pentru branduri din Chișinău, Moldova și România.";
const socialLinks = [
  "https://www.instagram.com/valeria_sirghii93/",
  "https://www.facebook.com/rusnac.valeria",
  "https://t.me/VALERIA_VILMGROUP",
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
    "studio digital Moldova",
    "agenție digitală Chișinău",
    "SMM Chișinău",
    "SMM Moldova",
    "servicii SMM",
    "social media marketing Moldova",
    "social media marketing România",
    "branding Moldova",
    "branding Chișinău",
    "branding România",
    "logo design Chișinău",
    "logo design Moldova",
    "creare logo Moldova",
    "creare logo profesional",
    "graphic design Moldova",
    "creare website Moldova",
    "creare website Chișinău",
    "creare website România",
    "creare website Rusia",
    "creare website-uri",
    "creare website Bălți",
    "creare website Cahul",
    "creare website Orhei",
    "dezvoltare website Moldova",
    "website development Moldova",
    "web design Moldova",
    "web design Chișinău",
    "web design România",
    "website pentru afaceri",
    "landing page Moldova",
    "landing page România",
    "chatbot AI Moldova",
    "chatbot AI România",
    "chatbots pentru business",
    "asistenți AI personalizați",
    "AI pentru suport clienți",
    "automatizări AI Moldova",
    "AI automatizări business",
    "content creation Moldova",
    "producție reels Moldova",
    "video reels Chișinău",
    "разработка сайтов Молдова",
    "создание сайтов Кишинев",
    "website development Romania",
    "branding agency Moldova",
  ],
  authors: [{ name: "Vilm Group", url: siteUrl.toString() }],
  creator: "Vilm Group",
  publisher: "Vilm Group",
  category: "Digital Marketing",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/vilm-favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/vilm-favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/vilm-favicon-192.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/ro",
    languages: {
      ro: "/ro",
      en: "/en",
      ru: "/ru",
      "x-default": "/ro",
    },
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
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}#business`,
        name: "Vilm Group",
        url: siteUrl.toString(),
        image: new URL("/opengraph-image", siteUrl).toString(),
        description,
        email: "info@vilmgroup.md",
        priceRange: "$$",
        currenciesAccepted: "EUR, USD, MDL, RON",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chișinău",
          addressRegion: "Sectorul Botanica",
          addressCountry: "MD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 47.0105,
          longitude: 28.8638,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "21:00",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "10",
          bestRating: "5",
          worstRating: "1",
        },
        areaServed: [
          { "@type": "Country", name: "Moldova" },
          { "@type": "Country", name: "Romania" },
          { "@type": "Country", name: "Russia" },
          { "@type": "City", name: "Chișinău" },
          { "@type": "City", name: "Bălți" },
          { "@type": "City", name: "Cahul" },
          { "@type": "City", name: "Orhei" },
          { "@type": "City", name: "București" },
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
    ],
  };

  return (
    <html lang="ro-MD">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="MD-CU" />
        <meta name="geo.placename" content="Chișinău" />
        <meta name="geo.position" content="47.0105;28.8638" />
        <meta name="ICBM" content="47.0105, 28.8638" />
      </head>
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
