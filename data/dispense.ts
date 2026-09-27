export type Dispensa = {
  slug: string;
  title: string;
  category: string;
  period: string;
  excerpt: string;
  author: string;
  readingTime: string;
  status: "Disponibile" | "In preparazione";
  featured?: boolean;
};

export const dispense: Dispensa[] = [
  {
    slug: "livorno-1921-nascita-pcdi",
    title: "Livorno 1921 e la nascita del Partito Comunista d’Italia",
    category: "Storia del PCI",
    period: "1921",
    excerpt:
      "La scissione socialista, Bordiga, Gramsci, il Comintern e le origini del comunismo italiano organizzato.",
    author: "La Via Italiana",
    readingTime: "50–60 min",
    status: "Disponibile",
    featured: true,
  },
  {
    slug: "gramsci-egemonia",
    title: "Antonio Gramsci: egemonia, società civile e questione meridionale",
    category: "Pensiero",
    period: "1891–1937",
    excerpt:
      "Dai consigli di fabbrica ai Quaderni del carcere: egemonia, società civile, intellettuali, guerra di posizione e questione meridionale.",
    author: "La Via Italiana",
    readingTime: "60–75 min",
    status: "Disponibile",
    featured: true,
  },
  {
    slug: "clandestinita-resistenza-togliatti",
    title: "Dalla clandestinità alla Repubblica: Togliatti, Resistenza e partito nuovo",
    category: "Storia del PCI",
    period: "1926–1948",
    excerpt:
      "Clandestinità, antifascismo, Comintern, Resistenza, svolta di Salerno e trasformazione del PCI in grande partito di massa.",
    author: "La Via Italiana",
    readingTime: "75–90 min",
    status: "Disponibile",
    featured: true,
  },
  {
    slug: "pci-unione-sovietica",
    title: "Il PCI e l’Unione Sovietica",
    category: "Politica internazionale",
    period: "1921–1989",
    excerpt:
      "Dal Comintern alla via italiana, dal 1956 a Praga, dall’eurocomunismo allo strappo di Berlinguer.",
    author: "La Via Italiana",
    readingTime: "65–80 min",
    status: "Disponibile",
  },
  {
    slug: "berlinguer-via-democratica-socialismo",
    title: "Enrico Berlinguer e la via democratica al socialismo",
    category: "Berlinguer",
    period: "1972–1984",
    excerpt:
      "Democrazia, pluralismo, eurocomunismo, autonomia dall’URSS e trasformazione del PCI durante la segreteria Berlinguer.",
    author: "La Via Italiana",
    readingTime: "55–70 min",
    status: "Disponibile",
    featured: true,
  },
  {
    slug: "compromesso-storico",
    title: "Il compromesso storico",
    category: "Berlinguer",
    period: "1973–1979",
    excerpt:
      "Dal Cile alla solidarietà nazionale: origini, alleanze, rapporto con la DC, Moro e crisi della strategia.",
    author: "La Via Italiana",
    readingTime: "50–65 min",
    status: "Disponibile",
  },
  {
    slug: "questione-morale-berlinguer",
    title: "La questione morale secondo Enrico Berlinguer",
    category: "Berlinguer",
    period: "1981",
    excerpt:
      "Partiti, istituzioni, potere e interesse generale: il significato politico della questione morale nell’intervista del 28 luglio 1981.",
    author: "La Via Italiana",
    readingTime: "45–55 min",
    status: "Disponibile",
  },
];
