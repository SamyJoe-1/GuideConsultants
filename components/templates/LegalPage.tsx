import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

type Block =
  | { tag: "h2" | "h3" | "h4" | "p"; text: string }
  | { tag: "ul" | "ol"; items: string[] };

export interface LegalContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  blocks: Block[];
}

export function LegalPage({ data }: { data: LegalContent }) {
  // Drop a leading heading that just repeats the page title.
  const blocks = data.blocks.filter(
    (b, i) => !(i === 0 && "text" in b && b.text.trim().toLowerCase() === data.title.trim().toLowerCase()),
  );

  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-12 lg:py-16">
          <Breadcrumb items={[{ name: "Home", href: "/" }, { name: data.title }]} />
          <h1 className="mt-5 text-3xl font-bold text-navy-800 sm:text-4xl">{data.title}</h1>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="prose-guide mx-auto max-w-3xl">
            {blocks.map((b, i) => {
              if (b.tag === "ul") return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
              if (b.tag === "ol") return <ol key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ol>;
              if (b.tag === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.tag === "h3") return <h3 key={i}>{b.text}</h3>;
              if (b.tag === "h4") return <h4 key={i} className="font-semibold text-navy-700">{b.text}</h4>;
              if (b.tag === "p") return <p key={i}>{b.text}</p>;
              return null;
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
