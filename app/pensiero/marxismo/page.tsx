import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Marxismo: concetti, testi e sviluppo storico",
  description:
    "Introduzione storica al marxismo: materialismo storico, lotta di classe, critica dell'economia politica, Stato, socialismo, comunismo e principali testi di Marx ed Engels.",
};

const concepts = [
  {
    title: "Materialismo storico",
    text: "Metodo di interpretazione storica che attribuisce un ruolo centrale ai rapporti sociali di produzione, alle trasformazioni economiche e ai conflitti tra classi, senza ridurre automaticamente ogni fenomeno politico o culturale a un unico fattore economico.",
  },
  {
    title: "Lotta di classe",
    text: "Nel pensiero di Marx ed Engels i conflitti tra gruppi collocati diversamente nei rapporti di produzione costituiscono una chiave essenziale per leggere il mutamento storico.",
  },
  {
    title: "Critica dell'economia politica",
    text: "Marx analizza merce, valore, lavoro salariato, capitale, accumulazione e plusvalore per descrivere il funzionamento e le contraddizioni della società capitalistica.",
  },
  {
    title: "Stato e potere politico",
    text: "Il rapporto tra classi sociali, istituzioni e Stato è uno dei problemi centrali della tradizione marxista. Le interpretazioni successive differiscono molto, soprattutto tra socialdemocrazia, leninismo e marxismi occidentali.",
  },
  {
    title: "Socialismo e comunismo",
    text: "Nella tradizione marxiana il comunismo viene concepito come superamento della società divisa in classi. I modi, i tempi e le istituzioni della transizione sono stati oggetto di interpretazioni molto diverse nel movimento socialista e comunista.",
  },
  {
    title: "Internazionalismo",
    text: "Marx ed Engels leggono il capitalismo come sistema sempre più internazionale e collegano l'emancipazione del lavoro alla cooperazione politica dei lavoratori oltre i confini nazionali.",
  },
];

const texts = [
  ["1848", "Manifesto del Partito Comunista", "Karl Marx e Friedrich Engels", "Manifesto politico e programmatico della Lega dei Comunisti."],
  ["1859", "Per la critica dell'economia politica", "Karl Marx", "Opera importante per la formulazione della concezione materialistica della storia."],
  ["1867", "Il Capitale, libro I", "Karl Marx", "Analisi della produzione capitalistica, della merce, del valore e dell'accumulazione."],
  ["1875", "Critica del Programma di Gotha", "Karl Marx", "Intervento sul programma del movimento operaio tedesco e sulla transizione post-capitalistica."],
  ["1880", "L'evoluzione del socialismo dall'utopia alla scienza", "Friedrich Engels", "Sintesi divulgativa di temi centrali del socialismo marxista."],
];

export default function MarxismoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-[var(--border)]">
          <div className="container-site py-20 md:py-24">
            <div className="max-w-5xl">
              <div className="eyebrow">Fondamenti teorici</div>
              <h1 className="font-editorial mt-5 text-6xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-8xl">
                Marxismo
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                Concetti, testi fondamentali e sviluppi storici del pensiero
                di Karl Marx e Friedrich Engels, distinguendo le opere originali
                dalle successive interpretazioni marxiste e comuniste.
              </p>
            </div>
          </div>
        </section>

        <section className="container-site py-20">
          <div className="max-w-4xl">
            <div className="eyebrow">Concetti</div>
            <h2 className="font-editorial mt-4 text-5xl font-semibold">
              Le categorie fondamentali
            </h2>
          </div>

          <div className="mt-12 grid border-t border-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
            {concepts.map((item, index) => (
              <article
                key={item.title}
                className={`min-h-[300px] p-8 ${index % 3 !== 0 ? "lg:border-l lg:border-[var(--border)]" : ""} ${index > 2 ? "border-t border-[var(--border)]" : ""}`}
              >
                <h3 className="font-editorial text-3xl font-semibold">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-white/30">
          <div className="container-site py-20">
            <div className="max-w-4xl">
              <div className="eyebrow">Canone di base</div>
              <h2 className="font-editorial mt-4 text-5xl font-semibold">
                Testi fondamentali
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
                Questi testi non costituiscono una “linea guida” unica e immutabile:
                rappresentano nuclei teorici e programmatici diversi, scritti in
                contesti differenti. Le successive correnti marxiste li hanno
                interpretati in modi anche molto distanti.
              </p>
            </div>

            <div className="mt-12 border-t border-[var(--border)]">
              {texts.map(([year, title, author, description]) => (
                <div key={title} className="grid gap-6 border-b border-[var(--border)] py-8 md:grid-cols-[120px_1fr]">
                  <div className="font-editorial text-2xl font-semibold text-[var(--red)]">{year}</div>
                  <div>
                    <h3 className="font-editorial text-3xl font-semibold">{title}</h3>
                    <div className="mt-2 text-sm font-semibold">{author}</div>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/documenti"
              className="mt-10 inline-block border border-[var(--foreground)] px-6 py-4 text-sm font-bold transition hover:bg-[var(--foreground)] hover:text-white"
            >
              Vai ai testi e documenti →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
