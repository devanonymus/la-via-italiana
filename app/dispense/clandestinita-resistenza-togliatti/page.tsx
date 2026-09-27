import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dalla clandestinità alla Repubblica: Togliatti, Resistenza e partito nuovo",
  description:
    "Dispensa monografica sul comunismo italiano dal 1926 al 1948: clandestinità, antifascismo, Comintern, Resistenza, svolta di Salerno, Togliatti e partito nuovo.",
};

const indice = [
  ["#introduzione", "Introduzione"],
  ["#1926", "1. La cesura del 1926"],
  ["#clandestinita", "2. La clandestinità"],
  ["#centro-estero", "3. Centro interno e centro estero"],
  ["#togliatti", "4. L’ascesa di Togliatti"],
  ["#comintern", "5. Il Comintern"],
  ["#fronti", "6. Fronti popolari e antifascismo"],
  ["#spagna", "7. La guerra di Spagna"],
  ["#stalinismo", "8. Il nodo dello stalinismo"],
  ["#1939", "9. Il patto del 1939"],
  ["#1943", "10. Gli scioperi del 1943"],
  ["#8settembre", "11. L’8 settembre"],
  ["#resistenza", "12. La Resistenza"],
  ["#cln", "13. Il PCI nel CLN"],
  ["#salerno", "14. La svolta di Salerno"],
  ["#partito-nuovo", "15. Il partito nuovo"],
  ["#democrazia", "16. Democrazia progressiva"],
  ["#costituente", "17. Repubblica e Costituente"],
  ["#costituzione", "18. PCI e Costituzione"],
  ["#1947", "19. L’esclusione dal governo"],
  ["#continuita", "20. Continuità e rotture"],
  ["#cronologia", "21. Cronologia"],
  ["#fonti", "22. Fonti"],
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <article>
          <header className="border-b border-[var(--border)]">
            <div className="container-site py-16 md:py-24">
              <Link
                href="/dispense"
                className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]"
              >
                ← Torna alle dispense
              </Link>

              <div className="mt-10 max-w-6xl">
                <div className="eyebrow">
                  Storia del PCI · Dispensa 03
                </div>

                <h1 className="font-editorial mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
                  Dalla clandestinità
                  <br />
                  <span className="text-[var(--red)]">
                    alla Repubblica
                  </span>
                </h1>

                <p className="font-editorial mt-5 text-3xl leading-tight md:text-4xl">
                  Togliatti, Resistenza e nascita del partito nuovo
                </p>

                <p className="mt-8 max-w-4xl text-lg leading-8 text-[var(--muted)]">
                  Dal 1926 alla nascita della Repubblica: repressione fascista,
                  esilio, antifascismo, rapporto con il Comintern, guerra,
                  Resistenza, ritorno di Togliatti e trasformazione del PCI
                  in grande partito di massa.
                </p>

                <div className="mt-10 grid gap-5 border-y border-[var(--border)] py-7 sm:grid-cols-4">
                  <Meta label="Autore" value="La Via Italiana" />
                  <Meta label="Periodo" value="1926–1948" />
                  <Meta label="Livello" value="Monografico" />
                  <Meta label="Lettura" value="50–60 minuti" />
                </div>
              </div>
            </div>
          </header>

          <div className="container-site grid gap-16 py-16 lg:grid-cols-[280px_minmax(0,840px)] lg:justify-center">
            <aside className="lg:sticky lg:top-40 lg:self-start">
              <div className="eyebrow">Indice</div>

              <nav className="mt-5 flex max-h-[67vh] flex-col gap-2 overflow-auto border-l border-[var(--border)] pl-5 pr-4">
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
            </aside>

            <div className="article-content">
              <Section id="introduzione" num="Introduzione" title="Un partito completamente trasformato">
                <p>
                  Nel 1926 il Partito Comunista d’Italia è una piccola
                  organizzazione rivoluzionaria sottoposta a una repressione
                  sempre più dura. Nel 1948 il PCI è invece un grande partito
                  di massa, radicato nelle fabbriche, nei territori e nelle
                  istituzioni repubblicane.
                </p>

                <p>
                  Questa trasformazione non è soltanto quantitativa.
                  Cambiano il modo di intendere il partito, il rapporto
                  con lo Stato, la strategia nazionale e il ruolo della
                  democrazia.
                </p>

                <p>
                  Tra questi due momenti si collocano vent’anni segnati
                  da clandestinità, fascismo, stalinismo, guerra civile
                  spagnola, Seconda guerra mondiale e Resistenza.
                </p>

                <InfoBox title="Domanda centrale">
                  Come passa il comunismo italiano da una piccola avanguardia
                  rivoluzionaria a un grande partito nazionale di massa?
                </InfoBox>
              </Section>

              <Section id="1926" num="01" title="1926: la cesura">
                <p>
                  Nel 1926 il fascismo completa la distruzione degli spazi
                  politici legali. I partiti di opposizione vengono messi
                  fuori legge e i loro dirigenti perseguitati.
                </p>

                <p>
                  Per il PCd’I questo significa il passaggio definitivo
                  alla clandestinità. Gramsci viene arrestato e gran parte
                  del gruppo dirigente è costretta all’esilio.
                </p>

                <p>
                  La politica cambia forma: riunioni, stampa, collegamenti
                  e attività organizzativa devono essere nascosti.
                </p>
              </Section>

              <Section id="clandestinita" num="02" title="Che cosa significa clandestinità">
                <p>
                  Operare clandestinamente significa costruire reti
                  compartimentate, utilizzare nomi falsi, recapiti sicuri
                  e sistemi di comunicazione difficili da intercettare.
                </p>

                <p>
                  La priorità è sopravvivere senza perdere ogni capacità
                  organizzativa. Il lavoro politico diventa quindi anche
                  un problema di sicurezza.
                </p>

                <p>
                  Mantenere una rete nelle fabbriche e nelle città consente
                  al partito di preservare una presenza sociale che si rivelerà
                  importante quando il regime inizierà a indebolirsi.
                </p>
              </Section>

              <Section id="centro-estero" num="03" title="Centro interno e centro estero">
                <p>
                  Dopo il 1926 una parte decisiva della direzione opera
                  dall’estero, soprattutto tra Francia e Unione Sovietica.
                </p>

                <p>
                  Il problema fondamentale è evitare che il partito diventi
                  un’organizzazione di soli emigrati politici, priva di
                  collegamenti reali con l’Italia.
                </p>

                <p>
                  Da qui nasce il continuo tentativo di mantenere un centro
                  interno clandestino collegato alla direzione estera.
                </p>
              </Section>

              <Section id="togliatti" num="04" title="L’ascesa di Palmiro Togliatti">
                <p>
                  Con Gramsci in carcere e Bordiga progressivamente emarginato,
                  Palmiro Togliatti assume un ruolo crescente nella direzione.
                </p>

                <p>
                  Togliatti proviene dall’esperienza torinese dell’Ordine Nuovo,
                  ma esercita la propria leadership in un contesto completamente
                  diverso da quello del 1919–1921.
                </p>

                <p>
                  La sua esperienza internazionale e il rapporto con il Comintern
                  lo rendono una figura centrale del comunismo italiano
                  negli anni Trenta.
                </p>
              </Section>

              <Section id="comintern" num="05" title="Il rapporto con il Comintern">
                <p>
                  Il PCd’I nasce come sezione dell’Internazionale Comunista.
                  Durante la clandestinità questo rapporto diventa ancora
                  più importante.
                </p>

                <p>
                  Il Comintern fornisce reti internazionali, formazione
                  e sostegno organizzativo, ma allo stesso tempo esercita
                  una forte influenza sulle linee politiche dei partiti nazionali.
                </p>

                <p>
                  Il rapporto con Mosca resta quindi uno dei nodi centrali
                  per comprendere limiti e possibilità del comunismo italiano
                  tra le due guerre.
                </p>
              </Section>

              <Section id="fronti" num="06" title="Dall’isolamento ai Fronti popolari">
                <p>
                  Dopo l’ascesa di Hitler in Germania cambia progressivamente
                  la strategia internazionale dei comunisti.
                </p>

                <p>
                  La priorità diventa costruire alleanze antifasciste più ampie,
                  non soltanto con i socialisti ma anche con altre forze
                  democratiche.
                </p>

                <p>
                  Nel 1934 comunisti e socialisti italiani stipulano un patto
                  di unità d’azione. Nel 1935 il VII Congresso del Comintern
                  formalizza la strategia dei Fronti popolari.
                </p>
              </Section>

              <Section id="spagna" num="07" title="La guerra di Spagna">
                <p>
                  La guerra civile spagnola diventa rapidamente un conflitto
                  europeo per procura.
                </p>

                <p>
                  Italia fascista e Germania nazista sostengono Franco,
                  mentre l’Unione Sovietica e le Brigate Internazionali
                  appoggiano la Repubblica.
                </p>

                <p>
                  Numerosi antifascisti italiani combattono in Spagna,
                  vedendo quel conflitto come una battaglia anticipata
                  contro il fascismo europeo.
                </p>
              </Section>

              <Section id="stalinismo" num="08" title="Il nodo dello stalinismo">
                <p>
                  Studiare il comunismo italiano degli anni Trenta richiede
                  di affrontare il rapporto con l’URSS di Stalin.
                </p>

                <p>
                  Il movimento comunista internazionale opera in anni segnati
                  da purghe, repressioni e forte centralizzazione politica.
                </p>

                <p>
                  Il PCI non può essere studiato separatamente da questo
                  contesto, anche se la sua storia nazionale mantiene
                  caratteristiche proprie.
                </p>
              </Section>

              <Section id="1939" num="09" title="Il patto del 1939">
                <p>
                  Nell’agosto 1939 Germania nazista e Unione Sovietica
                  firmano il patto Molotov-Ribbentrop.
                </p>

                <p>
                  Per i comunisti europei è un passaggio traumatico perché
                  interrompe la precedente centralità della strategia antifascista.
                </p>

                <p>
                  Il caso mostra con particolare chiarezza il problema
                  dell’autonomia dei partiti comunisti rispetto alla politica
                  internazionale sovietica.
                </p>
              </Section>

              <Section id="1943" num="10" title="Gli scioperi del 1943">
                <p>
                  Nel marzo 1943 importanti fabbriche del Nord vengono
                  attraversate da grandi scioperi.
                </p>

                <p>
                  Rivendicazioni salariali e materiali si intrecciano
                  con una crescente opposizione alla guerra e al regime.
                </p>

                <p>
                  I comunisti clandestini contribuiscono all’organizzazione
                  delle mobilitazioni grazie alle reti mantenute negli anni precedenti.
                </p>
              </Section>

              <Section id="8settembre" num="11" title="L’8 settembre e il collasso dello Stato">
                <p>
                  L’armistizio dell’8 settembre 1943 provoca il collasso
                  dell’apparato statale e militare italiano.
                </p>

                <p>
                  Le forze tedesche occupano rapidamente gran parte del Paese,
                  mentre nasce la Repubblica Sociale Italiana.
                </p>

                <p>
                  In questa frattura prende forma la Resistenza.
                </p>
              </Section>

              <Section id="resistenza" num="12" title="La Resistenza come fenomeno pluralistico">
                <p>
                  La Resistenza italiana è composta da culture politiche
                  differenti: comunisti, socialisti, azionisti, cattolici,
                  liberali, monarchici e militari.
                </p>

                <p>
                  Il PCI svolge un ruolo rilevante grazie alla sua esperienza
                  clandestina e al radicamento operaio.
                </p>

                <p>
                  Le Brigate Garibaldi, i GAP e le SAP rappresentano alcune
                  delle strutture comuniste più importanti della lotta partigiana.
                </p>
              </Section>

              <Section id="cln" num="13" title="Il PCI nel Comitato di Liberazione Nazionale">
                <p>
                  Il CLN riunisce le principali forze antifasciste.
                </p>

                <p>
                  Partiti con programmi profondamente diversi collaborano
                  perché condividono la priorità della lotta contro
                  occupazione tedesca e fascismo repubblicano.
                </p>

                <p>
                  Per i comunisti questa esperienza consolida la pratica
                  dell’unità antifascista.
                </p>
              </Section>

              <Section id="salerno" num="14" title="La svolta di Salerno">
                <p>
                  Quando Togliatti rientra in Italia nel marzo 1944 propone
                  di rinviare la soluzione definitiva della questione
                  monarchia-Repubblica.
                </p>

                <p>
                  La priorità deve essere la guerra contro il nazifascismo
                  e la ricostruzione dell’unità politica del Paese.
                </p>

                <p>
                  Il PCI accetta quindi di partecipare al governo Badoglio,
                  pur senza rinunciare alla futura scelta repubblicana.
                </p>

                <InfoBox title="Perché è decisiva">
                  La svolta di Salerno mostra il passaggio da una logica
                  di opposizione rivoluzionaria a una strategia di unità
                  nazionale e partecipazione istituzionale.
                </InfoBox>
              </Section>

              <Section id="partito-nuovo" num="15" title="Il partito nuovo">
                <p>
                  Togliatti sviluppa una nuova concezione dell’organizzazione
                  comunista: il partito nuovo.
                </p>

                <p>
                  Il PCI non deve più essere soltanto una piccola organizzazione
                  di quadri rivoluzionari. Deve diventare un grande partito
                  nazionale di massa.
                </p>

                <p>
                  Sezioni territoriali, presenza sindacale, attività culturale,
                  amministrazioni locali e partecipazione parlamentare
                  diventano elementi permanenti della sua azione.
                </p>
              </Section>

              <Section id="democrazia" num="16" title="Democrazia progressiva">
                <p>
                  La nuova strategia attribuisce alla democrazia repubblicana
                  una funzione centrale.
                </p>

                <p>
                  Libertà politiche, partecipazione popolare e trasformazioni
                  sociali vengono pensate come parti di uno stesso processo.
                </p>

                <p>
                  È una delle premesse di quella che negli anni successivi
                  sarà definita via italiana al socialismo.
                </p>
              </Section>

              <Section id="costituente" num="17" title="Repubblica e Assemblea Costituente">
                <p>
                  Il 2 giugno 1946 gli italiani scelgono tra monarchia
                  e Repubblica e votano per l’Assemblea Costituente.
                </p>

                <p>
                  Il PCI sostiene la Repubblica e partecipa alla costruzione
                  del nuovo ordinamento costituzionale.
                </p>

                <p>
                  Il confronto tra comunisti, socialisti, cattolici, liberali
                  e altre forze produce una Costituzione fondata su un
                  compromesso pluralistico.
                </p>
              </Section>

              <Section id="costituzione" num="18" title="PCI e Costituzione">
                <p>
                  Nella Costituente i comunisti sostengono il riconoscimento
                  del lavoro, dei diritti sociali e dell’organizzazione sindacale.
                </p>

                <p>
                  Il testo finale incorpora però anche principi liberali,
                  pluralismo politico e garanzie individuali.
                </p>

                <p>
                  La Costituzione nasce quindi dall’incontro tra culture
                  politiche differenti che nessuna forza può imporre da sola.
                </p>
              </Section>

              <Section id="1947" num="19" title="1947: il PCI esce dal governo">
                <p>
                  Nel 1947 comunisti e socialisti vengono esclusi dal governo.
                </p>

                <p>
                  È ormai iniziata la Guerra fredda e l’Italia si colloca
                  sempre più chiaramente nel campo occidentale.
                </p>

                <p>
                  Il PCI diventa una grande forza di opposizione,
                  ma continua a operare nelle istituzioni repubblicane.
                </p>
              </Section>

              <Section id="continuita" num="20" title="Continuità e rotture">
                <p>
                  Il PCI del dopoguerra conserva identità comunista,
                  riferimento marxista e legame con l’Unione Sovietica.
                </p>

                <p>
                  Ma il modo di fare politica è radicalmente diverso
                  rispetto al 1921.
                </p>

                <CompareBox
                  leftTitle="PCd’I 1921"
                  left="Partito relativamente ristretto, rivoluzionario e strettamente collegato all’Internazionale Comunista."
                  rightTitle="PCI dopoguerra"
                  right="Partito nazionale di massa, inserito nelle istituzioni repubblicane e radicato nella società."
                />
              </Section>

              <Section id="cronologia" num="21" title="Cronologia essenziale">
                <Timeline year="1926" text="Clandestinità e arresto di Gramsci." />
                <Timeline year="1934" text="Patto di unità d’azione tra comunisti e socialisti." />
                <Timeline year="1936–1939" text="Guerra civile spagnola." />
                <Timeline year="1939" text="Patto Molotov-Ribbentrop." />
                <Timeline year="1943" text="Scioperi, caduta di Mussolini e inizio della Resistenza." />
                <Timeline year="1944" text="Ritorno di Togliatti e svolta di Salerno." />
                <Timeline year="1945" text="Liberazione." />
                <Timeline year="1946" text="Repubblica e Assemblea Costituente." />
                <Timeline year="1947" text="Esclusione del PCI dal governo." />
                <Timeline year="1948" text="Entrata in vigore della Costituzione." />
              </Section>

              <Section id="fonti" num="22" title="Fonti e bibliografia essenziale">
                <Source
                  title="Treccani — Partito Comunista Italiano"
                  href="https://www.treccani.it/enciclopedia/partito-comunista-italiano/"
                />

                <Source
                  title="Treccani — Palmiro Togliatti"
                  href="https://www.treccani.it/enciclopedia/palmiro-togliatti/"
                />

                <Source
                  title="Treccani — Partito Comunista Italiano, Dizionario di Storia"
                  href="https://www.treccani.it/enciclopedia/partito-comunista-italiano_%28Dizionario-di-Storia%29/"
                />

                <Source
                  title="Treccani — Palmiro Togliatti, Dizionario Biografico"
                  href="https://www.treccani.it/enciclopedia/palmiro-togliatti_%28Dizionario-Biografico%29/"
                />
              </Section>
            </div>
          </div>
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
      <div className="mt-2 text-sm font-semibold">{value}</div>
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

function CompareBox({
  leftTitle,
  left,
  rightTitle,
  right,
}: {
  leftTitle: string;
  left: string;
  rightTitle: string;
  right: string;
}) {
  return (
    <div className="my-10 grid border border-[var(--border)] md:grid-cols-2">
      <div className="p-6 md:border-r md:border-[var(--border)]">
        <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
          {leftTitle}
        </div>
        <p className="!mb-0 !mt-3 text-sm leading-7">{left}</p>
      </div>

      <div className="border-t border-[var(--border)] p-6 md:border-t-0">
        <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
          {rightTitle}
        </div>
        <p className="!mb-0 !mt-3 text-sm leading-7">{right}</p>
      </div>
    </div>
  );
}

function Timeline({
  year,
  text,
}: {
  year: string;
  text: string;
}) {
  return (
    <div className="grid gap-3 border-b border-[var(--border)] py-5 md:grid-cols-[150px_1fr]">
      <div className="font-editorial text-xl font-semibold text-[var(--red)]">
        {year}
      </div>
      <div className="text-sm leading-7">{text}</div>
    </div>
  );
}

function Source({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="border-t border-[var(--border)] py-6">
      <div className="font-semibold">{title}</div>
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
