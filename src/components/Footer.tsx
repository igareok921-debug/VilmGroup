import Logo from "./Logo";

const navLinks = [
  { href: "#servicii", label: "Servicii" },
  { href: "#portofoliu", label: "Portofoliu" },
  { href: "#testimoniale", label: "Recenzii" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/valeria_sirghii93?igsh=MW0xem1nNWlrNjNoMQ%3D%3D&utm_source=qr",
    label: "Instagram",
  },
  { href: "#contact", label: "LinkedIn" },
  {
    href: "https://www.facebook.com/rusnac.valeria?mibextid=wwXIfr&rdid=R9QlNIKZvhVc0a1f&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CFmXFSwx2%2F%3Fmibextid%3DwwXIfr%26ref%3D1#",
    label: "Facebook",
  },
  { href: "https://t.me/VALERIA_VILMGROUP", label: "Telegram" },
];

const marqueeWords = ["LET'S MAKE", "SOMETHING", "GREAT.", "✦"];

export default function Footer() {
  const loop = [...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <footer className="relative z-20 border-t border-border bg-bg-0">
      {/* Big marquee */}
      <div className="overflow-hidden border-b border-border py-10 md:py-14">
        <div className="marquee">
          {loop.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className={`flex shrink-0 items-center gap-10 px-10 font-display text-[8vw] font-extrabold uppercase leading-none tracking-[-0.05em] md:text-[7rem] ${
                word === "✦" ? "text-accent" : i % 4 === 2 ? "italic text-accent" : "text-text"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-6 md:col-span-5">
            <Logo variant="gold" className="h-9 w-auto self-start" />
            <p className="max-w-md text-[15px] font-normal leading-relaxed text-text-soft">
              Studio digital independent. Construim infrastructura digitală și
              imaginea online a brandurilor prin marketing, conținut și
              tehnologie.
            </p>
            <div className="mt-2 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
                ACCEPTĂM PROIECTE NOI
              </span>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.25em] text-muted">
              NAVIGARE
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline font-display text-base font-medium text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.25em] text-muted">
              SOCIAL
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline font-display text-base font-medium text-text"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.25em] text-muted">
              CONTACT
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:info@vilmgroup.md"
                  className="link-underline font-display text-base font-medium text-text"
                >
                  info@vilmgroup.md
                </a>
              </li>
              <li className="font-mono text-[10px] tracking-[0.2em] text-muted">
                CHIȘINĂU · MD
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] tracking-[0.25em] text-muted">
            © 2026 VILM GROUP — TOATE DREPTURILE REZERVATE
          </p>
          <div className="flex gap-6 font-mono text-[10px] tracking-[0.25em] text-muted">
            <a href="#" className="transition hover:text-accent">
              CONFIDENȚIALITATE
            </a>
            <a href="#" className="transition hover:text-accent">
              TERMENI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
