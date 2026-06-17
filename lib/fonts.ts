import localFont from "next/font/local";

/**
 * Brand typefaces, self-hosted via next/font (zero layout shift, no external
 * requests). Gilroy is the primary family used across body and headings;
 * Gilmer is a secondary display face used for select headings/accents.
 */
export const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy/Gilroy-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Gilroy/Gilroy-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Gilroy/Gilroy-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  preload: true,
});

export const gilmer = localFont({
  src: [
    { path: "./fonts/Gilmer/Gilmer-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/Gilmer/Gilmer-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/Gilmer/Gilmer-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-gilmer",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  preload: false,
});
