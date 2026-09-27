import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Metodo e fonti",
  description:
    "Metodo editoriale, utilizzo delle fonti e criteri di pubblicazione di La Via Italiana.",
};

export default function MetodologiaPage() {
  return (
    <>
      <Header />

      <main>
        <section className="border-b border-[var(--border)]">
          <div className="container-site py-20">
            <div className="max-w-4xl">
              <div className="eyebrow">
                Il progetto
              </div>

              <h1 className="font-editorial mt-5 text-6xl font-semibold tracking-[-0.04em] md:text-8xl">
                Metodo e fonti
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                La Via Italiana distingue tra documenti originali,
                ricostruzione storica, interpretazione storiografica
                e analisi contemporanea.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="grid gap-14 lg:grid-cols-[280px_minmax(0,760px)]">
            <aside>
              <div className="eyebrow">
                Principi editoriali
              </div>
            </aside>

            <div className="article-content">
              <section>
                <h2 className="font-editorial text-4xl font-semibold">
                  Fonti primarie
                </h2>

                <p>
                  Quando possibile, gli approfondimenti fanno riferimento
                  a discorsi, interviste, documenti congressuali,
                  testi politici e materiali prodotti dai protagonisti
                  della vicenda storica analizzata.
                </p>
              </section>

              <section>
                <h2 className="font-editorial text-4xl font-semibold">
                  Ricostruzione storica
                </h2>

                <p>
                  Le vicende vengono contestualizzate attraverso opere
                  storiografiche, enciclopedie, archivi e fonti editoriali
                  considerate affidabili.
                </p>
              </section>

              <section>
                <h2 className="font-editorial text-4xl font-semibold">
                  Interpretazioni
                </h2>

                <p>
                  Quando esistono letture differenti di un evento o
                  di una posizione politica, queste vengono presentate
                  come interpretazioni e non come fatti incontrovertibili.
                </p>
              </section>

              <section>
                <h2 className="font-editorial text-4xl font-semibold">
                  PCI contemporaneo
                </h2>

                <p>
                  I documenti e le prese di posizione del PCI attuale
                  vengono identificati chiaramente come materiali ufficiali
                  del partito e mantenuti distinti dai contenuti editoriali
                  prodotti da La Via Italiana.
                </p>
              </section>

              <section>
                <h2 className="font-editorial text-4xl font-semibold">
                  Correzioni
                </h2>

                <p>
                  Eventuali errori documentali, cronologici o bibliografici
                  possono essere corretti e aggiornati mantenendo
                  trasparenza sulle fonti utilizzate.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
