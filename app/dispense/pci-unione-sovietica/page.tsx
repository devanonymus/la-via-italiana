import type { Metadata } from "next";
import MonographPage, {
  type MonographSection,
  type MonographSource,
  type TimelineItem,
} from "@/components/dispense/MonographPage";

export const metadata: Metadata = {
  title: "Il PCI e l'Unione Sovietica",
  description:
    "Dal Comintern alla via italiana, dal 1956 a Praga, dall'eurocomunismo allo strappo di Berlinguer: storia del rapporto tra PCI e URSS.",
};

const sections: MonographSection[] = [
  {
    id: "introduzione",
    num: "01",
    title: "Un rapporto decisivo ma non immobile",
    paragraphs: [
      "Il rapporto con l'Unione Sovietica accompagna l'intera storia del comunismo italiano. Il PCd'I nasce nel 1921 come sezione dell'Internazionale Comunista e per decenni considera la Rivoluzione d'Ottobre un riferimento fondamentale.",
      "Questo legame non rimane però identico nel tempo. Attraversa fasi di forte dipendenza politica, momenti di conflitto, progressivi tentativi di autonomia e infine una critica esplicita al modello sovietico.",
      "Ridurre la storia a una scelta binaria tra totale subordinazione e completa indipendenza impedisce di comprendere le trasformazioni reali del PCI.",
    ],
  },
  {
    id: "comintern",
    num: "02",
    title: "1921: nascere dentro il movimento comunista internazionale",
    paragraphs: [
      "Il Partito Comunista d'Italia nasce come sezione dell'Internazionale Comunista. L'appartenenza al Comintern non è un semplice rapporto diplomatico: implica orientamenti strategici comuni, vincoli organizzativi e una forte autorità politica del centro moscovita.",
      "Negli anni Venti le discussioni italiane su tattica, organizzazione e rapporti con il PSI sono profondamente condizionate dalle decisioni dell'Internazionale.",
      "Il conflitto tra Bordiga, Gramsci e altri dirigenti si sviluppa quindi anche dentro il più ampio processo di bolscevizzazione dei partiti comunisti europei.",
    ],
  },
  {
    id: "stalin",
    num: "03",
    title: "Gli anni di Stalin",
    paragraphs: [
      "Durante il fascismo il partito italiano opera in clandestinità e in esilio. Mosca diventa uno dei principali centri politici del comunismo internazionale e una parte della dirigenza italiana lavora stabilmente nelle strutture del Comintern.",
      "La dipendenza materiale e politica dall'URSS cresce mentre in Unione Sovietica si consolida il potere di Stalin e si sviluppano repressioni, purghe e processi politici.",
      "La storia dell'antifascismo comunista italiano e quella dello stalinismo non possono essere sovrapposte, ma neppure studiate come fenomeni completamente separati.",
    ],
  },
  {
    id: "guerra",
    num: "04",
    title: "Guerra mondiale, Resistenza e prestigio sovietico",
    paragraphs: [
      "La vittoria sovietica contro la Germania nazista rafforza enormemente il prestigio dell'URSS presso i comunisti europei.",
      "In Italia il PCI partecipa alla Resistenza e alla costruzione della Repubblica, mantenendo al tempo stesso un forte legame simbolico e politico con Mosca.",
      "Nel dopoguerra questa doppia identità — partito nazionale della Repubblica e componente del movimento comunista internazionale — diventa uno dei caratteri strutturali del PCI.",
    ],
  },
  {
    id: "guerra-fredda",
    num: "05",
    title: "La Guerra fredda e l'appartenenza di campo",
    paragraphs: [
      "Con l'inizio della Guerra fredda l'Italia entra stabilmente nel campo occidentale, mentre il PCI rimane politicamente legato all'Unione Sovietica.",
      "Il partito si oppone al Patto Atlantico e alla NATO e interpreta molti conflitti internazionali attraverso la contrapposizione tra blocchi.",
      "Questa collocazione contribuisce al suo isolamento governativo, pur senza impedirgli di rimanere una grande forza elettorale e sociale.",
    ],
  },
  {
    id: "1956",
    num: "06",
    title: "1956: destalinizzazione e crisi dell'unità comunista",
    paragraphs: [
      "Il XX Congresso del PCUS e la denuncia dei crimini di Stalin aprono una crisi profonda nel movimento comunista internazionale.",
      "Togliatti reagisce elaborando il tema del policentrismo: i partiti comunisti non dovrebbero essere organizzati come un sistema rigidamente dipendente da un unico centro.",
      "La destalinizzazione apre quindi uno spazio teorico per una maggiore autonomia nazionale, anche se il PCI continua a considerare l'URSS un riferimento fondamentale.",
    ],
  },
  {
    id: "ungheria",
    num: "07",
    title: "L'Ungheria del 1956 e la scelta di Togliatti",
    paragraphs: [
      "La rivolta ungherese e l'intervento militare sovietico rappresentano uno dei passaggi più controversi della storia del PCI.",
      "Togliatti sostiene l'intervento sovietico. La scelta provoca proteste, uscite dal partito e una grave frattura con settori della cultura italiana e con il PSI.",
      "Nello stesso anno, però, l'VIII Congresso del PCI rilancia la via italiana al socialismo e il tema delle vie nazionali. Il 1956 mostra quindi insieme continuità con Mosca e primi tentativi di differenziazione.",
    ],
  },
  {
    id: "via-italiana",
    num: "08",
    title: "La via italiana e il policentrismo",
    paragraphs: [
      "Dopo il 1956 il PCI insiste maggiormente sulla possibilità di percorsi nazionali al socialismo fondati sulle specificità storiche e istituzionali dei singoli paesi.",
      "Per l'Italia ciò significa centralità della Costituzione, Parlamento, riforme di struttura e mobilitazione democratica.",
      "Il policentrismo non equivale ancora a una rottura con l'URSS. È piuttosto il tentativo di ridefinire l'unità comunista riconoscendo una maggiore autonomia ai partiti nazionali.",
    ],
  },
  {
    id: "yalta",
    num: "09",
    title: "1964: il Memoriale di Yalta",
    paragraphs: [
      "Nel suo ultimo scritto, il Memoriale di Yalta, Togliatti torna sul problema dell'unità e della diversità nel movimento comunista.",
      "Sottolinea la necessità di affrontare criticamente difficoltà e contraddizioni dei paesi socialisti e di riconoscere la pluralità delle vie politiche.",
      "Il testo non rompe con l'URSS, ma anticipa alcuni temi che diventeranno centrali nella successiva autonomia del PCI.",
    ],
  },
  {
    id: "praga",
    num: "10",
    title: "1968: la condanna dell'invasione della Cecoslovacchia",
    paragraphs: [
      "L'intervento militare del Patto di Varsavia contro la Primavera di Praga segna una discontinuità più evidente.",
      "La direzione del PCI condanna l'invasione e rifiuta di identificare la difesa del socialismo con il diritto dell'URSS di intervenire militarmente negli altri paesi socialisti.",
      "La posizione italiana produce forti tensioni con Mosca e rende più credibile l'idea di una strategia autonoma del PCI.",
    ],
    note: {
      title: "Passaggio decisivo",
      text: "Il 1968 cecoslovacco non interrompe i rapporti tra PCI e PCUS, ma rende pubblica una divergenza politica su sovranità, riforme e uso della forza.",
    },
  },
  {
    id: "berlinguer",
    num: "11",
    title: "Berlinguer e l'autonomia come problema strategico",
    paragraphs: [
      "Negli anni Settanta Berlinguer amplia la differenziazione già avviata. Il PCI cerca una collocazione specifica nella sinistra dell'Europa occidentale.",
      "Il socialismo italiano viene sempre più collegato al pluralismo, alle libertà costituzionali e alla competizione elettorale.",
      "Questa evoluzione non cancella immediatamente simboli, rapporti e culture maturate nel rapporto con l'URSS, producendo tensioni anche dentro il partito.",
    ],
  },
  {
    id: "eurocomunismo",
    num: "12",
    title: "Eurocomunismo: cooperare senza un centro unico",
    paragraphs: [
      "L'eurocomunismo sviluppato con i comunisti spagnoli e, per una fase, francesi rappresenta il tentativo più visibile di costruire un comunismo occidentale autonomo da Mosca.",
      "Democrazia parlamentare, pluralismo e libertà politiche diventano elementi qualificanti della strategia.",
      "L'esperienza rimane breve e differenziata tra i vari partiti, ma accentua il superamento dell'idea di un movimento comunista organizzato attorno alla leadership sovietica.",
    ],
  },
  {
    id: "nato",
    num: "13",
    title: "1976: l'Italia occidentale e la sicurezza internazionale",
    paragraphs: [
      "Nel 1976 Berlinguer afferma di sentirsi più sicuro nell'area occidentale. La dichiarazione ha un forte valore politico perché segnala che un eventuale governo con partecipazione comunista non avrebbe implicato l'uscita automatica dell'Italia dal sistema occidentale.",
      "La posizione è ancora critica verso la logica dei blocchi, ma riconosce la realtà geopolitica nella quale si colloca la democrazia italiana.",
      "È uno dei passaggi che mostrano quanto la politica internazionale del PCI si stia allontanando dagli schemi del dopoguerra.",
    ],
  },
  {
    id: "mosca-1977",
    num: "14",
    title: "1977: parlare di democrazia a Mosca",
    paragraphs: [
      "Nel novembre 1977, durante le celebrazioni dell'Ottobre, Berlinguer sostiene a Mosca il valore storicamente universale della democrazia.",
      "L'affermazione riguarda direttamente il modello di socialismo pensato per l'Occidente e implica che pluralismo e libertà non siano semplicemente strumenti temporanei.",
      "La scelta di formulare questa posizione davanti ai vertici comunisti internazionali rafforza il significato della differenziazione italiana.",
    ],
  },
  {
    id: "afghanistan",
    num: "15",
    title: "1979: Afghanistan e nuova distanza",
    paragraphs: [
      "L'invasione sovietica dell'Afghanistan nel 1979 provoca una nuova critica del PCI alla politica estera dell'URSS.",
      "Il partito italiano considera l'intervento incompatibile con una linea fondata sull'autodeterminazione e sulla distensione.",
      "Il dissenso internazionale si intreccia con la crisi dell'eurocomunismo e con la ricerca di un'identità autonoma nella sinistra europea.",
    ],
  },
  {
    id: "polonia",
    num: "16",
    title: "1981: Polonia e fine della spinta propulsiva",
    paragraphs: [
      "La proclamazione della legge marziale in Polonia nel dicembre 1981, nel contesto dello scontro tra il governo comunista e Solidarność, accelera ulteriormente la rottura politica.",
      "Berlinguer afferma che la spinta propulsiva nata dalla Rivoluzione d'Ottobre si è esaurita.",
      "La formula segna il punto più avanzato della critica al socialismo reale durante la sua segreteria, pur senza trasformare immediatamente il PCI in un partito non comunista.",
    ],
  },
  {
    id: "anni-ottanta",
    num: "17",
    title: "Gli anni Ottanta: autonomia senza scioglimento",
    paragraphs: [
      "Dopo il 1981 il PCI mantiene la propria denominazione, cultura e organizzazione comunista, ma non considera più il sistema sovietico un modello da riprodurre in Italia.",
      "La politica estera continua a essere segnata da posizioni complesse su disarmo, missili nucleari, pace e rapporti Est-Ovest.",
      "Anche per questo lo strappo va letto come processo di differenziazione profonda, non come semplice passaggio istantaneo da un campo politico a un altro.",
    ],
  },
  {
    id: "1989",
    num: "18",
    title: "1989 e la fine del quadro storico",
    paragraphs: [
      "La caduta dei regimi dell'Europa orientale nel 1989 e la successiva dissoluzione dell'URSS cambiano definitivamente il contesto nel quale il PCI aveva costruito la propria identità internazionale.",
      "Sotto la segreteria di Achille Occhetto il partito avvia la trasformazione che porterà nel 1991 allo scioglimento del PCI e alla nascita del PDS.",
      "Il lungo rapporto con l'Unione Sovietica rimane quindi uno dei principali problemi storici attraverso cui interpretare sia la forza sia le contraddizioni del comunismo italiano.",
    ],
  },
];

