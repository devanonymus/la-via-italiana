import Image from "next/image";
import Link from "next/link";

const archivio = [
  { label: "Storia del PCI", href: "/storia" },
  { label: "Dispense", href: "/dispense" },
  { label: "Enrico Berlinguer", href: "/berlinguer" },
  { label: "Pensiero politico", href: "/pensiero" },
  { label: "Documenti e fonti", href: "/documenti" },
];

const progetto = [
  { label: "Il progetto", href: "/chi-siamo" },
  { label: "Metodo e fonti", href: "/metodologia" },
  { label: "PCI oggi", href: "/pci-oggi" },
  { label: "Contatti", href: "/contatti" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0e0e0e] text-white">
      <div className="h-[4px] bg-[var(--red)]" />

      <div className="container-site py-16 md:py-20">
        <div className="grid gap-14 xl:grid-cols-[1.4fr_0.65fr_0.65fr]">
          <div className="max-w-xl">
            <Link
              href="/"
              className="relative block h-[100px] w-[360px] max-w-full"
              aria-label="La Via Italiana"
            >
              <Image
                src="/logo/la-via-italiana-footer.png"
                alt="La Via Italiana"
                fill
                sizes="360px"
                className="object-contain object-left"
              />
            </Link>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/55">
              Storia, pensiero e attualità del comunismo italiano.
              Un progetto editoriale e culturale indipendente dedicato
              allo studio, alla documentazione e alla divulgazione storica.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#c9282e]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                Archivio · Ricerca · Cultura politica
              </span>
            </div>
          </div>

          <div>
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
              Esplora
            </div>

            <nav className="flex flex-col gap-4">
              {archivio.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
              La Via Italiana
            </div>

            <nav className="flex flex-col gap-4">
              {progetto.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                Nota editoriale
              </div>

              <p className="mt-3 text-xs leading-6 text-white/40">
                La Via Italiana è un progetto culturale indipendente.
                Non rappresenta il sito ufficiale del Partito Comunista Italiano.
                I contenuti attribuiti al PCI contemporaneo vengono identificati
                come tali e collegati alle rispettive fonti ufficiali.
              </p>
            </div>

            <div className="text-xs text-white/30 lg:text-right">
              © {new Date().getFullYear()} La Via Italiana
              <br />
              Tutti i diritti riservati
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
