import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Check } from "@/components/ui/Icons";

const points = [
  "Free, no-obligation expert consultation",
  "Tailored program recommendations for your goals",
  "End-to-end application support",
  "Fully confidential and government-compliant",
];

export function ConsultationCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-navy-800 py-16 text-white lg:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 to-navy-700" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow text-gold-200">Get started</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Book a Free Consultation with Our Expert Advisors Today!
            </h2>
            <p className="mt-4 text-white/80">
              Fill out the form and our Expert Advisor will reach out to you.
            </p>
            <ul className="mt-7 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold-300 text-navy-900">
                    <Check className="h-4 w-4" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <ConsultationForm tone="onDark" />
        </div>
      </Container>
    </section>
  );
}
