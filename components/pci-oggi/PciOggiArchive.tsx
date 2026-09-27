"use client";

import { useMemo, useState } from "react";
import {
  pciOggiItems,
  pciOfficialResources,
} from "@/data/pci-oggi";

const categories = [
  "Tutti",
  "Politica e società",
  "Pace e politica internazionale",
  "Lavoro e diritti sociali",
  "Lavoro",
  "Dai territori",
];

export default function PciOggiArchive() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tutti");

  const filtered = useMemo(() => {
    return [...pciOggiItems]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter((item) => {
        const matchesCategory =
          category === "Tutti" || item.category === category;

        const searchable =
          `${item.title} ${item.description} ${item.category} ${item.kind}`.toLowerCase();

        const matchesQuery = searchable.includes(query.toLowerCase());

        return matchesCategory && matchesQuery;
      });
  }, [query, category]);

  return (
    <>
      <section className="border-b border-[var(--border)]">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-end">
            <div className="max-w-4xl">
              <div className="eyebrow">
                Partito Comunista Italiano contemporaneo
              </div>

              <h1 className="font-editorial mt-5 text-6xl font-semibold leading-[0.94] tracking-[-0.045em] md:text-8xl">
                PCI
                <br />
                <span className="text-[var(--red)]">
                  oggi
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                Documenti, iniziative, attività territoriali e materiali
                pubblicati dal Partito Comunista Italiano contemporaneo.
              </p>
            </div>

            <aside className="border-l border-[var(--red)] pl-7">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
                Nota
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Questa sezione raccoglie e indicizza materiali del PCI.
                La Via Italiana è un progetto indipendente e non rappresenta
                il sito ufficiale del partito.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white">
        <div className="container-site grid md:grid-cols-3">
          <div className="py-8 md:border-r md:border-white/15 md:px-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
              Materiali
            </div>

            <div className="font-editorial mt-3 text-3xl">
              Documenti ufficiali
            </div>
          </div>

          <div className="border-t border-white/15 py-8 md:border-r md:border-t-0 md:px-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
              Attività
            </div>

            <div className="font-editorial mt-3 text-3xl">
              Iniziative
            </div>
          </div>

          <div className="border-t border-white/15 py-8 md:border-t-0 md:px-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
              Territorio
            </div>

            <div className="font-editorial mt-3 text-3xl">
              Federazioni e sezioni
            </div>
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
              placeholder="Cerca tra i contenuti del PCI..."
              className="w-full border border-[var(--border)] bg-[var(--cream)] px-5 py-4 text-sm outline-none focus:border-[var(--red)]"
            />

            <div className="flex max-w-4xl flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`border px-4 py-3 text-xs font-bold transition ${
                    category === item
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
              Dal partito
            </div>

            <h2 className="font-editorial mt-2 text-4xl font-semibold">
              Attività e documenti
            </h2>
          </div>

          <div className="text-sm text-[var(--muted)]">
            {filtered.length} contenut{filtered.length === 1 ? "o" : "i"}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="border-y border-[var(--border)] py-16 text-center">
            <div className="font-editorial text-3xl">
              Nessun contenuto trovato
            </div>
          </div>
        ) : (
          <div className="border-t border-[var(--border)]">
            {filtered.map((item) => (
              <article
                key={item.slug}
                className="grid gap-7 border-b border-[var(--border)] py-10 md:grid-cols-[165px_1fr_180px]"
              >
                <div>
                  <div className="font-editorial text-2xl font-semibold text-[var(--red)]">
                    {item.displayDate}
                  </div>

                  <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {item.kind}
                  </div>
                </div>

                <div>
                  <div className="eyebrow">
                    {item.category}
                  </div>

                  <h3 className="font-editorial mt-3 max-w-3xl text-3xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>

                  <div className="mt-5 text-xs text-[var(--muted)]">
                    Fonte ufficiale: {item.source}
                  </div>
                </div>

                <div className="flex items-center md:justify-end">
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[var(--foreground)] px-5 py-3 text-xs font-bold transition hover:bg-[var(--foreground)] hover:text-white"
                  >
                    Fonte ufficiale ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="border-y border-[var(--border)] bg-white/30">
        <div className="container-site py-20">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="eyebrow">
                Strumenti ufficiali
              </div>

              <h2 className="font-editorial mt-4 text-5xl font-semibold">
                Il Partito
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">
                Collegamenti alle principali risorse istituzionali pubblicate
                direttamente dal PCI.
              </p>
            </div>

            <div className="grid border-t border-[var(--border)] md:grid-cols-2">
              {pciOfficialResources.map((resource, index) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-7 transition hover:bg-white/60 ${
                    index % 2 === 1
                      ? "md:border-l md:border-[var(--border)]"
                      : ""
                  } ${
                    index > 1
                      ? "border-t border-[var(--border)]"
                      : ""
                  }`}
                >
                  <h3 className="font-editorial text-2xl font-semibold">
                    {resource.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {resource.description}
                  </p>

                  <div className="mt-6 text-sm font-bold text-[var(--red)]">
                    Apri ↗
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="eyebrow">
              Criterio editoriale
            </div>

            <h2 className="font-editorial mt-4 text-5xl font-semibold leading-tight">
              Fonte ufficiale e analisi restano separate.
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-base leading-8 text-[var(--muted)]">
              Quando La Via Italiana riporta una posizione del Partito
              Comunista Italiano, il contenuto viene identificato come tale
              e collegato alla fonte originaria.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Gli approfondimenti prodotti autonomamente dal progetto vengono
              invece pubblicati nelle aree Dispense, Storia e Pensiero.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
