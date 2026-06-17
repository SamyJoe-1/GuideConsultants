import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { NewsCard } from "@/components/cards/NewsCard";
import { NEWS } from "@/content/news";

export function LatestNews() {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Stay informed"
            title="Latest News & Updates"
            className="max-w-xl"
          />
          <Button href="/news/" variant="outline" className="shrink-0">
            View all news
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.slice(0, 3).map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
