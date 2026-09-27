import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Antonio Gramsci: egemonia, società civile e questione meridionale",
  description:
    "Dispensa monografica su Antonio Gramsci: formazione politica, Ordine Nuovo, consigli di fabbrica, PCd'I, questione meridionale, egemonia, Stato, società civile, intellettuali, guerra di posizione e Quaderni del carcere.",
};

const indice = [
  ["#introduzione", "Introduzione"],
  ["#formazione", "1. Sardegna e formazione"],
  ["#torino", "2. Torino industriale"],
  ["#socialismo", "3. Gramsci e il PSI"],
  ["#ordine-nuovo", "4. L’Ordine Nuovo"],
  ["#consigli", "5. Consigli di fabbrica"],
  ["#biennio", "6. Il Biennio rosso"],
  ["#rivoluzione-russa", "7. La Rivoluzione russa"],
  ["#livorno", "8. Livorno 1921"],
  ["#bordiga", "9. Gramsci e Bordiga"],
  ["#comintern", "10. Il Comintern"],
  ["#svolta", "11. La svolta 1923–1924"],
  ["#unita", "12. l’Unità e il partito"],
  ["#fascismo", "13. Analizzare il fascismo"],
  ["#lione", "14. Le Tesi di Lione"],
  ["#meridionale", "15. Questione meridionale"],
  ["#intellettuali-pre", "16. Intellettuali e Mezzogiorno"],
  ["#arresto", "17. Arresto e processo"],
  ["#quaderni", "18. I Quaderni del carcere"],
  ["#filosofia-prassi", "19. Filosofia della prassi"],
  ["#egemonia", "20. Egemonia"],
  ["#consenso", "21. Consenso e coercizione"],
  ["#societa-civile", "22. Società civile"],
  ["#stato-integrale", "23. Stato integrale"],
  ["#intellettuali", "24. Gli intellettuali"],
  ["#principe", "25. Il moderno Principe"],
  ["#guerra", "26. Guerra di posizione"],
  ["#occidente", "27. Russia e Occidente"],
  ["#rivoluzione-passiva", "28. Rivoluzione passiva"],
  ["#blocco-storico", "29. Blocco storico"],
  ["#senso-comune", "30. Senso comune e cultura"],
  ["#determinismo", "31. Contro il determinismo"],
  ["#americanismo", "32. Americanismo e fordismo"],
  ["#risorgimento", "33. Il Risorgimento"],
  ["#eredita-pci", "34. Gramsci e il PCI"],
  ["#berlinguer", "35. Gramsci e Berlinguer"],
  ["#interpretazioni", "36. Interpretazioni"],
  ["#errori", "37. Errori frequenti"],
  ["#cronologia", "38. Cronologia"],
  ["#glossario", "39. Glossario"],
  ["#fonti", "40. Fonti e bibliografia"],
];

const cronologia = [
  ["1891", "Nasce ad Ales, in Sardegna."],
  ["1911", "Si trasferisce a Torino grazie a una borsa di studio."],
  ["1913", "Aderisce al Partito Socialista Italiano."],
  ["1917", "Assume crescenti responsabilità nel socialismo torinese."],
  ["1919", "Fonda L’Ordine Nuovo con Togliatti, Tasca e Terracini."],
  ["1919–1920", "Sostiene il movimento dei consigli di fabbrica torinesi."],
  ["1921", "Partecipa alla fondazione del Partito Comunista d’Italia."],
  ["1922", "Si reca a Mosca come rappresentante del PCd’I."],
  ["1923", "Entra nell’Esecutivo dell’Internazionale Comunista."],
  ["1923–1924", "Matura il progressivo distacco dalla linea bordighiana."],
  ["1924", "Eletto deputato, diventa segretario del PCd’I e nasce l’Unità."],
  ["1926", "Il Congresso di Lione sancisce la prevalenza della sua linea."],
  ["novembre 1926", "Viene arrestato dal regime fascista."],
  ["1928", "Il Tribunale speciale lo condanna a una lunga pena detentiva."],
  ["1929", "Avvia sistematicamente la redazione dei Quaderni del carcere."],
  ["1935", "Le condizioni di salute rendono sempre più difficile il lavoro."],
  ["1937", "Muore a Roma il 27 aprile."],
];

const glossary = [
  [
    "Egemonia",
    "Capacità di un gruppo sociale di esercitare direzione politica, culturale e morale, costruendo consenso oltre la semplice coercizione.",
  ],
  [
    "Società civile",
    "Insieme articolato di organizzazioni e istituzioni nelle quali si produce consenso: associazioni, Chiesa, scuola, stampa, sindacati e altri corpi sociali.",
  ],
  [
    "Società politica",
    "Dimensione più direttamente legata a governo, diritto, amministrazione e apparati coercitivi dello Stato.",
  ],
  [
    "Stato integrale",
    "Modo sintetico con cui si indica la concezione gramsciana dello Stato come intreccio tra società politica e società civile.",
  ],
  [
    "Intellettuale organico",
    "Figura che contribuisce a organizzare e rendere coerente la concezione del mondo e la funzione politica di un gruppo sociale.",
  ],
  [
    "Guerra di posizione",
    "Conflitto politico prolungato nel quale si conquistano progressivamente posizioni nella società civile e nei rapporti di forza.",
  ],
  [
    "Guerra di movimento",
    "Strategia di offensiva relativamente rapida e diretta verso il potere politico, contrapposta analiticamente alla guerra di posizione.",
  ],
  [
    "Rivoluzione passiva",
    "Trasformazione condotta prevalentemente dall’alto, capace di innovare e incorporare domande sociali senza piena iniziativa autonoma delle masse.",
  ],
  [
    "Blocco storico",
    "Unità concreta tra rapporti economico-sociali, istituzioni, cultura, gruppi sociali e forme di direzione politica.",
  ],
  [
    "Filosofia della prassi",
    "Espressione utilizzata nei Quaderni per indicare il marxismo interpretato in senso storico, antideterministico e centrato sull’attività umana.",
  ],
  [
    "Moderno Principe",
    "Rielaborazione gramsciana del tema machiavelliano riferita al partito politico come organizzatore di una volontà collettiva.",
  ],
];

