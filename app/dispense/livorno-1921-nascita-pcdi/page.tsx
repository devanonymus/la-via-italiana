import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Livorno 1921 e la nascita del Partito Comunista d’Italia",
  description:
    "Dispensa approfondita sul Congresso di Livorno, la crisi del PSI, il Biennio rosso, il Comintern, Bordiga, Gramsci e la nascita del Partito Comunista d’Italia.",
};

const indice = [
  ["#introduzione", "Introduzione"],
  ["#italia-dopoguerra", "1. L’Italia del primo dopoguerra"],
  ["#rivoluzione-russa", "2. La Rivoluzione russa"],
  ["#biennio-rosso", "3. Il Biennio rosso"],
  ["#psi", "4. Il PSI e le sue correnti"],
  ["#ordine-nuovo", "5. L’Ordine Nuovo"],
  ["#bordiga", "6. Bordiga e la frazione comunista"],
  ["#comintern", "7. Il Comintern"],
  ["#ventuno-condizioni", "8. Le 21 condizioni"],
  ["#livorno", "9. Il Congresso di Livorno"],
  ["#votazioni", "10. Le votazioni congressuali"],
  ["#pcdi", "11. La nascita del PCd’I"],
  ["#primo-partito", "12. Il primo PCd’I"],
  ["#elezioni-1921", "13. Le elezioni del 1921"],
  ["#fascismo", "14. Fascismo e crisi rivoluzionaria"],
  ["#gramsci-evoluzione", "15. L’evoluzione di Gramsci"],
  ["#lione", "16. Il Congresso di Lione"],
  ["#questione-meridionale", "17. La questione meridionale"],
  ["#repressione", "18. La repressione fascista"],
  ["#continuita-rotture", "19. Continuità e rotture"],
  ["#interpretazioni", "20. Interpretazioni storiche"],
  ["#cronologia", "21. Cronologia essenziale"],
  ["#glossario", "22. Glossario"],
  ["#fonti", "23. Fonti e bibliografia"],
];

const cronologia = [
  ["1917", "Rivoluzione russa"],
  ["1919", "Nasce l’Internazionale Comunista"],
  ["1919", "Fondazione de L’Ordine Nuovo"],
  ["1919–1920", "Biennio rosso"],
  ["1920", "II Congresso del Comintern e 21 condizioni"],
  ["15–21 gennaio 1921", "XVII Congresso PSI a Livorno"],
  ["21 gennaio 1921", "Fondazione del PCd’I"],
  ["maggio 1921", "Prime elezioni politiche del PCd’I"],
  ["1922", "Mussolini al governo"],
  ["1924", "Gramsci segretario del PCd’I"],
  ["gennaio 1926", "III Congresso del PCd’I a Lione"],
  ["novembre 1926", "Arresto di Gramsci e piena clandestinità"],
];

const glossary = [
  ["Massimalismo", "Corrente socialista favorevole, in linea teorica, al programma massimo della trasformazione socialista."],
  ["Riformismo", "Strategia fondata su riforme graduali, azione parlamentare, sindacale e amministrativa."],
  ["Comintern", "Internazionale Comunista fondata nel 1919 per coordinare i partiti comunisti."],
  ["Consigli di fabbrica", "Organismi operai sviluppatisi soprattutto a Torino durante il Biennio rosso."],
  ["Frazione", "Corrente organizzata interna a un partito politico."],
  ["PCd’I", "Partito Comunista d’Italia, denominazione adottata dal 1921 al 1943."],
  ["Egemonia", "Concetto che Gramsci svilupperà per indicare capacità di direzione politica, sociale e culturale."],
  ["Questione meridionale", "Problema storico del divario economico, sociale e politico tra Nord e Sud d’Italia."],
];

