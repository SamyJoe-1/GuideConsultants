import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { COUNTRIES } from "@/content/countries";
import { PASSPORTS } from "@/content/passports";
import { NEWS } from "@/content/news";
import { BLOG } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/citizenship-by-investment/", priority: 0.9, freq: "monthly" },
    { path: "/golden-visa/", priority: 0.9, freq: "monthly" },
    { path: "/passport-ranking/", priority: 0.7, freq: "monthly" },
    { path: "/about-us/", priority: 0.6, freq: "yearly" },
    { path: "/contact-us/", priority: 0.7, freq: "yearly" },
    { path: "/news/", priority: 0.7, freq: "weekly" },
    { path: "/blog/", priority: 0.7, freq: "weekly" },
    { path: "/privacy-policy/", priority: 0.2, freq: "yearly" },
    { path: "/cookie-policy/", priority: 0.2, freq: "yearly" },
    { path: "/terms-of-use/", priority: 0.2, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: base + p.path,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  for (const c of COUNTRIES) {
    entries.push({ url: base + c.href, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const p of PASSPORTS) {
    entries.push({ url: base + p.href, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const a of NEWS) {
    entries.push({ url: `${base}/news/${a.slug}/`, lastModified: new Date(a.date), changeFrequency: "yearly", priority: 0.5 });
  }
  for (const a of BLOG) {
    entries.push({ url: `${base}/blog/${a.slug}/`, lastModified: new Date(a.date), changeFrequency: "yearly", priority: 0.5 });
  }

  return entries;
}
