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
    slug: "manifesto-partito-comunista-1848",
    title: "Manifesto del Partito Comunista",
    type: "Manifesti e programmi",
    year: "1848",
    author: "Karl Marx e Friedrich Engels",
    description:
      "Testo programmatico redatto per la Lega dei Comunisti. Espone una lettura della storia fondata sul conflitto tra classi e presenta obiettivi e funzione politica dei comunisti.",
    source: "Wikisource / edizione italiana storica",
    externalUrl:
      "https://it.wikisource.org/wiki/Opera:Manifesto_del_Partito_Comunista",
    featured: true,
  },
  {
    slug: "critica-programma-gotha-1875",
    title: "Critica del Programma di Gotha",
    type: "Testi teorici fondamentali",
    year: "1875",
    author: "Karl Marx",
    description:
      "Critica del programma di unificazione del movimento operaio tedesco e testo centrale per il dibattito su Stato, distribuzione e transizione post-capitalistica.",
    source: "Marxists Internet Archive",
    externalUrl:
      "https://www.marxists.org/italiano/marx-engels/index.htm",
  },
  {
    slug: "socialismo-utopia-scienza-1880",
    title: "L'evoluzione del socialismo dall'utopia alla scienza",
    type: "Testi teorici fondamentali",
    year: "1880",
    author: "Friedrich Engels",
    description:
      "Sintesi divulgativa di temi centrali del materialismo storico e del socialismo marxista.",
    source: "Marxists Internet Archive",
    externalUrl:
      "https://www.marxists.org/italiano/marx-engels/1880/evoluzione/index.htm",
  },
  {
    slug: "stato-rivoluzione-1917",
    title: "Stato e rivoluzione",
    type: "Testi teorici fondamentali",
    year: "1917",
    author: "Vladimir I. Lenin",
    description:
      "Opera dedicata alla teoria marxista dello Stato e ai problemi della rivoluzione, fondamentale per lo sviluppo del marxismo-leninismo.",
    source: "Marxists Internet Archive",
    externalUrl:
      "https://www.marxists.org/italiano/lenin/",
  },
  {
    slug: "tesi-lione-1926",
    title: "Tesi di Lione",
    type: "Tesi congressuali",
    year: "1926",
    author: "Partito Comunista d'Italia",
    description:
      "Tesi discusse al III Congresso del PCd'I su principi, natura del partito, tattica, situazione internazionale e questioni italiane.",
    source: "Testo storico pubblicato su l'Unità",
    externalUrl:
      "https://www.pcint.org/15_Textes_Theses/07_02_it/1926-tesi-lione.htm",
    featured: true,
  },
  {
    slug: "berlinguer-questione-morale-1981",
    title: "Intervista sulla questione morale",
    type: "Interviste e discorsi",
    year: "1981",
    author: "Enrico Berlinguer",
    description:
      "Intervista a Eugenio Scalfari sul rapporto tra partiti, istituzioni, potere e interesse generale.",
    source: "la Repubblica",
    externalUrl:
      "https://www.repubblica.it/dossier/cultura/cinquanta-anni-di-repubblica/2025/07/28/news/enrico_berlinguer_eugenio_scalfari_1981_intervista_50_anni_repubblica-424755946/",
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
    type: "Interviste e discorsi",
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
    type: "Documenti storici",
    year: "1921",
    author: "PCd'I",
    description:
      "Materiali e documentazione relativi alla fondazione del Partito Comunista d'Italia al Congresso di Livorno.",
    source: "Archivio storico",
  },
  {
    slug: "gramsci-quaderni-carcere",
    title: "I Quaderni del carcere",
    type: "Opere teoriche",
    year: "1929–1935",
    author: "Antonio Gramsci",
    description:
      "Scritti fondamentali per comprendere egemonia, società civile, intellettuali, Stato e cultura politica.",
    source: "Opera di Antonio Gramsci",
  },
];
