import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight } from "@/components/ui/Icons";
import { PASSPORTS } from "@/content/passports";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const URL = `${SITE.url}/passport-ranking/`;
const TITLE = "Passport Ranking";
const DESC =
  "Compare the global ranking and visa-free access of the passports available through Citizenship by Investment programs — Dominica, Grenada, St Kitts & Nevis, Saint Lucia, Antigua & Barbuda and Turkey.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL },
};

export default function Page() {
  const rows = [...PASSPORTS]
    .map((p) => ({ ...p, rank: parseInt(p.quickFacts[0] ?? "", 10) || 999, visaFree: p.quickFacts[4] ?? p.quickFacts[p.quickFacts.length - 1] }))
    .sort((a, b) => a.rank - b.rank);

  return (
    <>
      <JsonLd data={[
        webPageSchema({ url: URL, title: TITLE, description: DESC }),
        breadcrumbSchema([{ name: "Home", url: SITE.url + "/" }, { name: "Passport Ranking", url: URL }]),
      ]} />

      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <Container className="py-14 lg:py-20">
          <Breadcrumb tone="dark" items={[{ name: "Home", href: "/" }, { name: "Passport Ranking" }]} />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">Passport Ranking & Visa-Free Access</h1>
          <p className="mt-5 max-w-2xl text-white/80">
            A second passport opens the world. Compare the global ranking and visa-free
            reach of the passports you can obtain through Citizenship by Investment.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-800 text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Global Rank</th>
                  <th className="px-5 py-4 font-semibold">Passport</th>
                  <th className="hidden px-5 py-4 font-semibold sm:table-cell">Visa-Free Access</th>
                  <th className="px-5 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-line bg-white">
                {rows.map((p) => (
                  <tr key={p.slug} className="transition-colors hover:bg-surface">
                    <td className="px-5 py-4 text-lg font-bold text-gold-400">#{p.rank}</td>
                    <td className="px-5 py-4">
                      <Link href={p.href} className="flex items-center gap-3 font-semibold text-navy-700 hover:text-navy-500">
                        <span className="relative h-8 w-12 overflow-hidden rounded">
                          <Image src={p.heroImage} alt={p.name} fill sizes="48px" className="object-cover" />
                        </span>
                        {p.name}
                      </Link>
                    </td>
                    <td className="hidden px-5 py-4 text-slate-600 sm:table-cell">{p.visaFree}</td>
                    <td className="px-5 py-4 text-right">
                      <Link href={p.href} className="inline-flex items-center gap-1 text-sm font-semibold text-navy-500 hover:text-gold-400">
                        View <ArrowRight className="h-4 w-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Rankings are indicative and based on the number of destinations accessible visa-free or with visa-on-arrival.
          </p>
        </Container>
      </section>

      <ConsultationCta />
    </>
  );
}
