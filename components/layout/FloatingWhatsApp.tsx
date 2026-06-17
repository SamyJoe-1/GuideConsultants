import { CONTACT } from "@/lib/site";
import { Whatsapp } from "@/components/ui/Icons";

/** Persistent WhatsApp quick-contact button (mirrors the original site). */
export function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
    >
      <Whatsapp className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Start chat</span>
    </a>
  );
}
