export type BerlinguerTheme = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  status: "Disponibile" | "In preparazione";
};

export const berlinguerThemes: BerlinguerTheme[] = [
  {
    title: "La via democratica al socialismo",
    subtitle: "Democrazia e pluralismo",
    description:
      "Il rapporto tra socialismo, democrazia parlamentare, pluralismo politico e trasformazione della società italiana.",
    href: "/dispense/berlinguer-via-democratica-socialismo",
    status: "In preparazione",
  },
  {
    title: "Il compromesso storico",
    subtitle: "Strategia politica",
    description:
      "La proposta di collaborazione tra comunisti, socialisti e cattolici democratici elaborata negli anni Settanta.",
    href: "/dispense/compromesso-storico",
    status: "In preparazione",
  },
  {
    title: "La questione morale",
    subtitle: "Politica e istituzioni",
    description:
      "La critica alla degenerazione dei partiti, all'occupazione delle istituzioni e alla perdita del rapporto con l'interesse generale.",
    href: "/dispense/questione-morale-berlinguer",
    status: "In preparazione",
  },
  {
    title: "Il rapporto con l'URSS",
    subtitle: "Autonomia internazionale",
    description:
      "Dal progressivo distacco dall'Unione Sovietica all'eurocomunismo e alla ricerca di una via autonoma del PCI.",
    href: "/dispense/pci-unione-sovietica",
    status: "In preparazione",
  },
];

export const berlinguerTimeline = [
  {
    year: "1922",
    title: "Nasce a Sassari",
  },
  {
    year: "1943",
    title: "Aderisce al PCI",
  },
  {
    year: "1968",
    title: "Eletto deputato",
  },
  {
    year: "1969",
    title: "Diventa vicesegretario del PCI",
  },
  {
    year: "1972",
    title: "Eletto segretario generale",
  },
  {
    year: "1973",
    title: "Elabora la strategia del compromesso storico",
  },
  {
    year: "1976",
    title: "Il PCI raggiunge il 34,4% alla Camera",
  },
  {
    year: "1979",
    title: "Ritorno all'opposizione",
  },
  {
    year: "1981",
    title: "La questione morale diventa tema centrale",
  },
  {
    year: "1982",
    title: "Rottura politica più netta con il modello sovietico",
  },
  {
    year: "1984",
    title: "Muore a Padova",
  },
];
