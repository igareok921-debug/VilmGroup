export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  heroPoints: string[];
  benefits: string[];
  process: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "creare-website-uri",
    eyebrow: "WEB DESIGN · SEO · CONVERSIE",
    title: "Creare website-uri pentru branduri care vor să fie găsite și alese.",
    shortTitle: "Creare website-uri",
    description:
      "Creăm website-uri rapide, moderne și optimizate SEO pentru afaceri din Chișinău, Moldova și România: prezentare, landing page, portofoliu sau website de servicii.",
    keywords: [
      "creare website Chișinău",
      "creare site Moldova",
      "web design Chișinău",
      "website pentru afaceri",
      "landing page Moldova",
      "dezvoltare website Moldova",
    ],
    heroPoints: [
      "Structură clară pentru servicii, portofoliu, oferte și contact.",
      "Design premium adaptat identității brandului tău.",
      "SEO tehnic de bază: metadata, sitemap, performanță și indexare corectă.",
    ],
    benefits: [
      "Website rapid, responsive și ușor de folosit pe telefon.",
      "Copy și structură orientate spre cereri de ofertă, nu doar aspect vizual.",
      "Integrare formular, social media, tracking și chatbot AI la nevoie.",
      "Pregătire pentru Google Search Console și indexare corectă.",
    ],
    process: [
      "Clarificăm obiectivul, serviciile și publicul țintă.",
      "Construim structura paginilor și mesajele principale.",
      "Designăm interfața în stilul brandului și o dezvoltăm responsive.",
      "Optimizăm SEO tehnic, testăm performanța și pregătim lansarea.",
    ],
    faqs: [
      {
        question: "Cât durează crearea unui website?",
        answer:
          "Un website de prezentare poate fi gata în câteva săptămâni, în funcție de conținut, numărul de secțiuni și funcționalitățile necesare.",
      },
      {
        question: "Website-ul va fi optimizat pentru Google?",
        answer:
          "Da. Implementăm metadata, sitemap, structură semantică, performanță bună și conținut orientat pe căutările relevante pentru serviciul tău.",
      },
      {
        question: "Puteți adăuga chatbot AI pe website?",
        answer:
          "Da. Putem integra un asistent AI care răspunde vizitatorilor, colectează cereri și direcționează utilizatorii către ofertă sau contact.",
      },
    ],
    related: ["smm-chisinau", "branding-logo-design", "chatbots-ai"],
  },
  {
    slug: "smm-chisinau",
    eyebrow: "SMM · CONȚINUT · CAMPANII",
    title: "SMM în Chișinău pentru branduri care vor prezență constantă și conținut bun.",
    shortTitle: "SMM Chișinău",
    description:
      "Servicii SMM în Chișinău: strategie, administrare Instagram și Facebook, content plan, texte, vizualuri, reels și campanii pentru branduri locale.",
    keywords: [
      "SMM Chișinău",
      "servicii SMM Moldova",
      "administrare Instagram Chișinău",
      "social media marketing Moldova",
      "content creation Moldova",
      "reels pentru business",
    ],
    heroPoints: [
      "Strategie social media adaptată nișei și obiectivelor brandului.",
      "Content plan, texte, vizualuri și idei pentru reels.",
      "Prezență coerentă pe Instagram, Facebook și alte canale relevante.",
    ],
    benefits: [
      "Comunicare constantă și profesionistă cu publicul tău.",
      "Conținut vizual conectat cu identitatea brandului.",
      "Mesaje clare pentru servicii, produse, oferte și campanii.",
      "Analiză periodică și ajustări pe baza performanței.",
    ],
    process: [
      "Analizăm brandul, concurența și publicul țintă.",
      "Stabilim pilonii de conținut și direcția vizuală.",
      "Creăm calendarul editorial, textele și materialele vizuale.",
      "Publicăm, monitorizăm și optimizăm comunicarea.",
    ],
    faqs: [
      {
        question: "Ce include administrarea SMM?",
        answer:
          "Poate include strategie, calendar editorial, design postări, texte, reels, stories, campanii și raportare, în funcție de pachetul ales.",
      },
      {
        question: "Lucrați doar cu branduri din Chișinău?",
        answer:
          "Nu. Lucrăm cu branduri din Chișinău, Moldova, România și diaspora, atât timp cât putem construi o comunicare clară și eficientă.",
      },
      {
        question: "Faceți și conținut video pentru reels?",
        answer:
          "Da. Putem crea concepte, scripturi, editare și direcție pentru reels și conținut video vertical.",
      },
    ],
    related: ["branding-logo-design", "creare-website-uri", "chatbots-ai"],
  },
  {
    slug: "branding-logo-design",
    eyebrow: "LOGO · IDENTITATE · SISTEM VIZUAL",
    title: "Branding și logo design pentru afaceri care vor o imagine memorabilă.",
    shortTitle: "Branding & Logo",
    description:
      "Creăm logo, identitate vizuală, paletă de culori, tipografie, materiale de brand și direcție vizuală pentru afaceri din Moldova și România.",
    keywords: [
      "logo design Chișinău",
      "branding Moldova",
      "identitate vizuală Chișinău",
      "creare logo Moldova",
      "brand design Moldova",
      "graphic design Chișinău",
    ],
    heroPoints: [
      "Logo și identitate vizuală construite strategic, nu doar decorativ.",
      "Sistem coerent pentru social media, website, print și campanii.",
      "Direcție vizuală care face brandul recognoscibil.",
    ],
    benefits: [
      "Brand mai ușor de recunoscut și memorat.",
      "Vizualuri coerente pe toate canalele digitale.",
      "Materiale pregătite pentru social media, website și prezentări.",
      "Bază solidă pentru campanii, conținut și creștere.",
    ],
    process: [
      "Înțelegem poziționarea, publicul și personalitatea brandului.",
      "Explorăm direcții vizuale și alegem ruta potrivită.",
      "Construim logo-ul, culorile, fonturile și elementele grafice.",
      "Pregătim aplicații vizuale și recomandări de folosire.",
    ],
    faqs: [
      {
        question: "Primesc doar logo sau identitate completă?",
        answer:
          "Putem lucra doar pe logo, dar recomandăm identitate completă atunci când brandul are nevoie de consistență pe website, social media și materiale.",
      },
      {
        question: "Faceți redesign pentru logo existent?",
        answer:
          "Da. Putem moderniza un logo existent sau reconstrui identitatea vizuală fără să pierdem recunoașterea brandului.",
      },
      {
        question: "Brandingul poate fi folosit și pentru SMM?",
        answer:
          "Da. Construim sistemul vizual astfel încât să poată fi aplicat ușor în postări, stories, reels, bannere și materiale de campanie.",
      },
    ],
    related: ["smm-chisinau", "creare-website-uri", "chatbots-ai"],
  },
  {
    slug: "chatbots-ai",
    eyebrow: "AI · CHATBOTS · AUTOMATIZĂRI",
    title: "Chatbots AI și automatizări pentru website-uri și workflow-uri de business.",
    shortTitle: "Chatbots AI",
    description:
      "Implementăm chatbots AI, asistenți personalizați și automatizări pentru suport clienți, vânzări, conținut și procese interne.",
    keywords: [
      "chatbot AI Moldova",
      "chatbot pentru website",
      "asistent AI pentru business",
      "automatizări AI Moldova",
      "AI pentru suport clienți",
      "chatbots vânzări",
    ],
    heroPoints: [
      "Asistent AI conectat la întrebările reale ale clienților tăi.",
      "Răspunsuri rapide pentru servicii, oferte, programări și contact.",
      "Automatizări pentru conținut, suport, lead-uri și workflow intern.",
    ],
    benefits: [
      "Vizitatorii primesc răspuns imediat, fără să aștepte mesaj manual.",
      "Poți colecta cereri de ofertă și întrebări direct din website.",
      "Chatbotul poate vorbi în tonul brandului și poate direcționa către contact.",
      "AI-ul poate susține echipa în copy, idei, scripturi și procese repetitive.",
    ],
    process: [
      "Stabilim ce trebuie să știe și ce trebuie să facă asistentul AI.",
      "Pregătim promptul, regulile, mesajele și fluxurile principale.",
      "Integrăm chatbotul în website și îl conectăm la interfața potrivită.",
      "Testăm răspunsurile, ajustăm tonul și lansăm controlat.",
    ],
    faqs: [
      {
        question: "Chatbotul poate răspunde despre serviciile mele?",
        answer:
          "Da. Îl configurăm cu informațiile brandului, serviciile, tonul de voce și regulile de răspuns potrivite.",
      },
      {
        question: "Am nevoie de cont OpenAI?",
        answer:
          "Pentru un chatbot bazat pe OpenAI este nevoie de o cheie API configurată pe server, nu expusă public în browser.",
      },
      {
        question: "Poate chatbotul să trimită utilizatorul către Telegram sau formular?",
        answer:
          "Da. Poate ghida utilizatorul către ofertă, formular, Telegram, WhatsApp sau alte canale relevante.",
      },
    ],
    related: ["creare-website-uri", "smm-chisinau", "branding-logo-design"],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
