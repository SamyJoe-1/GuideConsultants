import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ABOUT } from "@/content/home";

export function AboutIntro() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow">{ABOUT.eyebrow}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
              Your trusted partner in global citizenship
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We guide investors and their families through every step of acquiring a
              second citizenship or residency — combining deep expertise, full
              transparency, and government-authorized status.
            </p>
            <Button href={ABOUT.cta.href} variant="primary" className="mt-7">
              {ABOUT.cta.label}
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {ABOUT.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50">
                  <Image src={card.icon} alt="" width={36} height={36} className="h-8 w-8 object-contain" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-800">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
