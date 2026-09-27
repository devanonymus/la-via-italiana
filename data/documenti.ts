export type Documento = {
  slug: string;
  title: string;
  type: string;
  year: string;
  author: string;
  description: string;
  source: string;
  externalUrl?: string;
  featured?: boolean;
};

export const documenti: Documento[] = [
  {
    slug: "berlinguer-questione-morale-1981",
    title: "Intervista sulla questione morale",
    type: "Intervista",
    year: "1981",
    author: "Enrico Berlinguer",
    description:
      "La storica intervista rilasciata a Eugenio Scalfari sul rapporto tra partiti, istituzioni, potere e interesse generale.",
    source: "la Repubblica",
    externalUrl:
      "https://www.repubblica.it/politica/2016/07/28/video/berlinguer_scalfari_e_la_questione_morale-422615909/",
    featured: true,
  },
  {
    slug: "compromesso-storico-1973",
    title: "Riflessioni sul compromesso storico",
    type: "Articoli politici",
    year: "1973",
    author: "Enrico Berlinguer",
    description:
      "Il ciclo di riflessioni politiche sviluppato dopo il golpe cileno, alla base della strategia del compromesso storico.",
    source: "Rinascita / ricostruzione Treccani",
    externalUrl:
      "https://www.treccani.it/enciclopedia/compromesso-storico_%28Dizionario-di-Storia%29/",
    featured: true,
  },
  {
    slug: "berlinguer-spinta-propulsiva-1981",
    title: "L'esaurimento della spinta propulsiva dell'Ottobre",
    type: "Intervento politico",
    year: "1981",
    author: "Enrico Berlinguer",
    description:
      "Una delle formulazioni più note del progressivo distacco del PCI dal modello sovietico.",
    source: "Ricostruzione Treccani",
    externalUrl:
      "https://www.treccani.it/enciclopedia/partito-comunista-italiano_%28Dizionario-di-Storia%29/",
  },
  {
    slug: "pci-livorno-1921",
    title: "La nascita del Partito Comunista d'Italia",
    type: "Documento storico",
    year: "1921",
    author: "PCd'I",
    description:
      "Materiali e documentazione relativi alla fondazione del Partito Comunista d'Italia al Congresso di Livorno.",
    source: "Archivio storico",
  },
  {
    slug: "gramsci-quaderni-carcere",
    title: "I Quaderni del carcere",
    type: "Opera politica",
    year: "1929–1935",
    author: "Antonio Gramsci",
    description:
      "Scritti fondamentali per comprendere i concetti di egemonia, società civile, intellettuali e cultura politica.",
    source: "Opera di Antonio Gramsci",
  },
];
