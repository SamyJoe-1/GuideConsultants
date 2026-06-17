import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { NewsCard } from "@/components/cards/NewsCard";
import type { Article } from "@/content/news";

export function ArticlePage({
  article,
  basePath,
  sectionLabel,
  related,
}: {
  article: Article;
  basePath: string; // "/news" | "/blog"
  sectionLabel: string; // "News" | "Blog"
  related: Article[];
}) {
  const date = new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const body = article.body ?? [article.excerpt];

  return (
    <>
      <article>
        <header className="border-b border-line bg-surface">
          <Container className="py-10 lg:py-14">
            <Breadcrumb items={[{ name: "Home", href: "/" }, { name: sectionLabel, href: `${basePath}/` }, { name: article.title }]} />
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gold-400">
              <span>{article.category}</span>
              <span className="text-slate-300">•</span>
              <time dateTime={article.date} className="text-slate-500">{date}</time>
            </div>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">{article.title}</h1>
          </Container>
        </header>

        <Container className="py-10 lg:py-14">
          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={article.image} alt={article.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
            <div className="prose-guide mt-8">
              <p className="text-lg font-medium text-navy-700">{article.excerpt}</p>
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </article>

      <ConsultationCta />

      {related.length > 0 && (
        <section className="section">
          <Container>
            <h2 className="text-2xl font-bold text-navy-800">More from {sectionLabel}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <NewsCard key={a.slug} article={a} basePath={basePath} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

export function ArticleListing({
  title,
  intro,
  articles,
  basePath,
  sectionLabel,
}: {
  title: string;
  intro: string;
  articles: Article[];
  basePath: string;
  sectionLabel: string;
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <Container className="py-14 lg:py-20">
          <Breadcrumb tone="dark" items={[{ name: "Home", href: "/" }, { name: sectionLabel }]} />
          <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-white/80">{intro}</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <NewsCard key={a.slug} article={a} basePath={basePath} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
