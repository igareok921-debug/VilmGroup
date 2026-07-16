import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import {
  isLocale,
  localeLabels,
  locales,
  siteUrl as canonicalSiteUrl,
} from "@/i18n/config";
import CookieConsent from "@/components/CookieConsent";
import "../globals.css";

const siteUrl = new URL(canonicalSiteUrl);

const title = "Vilm Group — Creare Website-uri și SMM în Chișinău";
const description =
  "Creăm website-uri rapide și optimizate SEO și oferim servicii SMM cu strategie, content, Reels și Meta Ads pentru afaceri din Chișinău și Moldova.";
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
  ],
  authors: [{ name: "Vilm Group", url: siteUrl.toString() }],
  creator: "Vilm Group",
  publisher: "Vilm Group",
  category: "Digital Marketing",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
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
        alt: "Vilm Group — Creare Website-uri și SMM în Chișinău",
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Vilm Group",
        url: siteUrl.toString(),
        logo: {
          "@type": "ImageObject",
          url: new URL("/icon.svg", siteUrl).toString(),
          width: 512,
          height: 512,
        },
        image: new URL("/opengraph-image", siteUrl).toString(),
        description,
        email: "info@vilmgroup.md",
        telephone: "+37360718756",
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
                  "Website-uri și magazine online rapide, optimizate SEO, cu UI/UX și integrări AI atunci când susțin conversia.",
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
          ],
        },
        sameAs: socialLinks,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Vilm Group",
        url: siteUrl.toString(),
        inLanguage: ["ro-MD", "en", "ru"],
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
      },
    ],
  };

  return (
    <html lang={localeLabels[locale]}>
      <head>
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
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
