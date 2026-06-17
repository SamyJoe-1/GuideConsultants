import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/ui/Icons";
import type { ProgramCard as ProgramCardType } from "@/content/home";

export function ProgramCard({ program }: { program: ProgramCardType }) {
  const tagLabel = program.kind === "citizenship" ? "Citizenship by Investment" : "Golden Visa";
  const tagHref = program.kind === "citizenship" ? "/citizenship-by-investment/" : "/golden-visa/";
  const tagColor = program.kind === "citizenship" ? "bg-navy-500" : "bg-gold-400";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link href={program.href} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className={`absolute left-3 top-3 rounded-full ${tagColor} px-3 py-1 text-xs font-semibold text-white`}>
          {tagLabel}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-navy-800">
          <Link href={program.href} className="hover:text-navy-500">{program.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{program.blurb}</p>
        <div className="mt-4 flex items-center justify-between">
          <Link
            href={program.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 link-underline"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={tagHref}
            className="text-xs font-medium text-slate-400 hover:text-gold-400"
          >
            {tagLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
