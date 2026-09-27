import type { Metadata } from "next";
import MonographPage, {
  type MonographSection,
  type MonographSource,
  type TimelineItem,
} from "@/components/dispense/MonographPage";

export const metadata: Metadata = {
  title: "Il compromesso storico",
  description:
    "Origini, contenuti e crisi della strategia di Enrico Berlinguer tra il 1973 e il 1979: Cile, PCI, DC, Moro e solidarietà nazionale.",
};

const sections: MonographSection[] = [
  {
    id: "introduzione",
    num: "01",
    title: "Una formula diventata più famosa della sua definizione",
    paragraphs: [
      "Il compromesso storico è una delle espressioni più note della politica italiana degli anni Settanta. Spesso viene però utilizzata come sinonimo generico di accordo tra PCI e Democrazia Cristiana.",
      "La proposta originaria di Berlinguer è più ampia. Nasce dalla riflessione sul rapporto tra trasformazione sociale, stabilità democratica e necessità di costruire maggioranze politiche e sociali molto vaste.",
      "Tra il 1973 e il 1979 la strategia cambia forma e incontra condizioni politiche diverse. Per comprenderla bisogna distinguere l'elaborazione teorica, la solidarietà nazionale e i rapporti concreti con la DC.",
    ],
  },
  {
    id: "cile",
    num: "02",
    title: "Il trauma cileno del 1973",
    paragraphs: [
      "L'11 settembre 1973 un colpo di Stato militare rovescia in Cile il governo di Salvador Allende.",
      "Berlinguer interpreta l'evento come una conferma del rischio che una trasformazione radicale sostenuta da una maggioranza politica relativamente limitata possa essere travolta da una reazione autoritaria.",
      "L'Italia presenta una storia e istituzioni differenti, ma il caso cileno diventa il punto di partenza per una riflessione sulla necessità di ampliare il consenso attorno a un programma di rinnovamento.",
    ],
  },
  {
    id: "articoli",
    num: "03",
    title: "Le tre Riflessioni sull'Italia dopo i fatti del Cile",
    paragraphs: [
      "Tra il 28 settembre e il 12 ottobre 1973 Berlinguer pubblica su Rinascita tre articoli dedicati alle conseguenze politiche del golpe cileno.",
      "Il terzo testo, Alleanze sociali e schieramenti politici, formula in modo esplicito la proposta di un nuovo grande compromesso storico tra le forze che rappresentano la maggioranza del popolo italiano.",
      "La sequenza degli articoli mostra che la proposta non nasce come semplice negoziato parlamentare, ma come conclusione di un ragionamento sulla democrazia, le alleanze sociali e i rischi autoritari.",
    ],
  },
  {
    id: "alleanze",
    num: "04",
    title: "Alleanze sociali prima delle formule di governo",
    paragraphs: [
      "Berlinguer parte dall'idea che la classe operaia non possa trasformare la società da sola. Occorre costruire relazioni con ceti medi, lavoratori autonomi, mondo rurale e componenti popolari cattoliche.",
      "Il compromesso storico è quindi anche una strategia sociale. L'accordo tra partiti dovrebbe poggiare su una convergenza più profonda tra gruppi e culture presenti nella società italiana.",
      "Questa impostazione richiama la tradizione togliattiana del partito nuovo e, indirettamente, il problema gramsciano dell'egemonia.",
    ],
  },
  {
    id: "cattolici",
    num: "05",
    title: "Perché il mondo cattolico è centrale",
    paragraphs: [
      "La Democrazia Cristiana non viene considerata soltanto un apparato di potere. Berlinguer distingue il partito, le sue correnti e il più vasto mondo sociale e culturale cattolico.",
      "L'obiettivo è costruire un rapporto con le componenti democratiche e popolari di quella tradizione senza chiedere loro di rinunciare alla propria identità.",
      "Il compromesso storico presuppone quindi che il pluralismo delle culture politiche italiane sia una realtà durevole con cui una strategia di sinistra deve confrontarsi.",
    ],
  },
  {
    id: "non-coalizione",
    num: "06",
    title: "Non è semplicemente un governo PCI-DC",
    paragraphs: [
      "Nella formulazione del 1973 il compromesso storico non coincide con un programma dettagliato di coalizione governativa tra PCI e DC.",
      "È una strategia di convergenza tra le grandi forze popolari e democratiche per difendere le istituzioni e realizzare un programma di rinnovamento.",
      "Solo negli anni successivi, con l'avanzata elettorale comunista e la crisi dei governi tradizionali, la questione assume forme parlamentari sempre più concrete.",
    ],
    note: {
      title: "Distinzione utile",
      text: "Compromesso storico, non sfiducia e solidarietà nazionale sono concetti collegati ma non identici: il primo è una strategia, gli altri descrivono specifiche formule politico-parlamentari.",
    },
  },
  {
    id: "1975",
    num: "07",
    title: "1975–1976: l'avanzata elettorale del PCI",
    paragraphs: [
      "Le elezioni amministrative del 1975 e le politiche del 1976 rafforzano notevolmente il PCI. Alla Camera il partito raggiunge il 34,4 per cento.",
      "Il risultato rende difficile governare secondo gli schemi precedenti senza tenere conto della forza comunista.",
      "Allo stesso tempo nessuno dei principali schieramenti dispone di una soluzione semplice: l'ingresso diretto del PCI al governo incontra forti resistenze interne e internazionali.",
    ],
  },
  {
    id: "non-sfiducia",
    num: "08",
    title: "1976: il governo della non sfiducia",
    paragraphs: [
      "Nell'agosto 1976 nasce un governo monocolore democristiano guidato da Giulio Andreotti.",
      "Il PCI non entra nell'esecutivo ma si astiene, consentendo al governo di ottenere la fiducia parlamentare. La formula viene ricordata come governo della non sfiducia.",
      "È un passaggio importante perché per la prima volta dopo molti anni i comunisti incidono direttamente sulla nascita di un governo nazionale senza farne parte.",
    ],
  },
  {
    id: "moro",
    num: "09",
    title: "Aldo Moro come interlocutore",
    paragraphs: [
      "All'interno della DC Aldo Moro è tra i dirigenti più attenti alla necessità di affrontare politicamente la crescita del PCI.",
      "La sua strategia non coincide automaticamente con quella di Berlinguer. Moro ragiona sul progressivo allargamento della base democratica e sulla gestione dell'evoluzione del sistema politico, mantenendo la centralità democristiana.",
      "Il dialogo tra i due percorsi rende possibile la stagione della solidarietà nazionale, ma le differenze restano significative.",
    ],
  },
  {
    id: "terrorismo",
    num: "10",
    title: "Crisi economica, terrorismo e emergenza democratica",
    paragraphs: [
      "La seconda metà degli anni Settanta è segnata da inflazione, difficoltà economiche, conflitti sociali e terrorismo.",
      "Queste condizioni rafforzano l'argomento a favore di una collaborazione tra le maggiori forze costituzionali, ma rendono anche più difficile realizzare un programma condiviso di riforme.",
      "La solidarietà nazionale nasce quindi in una fase di emergenza, circostanza che influenzerà sia le priorità sia i limiti dell'esperienza.",
    ],
  },
  {
    id: "1978",
    num: "11",
    title: "Marzo 1978: la solidarietà nazionale",
    paragraphs: [
      "Nel marzo 1978 nasce un nuovo governo Andreotti sostenuto da una maggioranza parlamentare che comprende anche il PCI.",
      "Il giorno della presentazione del governo coincide con il rapimento di Aldo Moro da parte delle Brigate Rosse.",
      "La crisi terroristica accentua il carattere emergenziale dell'unità tra i partiti dell'arco costituzionale e sposta ulteriormente l'attenzione dalla trasformazione sociale alla difesa delle istituzioni.",
    ],
  },
  {
    id: "moro-rapimento",
    num: "12",
    title: "Il rapimento e l'assassinio di Moro",
    paragraphs: [
      "Durante i cinquantacinque giorni del sequestro il PCI sostiene la linea della fermezza, rifiutando una trattativa politica con le Brigate Rosse.",
      "Il 9 maggio 1978 Moro viene ucciso. La sua morte elimina uno dei principali interlocutori della strategia di avvicinamento tra DC e PCI.",
      "L'assassinio non determina da solo la fine del compromesso storico, ma incide profondamente su una politica già difficile da tradurre in un equilibrio stabile.",
    ],
  },
  {
    id: "limiti",
    num: "13",
    title: "I limiti della solidarietà nazionale",
    paragraphs: [
      "Il PCI sostiene decisioni economiche e politiche spesso impopolari presso una parte del proprio elettorato, senza ottenere un ingresso diretto nel governo.",
      "Nella DC restano forti resistenze a una partecipazione comunista all'esecutivo, mentre nel PCI cresce l'insoddisfazione per i risultati ritenuti insufficienti.",
      "La collaborazione produce quindi un coinvolgimento nella responsabilità di maggioranza senza risolvere il problema dell'alternanza e dell'accesso comunista al governo.",
    ],
  },
  {
    id: "1979",
    num: "14",
    title: "1979: la fine dell'esperienza",
    paragraphs: [
      "All'inizio del 1979 il PCI esce dalla maggioranza. Le elezioni politiche dello stesso anno registrano una riduzione dei consensi comunisti rispetto al 1976.",
      "Berlinguer abbandona progressivamente la prospettiva del compromesso storico e negli anni successivi propone l'alternativa democratica.",
      "La collaborazione con la DC non diventa quindi una coalizione organica e stabile.",
    ],
  },
  {
    id: "critiche",
    num: "15",
    title: "Le critiche da sinistra e da destra",
    paragraphs: [
      "A sinistra il compromesso storico viene criticato da chi lo considera una rinuncia all'alternativa e un'eccessiva subordinazione alla DC.",
      "Sul fronte moderato e anticomunista viene invece letto come un possibile strumento di ingresso del PCI nel governo e quindi come rischio per gli equilibri occidentali dell'Italia.",
      "Le critiche opposte mostrano quanto la strategia toccasse alcuni dei principali nodi della Repubblica: legittimazione del PCI, ruolo della DC, Guerra fredda e possibilità di alternanza.",
    ],
  },
  {
    id: "interpretazioni",
    num: "16",
    title: "Tra stabilizzazione democratica e occasione mancata",
    paragraphs: [
      "La storiografia ha interpretato il compromesso storico in modi diversi. Alcuni studi ne sottolineano la funzione di stabilizzazione democratica in una fase di terrorismo e crisi istituzionale.",
      "Altri ne evidenziano i limiti: assenza di una vera alternanza, difficoltà programmatiche, immobilismo del sistema politico e perdita di autonomia del PCI.",
      "Una lettura rigorosa deve distinguere le intenzioni di Berlinguer dagli effetti concreti della solidarietà nazionale e dal modo in cui la strategia fu recepita dagli altri attori politici.",
    ],
  },
];

