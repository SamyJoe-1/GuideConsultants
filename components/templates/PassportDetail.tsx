import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Accordion } from "@/components/ui/Accordion";
import { Check, ArrowRight } from "@/components/ui/Icons";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { type Passport, PASSPORT_FACT_LABELS, PASSPORTS } from "@/content/passports";

export function PassportDetail({ passport }: { passport: Passport }) {
  const related = PASSPORTS.filter((p) => p.slug !== passport.slug);
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <Image src={passport.heroImage} alt={passport.name} fill priority sizes="100vw" className="absolute inset-0 -z-10 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-navy-800/70" />
        <Container className="py-14 lg:py-20">
          <Breadcrumb tone="dark" items={[{ name: "Home", href: "/" }, { name: "Passports", href: "/passport-ranking/" }, { name: passport.name }]} />
          <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">{passport.title}</h1>
          {passport.quickFacts.length > 0 && (
            <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-5">
              {passport.quickFacts.map((f, i) => (
                <div key={i} className="rounded-xl bg-white/10 p-4 ring-1 ring-white/10">
                  <dt className="text-xs uppercase tracking-wide text-gold-200">{PASSPORT_FACT_LABELS[i] ?? "Detail"}</dt>
                  <dd className="mt-1 text-sm font-bold">{f}</dd>
                </div>
              ))}
            </dl>
          )}
          <Button href="/contact-us/" variant="gold" size="lg" className="mt-8">Book a Free Consultation</Button>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {passport.sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-2xl font-bold text-navy-800">{s.heading}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 leading-relaxed text-slate-600">{p}</p>
                ))}
                {s.list.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {s.list.map((it, j) => (
                      <li key={j} className="flex gap-3 text-slate-700">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-500 text-white">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-relaxed">{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </Container>
      </section>

      {passport.faqs.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-3xl font-bold text-navy-800">FAQs About the {passport.name} Passport</h2>
              <div className="mt-10"><Accordion items={passport.faqs} /></div>
            </div>
          </Container>
        </section>
      )}

      <ConsultationCta />

      <section className="section">
        <Container>
          <h2 className="text-2xl font-bold text-navy-800">Other passports</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={p.href} className="group flex items-center gap-3 rounded-xl border border-line bg-white p-3 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image src={p.heroImage} alt={p.name} fill sizes="64px" className="object-cover transition-transform duration-300 group-hover:scale-110" />
                </span>
                <span className="flex items-center justify-between gap-2 text-sm font-semibold text-navy-700">
                  {p.name} <ArrowRight className="h-4 w-4 text-gold-400" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
