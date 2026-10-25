import experienceArchitectSketch from '../../rollen/AI Experience Architect_de.png';
import transformationManagerSketch from '../../rollen/AI  Transformation Manger_de.png';
import individualContributorSketch from '../../rollen/AI Individual Contributor_de.png';
import experienceArchitectSketchEn from '../../rollen/AI Experience Architect_en.png';
import transformationManagerSketchEn from '../../rollen/AI  Transformation Manger_en.png';
import individualContributorSketchEn from '../../rollen/AI Individual Contributor_en.png';
import experienceArchitectPreview from '../../rollen/01-experience-architect-neue-komposition_de.png';
import transformationManagerPreview from '../../rollen/03-mensch-agent-neue-komposition_de.png';
import individualContributorPreview from '../../rollen/04-veraenderung-neue-komposition_de.png';

// Startseite
// Leitrolle und Rollenbezeichnung: "UX Manager für Human-AI Work Design"

export const hero = {
  eyebrow: 'UX Manager für Human-AI Work Design',
  photo: '/felix-bruckmeier.png',
  headlineStart: 'KI-Lösungen einzuführen ist leicht. Sie in ',
  headlineEmphasis: 'Wirkung',
  headlineEnd: ' zu bringen ist schwer.',
  lead: 'Wenn Lösungen durch KI schnell verfügbar sind, werden die richtigen Problemstellungen zum neuen Engpass. Ich helfe Produkt- und Führungsteams, den Fokus genau darauf zu richten. Ich bringe die richtigen Entscheider zusammen, damit gemeinsam KI-Lösungen entstehen, die im Alltag wirken.',
  heroRoles: [
    'Ich baue selbst, um schneller zu lernen.',
    'Ich gestalte, wie Mensch und Agent zusammenarbeiten.',
    'Ich erforsche Fragen, bevor sie drängen.',
  ],
  primaryCta: 'Vorhaben besprechen',
  secondaryCta: 'Wirkungsbelege ansehen',
  trust: [
    '70 % Research-Abdeckung strategischer Entscheidungen bei einem internationalen E-Commerce-Unternehmen',
    // [FREIGABE PRÜFEN] Anonymisierte Variante des EnBW-Belegs „Research für 3 Produktteams koordiniert“.
    'Research für 3 Produktteams koordiniert – Energieversorger, IT-Bereich',
    // [FREIGABE PRÜFEN] Anonymisierte Variante des EnBW-Belegs „Team-Standard in mindestens 2 Produktteams“.
    'Zielgruppen-Agent als Teamstandard, genutzt von mindestens 2 Produktteams – Energieversorger, IT-Bereich',
  ],
};

export const storyTerm = 'Anstöße';

export const role = 'UX Manager';

export const coreMessage = 'Ich bin UX Manager. Drei Erfahrungen haben verändert, was diese Rolle für mich heißt.';

export const storyTitle = 'Drei Perspektiven. Eine Haltung.';

export const throughline = 'Was gleich bleibt: Ich gehe von den Menschen aus, nicht von der Technik.';

