import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Livorno 1921 e la nascita del Partito Comunista d’Italia",
  description:
    "Origini del Partito Comunista d’Italia, Congresso di Livorno, Bordiga, Gramsci e il rapporto con il movimento socialista.",
};

export default function Livorno1921Page() {
  return (
    <>
      <Header />

      <main>
        <article>
          <header className="border-b border-[var(--border)]">
            <div className="container-site py-16 md:py-20">
              <Link
                href="/dispense"
                className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]"
              >
                ← Torna alle dispense
              </Link>

              <div className="mt-10 max-w-5xl">
                <div className="eyebrow">
                  Storia del PCI · 1921
                </div>

                <h1 className="font-editorial mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-7xl">
                  Livorno 1921 e la nascita del Partito Comunista d’Italia
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                  La scissione socialista, la nascita del PCd’I,
                  Bordiga, Gramsci e il rapporto con l’Internazionale comunista.
                </p>

                <div className="mt-10 flex flex-wrap gap-8 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
                  <span>La Via Italiana</span>
                  <span>Tempo di lettura: 18 min</span>
                  <span>Dispensa 01</span>
                </div>
              </div>
            </div>
          </header>

          <div className="container-site grid gap-14 py-16 lg:grid-cols-[240px_minmax(0,760px)] lg:justify-center">
            <aside className="lg:sticky lg:top-40 lg:self-start">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--red)]">
                Indice
              </div>

              <nav className="mt-5 flex flex-col gap-3 text-sm text-[var(--muted)]">
                <a href="#contesto">1. Il contesto</a>
                <a href="#psi">2. Le divisioni nel PSI</a>
                <a href="#livorno">3. Il Congresso di Livorno</a>
                <a href="#bordiga-gramsci">4. Bordiga e Gramsci</a>
                <a href="#fascismo">5. L’ascesa del fascismo</a>
                <a href="#eredita">6. L’eredità politica</a>
              </nav>
            </aside>

            <div className="article-content">
              <section id="contesto">
                <div className="eyebrow">01</div>

                <h2 className="font-editorial mt-3 text-4xl font-semibold">
                  Il contesto italiano
                </h2>

                <p>
                  Il Partito Comunista d’Italia nacque nel gennaio 1921,
                  in un’Italia attraversata da una profonda crisi politica,
                  sociale ed economica. La Prima guerra mondiale aveva lasciato
                  inflazione, disoccupazione e fortissime tensioni sociali.
                </p>

                <p>
                  Tra il 1919 e il 1920 il Paese visse il cosiddetto
                  Biennio rosso, caratterizzato da scioperi, mobilitazioni
                  contadine e occupazioni delle fabbriche.
                </p>
              </section>

              <section id="psi">
                <div className="eyebrow">02</div>

                <h2 className="font-editorial mt-3 text-4xl font-semibold">
                  Le divisioni nel Partito Socialista
                </h2>

                <p>
                  Il Partito Socialista Italiano era attraversato da correnti
                  molto diverse. I riformisti sostenevano una trasformazione
                  progressiva attraverso il Parlamento e le riforme.
                  I massimalisti mantenevano una prospettiva rivoluzionaria,
                  mentre la frazione comunista chiedeva una rottura più netta.
                </p>
              </section>

              <section id="livorno">
                <div className="eyebrow">03</div>

                <h2 className="font-editorial mt-3 text-4xl font-semibold">
                  Il Congresso di Livorno
                </h2>

                <p>
                  Il XVII Congresso socialista si svolse a Livorno dal
                  15 al 21 gennaio 1921. Il confronto riguardava soprattutto
                  il rapporto con l’Internazionale comunista e le condizioni
                  poste da Mosca per l’adesione.
                </p>

                <p>
                  Dopo la sconfitta della propria linea, la corrente comunista
                  lasciò il congresso e fondò il Partito Comunista d’Italia,
                  Sezione italiana dell’Internazionale Comunista.
                </p>
              </section>

              <section id="bordiga-gramsci">
                <div className="eyebrow">04</div>

                <h2 className="font-editorial mt-3 text-4xl font-semibold">
                  Bordiga e Gramsci
                </h2>

                <p>
                  Amadeo Bordiga ebbe inizialmente un ruolo dominante nella
                  direzione del nuovo partito. Antonio Gramsci proveniva invece
                  dall’esperienza torinese dell’Ordine Nuovo e dai consigli di fabbrica.
                </p>

                <p>
                  Negli anni successivi le differenze tra le due impostazioni
                  divennero sempre più evidenti, fino all’affermazione della
                  linea gramsciana nel Congresso di Lione del 1926.
                </p>
              </section>

              <section id="fascismo">
                <div className="eyebrow">05</div>

                <h2 className="font-editorial mt-3 text-4xl font-semibold">
                  L’ascesa del fascismo
                </h2>

                <p>
                  La nascita del nuovo partito avvenne mentre il fascismo
                  aumentava rapidamente la propria forza politica e paramilitare.
                  Nel 1922 Benito Mussolini arrivò alla guida del governo.
                </p>

                <p>
                  La repressione fascista avrebbe poi costretto il movimento
                  comunista alla clandestinità, modificando profondamente
                  la sua organizzazione e la sua strategia.
                </p>
              </section>

              <section id="eredita">
                <div className="eyebrow">06</div>

                <h2 className="font-editorial mt-3 text-4xl font-semibold">
                  L’eredità politica
                </h2>

                <p>
                  Il comunismo italiano nato nel 1921 era molto diverso
                  dal PCI che decenni dopo sarebbe stato guidato da Enrico Berlinguer.
                </p>

                <p>
                  Tra questi due momenti si collocano Gramsci, la lotta antifascista,
                  la Resistenza, Togliatti, la Costituzione repubblicana
                  e la progressiva elaborazione di una via italiana al socialismo.
                </p>
              </section>

              <section className="border-t border-[var(--border)] pt-10">
                <div className="eyebrow">
                  Nota editoriale
                </div>

                <p>
                  Questa dispensa rappresenta una sintesi introduttiva.
                  La bibliografia, i documenti originali e le fonti archivistiche
                  saranno progressivamente integrati nell’archivio documentale
                  di La Via Italiana.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
