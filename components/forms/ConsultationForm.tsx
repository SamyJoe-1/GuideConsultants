"use client";

import { useState } from "react";
import { Check } from "@/components/ui/Icons";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

const programOptions = [
  ...(NAV[0].children ?? []).map((c) => `Citizenship — ${c.label}`),
  ...(NAV[1].children ?? []).map((c) => `Golden Visa — ${c.label}`),
];

const field =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-slate-400 transition-colors focus:border-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-100";

export function ConsultationForm({ tone = "light" }: { tone?: "light" | "onDark" }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-soft">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-400">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="text-xl font-bold text-navy-800">Thank you!</h3>
        <p className="text-sm text-slate-600">
          Your request has been received. One of our expert advisors will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={cn(
        "grid gap-4 rounded-2xl p-6 sm:p-8",
        tone === "onDark" ? "bg-white shadow-[0_30px_60px_-30px_rgba(0,11,40,0.6)]" : "bg-surface",
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">Full name</label>
          <input id="cf-name" name="name" required placeholder="Full name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className="sr-only">Email</label>
          <input id="cf-email" name="email" type="email" required placeholder="Email address" className={field} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className="sr-only">Phone</label>
          <input id="cf-phone" name="phone" type="tel" required placeholder="Phone (with country code)" className={field} />
        </div>
        <div>
          <label htmlFor="cf-program" className="sr-only">Program of interest</label>
          <select id="cf-program" name="program" defaultValue="" className={field} required>
            <option value="" disabled>Program of interest</option>
            {programOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="sr-only">Message</label>
        <textarea id="cf-message" name="message" rows={3} placeholder="How can we help you?" className={field} />
      </div>
      <fieldset>
        <legend className="text-sm font-medium text-navy-700">Have you previously invested in a residency or citizenship program?</legend>
        <div className="mt-2 flex gap-6">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="inline-flex items-center gap-2 text-sm text-slate-600">
              <input type="radio" name="invested" value={opt} defaultChecked={opt === "No"} className="h-4 w-4 accent-navy-500" />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-navy-500 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-navy-600"
      >
        Submit
      </button>
      <p className="text-center text-xs text-slate-400">
        Your information is kept strictly confidential and used only to contact you about your enquiry.
      </p>
    </form>
  );
}
