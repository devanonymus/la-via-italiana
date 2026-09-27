import type { Metadata } from "next";
import MonographPage, {
  type MonographSection,
  type MonographSource,
  type TimelineItem,
} from "@/components/dispense/MonographPage";

export const metadata: Metadata = {
  title: "La questione morale secondo Enrico Berlinguer",
  description:
    "L'intervista del 28 luglio 1981, la critica ai partiti come macchine di potere, l'occupazione dello Stato e il rapporto tra etica pubblica e crisi politica.",
};

const sections: MonographSection[] = [
  {
    id: "introduzione",
    num: "01",
    title: "La questione morale è una questione politica",
    paragraphs: [
      "L'espressione questione morale è spesso ridotta a un appello all'onestà individuale. Nel discorso di Enrico Berlinguer il significato è più ampio: riguarda il funzionamento dei partiti, il rapporto tra istituzioni e interessi organizzati, la selezione della classe dirigente e la capacità della politica di perseguire finalità generali.",
      "Il punto non è quindi soltanto individuare singoli episodi di corruzione. Berlinguer descrive una trasformazione strutturale dei partiti, che a suo giudizio tendono a occupare segmenti dello Stato e a utilizzare risorse pubbliche per consolidare reti di potere.",
      "La dimensione morale, in questa impostazione, coincide con un problema di qualità della democrazia e di legittimità delle istituzioni.",
    ],
  },
  {
    id: "contesto",
    num: "02",
    title: "Il contesto del 1981",
    paragraphs: [
      "Nel 1981 l'Italia attraversa una fase di forte instabilità politica e sociale. La stagione della solidarietà nazionale è terminata, il PCI è tornato all'opposizione e Berlinguer ha proposto l'alternativa democratica.",
      "Nello stesso periodo emergono scandali e controversie che alimentano il dibattito sul rapporto tra partiti, amministrazione pubblica, enti economici e sistemi di nomina.",
      "La questione morale si inserisce quindi in una più ampia riflessione sulla crisi della forma-partito e sulla capacità delle istituzioni repubblicane di conservare fiducia e autorevolezza.",
    ],
  },
  {
    id: "intervista",
    num: "03",
    title: "28 luglio 1981: l'intervista a Eugenio Scalfari",
    paragraphs: [
      "Il testo più noto della questione morale è l'intervista concessa da Berlinguer a Eugenio Scalfari e pubblicata da la Repubblica il 28 luglio 1981 con il titolo Dove va il PCI?.",
      "Berlinguer sostiene che i partiti abbiano progressivamente perso la capacità di elaborare grandi progetti politici e di organizzare la partecipazione, trasformandosi in strutture orientate alla gestione del potere e della clientela.",
      "Il giudizio è parte di una polemica politica molto netta e va quindi letto come posizione del segretario del PCI, non come descrizione neutrale di tutto il sistema dei partiti.",
    ],
    note: {
      title: "Documento centrale",
      text: "Per comprendere la questione morale è essenziale leggere l'intervista del 28 luglio 1981 nel suo insieme, non soltanto le frasi diventate successivamente slogan.",
    },
  },
  {
    id: "oltre-corruzione",
    num: "04",
    title: "Non soltanto ladri e tangenti",
    paragraphs: [
      "Berlinguer distingue esplicitamente la questione morale dalla sola repressione penale della corruzione. Individuare e punire reati è necessario, ma non esaurisce il problema.",
      "La sua critica riguarda la struttura dei rapporti tra politica e amministrazione: chi decide le nomine, come vengono distribuite risorse, in che modo correnti e gruppi organizzati controllano enti e apparati.",
      "La questione morale viene così definita come problema istituzionale prima ancora che giudiziario.",
    ],
  },
  {
    id: "occupazione",
    num: "05",
    title: "L'occupazione dello Stato",
    paragraphs: [
      "Uno dei concetti più forti utilizzati da Berlinguer è quello di occupazione dello Stato da parte dei partiti governativi e delle loro correnti.",
      "Con questa formula critica la tendenza a trattare amministrazioni, enti pubblici e organismi economici come spazi da ripartire secondo equilibri partitici anziché come istituzioni dotate di una propria autonomia funzionale.",
      "La critica non riguarda l'esistenza dei partiti nelle istituzioni, che è fisiologica in una democrazia rappresentativa, ma la subordinazione sistematica delle istituzioni agli interessi delle organizzazioni politiche.",
    ],
  },
  {
    id: "macchine",
    num: "06",
    title: "I partiti come macchine di potere e clientela",
    paragraphs: [
      "Nell'intervista Berlinguer descrive i partiti come organizzazioni sempre più concentrate sulla gestione del potere. La formula ha avuto una lunga fortuna nel dibattito italiano.",
      "Il bersaglio è la trasformazione del partito da strumento di partecipazione e formazione politica a rete di correnti, gruppi dirigenti e interessi.",
      "Questa diagnosi contiene anche un implicito confronto con il modello dei partiti di massa del dopoguerra, percepiti da Berlinguer come maggiormente legati a identità, programmi e mobilitazione collettiva.",
    ],
  },
  {
    id: "amministrazione",
    num: "07",
    title: "Partiti, amministrazione ed enti pubblici",
    paragraphs: [
      "La questione morale riguarda in modo particolare il confine tra indirizzo politico e amministrazione.",
      "In una democrazia i governi hanno il diritto di scegliere indirizzi e assumere responsabilità politiche. Il problema nasce quando le strutture amministrative vengono trattate come strumenti di appartenenza o di scambio.",
      "Berlinguer collega questo fenomeno alla perdita di efficienza dello Stato e alla crescente distanza tra cittadini e istituzioni.",
    ],
  },
  {
    id: "economia",
    num: "08",
    title: "Politica, spesa pubblica e centri economici",
    paragraphs: [
      "La critica investe anche il rapporto tra partiti e centri di spesa. Enti pubblici, imprese partecipate, banche e organismi economici rappresentano luoghi nei quali decisioni politiche e interessi materiali possono sovrapporsi.",
      "Per Berlinguer il problema non è l'intervento pubblico nell'economia in quanto tale, ma la sua trasformazione in strumento di controllo partitico.",
      "La questione morale assume così una dimensione economica: uso delle risorse, qualità della spesa e responsabilità di chi amministra.",
    ],
  },
  {
    id: "diversita",
    num: "09",
    title: "La rivendicazione della diversità comunista",
    paragraphs: [
      "Nell'intervista Berlinguer sostiene che il PCI abbia conservato una diversità rispetto ai partiti di governo, rifiutando di partecipare alla distribuzione di posizioni e risorse durante la solidarietà nazionale.",
      "Questa affermazione è una rivendicazione politica del leader comunista e non può essere assunta automaticamente come certificazione storiografica di superiorità morale.",
      "Una ricostruzione equilibrata deve distinguere tra l'autorappresentazione del PCI e l'analisi concreta delle sue pratiche amministrative, organizzative e finanziarie.",
    ],
    note: {
      title: "Metodo",
      text: "La diversità comunista è una categoria della cultura politica del PCI. Va studiata come rivendicazione storica e verificata sui singoli ambiti, non trasformata in un giudizio assoluto.",
    },
  },
  {
    id: "democrazia",
    num: "10",
    title: "Questione morale e governabilità democratica",
    paragraphs: [
      "Berlinguer collega direttamente la questione morale alla governabilità. Se i cittadini percepiscono le istituzioni come strumenti di interessi particolari, diminuisce la fiducia nella capacità dello Stato di rappresentare l'interesse generale.",
      "Il problema riguarda quindi anche la stabilità democratica. La perdita di legittimità può alimentare astensione, antipolitica e sfiducia nelle procedure rappresentative.",
      "Da questo punto di vista la questione morale è presentata come una condizione per il funzionamento della democrazia, non come tema separato dalla politica.",
    ],
  },
  {
    id: "alternativa",
    num: "11",
    title: "La questione morale dentro l'alternativa democratica",
    paragraphs: [
      "La critica ai partiti di governo si lega alla strategia dell'alternativa democratica elaborata da Berlinguer dopo la fine del compromesso storico.",
      "Il PCI vuole presentarsi non soltanto come opposizione programmatica, ma come forza capace di proporre un diverso rapporto tra politica, amministrazione e società.",
      "La questione morale assume così anche una funzione competitiva: serve a definire l'identità del partito e a sostenere la richiesta di cambiamento degli equilibri di governo.",
    ],
  },
  {
    id: "limiti",
    num: "12",
    title: "Le obiezioni alla diagnosi berlingueriana",
    paragraphs: [
      "La tesi di Berlinguer è stata discussa criticamente già all'epoca. Una prima obiezione riguarda il rischio di rappresentare la degenerazione come problema quasi esclusivo dei partiti di governo.",
      "Una seconda riguarda l'idealizzazione dei partiti di massa del dopoguerra, che avevano anch'essi strutture di potere, discipline interne e rapporti complessi con enti e organizzazioni sociali.",
      "Infine, la forte contrapposizione tra buona politica e macchine di potere può oscurare il fatto che mediazione degli interessi, organizzazione e competizione per il governo sono componenti normali della democrazia.",
    ],
  },
  {
    id: "antipolitica",
    num: "13",
    title: "Questione morale e antipolitica non sono la stessa cosa",
    paragraphs: [
      "Berlinguer non propone di eliminare i partiti. Al contrario, rimpiange la loro funzione di organizzazione politica e formazione collettiva.",
      "La sua critica mira quindi alla trasformazione dei partiti, non alla sostituzione della rappresentanza politica con una presunta amministrazione neutrale.",
      "Questo punto è importante perché molte riletture successive hanno utilizzato la questione morale in chiave genericamente antipartitica, mentre il discorso originario rimane interno a una concezione forte della politica organizzata.",
    ],
  },
  {
    id: "eredita",
    num: "14",
    title: "Una formula sopravvissuta al suo contesto",
    paragraphs: [
      "Dopo la morte di Berlinguer l'espressione questione morale continua a essere utilizzata nel dibattito pubblico, soprattutto durante la crisi dei partiti dei primi anni Novanta.",
      "La fortuna della formula ha però favorito letture molto differenti: denuncia della corruzione, critica della partitocrazia, richiesta di trasparenza o richiamo etico alla responsabilità pubblica.",
      "Per ricostruire il pensiero di Berlinguer occorre tornare al testo del 1981 e distinguere questi usi successivi dal significato originario.",
    ],
  },
];

