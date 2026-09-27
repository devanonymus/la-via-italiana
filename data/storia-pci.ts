export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  category: string;
  href?: string;
};

export const timeline: TimelineEvent[] = [
  {
    year: "1921",
    title: "Nasce il Partito Comunista d’Italia",
    category: "Origini",
    description:
      "Il 21 gennaio 1921, dopo la scissione dal Partito Socialista Italiano al Congresso di Livorno, nasce il Partito Comunista d’Italia – Sezione italiana dell’Internazionale Comunista.",
    href: "/dispense/livorno-1921-nascita-pcdi",
  },
  {
    year: "1924–1926",
    title: "Gramsci e il nuovo gruppo dirigente",
    category: "Gramsci",
    description:
      "Antonio Gramsci assume un ruolo crescente nella direzione del partito. Nel Congresso di Lione del 1926 si consolida la linea politica legata al suo gruppo dirigente.",
  },
  {
    year: "1926",
    title: "Clandestinità e repressione fascista",
    category: "Antifascismo",
    description:
      "Con il consolidamento della dittatura fascista, il partito viene costretto alla clandestinità. Numerosi dirigenti e militanti vengono arrestati, perseguitati o costretti all’esilio.",
  },
  {
    year: "1937",
    title: "Muore Antonio Gramsci",
    category: "Gramsci",
    description:
      "Dopo anni di carcere e gravi condizioni di salute, Antonio Gramsci muore a Roma. I suoi Quaderni del carcere diventeranno centrali nell’elaborazione politica e culturale del comunismo italiano.",
  },
  {
    year: "1943",
    title: "Dal PCd’I al PCI",
    category: "Resistenza",
    description:
      "Nel 1943 il Partito Comunista d’Italia assume il nome di Partito Comunista Italiano. Nello stesso periodo cresce il suo ruolo nella lotta antifascista e nella Resistenza.",
  },
  {
    year: "1944",
    title: "La svolta di Salerno",
    category: "Togliatti",
    description:
      "Palmiro Togliatti propone una strategia di unità nazionale contro il fascismo, rinviando la questione istituzionale e favorendo la partecipazione comunista alla ricostruzione democratica.",
  },
  {
    year: "1946–1948",
    title: "Repubblica, Costituente e Costituzione",
    category: "Repubblica",
    description:
      "Il PCI partecipa all’Assemblea Costituente e alla costruzione dell’ordinamento repubblicano. Dal 1947 resta fuori dai governi nazionali, pur mantenendo un forte radicamento sociale e amministrativo.",
  },
  {
    year: "1956",
    title: "Crisi del comunismo internazionale",
    category: "URSS",
    description:
      "Il XX Congresso del PCUS e la repressione sovietica della rivolta ungherese aprono profonde discussioni all’interno del movimento comunista internazionale e dello stesso PCI.",
  },
  {
    year: "1964",
    title: "Muore Palmiro Togliatti",
    category: "Togliatti",
    description:
      "La morte di Togliatti chiude una fase decisiva della storia del partito. Luigi Longo gli succede alla guida del PCI.",
  },
  {
    year: "1968",
    title: "Il PCI critica l’intervento in Cecoslovacchia",
    category: "Politica internazionale",
    description:
      "L’intervento militare del Patto di Varsavia in Cecoslovacchia viene criticato dal PCI, segnando un passaggio importante nel progressivo distacco politico dall’Unione Sovietica.",
  },
  {
    year: "1972",
    title: "Enrico Berlinguer diventa segretario",
    category: "Berlinguer",
    description:
      "Nel marzo 1972 Enrico Berlinguer viene eletto segretario generale del PCI. La sua leadership segnerà profondamente la storia politica del partito fino al 1984.",
    href: "/dispense/berlinguer-via-democratica-socialismo",
  },
  {
    year: "1973",
    title: "Il compromesso storico",
    category: "Berlinguer",
    description:
      "Berlinguer propone una strategia di collaborazione tra le grandi forze popolari italiane, in particolare comunisti e cattolici democratici, per rafforzare la democrazia e affrontare la crisi del Paese.",
    href: "/dispense/compromesso-storico",
  },
  {
    year: "1976",
    title: "Il PCI raggiunge il 34,4%",
    category: "Elezioni",
    description:
      "Alle elezioni politiche del 1976 il PCI raggiunge il 34,4% dei voti alla Camera, uno dei risultati più alti della sua storia.",
  },
  {
    year: "1976–1979",
    title: "La solidarietà nazionale",
    category: "Repubblica",
    description:
      "Il PCI sostiene dall’esterno e successivamente partecipa alla maggioranza parlamentare dei governi Andreotti nel quadro della politica di solidarietà nazionale.",
  },
  {
    year: "1979",
    title: "Il ritorno all’opposizione",
    category: "Berlinguer",
    description:
      "Terminata l’esperienza della solidarietà nazionale, il PCI torna all’opposizione e Berlinguer avvia una nuova fase strategica.",
  },
  {
    year: "1981",
    title: "La questione morale",
    category: "Berlinguer",
    description:
      "Berlinguer pone con forza il tema della degenerazione dei partiti, dell’occupazione delle istituzioni e del rapporto tra politica e interesse generale.",
    href: "/dispense/questione-morale-berlinguer",
  },
  {
    year: "1981–1982",
    title: "La rottura politica con il modello sovietico",
    category: "URSS",
    description:
      "Berlinguer dichiara esaurita la spinta propulsiva derivante dalla Rivoluzione d’Ottobre e ribadisce il carattere democratico e pluralista della via italiana al socialismo.",
    href: "/dispense/pci-unione-sovietica",
  },
  {
    year: "1984",
    title: "Muore Enrico Berlinguer",
    category: "Berlinguer",
    description:
      "Enrico Berlinguer muore l’11 giugno 1984, pochi giorni dopo essere stato colpito da un malore durante un comizio a Padova. Alessandro Natta gli succede alla guida del partito.",
  },
  {
    year: "1988",
    title: "Achille Occhetto segretario",
    category: "Ultima fase",
    description:
      "Achille Occhetto assume la segreteria del PCI in una fase segnata dalla trasformazione della sinistra europea e dalla crisi dei regimi comunisti dell’Europa orientale.",
  },
  {
    year: "1989",
    title: "La svolta della Bolognina",
    category: "Ultima fase",
    description:
      "Occhetto avvia il processo politico che porterà al superamento del PCI e alla costruzione di una nuova formazione della sinistra italiana.",
  },
  {
    year: "1991",
    title: "Lo scioglimento del PCI",
    category: "Fine del PCI",
    description:
      "Nel 1991 il Partito Comunista Italiano si scioglie. La maggioranza dà vita al Partito Democratico della Sinistra, mentre una parte degli oppositori alla svolta contribuisce alla nascita di Rifondazione Comunista.",
  },
];
