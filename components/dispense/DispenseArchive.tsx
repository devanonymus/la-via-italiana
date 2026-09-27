"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { dispense } from "@/data/dispense";

const categories = [
  "Tutte",
  "Storia del PCI",
  "Berlinguer",
  "Pensiero",
  "Politica internazionale",
];

export default function DispenseArchive() {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("categoria");

  const initialCategory =
    requestedCategory && categories.includes(requestedCategory)
      ? requestedCategory
      : "Tutte";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    return dispense.filter((item) => {
      const matchesCategory =
        category === "Tutte" || item.category === category;

      const searchable =
        `${item.title} ${item.excerpt} ${item.category} ${item.period}`.toLowerCase();

      const matchesQuery = searchable.includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <section className="border-b border-[var(--border)]">
        <div className="container-site py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="eyebrow">
              Biblioteca digitale
            </div>

            <h1 className="font-editorial mt-5 text-6xl font-semibold tracking-[-0.04em] md:text-8xl">
              Dispense
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Studi, ricostruzioni storiche e approfondimenti sul PCI,
              sul pensiero comunista italiano e sui suoi protagonisti.
              Ogni dispensa è accompagnata da fonti e riferimenti bibliografici.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-white/35">
        <div className="container-site py-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca una dispensa..."
              className="w-full border border-[var(--border)] bg-[var(--cream)] px-5 py-4 text-sm outline-none transition focus:border-[var(--red)]"
            />

            <div className="flex flex-wrap gap-2">
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
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="eyebrow">
              Archivio
            </div>

            <h2 className="font-editorial mt-2 text-4xl font-semibold">
              Tutte le dispense
            </h2>
          </div>

          <div className="text-sm text-[var(--muted)]">
            {filtered.length} risultat{filtered.length === 1 ? "o" : "i"}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="border-y border-[var(--border)] py-16 text-center">
            <div className="font-editorial text-3xl">
              Nessuna dispensa trovata
            </div>

            <p className="mt-3 text-sm text-[var(--muted)]">
              Prova a modificare la ricerca o il filtro selezionato.
            </p>
          </div>
        ) : (
          <div className="border-t border-[var(--border)]">
            {filtered.map((item) => (
              <article
                key={item.slug}
                className="grid gap-7 border-b border-[var(--border)] py-9 transition hover:bg-white/30 md:grid-cols-[180px_1fr_auto]"
              >
                <div>
                  <div className="eyebrow">
                    {item.category}
                  </div>

                  <div className="mt-3 text-xs text-[var(--muted)]">
                    {item.period}
                  </div>
                </div>

                <div>
                  <h3 className="font-editorial text-3xl font-semibold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                    {item.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--muted)]">
                    <span>{item.author}</span>
                    <span>{item.readingTime}</span>

                    <span
                      className={
                        item.status === "Disponibile"
                          ? "font-semibold text-[var(--red)]"
                          : ""
                      }
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="flex items-center md:justify-end">
                  {item.status === "Disponibile" ? (
                    <Link
                      href={`/dispense/${item.slug}`}
                      className="border border-[var(--foreground)] px-5 py-3 text-xs font-bold transition hover:bg-[var(--foreground)] hover:text-white"
                    >
                      Leggi →
                    </Link>
                  ) : (
                    <span className="text-xs font-semibold text-[var(--muted)]">
                      Prossimamente
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
