import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WHY_US } from "@/content/home";

export function WhyUs() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/2022/08/Guide-map.webp"
              alt="Guide Consultants global reach"
              width={720}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Why Guide Consultants</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
              {WHY_US.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{WHY_US.text}</p>

            <dl className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {WHY_US.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-surface p-4 text-center">
                  <dt className="text-2xl font-bold text-navy-500">{s.value}</dt>
                  <dd className="mt-1 text-xs font-medium text-slate-500">{s.label}</dd>
                </div>
              ))}
            </dl>

            <Button href={WHY_US.cta.href} variant="gold" size="lg" className="mt-8">
              {WHY_US.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
