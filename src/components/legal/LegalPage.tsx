"use client";

import Link from "next/link";
import AssistantRobot from "@/components/AssistantRobot";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useI18n } from "@/i18n/I18nProvider";

type LegalKind = "privacy" | "terms" | "cookies";
type Section = { title: string; paragraphs?: string[]; items?: string[] };

const company = {
  ro: "VILM GROUP S.R.L., IDNO 1026600004708, companie înregistrată în Republica Moldova, cu activitate desfășurată online",
  en: "VILM GROUP S.R.L., IDNO 1026600004708, a company registered in the Republic of Moldova and operating online",
  ru: "VILM GROUP S.R.L., IDNO 1026600004708, компания, зарегистрированная в Республике Молдова и работающая онлайн",
} as const;

const content: Record<LegalKind, Record<"ro" | "en" | "ru", { eyebrow: string; title: string; intro: string; sections: Section[] }>> = {
  privacy: {
    ro: {
      eyebrow: "Document juridic",
      title: "Politica de confidențialitate",
      intro: `Această politică explică modul în care ${company.ro} colectează și utilizează datele personale prin vilmgroup.md.`,
      sections: [
        { title: "1. Operatorul datelor", paragraphs: [company.ro + ". Ne poți contacta la info@vilmgroup.md sau +373 60 718 756."] },
        { title: "2. Datele pe care le colectăm", items: ["Numele, adresa de email și informațiile incluse voluntar în formularele de contact.", "Mesajele și întrebările transmise chatbotului.", "Date tehnice și statistice despre utilizarea website-ului, numai după acceptarea cookies analytics.", "Date necesare ofertării, contractării, facturării și executării serviciilor."] },
        { title: "3. Scopuri și temeiuri", items: ["Răspunsul la solicitări și pregătirea ofertelor.", "Executarea contractelor și furnizarea serviciilor solicitate.", "Securitatea, prevenirea abuzurilor și funcționarea tehnică a website-ului.", "Analiza traficului prin Google Analytics, exclusiv pe baza consimțământului.", "Respectarea obligațiilor legale, contabile și fiscale."] },
        { title: "4. Furnizori și transferuri", paragraphs: ["Pentru operarea serviciilor putem utiliza furnizori precum Vercel (hosting), Zoho (email), Google Analytics și OpenAI (funcționalitatea chatbotului). Datele sunt transmise numai în măsura necesară furnizării serviciului. Unii furnizori pot procesa date în afara Republicii Moldova; aplicăm măsurile și garanțiile disponibile contractual."] },
        { title: "5. Durata păstrării", paragraphs: ["Solicitările fără contract sunt păstrate, de regulă, maximum 24 de luni. Documentele contractuale, contabile și fiscale se păstrează conform termenelor prevăzute de lege. Datele analytics sunt păstrate conform configurării Google Analytics și preferințelor tale."] },
        { title: "6. Drepturile tale", items: ["Acces la date și informații despre prelucrare.", "Rectificarea sau ștergerea datelor, când legea permite.", "Restricționarea sau opoziția față de prelucrare.", "Retragerea consimțământului în orice moment.", "Depunerea unei plângeri la autoritatea competentă pentru protecția datelor."] },
        { title: "7. Securitate și contact", paragraphs: ["Aplicăm măsuri tehnice și organizatorice rezonabile pentru protejarea datelor. Pentru orice solicitare privind confidențialitatea scrie la info@vilmgroup.md."] },
      ],
    },
    en: {
      eyebrow: "Legal document", title: "Privacy Policy", intro: `This policy explains how ${company.en} collects and uses personal data through vilmgroup.md.`,
      sections: [
        { title: "1. Data controller", paragraphs: [company.en + ". Contact: info@vilmgroup.md or +373 60 718 756."] },
        { title: "2. Data we collect", items: ["Name, email address and information voluntarily submitted through contact forms.", "Messages and questions sent to the chatbot.", "Technical and website usage statistics only after analytics cookies are accepted.", "Data required for quotes, contracts, invoicing and service delivery."] },
        { title: "3. Purposes and legal bases", items: ["Responding to requests and preparing quotes.", "Performing contracts and delivering requested services.", "Security, abuse prevention and technical website operation.", "Traffic analysis through Google Analytics based only on consent.", "Compliance with legal, accounting and tax obligations."] },
        { title: "4. Providers and transfers", paragraphs: ["We may use Vercel (hosting), Zoho (email), Google Analytics and OpenAI (chatbot functionality). Data is shared only as needed to provide the service. Some providers may process data outside Moldova; available contractual safeguards are used."] },
        { title: "5. Retention", paragraphs: ["Requests that do not lead to a contract are generally kept for no longer than 24 months. Contractual, accounting and tax records are retained for statutory periods. Analytics retention follows Google Analytics settings and your preferences."] },
        { title: "6. Your rights", items: ["Access and information about processing.", "Correction or deletion where permitted by law.", "Restriction of or objection to processing.", "Withdrawal of consent at any time.", "A complaint to the competent data protection authority."] },
        { title: "7. Security and contact", paragraphs: ["We use reasonable technical and organisational safeguards. Privacy requests can be sent to info@vilmgroup.md."] },
      ],
    },
    ru: {
      eyebrow: "Юридический документ", title: "Политика конфиденциальности", intro: `Эта политика объясняет, как ${company.ru} собирает и использует персональные данные через vilmgroup.md.`,
      sections: [
        { title: "1. Оператор данных", paragraphs: [company.ru + ". Контакты: info@vilmgroup.md или +373 60 718 756."] },
        { title: "2. Какие данные мы собираем", items: ["Имя, email и сведения, добровольно отправленные через формы.", "Сообщения и вопросы, отправленные чатботу.", "Техническая статистика только после согласия на analytics cookies.", "Данные для предложений, договоров, счетов и оказания услуг."] },
        { title: "3. Цели обработки", items: ["Ответ на запросы и подготовка предложений.", "Исполнение договоров и оказание услуг.", "Безопасность и техническая работа сайта.", "Google Analytics только на основании согласия.", "Выполнение юридических, бухгалтерских и налоговых обязанностей."] },
        { title: "4. Поставщики", paragraphs: ["Мы можем использовать Vercel, Zoho, Google Analytics и OpenAI. Данные передаются только в объёме, необходимом для услуги. Некоторые поставщики могут обрабатывать данные за пределами Молдовы с применением доступных договорных гарантий."] },
        { title: "5. Срок хранения", paragraphs: ["Запросы без заключённого договора обычно хранятся не более 24 месяцев. Договорные, бухгалтерские и налоговые документы — в установленные законом сроки."] },
        { title: "6. Ваши права", items: ["Доступ и информация об обработке.", "Исправление или удаление данных, когда это допускает закон.", "Ограничение обработки или возражение.", "Отзыв согласия в любой момент.", "Жалоба в компетентный орган по защите данных."] },
        { title: "7. Безопасность и контакты", paragraphs: ["Мы применяем разумные технические и организационные меры. Запросы направляйте на info@vilmgroup.md."] },
      ],
    },
  },
  terms: {
    ro: { eyebrow: "Document juridic", title: "Termeni și condiții", intro: `Acești termeni reglementează utilizarea vilmgroup.md și solicitarea serviciilor oferite de ${company.ro}.`, sections: [
      { title: "1. Despre website", paragraphs: ["Website-ul prezintă servicii de creare website-uri, SMM, magazine online, AI și servicii conexe. Informațiile publicate au caracter general și nu reprezintă automat o ofertă contractuală obligatorie."] },
      { title: "2. Solicitări și oferte", paragraphs: ["Trimiterea formularului nu creează automat un contract. Domeniul lucrării, prețul, termenele, livrabilele și numărul de revizii sunt stabilite în oferta, comanda sau contractul acceptat în scris de ambele părți."] },
      { title: "3. Prețuri și plăți", paragraphs: ["Prețurile «de la» sunt orientative. Prețul final depinde de complexitate, conținut, limbi, integrări și termene. Plățile, avansul și etapele sunt indicate în oferta sau factura proiectului."] },
      { title: "4. Obligațiile clientului", items: ["Furnizarea la timp a informațiilor, materialelor și feedbackului.", "Deținerea drepturilor pentru textele, imaginile, mărcile și materialele furnizate.", "Verificarea și aprobarea conținutului înainte de publicare.", "Achitarea plăților conform termenelor acceptate."] },
      { title: "5. Proprietate intelectuală", paragraphs: ["Drepturile asupra livrabilelor finale personalizate se transferă conform ofertei sau contractului și, de regulă, după plata integrală. Instrumentele, componentele reutilizabile, bibliotecile și serviciile terțe rămân supuse licențelor lor."] },
      { title: "6. Modificări, anulare și suport", paragraphs: ["Reviziile incluse, schimbările suplimentare, anularea, rambursările, mentenanța și suportul sunt stabilite pentru fiecare proiect în documentele acceptate. Lucrările deja executate și costurile terților pot rămâne datorate."] },
      { title: "7. Răspundere", paragraphs: ["Nu garantăm poziții fixe în Google, rezultate comerciale exacte sau performanța platformelor terțe. Răspunderea se limitează în măsura permisă de lege și conform contractului, fără a exclude drepturile obligatorii ale consumatorilor."] },
      { title: "8. Legea aplicabilă", paragraphs: ["Se aplică legislația Republicii Moldova. Părțile vor încerca soluționarea amiabilă, iar în lipsa unui acord litigiile vor fi înaintate instanțelor competente."] },
    ] },
    en: { eyebrow: "Legal document", title: "Terms and Conditions", intro: `These terms govern the use of vilmgroup.md and requests for services offered by ${company.en}.`, sections: [
      { title: "1. Website", paragraphs: ["The website presents website development, SMM, ecommerce, AI and related services. Published information is general and does not automatically constitute a binding contractual offer."] },
      { title: "2. Requests and proposals", paragraphs: ["Submitting a form does not automatically create a contract. Scope, price, schedule, deliverables and revisions are defined in a proposal, order or contract accepted in writing by both parties."] },
      { title: "3. Prices and payments", paragraphs: ["‘From’ prices are indicative. Final pricing depends on complexity, content, languages, integrations and deadlines. Deposits and payment stages are stated in the project proposal or invoice."] },
      { title: "4. Client responsibilities", items: ["Provide information, assets and feedback on time.", "Hold appropriate rights to supplied content and trademarks.", "Review and approve content before publication.", "Pay according to the accepted schedule."] },
      { title: "5. Intellectual property", paragraphs: ["Rights to custom final deliverables transfer as agreed and generally after full payment. Reusable tools, components, libraries and third-party services remain subject to their licenses."] },
      { title: "6. Changes, cancellation and support", paragraphs: ["Included revisions, extra changes, cancellation, refunds, maintenance and support are defined per project. Completed work and third-party costs may remain payable."] },
      { title: "7. Liability", paragraphs: ["We do not guarantee fixed Google rankings, exact commercial results or third-party platform performance. Liability is limited as permitted by law and contract without excluding mandatory consumer rights."] },
      { title: "8. Applicable law", paragraphs: ["The laws of the Republic of Moldova apply. Parties will first seek an amicable resolution; unresolved disputes go to the competent courts."] },
    ] },
    ru: { eyebrow: "Юридический документ", title: "Условия использования", intro: `Эти условия регулируют использование vilmgroup.md и заказ услуг, предлагаемых ${company.ru}.`, sections: [
      { title: "1. О сайте", paragraphs: ["Сайт представляет услуги создания сайтов, SMM, ecommerce, AI и связанные услуги. Опубликованная информация носит общий характер и не является автоматически обязательной офертой."] },
      { title: "2. Запросы и предложения", paragraphs: ["Отправка формы не создаёт договор автоматически. Объём, цена, сроки, результаты и правки определяются в письменно принятом предложении, заказе или договоре."] },
      { title: "3. Цены и оплата", paragraphs: ["Цены «от» ориентировочные. Финальная стоимость зависит от сложности, контента, языков, интеграций и сроков. Аванс и этапы оплаты указываются в предложении или счёте."] },
      { title: "4. Обязанности клиента", items: ["Своевременно предоставить материалы и обратную связь.", "Иметь права на предоставленный контент и товарные знаки.", "Проверить и утвердить контент до публикации.", "Оплачивать согласно принятому графику."] },
      { title: "5. Интеллектуальная собственность", paragraphs: ["Права на финальные индивидуальные материалы передаются согласно договорённости и обычно после полной оплаты. Повторно используемые инструменты, библиотеки и сторонние сервисы регулируются их лицензиями."] },
      { title: "6. Изменения, отмена и поддержка", paragraphs: ["Правки, дополнительные работы, отмена, возвраты, обслуживание и поддержка определяются отдельно для каждого проекта. Выполненная работа и расходы третьих сторон могут подлежать оплате."] },
      { title: "7. Ответственность", paragraphs: ["Мы не гарантируем фиксированные позиции Google, точные коммерческие результаты или работу сторонних платформ. Ответственность ограничивается в пределах закона и договора."] },
      { title: "8. Применимое право", paragraphs: ["Применяется законодательство Республики Молдова. Стороны сначала стремятся решить спор мирно, затем обращаются в компетентный суд."] },
    ] },
  },
  cookies: {
    ro: { eyebrow: "Preferințe și analytics", title: "Politica de cookies", intro: "Această pagină explică ce cookies folosim și cum îți poți controla preferințele.", sections: [
      { title: "1. Ce sunt cookies", paragraphs: ["Cookies sunt fișiere mici stocate de browser pentru funcționarea website-ului, memorarea preferințelor sau măsurarea utilizării acestuia."] },
      { title: "2. Cookies necesare", paragraphs: ["Website-ul salvează preferința ta privind cookies în localStorage sub cheia vilm-cookie-consent. Aceasta este necesară pentru a nu afișa bannerul la fiecare pagină și nu este utilizată pentru publicitate."] },
      { title: "3. Google Analytics", paragraphs: ["Google Analytics, identificator G-95RJQJBB7H, se încarcă numai după ce alegi «Accept analytics». Poate seta cookies precum _ga și _ga_*, utilizate pentru statistici despre vizite și pagini accesate."] },
      { title: "4. Alegerea și retragerea acordului", paragraphs: ["Poți refuza analytics fără a pierde funcțiile principale ale site-ului. Preferința poate fi schimbată oricând prin opțiunea «Setări cookies» din footer sau prin ștergerea datelor site-ului din browser."] },
      { title: "5. Servicii externe", paragraphs: ["Linkurile către rețele sociale și serviciile externe au propriile politici. Accesarea lor te transferă către platforma respectivă."] },
    ] },
    en: { eyebrow: "Preferences and analytics", title: "Cookie Policy", intro: "This page explains which cookies we use and how you can control your preferences.", sections: [
      { title: "1. What cookies are", paragraphs: ["Cookies are small files stored by the browser for website operation, preferences or usage measurement."] },
      { title: "2. Essential storage", paragraphs: ["The site stores your choice in localStorage under vilm-cookie-consent so the banner is not shown on every page. It is not used for advertising."] },
      { title: "3. Google Analytics", paragraphs: ["Google Analytics ID G-95RJQJBB7H loads only after you choose ‘Accept analytics’. It may set cookies such as _ga and _ga_* for visit and page statistics."] },
      { title: "4. Choice and withdrawal", paragraphs: ["You can refuse analytics without losing core website functions. Change your choice through ‘Cookie settings’ in the footer or clear site data in your browser."] },
      { title: "5. External services", paragraphs: ["Social links and external services have their own policies. Opening them takes you to the respective platform."] },
    ] },
    ru: { eyebrow: "Настройки и analytics", title: "Политика cookies", intro: "Здесь объясняется, какие cookies мы используем и как управлять настройками.", sections: [
      { title: "1. Что такое cookies", paragraphs: ["Cookies — небольшие файлы браузера для работы сайта, сохранения настроек или измерения использования."] },
      { title: "2. Необходимое хранилище", paragraphs: ["Выбор сохраняется в localStorage под ключом vilm-cookie-consent, чтобы баннер не показывался на каждой странице. Это не используется для рекламы."] },
      { title: "3. Google Analytics", paragraphs: ["Google Analytics с ID G-95RJQJBB7H загружается только после выбора «Разрешить analytics» и может установить _ga и _ga_* для статистики."] },
      { title: "4. Отказ и отзыв", paragraphs: ["Можно отказаться без потери основных функций. Изменить выбор можно через «Настройки cookies» в footer или удалив данные сайта в браузере."] },
      { title: "5. Внешние сервисы", paragraphs: ["Социальные сети и внешние сервисы имеют собственные политики. Переход по ссылке открывает соответствующую платформу."] },
    ] },
  },
};

