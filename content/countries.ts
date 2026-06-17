/**
 * Country programme registry. Page content is auto-extracted from the original
 * mirror into ./generated/countries/*.json; this module adds curated metadata
 * (display name, region, hero override) and exposes typed lookup helpers.
 */
import dominica from "./generated/countries/dominica-citizenship.json";
import stkitts from "./generated/countries/saint-kitts-and-nevis-citizenship-program.json";
import grenada from "./generated/countries/grenada-citizenship.json";
import antigua from "./generated/countries/antigua-and-barbuda-citizenship.json";
import stlucia from "./generated/countries/saint-lucia-citizenship.json";
import montenegro from "./generated/countries/montenegro-citizenship.json";
import vanuatu from "./generated/countries/vanuatu-citizenship.json";
import maltaCbi from "./generated/countries/malta-citizenship.json";
import cyprusCbi from "./generated/countries/cyprus-citizenship.json";
import turkey from "./generated/countries/turkey-citizenship.json";
import egypt from "./generated/countries/egypt-citizenship-program.json";
import cyprusGv from "./generated/countries/cyprus-golden-visa.json";
import greeceGv from "./generated/countries/greece-golden-visa.json";
import maltaGv from "./generated/countries/malta-golden-visa.json";
import portugalGv from "./generated/countries/portugal-golden-visa.json";
import spainGv from "./generated/countries/spain-golden-visa.json";
import usGv from "./generated/countries/us.json";

export interface CountrySection {
  heading: string;
  paragraphs: string[];
  list: string[];
}
export interface CountryFaq {
  q: string;
  a: string;
}
export interface CountryData {
  slug: string;
  type: "citizenship-by-investment" | "golden-visa";
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  quickFacts: string[];
  sections: CountrySection[];
  faqs: CountryFaq[];
}

interface CountryMeta {
  name: string;
  region: "Caribbean" | "Europe" | "Asia-Pacific" | "Middle East & Africa" | "Americas";
  cardImage: string;
  heroOverride?: string;
}

// Curated display metadata keyed by slug.
const META: Record<string, CountryMeta> = {
  "dominica-citizenship": { name: "Dominica", region: "Caribbean", cardImage: "/images/2020/10/Dominica.jpg" },
  "saint-kitts-and-nevis-citizenship-program": { name: "Saint Kitts & Nevis", region: "Caribbean", cardImage: "/images/2020/10/St-Kitts-Nevis.jpg" },
  "grenada-citizenship": { name: "Grenada", region: "Caribbean", cardImage: "/images/2020/10/Grenada.jpg" },
  "antigua-and-barbuda-citizenship": { name: "Antigua & Barbuda", region: "Caribbean", cardImage: "/images/2020/10/Antigua-Barbuda.jpg" },
  "saint-lucia-citizenship": { name: "Saint Lucia", region: "Caribbean", cardImage: "/images/2020/10/st.-lucia.png" },
  "montenegro-citizenship": { name: "Montenegro", region: "Europe", cardImage: "/images/2020/10/montenegro.jpg" },
  "vanuatu-citizenship": { name: "Vanuatu", region: "Asia-Pacific", cardImage: "/images/2020/10/Vanuatu.png" },
  "malta-citizenship": { name: "Malta", region: "Europe", cardImage: "/images/2020/10/Malta.jpg" },
  "cyprus-citizenship": { name: "Cyprus", region: "Europe", cardImage: "/images/2020/10/Cyprus.jpg" },
  "turkey-citizenship": { name: "Turkey", region: "Europe", cardImage: "/images/2020/10/turkey.png" },
  "egypt-citizenship-program": { name: "Egypt", region: "Middle East & Africa", cardImage: "/images/2023/07/egypt.webp" },
  "cyprus-golden-visa": { name: "Cyprus", region: "Europe", cardImage: "/images/2020/10/Cyprus.jpg" },
  "greece-golden-visa": { name: "Greece", region: "Europe", cardImage: "/images/2020/10/Greece.jpg" },
  "malta-golden-visa": { name: "Malta", region: "Europe", cardImage: "/images/2020/10/Malta.jpg" },
  "portugal-golden-visa": { name: "Portugal", region: "Europe", cardImage: "/images/2020/10/Portugal.jpg" },
  "spain-golden-visa": { name: "Spain", region: "Europe", cardImage: "/images/2020/10/Spain.jpg" },
  us: { name: "United States", region: "Americas", cardImage: "/images/2025/09/usa.jpg", heroOverride: "/images/2025/09/usa.jpg" },
};

const RAW: CountryData[] = [
  dominica, stkitts, grenada, antigua, stlucia, montenegro, vanuatu, maltaCbi, cyprusCbi, turkey, egypt,
  cyprusGv, greeceGv, maltaGv, portugalGv, spainGv, usGv,
] as CountryData[];

// Normalize generated image paths (/wp-content/uploads/.. -> /images/..).
function img(p: string): string {
  return p.replace("/wp-content/uploads", "/images");
}

export interface Country extends CountryData {
  name: string;
  region: CountryMeta["region"];
  cardImage: string;
  href: string;
}

export const COUNTRIES: Country[] = RAW.map((c) => {
  const meta = META[c.slug];
  const base = c.type === "golden-visa" ? "/golden-visa" : "/citizenship-by-investment";
  return {
    ...c,
    heroImage: img(meta.heroOverride ?? c.heroImage),
    name: meta.name,
    region: meta.region,
    cardImage: meta.cardImage,
    href: `${base}/${c.slug}/`,
  };
});

export const CBI_COUNTRIES = COUNTRIES.filter((c) => c.type === "citizenship-by-investment");
export const GV_COUNTRIES = COUNTRIES.filter((c) => c.type === "golden-visa");

export const getCountry = (slug: string, type?: CountryData["type"]) =>
  COUNTRIES.find((c) => c.slug === slug && (!type || c.type === type));

export function quickFactLabels(type: CountryData["type"]): string[] {
  return type === "golden-visa"
    ? ["Processing Time", "Minimum Investment", "Investment Route", "Visa-Free Access"]
    : ["Processing Time", "Minimum Investment", "Investment Routes", "Visa-Free Access"];
}
