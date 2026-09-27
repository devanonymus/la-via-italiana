import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  berlinguerThemes,
  berlinguerTimeline,
} from "@/data/berlinguer";

export const metadata: Metadata = {
  title: "Enrico Berlinguer",
  description:
    "Profilo storico, pensiero politico, compromesso storico, questione morale e rapporto con l'URSS nella stagione di Enrico Berlinguer.",
};

export default function BerlinguerPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full border border-[var(--red)] opacity-[0.07]" />

          <div className="container-site grid min-h-[620px] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="eyebrow">
                Figure del comunismo italiano
              </div>

              <h1 className="font-editorial mt-5 text-6xl font-semibold leading-[0.92] tracking-[-0.045em] md:text-8xl">
                Enrico
                <br />
                <span className="text-[var(--red)]">
                  Berlinguer
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Segretario generale del PCI dal 1972 al 1984, protagonista
                della trasformazione politica del comunismo italiano,
                del compromesso storico e del progressivo distacco
                dall&apos;Unione Sovietica.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/dispense?categoria=Berlinguer"
                  className="bg-[var(--red)] px-7 py-4 text-sm font-bold text-white transition hover:bg-[var(--red-dark)]"
                >
                  Approfondisci Berlinguer
                </Link>

                <Link
                  href="/storia"
                  className="border border-[var(--foreground)] px-7 py-4 text-sm font-bold transition hover:bg-[var(--foreground)] hover:text-white"
                >
                  Vedi la cronologia del PCI
                </Link>
              </div>
            </div>

            <aside className="border-l border-[var(--border)] pl-10">
              <div className="eyebrow">
                Profilo
              </div>

              <div className="mt-7 border-y border-[var(--border)]">
                <div className="grid grid-cols-[130px_1fr] gap-5 py-5">
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                    Nato
                  </span>
                  <span className="text-sm font-semibold">
                    Sassari, 1922
                  </span>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-5 border-t border-[var(--border)] py-5">
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                    PCI
                  </span>
                  <span className="text-sm font-semibold">
                    Dal 1943
                  </span>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-5 border-t border-[var(--border)] py-5">
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                    Segretario
                  </span>
                  <span className="text-sm font-semibold">
                    1972–1984
                  </span>
                </div>

                <div className="grid grid-cols-[130px_1fr] gap-5 border-t border-[var(--border)] py-5">
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                    Morto
                  </span>
                  <span className="text-sm font-semibold">
                    Padova, 1984
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-[#111111] text-white">
          <div className="container-site py-16">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Una fase decisiva
                </div>

                <h2 className="font-editorial mt-4 text-4xl font-semibold md:text-5xl">
                  Il PCI cambia.
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-base leading-8 text-white/70">
                  Durante la segreteria Berlinguer il PCI consolidò una linea
                  sempre più autonoma rispetto all&apos;Unione Sovietica e cercò
                  una propria collocazione nella sinistra europea occidentale.
                </p>

                <p className="mt-5 text-base leading-8 text-white/70">
                  La sua strategia politica fu segnata dal compromesso storico,
                  dalla stagione della solidarietà nazionale e, negli anni
                  successivi, dal ritorno all&apos;opposizione e dall&apos;alternativa
                  democratica.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="max-w-4xl">
            <div className="eyebrow">
              Temi
            </div>

            <h2 className="font-editorial mt-4 text-5xl font-semibold">
              Le grandi questioni politiche
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Il pensiero e l&apos;azione politica di Berlinguer vengono analizzati
              per temi, distinguendo contesto storico, documenti originali
              e interpretazioni successive.
            </p>
          </div>

          <div className="mt-12 grid border-y border-[var(--border)] lg:grid-cols-2">
            {berlinguerThemes.map((theme, index) => (
              <article
                key={theme.title}
                className={`p-8 lg:p-10 ${
                  index % 2 === 1
                    ? "border-t border-[var(--border)] lg:border-l lg:border-t-0"
                    : index > 1
                    ? "border-t border-[var(--border)]"
                    : ""
                }`}
              >
                <div className="eyebrow">
                  {theme.subtitle}
                </div>

                <h3 className="font-editorial mt-4 text-3xl font-semibold">
                  {theme.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                  {theme.description}
                </p>

                <div className="mt-7">
                  {theme.status === "Disponibile" ? (
                    <Link
                      href={theme.href}
                      className="text-sm font-bold text-[var(--red)]"
                    >
                      Leggi la dispensa →
                    </Link>
                  ) : (
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                      Dispensa in preparazione
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-white/30">
          <div className="container-site py-20">
            <div className="grid gap-14 lg:grid-cols-[250px_1fr]">
              <aside>
                <div className="eyebrow">
                  Cronologia
                </div>

                <h2 className="font-editorial mt-4 text-4xl font-semibold">
                  1922–1984
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                  Alcuni passaggi essenziali della biografia politica di
                  Enrico Berlinguer.
                </p>
              </aside>

              <div className="border-t border-[var(--border)]">
                {berlinguerTimeline.map((event) => (
                  <div
                    key={`${event.year}-${event.title}`}
                    className="grid gap-4 border-b border-[var(--border)] py-6 md:grid-cols-[120px_1fr]"
                  >
                    <div className="font-editorial text-2xl font-semibold text-[var(--red)]">
                      {event.year}
                    </div>

                    <div className="text-sm font-semibold leading-7">
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="eyebrow">
                Metodo
              </div>

              <h2 className="font-editorial mt-4 text-5xl font-semibold leading-[1.05]">
                Studiare Berlinguer senza trasformarlo in un&apos;icona.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-8 text-[var(--muted)]">
                La Via Italiana ricostruisce le posizioni di Berlinguer
                attraverso il loro contesto storico, i documenti politici,
                i discorsi e il dibattito storiografico.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                L&apos;obiettivo è distinguere le posizioni effettivamente sostenute
                da Berlinguer dalle interpretazioni e dalle riletture
                sviluppatesi successivamente.
              </p>

              <Link
                href="/documenti"
                className="mt-8 inline-block border border-[var(--foreground)] px-6 py-4 text-sm font-bold transition hover:bg-[var(--foreground)] hover:text-white"
              >
                Consulta i documenti
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
