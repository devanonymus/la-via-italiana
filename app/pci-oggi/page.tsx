import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PciOggiArchive from "@/components/pci-oggi/PciOggiArchive";

export const metadata: Metadata = {
  title: "PCI oggi",
  description:
    "Documenti, attività, iniziative e fonti ufficiali del Partito Comunista Italiano contemporaneo.",
};

export default function PciOggiPage() {
  return (
    <>
      <Header />

      <main>
        <PciOggiArchive />
      </main>

      <Footer />
    </>
  );
}