export default function GramsciPage() {
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
                  Pensiero politico · Dispensa 02
                </div>

                <h1 className="font-editorial mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
                  Antonio Gramsci:
                  <br />
                  <span className="text-[var(--red)]">
                    potere, egemonia
                    <br />
                    e trasformazione sociale
                  </span>
                </h1>

                <p className="mt-8 max-w-4xl text-lg leading-8 text-[var(--muted)]">
                  Dalla Sardegna alla Torino industriale, dai consigli di
                  fabbrica alla direzione del PCd’I, fino alla grande
                  elaborazione dei Quaderni del carcere: un percorso per
                  comprendere come Gramsci ripensò il marxismo, lo Stato,
                  la cultura e la strategia politica nelle società occidentali.
                </p>

                <div className="mt-10 grid gap-5 border-y border-[var(--border)] py-7 sm:grid-cols-4">
                  <Meta label="Autore" value="La Via Italiana" />
                  <Meta label="Periodo" value="1891–1937" />
                  <Meta label="Livello" value="Monografico" />
                  <Meta label="Lettura" value="60–75 minuti" />
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

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Criterio di lettura
                </div>

                <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                  I concetti vengono collocati nel momento storico in cui
                  maturano. Il Gramsci dei Quaderni non viene proiettato
                  artificialmente sul giovane militante dell’Ordine Nuovo.
                </p>
              </div>
            </aside>

            <div className="article-content">
              <Section
                id="introduzione"
                num="Introduzione"
                title="Gramsci come problema, non come raccolta di citazioni"
              >
                <p>
                  Antonio Gramsci è uno degli autori italiani più citati del
                  Novecento e, proprio per questo, uno dei più facilmente
                  semplificati. Espressioni come egemonia, società civile,
                  intellettuali organici o guerra di posizione vengono spesso
                  estratte dal loro contesto e trasformate in formule generiche.
                  Il risultato può essere un Gramsci molto diverso da quello
                  che emerge leggendo il suo percorso politico e i suoi scritti.
                </p>

                <p>
                  La prima cautela consiste nel riconoscere che il suo pensiero
                  non nasce già completo. Tra il giovane socialista che osserva
                  le fabbriche torinesi e il prigioniero che compila i Quaderni
                  trascorrono anni di rivoluzione, sconfitte, nascita del
                  comunismo organizzato, ascesa del fascismo e discussioni
                  internazionali dentro il movimento comunista.
                </p>

                <p>
                  È precisamente questa esperienza storica a rendere la sua
                  riflessione interessante. Gramsci deve affrontare un problema
                  enorme: perché la crisi europea successiva alla Prima guerra
                  mondiale non ha prodotto in Occidente ciò che si era verificato
                  nella Russia del 1917? Perché, nonostante grandi movimenti
                  operai e profonde tensioni sociali, gli Stati occidentali
                  mostrano una capacità di resistenza molto maggiore?
                </p>

                <p>
                  Da questa domanda nascerà gradualmente un’analisi del potere
                  molto più complessa della semplice contrapposizione tra
                  classe dominante e apparato repressivo. Cultura, consenso,
                  organizzazioni sociali, intellettuali, scuola, religione,
                  partiti e senso comune diventano parti essenziali del problema.
                </p>

                <InfoBox title="La domanda centrale">
                  Come può una classe sociale passare dalla difesa dei propri
                  interessi particolari alla capacità di dirigere politicamente
                  e culturalmente una società intera?
                </InfoBox>
              </Section>

              <Section
                id="formazione"
                num="01"
                title="Sardegna, disuguaglianza e formazione politica"
              >
                <p>
                  Gramsci nasce ad Ales, in Sardegna, nel 1891. La sua infanzia
                  si svolge in un contesto molto distante dalla grande industria
                  settentrionale che incontrerà successivamente a Torino.
                  La Sardegna dei primi anni del Novecento è segnata da povertà,
                  marginalità economica e forti squilibri nei rapporti con il
                  resto del Paese.
                </p>

                <p>
                  Non sarebbe corretto sostenere che tutta la futura teoria
                  gramsciana derivi direttamente dall’esperienza sarda.
                  Tuttavia quella provenienza contribuisce a renderlo
                  particolarmente sensibile alla struttura territoriale
                  diseguale dello Stato italiano. Il problema del Mezzogiorno
                  non gli apparirà mai come una semplice questione locale.
                </p>

                <p>
                  Nel 1911 ottiene una borsa di studio e si trasferisce a
                  Torino. Lo spostamento è intellettualmente decisivo:
                  dall’isola prevalentemente agricola passa a uno dei centri
                  più avanzati dell’industrializzazione italiana.
                </p>

                <p>
                  All’Università frequenta corsi di linguistica, filosofia,
                  storia e letteratura. Non completa il percorso accademico,
                  ma la formazione universitaria lascia una traccia profonda:
                  il futuro dirigente comunista non sarà mai interessato
                  soltanto all’economia politica. Lingua, cultura, letteratura
                  e formazione delle mentalità rimarranno problemi centrali.
                </p>

                <WhyBox>
                  Questa formazione aiuta a capire perché nei Quaderni la
                  politica venga studiata insieme alla cultura. Per Gramsci
                  un rapporto di potere non vive soltanto nelle fabbriche
                  o nei ministeri: vive anche nel modo in cui una società
                  comprende se stessa.
                </WhyBox>
              </Section>

              <Section
                id="torino"
                num="02"
                title="Torino industriale: la fabbrica come laboratorio politico"
              >
                <p>
                  La Torino incontrata da Gramsci è una città trasformata
                  dall’industrializzazione. La crescita della FIAT e della
                  grande industria metallurgica concentra migliaia di lavoratori
                  in stabilimenti nei quali l’organizzazione della produzione
                  assume forme sempre più moderne.
                </p>

                <p>
                  La fabbrica non è soltanto un luogo economico. Produce
                  disciplina, gerarchie, competenze e forme di cooperazione.
                  Centinaia o migliaia di persone devono coordinare il proprio
                  lavoro all’interno dello stesso processo produttivo.
                  Per il giovane Gramsci questa organizzazione contiene una
                  potenzialità politica.
                </p>

                <p>
                  L’operaio moderno non è infatti necessariamente un individuo
                  isolato. È inserito in una struttura produttiva collettiva.
                  La questione diventa allora comprendere se questa cooperazione,
                  organizzata dal capitale per produrre merci, possa diventare
                  anche una scuola di capacità collettiva per i lavoratori.
                </p>

                <p>
                  Qui si trova una differenza fondamentale rispetto a una
                  politica limitata alla sola rivendicazione salariale.
                  L’obiettivo non dovrebbe essere soltanto ottenere una quota
                  maggiore del reddito prodotto: occorre interrogarsi su chi
                  organizza la produzione, chi decide e quali capacità devono
                  sviluppare i lavoratori per diventare forza dirigente.
                </p>

                <CompareBox
                  leftTitle="Conflitto economico"
                  left="Salario, orario, condizioni di lavoro, contratto."
                  rightTitle="Problema politico"
                  right="Capacità dei lavoratori di organizzare, dirigere e trasformare la produzione e la società."
                />
              </Section>

              <Section
                id="socialismo"
                num="03"
                title="Dentro il Partito Socialista Italiano"
              >
                <p>
                  Gramsci aderisce al PSI nel 1913. Il socialismo italiano
                  dell’epoca è però tutt’altro che unitario. Al suo interno
                  convivono riformisti, rivoluzionari, sindacalisti e
                  orientamenti teorici differenti.
                </p>

                <p>
                  La Prima guerra mondiale accentua le divisioni. Gramsci
                  appartiene alla generazione politica che assiste al crollo
                  della Seconda Internazionale e alla scelta di numerosi
                  partiti socialisti europei di sostenere i rispettivi
                  governi durante il conflitto.
                </p>

                <p>
                  La guerra produce quindi non soltanto una tragedia sociale,
                  ma anche una crisi teorica del socialismo europeo.
                  Se organizzazioni che proclamavano l’internazionalismo
                  operaio possono sostenere una guerra tra Stati nazionali,
                  diventa necessario interrogarsi sulla qualità della loro
                  direzione politica.
                </p>

                <p>
                  Da questo punto di vista la successiva Rivoluzione russa
                  apparirà a Gramsci e a molti giovani socialisti come la
                  dimostrazione che una rottura con la tradizione socialista
                  precedente sia possibile.
                </p>
              </Section>

              <Section
                id="ordine-nuovo"
                num="04"
                title="L’Ordine Nuovo: non soltanto un giornale"
              >
                <p>
                  Nel 1919 Gramsci fonda L’Ordine Nuovo insieme a Palmiro
                  Togliatti, Angelo Tasca e Umberto Terracini. Il periodico
                  nasce in un momento eccezionale: la guerra è terminata,
                  la Rivoluzione russa sembra aprire una nuova fase mondiale
                  e in Italia la conflittualità sociale cresce rapidamente.
                </p>

                <p>
                  L’Ordine Nuovo diventa progressivamente qualcosa di più
                  di una rivista culturale socialista. Interviene direttamente
                  nel movimento operaio torinese e sostiene lo sviluppo dei
                  consigli di fabbrica.
                </p>

                <p>
                  La scelta è significativa. Invece di attendere esclusivamente
                  decisioni provenienti dagli apparati centrali del PSI,
                  il gruppo torinese cerca dentro la struttura produttiva
                  organismi attraverso i quali i lavoratori possano sviluppare
                  nuove capacità.
                </p>

                <p>
                  Il giornale svolge quindi una funzione di elaborazione,
                  educazione e organizzazione. Questa combinazione anticipa
                  un tema che rimarrà centrale nel pensiero gramsciano:
                  le idee diventano forza politica quando sono collegate
                  a organizzazioni e gruppi sociali concreti.
                </p>
              </Section>

              <Section
                id="consigli"
                num="05"
                title="I consigli di fabbrica: governare, non soltanto protestare"
              >
                <p>
                  Il movimento dei consigli di fabbrica costituisce una delle
                  esperienze decisive del giovane Gramsci. I consigli si
                  sviluppano a partire dalle commissioni interne già presenti
                  negli stabilimenti, ma nella lettura ordinovista dovrebbero
                  acquistare una funzione molto più ampia.
                </p>

                <p>
                  Il sindacato rappresenta il lavoratore nel rapporto
                  contrattuale con il capitale. Il consiglio viene invece
                  pensato come organismo legato direttamente alla struttura
                  produttiva, potenzialmente capace di includere i lavoratori
                  in quanto produttori.
                </p>

                <p>
                  Questa distinzione è politicamente importante. Una classe
                  che voglia sostituire la classe dirigente esistente non
                  può limitarsi a essere eccellente nell’opposizione.
                  Deve dimostrare capacità di organizzazione e governo.
                </p>

                <p>
                  Per questo Gramsci attribuisce ai consigli una funzione
                  educativa. Partecipare all’organizzazione della fabbrica
                  significa imparare a decidere, coordinare attività,
                  assumersi responsabilità e sviluppare una coscienza che
                  vada oltre il singolo mestiere.
                </p>

                <p>
                  L’esperienza avrà però limiti evidenti. Il movimento rimane
                  territorialmente concentrato e non riesce a trasformarsi
                  in una struttura politica nazionale capace di modificare
                  il rapporto di forza complessivo.
                </p>

                <WhyBox>
                  Qui compare già uno dei grandi problemi gramsciani:
                  una classe subalterna diventa dirigente soltanto quando
                  sviluppa capacità positive di governo, non quando sa
                  esclusivamente opporsi alla classe dominante.
                </WhyBox>
              </Section>

              <Section
                id="biennio"
                num="06"
                title="Il Biennio rosso e il problema della sconfitta"
              >
                <p>
                  Tra il 1919 e il 1920 scioperi, agitazioni contadine,
                  occupazioni delle terre e conflitti industriali attraversano
                  l’Italia. L’occupazione delle fabbriche del 1920 sembra
                  mostrare la possibilità di una rottura profonda.
                </p>

                <p>
                  Eppure quella mobilitazione non conduce a una rivoluzione.
                  Questa constatazione è teoricamente più importante del
                  semplice racconto degli eventi. Una grande intensità del
                  conflitto sociale non equivale automaticamente alla
                  disponibilità di una maggioranza politica rivoluzionaria.
                </p>

                <p>
                  Il movimento operaio è diviso. Il PSI dispone di enormi
                  consensi ma non possiede una strategia condivisa.
                  Sindacato, massimalisti, riformisti e comunisti interpretano
                  diversamente il significato della mobilitazione.
                </p>

                <p>
                  Inoltre lo Stato liberale italiano, pur attraversato da
                  una crisi grave, non è semplicemente scomparso. Mantiene
                  istituzioni, apparati amministrativi, forze coercitive,
                  relazioni con i gruppi economici e legami con settori
                  molto ampi della società.
                </p>

                <p>
                  La futura riflessione gramsciana nascerà anche dalla
                  necessità di comprendere questa differenza: una crisi
                  economica può aprire possibilità politiche, ma non determina
                  meccanicamente quale forza saprà utilizzarle.
                </p>
              </Section>

              <Section
                id="rivoluzione-russa"
                num="07"
                title="La Rivoluzione russa e la critica alla storia automatica"
              >
                <p>
                  La Rivoluzione russa esercita su Gramsci un fascino enorme.
                  Non soltanto perché porta i bolscevichi al potere, ma perché
                  sembra contraddire una lettura rigidamente evoluzionista
                  del marxismo.
                </p>

                <p>
                  Secondo una versione semplificata del materialismo storico,
                  una società avrebbe dovuto attraversare una successione
                  quasi obbligata di stadi economici prima di poter porre
                  il problema socialista. La Russia, relativamente arretrata,
                  sembra infrangere questo schema.
                </p>

                <p>
                  Gramsci insiste quindi sul ruolo dell’iniziativa politica,
                  dell’organizzazione e della volontà collettiva. Questo non
                  significa negare le condizioni materiali. Significa rifiutare
                  l’idea che esse producano automaticamente un risultato
                  politico predeterminato.
                </p>

                <p>
                  Questa critica al determinismo verrà approfondita nei
                  Quaderni attraverso la nozione di filosofia della prassi.
                </p>

                <InfoBox title="Attenzione">
                  Antideterminismo non significa volontarismo assoluto.
                  Per Gramsci la volontà politica agisce dentro rapporti
                  storici concreti: non può inventare liberamente le condizioni
                  nelle quali opera.
                </InfoBox>
              </Section>

              <Section
                id="livorno"
                num="08"
                title="Livorno 1921: Gramsci fondatore, ma non ancora dirigente egemone"
              >
                <p>
                  Gramsci partecipa alla formazione della frazione comunista
                  e alla nascita del PCd’I nel gennaio 1921. Sarebbe però
                  storicamente sbagliato rappresentarlo come il principale
                  leader del nuovo partito sin dal primo momento.
                </p>

                <p>
                  La figura organizzativamente dominante è Amadeo Bordiga.
                  La sua corrente dispone di una struttura nazionale più
                  consolidata e di una linea politica molto definita.
                </p>

                <p>
                  Il gruppo dell’Ordine Nuovo porta nel nuovo partito
                  l’esperienza torinese dei consigli e un’elaborazione
                  originale, ma inizialmente accetta un equilibrio nel quale
                  la direzione bordighiana è prevalente.
                </p>

                <p>
                  Questo elemento è essenziale per capire che la successiva
                  linea gramsciana nasce attraverso una revisione critica
                  dell’esperienza iniziale del PCd’I, non come semplice
                  prosecuzione lineare del 1921.
                </p>
              </Section>

              <Section
                id="bordiga"
                num="09"
                title="Bordiga e Gramsci: due problemi diversi del partito"
              >
                <p>
                  Bordiga concepisce il partito come organizzazione
                  rivoluzionaria fortemente centralizzata, selettiva e
                  capace di conservare autonomia teorica anche quando le
                  masse assumono orientamenti differenti.
                </p>

                <p>
                  La sua preoccupazione fondamentale è evitare che il
                  partito venga assorbito dal parlamentarismo, dal riformismo
                  o da alleanze capaci di diluirne il programma rivoluzionario.
                </p>

                <p>
                  Gramsci condivide inizialmente la necessità della rottura
                  comunista, ma inizia progressivamente a vedere un altro
                  rischio: un partito teoricamente puro ma politicamente
                  isolato può essere incapace di dirigere processi reali.
                </p>

                <p>
                  Il conflitto tra i due non va dunque banalizzato come
                  moderato contro radicale. Entrambi rimangono comunisti
                  rivoluzionari. La divergenza riguarda soprattutto la
                  relazione tra partito, masse, alleanze, tattica e
                  costruzione della direzione politica.
                </p>

                <CompareBox
                  leftTitle="Bordiga"
                  left="Difendere autonomia, programma e continuità rivoluzionaria del partito."
                  rightTitle="Gramsci"
                  right="Costruire una forza capace di dirigere concretamente gruppi sociali più ampi."
                />
              </Section>

              <Section
                id="comintern"
                num="10"
                title="Il Comintern e il problema del fronte unico"
              >
                <p>
                  Anche l’Internazionale Comunista modifica rapidamente
                  la propria tattica. Dopo l’ondata rivoluzionaria immediatamente
                  successiva alla guerra, diventa evidente che in diversi
                  Paesi europei la conquista del potere non è imminente.
                </p>

                <p>
                  Da qui nasce la proposta del fronte unico: i comunisti
                  devono mantenere la propria autonomia ma cercare forme
                  di azione comune con altri settori del movimento operaio
                  su obiettivi concreti.
                </p>

                <p>
                  Bordiga guarda con diffidenza a questa tattica.
                  Gramsci progressivamente la considera uno strumento
                  necessario per evitare l’isolamento.
                </p>

                <p>
                  Dietro la discussione tattica emerge una questione teorica:
                  un partito rivoluzionario deve limitarsi a rappresentare
                  il settore già comunista della società oppure deve tentare
                  di conquistare politicamente gruppi che ancora non condividono
                  il suo programma?
                </p>
              </Section>

              <Section
                id="svolta"
                num="11"
                title="1923–1924: Gramsci costruisce una nuova linea"
              >
                <p>
                  Tra il soggiorno a Mosca, il periodo viennese e il ritorno
                  in Italia, Gramsci rivede sempre più chiaramente la linea
                  seguita dal PCd’I nei primi anni.
                </p>

                <p>
                  Il fascismo ha ormai conquistato il governo e sta
                  trasformando radicalmente il sistema politico. La precedente
                  previsione di una rapida ripresa rivoluzionaria appare
                  sempre meno sostenibile.
                </p>

                <p>
                  Gramsci ritiene che il partito debba diventare una forza
                  nazionale capace di intervenire nelle contraddizioni
                  concrete della società italiana. Ciò comporta studio
                  delle classi sociali, rapporti con altri settori popolari
                  e costruzione di un gruppo dirigente differente.
                </p>

                <p>
                  Nel 1924 viene eletto deputato e diventa segretario del
                  PCd’I. La svolta non è semplicemente organizzativa:
                  segna il tentativo di modificare la funzione stessa
                  del partito.
                </p>
              </Section>

              <Section
                id="unita"
                num="12"
                title="l’Unità: perché un partito rivoluzionario ha bisogno di un giornale nazionale"
              >
                <p>
                  Nel 1924 nasce l’Unità. Il nome stesso richiama il problema
                  politico che Gramsci considera decisivo: costruire un
                  collegamento tra settori sociali e territoriali diversi.
                </p>

                <p>
                  Un giornale di partito non serve soltanto a comunicare
                  decisioni. Se concepito come strumento politico, organizza
                  un linguaggio comune, seleziona problemi, interpreta
                  avvenimenti e mette in relazione esperienze locali.
                </p>

                <p>
                  In questa funzione è già possibile riconoscere un tema
                  centrale della futura teoria gramsciana: la politica
                  richiede produzione di cultura e organizzazione del modo
                  in cui le persone interpretano la realtà.
                </p>
              </Section>

              <Section
                id="fascismo"
                num="13"
                title="Capire il fascismo oltre l’idea di semplice reazione"
              >
                <p>
                  L’ascesa del fascismo obbliga i comunisti italiani a
                  confrontarsi con un fenomeno che non può essere spiegato
                  soltanto come violenza al servizio degli industriali
                  o dei proprietari agrari.
                </p>

                <p>
                  Lo squadrismo dispone certamente dell’appoggio di settori
                  delle classi proprietarie e beneficia della crisi dello
                  Stato liberale, ma costruisce anche organizzazioni, miti,
                  mobilitazione politica e consenso in settori della società.
                </p>

                <p>
                  Per Gramsci diventa quindi necessario analizzare il
                  fascismo come soluzione politica a una crisi di direzione
                  delle classi dominanti e, contemporaneamente, come capacità
                  di mobilitare ceti sociali che non si riconoscono più
                  nelle forme precedenti della politica liberale.
                </p>

                <p>
                  Questa attenzione prepara la futura nozione di crisi
                  organica: una situazione nella quale i vecchi rapporti
                  di rappresentanza si indeboliscono e gruppi sociali
                  significativi smettono di riconoscersi nei partiti
                  tradizionali.
                </p>
              </Section>

              <Section
                id="lione"
                num="14"
                title="Le Tesi di Lione: il partito deve comprendere l’Italia reale"
              >
                <p>
                  Nel gennaio 1926 il III Congresso del PCd’I si svolge
                  a Lione, fuori dall’Italia a causa della repressione
                  fascista. La linea del nuovo gruppo dirigente legato a
                  Gramsci prevale nettamente.
                </p>

                <p>
                  Le Tesi di Lione rappresentano un salto importante perché
                  tentano di collegare strategia comunista e analisi concreta
                  della formazione sociale italiana.
                </p>

                <p>
                  L’Italia non viene trattata come una copia imperfetta
                  di altri Paesi. Bisogna comprenderne sviluppo capitalistico,
                  struttura agraria, differenze territoriali, peso della
                  Chiesa, composizione delle classi e caratteristiche
                  dello Stato.
                </p>

                <p>
                  In questo quadro il proletariato industriale settentrionale
                  non può pensare di diventare forza dirigente semplicemente
                  perché occupa una posizione centrale nella produzione.
                  Deve costruire alleanze.
                </p>

                <p>
                  La capacità rivoluzionaria non deriva quindi automaticamente
                  dalla collocazione economica. Richiede una strategia
                  politica capace di trasformare una classe particolare
                  in forza nazionale.
                </p>

                <WhyBox>
                  A Lione compare con grande chiarezza il problema che
                  accompagnerà tutta la riflessione successiva: trasformare
                  una posizione sociale in capacità di direzione politica.
                </WhyBox>
              </Section>

              <Section
                id="meridionale"
                num="15"
                title="La questione meridionale non è una questione periferica"
              >
                <p>
                  Per Gramsci il divario tra Nord industriale e Sud agricolo
                  non è semplicemente una differenza nei livelli di reddito.
                  È parte della struttura storica attraverso la quale si
                  è formato lo Stato italiano.
                </p>

                <p>
                  La borghesia settentrionale ha potuto costruire la propria
                  direzione nazionale anche attraverso un compromesso con
                  gruppi proprietari meridionali. Questo sistema contribuisce
                  a mantenere le masse contadine in una posizione subordinata.
                </p>

                <p>
                  Di conseguenza, la classe operaia settentrionale non può
                  limitarsi a rivendicare benefici per sé stessa. Se vuole
                  diventare classe dirigente deve assumere come proprio
                  il problema dell’emancipazione delle masse contadine.
                </p>

                <p>
                  Questo passaggio è teoricamente enorme. Una politica
                  meramente corporativa difende il proprio gruppo.
                  Una politica egemonica deve invece formulare una proposta
                  capace di unificare interessi differenti dentro una
                  prospettiva comune.
                </p>

                <p>
                  La questione meridionale diventa così una prova concreta
                  della capacità del proletariato di superare il proprio
                  particolare interesse immediato.
                </p>
              </Section>

              <Section
                id="intellettuali-pre"
                num="16"
                title="Gli intellettuali meridionali e la mediazione del potere"
              >
                <p>
                  Nel saggio sulla questione meridionale Gramsci presta
                  particolare attenzione agli intellettuali. È un’anticipazione
                  decisiva di una riflessione che nei Quaderni diventerà
                  molto più ampia.
                </p>

                <p>
                  Tra grandi proprietari e masse contadine esistono figure
                  professionali, amministrative, religiose e culturali che
                  svolgono funzioni di mediazione. Avvocati, funzionari,
                  insegnanti, sacerdoti e notabili contribuiscono a organizzare
                  socialmente il potere.
                </p>

                <p>
                  Il dominio di una classe non avviene quindi soltanto
                  attraverso ordini impartiti dall’alto. Richiede persone
                  capaci di amministrare, spiegare, giustificare, educare
                  e collegare la struttura dominante ai gruppi subordinati.
                </p>

                <p>
                  Da qui nascerà la futura teoria degli intellettuali come
                  funzione sociale, molto più ampia della figura tradizionale
                  dello scrittore o del professore.
                </p>
              </Section>

              <Section
                id="arresto"
                num="17"
                title="L’arresto: la politica viene interrotta, la ricerca no"
              >
                <p>
                  Nel novembre 1926, con il definitivo consolidamento
                  della dittatura fascista, Gramsci viene arrestato
                  nonostante la sua condizione di deputato.
                </p>

                <p>
                  Nel 1928 il Tribunale speciale lo condanna a una lunga
                  pena detentiva. Le condizioni carcerarie e i problemi
                  di salute limiteranno progressivamente la sua capacità
                  di lavorare.
                </p>

                <p>
                  Il carcere produce però un cambiamento nella forma
                  dell’attività intellettuale. Gramsci non può più svolgere
                  direttamente il lavoro del dirigente politico e inizia
                  una ricerca molto più vasta sui problemi storici,
                  culturali e teorici incontrati durante l’esperienza precedente.
                </p>

                <p>
                  I Quaderni non sono quindi una fuga dalla politica.
                  Sono un tentativo di ripensarne le fondamenta dopo una
                  sconfitta storica di enorme portata.
                </p>
              </Section>

              <Section
                id="quaderni"
                num="18"
                title="I Quaderni del carcere: un laboratorio, non un manuale"
              >
                <p>
                  Dal 1929 Gramsci inizia sistematicamente a riempire
                  una serie di quaderni con appunti, note, schemi,
                  riscritture e approfondimenti.
                </p>

                <p>
                  È essenziale ricordare che i Quaderni non costituiscono
                  un libro unitario preparato dall’autore per la pubblicazione.
                  Numerosi temi vengono affrontati più volte e le formulazioni
                  successive possono modificare quelle precedenti.
                </p>

                <p>
                  Per questo la filologia gramsciana è importante.
                  Leggere una singola frase senza sapere quando è stata
                  scritta, se è stata riscritta e quale relazione possiede
                  con altri appunti può generare interpretazioni fuorvianti.
                </p>

                <p>
                  Il materiale è vastissimo: storia italiana, Risorgimento,
                  filosofia, Machiavelli, letteratura, giornalismo, linguistica,
                  Chiesa, scuola, americanismo, organizzazione industriale,
                  partiti, intellettuali e Stato.
                </p>

                <p>
                  Questa varietà non indica dispersione casuale.
                  Gran parte della ricerca ruota attorno a una domanda comune:
                  come si costituisce e si mantiene una direzione politica
                  nella complessa società moderna?
                </p>

                <InfoBox title="Da ricordare">
                  Parlare del “pensiero dei Quaderni” richiede cautela:
                  siamo davanti a un cantiere teorico interrotto dalla
                  malattia e dalla morte dell’autore, non a un sistema
                  chiuso e definitivamente ordinato.
                </InfoBox>
              </Section>

              <Section
                id="filosofia-prassi"
                num="19"
                title="Filosofia della prassi: un marxismo non meccanico"
              >
                <p>
                  Nei Quaderni Gramsci utilizza frequentemente l’espressione
                  filosofia della prassi. La formula consente anche di
                  aggirare la censura carceraria, ma non può essere ridotta
                  a un semplice codice per scrivere la parola marxismo.
                </p>

                <p>
                  Essa esprime infatti una lettura nella quale attività
                  umana, storia e rapporti sociali sono inseparabili.
                  Le strutture economiche impongono condizioni reali,
                  ma gli uomini agiscono politicamente dentro tali condizioni.
                </p>

                <p>
                  Una trasformazione sociale non deriva automaticamente
                  dallo sviluppo delle forze produttive. È necessaria
                  la costituzione di soggetti organizzati capaci di
                  interpretare la situazione, costruire alleanze e intervenire.
                </p>

                <p>
                  In questo senso il marxismo gramsciano vuole evitare
                  tanto l’economicismo quanto un idealismo che immagini
                  la politica completamente indipendente dai rapporti materiali.
                </p>
              </Section>

              <Section
                id="egemonia"
                num="20"
                title="Egemonia: la capacità di diventare classe dirigente"
              >
                <p>
                  Egemonia è probabilmente il termine gramsciano più noto,
                  ma anche quello più facilmente deformato. Non significa
                  semplicemente comunicazione efficace, propaganda o
                  controllo dei media.
                </p>

                <p>
                  Una classe è egemone quando riesce a esercitare una
                  direzione che viene riconosciuta, almeno in una certa misura,
                  anche da gruppi differenti da quello che costituisce
                  la sua base immediata.
                </p>

                <p>
                  Per riuscirci non basta convincere verbalmente gli altri.
                  Occorre costruire un sistema di alleanze, assumere problemi
                  generali della società, fare concessioni compatibili con
                  il proprio ruolo dirigente e proporre una visione del mondo
                  capace di apparire universalizzabile.
                </p>

                <p>
                  L’egemonia possiede quindi una dimensione materiale,
                  politica e culturale. Una classe dirigente organizza
                  istituzioni, distribuisce risorse, forma quadri,
                  produce cultura e struttura il senso comune.
                </p>

                <p>
                  Questo permette di comprendere il passaggio dalla classe
                  economico-corporativa alla classe politicamente dirigente.
                  Difendere il proprio salario o il proprio profitto significa
                  agire sul terreno corporativo. Costruire un progetto
                  complessivo di società significa tentare una funzione egemonica.
                </p>

                <WhyBox>
                  L’egemonia risponde alla domanda: perché persone che
                  appartengono a gruppi sociali differenti possono accettare
                  la direzione politica di una determinata classe?
                </WhyBox>
              </Section>

              <Section
                id="consenso"
                num="21"
                title="Consenso e coercizione: il potere moderno utilizza entrambi"
              >
                <p>
                  Una lettura superficiale oppone spesso consenso e forza
                  come se Gramsci sostenesse che nelle democrazie moderne
                  il potere funzioni soltanto attraverso il consenso.
                  Non è così.
                </p>

                <p>
                  Ogni Stato possiede strumenti coercitivi: diritto,
                  sanzioni, polizia, amministrazione, tribunali e,
                  in ultima istanza, forza armata.
                </p>

                <p>
                  La peculiarità delle società moderne consiste nel fatto
                  che la stabilità politica non dipende normalmente dal
                  ricorso permanente alla coercizione. Un ordine è più
                  solido quando una parte importante della popolazione
                  considera legittime o normali le sue istituzioni.
                </p>

                <p>
                  Il consenso non elimina quindi la coercizione.
                  I due elementi sono combinati in proporzioni variabili.
                  È questo intreccio che rende il potere molto più resistente
                  di un semplice comando imposto dall’alto.
                </p>

                <CompareBox
                  leftTitle="Dominio"
                  left="Possibilità di imporre decisioni anche attraverso strumenti coercitivi."
                  rightTitle="Direzione"
                  right="Capacità di costruire consenso, alleanze e una visione politica riconosciuta."
                />
              </Section>

              <Section
                id="societa-civile"
                num="22"
                title="Società civile: le trincee che proteggono il potere"
              >
                <p>
                  Nella riflessione gramsciana la società civile comprende
                  un insieme molto articolato di organizzazioni e istituzioni:
                  Chiesa, associazioni, sindacati, scuole, giornali,
                  organizzazioni culturali e altri corpi sociali.
                </p>

                <p>
                  Questi organismi vengono spesso definiti privati perché
                  non appartengono formalmente all’apparato governativo.
                  Politicamente, però, contribuiscono alla formazione delle
                  convinzioni, delle identità e del consenso.
                </p>

                <p>
                  La scuola, ad esempio, non insegna soltanto competenze.
                  Contribuisce a formare modi di pensare, linguaggi,
                  comportamenti e una determinata idea della cittadinanza.
                  Analogamente un giornale non si limita a riferire fatti:
                  seleziona ciò che viene considerato rilevante e propone
                  categorie per interpretarlo.
                </p>

                <p>
                  Per questo nelle società occidentali la presa dell’edificio
                  governativo non equivale alla conquista dell’intera società.
                  Esiste una rete di organizzazioni capace di sopravvivere
                  a una crisi del governo e di continuare a produrre
                  orientamenti, valori e identità.
                </p>

                <p>
                  La metafora delle trincee serve proprio a rappresentare
                  questa profondità della struttura sociale.
                </p>
              </Section>

              <Section
                id="stato-integrale"
                num="23"
                title="Lo Stato integrale: molto più del governo"
              >
                <p>
                  La teoria della società civile porta Gramsci ad ampliare
                  radicalmente la nozione di Stato. Se si identifica lo Stato
                  esclusivamente con governo, polizia, amministrazione e
                  tribunali, una parte essenziale del potere rimane invisibile.
                </p>

                <p>
                  La classe dirigente esercita infatti la propria funzione
                  sia negli apparati direttamente statali sia attraverso
                  organizzazioni della società civile.
                </p>

                <p>
                  Da qui deriva la celebre idea dello Stato come combinazione
                  di società politica e società civile, ovvero di coercizione
                  e direzione egemonica.
                </p>

                <p>
                  L’importanza strategica è evidente. Se lo Stato moderno
                  è così esteso, anche la trasformazione politica deve
                  misurarsi con una struttura molto più ampia rispetto
                  alla semplice macchina governativa.
                </p>

                <WhyBox>
                  La rivoluzione non può essere pensata esclusivamente
                  come sostituzione di chi occupa il vertice dello Stato:
                  implica una modificazione dei rapporti di forza diffusi
                  nell’intera società.
                </WhyBox>
              </Section>

              <Section
                id="intellettuali"
                num="24"
                title="Gli intellettuali non sono soltanto professori e scrittori"
              >
                <p>
                  Gramsci estende enormemente il significato politico
                  dell’intellettuale. Ogni società moderna ha bisogno
                  di persone che organizzino, amministrino, elaborino,
                  insegnino e colleghino gruppi sociali e istituzioni.
                </p>

                <p>
                  Un tecnico, un organizzatore, un funzionario, un dirigente,
                  un insegnante o un giornalista possono svolgere funzioni
                  intellettuali anche senza appartenere alla tradizionale
                  élite letteraria.
                </p>

                <p>
                  La distinzione tra intellettuali tradizionali e organici
                  permette di analizzare il rapporto di queste figure
                  con i gruppi sociali. Gli intellettuali tradizionali
                  tendono a percepirsi come autonomi e continui nel tempo;
                  quelli organici emergono più direttamente dalle esigenze
                  organizzative di un gruppo sociale.
                </p>

                <p>
                  Una nuova classe dirigente deve quindi produrre propri
                  organizzatori e propri interpreti. Senza questa capacità
                  rimane dipendente culturalmente dalle categorie elaborate
                  dalla classe precedente.
                </p>

                <p>
                  La battaglia culturale non consiste allora nell’occupare
                  qualche spazio mediatico, ma nel produrre capacità autonoma
                  di conoscenza, organizzazione e direzione.
                </p>
              </Section>

              <Section
                id="principe"
                num="25"
                title="Il moderno Principe: il partito come costruttore di volontà collettiva"
              >
                <p>
                  Nei Quaderni Gramsci riprende Machiavelli e interpreta
                  il Principe in chiave moderna. Nella politica di massa
                  non può più essere una singola persona a svolgere
                  la funzione attribuita da Machiavelli al principe.
                </p>

                <p>
                  Tale funzione deve essere assunta da un organismo collettivo:
                  il partito politico.
                </p>

                <p>
                  Il partito non è però soltanto una macchina elettorale
                  né un ufficio incaricato di trasmettere ordini.
                  Deve contribuire a unificare gruppi sociali, elaborare
                  una strategia e trasformare aspirazioni frammentate
                  in una volontà politica relativamente coerente.
                </p>

                <p>
                  Questo collega direttamente teoria del partito ed egemonia:
                  l’organizzazione politica serve a trasformare una pluralità
                  di interessi in un progetto capace di assumere dimensione generale.
                </p>
              </Section>

              <Section
                id="guerra"
                num="26"
                title="Guerra di movimento e guerra di posizione"
              >
                <p>
                  Gramsci utilizza categorie tratte dal linguaggio militare
                  per descrivere differenti forme del conflitto politico.
                  Non intende ridurre la politica alla guerra, ma costruire
                  un’analogia capace di mostrare differenze strategiche.
                </p>

                <p>
                  La guerra di movimento indica una fase nella quale
                  l’offensiva diretta può rapidamente modificare il centro
                  del potere. La Rivoluzione russa costituisce il principale
                  riferimento storico di questa possibilità.
                </p>

                <p>
                  La guerra di posizione riguarda invece società nelle quali
                  le strutture di consenso e organizzazione sono profonde.
                  Qui l’avanzamento richiede un conflitto prolungato:
                  costruzione di organizzazioni, conquista di consenso,
                  formazione di quadri e modifica delle alleanze sociali.
                </p>

                <p>
                  Non significa abbandonare il problema del potere.
                  Significa riconoscere che il momento della conquista
                  dello Stato non può essere separato dalla trasformazione
                  dei rapporti di forza che lo circondano.
                </p>

                <p>
                  Una forza incapace di costruire egemonia nella società
                  potrebbe anche approfittare temporaneamente di una crisi
                  dello Stato, ma avrebbe enormi difficoltà a stabilizzare
                  un nuovo ordine.
                </p>
              </Section>

              <Section
                id="occidente"
                num="27"
                title="Perché la Russia del 1917 non può essere copiata in Occidente"
              >
                <p>
                  Questo è uno dei passaggi più rilevanti dell’intera
                  elaborazione gramsciana. La strategia politica deve
                  dipendere dalla struttura concreta della società nella
                  quale opera.
                </p>

                <p>
                  Nella Russia zarista la società civile era, nella lettura
                  gramsciana, relativamente meno sviluppata rispetto
                  all’apparato statale. Una crisi dello Stato poteva quindi
                  produrre conseguenze molto rapide.
                </p>

                <p>
                  In Europa occidentale la situazione è differente.
                  Partiti, Chiese, sindacati, associazioni, parlamenti,
                  giornali, scuole e organizzazioni economiche formano
                  una struttura sociale molto più densa.
                </p>

                <p>
                  Persino quando il governo entra in crisi, queste strutture
                  continuano a esistere. Possono assorbire conflitti,
                  riprodurre consenso e riorganizzare la classe dirigente.
                </p>

                <p>
                  Copiare meccanicamente una strategia sviluppata nella
                  Russia del 1917 significherebbe quindi ignorare la
                  specificità dell’Occidente.
                </p>

                <InfoBox title="Il nodo strategico">
                  La teoria rivoluzionaria deve essere universale nei suoi
                  problemi, ma concreta nelle forme attraverso cui affronta
                  ogni società.
                </InfoBox>
              </Section>

              <Section
                id="rivoluzione-passiva"
                num="28"
                title="Rivoluzione passiva: cambiare per conservare"
              >
                <p>
                  La categoria di rivoluzione passiva serve a Gramsci
                  per studiare trasformazioni storiche nelle quali avvengono
                  cambiamenti reali senza che le masse popolari assumano
                  autonomamente la direzione del processo.
                </p>

                <p>
                  Le élite possono introdurre riforme, incorporare una parte
                  delle richieste provenienti dal basso e modernizzare
                  lo Stato proprio per evitare una rottura più radicale.
                </p>

                <p>
                  Non siamo dunque davanti alla pura immobilità.
                  La società cambia, ma il cambiamento viene organizzato
                  in modo tale da preservare la direzione dei gruppi dominanti.
                </p>

                <p>
                  Questa categoria consente a Gramsci di analizzare fenomeni
                  molto diversi, a partire dal Risorgimento, e mostra ancora
                  una volta perché la politica non possa essere rappresentata
                  soltanto come scontro frontale tra rivoluzione e conservazione.
                </p>
              </Section>

              <Section
                id="blocco-storico"
                num="29"
                title="Blocco storico: economia, cultura e politica non vivono separate"
              >
                <p>
                  Il concetto di blocco storico impedisce di dividere
                  meccanicamente struttura economica e sovrastruttura politica.
                  I due livelli rimangono distinti analiticamente ma sono
                  intrecciati nella realtà storica.
                </p>

                <p>
                  Un determinato ordine sociale comprende rapporti produttivi,
                  gruppi sociali, istituzioni, norme, idee, organizzazioni
                  e forme culturali che si sostengono reciprocamente.
                </p>

                <p>
                  Modificare profondamente la società significa quindi
                  trasformare non soltanto la proprietà o il governo,
                  ma l’intero sistema di relazioni attraverso il quale
                  una determinata struttura viene organizzata e interpretata.
                </p>

                <p>
                  Anche da qui deriva la centralità dell’egemonia:
                  una nuova struttura economica non produce automaticamente
                  una nuova cultura, così come una rivoluzione culturale
                  priva di basi sociali e materiali rimane fragile.
                </p>
              </Section>

              <Section
                id="senso-comune"
                num="30"
                title="Il senso comune: dove la politica incontra la vita quotidiana"
              >
                <p>
                  Gramsci dedica grande attenzione al senso comune,
                  cioè all’insieme spesso incoerente di convinzioni,
                  abitudini, tradizioni e spiegazioni attraverso le quali
                  le persone interpretano il mondo quotidiano.
                </p>

                <p>
                  Il senso comune non è un sistema filosofico rigoroso.
                  Può contenere elementi contraddittori, idee provenienti
                  da epoche differenti e convinzioni che le persone non
                  hanno mai sottoposto a verifica consapevole.
                </p>

                <p>
                  Politicamente è però fondamentale proprio perché costituisce
                  il terreno sul quale milioni di individui danno significato
                  alla propria esperienza.
                </p>

                <p>
                  Una forza politica non costruisce egemonia soltanto
                  pubblicando un programma corretto. Deve entrare in relazione
                  con i linguaggi, i bisogni e le categorie già presenti
                  nella società e contribuire a trasformarli criticamente.
                </p>

                <p>
                  Per questo educazione politica e produzione culturale
                  non sono attività decorative: fanno parte della costruzione
                  di una nuova capacità dirigente.
                </p>
              </Section>

              <Section
                id="determinismo"
                num="31"
                title="Contro il determinismo: la crisi non produce da sola il socialismo"
              >
                <p>
                  Una delle conseguenze più importanti del pensiero gramsciano
                  riguarda il rapporto tra crisi economica e cambiamento politico.
                </p>

                <p>
                  Una crisi può indebolire vecchi equilibri, ma non contiene
                  già al proprio interno una soluzione progressiva.
                  Può favorire forze molto differenti, persino autoritarie.
                </p>

                <p>
                  L’esperienza italiana è per Gramsci una dimostrazione
                  drammatica. La crisi del dopoguerra e il grande ciclo
                  di lotte operaie non conducono al socialismo:
                  sono seguiti dall’ascesa del fascismo.
                </p>

                <p>
                  Tra condizioni economiche e risultato politico esiste
                  dunque il terreno dell’organizzazione, della cultura,
                  dei rapporti di forza e della direzione.
                </p>

                <p>
                  Questo rende la politica irriducibile a una previsione
                  automatica basata esclusivamente sulle tendenze economiche.
                </p>
              </Section>

              <Section
                id="americanismo"
                num="32"
                title="Americanismo e fordismo: anche la fabbrica può riorganizzare la società"
              >
                <p>
                  Nei Quaderni Gramsci analizza con attenzione il fordismo
                  e le trasformazioni provenienti dagli Stati Uniti.
                  Il tema può apparire lontano dalla politica tradizionale,
                  ma in realtà è perfettamente coerente con la sua ricerca.
                </p>

                <p>
                  Una nuova organizzazione della produzione non modifica
                  soltanto la fabbrica. Può richiedere nuovi comportamenti,
                  forme di disciplina, consumi, competenze e relazioni sociali.
                </p>

                <p>
                  La razionalizzazione produttiva diventa così anche un
                  processo di formazione di un determinato tipo umano.
                  Economia e cultura tornano a essere strettamente collegate.
                </p>

                <p>
                  Gramsci osserva quindi il capitalismo non come sistema
                  immobile destinato semplicemente a collassare, ma come
                  ordine capace di innovarsi e riorganizzarsi.
                </p>
              </Section>

              <Section
                id="risorgimento"
                num="33"
                title="Il Risorgimento come laboratorio della rivoluzione passiva"
              >
                <p>
                  Gramsci dedica molte pagine alla formazione dello Stato
                  italiano. Il Risorgimento diventa un laboratorio attraverso
                  il quale studiare come una classe costruisce la propria
                  direzione nazionale.
                </p>

                <p>
                  Egli confronta soprattutto i moderati e il Partito d’Azione.
                  I moderati riescono a esercitare una capacità dirigente
                  molto maggiore, mentre le forze democratiche non costruiscono
                  un rapporto sufficientemente profondo con le masse contadine.
                </p>

                <p>
                  L’unificazione nazionale avviene quindi senza una grande
                  mobilitazione autonoma delle classi popolari paragonabile
                  ad altre esperienze rivoluzionarie europee.
                </p>

                <p>
                  L’interesse non è puramente storiografico. Studiando
                  il Risorgimento, Gramsci cerca di capire come funzionano
                  direzione politica, alleanze, trasformismo e incorporazione
                  delle élite avversarie.
                </p>
              </Section>

              <Section
                id="eredita-pci"
                num="34"
                title="Gramsci nel PCI: un’eredità enorme ma non lineare"
              >
                <p>
                  Dopo la morte di Gramsci, i suoi scritti acquistano
                  progressivamente un ruolo centrale nella cultura del PCI.
                  Le Lettere dal carcere e successivamente i Quaderni vengono
                  pubblicati nel dopoguerra e raggiungono un pubblico molto vasto.
                </p>

                <p>
                  Togliatti attribuisce grande importanza alla costruzione
                  di Gramsci come riferimento culturale del comunismo italiano.
                  Ciò contribuisce anche a caratterizzare il PCI come partito
                  dotato di una tradizione teorica nazionale propria.
                </p>

                <p>
                  Tuttavia non bisogna confondere l’eredità con l’identità.
                  La strategia togliattiana della democrazia progressiva,
                  il partito nuovo e la via italiana al socialismo sono
                  elaborazioni sviluppate in condizioni storiche successive.
                </p>

                <p>
                  È quindi legittimo individuare continuità gramsciane,
                  ma non attribuire automaticamente a Gramsci tutte le
                  scelte compiute dal PCI dopo il 1945.
                </p>
              </Section>

              <Section
                id="berlinguer"
                num="35"
                title="Da Gramsci a Berlinguer: una relazione da trattare con cautela"
              >
                <p>
                  Anche nella stagione di Enrico Berlinguer il riferimento
                  a Gramsci rimane importante, soprattutto nell’idea di
                  una trasformazione socialista che debba misurarsi con
                  la struttura concreta della società italiana.
                </p>

                <p>
                  La centralità della democrazia, la ricerca di alleanze
                  sociali molto ampie e l’idea che una forza politica debba
                  conquistare consenso oltre il proprio nucleo tradizionale
                  possono essere lette anche dentro la lunga eredità gramsciana.
                </p>

                <p>
                  Ma sarebbe scorretto trasformare Gramsci in un Berlinguer
                  anticipato di cinquant’anni. Gramsci rimane un dirigente
                  comunista rivoluzionario degli anni Venti e la sua opera
                  appartiene a un contesto storico diverso.
                </p>

                <p>
                  Il rapporto più serio consiste quindi nello studiare
                  come categorie gramsciane siano state successivamente
                  reinterpretate dal comunismo italiano, distinguendo
                  sempre l’autore dalle sue eredità.
                </p>
              </Section>

              <Section
                id="interpretazioni"
                num="36"
                title="Perché Gramsci è stato interpretato in modi così diversi"
              >
                <p>
                  La vastità e il carattere non definitivo dei Quaderni
                  hanno prodotto una quantità enorme di interpretazioni.
                  Comunisti, socialisti, liberali, studiosi marxisti,
                  storici, sociologi e teorici della cultura hanno utilizzato
                  Gramsci per rispondere a domande molto diverse.
                </p>

                <p>
                  Alcune letture hanno enfatizzato la continuità con Lenin.
                  Altre hanno sottolineato l’originalità occidentale del
                  suo marxismo. Altre ancora hanno concentrato l’attenzione
                  principalmente sulla cultura, sugli intellettuali o
                  sulle identità.
                </p>

                <p>
                  Il successo internazionale dei concetti gramsciani ha
                  ulteriormente moltiplicato gli usi, fino ai cultural studies,
                  agli studi postcoloniali e a numerosi campi delle scienze sociali.
                </p>

                <p>
                  Questa fortuna è una prova della fertilità del pensiero,
                  ma crea anche il rischio di utilizzare la parola “egemonia”
                  completamente separata dal problema gramsciano della classe,
                  dello Stato e della trasformazione politica.
                </p>
              </Section>

              <Section
                id="errori"
                num="37"
                title="Sette errori frequenti quando si parla di Gramsci"
              >
                <NumberedItem
                  n="01"
                  title="Egemonia non significa propaganda"
                  text="La propaganda può essere uno strumento. L’egemonia riguarda un rapporto molto più profondo di direzione politica, sociale e culturale."
                />

                <NumberedItem
                  n="02"
                  title="Consenso non significa assenza di coercizione"
                  text="Lo Stato moderno combina consenso e capacità coercitiva. Gramsci analizza precisamente questa combinazione."
                />

                <NumberedItem
                  n="03"
                  title="Società civile non significa semplicemente società buona contro Stato cattivo"
                  text="È un terreno di organizzazione del consenso e quindi anche di conflitto politico."
                />

                <NumberedItem
                  n="04"
                  title="Intellettuale organico non significa influencer di partito"
                  text="È una funzione organizzativa e culturale legata alla struttura e allo sviluppo di un gruppo sociale."
                />

                <NumberedItem
                  n="05"
                  title="Guerra di posizione non equivale a moderazione"
                  text="È una diversa strategia del conflitto politico nelle società caratterizzate da una società civile complessa."
                />

                <NumberedItem
                  n="06"
                  title="Il Gramsci del 1919 non è già il Gramsci del 1932"
                  text="Molte categorie mature dei Quaderni emergono dopo un lungo percorso politico e intellettuale."
                />

                <NumberedItem
                  n="07"
                  title="Gramsci non coincide con tutto ciò che farà successivamente il PCI"
                  text="La sua eredità è fondamentale, ma le strategie di Togliatti e Berlinguer appartengono a epoche differenti."
                />
              </Section>

              <Section
                id="cronologia"
                num="38"
                title="Cronologia essenziale"
              >
                <div className="mt-8 border-t border-[var(--border)]">
                  {cronologia.map(([year, event]) => (
                    <TimelineRow
                      key={`${year}-${event}`}
                      year={year}
                      event={event}
                    />
                  ))}
                </div>
              </Section>

              <Section
                id="glossario"
                num="39"
                title="Glossario ragionato"
              >
                <div className="mt-8 border-t border-[var(--border)]">
                  {glossary.map(([term, definition]) => (
                    <GlossaryRow
                      key={term}
                      term={term}
                      definition={definition}
                    />
                  ))}
                </div>
              </Section>

              <Section
                id="fonti"
                num="40"
                title="Fonti e bibliografia essenziale"
              >
                <p>
                  Questa dispensa è concepita come introduzione monografica.
                  Per lo studio scientifico di Gramsci è indispensabile
                  confrontarsi direttamente con gli scritti e con la vasta
                  letteratura critica.
                </p>

                <div className="mt-10 space-y-9">
                  <Source
                    title="Treccani — Antonio Gramsci, Enciclopedia on line"
                    text="Profilo generale della biografia, dell’attività politica e dei principali concetti della riflessione gramsciana."
                    href="https://www.treccani.it/enciclopedia/antonio-gramsci/"
                  />

                  <Source
                    title="Treccani — Antonio Gramsci, Dizionario di Storia"
                    text="Ricostruzione del percorso politico, della questione meridionale, dei Quaderni e del passaggio dalla guerra di movimento alla guerra di posizione."
                    href="https://www.treccani.it/enciclopedia/antonio-gramsci_%28Dizionario-di-Storia%29/"
                  />

                  <Source
                    title="Treccani — Antonio Gramsci, Dizionario Biografico"
                    text="Approfondimento sulla formazione politica, sul PCd’I, sul confronto strategico e sulla riflessione carceraria."
                    href="https://www.treccani.it/enciclopedia/antonio-gramsci_%28Dizionario-Biografico%29/"
                  />

                  <Source
                    title="Treccani — Gramsci e la filosofia"
                    text="Approfondimento sulla filosofia della prassi, teoria degli intellettuali, concezione dello Stato, egemonia e società civile."
                    href="https://www.treccani.it/enciclopedia/antonio-gramsci_%28Il-Contributo-italiano-alla-storia-del-Pensiero%3A-Filosofia%29/"
                  />

                  <Source
                    title="Treccani — Gramsci nell’Enciclopedia Italiana"
                    text="Approfondimento su guerra di posizione, Occidente, egemonia e struttura concettuale dei Quaderni."
                    href="https://www.treccani.it/enciclopedia/antonio-gramsci_%28Enciclopedia-Italiana%29/"
                  />

                  <div className="border-t border-[var(--border)] pt-8">
                    <div className="text-sm font-bold">
                      Antonio Gramsci — Quaderni del carcere
                    </div>

                    <p className="!mt-2 text-sm leading-7 text-[var(--muted)]">
                      Fonte primaria fondamentale. Per uno studio avanzato
                      è preferibile utilizzare l’edizione critica e tenere
                      conto della cronologia delle diverse stesure.
                    </p>
                  </div>

                  <div className="border-t border-[var(--border)] pt-8">
                    <div className="text-sm font-bold">
                      Antonio Gramsci — La questione meridionale
                    </div>

                    <p className="!mt-2 text-sm leading-7 text-[var(--muted)]">
                      Testo essenziale per comprendere il rapporto tra
                      proletariato settentrionale, masse contadine,
                      intellettuali e costruzione delle alleanze sociali.
                    </p>
                  </div>

                  <div className="border-t border-[var(--border)] pt-8">
                    <div className="text-sm font-bold">
                      Antonio Gramsci — Lettere dal carcere
                    </div>

                    <p className="!mt-2 text-sm leading-7 text-[var(--muted)]">
                      Materiale indispensabile per ricostruire esperienza
                      personale, lavoro intellettuale e condizioni della
                      ricerca gramsciana durante la detenzione.
                    </p>
                  </div>
                </div>

                <div className="mt-12 border-l-4 border-[var(--red)] bg-white/40 p-7">
                  <div className="text-xs font-bold uppercase tracking-[0.13em] text-[var(--red)]">
                    Criterio editoriale
                  </div>

                  <p className="!mb-0 !mt-4 text-sm leading-7">
                    La Via Italiana distingue le formulazioni originali
                    di Gramsci dalle interpretazioni successive. Dove un
                    concetto è oggetto di dibattito storiografico, non viene
                    presentata una singola lettura come definitivamente
                    coincidente con l’intenzione dell’autore.
                  </p>
                </div>
              </Section>
            </div>
          </div>

          <section className="border-y border-[var(--border)] bg-[#111111] text-white">
            <div className="container-site grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Continua il percorso storico
                </div>

                <h2 className="font-editorial mt-4 max-w-4xl text-4xl font-semibold md:text-5xl">
                  Il PCd’I nella clandestinità, la Resistenza e Palmiro Togliatti
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                  Dalla sconfitta sotto il fascismo alla trasformazione
                  del comunismo italiano in grande partito di massa
                  della Repubblica.
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
      <div className="eyebrow">
        {num}
      </div>

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
    <div className="my-10 border-l-4 border-[var(--red)] bg-white/45 px-7 py-7">
      <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
        {title}
      </div>

      <div className="font-editorial mt-4 text-2xl leading-[1.3]">
        {children}
      </div>
    </div>
  );
}

function WhyBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-10 bg-[#111111] px-7 py-7 text-white">
      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">
        Perché è importante
      </div>

      <div className="font-editorial mt-4 text-2xl leading-[1.3]">
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

        <p className="!mb-0 !mt-3 text-sm leading-7">
          {left}
        </p>
      </div>

      <div className="border-t border-[var(--border)] p-6 md:border-t-0">
        <div className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--red)]">
          {rightTitle}
        </div>

        <p className="!mb-0 !mt-3 text-sm leading-7">
          {right}
        </p>
      </div>
    </div>
  );
}

function NumberedItem({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-4 border-b border-[var(--border)] py-6 md:grid-cols-[60px_1fr]">
      <div className="font-editorial text-2xl font-semibold text-[var(--red)]">
        {n}
      </div>

      <div>
        <h3 className="!mt-0">
          {title}
        </h3>

        <p className="!mt-2 text-sm leading-7 text-[var(--muted)]">
          {text}
        </p>
      </div>
    </div>
  );
}

function TimelineRow({
  year,
  event,
}: {
  year: string;
  event: string;
}) {
  return (
    <div className="grid gap-3 border-b border-[var(--border)] py-5 md:grid-cols-[170px_1fr]">
      <div className="font-editorial text-xl font-semibold text-[var(--red)]">
        {year}
      </div>

      <div className="text-sm leading-7">
        {event}
      </div>
    </div>
  );
}

function GlossaryRow({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <div className="grid gap-3 border-b border-[var(--border)] py-6 md:grid-cols-[200px_1fr]">
      <div className="font-semibold">
        {term}
      </div>

      <div className="text-sm leading-7 text-[var(--muted)]">
        {definition}
      </div>
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
    <div className="border-t border-[var(--border)] pt-8">
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
