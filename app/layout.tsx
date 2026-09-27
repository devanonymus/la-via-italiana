import type { Metadata, Viewport } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#A7191F",
};

export const metadata: Metadata = {
  manifest: "/manifest.webmanifest",
  title: {
    default: "La Via Italiana",
    template: "%s | La Via Italiana",
  },
  description:
    "Storia, pensiero e attualità del comunismo italiano. Dispense, documenti, approfondimenti e fonti sul PCI e sulla cultura politica italiana.",
  keywords: [
    "PCI",
    "Partito Comunista Italiano",
    "Enrico Berlinguer",
    "Antonio Gramsci",
    "comunismo italiano",
    "storia PCI",
    "socialismo",
    "storia politica italiana",
    "dispense politiche",
  ],
  authors: [
    {
      name: "La Via Italiana",
    },
  ],
  creator: "La Via Italiana",
  publisher: "La Via Italiana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "La Via Italiana",
    description:
      "Storia, pensiero e attualità del comunismo italiano.",
    siteName: "La Via Italiana",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Via Italiana",
    description:
      "Storia, pensiero e attualità del comunismo italiano.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geist.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