const timeline: TimelineItem[] = [
  { year: "1921", text: "Il PCd'I nasce come sezione dell'Internazionale Comunista." },
  { year: "1947", text: "Il PCI aderisce al Cominform nel nuovo quadro della Guerra fredda." },
  { year: "1956", text: "XX Congresso del PCUS, crisi ungherese, via italiana e policentrismo." },
  { year: "1964", text: "Togliatti scrive il Memoriale di Yalta." },
  { year: "1968", text: "Il PCI condanna l'invasione della Cecoslovacchia." },
  { year: "1975–1977", text: "Eurocomunismo e crescente autonomia del PCI." },
  { year: "1977", text: "Berlinguer parla a Mosca del valore universale della democrazia." },
  { year: "1979", text: "Il PCI critica l'invasione sovietica dell'Afghanistan." },
  { year: "1981", text: "Crisi polacca e dichiarazione sull'esaurimento della spinta propulsiva dell'Ottobre." },
  { year: "1989–1991", text: "Crollo dei regimi dell'Est e trasformazione del PCI." },
];

const sources: MonographSource[] = [
  {
    title: "Treccani — Partito Comunista Italiano",
    description: "Ricostruzione generale del rapporto con l'URSS, dal 1956 alla Cecoslovacchia, fino allo strappo berlingueriano.",
    href: "https://www.treccani.it/enciclopedia/partito-comunista-italiano/",
  },
  {
    title: "Treccani — Palmiro Togliatti, Dizionario Biografico",
    description: "Approfondimento su 1956, Ungheria, via italiana, policentrismo e Memoriale di Yalta.",
    href: "https://www.treccani.it/enciclopedia/palmiro-togliatti_%28Dizionario-Biografico%29/",
  },
  {
    title: "Treccani — Enrico Berlinguer, Dizionario Biografico",
    description: "Profilo della crescente autonomia internazionale del PCI e della rottura del 1981.",
    href: "https://www.treccani.it/enciclopedia/enrico-berlinguer_%28Dizionario-Biografico%29/",
  },
  {
    title: "Fondazione Gramsci — Discorso di Mosca del 1977",
    description: "Scheda archivistica del discorso per il sessantesimo anniversario della Rivoluzione d'Ottobre.",
    href: "https://enricoberlinguer.fondazionegramsci.org/timeline/IT-GRAMSCI-CMS001-000029",
  },
];

export default function Page() {
  return (
    <MonographPage
      eyebrow="Politica internazionale · Dispensa 06"
      title="Il PCI"
      accentTitle="e l'Unione Sovietica"
      subtitle="Dal Comintern alla via italiana, da Praga allo strappo di Berlinguer"
      description="Settant'anni di relazioni politiche e ideologiche: dipendenza, appartenenza internazionale, crisi del 1956, autonomia nazionale, eurocomunismo e superamento del modello sovietico."
      period="1921–1989"
      readingTime="65–80 minuti"
      sections={sections}
      timeline={timeline}
      sources={sources}
    />
  );
}
