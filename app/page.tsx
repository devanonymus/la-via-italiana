import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const topics = [
  {
    category: "Storia",
    title: "Dal Congresso di Livorno alla nascita del PCI",
    description:
      "Origini, correnti, protagonisti e trasformazioni del comunismo italiano.",
  },
  {
    category: "Pensiero",
    title: "Antonio Gramsci e il concetto di egemonia",
    description:
      "Società civile, cultura, consenso e costruzione del potere politico.",
  },
  {
    category: "Berlinguer",
    title: "Enrico Berlinguer e la via democratica al socialismo",
    description:
      "Democrazia, autonomia, questione morale e trasformazione del PCI.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full border border-[var(--red)] opacity-[0.07]" />
          <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[320px] w-[320px] rounded-full border border-[var(--red)] opacity-[0.07]" />

          <div className="container-site grid min-h-[670px] items-center gap-16 py-20 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-[var(--red)]" />

                <span className="eyebrow">
                  Centro studi digitale indipendente
                </span>
              </div>

              <h1 className="font-editorial max-w-[980px] text-[58px] font-semibold leading-[0.96] tracking-[-0.045em] sm:text-[72px] lg:text-[92px]">
                Comprendere
                <br />
                la storia.
                <br />
                <span className="text-[var(--red)]">
                  Leggere il presente.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-[17px] leading-8 text-[var(--muted)]">
                Un archivio indipendente dedicato alla storia del PCI, al pensiero
                comunista italiano, ai suoi protagonisti e alle trasformazioni
                politiche che continuano a interrogare il presente.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/dispense"
                  className="bg-[var(--red)] px-7 py-4 text-sm font-bold text-white transition hover:bg-[var(--red-dark)]"
                >
                  Esplora le dispense
                </Link>

                <Link
                  href="/storia"
                  className="border border-[var(--foreground)] px-7 py-4 text-sm font-bold transition hover:bg-[var(--foreground)] hover:text-white"
                >
                  Esplora la storia
                </Link>
              </div>

              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-[var(--border)] pt-6 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
                <span>PCI 1921–1991</span>
                <span>Berlinguer</span>
                <span>Gramsci</span>
                <span>Documenti</span>
                <span>PCI oggi</span>
              </div>
            </div>

            <aside className="relative border-l border-[var(--border)] pl-10">
              <div className="eyebrow">
                La Via Italiana
              </div>

              <p className="font-editorial mt-6 text-[34px] font-medium leading-[1.08]">
                Un luogo di studio, archivio e approfondimento sul comunismo italiano.
              </p>

              <p className="mt-7 text-sm leading-7 text-[var(--muted)]">
                Contenuti storici, dispense, documenti originali e attualità politica
                vengono pubblicati distinguendo sempre fonti, ricostruzione storica e
                analisi editoriale.
              </p>

              <div className="mt-9 space-y-0 border-y border-[var(--border)]">
                <div className="flex items-center justify-between py-5">
                  <span className="text-sm font-semibold">
                    Dispense
                  </span>
                  <span className="text-[var(--red)]">→</span>
                </div>

                <div className="flex items-center justify-between border-t border-[var(--border)] py-5">
                  <span className="text-sm font-semibold">
                    Archivio storico
                  </span>
                  <span className="text-[var(--red)]">→</span>
                </div>

                <div className="flex items-center justify-between border-t border-[var(--border)] py-5">
                  <span className="text-sm font-semibold">
                    PCI oggi
                  </span>
                  <span className="text-[var(--red)]">→</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-[var(--border)] bg-[#111111] text-white">
          <div className="container-site grid md:grid-cols-3">
            <div className="py-8 md:border-r md:border-white/15 md:px-8">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                01
              </div>

              <div className="font-editorial mt-3 text-3xl">
                Storia
              </div>

              <p className="mt-2 text-sm text-white/55">
                Dal PCd’I alla fine del PCI.
              </p>
            </div>

            <div className="border-t border-white/15 py-8 md:border-r md:border-t-0 md:px-8">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                02
              </div>

              <div className="font-editorial mt-3 text-3xl">
                Pensiero
              </div>

              <p className="mt-2 text-sm text-white/55">
                Gramsci, Berlinguer e cultura politica.
              </p>
            </div>

            <div className="border-t border-white/15 py-8 md:border-t-0 md:px-8">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/40">
                03
              </div>

              <div className="font-editorial mt-3 text-3xl">
                Presente
              </div>

              <p className="mt-2 text-sm text-white/55">
                PCI contemporaneo e documenti politici.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="eyebrow">
                Approfondimenti
              </div>

              <h2 className="font-editorial mt-3 text-5xl font-semibold">
                Inizia da qui
              </h2>
            </div>

            <Link
              href="/dispense"
              className="hidden text-sm font-bold text-[var(--red)] md:block"
            >
              Tutte le dispense →
            </Link>
          </div>

          <div className="mt-12 grid gap-0 border-y border-[var(--border)] lg:grid-cols-3">
            {topics.map((topic, index) => (
              <article
                key={topic.title}
                className={`py-9 lg:px-9 ${
                  index !== 0
                    ? "border-t border-[var(--border)] lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <div className="eyebrow">
                  {topic.category}
                </div>

                <h3 className="font-editorial mt-5 text-3xl font-semibold leading-tight">
                  {topic.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                  {topic.description}
                </p>

                <Link
                  href="/dispense"
                  className="mt-7 inline-block text-sm font-bold text-[var(--red)]"
                >
                  Leggi →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--red)] text-white">
          <div className="container-site grid gap-12 py-20 lg:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">
                PCI oggi
              </div>

              <h2 className="font-editorial mt-4 text-5xl font-semibold">
                Il partito nel presente.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-base leading-8 text-white/80">
                Documenti, comunicati, congressi e iniziative del PCI
                contemporaneo, pubblicati con indicazione chiara delle fonti
                ufficiali e separati dai contenuti editoriali del progetto.
              </p>

              <Link
                href="/pci-oggi"
                className="mt-8 inline-block border border-white px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[var(--red)]"
              >
                Vai a PCI oggi
              </Link>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="max-w-4xl">
            <div className="eyebrow">
              Metodo
            </div>

            <blockquote className="font-editorial mt-5 text-4xl leading-tight md:text-5xl">
              Fonti prima delle opinioni. Contesto prima degli slogan.
            </blockquote>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Ogni approfondimento sarà accompagnato da riferimenti
              bibliografici, documenti originali e indicazione delle fonti.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
