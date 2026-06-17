import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AUTHORIZED } from "@/content/home";

export function AuthorizedAgent() {
  return (
    <section className="bg-navy-900 py-14 text-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold sm:text-3xl">{AUTHORIZED.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{AUTHORIZED.text}</p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {AUTHORIZED.agents.map((a) => (
                <li key={a.country}>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${a.country} — authorised agent`}
                    className="flex h-24 items-center justify-center rounded-xl bg-white/95 p-4 transition-transform hover:scale-105"
                  >
                    <Image
                      src={a.image}
                      alt={`${a.country} authorised agent`}
                      width={120}
                      height={64}
                      className="max-h-14 w-auto object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