export default function LegalPage({ kind }: { kind: LegalKind }) {
  const { locale } = useI18n();
  const page = content[kind][locale];
  return <>
    <AssistantRobot />
    <div className="relative z-10 min-h-screen"><Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{page.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-text md:text-7xl">{page.title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-text-soft">{page.intro}</p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{locale === "ro" ? "Ultima actualizare: 16 iulie 2026" : locale === "ru" ? "Обновлено: 16 июля 2026" : "Last updated: 16 July 2026"}</p>
        <div className="mt-16 space-y-12 border-t border-border pt-12">
          {page.sections.map((section) => <section key={section.title}>
            <h2 className="font-display text-2xl font-bold text-text md:text-3xl">{section.title}</h2>
            {section.paragraphs?.map((p) => <p key={p} className="mt-4 leading-7 text-text-soft">{p}</p>)}
            {section.items ? <ul className="mt-5 space-y-3">{section.items.map((item) => <li key={item} className="flex gap-3 leading-7 text-text-soft"><span className="mt-3 h-px w-3 shrink-0 bg-accent" aria-hidden />{item}</li>)}</ul> : null}
          </section>)}
        </div>
        <div className="mt-16 border-t border-border pt-8"><Link href={`/${locale}`} className="btn-ghost">← {locale === "ro" ? "Înapoi la homepage" : locale === "ru" ? "На главную" : "Back to homepage"}</Link></div>
      </main><Footer /></div>
  </>;
}
