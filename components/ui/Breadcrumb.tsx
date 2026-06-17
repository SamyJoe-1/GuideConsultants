import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  href?: string;
}

export function Breadcrumb({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm", tone === "dark" ? "text-white/70" : "text-slate-500")}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className={cn("transition-colors", tone === "dark" ? "hover:text-white" : "hover:text-navy-500")}>
                  {c.name}
                </Link>
              ) : (
                <span className={cn(last && (tone === "dark" ? "text-white" : "text-navy-700 font-medium"))} aria-current={last ? "page" : undefined}>
                  {c.name}
                </span>
              )}
              {!last && <span className={tone === "dark" ? "text-white/40" : "text-slate-300"}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