const timeline: TimelineItem[] = [
  { year: "1979", text: "Termina la solidarietà nazionale e il PCI torna all'opposizione." },
  { year: "1980", text: "Berlinguer formula la proposta dell'alternativa democratica." },
  { year: "18 giugno 1981", text: "Il tema della questione morale compare nel dibattito comunista sulla crisi politica e sul clientelismo." },
  { year: "28 luglio 1981", text: "la Repubblica pubblica l'intervista Dove va il PCI? di Eugenio Scalfari a Berlinguer." },
  { year: "1981–1984", text: "La questione morale resta uno dei temi centrali dell'ultima fase della segreteria Berlinguer." },
];

const sources: MonographSource[] = [
  {
    title: "la Repubblica — Dove va il PCI? (28 luglio 1981)",
    description: "Ripubblicazione dell'intervista di Eugenio Scalfari a Enrico Berlinguer, fonte primaria per la formulazione della questione morale.",
    href: "https://www.repubblica.it/dossier/cultura/cinquanta-anni-di-repubblica/2025/07/28/news/enrico_berlinguer_eugenio_scalfari_1981_intervista_50_anni_repubblica-424755946/",
  },
  {
    title: "Fondazione Gramsci — Archivio Enrico Berlinguer, 1981",
    description: "Schede archivistiche dell'intervista e degli altri interventi del 1981 dedicati a questione morale e crisi politica.",
    href: "https://enricoberlinguer.fondazionegramsci.org/scheda-storico/IT-GRAMSCI-HIST0095-0000264",
  },
  {
    title: "Treccani — La corruzione tra politica e mercato",
    description: "Inquadramento storico della questione morale nel dibattito sulla corruzione e sulla trasformazione dei partiti italiani.",
    href: "https://www.treccani.it/enciclopedia/la-corruzione-tra-politica-e-mercato_%28L%27Italia-e-le-sue-Regioni%29/",
  },
];

export default function Page() {
  return (
    <MonographPage
      eyebrow="Berlinguer · Dispensa 05"
      title="La questione morale"
      accentTitle="secondo Enrico Berlinguer"
      subtitle="Partiti, istituzioni, potere e interesse generale nell'Italia del 1981"
      description="Un'analisi dell'intervista a Eugenio Scalfari e del significato politico della questione morale: non solo corruzione individuale, ma trasformazione dei partiti, occupazione dello Stato e crisi della rappresentanza."
      period="1981"
      readingTime="45–55 minuti"
      sections={sections}
      timeline={timeline}
      sources={sources}
    />
  );
}
