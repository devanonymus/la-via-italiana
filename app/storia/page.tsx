import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { timeline } from "@/data/storia-pci";

export const metadata: Metadata = {
  title: "Storia del PCI",
  description:
    "Timeline della storia del Partito Comunista Italiano dal Congresso di Livorno del 1921 allo scioglimento del 1991.",
};

export default function StoriaPage() {
  return (
    <>
      <Header />

      <main>
        <section className="border-b border-[var(--border)]">
          <div className="container-site py-16 md:py-24">
            <div className="max-w-5xl">
              <div className="eyebrow">
                Archivio storico
              </div>

              <h1 className="font-editorial mt-5 text-6xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-8xl">
                La storia del
                <br />
                <span className="text-[var(--red)]">
                  PCI.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                Settant’anni di storia politica italiana: dalla scissione di
                Livorno alla clandestinità, dalla Resistenza alla Repubblica,
                fino alla stagione di Berlinguer e allo scioglimento del 1991.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border)] bg-[#111111] text-white">
          <div className="container-site grid md:grid-cols-3">
            <div className="py-8 md:border-r md:border-white/15 md:px-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                Origini
              </div>
              <div className="font-editorial mt-3 text-3xl">
                1921
              </div>
              <p className="mt-2 text-sm text-white/55">
                Livorno e nascita del PCd’I
              </p>
            </div>

            <div className="border-t border-white/15 py-8 md:border-r md:border-t-0 md:px-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                Trasformazione
              </div>
              <div className="font-editorial mt-3 text-3xl">
                1943
              </div>
              <p className="mt-2 text-sm text-white/55">
                Nasce il Partito Comunista Italiano
              </p>
            </div>

            <div className="border-t border-white/15 py-8 md:border-t-0 md:px-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                Ultima fase
              </div>
              <div className="font-editorial mt-3 text-3xl">
                1991
              </div>
              <p className="mt-2 text-sm text-white/55">
                Scioglimento del PCI
              </p>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="grid gap-14 lg:grid-cols-[260px_minmax(0,900px)]">
            <aside className="lg:sticky lg:top-40 lg:self-start">
              <div className="eyebrow">
                Cronologia
              </div>

              <h2 className="font-editorial mt-4 text-3xl font-semibold">
                1921–1991
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                Una cronologia essenziale dei principali passaggi politici
                della storia del comunismo italiano.
              </p>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <Link
                  href="/dispense"
                  className="text-sm font-bold text-[var(--red)]"
                >
                  Approfondisci con le dispense →
                </Link>
              </div>
            </aside>

            <div className="relative">
              <div className="absolute bottom-0 left-[19px] top-0 w-px bg-[var(--border)] md:left-[79px]" />

              <div className="space-y-0">
                {timeline.map((event) => (
                  <article
                    key={`${event.year}-${event.title}`}
                    className="relative grid gap-5 border-b border-[var(--border)] py-10 pl-14 md:grid-cols-[120px_1fr] md:pl-0"
                  >
                    <div className="relative">
                      <span className="absolute left-[-42px] top-[7px] h-[11px] w-[11px] rounded-full border-[3px] border-[var(--cream)] bg-[var(--red)] md:left-[74px]" />

                      <div className="font-editorial text-2xl font-semibold text-[var(--red)]">
                        {event.year}
                      </div>
                    </div>

                    <div>
                      <div className="eyebrow">
                        {event.category}
                      </div>

                      <h3 className="font-editorial mt-3 text-3xl font-semibold leading-tight">
                        {event.title}
                      </h3>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                        {event.description}
                      </p>

                      {event.href && (
                        <Link
                          href={event.href}
                          className="mt-6 inline-block text-sm font-bold text-[var(--red)]"
                        >
                          Leggi la dispensa →
                        </Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-white/30">
          <div className="container-site grid gap-10 py-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="eyebrow">
                Interpretare la storia
              </div>

              <h2 className="font-editorial mt-4 max-w-xl text-5xl font-semibold leading-[1.05]">
                Il PCI non rimase uguale a se stesso.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-8 text-[var(--muted)]">
                Il partito nato nel 1921 come sezione dell’Internazionale
                Comunista attraversò clandestinità, antifascismo, Resistenza,
                Repubblica e Guerra fredda, modificando progressivamente
                organizzazione, strategia e rapporto con il movimento comunista
                internazionale.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                Per questo La Via Italiana distingue sempre le diverse fasi
                storiche e ricostruisce ogni passaggio attraverso documenti,
                fonti e approfondimenti specifici.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="border-l-4 border-[var(--red)] pl-8 md:pl-12">
            <div className="eyebrow">
              Prossimo approfondimento
            </div>

            <h2 className="font-editorial mt-4 text-4xl font-semibold md:text-5xl">
              Antonio Gramsci
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Dalla Torino operaia ai Quaderni del carcere: egemonia,
              società civile, intellettuali e costruzione del consenso.
            </p>

            <Link
              href="/dispense"
              className="mt-7 inline-block bg-[var(--red)] px-6 py-4 text-sm font-bold text-white"
            >
              Vai alle dispense
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
