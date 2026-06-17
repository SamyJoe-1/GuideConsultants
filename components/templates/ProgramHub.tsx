import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CountryCard } from "@/components/cards/CountryCard";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { Check } from "@/components/ui/Icons";
import type { Country } from "@/content/countries";

interface HubProps {
  kind: "citizenship" | "golden-visa";
  title: string;
  intro: string;
  countries: Country[];
  benefits: string[];
  faqs?: { q: string; a: string }[];
}

export function ProgramHub({ kind, title, intro, countries, benefits, faqs }: HubProps) {
  const hubHref = kind === "golden-visa" ? "/golden-visa/" : "/citizenship-by-investment/";
  const label = kind === "golden-visa" ? "Golden Visa" : "Citizenship by Investment";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <Container className="py-14 lg:py-20">
          <Breadcrumb tone="dark" items={[{ name: "Home", href: "/" }, { name: label }]} />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl leading-relaxed text-white/80">{intro}</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="text-2xl font-bold text-navy-800">
            {kind === "golden-visa" ? "Golden Visa programs" : "Citizenship by Investment programs"}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <CountryCard key={c.slug + c.type} country={c} />
            ))}
          </div>
        </Container>
      </section>

      {benefits.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="eyebrow">Key advantages</span>
                <h2 className="mt-3 text-3xl font-bold text-navy-800">
                  Why choose {label}?
                </h2>
                <p className="mt-4 text-slate-600">
                  Our advisors guide you through every step, ensuring a smooth, compliant and
                  confidential process from application to approval.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-sm text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      {faqs && faqs.length > 0 && <FaqSection items={faqs} title={`FAQs About ${label}`} />}

      <ConsultationCta />
    </>
  );
}
