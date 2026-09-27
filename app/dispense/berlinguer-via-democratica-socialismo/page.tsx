import type { Metadata } from "next";
import MonographPage, {
  type MonographSection,
  type MonographSource,
  type TimelineItem,
} from "@/components/dispense/MonographPage";

export const metadata: Metadata = {
  title: "Enrico Berlinguer e la via democratica al socialismo",
  description:
    "Democrazia, pluralismo, eurocomunismo, autonomia dall'URSS e strategia politica del PCI durante la segreteria di Enrico Berlinguer.",
};

const sections: MonographSection[] = [
  {
    id: "introduzione",
    num: "01",
    title: "La domanda che attraversa tutta la segreteria Berlinguer",
    paragraphs: [
      "Quando Enrico Berlinguer diventa segretario generale del PCI nel 1972 eredita una tradizione già segnata dalla via italiana al socialismo di Togliatti. Il problema, però, si presenta in una forma nuova: come può un grande partito comunista occidentale perseguire trasformazioni sociali profonde senza mettere in discussione pluralismo politico, libertà costituzionali e competizione elettorale?",
      "La risposta berlingueriana si sviluppa gradualmente. Non nasce in un singolo discorso e non coincide con una formula unica. Comprende il compromesso storico, l'eurocomunismo, il progressivo distacco dal modello sovietico e una crescente insistenza sul valore della democrazia.",
      "Per questo la via democratica al socialismo va studiata come un processo, non come una dottrina perfettamente definita fin dall'inizio.",
    ],
    note: {
      title: "Chiave di lettura",
      text: "Nel pensiero politico di Berlinguer la democrazia non viene presentata soltanto come procedura elettorale, ma come condizione della trasformazione socialista in una società occidentale pluralistica.",
    },
  },
  {
    id: "eredita-togliatti",
    num: "02",
    title: "L'eredità della via italiana",
    paragraphs: [
      "La strategia di Berlinguer non parte da zero. Dopo il 1956 il PCI aveva già accentuato la specificità nazionale della propria politica, parlando di via italiana al socialismo, riforme di struttura e pluralità delle vie nazionali.",
      "Negli anni Sessanta il partito aveva inoltre sviluppato una crescente autonomia di giudizio nei confronti dell'URSS, culminata nella condanna dell'intervento militare in Cecoslovacchia nel 1968.",
      "Berlinguer radicalizza alcuni di questi elementi: la trasformazione socialista in Italia deve fare i conti con la storia costituzionale, con il pluralismo dei partiti, con il mondo cattolico e con l'appartenenza dell'Italia all'Occidente.",
    ],
  },
  {
    id: "1972",
    num: "03",
    title: "1972: una leadership dentro una democrazia di massa",
    paragraphs: [
      "Nel marzo 1972 Berlinguer viene eletto segretario generale del PCI. Il partito è già una delle maggiori forze politiche italiane, dispone di un vasto insediamento sociale e amministra numerosi enti locali.",
      "La prospettiva politica non può quindi essere quella di un piccolo partito rivoluzionario esterno allo Stato. Il PCI opera stabilmente in Parlamento, nei sindacati, nelle amministrazioni e nella società civile.",
      "Il problema diventa costruire una possibilità di governo compatibile con una società politicamente articolata e con un sistema internazionale dominato dalla contrapposizione tra blocchi.",
    ],
  },
  {
    id: "cile",
    num: "04",
    title: "Il Cile del 1973 e il problema della maggioranza",
    paragraphs: [
      "Il colpo di Stato dell'11 settembre 1973 contro il governo di Salvador Allende influenza profondamente la riflessione di Berlinguer. Nei tre articoli pubblicati su Rinascita tra settembre e ottobre, il segretario del PCI riflette sui limiti di una trasformazione sostenuta da una maggioranza elettorale troppo stretta in presenza di forti opposizioni interne e internazionali.",
      "Da questa analisi deriva la ricerca di un consenso sociale e politico più ampio rispetto a una semplice maggioranza parlamentare di sinistra.",
      "La lezione cilena non viene trasposta meccanicamente sull'Italia, ma diventa un argomento a favore della costruzione di grandi alleanze democratiche.",
    ],
  },
  {
    id: "compromesso",
    num: "05",
    title: "Il compromesso storico come strategia democratica",
    paragraphs: [
      "Il compromesso storico viene formulato nel 1973 come proposta di collaborazione tra le grandi forze popolari di tradizione comunista, socialista e cattolico-democratica.",
      "L'obiettivo dichiarato non è soltanto formare un governo aritmeticamente maggioritario. Berlinguer cerca uno schieramento abbastanza ampio da sostenere riforme, difendere l'ordinamento democratico e contenere i rischi di destabilizzazione.",
      "Questa scelta è anche il riconoscimento del carattere strutturale del pluralismo italiano: il mondo cattolico e la Democrazia Cristiana non possono essere trattati come presenze marginali destinate semplicemente a scomparire.",
    ],
  },
  {
    id: "pluralismo",
    num: "06",
    title: "Pluralismo e alternanza non sono dettagli tattici",
    paragraphs: [
      "Nel corso degli anni Settanta Berlinguer insiste sempre più sul rapporto tra socialismo e pluralismo. La società socialista immaginata per l'Italia non dovrebbe eliminare la pluralità dei partiti, delle organizzazioni sociali e delle opinioni.",
      "Questa impostazione differenzia progressivamente il PCI dai sistemi a partito unico dell'Europa orientale.",
      "Il nodo resta tuttavia complesso: il partito continua a definirsi comunista e a mantenere legami politici con il movimento comunista internazionale, mentre cerca di attribuire alla democrazia parlamentare un valore non meramente strumentale.",
    ],
  },
  {
    id: "eurocomunismo",
    num: "07",
    title: "L'eurocomunismo e la ricerca di una via occidentale",
    paragraphs: [
      "A metà degli anni Settanta il PCI sviluppa rapporti più stretti con i partiti comunisti spagnolo e francese. La stampa definisce questo orientamento eurocomunismo.",
      "Gli elementi comuni comprendono la ricerca di maggiore autonomia da Mosca, il riconoscimento delle libertà politiche e l'idea che il socialismo nei paesi occidentali debba svilupparsi nel quadro dello Stato di diritto e della democrazia rappresentativa.",
      "Le posizioni dei tre partiti non sono identiche e l'esperienza eurocomunista avrà una durata limitata, ma per il PCI segna un passaggio importante nella ridefinizione della propria identità internazionale.",
    ],
  },
  {
    id: "occidente",
    num: "08",
    title: "1976: il rapporto con l'Occidente e la NATO",
    paragraphs: [
      "Nel 1976 Berlinguer dichiara in un'intervista che si sente più sicuro collocato nell'area occidentale. La frase assume grande rilievo perché il PCI aveva storicamente combattuto l'adesione italiana alla NATO.",
      "Non si tratta di una conversione improvvisa alla politica atlantica. Berlinguer tenta piuttosto di rassicurare sull'assenza di un progetto di spostamento forzato dell'Italia nel blocco sovietico.",
      "La collocazione internazionale dell'Italia viene così trattata come un vincolo con cui una strategia di trasformazione democratica deve confrontarsi.",
    ],
  },
  {
    id: "mosca-1977",
    num: "09",
    title: "Mosca 1977: la democrazia definita di valore universale",
    paragraphs: [
      "Il 2 novembre 1977 Berlinguer interviene a Mosca durante le celebrazioni per il sessantesimo anniversario della Rivoluzione d'Ottobre.",
      "Davanti ai dirigenti dei partiti comunisti ribadisce che la democrazia rappresenta un valore storicamente universale e collega il socialismo occidentale al pluralismo, alle libertà civili e alla sovranità popolare.",
      "Il significato politico del discorso dipende anche dal luogo in cui viene pronunciato: l'affermazione dell'autonomia italiana viene formulata nel centro simbolico e politico del comunismo sovietico.",
    ],
  },
  {
    id: "solidarieta",
    num: "10",
    title: "La solidarietà nazionale e la prova delle istituzioni",
    paragraphs: [
      "Dopo il forte risultato elettorale del PCI nel 1976 si apre la stagione della solidarietà nazionale. Il partito non entra direttamente nel governo, ma prima consente la nascita del governo Andreotti attraverso l'astensione e poi partecipa alla maggioranza parlamentare.",
      "Per Berlinguer questa fase dovrebbe dimostrare che il PCI può concorrere alla gestione delle emergenze nazionali senza rinunciare alla propria identità.",
      "L'esperienza è però segnata dalla crisi economica, dal terrorismo e da forti divergenze programmatiche tra i partiti che sostengono la maggioranza.",
    ],
  },
  {
    id: "moro",
    num: "11",
    title: "Aldo Moro e i limiti dell'incontro tra PCI e DC",
    paragraphs: [
      "Aldo Moro è uno dei principali interlocutori democristiani della strategia di progressivo coinvolgimento del PCI nell'area della maggioranza.",
      "Il rapimento e l'assassinio di Moro nel 1978 colpiscono la politica italiana nel momento in cui nasce il nuovo governo Andreotti sostenuto anche dai comunisti.",
      "La morte di Moro non è l'unica causa della crisi della solidarietà nazionale, ma elimina uno dei protagonisti più importanti del dialogo e aggrava le difficoltà di una strategia già sottoposta a forti tensioni.",
    ],
  },
  {
    id: "1979",
    num: "12",
    title: "1979: il ritorno all'opposizione",
    paragraphs: [
      "Nel 1979 il PCI pone fine alla partecipazione alla maggioranza e torna all'opposizione.",
      "Il compromesso storico non produce l'ingresso stabile dei comunisti nel governo e il partito registra anche una flessione elettorale rispetto al risultato del 1976.",
      "Berlinguer comincia quindi a ridefinire la strategia, accentuando il carattere alternativo del PCI rispetto alla Democrazia Cristiana.",
    ],
  },
  {
    id: "alternativa",
    num: "13",
    title: "Dall'unità nazionale all'alternativa democratica",
    paragraphs: [
      "Nel 1980 Berlinguer formalizza la proposta dell'alternativa democratica. Il riferimento non è più alla collaborazione strategica con la DC, ma alla costruzione di un diverso schieramento di governo.",
      "Il cambiamento non cancella la centralità della democrazia. Al contrario, rafforza l'idea che l'alternanza debba realizzarsi attraverso consenso elettorale, istituzioni e coalizioni politiche.",
      "È in questa fase che la critica ai meccanismi di potere dei partiti e la questione morale acquistano maggiore centralità.",
    ],
  },
  {
    id: "strappo",
    num: "14",
    title: "1981: lo strappo sul socialismo reale",
    paragraphs: [
      "L'invasione sovietica dell'Afghanistan nel 1979 e la crisi polacca del 1981 accelerano il distacco politico e ideale del PCI dall'URSS.",
      "Nel dicembre 1981 Berlinguer afferma che la spinta propulsiva nata dalla Rivoluzione d'Ottobre si è esaurita. La formula non equivale all'abbandono immediato dell'identità comunista, ma indica una rottura molto più profonda con la pretesa del modello sovietico di rappresentare il riferimento generale del socialismo.",
      "Il socialismo occidentale viene sempre più collegato a libertà, pluralismo e democrazia.",
    ],
  },
  {
    id: "tensione",
    num: "15",
    title: "Una strategia attraversata da tensioni irrisolte",
    paragraphs: [
      "La via democratica di Berlinguer contiene elementi innovativi ma anche tensioni. Il PCI vuole essere pienamente autonomo e occidentale senza recidere completamente i rapporti con il movimento comunista internazionale.",
      "Difende la democrazia pluralista ma conserva una cultura organizzativa fortemente centralizzata. Cerca l'alternanza e al tempo stesso mantiene una specifica identità comunista distinta dalla socialdemocrazia europea.",
      "Queste contraddizioni spiegano perché la sua esperienza sia stata interpretata in modi diversi dalla storiografia e dalle successive culture politiche della sinistra italiana.",
    ],
  },
  {
    id: "interpretazioni",
    num: "16",
    title: "Come leggere oggi la via democratica di Berlinguer",
    paragraphs: [
      "Una lettura storica deve evitare sia di descrivere Berlinguer come se avesse già anticipato integralmente la successiva trasformazione post-comunista, sia di ridurre ogni sua scelta a tattica priva di significato.",
      "I documenti mostrano un'evoluzione reale: dal compromesso storico all'eurocomunismo, dalla valorizzazione del pluralismo alla critica crescente del modello sovietico.",
      "Resta però necessario collocare ogni passaggio nel contesto della Guerra fredda, delle dinamiche interne del PCI e delle trasformazioni della società italiana.",
    ],
  },
];

