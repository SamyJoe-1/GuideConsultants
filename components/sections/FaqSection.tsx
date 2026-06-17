import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/content/home";

export function FaqSection({
  items = FAQS,
  title = "FAQs About Citizenship by Investment & Golden Visa Programs",
}: {
  items?: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions & answers" title={title} />
          <div className="mt-10">
            <Accordion items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