const timeline: TimelineItem[] = [
  { year: "11 settembre 1973", text: "Colpo di Stato in Cile contro il governo di Salvador Allende." },
  { year: "28 settembre–12 ottobre 1973", text: "Berlinguer pubblica su Rinascita le tre Riflessioni sull'Italia dopo i fatti del Cile." },
  { year: "1975", text: "Forte avanzata del PCI nelle elezioni amministrative." },
  { year: "20 giugno 1976", text: "Il PCI raggiunge il 34,4% alla Camera." },
  { year: "agosto 1976", text: "Nasce il governo Andreotti della non sfiducia, con astensione del PCI." },
  { year: "16 marzo 1978", text: "Nasce il governo di solidarietà nazionale; nello stesso giorno viene rapito Aldo Moro." },
  { year: "9 maggio 1978", text: "Le Brigate Rosse uccidono Aldo Moro." },
  { year: "gennaio 1979", text: "Il PCI decide di uscire dalla maggioranza." },
  { year: "giugno 1979", text: "Le elezioni segnano una flessione del PCI." },
];

const sources: MonographSource[] = [
  {
    title: "Treccani — Compromesso storico",
    description: "Definizione storica della strategia, delle sue origini cilene e delle applicazioni nella solidarietà nazionale.",
    href: "https://www.treccani.it/enciclopedia/compromesso-storico_%28Dizionario-di-Storia%29/",
  },
  {
    title: "Fondazione Gramsci — Il compromesso storico",
    description: "Percorso documentario dedicato ai tre articoli di Rinascita del 1973 e all'elaborazione di Berlinguer.",
    href: "https://enricoberlinguer.fondazionegramsci.org/percorsi-tematici/IT-GRAMSCI-CMS001-000047",
  },
  {
    title: "Treccani — Partito Comunista Italiano, Dizionario di Storia",
    description: "Quadro della crescita elettorale del PCI, dei governi Andreotti, della solidarietà nazionale e della conclusione del progetto.",
    href: "https://www.treccani.it/enciclopedia/partito-comunista-italiano_%28Dizionario-di-Storia%29/",
  },
];

export default function Page() {
  return (
    <MonographPage
      eyebrow="Berlinguer · Dispensa 07"
      title="Il compromesso"
      accentTitle="storico"
      subtitle="Dal Cile alla solidarietà nazionale: strategia, alleanze e crisi di un progetto"
      description="Una ricostruzione del compromesso storico dal 1973 al 1979: gli articoli di Rinascita, il rapporto con il mondo cattolico, l'avanzata del PCI, il dialogo con Moro, i governi Andreotti e la fine della solidarietà nazionale."
      period="1973–1979"
      readingTime="50–65 minuti"
      sections={sections}
      timeline={timeline}
      sources={sources}
    />
  );
}
