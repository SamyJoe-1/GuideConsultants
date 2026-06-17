"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
    >
      {done ? (
        <p className="rounded-lg bg-white/10 px-4 py-3 text-sm text-gold-200">
          Thanks for subscribing — we&apos;ll be in touch.
        </p>
      ) : (
        <div className="flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15 focus-within:ring-gold-300">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            aria-label="Your email address"
            className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="flex shrink-0 items-center justify-center bg-gold-300 px-4 text-navy-900 transition-colors hover:bg-gold-400 hover:text-white"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </form>
  );
}
