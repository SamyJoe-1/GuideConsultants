import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/ui/Icons";
import { quickFactLabels, type Country } from "@/content/countries";

export function CountryCard({ country }: { country: Country }) {
  const labels = quickFactLabels(country.type);
  const facts = country.quickFacts.slice(0, 2);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link href={country.href} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={country.cardImage}
          alt={country.name}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-700">
          {country.region}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy-800">
          <Link href={country.href} className="hover:text-navy-500">{country.name}</Link>
        </h3>
        {facts.length > 0 && (
          <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
            {facts.map((f, i) => (
              <div key={i} className="rounded-lg bg-surface px-3 py-2">
                <dt className="text-[10px] uppercase tracking-wide text-slate-400">{labels[i]}</dt>
                <dd className="mt-0.5 font-semibold text-navy-700">{f}</dd>
              </div>
            ))}
          </dl>
        )}
        <Link href={country.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 link-underline">
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
