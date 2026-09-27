export type PciOggiItem = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  category: string;
  description: string;
  source: string;
  externalUrl: string;
  kind: "Documento ufficiale" | "Iniziativa" | "Dai territori";
  featured?: boolean;
};

export const pciOggiItems: PciOggiItem[] = [
  {
    slug: "festa-comunista-livorno-2026",
    title: "Festa Comunista PCI Livorno",
    date: "2026-09-11",
    displayDate: "11 settembre 2026",
    category: "Dai territori",
    description:
      "Iniziativa territoriale della federazione di Livorno dedicata al confronto politico e all'attualità del marxismo.",
    source: "Partito Comunista Italiano",
    externalUrl: "https://www.ilpartitocomunistaitaliano.it/",
    kind: "Dai territori",
    featured: true,
  },
  {
    slug: "economia-guerra-classi-popolari",
    title: "Il bilancio del governo, economia di guerra e classi popolari",
    date: "2026-09-04",
    displayDate: "4 settembre 2026",
    category: "Politica e società",
    description:
      "Contenuto pubblicato dal PCI nell'area territoriale di Bari sui temi di politica economica e sociale.",
    source: "Partito Comunista Italiano",
    externalUrl: "https://www.ilpartitocomunistaitaliano.it/",
    kind: "Dai territori",
  },
  {
    slug: "presidio-autonomia-differenziata",
    title: "Il PCI al presidio contro l'autonomia differenziata",
    date: "2026-07-22",
    displayDate: "22 luglio 2026",
    category: "Politica e società",
    description:
      "Il PCI ha comunicato la propria partecipazione a un presidio a Roma contro il progetto di autonomia differenziata.",
    source: "Partito Comunista Italiano",
    externalUrl:
      "https://www.ilpartitocomunistaitaliano.it/2026/07/22/il-pci-al-presidio-a-roma-contro-il-progetto-di-autonomia-differenziata/",
    kind: "Iniziativa",
    featured: true,
  },
  {
    slug: "contro-riarmo-guerra",
    title: "Uniti contro il riarmo e la guerra",
    date: "2026-07-14",
    displayDate: "14 luglio 2026",
    category: "Pace e politica internazionale",
    description:
      "Documento del Comitato Centrale del PCI dedicato a pace, riarmo, Costituzione e proposta di iniziativa politica.",
    source: "Partito Comunista Italiano",
    externalUrl:
      "https://www.ilpartitocomunistaitaliano.it/2026/07/14/uniti-contro-il-riarmo-e-la-guerra-per-la-pace-la-costituzione-repubblicana-lalternativa/",
    kind: "Documento ufficiale",
    featured: true,
  },
  {
    slug: "assemblea-diritti-sociali-salari",
    title: "Assemblea nazionale su pace, diritti sociali e salari",
    date: "2026-06-18",
    displayDate: "18 giugno 2026",
    category: "Lavoro e diritti sociali",
    description:
      "Partecipazione del PCI a un'assemblea nazionale dedicata a pace, salari, casa, sanità e istruzione.",
    source: "Partito Comunista Italiano",
    externalUrl:
      "https://www.ilpartitocomunistaitaliano.it/2026/06/18/il-pci-allassemblea-nazionale-per-un-campo-politico-indipendente-per-la-pace-per-i-diritti-sociali-per-aumentare-i-salari-per-casa-sanita-e-istruzione/",
    kind: "Iniziativa",
  },
  {
    slug: "festa-rossa-lavoro-2026",
    title: "Festa Rossa 2026 e situazione del lavoro",
    date: "2026-06-18",
    displayDate: "18 giugno 2026",
    category: "Lavoro",
    description:
      "Iniziativa dedicata a precarietà, salari, occupazione, sicurezza sul lavoro e deindustrializzazione.",
    source: "Partito Comunista Italiano",
    externalUrl:
      "https://www.ilpartitocomunistaitaliano.it/2026/06/18/alla-festa-rossa-2026-si-e-ricordato-il-comunista-paolo-tomassoni-e-discusso-della-grave-attuale-situazione-del-lavoro/",
    kind: "Dai territori",
  },
];

export const pciOfficialResources = [
  {
    title: "Sito ufficiale PCI",
    description:
      "Notizie, documenti, attività, organizzazione e informazioni ufficiali del Partito Comunista Italiano.",
    href: "https://www.ilpartitocomunistaitaliano.it/",
  },
  {
    title: "Segreteria nazionale",
    description:
      "Struttura dirigente nazionale e riferimenti organizzativi del partito.",
    href: "https://www.ilpartitocomunistaitaliano.it/",
  },
  {
    title: "Statuto e tesi",
    description:
      "Documenti organizzativi e politici pubblicati dal PCI.",
    href: "https://www.ilpartitocomunistaitaliano.it/",
  },
  {
    title: "Rivista REC",
    description:
      "Rivista di approfondimento e dibattito del Partito Comunista Italiano.",
    href: "https://www.ilpartitocomunistaitaliano.it/",
  },
];
