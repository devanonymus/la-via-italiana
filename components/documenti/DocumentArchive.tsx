"use client";

import { useMemo, useState } from "react";
import { documenti } from "@/data/documenti";

const types = [
  "Tutti",
  ...Array.from(new Set(documenti.map((item) => item.type))),
];

export default function DocumentArchive() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Tutti");

  const filtered = useMemo(() => {
    return documenti.filter((item) => {
      const matchesType =
        type === "Tutti" || item.type === type;

      const searchable =
        `${item.title} ${item.author} ${item.year} ${item.source} ${item.description}`.toLowerCase();

      const matchesQuery =
        searchable.includes(query.toLowerCase());

      return matchesType && matchesQuery;
    });
  }, [query, type]);

  return (
    <>
      <section className="border-b border-[var(--border)]">
        <div className="container-site py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="eyebrow">
              Archivio delle fonti
            </div>

            <h1 className="font-editorial mt-5 text-6xl font-semibold tracking-[-0.04em] md:text-8xl">
              Documenti
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Testi teorici, manifesti, programmi, tesi congressuali, statuti,
              discorsi, interviste e fonti storiche. Un archivio per distinguere
              le opere fondative dalle successive interpretazioni politiche.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-white/30">
        <div className="container-site py-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca per titolo, autore, anno..."
              className="w-full border border-[var(--border)] bg-[var(--cream)] px-5 py-4 text-sm outline-none focus:border-[var(--red)]"
            />

            <div className="flex flex-wrap gap-2">
              {types.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setType(item)}
                  className={`border px-4 py-3 text-xs font-bold transition ${
                    type === item
                      ? "border-[var(--red)] bg-[var(--red)] text-white"
                      : "border-[var(--border)] hover:border-[var(--red)] hover:text-[var(--red)]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">
              Fonti
            </div>

            <h2 className="font-editorial mt-2 text-4xl font-semibold">
              Archivio documentale
            </h2>
          </div>

          <div className="text-sm text-[var(--muted)]">
            {filtered.length} document{filtered.length === 1 ? "o" : "i"}
          </div>
        </div>

        <div className="border-t border-[var(--border)]">
          {filtered.map((item) => (
            <article
              key={item.slug}
              className="grid gap-7 border-b border-[var(--border)] py-9 md:grid-cols-[150px_1fr_180px]"
            >
              <div>
                <div className="font-editorial text-3xl font-semibold text-[var(--red)]">
                  {item.year}
                </div>

                <div className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
                  {item.type}
                </div>
              </div>

              <div>
                <h3 className="font-editorial text-3xl font-semibold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold">
                  {item.author}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>

                <div className="mt-5 text-xs text-[var(--muted)]">
                  Fonte: {item.source}
                </div>
              </div>

              <div className="flex items-center md:justify-end">
                {item.externalUrl ? (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[var(--foreground)] px-5 py-3 text-xs font-bold transition hover:bg-[var(--foreground)] hover:text-white"
                  >
                    Apri fonte ↗
                  </a>
                ) : (
                  <span className="text-xs text-[var(--muted)]">
                    Fonte in catalogazione
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