export const impulses = [
  {
    title: 'Bauen, um zu verstehen',
    problem: 'Lösungen sind billig geworden, Probleme sind teuer. Ein Prototyp entsteht mit KI in Stunden. Teuer wird es, wenn das falsche Problem gelöst wird.',
    roleChange: 'Ich baue selbst, um schneller zu lernen, nicht um Entwicklung zu ersetzen.',
    whatIDo: 'Problem klären, Prototyp oder Agent bauen, mit echten Nutzer:innen testen, Wirkung messen',
    result: 'Eine belegte Entscheidung: weitermachen, ändern oder stoppen',
    sketchnoteTitle: 'Wenn die Lösung billig wird, wird das Problem wertvoll',
    sketchnotePath: '[TODO: Pfad]',
  },
  {
    title: 'Agenten in Wirkung bringen',
    problem: 'Agenten zu bauen ist einfach, sie in Wirkung zu bringen ist schwer. Menschen vertrauen zu viel oder zu wenig, Verantwortung ist unklar, rechtliche Fragen bremsen.',
    roleChange: 'Ich gestalte die Zusammenarbeit von Mensch und Agent, nicht nur die Oberfläche.',
    whatIDo: 'Aufgaben mit der Delegationsmatrix aufteilen, Verantwortung und Freigaben festlegen, Betroffene früh einbinden, Teams befähigen',
    result: 'Ein Agent, der genutzt wird, mit klarer Aufteilung und Freigabepunkten',
    sketchnoteTitle: 'Arbeit zwischen Mensch und Agent gestalten',
    sketchnotePath: '[TODO: Pfad]',
  },
  {
    title: 'Fragen erforschen, bevor sie drängen',
    problem: 'Die wichtigen Fragen sind noch nicht da. Wenn ein Problem offensichtlich ist, ist es meist zu spät. Strategische Themen betreffen viele Bereiche und lassen sich nicht in einem Produktteam lösen.',
    roleChange: 'Ich forsche früh und ebenenübergreifend, nicht erst, wenn ein Team fragt.',
    whatIDo: 'Zukunftsthemen erkennen, mit Fachbereichen, IT, Management und Betroffenen austauschen, Entscheidungen vorbereiten',
    result: 'Ein Thema ist entscheidungsreif, bevor es dringend wird',
    roleDescription: 'Fachlich starke Rolle mit strategischer Research',
    sketchnoteTitle: 'Eine fachlich starke Rolle',
    sketchnotePath: '[TODO: Pfad]',
  },
] as const;

export const problem = {
  title: 'Der Engpass ist nicht mehr Entwicklung, sondern Problemerkenntnis und Entscheidungsqualität.',
  text: 'KI beschleunigt das Bauen. Sie beantwortet aber nicht, welches Problem relevant ist, welche Entscheidung vorbereitet werden soll und welche Verantwortung beim Menschen bleiben muss. Ohne diese Klärung entsteht schneller mehr Output – nicht automatisch mehr Wirkung.',
  questions: [
    {
      title: 'Problem klären',
      text: 'Welche Arbeit soll sich für wen verändern – und woran erkennen wir den Nutzen?',
    },
    {
      title: 'Verantwortung verteilen',
      text: 'Was darf der Agent ausführen, was nur vorbereiten und was entscheidet der Mensch?',
    },
    {
      title: 'Vertrauen gestalten',
      text: 'Wer prüft Ergebnisse, an welchen Checkpoints und wie wird bei Unsicherheit eskaliert?',
    },
    {
      title: 'Wirkung nachweisen',
      text: 'Welche Entscheidung, welcher Ablauf oder welches Ergebnis ist nachweislich besser geworden?',
    },
  ],
  transition: 'Ich verbinde Research, Arbeitsgestaltung und prototypische Umsetzung zu einem nachvollziehbaren Weg von der Problemklärung bis zum Wirkungsnachweis.',
};

export const deepeningOne = {
  title: impulses[0].title,
  bottleneck: 'Der Engpass ist nicht mehr Entwicklung, sondern Problemerkenntnis und Entscheidungsqualität.',
  steps: problem.questions,
};

export const deepeningTwo = {
  title: 'Warum KI-Lösungen ihre Wirkung nicht entfalten',
  // ENTWURF
  problemText: {
    introduction: 'Das Modell ist selten das Problem. Entscheidend ist, was um ihn herum passiert:',
    issues: [
      {
        title: 'Das Problem stimmt nicht.',
        text: 'Der Agent wird eingesetzt, weil er möglich ist, nicht weil er gebraucht wird, oder er soll alles auf einmal können.',
      },
      {
        title: 'Die Arbeitsteilung ist ungeklärt.',
        text: 'Er übernimmt zu viel, wo er nur vorschlagen sollte, oder zu wenig, und die Arbeit bleibt, wie sie war. Wer verantwortlich ist und was rechtlich gilt, entscheidet niemand ausdrücklich.',
      },
      {
        title: 'Das Vertrauen passt nicht.',
        text: 'Menschen prüfen alles doppelt oder übernehmen Ergebnisse ungeprüft, die nur plausibel klingen. Und wer nur noch freigibt, verlernt das eigene Urteil.',
      },
      {
        title: 'Die Wirkung bleibt unsichtbar.',
        text: 'Der Agent sitzt neben dem Arbeitsablauf statt darin, lernt nicht aus Korrekturen, und niemand kann sagen, ob er sich lohnt. Die Leute greifen zu eigenen Tools.',
      },
    ],
    model: 'Für die Arbeitsteilung nutze ich ein einfaches Modell: Für jede Aufgabe einzeln entscheiden. Wie offen ist sie? Was kostet ein Fehler? Daraus ergibt sich, was der Agent allein erledigt, wo er vorschlägt und wo ein Mensch entscheidet.',
    collaboration: 'Diese Aufteilung kläre ich mit den Menschen, die später mit dem Agenten arbeiten, denn sie entscheiden am Ende, ob er genutzt wird.',
  },
  bridge: 'So habe ich die Arbeit bei meinen eigenen Research-Agenten aufgeteilt. Dasselbe Vorgehen nutze ich, wenn Teams einen Agenten einführen.',
  framing: 'Die Matrix löst die Probleme nicht allein, sie sorgt dafür, dass sie bewusst entschieden werden, bevor der Agent live geht.',
};

