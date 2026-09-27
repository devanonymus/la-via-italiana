import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DispenseArchive from "@/components/dispense/DispenseArchive";

export const metadata: Metadata = {
  title: "Dispense",
  description:
    "Dispense e approfondimenti sulla storia del PCI, Enrico Berlinguer, Antonio Gramsci e sul pensiero comunista italiano.",
};

export default function DispensePage() {
  return (
    <>
      <Header />

      <main>
        <Suspense
          fallback={
            <div className="container-site py-24 text-sm text-[var(--muted)]">
              Caricamento archivio...
            </div>
          }
        >
          <DispenseArchive />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
