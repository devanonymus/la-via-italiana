import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocumentArchive from "@/components/documenti/DocumentArchive";

export const metadata: Metadata = {
  title: "Documenti e fonti",
  description:
    "Archivio di discorsi, interviste, testi politici e fonti sulla storia del PCI e del comunismo italiano.",
};

export default function DocumentiPage() {
  return (
    <>
      <Header />

      <main>
        <DocumentArchive />
      </main>

      <Footer />
    </>
  );
}