export const delegationMatrix = {
  title: 'Delegationsmatrix',
  axes: {
    x: {
      question: 'Wie offen ist die Aufgabe?',
      start: 'klar',
      end: 'offen',
    },
    y: {
      question: 'Was kostet ein Fehler?',
      start: 'gering',
      end: 'hoch',
    },
  },
  zones: [
    {
      title: 'Agent macht es allein, ich schaue stichprobenartig drauf',
      taskOpenness: 'klar',
      errorCost: 'gering',
      humanInvolvement: 1,
      exampleTask: '[TODO: Beispielaufgabe]',
      caseSlug: '[TODO: Fallstudien-Slug]',
    },
    {
      title: 'Agent schlägt vor, ich wähle aus',
      taskOpenness: 'offen',
      errorCost: 'gering',
      humanInvolvement: 2,
      exampleTask: 'Neue Fragen an Befragungsdaten stellen; der Agent findet Daten, verdichtet Befunde und nennt Grenzen.',
      caseSlug: 'vom-problem-zum-agenten',
    },
    {
      title: 'Agent bereitet vor, ich gebe frei',
      taskOpenness: 'klar',
      errorCost: 'hoch',
      humanInvolvement: 3,
      exampleTask: 'Management-Aussagen aus Befragungsdaten vorbereiten; eine fachkundige Person prüft Datengrundlage, Methode und Formulierung.',
      caseSlug: 'vom-problem-zum-agenten',
    },
    {
      title: 'Ich entscheide, der Agent liefert zu',
      taskOpenness: 'offen',
      errorCost: 'hoch',
      humanInvolvement: 4,
      exampleTask: '[TODO: Beispielaufgabe]',
      caseSlug: '[TODO: Fallstudien-Slug]',
    },
  ],
  fixedBoundary: 'Nicht umkehrbare oder rechtlich relevante Aktionen gehen nie ohne menschliche Freigabe raus.',
  legend: {
    title: 'Grad menschlicher Beteiligung',
    scale: '1 = geringste menschliche Beteiligung; 4 = höchste menschliche Beteiligung.',
    low: '1 · Geringste menschliche Beteiligung',
    high: '4 · Höchste menschliche Beteiligung',
  },
};

export const deepeningThree = {
  title: impulses[2].title,
  // ENTWURF
  text: 'Ich forsche früh und ebenenübergreifend, bevor ein Problem dringend wird. Anknüpfungspunkte sind Befragungen zur Laptopzufriedenheit, Barrierefreiheit am digitalen Arbeitsplatz und Sustainable IT – etwa die Perspektive auf KI-Nutzen und Ressourcenverbrauch.',
};

