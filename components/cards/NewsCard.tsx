import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/ui/Icons";
import type { Article } from "@/content/news";

export function NewsCard({ article, basePath = "/news" }: { article: Article; basePath?: string }) {
  const href = `${basePath}/${article.slug}/`;
  const date = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-medium text-gold-400">
          <span>{article.category}</span>
          <span className="text-slate-300">•</span>
          <time dateTime={article.date} className="text-slate-400">{date}</time>
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug text-navy-800">
          <Link href={href} className="hover:text-navy-500">{article.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">{article.excerpt}</p>
        <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 link-underline">
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
