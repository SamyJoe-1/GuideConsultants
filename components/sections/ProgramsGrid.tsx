import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { PROGRAMS, PROGRAMS_INTRO } from "@/content/home";

export function ProgramsGrid({ limit }: { limit?: number }) {
  const items = limit ? PROGRAMS.slice(0, limit) : PROGRAMS;
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="Citizenship by Investment and Golden Visa Programs"
          intro={PROGRAMS_INTRO}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProgramCard key={p.title} program={p} />
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Button href="/citizenship-by-investment/" variant="primary">
            All Citizenship programs
          </Button>
          <Button href="/golden-visa/" variant="outline">
            All Golden Visas
          </Button>
        </div>
      </Container>
    </section>
  );
}