export const roleSketches = [
  {
    slug: 'ai-experience-architect',
    title: 'AI Experience Architect',
    description: 'Ich verbinde Research, Design und Entwicklung in einer Rolle. Dabei sorge ich dafür, dass wir die richtigen Probleme erkennen und verstehen, passende Lösungen entwickeln und diese im Alltag wirksam werden.',
    image: experienceArchitectSketch,
    imageAlt: 'Sketchnote zur Rolle AI Experience Architect.',
    preview: experienceArchitectPreview,
    previewAlt: 'Mensch am Laptop im AI-Experience-Architect-Arbeitszyklus.',
    caseSlug: 'vom-problem-zum-agenten',
    caseLinkLabel: 'Vom Problem zum Research-Agenten',
  },
  {
    slug: 'ai-transformation-manager',
    title: 'AI Transformation Manager',
    description: 'Ich sorge dafür, dass KI im Unternehmen genutzt wird und Wirkung erzielt. Gemeinsam mit Teams prüfe ich, was dafür benötigt wird und welche Aufgaben Agenten vollständig, gemeinsam mit Menschen oder bewusst nicht übernehmen sollen. So werden aus einzelnen KI-Produkten wirksame Arbeitssysteme.',
    image: transformationManagerSketch,
    imageAlt: 'Sketchnote zur Rolle AI Transformation Manager.',
    preview: transformationManagerPreview,
    previewAlt: 'Menschen und Agent arbeiten gemeinsam an einer Aufgabe.',
    caseSlug: 'zielgruppen-agent',
    caseLinkLabel: 'Zielgruppen-Agent',
  },
  {
    slug: 'ai-individual-contributor',
    title: 'AI Individual Contributor',
    description: 'Ich erkenne relevante Zukunftsthemen wie verantwortungsvolle KI, Barrierefreiheit und Nachhaltigkeit und übersetze sie in konkrete Handlungsfelder. Ich gebe fachliche Orientierung, befähige Teams und treibe Veränderungen gemeinsam über Abteilungsgrenzen hinweg voran – durch eigene Beiträge, kontinuierlichen Austausch und gemeinsames Erproben in der Praxis.',
    image: individualContributorSketch,
    imageAlt: 'Sketchnote zur Rolle AI Individual Contributor.',
    preview: individualContributorPreview,
    previewAlt: 'Fachliche Arbeit verbindet Menschen, Agenten und Organisation.',
    caseSlug: 'barrierefreiheit-digitaler-arbeitsplatz',
    caseLinkLabel: 'Barrierefreiheit am digitalen Arbeitsplatz',
  },
] as const;

export const roleSketchesEn = [
  {
    slug: 'ai-experience-architect',
    title: 'AI Experience Architect',
    description: 'I bring research, design and development together in one role. I help us identify and understand the right problems, develop suitable solutions and make them effective in everyday work.',
    image: experienceArchitectSketchEn,
    imageAlt: 'Sketchnote about the AI Experience Architect role.',
    preview: experienceArchitectPreview,
    previewAlt: 'Person at a laptop in an AI Experience Architect workflow.',
    caseSlug: 'vom-problem-zum-agenten',
    caseLinkLabel: 'Research agent: from survey data to a defensible answer',
  },
  {
    slug: 'ai-transformation-manager',
    title: 'AI Transformation Manager',
    description: 'I make sure AI is not only introduced in organisations, but used to create impact. Together with teams, I explore what they need and which tasks agents should handle fully, share with people, or deliberately leave to people. This turns individual AI products into effective work systems.',
    image: transformationManagerSketchEn,
    imageAlt: 'Sketchnote about the AI Transformation Manager role.',
    preview: transformationManagerPreview,
    previewAlt: 'People and an agent working together on a task.',
    caseSlug: 'zielgruppen-agent',
    caseLinkLabel: 'Target-group agent: research access as a team standard',
  },
  {
    slug: 'ai-individual-contributor',
    title: 'AI Individual Contributor',
    description: 'I identify relevant future topics such as responsible AI, accessibility and sustainability and translate them into concrete areas for action. I provide subject-matter guidance, empower teams and drive change across departmental boundaries through my own contributions, ongoing exchange and joint experimentation in practice.',
    image: individualContributorSketchEn,
    imageAlt: 'Sketchnote about the AI Individual Contributor role.',
    preview: individualContributorPreview,
    previewAlt: 'Subject-matter work connects people, agents and organisations.',
    caseSlug: 'barrierefreiheit-digitaler-arbeitsplatz',
    caseLinkLabel: 'Embedding accessibility at the digital workplace',
  },
] as const;

export const contactEntryPoints = [
  '… ihr eine KI-Idee habt und nicht wisst, ob sie ein echtes Problem löst.',
  '… ihr eine agentische Lösung eingeführt habt und sie nicht genutzt wird.',
  '… ein KI-Thema im Raum steht, das noch niemand richtig greifen kann.',
] as const;

