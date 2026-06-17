import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS } from "@/content/home";

export function Benefits() {
  return (
    <section className="section bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Why invest"
          title="Benefits of Citizenship by Investment & Golden Visa"
          intro="A second passport or residency unlocks freedom, security and opportunity for you and your family."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 transition-colors group-hover:bg-gold-100">
                <Image src={b.icon} alt="" width={40} height={40} className="h-9 w-9 object-contain" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-800">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
