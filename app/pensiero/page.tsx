import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pensiero politico",
  description:
    "Concetti, idee e correnti del comunismo italiano: Gramsci, socialismo, democrazia, egemonia, lavoro e cultura politica.",
};

const temi = [
  {
    title: "Marxismo",
    author: "Karl Marx e Friedrich Engels",
    description:
      "Materialismo storico, lotta di classe, critica dell’economia politica, Stato, socialismo e comunismo.",
    href: "/pensiero/marxismo",
  },
  {
    title: "Egemonia",
    author: "Antonio Gramsci",
    description:
      "Consenso, società civile e capacità di una classe sociale di costruire direzione culturale e politica.",
    href: "/dispense/gramsci-egemonia",
  },
  {
    title: "Via italiana al socialismo",
    author: "PCI",
    description:
      "Lo sviluppo di una strategia politica legata alle caratteristiche della democrazia e della società italiana.",
    href: "/dispense",
  },
  {
    title: "Democrazia e socialismo",
    author: "Enrico Berlinguer",
    description:
      "Il rapporto tra trasformazione socialista, pluralismo politico e istituzioni democratiche.",
    href: "/dispense/berlinguer-via-democratica-socialismo",
  },
  {
    title: "Questione morale",
    author: "Enrico Berlinguer",
    description:
      "Partiti, istituzioni, interesse generale e degenerazione del sistema politico.",
    href: "/dispense/questione-morale-berlinguer",
  },
  {
    title: "Lavoro",
    author: "Movimento comunista italiano",
    description:
      "Centralità del lavoro, organizzazione dei lavoratori, diritti e trasformazione economica.",
    href: "/documenti",
  },
  {
    title: "Internazionalismo",
    author: "PCI",
    description:
      "Rapporto tra movimento comunista internazionale, autonomia nazionale, pace e politica estera.",
    href: "/dispense/pci-unione-sovietica",
  },
];

export default function PensieroPage() {
  return (
    <>
      <Header />

      <main>
        <section className="border-b border-[var(--border)]">
          <div className="container-site py-20 md:py-24">
            <div className="max-w-5xl">
              <div className="eyebrow">
                Idee e cultura politica
              </div>

              <h1 className="font-editorial mt-5 text-6xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-8xl">
                Pensiero
                <br />
                <span className="text-[var(--red)]">
                  politico
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                Concetti, elaborazioni e trasformazioni del pensiero
                comunista italiano nel loro contesto storico.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="grid border-t border-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
            {temi.map((tema, index) => (
              <article
                key={tema.title}
                className={`min-h-[310px] p-8 ${
                  index % 3 !== 0
                    ? "lg:border-l lg:border-[var(--border)]"
                    : ""
                } ${
                  index > 2
                    ? "border-t border-[var(--border)]"
                    : ""
                }`}
              >
                <div className="eyebrow">
                  {tema.author}
                </div>

                <h2 className="font-editorial mt-5 text-3xl font-semibold">
                  {tema.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                  {tema.description}
                </p>

                <Link
                  href={tema.href}
                  className="mt-7 inline-block text-sm font-bold text-[var(--red)]"
                >
                  Approfondisci →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