export const contactEntryPointsEn = [
  '… you have an AI idea and are unsure whether it solves a real problem.',
  '… you have introduced an agentic solution and it is not being used.',
  '… an AI topic is on the table, but no one has quite figured it out yet.',
] as const;

export interface Offer {
  level: string;
  title: string;
  text: string;
  result: string;
  caseSlug?: string;
}

// ENTFÄLLT AUF DER STARTSEITE (Konzept Abschnitt 3)
export const offers: { title: string; intro: string; items: Offer[] } = {
  title: 'Wobei ich Sie unterstütze',
  intro: 'Vier klar begrenzte Formate – vom unscharfen Problem bis zur verankerten Arbeitsweise.',
  items: [
    {
      level: 'Typische Dauer: 2–3 Wochen',
      title: 'Entscheidungs-Sprint',
      text: 'Ausgangssituation: Viele Anforderungen, aber keine gemeinsame Priorität. Vorgehen: Entscheidungsfrage klären, Nutzer- und Geschäftssignale verdichten, Optionen nach Nutzen und Risiko bewerten.',
      result: 'Entscheidungsvorlage, priorisierte Optionen und offene Belege.',
      caseSlug: 'kano',
    },
    {
      level: 'Typische Dauer: 3–5 Wochen',
      title: 'Human-AI-Workflow-Sprint',
      text: 'Ausgangssituation: Ein KI-Anwendungsfall ist denkbar, Rollen, Grenzen und Übergaben sind aber unklar. Vorgehen: Arbeit analysieren, Delegationszone bestimmen, Checkpoints, Eskalation und Transparenz spezifizieren.',
      result: 'Soll-Ablauf, Delegationsmodell, Prüfregeln und Evaluationsplan.',
      caseSlug: 'vom-problem-zum-agenten',
    },
    {
      level: 'Typische Dauer: 4–8 Wochen',
      title: 'Agenten-Prototyp und Praxistest',
      text: 'Ausgangssituation: Annahmen sollen vor einer größeren Umsetzung geprüft werden. Vorgehen: Wissensbasis und Agent aufbauen, mit realistischen Aufgaben erproben, Fehlerbilder dokumentieren und iterieren.',
      result: 'Funktionsfähiger Prototyp, Testbefunde, Grenzen und belastbare nächste Entscheidung.',
      caseSlug: 'zielgruppen-agent',
    },
    {
      level: 'Typische Dauer: 6–12 Wochen',
      title: 'UX- und Research-System',
      text: 'Ausgangssituation: Research und UX hängen an Einzelpersonen oder kommen zu spät. Vorgehen: Entscheidungsbedarf, Rollen, Intake, Standards, Vorlagen und Lernschleifen gemeinsam mit den Teams etablieren.',
      result: 'Arbeitsmodell, Standards, befähigte Teams und ein Messpunkt für Nutzung und Wirkung.',
      caseSlug: 'researchops',
    },
  ],
};

