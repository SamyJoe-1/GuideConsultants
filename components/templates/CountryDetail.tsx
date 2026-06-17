import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Accordion } from "@/components/ui/Accordion";
import { Check, ArrowRight, ShieldCheck } from "@/components/ui/Icons";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import {
  type Country,
  type CountrySection,
  quickFactLabels,
  CBI_COUNTRIES,
  GV_COUNTRIES,
} from "@/content/countries";

function looksLikeFeeTable(section: CountrySection): boolean {
  if (section.list.length) return false;
  const ps = section.paragraphs;
  if (ps.length < 4 || ps.length % 2 !== 0) return false;
  // every other entry should look like an amount
  const amounts = ps.filter((_, i) => i % 2 === 1);
  return amounts.every((a) => /[$€£]|\bUS\b|\d/.test(a)) && /fee|cost|price/i.test(section.heading);
}

function SectionBlock({ section, accent }: { section: CountrySection; accent: boolean }) {
  if (looksLikeFeeTable(section)) {
    const rows: [string, string][] = [];
    for (let i = 0; i < section.paragraphs.length; i += 2) {
      rows.push([section.paragraphs[i], section.paragraphs[i + 1]]);
    }
    return (
      <section className="scroll-mt-28">
        <h2 className="text-2xl font-bold text-navy-800">{section.heading}</h2>
        <div className="mt-5 overflow-hidden rounded-xl border border-line">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-line">
              {rows.map(([label, value], i) => (
                <tr key={i} className={i % 2 ? "bg-surface" : "bg-white"}>
                  <td className="px-5 py-3 text-slate-700">{label}</td>
                  <td className="px-5 py-3 text-right font-semibold text-navy-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  return (
    <section className="scroll-mt-28">
      <h2 className="text-2xl font-bold text-navy-800">{section.heading}</h2>
      {section.paragraphs.map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-slate-600">{p}</p>
      ))}
      {section.list.length > 0 && (
        <ul className="mt-5 space-y-3">
          {section.list.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-700">
              <span className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent ? "bg-gold-400" : "bg-navy-500"} text-white`}>
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function CountryDetail({ country }: { country: Country }) {
  const isGv = country.type === "golden-visa";
  const hubHref = isGv ? "/golden-visa/" : "/citizenship-by-investment/";
  const hubLabel = isGv ? "Golden Visa" : "Citizenship by Investment";
  const labels = quickFactLabels(country.type);
  const related = (isGv ? GV_COUNTRIES : CBI_COUNTRIES).filter((c) => c.slug !== country.slug).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <Image src={country.heroImage} alt={country.name} fill priority sizes="100vw" className="absolute inset-0 -z-10 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-navy-800/70" />
        <Container className="py-14 lg:py-20">
          <Breadcrumb
            tone="dark"
            items={[{ name: "Home", href: "/" }, { name: hubLabel, href: hubHref }, { name: country.name }]}
          />
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-200 ring-1 ring-white/15">
            <ShieldCheck className="h-4 w-4" /> {country.region} · {hubLabel}
          </span>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">{country.title}</h1>

          {country.quickFacts.length > 0 && (
            <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {country.quickFacts.map((fact, i) => (
                <div key={i} className="rounded-xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
                  <dt className="text-xs uppercase tracking-wide text-gold-200">{labels[i] ?? "Detail"}</dt>
                  <dd className="mt-1 text-sm font-bold text-white">{fact}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-8">
            <Button href="/contact-us/" variant="gold" size="lg">Book a Free Consultation</Button>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="max-w-3xl space-y-12">
              {country.sections.map((s, i) => (
                <SectionBlock key={i} section={s} accent={isGv} />
              ))}
            </div>

            {/* Sticky sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h2 className="text-lg font-bold text-navy-800">Key Facts</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {country.quickFacts.map((fact, i) => (
                    <div key={i} className="flex flex-col border-b border-line pb-3 last:border-0 last:pb-0">
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">{labels[i] ?? "Detail"}</dt>
                      <dd className="mt-0.5 font-semibold text-navy-700">{fact}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-5 rounded-2xl bg-navy-800 p-6 text-white">
                <h2 className="text-lg font-bold">Speak to an advisor</h2>
                <p className="mt-2 text-sm text-white/75">
                  Get a free, confidential consultation tailored to your goals.
                </p>
                <Button href="/contact-us/" variant="gold" className="mt-4 w-full">Get started</Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {country.faqs.length > 0 && (
        <section className="section bg-surface">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-3xl font-bold text-navy-800">FAQs About {country.name}</h2>
              <div className="mt-10">
                <Accordion items={country.faqs} />
              </div>
            </div>
          </Container>
        </section>
      )}

      <ConsultationCta />

      {/* Related */}
      <section className="section">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-navy-800">More {hubLabel} programs</h2>
            <Link href={hubHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 link-underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((c) => (
              <Link key={c.slug} href={c.href} className="group flex items-center gap-3 rounded-xl border border-line bg-white p-3 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image src={c.cardImage} alt={c.name} fill sizes="64px" className="object-cover transition-transform duration-300 group-hover:scale-110" />
                </span>
                <span className="text-sm font-semibold text-navy-700">{c.name}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
