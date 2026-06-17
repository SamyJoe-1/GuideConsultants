/**
 * Lightweight inline SVG icon set. Inlined (vs. an icon dependency) so they
 * ship as zero-JS markup and inherit currentColor.
 */
type P = { className?: string };
const s = (p: P) => ({
  className: p.className,
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const Phone = (p: P) => (
  <svg {...s(p)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
);
export const Mail = (p: P) => (
  <svg {...s(p)}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
);
export const MapPin = (p: P) => (
  <svg {...s(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const ChevronDown = (p: P) => (
  <svg {...s(p)}><path d="m6 9 6 6 6-6" /></svg>
);
export const ArrowRight = (p: P) => (
  <svg {...s(p)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
export const Check = (p: P) => (
  <svg {...s(p)}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Menu = (p: P) => (
  <svg {...s(p)}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const Close = (p: P) => (
  <svg {...s(p)}><path d="M18 6 6 18M6 6l12 12" /></svg>
);
export const Globe = (p: P) => (
  <svg {...s(p)}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></svg>
);
export const Whatsapp = (p: P) => (
  <svg className={p.className} width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5 9.43 9.43 0 0 1 16.1-6.66 9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.4-9.21 9.4Zm8.04-17.44A11.34 11.34 0 0 0 2.5 17.6L1 23l5.55-1.45a11.32 11.32 0 0 0 5.5 1.4h.01c6.25 0 11.34-5.08 11.34-11.33 0-3.03-1.18-5.87-3.31-8.01Z" />
  </svg>
);
export const Facebook = (p: P) => (
  <svg className={p.className} width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);
export const Star = (p: P) => (
  <svg className={p.className} width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
  </svg>
);
export const Quote = (p: P) => (
  <svg className={p.className} width={36} height={36} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5A1.67 1.67 0 0 1 7.17 9.5V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6Z" />
  </svg>
);
export const ShieldCheck = (p: P) => (
  <svg {...s(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
);
