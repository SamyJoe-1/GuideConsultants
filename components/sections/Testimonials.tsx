import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, Star } from "@/components/ui/Icons";
import { TESTIMONIALS } from "@/content/home";

export function Testimonials() {
  return (
    <section className="section bg-navy-900 text-white">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Are Saying"
          titleClassName="text-white"
          className="[&_h2]:text-white"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex h-full flex-col rounded-2xl bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur"
            >
              <Quote className="h-9 w-9 text-gold-300" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center gap-0.5 text-gold-300">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-2 text-sm font-semibold text-white">Verified Client</p>
                <p className="text-xs text-white/60">{t.program}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
