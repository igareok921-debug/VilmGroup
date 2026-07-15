import { NextResponse } from "next/server";

const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";

const LANGUAGE_NAMES = {
  ro: "română",
  en: "English",
  ru: "русский",
} as const;

type Locale = keyof typeof LANGUAGE_NAMES;

function getSystemPrompt(locale: Locale) {
  const language = LANGUAGE_NAMES[locale];

  return `
Ești Vilm, asistentul AI al Vilmgroup, un studio digital din Chișinău.
Răspunzi în ${language}, scurt, cald și profesionist.
Folosește aceeași limbă ca interfața selectată. Dacă utilizatorul scrie în altă limbă, răspunde în limba utilizatorului.
Ajută vizitatorii să înțeleagă cele două servicii principale Vilmgroup:
website-uri cu SEO și SMM cu strategie, content, Reels și Meta Ads.
Magazinele online și integrările AI pot face parte din proiectele de website,
dar nu sunt poziționate ca direcții principale.
Dacă utilizatorul cere preț exact, explică faptul că oferta se face după brief
și invită-l să lase detalii în formularul de contact sau să scrie pe Telegram.
Nu promite lucruri tehnice sau termene ferme fără detalii despre proiect.
Păstrează răspunsurile la 2-4 propoziții.
`.trim();
}

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type OpenAIResponse = {
  output_text?: string;
  output?: Array<{
    content?: Array<{
      text?: string;
    }>;
  }>;
};

export async function POST(request: Request) {
  try {
    const { message, history, locale } = (await request.json()) as {
      message?: string;
      history?: ChatMessage[];
      locale?: string;
    };
    const currentLocale: Locale =
      locale === "en" || locale === "ru" || locale === "ro" ? locale : "ro";

    const cleanMessage = message?.trim();

    if (!cleanMessage) {
      return NextResponse.json(
        { error: "Scrie un mesaj pentru Vilm." },
        { status: 400 }
      );
    }

    if (cleanMessage.length > 1200) {
      return NextResponse.json(
        { error: "Mesajul este prea lung. Trimite o întrebare mai scurtă." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY lipsește din configurarea serverului." },
        { status: 500 }
      );
    }

    const recentHistory = Array.isArray(history) ? history.slice(-8) : [];
    const conversation = [
      ...recentHistory.map((item) => ({
        role: item.role,
        content: item.content.slice(0, 1200),
      })),
      { role: "user", content: cleanMessage },
    ];

    const response = await fetch(OPENAI_RESPONSES_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
        instructions: getSystemPrompt(currentLocale),
        input: conversation,
        max_output_tokens: 220,
      }),
    });

    const data = (await response.json()) as OpenAIResponse & {
      error?: { message?: string };
    };

    if (!response.ok) {
      console.error("OpenAI chat error:", data.error);
      return NextResponse.json(
        { error: "Vilm nu poate răspunde acum. Încearcă din nou puțin mai târziu." },
        { status: 500 }
      );
    }

    const reply =
      data.output_text ??
      data.output?.flatMap((item) => item.content ?? []).find((item) => item.text)
        ?.text;

    if (!reply) {
      return NextResponse.json(
        { error: "Nu am primit un răspuns valid de la AI." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      { error: "A apărut o eroare la chat. Încearcă din nou." },
      { status: 500 }
    );
  }
}
