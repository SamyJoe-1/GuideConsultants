import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Check } from "@/components/ui/Icons";
import { HERO } from "@/content/home";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      {/* Background motif */}
      <Image
        src="/images/2023/09/map-passport.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950/95 via-navy-900/90 to-navy-800/80" />

      <Container className="relative py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-200 ring-1 ring-white/15">
            <ShieldCheck className="h-4 w-4" /> Government Authorized Agent since 2016
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Second Passport, Golden Visa, Passport Index, Immigration, and Visas
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Guide Consultants helps high-net-worth individuals and families secure a
            second citizenship or residency through the world&apos;s leading Citizenship
            by Investment and Golden Visa programs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={HERO.cta.href} variant="gold" size="lg">
              {HERO.cta.label}
            </Button>
            <Button href="/citizenship-by-investment/" variant="white" size="lg">
              Explore programs
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
            {[
              "Licensed by all Eastern Caribbean CBI countries",
              "140+ visa-free destinations",
              "Citizenship in as little as 3–4 months",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-gold-300" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