// ENTFÄLLT AUF DER STARTSEITE (Konzept Abschnitt 3)
export const approach = {
  title: 'So arbeite ich',
  intro: 'Ein nachvollziehbarer Prozess, in dem jede Phase eine Entscheidung vorbereitet.',
  steps: [
    {
      title: 'Verstehen',
      question: 'Welche Arbeit soll sich für wen verändern?',
      result: 'Problem, Kontext und Beteiligte',
    },
    {
      title: 'Bewerten',
      question: 'Welche Option schafft Nutzen – und welches Risiko trägt sie?',
      result: 'Priorität und Delegationszone',
    },
    {
      title: 'Spezifizieren',
      question: 'Wer tut was, wer prüft und wann wird eskaliert?',
      result: 'Soll-Ablauf und Checkpoints',
    },
    {
      title: 'Bauen',
      question: 'Welche Annahmen lassen sich mit einem Prototyp prüfen?',
      result: 'Testbarer Ablauf oder Agent',
    },
    {
      title: 'Messen',
      question: 'Welche Entscheidung oder welches Arbeitsergebnis ist besser?',
      result: 'Wirkungs- und Vertrauenssignale',
    },
    {
      title: 'Verankern',
      question: 'Wie wird aus einem Versuch eine tragfähige Praxis?',
      result: 'Rollen, Standards und Befähigung',
    },
  ],
  note: 'Ich baue Prototypen selbst – nicht als Ersatz für Produktentwicklung, sondern als Erkenntniswerkzeug: um Annahmen früh zu prüfen und bessere Investitionsentscheidungen vorzubereiten.',
  matrix: {
    title: 'Delegationsmatrix',
    text: 'Die Delegationsform ergibt sich aus zwei Achsen: Unsicherheit der Aufgabe und Auswirkung eines Fehlers. Zusätzlich gilt eine feste Grenze: Nicht umkehrbare oder rechtlich relevante Aktionen werden nicht ohne menschliche Freigabe ausgeführt.',
    xLabel: 'Unsicherheit der Aufgabe',
    yLabel: 'Auswirkung eines Fehlers',
    cells: {
      lowLow: {
        title: 'Automatisieren und beobachten',
        text: 'Der Agent führt aus. Ein fachlich verantwortlicher Mensch prüft Stichproben und Abweichungen.',
      },
      lowHigh: {
        title: 'Vorbereiten und freigeben',
        text: 'Der Agent bereitet eine Aktion vor. Die benannte verantwortliche Person prüft und gibt frei.',
      },
      highLow: {
        title: 'Vorschlagen und auswählen',
        text: 'Der Agent zeigt Optionen, Unsicherheit und Quellen. Der Mensch wählt aus oder fordert Nacharbeit an.',
      },
      highHigh: {
        title: 'Mensch entscheidet',
        text: 'Der Agent strukturiert Informationen. Bewertung und Entscheidung bleiben beim Menschen.',
      },
    },
  },
  // Neues Feld, begründet durch den geforderten Vertrauensblock.
  // Dafür ist die beigefügte DelegationMatrix.tsx anzupassen.
  trust: {
    title: 'Vertrauen entsteht durch überprüfbare Arbeitsteilung',
    items: [
      {
        title: 'Verantwortung',
        text: 'Für jeden Agenten ist benannt, wer fachlich entscheidet und wer den Betrieb verantwortet.',
      },
      {
        title: 'Checkpoints',
        text: 'Geprüft wird vor folgenreichen Aktionen, bei niedriger Konfidenz und wenn Daten oder Regeln fehlen.',
      },
      {
        title: 'Eskalation',
        text: 'Der Agent stoppt, kennzeichnet die Unsicherheit und übergibt mit Kontext statt still weiterzuarbeiten.',
      },
      {
        title: 'Transparenz',
        text: 'Quellen, Annahmen, Änderungen und offene Grenzen bleiben für die prüfende Person nachvollziehbar.',
      },
    ],
  },
};

export const casesSection = {
  title: 'Woran Sie meine Arbeitsweise prüfen können',
  intro: 'Fallstudien mit Problem, meiner Rolle, Ergebnis und klar benannten Beleglücken.',
};

export const about = {
  title: 'Über mich',
  paragraphs: [
    'Volkswirt und UX Manager mit rund zehn Jahren Erfahrung in Research, Produktstrategie und Organisationsentwicklung – von E-Commerce und Versicherung bis zu IT und KI.',
    'Meine Haltung: Erst das relevante Problem und die Entscheidung klären, dann bauen. Zukunftsthemen wie verantwortungsvolle KI, Barrierefreiheit und Nachhaltigkeit behandle ich nicht als Zusatz, sondern als Anforderungen an gute Arbeits- und Produktgestaltung.',
  ],
  quote: 'Gute UX macht nicht nur ein System leichter bedienbar. Sie macht Verantwortung, Entscheidungen und Wirkung verständlich.',
  cvCta: 'Lebenslauf ansehen',
  photo: '',
};

export const contact = {
  title: 'Lassen Sie uns Ihr Vorhaben in 30 Minuten klären.',
  availability: '',
  primaryCta: 'Vorhaben besprechen',
  formIntro: 'Wenn Sie lieber schreiben: Beschreiben Sie Ausgangslage, gewünschte Entscheidung und Zeitrahmen.',
};
