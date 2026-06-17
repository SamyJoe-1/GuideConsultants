"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { LOCALES, type LocaleCode } from "@/lib/site";
import { ChevronDown, Globe } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  current = "en",
  tone = "light",
}: {
  current?: LocaleCode;
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = LOCALES.find((l) => l.code === current) ?? LOCALES[0];

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium transition-colors",
          tone === "light"
            ? "text-white/90 hover:text-white"
            : "text-navy-600 hover:text-navy-800",
        )}
      >
        <Globe className="h-4 w-4 opacity-80" />
        <span>{active.label}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-white py-1 shadow-[0_20px_50px_-20px_rgba(0,11,40,0.4)]"
        >
          {LOCALES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === current}>
              <a
                href={l.prefix ? `${l.prefix}/` : "/"}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-navy-50",
                  l.code === current ? "font-semibold text-navy-700" : "text-slate-600",
                )}
              >
                <Image src={l.flag} alt="" width={20} height={14} className="h-3.5 w-5 rounded-[2px] object-cover" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
