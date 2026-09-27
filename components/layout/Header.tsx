"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Storia", href: "/storia" },
  { label: "Dispense", href: "/dispense" },
  { label: "Berlinguer", href: "/berlinguer" },
  { label: "Pensiero", href: "/pensiero" },
  { label: "PCI oggi", href: "/pci-oggi" },
  { label: "Documenti", href: "/documenti" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <div className="border-b border-black/10 bg-[#111111] text-white">
        <div className="container-site flex min-h-[36px] items-center justify-between gap-6 text-[11px] font-medium tracking-wide">
          <span>Progetto editoriale e culturale indipendente</span>

          <span className="hidden text-white/60 sm:inline">
            Storia · Pensiero · Documenti · Attualità
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(245,241,232,0.96)] backdrop-blur-md">
        <div className="container-site">
          <div className="flex min-h-[98px] items-center justify-between gap-8">
            <Link
              href="/"
              className="relative block h-[66px] w-[230px] shrink-0"
              aria-label="La Via Italiana - Home"
              onClick={() => setMobileOpen(false)}
            >
              <Image
                src="/logo/la-via-italiana.png"
                alt="La Via Italiana"
                fill
                priority
                sizes="230px"
                className="object-contain object-left"
              />
            </Link>

            <nav className="hidden items-center gap-7 xl:flex">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[13px] font-semibold tracking-[0.01em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--red)] after:transition-all ${
                      active
                        ? "text-[var(--red)] after:w-full"
                        : "after:w-0 hover:text-[var(--red)] hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex xl:flex">
              <Link
                href="/chi-siamo"
                className={`border px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] transition ${
                  isActive("/chi-siamo")
                    ? "border-[var(--red)] bg-[var(--red)] text-white"
                    : "border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white"
                }`}
              >
                Il progetto
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-12 w-12 items-center justify-center border border-[var(--border)] xl:hidden"
              aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <span
                  className={`h-[1.5px] w-full bg-black transition ${
                    mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-black transition ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-black transition ${
                    mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-[var(--border)] bg-[var(--cream)] xl:hidden">
            <div className="container-site py-8">
              <nav className="flex flex-col">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`border-b border-[var(--border)] py-5 font-editorial text-2xl font-semibold ${
                        active ? "text-[var(--red)]" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  href="/chi-siamo"
                  onClick={() => setMobileOpen(false)}
                  className="mt-7 bg-[var(--red)] px-6 py-4 text-center text-sm font-bold text-white"
                >
                  Scopri il progetto
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
