import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export type MonographSection = {
  id: string;
  num: string;
  title: string;
  paragraphs: string[];
  note?: {
    title: string;
    text: string;
  };
  compare?: {
    leftTitle: string;
    left: string;
    rightTitle: string;
    right: string;
  };
};

export type MonographSource = {
  title: string;
  description: string;
  href: string;
};

export type TimelineItem = {
  year: string;
  text: string;
};

type Props = {
  eyebrow: string;
  title: string;
  accentTitle?: string;
  subtitle: string;
  description: string;
  period: string;
  readingTime: string;
  sections: MonographSection[];
  timeline?: TimelineItem[];
  sources: MonographSource[];
};

export default function MonographPage({
  eyebrow,
  title,
  accentTitle,
  subtitle,
  description,
  period,
  readingTime,
  sections,
  timeline = [],
  sources,
}: Props) {
  const index = [
    ...sections.map((section) => ({
      href: `#${section.id}`,
      label: `${section.num}. ${section.title}`,
    })),
    ...(timeline.length
      ? [{ href: "#cronologia", label: "Cronologia essenziale" }]
      : []),
    { href: "#fonti", label: "Fonti e bibliografia" },
  ];

  return (
    <>
      <Header />

      <main>
        <article>
          <header className="border-b border-[var(--border)]">
            <div className="container-site py-16 md:py-24">
              <Link
                href="/dispense"
                className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]"
              >
                ← Torna alle dispense
              </Link>

              <div className="mt-10 max-w-6xl">
                <div className="eyebrow">{eyebrow}</div>

                <h1 className="font-editorial mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-7xl">
                  {title}
                  {accentTitle ? (
                    <>
                      <br />
                      <span className="text-[var(--red)]">{accentTitle}</span>
                    </>
                  ) : null}
                </h1>

                <p className="font-editorial mt-5 max-w-5xl text-3xl leading-tight md:text-4xl">
                  {subtitle}
                </p>

                <p className="mt-8 max-w-4xl text-lg leading-8 text-[var(--muted)]">
                  {description}
                </p>

                <div className="mt-10 grid gap-5 border-y border-[var(--border)] py-7 sm:grid-cols-4">
                  <Meta label="Autore" value="La Via Italiana" />
                  <Meta label="Periodo" value={period} />
                  <Meta label="Livello" value="Monografico" />
                  <Meta label="Lettura" value={readingTime} />
                </div>
              </div>
            </div>
          </header>

          <div className="container-site grid gap-16 py-16 lg:grid-cols-[280px_minmax(0,840px)] lg:justify-center">
            <aside className="lg:sticky lg:top-40 lg:self-start">
              <div className="eyebrow">Indice</div>

              <nav className="mt-5 flex max-h-[67vh] flex-col gap-2 overflow-auto border-l border-[var(--border)] pl-5 pr-4">
                {index.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm leading-6 text-[var(--muted)] transition hover:text-[var(--red)]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Metodo
                </div>
                <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                  Fatti, documenti e interpretazioni sono tenuti distinti.
                  I passaggi controversi sono presentati con il relativo
                  contesto storico e con riferimenti verificabili.
                </p>
              </div>
            </aside>

            <div className="article-content">
              {sections.map((section) => (
                <section key={section.id} id={section.id}>
                  <div className="eyebrow">{section.num}</div>
                  <h2 className="font-editorial mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                    {section.title}
                  </h2>

                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {section.note ? (
                    <div className="my-10 border-l-4 border-[var(--red)] bg-white/45 px-7 py-7">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
                        {section.note.title}
                      </div>
                      <div className="font-editorial mt-4 text-2xl leading-[1.3]">
                        {section.note.text}
                      </div>
                    </div>
                  ) : null}

                  {section.compare ? (
                    <div className="my-10 grid border border-[var(--border)] md:grid-cols-2">
                      <div className="p-6 md:border-r md:border-[var(--border)]">
                        <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
                          {section.compare.leftTitle}
                        </div>
                        <p className="!mb-0 !mt-3 text-sm leading-7">
                          {section.compare.left}
                        </p>
                      </div>
                      <div className="border-t border-[var(--border)] p-6 md:border-t-0">
                        <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
                          {section.compare.rightTitle}
                        </div>
                        <p className="!mb-0 !mt-3 text-sm leading-7">
                          {section.compare.right}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </section>
              ))}

              {timeline.length ? (
                <section id="cronologia">
                  <div className="eyebrow">Cronologia</div>
                  <h2 className="font-editorial mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                    Cronologia essenziale
                  </h2>

                  <div className="mt-8 border-t border-[var(--border)]">
                    {timeline.map((item) => (
                      <div
                        key={`${item.year}-${item.text}`}
                        className="grid gap-3 border-b border-[var(--border)] py-5 md:grid-cols-[170px_1fr]"
                      >
                        <div className="font-editorial text-xl font-semibold text-[var(--red)]">
                          {item.year}
                        </div>
                        <div className="text-sm leading-7">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              <section id="fonti">
                <div className="eyebrow">Fonti</div>
                <h2 className="font-editorial mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                  Fonti e bibliografia essenziale
                </h2>

                <p>
                  Le fonti qui indicate permettono di distinguere i documenti
                  coevi dalle successive ricostruzioni storiche. La selezione
                  privilegia archivi, testi originali e opere di riferimento.
                </p>

                <div className="mt-10 space-y-9">
                  {sources.map((source) => (
                    <div
                      key={source.href}
                      className="border-t border-[var(--border)] pt-8"
                    >
                      <div className="text-base font-bold">{source.title}</div>
                      <p className="!mt-2 text-sm leading-7 text-[var(--muted)]">
                        {source.description}
                      </p>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-bold text-[var(--red)]"
                      >
                        Consulta la fonte ↗
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold">{value}</div>
    </div>
  );
}