const timeline: TimelineItem[] = [
  { year: "1972", text: "Berlinguer diventa segretario generale del PCI." },
  { year: "1973", text: "Dopo il colpo di Stato in Cile formula la strategia del compromesso storico." },
  { year: "1975–1976", text: "Si sviluppa l'esperienza eurocomunista con comunisti spagnoli e francesi." },
  { year: "1976", text: "Il PCI ottiene il 34,4% alla Camera; inizia la stagione della non sfiducia." },
  { year: "1977", text: "A Mosca Berlinguer ribadisce il valore universale della democrazia." },
  { year: "1978", text: "Solidarietà nazionale, rapimento e assassinio di Aldo Moro." },
  { year: "1979", text: "Il PCI torna all'opposizione." },
  { year: "1980", text: "Berlinguer propone l'alternativa democratica." },
  { year: "1981", text: "Crisi polacca e dichiarazione sull'esaurimento della spinta propulsiva dell'Ottobre." },
  { year: "1984", text: "Berlinguer muore a Padova durante la campagna per le elezioni europee." },
];

const sources: MonographSource[] = [
  {
    title: "Treccani — Enrico Berlinguer",
    description: "Profilo biografico e politico della segreteria, dell'eurocomunismo, della solidarietà nazionale e del rapporto con l'URSS.",
    href: "https://www.treccani.it/enciclopedia/enrico-berlinguer_%28Enciclopedia-Italiana%29/",
  },
  {
    title: "Treccani — Partito Comunista Italiano, Dizionario di Storia",
    description: "Quadro generale del PCI negli anni Settanta e Ottanta, con compromesso storico, solidarietà nazionale e distacco dall'URSS.",
    href: "https://www.treccani.it/enciclopedia/partito-comunista-italiano_%28Dizionario-di-Storia%29/",
  },
  {
    title: "Fondazione Gramsci — Archivio Enrico Berlinguer",
    description: "Documenti, discorsi e percorsi tematici, compreso il discorso di Mosca del 1977 sul valore universale della democrazia.",
    href: "https://enricoberlinguer.fondazionegramsci.org/",
  },
];

export default function Page() {
  return (
    <MonographPage
      eyebrow="Berlinguer · Dispensa 04"
      title="Enrico Berlinguer"
      accentTitle="e la via democratica al socialismo"
      subtitle="Democrazia, pluralismo, eurocomunismo e autonomia dal modello sovietico"
      description="Una ricostruzione della strategia berlingueriana dal 1972 al 1984: le radici togliattiane, il trauma cileno, il compromesso storico, l'eurocomunismo, la solidarietà nazionale e lo strappo con il socialismo reale."
      period="1972–1984"
      readingTime="55–70 minuti"
      sections={sections}
      timeline={timeline}
      sources={sources}
    />
  );
}
