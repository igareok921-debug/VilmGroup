import Link from "next/link";

export type PricingPackage = {
  name: string;
  price: string;
  delivery?: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export default function PricingPackages({
  title,
  eyebrow,
  description,
  packages,
  trustText,
  additionalServices,
  popularLabel,
  additionalServicesTitle,
  ctaLabel,
  contactHref,
}: {
  title: string;
  eyebrow: string;
  description: string;
  packages: PricingPackage[];
  trustText?: string;
  additionalServices?: string[];
  popularLabel: string;
  additionalServicesTitle: string;
  ctaLabel: string;
  contactHref: string;
}) {
  return (
    <section className="border-y border-border bg-bg-1/35">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                {eyebrow}
              </p>
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-text md:text-6xl">
              {title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-text-soft md:col-span-5 md:justify-self-end">
            {description}
          </p>
        </div>

        {trustText ? (
          <p className="mt-10 border-l-2 border-accent pl-4 font-display text-base font-semibold text-text md:text-lg">
            {trustText}
          </p>
        ) : null}

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`relative flex min-h-full flex-col border p-7 transition duration-300 md:p-8 ${
                item.popular
                  ? "z-10 border-accent bg-accent/[0.065] shadow-[0_28px_90px_-42px_rgba(200,169,106,0.9)] lg:scale-105"
                  : "border-border bg-bg-0/55 hover:border-accent/45"
              }`}
            >
              {item.popular ? (
                <span className="absolute right-5 top-0 -translate-y-1/2 bg-accent px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-bg-0">
                  {popularLabel}
                </span>
              ) : null}

              <div>
                {item.delivery ? (
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {item.delivery}
                  </p>
                ) : null}
                <p className="font-display text-2xl font-bold leading-tight text-text">
                  {item.name}
                </p>
                <p className="mt-4 font-display text-3xl font-semibold text-accent">
                  {item.price}
                </p>
                <p className="mt-5 min-h-12 text-sm leading-relaxed text-text-soft">
                  {item.description}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-4 border-t border-border pt-6">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-text-soft">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={contactHref} className="btn-primary mt-9 justify-center">
                {ctaLabel}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>

        {additionalServices?.length ? (
          <div className="mt-14 border border-border bg-bg-0/45 p-6 md:mt-20 md:p-8">
            <h3 className="font-display text-2xl font-bold text-text">
              {additionalServicesTitle}
            </h3>
            <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-text-soft">
                  <span
                    aria-hidden
                    className="h-px w-3 shrink-0 bg-accent"
                  >
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
