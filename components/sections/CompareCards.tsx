import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { COMPARE } from "@/content/home";

function CompareColumn({
  title,
  points,
  href,
  accent,
}: {
  title: string;
  points: string[];
  href: string;
  accent: "navy" | "gold";
}) {
  const isNavy = accent === "navy";
  return (
    <div
      className={`flex flex-col rounded-2xl border p-7 shadow-soft ${
        isNavy ? "border-navy-100 bg-navy-50/40" : "border-gold-200 bg-gold-50"
      }`}
    >
      <h3 className="text-xl font-bold text-navy-800">{title}</h3>
      <ul className="mt-5 flex-1 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-sm leading-relaxed text-slate-700">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                isNavy ? "bg-navy-500 text-white" : "bg-gold-400 text-white"
              }`}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            {p}
          </li>
        ))}
      </ul>
      <Button href={href} variant={isNavy ? "primary" : "gold"} className="mt-6 self-start">
        Learn More
      </Button>
    </div>
  );
}

export function CompareCards() {
  return (
    <section className="section bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Two routes, one goal"
          title={COMPARE.title}
          intro="Understand the key differences between acquiring permanent citizenship and obtaining residency through a golden visa."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <CompareColumn
            title={COMPARE.citizenship.title}
            points={COMPARE.citizenship.points}
            href={COMPARE.citizenship.href}
            accent="navy"
          />
          <CompareColumn
            title={COMPARE.goldenVisa.title}
            points={COMPARE.goldenVisa.points}
            href={COMPARE.goldenVisa.href}
            accent="gold"
          />
        </div>
      </Container>
    </section>
  );
}
