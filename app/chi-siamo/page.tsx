import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Il progetto",
  description:
    "La Via Italiana è un progetto indipendente dedicato allo studio della storia e del pensiero comunista italiano.",
};

export default function ChiSiamoPage() {
  return (
    <>
      <Header />

      <main>
        <section className="border-b border-[var(--border)]">
          <div className="container-site py-20 md:py-24">
            <div className="max-w-5xl">
              <div className="eyebrow">
                La Via Italiana
              </div>

              <h1 className="font-editorial mt-5 text-6xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-8xl">
                Un archivio per
                <br />
                <span className="text-[var(--red)]">
                  capire, non semplificare.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                La Via Italiana è un progetto editoriale e culturale
                indipendente dedicato alla storia del PCI,
                al pensiero comunista italiano e ai suoi sviluppi contemporanei.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <div className="eyebrow">
                Obiettivo
              </div>

              <h2 className="font-editorial mt-4 text-5xl font-semibold leading-tight">
                Rendere accessibili storia, documenti e idee.
              </h2>
            </div>

            <div className="max-w-xl">
              <p className="text-base leading-8 text-[var(--muted)]">
                Il progetto nasce per raccogliere dispense, fonti,
                documenti e approfondimenti capaci di offrire
                una lettura strutturata della storia del comunismo italiano.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                La Via Italiana non è il sito ufficiale del Partito
                Comunista Italiano e non sostituisce le fonti ufficiali
                del partito contemporaneo.
              </p>

              <Link
                href="/metodologia"
                className="mt-8 inline-block border border-[var(--foreground)] px-6 py-4 text-sm font-bold"
              >
                Leggi il metodo editoriale
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
