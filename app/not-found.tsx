import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />

      <main>
        <section className="container-site flex min-h-[650px] items-center py-20">
          <div className="max-w-4xl">
            <div className="eyebrow">
              Errore 404
            </div>

            <div className="font-editorial mt-5 text-[110px] font-semibold leading-none text-[var(--red)] md:text-[170px]">
              404
            </div>

            <h1 className="font-editorial mt-4 text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
              Questa pagina non è nell&apos;archivio.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)]">
              Il contenuto potrebbe essere stato spostato,
              non essere ancora disponibile oppure l&apos;indirizzo potrebbe
              non essere corretto.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="bg-[var(--red)] px-7 py-4 text-sm font-bold text-white"
              >
                Torna alla Home
              </Link>

              <Link
                href="/dispense"
                className="border border-[var(--foreground)] px-7 py-4 text-sm font-bold"
              >
                Vai alle dispense
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