export default function LivornoPage() {
  return (
    <>
      <Header />

      <main>
        <article>
          <header className="border-b border-[var(--border)]">
            <div className="container-site py-16 md:py-24">
              <Link
                href="/dispense/gramsci-egemonia"
                className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]"
              >
                ← Torna alle dispense
              </Link>

              <div className="mt-10 max-w-6xl">
                <div className="eyebrow">
                  Storia del PCI · Dispensa 01
                </div>

                <h1 className="font-editorial mt-5 text-5xl font-semibold leading-[0.96] tracking-[-0.045em] md:text-7xl">
                  Livorno 1921:
                  <br />
                  <span className="text-[var(--red)]">
                    nascita, rotture e contraddizioni
                  </span>
                  <br />
                  del comunismo italiano
                </h1>

                <p className="mt-8 max-w-4xl text-lg leading-8 text-[var(--muted)]">
                  Dalla crisi del socialismo italiano alla fondazione del
                  Partito Comunista d’Italia: guerra, rivoluzione russa,
                  Biennio rosso, Comintern, Bordiga, Gramsci e il confronto
                  strategico che avrebbe segnato l’intero Novecento politico italiano.
                </p>

                <div className="mt-10 grid gap-5 border-y border-[var(--border)] py-7 sm:grid-cols-4">
                  <Meta label="Autore" value="La Via Italiana" />
                  <Meta label="Periodo" value="1917–1926" />
                  <Meta label="Livello" value="Approfondito" />
                  <Meta label="Lettura" value="30–40 minuti" />
                </div>
              </div>
            </div>
          </header>

          <div className="container-site grid gap-16 py-16 lg:grid-cols-[270px_minmax(0,820px)] lg:justify-center">
            <aside className="lg:sticky lg:top-40 lg:self-start">
              <div className="eyebrow">Indice</div>

              <nav className="mt-5 flex max-h-[68vh] flex-col gap-2 overflow-auto border-l border-[var(--border)] pl-5 pr-3">
                {indice.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm leading-6 text-[var(--muted)] transition hover:text-[var(--red)]"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Metodo
                </div>

                <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                  Ricostruzione storica con distinzione tra fatti,
                  interpretazioni e sviluppi teorici successivi.
                </p>
              </div>
            </aside>

            <div className="article-content">

              <Section id="introduzione" num="Introduzione" title="Perché Livorno 1921 è decisivo">
                <p>
                  Il Congresso di Livorno del gennaio 1921 non rappresenta
                  soltanto la nascita di un nuovo partito. È il punto di
                  condensazione di una crisi molto più ampia che attraversa
                  il socialismo europeo dopo la Prima guerra mondiale.
                </p>

                <p>
                  Per comprendere realmente la scissione è necessario evitare
                  una lettura retrospettiva. Nel gennaio 1921 non esiste ancora
                  il PCI della Resistenza, della Costituente, di Togliatti o
                  di Berlinguer. Esiste invece un movimento comunista giovane,
                  fortemente influenzato dall’esperienza bolscevica e
                  dall’Internazionale Comunista.
                </p>

                <InfoBox title="Da non confondere">
                  Il Partito Comunista d’Italia del 1921 e il PCI degli anni
                  Settanta appartengono alla stessa storia organizzativa,
                  ma presentano differenze molto profonde di strategia,
                  cultura politica, rapporto con l’URSS e concezione della democrazia.
                </InfoBox>

                <p>
                  Livorno va dunque studiato come origine di un processo,
                  non come punto di arrivo.
                </p>
              </Section>

              <Section id="italia-dopoguerra" num="01" title="L’Italia del primo dopoguerra">
                <p>
                  La Prima guerra mondiale aveva modificato profondamente
                  la società italiana. Milioni di uomini erano stati mobilitati,
                  il debito pubblico era cresciuto, l’inflazione aveva ridotto
                  il potere d’acquisto e la riconversione dell’economia di guerra
                  aveva prodotto forti tensioni occupazionali.
                </p>

                <p>
                  Nel mondo del lavoro aumentavano scioperi, rivendicazioni
                  salariali e mobilitazioni sindacali. Nelle campagne,
                  soprattutto nella Pianura Padana e in diverse aree del Centro,
                  crescevano le lotte bracciantili e le occupazioni delle terre.
                </p>

                <p>
                  Parallelamente, una parte della piccola borghesia,
                  degli ex combattenti, dei proprietari agrari e dei ceti medi
                  viveva il conflitto sociale come una minaccia all’ordine esistente.
                  Questa polarizzazione costituì uno degli ambienti nei quali
                  il fascismo riuscì progressivamente a espandersi.
                </p>
              </Section>

              <Section id="rivoluzione-russa" num="02" title="La Rivoluzione russa cambia il socialismo europeo">
                <p>
                  La rivoluzione bolscevica del 1917 ebbe un impatto enorme
                  sulla sinistra europea. Per molti militanti non rappresentava
                  soltanto una rivoluzione nazionale, ma la dimostrazione
                  concreta che un partito rivoluzionario potesse conquistare
                  il potere e avviare una trasformazione socialista.
                </p>

                <p>
                  Da quel momento, il movimento socialista europeo fu attraversato
                  da una frattura crescente tra chi considerava la rivoluzione
                  bolscevica un modello politico e chi riteneva necessario
                  proseguire attraverso riforme parlamentari, democrazia
                  rappresentativa e organizzazione sindacale.
                </p>

                <p>
                  È dentro questa divisione internazionale che va collocata
                  la futura scissione italiana.
                </p>
              </Section>

              <Section id="biennio-rosso" num="03" title="Il Biennio rosso: una rivoluzione mancata?">
                <p>
                  Con l’espressione “Biennio rosso” si indica generalmente
                  la fase 1919–1920 caratterizzata da fortissima conflittualità
                  sociale, crescita sindacale, scioperi, occupazioni delle terre
                  e mobilitazioni operaie.
                </p>

                <p>
                  L’episodio più noto fu l’occupazione delle fabbriche del 1920.
                  In diversi stabilimenti gli operai continuarono la produzione
                  sotto forme di autorganizzazione e controllo operaio.
                </p>

                <p>
                  Tuttavia, parlare automaticamente di “rivoluzione pronta a
                  vincere” sarebbe semplicistico. Il movimento operaio era
                  politicamente diviso; PSI, sindacati e correnti rivoluzionarie
                  non condividevano una strategia unica; inoltre, il sistema
                  statale e le classi dirigenti non erano collassati come era
                  avvenuto nella Russia del 1917.
                </p>

                <InfoBox title="Problema politico">
                  Una mobilitazione sociale molto intensa non produce automaticamente
                  una trasformazione rivoluzionaria. Occorrono direzione politica,
                  organizzazione, alleanze e una strategia capace di leggere
                  concretamente la struttura dello Stato e della società.
                </InfoBox>
              </Section>

              <Section id="psi" num="04" title="Un PSI fortissimo, ma profondamente diviso">
                <p>
                  Alle elezioni politiche del 1919 il Partito Socialista Italiano
                  ottenne un risultato molto rilevante e divenne una delle
                  principali forze parlamentari del Paese.
                </p>

                <p>
                  Questa forza elettorale, tuttavia, nascondeva profonde
                  divergenze strategiche.
                </p>

                <h3>Riformisti</h3>

                <p>
                  I riformisti, legati a personalità come Filippo Turati,
                  puntavano sulla trasformazione graduale attraverso Parlamento,
                  sindacato, amministrazioni locali e conquiste sociali.
                </p>

                <h3>Massimalisti</h3>

                <p>
                  I massimalisti, guidati da Giacinto Menotti Serrati,
                  mantenevano un linguaggio rivoluzionario e sostenevano
                  l’adesione all’Internazionale Comunista, ma non accettavano
                  la richiesta di espellere immediatamente l’ala riformista.
                </p>

                <h3>Comunisti</h3>

                <p>
                  La frazione comunista riteneva invece necessario costruire
                  un partito nuovo, coerente con le condizioni stabilite dal
                  Comintern e nettamente separato dai riformisti.
                </p>
              </Section>

              <Section id="ordine-nuovo" num="05" title="L’Ordine Nuovo e i consigli di fabbrica">
                <p>
                  A Torino, Antonio Gramsci, Palmiro Togliatti, Umberto Terracini
                  e Angelo Tasca animarono l’esperienza de L’Ordine Nuovo,
                  fondata nel 1919.
                </p>

                <p>
                  Al centro della loro riflessione vi erano i consigli di fabbrica,
                  organismi attraverso i quali gli operai avrebbero potuto
                  sviluppare capacità autonoma di organizzazione e gestione
                  della produzione.
                </p>

                <p>
                  Gramsci guardava quindi alla fabbrica non soltanto come luogo
                  del conflitto salariale, ma come possibile spazio di formazione
                  politica della classe operaia.
                </p>

                <p>
                  È importante tuttavia non proiettare sul Gramsci del 1919–1921
                  tutta la teoria dell’egemonia elaborata successivamente.
                  Il suo pensiero attraversò infatti una lunga evoluzione,
                  soprattutto negli anni successivi alla nascita del PCd’I
                  e poi durante la prigionia.
                </p>
              </Section>

              <Section id="bordiga" num="06" title="Bordiga: il vero organizzatore iniziale del comunismo italiano">
                <p>
                  Quando si arriva a Livorno, Amadeo Bordiga dispone di una
                  posizione organizzativa molto forte. La sua corrente aveva
                  già costruito una rete nazionale disciplinata e fortemente
                  orientata alla costituzione di un partito comunista autonomo.
                </p>

                <p>
                  Per questo motivo è storicamente scorretto rappresentare
                  la nascita del PCd’I come opera principalmente di Gramsci.
                  Il gruppo gramsciano partecipò alla fondazione, ma la linea
                  inizialmente dominante fu soprattutto quella bordighiana.
                </p>

                <p>
                  Bordiga concepiva il partito come organizzazione rivoluzionaria
                  fortemente centralizzata, rigorosa sul piano dottrinario
                  e poco disponibile a compromessi con altre forze politiche.
                </p>

                <p>
                  Successivamente questa impostazione entrerà in contrasto
                  sia con l’Internazionale Comunista sia con il gruppo dirigente
                  raccolto attorno a Gramsci.
                </p>
              </Section>

              <Section id="comintern" num="07" title="La Terza Internazionale">
                <p>
                  Nel marzo 1919 nacque a Mosca l’Internazionale Comunista,
                  nota anche come Terza Internazionale o Comintern.
                </p>

                <p>
                  Il suo obiettivo era coordinare su scala internazionale
                  i partiti rivoluzionari che riconoscevano nella Rivoluzione
                  d’Ottobre un riferimento fondamentale.
                </p>

                <p>
                  L’adesione al Comintern non era concepita come semplice
                  appartenenza simbolica: implicava l’accettazione di criteri
                  politici e organizzativi stringenti.
                </p>
              </Section>

              <Section id="ventuno-condizioni" num="08" title="Le 21 condizioni">
                <p>
                  Nel 1920 il II Congresso dell’Internazionale Comunista
                  fissò ventuno condizioni per l’adesione dei partiti.
                </p>

                <p>
                  Tra gli elementi centrali vi erano la rottura con le componenti
                  considerate riformiste, una maggiore disciplina organizzativa,
                  l’adozione di strutture coerenti con il modello comunista
                  internazionale e una netta separazione dalla socialdemocrazia.
                </p>

                <p>
                  Il nodo italiano fu particolarmente delicato perché il PSI
                  voleva mantenere l’adesione all’Internazionale senza però
                  accettare integralmente l’espulsione dei riformisti.
                </p>

                <InfoBox title="Il cuore del conflitto">
                  A Livorno non si discuteva soltanto “rivoluzione sì o no”.
                  Si discuteva anche chi dovesse appartenere al partito,
                  quale rapporto mantenere con Mosca e quale forma organizzativa
                  dovesse assumere il socialismo italiano.
                </InfoBox>
              </Section>

              <Section id="livorno" num="09" title="Il XVII Congresso del PSI">
                <p>
                  Il congresso si tenne a Livorno dal 15 al 21 gennaio 1921.
                  La sede principale del confronto politico fu il Teatro Goldoni.
                </p>

                <p>
                  Le principali mozioni erano riconducibili a tre aree:
                  massimalista unitaria, comunista e riformista.
                </p>

                <p>
                  La maggioranza del partito non seguì la frazione comunista.
                  La corrente guidata da Serrati risultò nettamente prevalente,
                  mentre i comunisti decisero di abbandonare il congresso.
                </p>
              </Section>

              <Section id="votazioni" num="10" title="I numeri della scissione">
                <p>
                  Le votazioni congressuali mostrano chiaramente che la frazione
                  comunista rappresentava una componente importante, ma minoritaria.
                </p>

                <div className="my-8 overflow-hidden border border-[var(--border)]">
                  <div className="grid grid-cols-[1fr_auto] border-b border-[var(--border)] bg-white/40 px-5 py-4 font-bold">
                    <span>Mozione</span>
                    <span>Voti</span>
                  </div>

                  <VoteRow label="Massimalisti unitari" value="98.028" />
                  <VoteRow label="Comunisti" value="58.783" />
                  <VoteRow label="Riformisti" value="14.695" />
                </div>

                <p>
                  La scissione fu quindi il risultato di una minoranza significativa,
                  ma non maggioritaria, che ritenne politicamente impossibile
                  permanere nel PSI alle condizioni esistenti.
                </p>
              </Section>

              <Section id="pcdi" num="11" title="21 gennaio 1921: nasce il PCd’I">
                <p>
                  Dopo l’uscita dal congresso socialista, i delegati comunisti
                  si riunirono separatamente e fondarono il Partito Comunista
                  d’Italia – Sezione italiana dell’Internazionale Comunista.
                </p>

                <p>
                  Il nome è importante. Il partito non nasce come “Partito
                  Comunista Italiano”, denominazione adottata soltanto nel 1943,
                  ma come sezione italiana di un movimento comunista internazionale.
                </p>

                <p>
                  Questa formula riflette il carattere originario del progetto:
                  il partito si concepiva come parte di una rivoluzione internazionale,
                  non semplicemente come forza nazionale autonoma.
                </p>
              </Section>

              <Section id="primo-partito" num="12" title="Che tipo di partito nasce a Livorno">
                <p>
                  Il primo PCd’I era numericamente più piccolo del PSI e si presentava
                  come un partito rivoluzionario fortemente selettivo e disciplinato.
                </p>

                <p>
                  L’influenza bordighiana favoriva una concezione del partito
                  come avanguardia politica, distinta dalle oscillazioni
                  immediate delle masse e fortemente diffidente verso accordi
                  con altre forze politiche.
                </p>

                <p>
                  Questo modello entrò progressivamente in tensione con
                  l’evoluzione tattica del Comintern, che nei primi anni Venti
                  cominciò a sostenere strategie di fronte unico tra organizzazioni
                  operaie per contrastare la reazione.
                </p>
              </Section>

              <Section id="elezioni-1921" num="13" title="Le elezioni politiche del 1921">
                <p>
                  Pochi mesi dopo la fondazione, il nuovo partito partecipò
                  alle elezioni politiche del maggio 1921.
                </p>

                <p>
                  Il PCd’I ottenne circa il 4,4% dei voti ed elesse 15 deputati,
                  mentre il PSI rimase una forza molto più grande.
                </p>

                <p>
                  Il risultato confermava che la scissione aveva prodotto
                  un partito politicamente riconoscibile ma ancora minoritario
                  all’interno del movimento operaio italiano.
                </p>
              </Section>

              <Section id="fascismo" num="14" title="La crescita del fascismo">
                <p>
                  Mentre socialisti e comunisti discutevano sulla forma
                  della rivoluzione, il fascismo cresceva rapidamente.
                </p>

                <p>
                  Lo squadrismo attaccava camere del lavoro, cooperative,
                  sedi socialiste e comuniste, amministrazioni locali
                  e organizzazioni contadine.
                </p>

                <p>
                  In numerose aree, le squadre fasciste beneficiarono
                  dell’appoggio di settori agrari e industriali e della
                  tolleranza o collaborazione di parti dell’apparato statale.
                </p>

                <p>
                  La frammentazione delle forze antifasciste rese più difficile
                  una risposta politica unitaria.
                </p>
              </Section>

              <Section id="gramsci-evoluzione" num="15" title="Gramsci cambia prospettiva">
                <p>
                  Dal 1923 Gramsci maturò un progressivo distacco dalle posizioni
                  di Bordiga. Dopo il periodo trascorso tra Mosca e Vienna,
                  rientrò in Italia nel 1924 e assunse un ruolo centrale
                  nella direzione del PCd’I.
                </p>

                <p>
                  Nello stesso anno divenne segretario del partito,
                  fu eletto deputato e promosse la nascita de l’Unità.
                </p>

                <p>
                  Il suo obiettivo era contrastare l’isolamento politico
                  del partito e costruire un radicamento più profondo
                  nella società italiana.
                </p>

                <p>
                  La sua riflessione cominciò così a concentrarsi non solo
                  sulla conquista rivoluzionaria del potere, ma anche
                  sulle alleanze sociali necessarie per rendere la classe
                  operaia capace di dirigere un blocco politico più ampio.
                </p>
              </Section>

              <Section id="lione" num="16" title="Il Congresso di Lione del 1926">
                <p>
                  Il III Congresso del PCd’I si tenne a Lione nel gennaio 1926,
                  in condizioni di crescente repressione fascista.
                </p>

                <p>
                  Qui la linea legata a Gramsci e Togliatti prevalse
                  definitivamente su quella bordighiana.
                </p>

                <p>
                  Le Tesi di Lione sviluppavano un’analisi più articolata
                  della società italiana, della struttura dello Stato
                  e delle alleanze politiche necessarie al movimento operaio.
                </p>

                <InfoBox title="Perché Lione è decisivo">
                  Lione segna il passaggio da un partito prevalentemente
                  modellato sull’intransigenza bordighiana a una strategia
                  più attenta alla società italiana, alle alleanze e
                  alla costruzione di un ruolo nazionale della classe operaia.
                </InfoBox>
              </Section>

              <Section id="questione-meridionale" num="17" title="La questione meridionale diventa strategica">
                <p>
                  Per Gramsci, il proletariato industriale del Nord non avrebbe
                  potuto esercitare una funzione dirigente senza costruire
                  un rapporto politico con le masse contadine del Mezzogiorno.
                </p>

                <p>
                  La questione meridionale non era quindi un tema regionale
                  separato dalla lotta di classe. Era parte della struttura
                  stessa dello Stato e della società italiana.
                </p>

                <p>
                  Nelle Tesi di Lione e negli scritti immediatamente precedenti
                  l’arresto, Gramsci collegò la trasformazione socialista
                  alla capacità della classe operaia di assumere una funzione
                  nazionale e di costruire alleanze oltre il proprio nucleo industriale.
                </p>
              </Section>

              <Section id="repressione" num="18" title="1926: il regime chiude lo spazio politico">
                <p>
                  Nel 1926 il fascismo completò la trasformazione
                  autoritaria dello Stato.
                </p>

                <p>
                  I partiti di opposizione furono messi fuori legge,
                  molti dirigenti comunisti furono arrestati o costretti
                  all’esilio e il PCd’I entrò pienamente nella clandestinità.
                </p>

                <p>
                  Gramsci fu arrestato nel novembre 1926 nonostante
                  l’immunità parlamentare e successivamente condannato
                  dal Tribunale speciale.
                </p>

                <p>
                  Da quel momento, la storia del comunismo italiano
                  si intrecciò profondamente con la lotta antifascista.
                </p>
              </Section>

              <Section id="continuita-rotture" num="19" title="PCd’I 1921 e PCI successivo: cosa resta e cosa cambia">
                <p>
                  Esiste una continuità organizzativa e politica tra il PCd’I
                  fondato nel 1921 e il PCI del dopoguerra, ma questa continuità
                  non significa identità immutabile.
                </p>

                <h3>Elementi di continuità</h3>

                <ul>
                  <li>centralità della questione del lavoro;</li>
                  <li>organizzazione politica disciplinata;</li>
                  <li>riferimento alla tradizione marxista;</li>
                  <li>obiettivo di trasformazione socialista della società.</li>
                </ul>

                <h3>Trasformazioni profonde</h3>

                <ul>
                  <li>rapporto con la democrazia parlamentare;</li>
                  <li>rapporto con le istituzioni repubblicane;</li>
                  <li>ruolo delle alleanze sociali e politiche;</li>
                  <li>relazione con l’Unione Sovietica;</li>
                  <li>concezione della via italiana al socialismo.</li>
                </ul>

                <p>
                  Per questo è metodologicamente scorretto usare il PCd’I
                  del 1921 per descrivere automaticamente il PCI di Togliatti
                  o quello di Berlinguer.
                </p>
              </Section>

              <Section id="interpretazioni" num="20" title="Come interpretare la scissione di Livorno">
                <p>
                  La storiografia e la cultura politica italiana hanno
                  interpretato Livorno in modi differenti.
                </p>

                <p>
                  Una lettura comunista tradizionale ha visto la nascita
                  del PCd’I come necessaria rottura con un socialismo incapace
                  di trasformare la mobilitazione operaia in strategia rivoluzionaria.
                </p>

                <p>
                  Altre interpretazioni hanno sottolineato invece il carattere
                  traumatico della divisione del movimento operaio,
                  soprattutto alla vigilia dell’ascesa fascista.
                </p>

                <p>
                  Un’analisi storica rigorosa non richiede di scegliere
                  retroattivamente una “fazione vincente”, ma di comprendere
                  quali problemi politici reali produssero la scissione,
                  quali alternative erano disponibili e quali conseguenze
                  ebbero le decisioni dei diversi gruppi dirigenti.
                </p>
              </Section>

              <Section id="cronologia" num="21" title="Cronologia essenziale">
                <div className="mt-8 border-t border-[var(--border)]">
                  {cronologia.map(([year, event]) => (
                    <div
                      key={`${year}-${event}`}
                      className="grid gap-3 border-b border-[var(--border)] py-5 md:grid-cols-[160px_1fr]"
                    >
                      <div className="font-editorial text-xl font-semibold text-[var(--red)]">
                        {year}
                      </div>

                      <div className="text-sm leading-7">
                        {event}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="glossario" num="22" title="Glossario essenziale">
                <div className="mt-8 border-t border-[var(--border)]">
                  {glossary.map(([term, definition]) => (
                    <div
                      key={term}
                      className="grid gap-3 border-b border-[var(--border)] py-5 md:grid-cols-[180px_1fr]"
                    >
                      <div className="font-semibold">
                        {term}
                      </div>

                      <div className="text-sm leading-7 text-[var(--muted)]">
                        {definition}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="fonti" num="23" title="Fonti e bibliografia">
                <div className="mt-8 space-y-8">
                  <Source
                    title="Treccani — Antonio Gramsci"
                    text="Biografia politica, ruolo nel PCd’I, questione meridionale, Congresso di Lione e sviluppo successivo del concetto di egemonia."
                    href="https://www.treccani.it/enciclopedia/antonio-gramsci_%28Dizionario-di-Storia%29/"
                  />

                  <Source
                    title="Treccani — Antonio Gramsci, Dizionario Biografico"
                    text="Ricostruzione dettagliata del confronto con Bordiga, delle Tesi di Lione e della centralità della questione meridionale."
                    href="https://www.treccani.it/enciclopedia/antonio-gramsci_%28Dizionario-Biografico%29/"
                  />

                  <Source
                    title="Biblioteca Franco Serantini — Cronologia Primo Antifascismo"
                    text="Dati congressuali di Livorno, risultati delle mozioni e quadro politico-sociale del 1921."
                    href="https://www.bfs.it/primo-antifascismo-cronologia"
                  />
                </div>

                <div className="mt-12 border-t border-[var(--border)] pt-8">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--red)]">
                    Nota metodologica
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    La dispensa distingue tra fatti documentati,
                    interpretazioni storiografiche e sviluppi teorici successivi.
                    L’obiettivo non è presentare una lettura celebrativa
                    della fondazione del PCd’I, ma ricostruire criticamente
                    il contesto, le alternative politiche e le trasformazioni
                    successive del comunismo italiano.
                  </p>
                </div>
              </Section>

            </div>
          </div>

          <section className="border-y border-[var(--border)] bg-[#111111] text-white">
            <div className="container-site grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Prossima dispensa
                </div>

                <h2 className="font-editorial mt-4 text-4xl font-semibold md:text-5xl">
                  Gramsci: egemonia, società civile e questione meridionale
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                  Il passaggio dalle origini rivoluzionarie del PCd’I
                  alla costruzione di una strategia politica capace
                  di interpretare la complessità della società italiana.
                </p>
              </div>

              <Link
                href="/dispense"
                className="border border-white px-7 py-4 text-sm font-bold transition hover:bg-white hover:text-black"
              >
                Archivio dispense
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

function Meta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
        {label}
      </div>

      <div className="mt-2 text-sm font-semibold">
        {value}
      </div>
    </div>
  );
}

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <div className="eyebrow">{num}</div>

      <h2 className="font-editorial mt-4 text-4xl font-semibold leading-tight md:text-5xl">
        {title}
      </h2>

      {children}
    </section>
  );
}

function InfoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-10 border-l-4 border-[var(--red)] bg-white/40 px-7 py-6">
      <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
        {title}
      </div>

      <div className="font-editorial mt-4 text-2xl leading-tight">
        {children}
      </div>
    </div>
  );
}

function VoteRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto] border-b border-[var(--border)] px-5 py-4 last:border-b-0">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function Source({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <div>
      <div className="text-base font-bold">
        {title}
      </div>

      <p className="!mt-2 text-sm leading-7 text-[var(--muted)]">
        {text}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-bold text-[var(--red)]"
      >
        Consulta la fonte ↗
      </a>
    </div>
  );
}
