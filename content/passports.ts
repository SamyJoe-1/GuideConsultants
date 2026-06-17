/** Passport pages — auto-extracted from the mirror + curated display metadata. */
import antigua from "./generated/passports/antigua-and-barbuda-passport.json";
import dominica from "./generated/passports/dominica-passport.json";
import grenada from "./generated/passports/grenada-passport.json";
import stlucia from "./generated/passports/saint-lucia-passport.json";
import stkitts from "./generated/passports/st-kitts-passport.json";
import turkey from "./generated/passports/turkey-passport.json";

export interface PassportSection { heading: string; paragraphs: string[]; list: string[] }
export interface PassportData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  quickFacts: string[];
  sections: PassportSection[];
  faqs: { q: string; a: string }[];
}

const NAMES: Record<string, string> = {
  "antigua-and-barbuda-passport": "Antigua & Barbuda",
  "dominica-passport": "Dominica",
  "grenada-passport": "Grenada",
  "saint-lucia-passport": "Saint Lucia",
  "st-kitts-passport": "Saint Kitts & Nevis",
  "turkey-passport": "Turkey",
};

const img = (p: string) => p.replace("/wp-content/uploads", "/images");

export interface Passport extends PassportData {
  name: string;
  href: string;
}

export const PASSPORTS: Passport[] = ([antigua, dominica, grenada, stlucia, stkitts, turkey] as PassportData[]).map((p) => ({
  ...p,
  heroImage: img(p.heroImage),
  name: NAMES[p.slug] ?? p.title,
  href: `/passports/${p.slug}/`,
}));

export const getPassport = (slug: string) => PASSPORTS.find((p) => p.slug === slug);

export const PASSPORT_FACT_LABELS = ["Global Rank", "Validity", "Passport Colour", "Dual Citizenship", "Visa-Free Access"];
