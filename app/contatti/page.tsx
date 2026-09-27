import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatti e segnalazioni per il progetto culturale La Via Italiana.",
};

export default function ContattiPage() {
  return (
    <>
      <Header />

      <main>
        <section className="border-b border-[var(--border)]">
          <div className="container-site py-20 md:py-24">
            <div className="max-w-4xl">
              <div className="eyebrow">
                La Via Italiana
              </div>

              <h1 className="font-editorial mt-5 text-6xl font-semibold md:text-8xl">
                Contatti
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Segnalazioni documentali, correzioni, proposte editoriali
                e contributi al progetto.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="eyebrow">
                Scrivi alla redazione
              </div>

              <h2 className="font-editorial mt-4 text-4xl font-semibold">
                Contribuisci all&apos;archivio.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-8 text-[var(--muted)]">
                La pagina contatti verrà successivamente collegata
                a un indirizzo editoriale dedicato e a un modulo
                per l&apos;invio di documenti e segnalazioni.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
