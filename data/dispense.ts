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
    readingTime: "18 min",
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
    slug: "berlinguer-via-democratica-socialismo",
    title: "Enrico Berlinguer e la via democratica al socialismo",
    category: "Berlinguer",
    period: "1972–1984",
    excerpt:
      "Democrazia, pluralismo, autonomia dall’URSS e trasformazione del PCI durante la segreteria Berlinguer.",
    author: "La Via Italiana",
    readingTime: "25 min",
    status: "In preparazione",
    featured: true,
  },
  {
    slug: "questione-morale-berlinguer",
    title: "La questione morale secondo Enrico Berlinguer",
    category: "Berlinguer",
    period: "1981",
    excerpt:
      "Partiti, istituzioni, potere e interesse generale: origine e significato della questione morale.",
    author: "La Via Italiana",
    readingTime: "20 min",
    status: "In preparazione",
  },
  {
    slug: "pci-unione-sovietica",
    title: "Il PCI e l’Unione Sovietica",
    category: "Politica internazionale",
    period: "1921–1989",
    excerpt:
      "Dal legame con il Comintern alla progressiva autonomia politica del comunismo italiano.",
    author: "La Via Italiana",
    readingTime: "28 min",
    status: "In preparazione",
  },
  {
    slug: "compromesso-storico",
    title: "Il compromesso storico",
    category: "Berlinguer",
    period: "1973–1979",
    excerpt:
      "Origini, obiettivi, rapporto con la Democrazia Cristiana e conseguenze della strategia berlingueriana.",
    author: "La Via Italiana",
    readingTime: "24 min",
    status: "In preparazione",
  },

  {
    slug: "clandestinita-resistenza-togliatti",
    title: "Dalla clandestinità alla Repubblica: Togliatti, Resistenza e partito nuovo",
    category: "Storia del PCI",
    period: "1926–1948",
    excerpt:
      "Clandestinità, antifascismo, Comintern, Resistenza, svolta di Salerno e trasformazione del PCI in grande partito di massa.",
    author: "La Via Italiana",
    readingTime: "60–75 min",
    status: "Disponibile",
    featured: true,
  },
];
