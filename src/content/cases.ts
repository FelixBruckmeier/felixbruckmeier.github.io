// Fallstudien. Neuer Eintrag = neue Seite /fallstudien/<slug> + Teaser auf der Startseite.
// Nur belegbare Zahlen verwenden. Interne Inhalte sind markiert und zusätzlich anonymisiert.

export interface CaseStudy {
  slug: string;
  title: string;
  teaser: string;
  previewTeaser?: string;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  openItems?: string[];
  metric?: { value: string; label: string };
  openingArtifact?: { image: string; alt: string; caption: string };
  visuals?: { title: string; text: string; image: string; alt: string }[];
  sections: {
    situation: string;
    question: string;
    approach: string;
    collaboration?: string;
    insight: string;
    impact: string;
    role: string;
  };
}

export const casesDe: CaseStudy[] = [
  {
    slug: 'zielgruppen-agent',
    title: 'Zielgruppen-Agent: Research-Zugang als Teamstandard',
    teaser: 'Problem: Produktteams fanden passende Research-Teilnehmende nicht verlässlich. · Meine Rolle: Bedarf, Regeln und Einführung des Agenten koordiniert. · Wirkung: Teamstandard, genutzt von mindestens 2 Produktteams.',
    previewTeaser: 'Passende Research-Teilnehmende zu finden, war für Produktteams oft schwierig. Ich koordinierte Bedarf, Regeln und Einführung eines Agenten, der heute von mindestens zwei Produktteams als gemeinsamer Standard genutzt wird.',
    tags: ['Verstehen', 'Spezifizieren', 'Bauen', 'Verankern'],
    featured: true,
    openItems: [
      '[FREIGABE PRÜFEN: Nutzung, Wortlaut „Teamstandard“ und öffentliche Nennung der Zahl vor Veröffentlichung bestätigen.]',
    ],
    openingArtifact: {
      image: '/cases/zielgruppen-agent/sketchnote.png',
      alt: 'Sketchnote zum Weg vom Suchaufwand zum Zielgruppen-Agenten: Teams verstehen den Bedarf, klären Regeln, bauen den Agenten und verankern ihn im Alltag.',
      caption: 'Vom manuellen Suchaufwand zu einem nachvollziehbaren, datenschutzkonformen Research-Zugang für Produktteams.',
    },
    metric: {
      value: '≥ 2',
      label: 'Produktteams nutzen den Teamstandard',
    },
    sections: {
      situation: 'In einem IT-Bereich eines Energieversorgers benötigten mehrere Produktteams regelmäßig passende Beschäftigte für Interviews und Tests. Die Suche hing von persönlichem Wissen und manueller Abstimmung ab. Dadurch war der Zugang zu Zielgruppen schwer wiederholbar und für Teams ohne Research-Routine besonders aufwendig.',
      question: 'Wie können Produktteams passende Research-Teilnehmende selbstständiger identifizieren, ohne Auswahlregeln und Datenschutzanforderungen zu umgehen?',
      approach: 'Ich klärte mit den beteiligten Teams typische Suchanlässe, relevante Zielgruppenmerkmale und Grenzen der Nutzung. Daraus entstanden eine strukturierte Wissensbasis, nachvollziehbare Auswahlregeln und ein Agent, der Teams durch die Zielgruppenklärung führt. Die Einführung erfolgte nicht als einmalige Demonstration, sondern mit Anwendungsbeispielen, Rückmeldeschleifen und klarer Zuständigkeit für die Weiterentwicklung.',
      collaboration: 'Der Agent strukturiert die Anfrage, schlägt passende Zielgruppenmerkmale vor und macht fehlende Angaben sichtbar. Das Produktteam prüft Zweck und Passung; die verantwortliche Stelle bestätigt den zulässigen Rekrutierungsweg. Der Agent trifft keine Entscheidung über die Teilnahme einzelner Personen.',
      insight: 'Skalierung entsteht nicht allein durch einen funktionierenden Agenten. Sie entsteht, wenn Auswahlregeln, Zuständigkeiten und der Übergang in den bestehenden Research-Prozess verständlich genug sind, damit Teams das Werkzeug ohne ständige Einzelbegleitung nutzen können.',
      impact: 'Der Zielgruppen-Agent wurde zum Standard im UX-Team und von mindestens 2 Produktteams genutzt.',
      role: 'Ich koordinierte die Anforderungen der Teams, entschied die Struktur der Wissensbasis, übersetzte Auswahlregeln in einen geführten Ablauf, erprobte den Agenten mit realen Suchanlässen und befähigte die Teams zur Nutzung.',
    },
  },
  {
    slug: 'vom-problem-zum-agenten',
    title: 'Research-Agent: von Befragungsdaten zur belastbaren Antwort',
    teaser: 'Problem: Neue Fragen erforderten wiederholt individuelle Auswertungen. · Meine Rolle: Analyse, Arbeitsmodell und Agenten-Prototyp koordiniert. · Wirkung: Teams können Fragen selbst stellen; methodische Grenzen bleiben Teil der Antwort.',
    previewTeaser: 'Die Teams hatten keinen einfachen Zugang zum Feedback aus einer kontinuierlichen Mitarbeiterbefragung. Ich koordinierte Analyse, Arbeitsmodell und Agenten-Prototyp, damit Teams selbst Fragen an die Daten stellen können – mit klar benannten methodischen Grenzen.',
    tags: ['Verstehen', 'Bewerten', 'Spezifizieren', 'Bauen', 'Messen'],
    featured: true,
    openItems: [
      '[FREIGABE PRÜFEN: öffentliche Beschreibung des Anwendungsfalls, Agentenname und Bildmaterial.]',
      '[BELEG FEHLT: dokumentierte Nutzung, eingesparte Analysezeit oder Zahl der beantworteten Anfragen.]',
    ],
    openingArtifact: {
      image: '/cases/vom-problem-zum-agenten/sketchnote.png',
      alt: 'Sketchnote zum Weg von zwei Beschäftigtenbefragungen über ein Dashboard zu einem Research-Agenten.',
      caption: 'Vom vorbereiteten Bericht zum dialogischen Zugang – mit klarer Trennung von Befund, Interpretation und Empfehlung.',
    },
    visuals: [
      {
        title: 'Dashboard als Zwischenlösung',
        text: 'Das Dashboard machte vorbereitete Kennzahlen und Unterschiede zwischen Erhebungen sichtbar. Für neue Fragestellungen blieb es jedoch zu starr: Eine zusätzliche Frage erforderte eine neue Auswertung oder Ansicht.',
        image: '/cases/vom-problem-zum-agenten/power-bi-dashboard.png',
        alt: 'Dashboard mit Verläufen und Unterschieden zwischen zwei Befragungen.',
      },
      {
        title: 'Spezialisierter Research-Agent',
        text: 'Der Agent verbindet Befragungsdaten mit Studienkontext, Methodenregeln und einer Wissensbasis. Er zeigt Befunde, kennzeichnet Unsicherheit und schlägt nächste Analysen vor, ohne Ursachen oder Entscheidungen vorzutäuschen.',
        image: '/cases/vom-problem-zum-agenten/george-2-3.png',
        alt: 'Ansicht eines spezialisierten Research-Agenten mit Hinweisen zu seiner methodischen Rolle.',
      },
    ],
    sections: {
      situation: 'In einem IT-Bereich eines Energieversorgers lagen zwei umfangreiche Beschäftigtenbefragungen zur Nutzung eines digitalen Arbeitsmittels vor. Produktteams benötigten einen flexiblen Zugang zu Bewertungen und offenen Kommentaren. Da die Erhebungen aus unterschiedlichen Stichproben bestanden, durften Unterschiede nicht als Entwicklung derselben Personen oder als nachgewiesene Ursache ausgegeben werden.',
      question: 'Wie können Produktteams neue Fragen an umfangreiche Befragungsdaten stellen, ohne für jede Frage eine Einzelauswertung zu beauftragen und ohne methodische Grenzen zu verlieren?',
      approach: 'Die Lösung entwickelte sich in drei Schritten: vergleichende Auswertung, interaktives Dashboard und spezialisierter Research-Agent. Ich definierte die Wissensbasis aus Studienkontext, verfügbaren Daten, Methodenregeln und Begriffen. In Tests musste der Agent beobachtbare Unterschiede, statistische Zusammenhänge, mögliche Erklärungen und nachgewiesene Ursachen klar trennen. Fehlerfälle wurden genutzt, um Anweisungen und Prüfregeln zu präzisieren.',
      collaboration: 'Angewendete Delegationszone: „Vorschlagen und auswählen“ bei neuen Analysen, „Vorbereiten und freigeben“ bei Management-Aussagen. Der Agent findet Daten, berechnet oder verdichtet Befunde und nennt Grenzen. Eine fachkundige Person prüft Datengrundlage, Methode und Formulierung vor folgenreichen Veröffentlichungen. Bei fehlenden Variablen, uneindeutiger Frage oder unzulässiger Kausalinterpretation stoppt der Agent und fordert Klärung an.',
      insight: 'Der Mehrwert lag nicht in mehr Darstellungen, sondern in einem kontrollierten Dialog mit den Daten. Vertrauen entstand dort, wo Antworten ihre Grundlage, Unsicherheit und sinnvolle nächste Prüfung mitlieferten.',
      impact: 'Produktteams können konkrete Fragen an die Befragungsdaten stellen, ohne für jede Fragestellung eine neue Dashboardansicht aufzubauen. Zusammenhängende Ergebnisse lassen sich als One-Pager mit Datengrundlage, Befund, Interpretation, Handlungsoption und Grenze aufbereiten.',
      role: 'Ich koordinierte die vergleichende Analyse, bewertete das Dashboard als Zwischenlösung, entschied die Struktur des agentischen Arbeitsmodells, baute Wissensbasis und Prototyp, definierte Methoden- und Eskalationsregeln und gestaltete die Ergebnisformate für Produktteams und Management.',
    },
  },
  {
    slug: 'barrierefreiheit-digitaler-arbeitsplatz',
    title: 'Barrierefreiheit am digitalen Arbeitsplatz verankern',
    teaser: 'Problem: Erfahrungen mit Barrieren lagen nicht als gemeinsame Entscheidungsgrundlage vor. · Meine Rolle: Befragung und Management-Aufbereitung verantwortet. · Wirkung: Grundlage für den ersten Management-Report und die Aufnahme in einen Designprozess.',
    previewTeaser: 'Wo erleben Mitarbeitende Barrieren am digitalen Arbeitsplatz? Ich verantwortete eine Befragung und bereitete die Ergebnisse für das Management auf. Daraus entstand die Grundlage für den ersten Management-Report und die Aufnahme des Themas in die Sustainable IT Strategie 2030.',
    tags: ['Verstehen', 'Bewerten', 'Verankern'],
    featured: true,
    openItems: [
      '[FREIGABE PRÜFEN: öffentliche Nennung von Organisation, Prozessbezeichnung und Ergebnis.]',
      '[BELEG FEHLT: welche konkrete Prozessänderung, Priorität oder Maßnahme daraus beschlossen wurde.]',
    ],
    openingArtifact: {
      image: '/cases/barrierefreiheit-digitaler-arbeitsplatz/sketchnote.png',
      alt: 'Sketchnote zur Verankerung von Barrierefreiheit am digitalen Arbeitsplatz: Beschäftigtenerfahrungen werden erhoben, aufbereitet und in Entscheidungen übersetzt.',
      caption: 'Erfahrungen von Beschäftigten werden zur Grundlage für inklusivere digitale Arbeitswelten.',
    },
    sections: {
      situation: 'In einem IT-Bereich eines Energieversorgers sollte digitale Barrierefreiheit nicht nur als technische Prüfliste, sondern aus der Erfahrung von Beschäftigten verstanden und in Entscheidungen verankert werden.',
      question: 'Welche Barrieren erleben Beschäftigte am digitalen Arbeitsplatz – und wie werden diese Beobachtungen so aufbereitet, dass Management und Produktteams daraus handeln können?',
      approach: 'Ich verantwortete eine Befragung zur Barrierefreiheit am digitalen Arbeitsplatz, verdichtete die Ergebnisse für eine Management-Zielgruppe und verband die Befunde mit einem bestehenden Design- und Entscheidungsprozess.',
      insight: 'Ein Zukunftsthema wird erst dann organisatorisch wirksam, wenn Erfahrungen Betroffener in eine verständliche Entscheidungsvorlage und einen bestehenden Verantwortungsprozess übersetzt werden.',
      impact: 'Die Befragung bildete die Grundlage für den ersten Management-Report zum Thema und für die Aufnahme in einen bestehenden Designprozess.',
      role: 'Ich priorisierte die Fragestellung, verantwortete die Befragung, trennte Befund und Empfehlung in der Management-Aufbereitung und unterstützte die Verankerung in einem bestehenden Prozess.',
    },
  },
  {
    slug: 'researchops',
    title: 'ResearchOps: Research in strategischen Entscheidungen verankern',
    teaser: 'Problem: Research erreichte strategische Entscheidungen nicht verlässlich. · Meine Rolle: Intake, Standards und Zusammenarbeit mit Product Leads aufgebaut. · Wirkung: 70 % Research-Abdeckung strategischer Entscheidungen.',
    previewTeaser: 'Research wurde nicht verlässlich in strategische Entscheidungen eingebunden. Ich etablierte die strukturierte Aufnahme von Research-Bedarfen, gemeinsame Standards und die Zusammenarbeit mit Product Leads. Damit wurden 70 % der strategischen Entscheidungen durch Research unterstützt.',
    tags: ['Verstehen', 'Spezifizieren', 'Messen', 'Verankern'],
    featured: true,
    metric: {
      value: '70 %',
      label: 'Research-Abdeckung strategischer Entscheidungen',
    },
    openingArtifact: {
      image: '/cases/researchops/sketchnote.png',
      alt: 'Sketchnote dazu, wie ResearchOps Research mit strategischen Produktentscheidungen verbindet, Standards aufbaut und Wirkung messbar macht.',
      caption: 'Von einzelnen Studien zu einem verlässlichen Bestandteil strategischer Produktentscheidungen.',
    },
    sections: {
      situation: 'Bei Zooplus sollte Research nicht nur einzelne Studien liefern, sondern verlässlich in strategische Produktentscheidungen einfließen. Dafür mussten Entscheidungsbedarf, Research-Planung, Erfolgskennzahlen und Zusammenarbeit mit Product Leads stärker verbunden werden.',
      question: 'Wie wird Research von einer punktuellen Leistung zu einem wiederholbaren Bestandteil strategischer Entscheidungen?',
      approach: 'Ich verband Research-Fragen mit anstehenden Produktentscheidungen, koordinierte die Planung über Themen hinweg und definierte mit Product Leads Erfolgskennzahlen. Standards und gemeinsame Arbeitsgrundlagen halfen, Research früher in den Entscheidungsprozess einzubinden und die Abdeckung sichtbar zu machen.',
      insight: 'ResearchOps schafft Wirkung nicht durch mehr Vorlagen allein. Entscheidend ist die Verbindung aus Entscheidungszeitpunkt, klarer Verantwortung, zugänglichen Erkenntnissen und einer Kennzahl, die Nutzung statt Aktivität sichtbar macht.',
      impact: 'Die Abdeckung strategischer Entscheidungen durch Research wurde auf 70 % ausgebaut. Erfolgskennzahlen wurden mit Product Leads definiert und global integriert.',
      role: 'Ich steuerte den Ausbau der Research-Abdeckung, koordinierte Prioritäten und Studien über Produktfragen hinweg, vereinbarte Erfolgskennzahlen mit Product Leads und verankerte Research als Bestandteil strategischer Entscheidungen.',
    },
  },
  {
    slug: 'kano',
    title: 'Kano und Conjoint: Optionen nach Kundennutzen priorisieren',
    teaser: 'Problem: Investitionen in ungetestete Features sollten reduziert werden. · Meine Rolle: Bewertungslogik für zwei Produktbereiche etabliert. · Wirkung: Optionen wurden in priorisierte Anforderungen übersetzt.',
    previewTeaser: 'Welche Features rechtfertigen eine Investition? Ich etablierte für zwei Produktbereiche einen Bewertungsansatz mit Kano und Conjoint, um Kundenpräferenzen in priorisierte Anforderungen zu übersetzen.',
    tags: ['Verstehen', 'Bewerten', 'Messen'],
    openItems: [
      '[BELEG FEHLT: welche Roadmap-Entscheidung konkret geändert oder welche Investition vermieden wurde.]',
    ],
    openingArtifact: {
      image: '/cases/kano/sketchnote.png',
      alt: 'Sketchnote zum Einsatz von Kano und Conjoint, um Kundenbedürfnisse zu verstehen, Optionen zu bewerten und Anforderungen zu priorisieren.',
      caption: 'Zwei Perspektiven – ein klareres Bild für kundenzentrierte Produktentscheidungen.',
    },
    sections: {
      situation: 'Bei ATOSS standen zwei Produktbereiche vor der Frage, welche Optionen einen wahrnehmbaren Kundennutzen schaffen und welche Investitionen ohne ausreichenden Beleg vermieden werden sollten.',
      question: 'Welche Merkmale beeinflussen die wahrgenommene Produktqualität – und wie lassen sich konkurrierende Optionen nachvollziehbar priorisieren?',
      approach: 'Ich etablierte Kano und Conjoint als komplementäre Verfahren: Kano ordnete Merkmale nach ihrer Wirkung auf Zufriedenheit ein; Conjoint unterstützte die Bewertung von Präferenzen und Zielkonflikten. Die Ergebnisse wurden in eine Entscheidungsmatrix und priorisierte Anforderungen überführt.',
      insight: 'Die Methoden ersetzen keine Produktentscheidung. Sie machen aber sichtbar, welche Erwartungen grundlegend sind, wo Differenzierung möglich ist und welche Zielkonflikte bewusst entschieden werden müssen.',
      impact: 'Für zwei Produktbereiche wurden Optionen bewertet und in priorisierte Anforderungen übersetzt. Datenbasierte Entscheidungsmatrizen sollten Investitionen in ungetestete Features reduzieren.',
      role: 'Ich entschied die Methodenkombination, koordinierte Bewertung und Synthese und übersetzte die Ergebnisse für die Priorisierung in beiden Produktbereichen.',
    },
  },
  {
    slug: 'klarheit-durch-kontext',
    title: 'ADAC Kfz-Versicherung: Klarheit im Beratungsgespräch',
    teaser: 'Problem: Ein gewachsenes Beratungstool störte Gesprächsfluss und Orientierung. · Meine Rolle: Discovery, Synthese und Priorisierung koordiniert. · Wirkung: Designprinzipien, validierter Prototyp und wiederverwendbare UI-Muster.',
    previewTeaser: 'Ein über Jahre gewachsenes Beratungstool erschwerte Orientierung und Gesprächsfluss im Verkaufsgespräch. Ich koordinierte Research, die Verdichtung der Erkenntnisse und die Priorisierung von Verbesserungen. Daraus entstanden Designprinzipien, ein validierter Prototyp und wiederverwendbare UI-Muster für weitere Anwendungen.',
    tags: ['Verstehen', 'Spezifizieren', 'Bauen', 'Messen'],
    openItems: [
      '[BELEG FEHLT: Analytics-Vergleich, Zeitraum, Definition der Conversion und Zuordnung zum Rollout. Bis dahin keine Conversion-Kennzahl veröffentlichen.]',
    ],
    openingArtifact: {
      image: '/cases/adac-kfz-versicherung/sketchnote.png',
      alt: 'Sketchnote zum Weg vom Beratungskontext über Research und Prototyping bis zur getesteten Lösung.',
      caption: 'Nicht mehr Informationen schaffen Vertrauen, sondern die richtigen Informationen zum richtigen Zeitpunkt.',
    },
    visuals: [
      {
        title: 'Discovery im Beratungskontext',
        text: 'Kontextinterviews und simulierte Kundengespräche machten Zeitdruck, doppelte Eingaben, Systemgrenzen und fehlende kontextbezogene Hinweise sichtbar.',
        image: '/cases/adac-kfz-versicherung/stakeholder-workshop.png',
        alt: 'Beraterinnen, Berater und Stakeholder betrachten gemeinsam Research-Material.',
      },
      {
        title: 'Research-Synthese',
        text: 'Grounded Theory und Affinity Mapping verdichteten Beobachtungen zu strukturellen Problemen wie inkonsistenten Begriffen, fehlender Validierung und ineffizienter Navigation.',
        image: '/cases/adac-kfz-versicherung/affinity-map.jpg',
        alt: 'Gruppierte Notizen aus der qualitativen Research-Synthese.',
      },
      {
        title: 'Gemeinsame Journey',
        text: 'Die Journey aus Sicht von Beratung und Kundschaft zeigte, wo Vertrauen entsteht, Informationsdichte überfordert und Entscheidungen ins Stocken geraten.',
        image: '/cases/adac-kfz-versicherung/customer-journey.png',
        alt: 'Customer Journey für den Ablauf einer Kfz-Versicherungsberatung.',
      },
      {
        title: 'Interaktiver Prototyp',
        text: 'Adaptive Feldlogik, kontextbezogene Hilfe und eine klare visuelle Hierarchie wurden als zusammenhängender Beratungsablauf prototypisch umgesetzt.',
        image: '/cases/adac-kfz-versicherung/prototype.png',
        alt: 'Interaktiver Prototyp für die Kfz-Versicherungsberatung.',
      },
      {
        title: 'Praxistest und Übergabe',
        text: 'RITE-Usability-Runden unterstützten schnelle Iterationen. Der validierte Prototyp wurde in wiederverwendbare UI-Muster und eine Pattern Library überführt.',
        image: '/cases/adac-kfz-versicherung/usability-test.png',
        alt: 'Material aus Usability-Tests des Beratungsablaufs.',
      },
    ],
    sections: {
      situation: 'Beraterinnen und Berater in ADAC-Geschäftsstellen nutzten ein über Jahre gewachsenes digitales Werkzeug, um Kundinnen und Kunden durch komplexe Kfz-Versicherungsoptionen zu führen. Dateneingabe, Begriffe und Navigation erschwerten den Gesprächsfluss.',
      question: 'Wie kann das Werkzeug die Beratung unterstützen, ohne Aufmerksamkeit vom Gespräch abzuziehen und Vertrauen durch unnötige Komplexität zu belasten?',
      approach: 'Kontextinterviews in simulierten Beratungssituationen, Grounded-Theory-Synthese, Journey Mapping und Stakeholder-Workshops klärten die strukturellen Probleme. Daraus entstanden Designprinzipien und ein interaktiver Prototyp, der in schnellen RITE-Runden mit Beratenden iteriert wurde.',
      insight: 'Die Reibung lag nicht in einem einzelnen Interface-Element. Sie entstand aus dem Zusammenspiel von Dateneingabe, Informationszeitpunkt, Sprache, Systemgrenzen und Gesprächsdynamik.',
      impact: 'Die Arbeit führte zu abgestimmten Designprinzipien, einem getesteten Prototyp und wiederverwendbaren UI-Mustern. Die alte Website behauptete eine verbesserte Conversion, liefert dafür aber keinen belastbaren Wert.',
      role: 'Ich koordinierte die Discovery, führte Kontextinterviews und Synthese, machte Zielkonflikte in der Journey sichtbar, moderierte die Priorisierung mit Stakeholdern und übersetzte Erkenntnisse in prüfbare Designprinzipien und Prototyp-Anforderungen.',
    },
  },
  {
    slug: 'co-creation',
    title: 'Co-Creation: building a shared research practice',
    teaser: 'Problem: research should not happen alongside the team. · My role: moderated a shared working model. · Impact: [MISSING PROOF: concrete decision or changed team practice].',
    previewTeaser: 'Research sollte nicht neben dem Team stattfinden, sondern Teil der gemeinsamen Arbeit werden. Ich moderierte die Entwicklung einer gemeinsamen Arbeitsweise.',
    tags: ['Understand', 'Specify', 'Anchor'],
    draft: true,
    sections: {
      situation: 'The old portfolio page describes a “Team UX Research Culture Kickstart” intended to build alignment and ownership through co-creation. Further details on the organization, participants, baseline, and result are not documented in the available sources.',
      question: 'How does a team develop a shared research practice instead of treating research as a downstream task for a few specialists?',
      approach: 'Co-creation is suitable here as a working method to jointly define expectations, roles, quality criteria and the next experiments. [MISSING PROOF: actual workshop steps, participant groups and artefacts generated.]',
      insight: 'Shared creation can strengthen ownership; without a documented follow-up decision, however, this remains a plausible interpretation rather than a proven outcome.',
      impact: '[MISSING PROOF: which team rule, ritual, decision, or measurable behavior changed after the workshop?]',
      role: '[MISSING PROOF: what responsibility was yours – conception, facilitation, decision-making, coaching or embedding?]',
    },
  },
];

export const casesEn: CaseStudy[] = [
  {
    slug: 'zielgruppen-agent',
    title: 'Target-group agent: research access as a team standard',
    teaser: 'Product teams often struggled to find suitable research participants. I coordinated the needs, rules and rollout of an agent that is now used as a shared standard by at least two product teams.',
    tags: ['Understand', 'Specify', 'Build', 'Embed'],
    featured: true,
    openItems: [
      '[CHECK: confirm usage, wording of “team standard” and public naming of the number before publication.]',
    ],
    openingArtifact: {
      image: '/cases/zielgruppen-agent/sketchnote.png',
      alt: 'Sketchnote showing the path from manual search effort to a target-group agent: teams understand the need, clarify rules, build the agent and embed it into daily work.',
      caption: 'From manual search effort to a clear, privacy-compliant research access model for product teams.',
    },
    metric: {
      value: '≥ 2',
      label: 'product teams use the team standard',
    },
    sections: {
      situation: 'In an IT unit within an energy provider, several product teams needed suitable employees for interviews and tests on a recurring basis. The search depended on personal knowledge and manual coordination. As a result, access to target groups was hard to repeat and especially time-consuming for teams without a research routine.',
      question: 'How can product teams identify suitable research participants more independently without bypassing selection rules and data privacy requirements?',
      approach: 'I worked with the teams involved to clarify recurring search scenarios, relevant target-group characteristics and the limits of use. This produced a structured knowledge base, traceable selection rules and an agent that guides teams through target-group clarification. Rollout did not happen as a one-off demo, but with use cases, feedback loops and clear ownership for further development.',
      collaboration: 'The agent structures the request, suggests suitable target-group characteristics and makes missing information visible. The product team checks purpose and fit; the responsible unit confirms the permissible recruitment route. The agent makes no decision about the participation of individual people.',
      insight: 'Scale does not arise from a working agent alone. It emerges when selection rules, responsibilities and the handoff into the existing research process are understandable enough for teams to use the tool without constant one-to-one support.',
      impact: 'The target-group agent became the standard in the UX team and was used by at least 2 product teams.',
      role: 'I coordinated team requirements, defined the structure of the knowledge base, translated selection rules into a guided process, tested the agent with real search scenarios and enabled teams to use it in practice.',
    },
  },
  {
    slug: 'vom-problem-zum-agenten',
    title: 'Research agent: from survey data to a defensible answer',
    teaser: 'Teams had no easy access to feedback from a continuous employee survey. I coordinated the analysis, working model and agent prototype so teams can ask questions of the data themselves – with methodological limits clearly stated.',
    tags: ['Understand', 'Assess', 'Specify', 'Build', 'Measure'],
    featured: true,
    openItems: [
      '[CHECK: public description of the use case, agent name and visuals.]',
      '[MISSING PROOF: documented usage, time saved, or number of answered questions.]',
    ],
    openingArtifact: {
      image: '/cases/vom-problem-zum-agenten/sketchnote.png',
      alt: 'Sketchnote showing the path from two employee surveys via a dashboard to a research agent.',
      caption: 'From the prepared report to a conversational access model with a clear separation of finding, interpretation and recommendation.',
    },
    visuals: [
      {
        title: 'Dashboard as interim solution',
        text: 'The dashboard made prepared metrics and differences between studies visible. For new questions, however, it remained too rigid: an additional question required a new analysis or view.',
        image: '/cases/vom-problem-zum-agenten/power-bi-dashboard.png',
        alt: 'Dashboard showing trends and differences between two surveys.',
      },
      {
        title: 'Specialised research agent',
        text: 'The agent combines survey data with study context, methodological rules and a knowledge base. It shows findings, signals uncertainty and suggests next analyses without pretending to know causes or decisions.',
        image: '/cases/vom-problem-zum-agenten/george-2-3.png',
        alt: 'View of a specialised research agent with cues about its methodological role.',
      },
    ],
    sections: {
      situation: 'In an IT unit within an energy provider, two extensive employee surveys on the use of a digital workplace were available. Product teams needed flexible access to ratings and open comments. Because the surveys came from different samples, differences could not be presented as the development of the same people or as proven causes.',
      question: 'How can product teams ask new questions of large survey data without commissioning a one-off analysis for each question and without losing methodological boundaries?',
      approach: 'The solution developed in three steps: comparative evaluation, an interactive dashboard and a specialised research agent. I defined the knowledge base from study context, available data, method rules and terms. In testing, the agent had to clearly separate observable differences, statistical relationships, possible explanations and proven causes. Error cases were used to refine instructions and review rules.',
      collaboration: 'Applied delegation zone: “suggest and select” for new analyses, “prepare and approve” for management statements. The agent finds data, calculates or condenses findings and names limits. A subject-matter expert reviews data quality, method and wording before consequential publications. When variables are missing, a question is ambiguous or causal interpretation is not valid, the agent stops and asks for clarification.',
      insight: 'The value was not more visualisations, but a controlled dialogue with the data. Trust emerged where answers included their basis, uncertainty and the next meaningful check.',
      impact: 'Product teams can ask concrete questions of the survey data without building a new dashboard view for each individual question. Related insights can be prepared as a one-pager including data basis, finding, interpretation, action option and limitation.',
      role: 'I coordinated the comparative analysis, assessed the dashboard as an interim solution, decided the structure of the agentic working model, built the knowledge base and prototype, defined method and escalation rules and shaped the output formats for product teams and management.',
    },
  },
  {
    slug: 'barrierefreiheit-digitaler-arbeitsplatz',
    title: 'Embedding accessibility at the digital workplace',
    teaser: 'Where do employees experience barriers in the digital workplace? I led a survey and prepared the findings for management. This provided the basis for the first management report and for including the topic in the Sustainable IT Strategy 2030.',
    tags: ['Understand', 'Assess', 'Embed'],
    featured: true,
    openItems: [
      '[CHECK: public naming of organisation, process and result.]',
      '[MISSING PROOF: which concrete process change, priority or action was decided.]',
    ],
    openingArtifact: {
      image: '/cases/barrierefreiheit-digitaler-arbeitsplatz/sketchnote.png',
      alt: 'Sketchnote showing how digital workplace accessibility is embedded: employee experiences are collected, synthesised and translated into decisions.',
      caption: 'Employee experience becomes the foundation for more inclusive digital work environments.',
    },
    sections: {
      situation: 'In an IT unit within an energy provider, digital accessibility was to be understood not only as a technical checklist, but as a lived experience of employees and then embedded in decisions.',
      question: 'Which barriers do employees experience at the digital workplace, and how can these observations be prepared so that management and product teams can act on them?',
      approach: 'I was responsible for a survey on digital workplace accessibility, condensed the findings for a management audience and connected the results to an existing design and decision process.',
      insight: 'A future issue becomes organisationally effective only when the experiences of those affected are translated into a clear decision brief and a clear responsibility process.',
      impact: 'The survey formed the basis for the first management report on the topic and for inclusion in an existing design process.',
      role: 'I prioritised the question, led the survey, separated findings and recommendations in the management briefing and supported embedding within an existing process.',
    },
  },
  {
    slug: 'researchops',
    title: 'ResearchOps: embedding research in strategic decisions',
    teaser: 'Research was not consistently informing strategic decisions. I established a structured intake for research needs, shared standards and collaboration with Product Leads. As a result, research supported 70% of strategic decisions.',
    tags: ['Understand', 'Specify', 'Measure', 'Embed'],
    featured: true,
    metric: {
      value: '70 %',
      label: 'research coverage of strategic decisions',
    },
    openingArtifact: {
      image: '/cases/researchops/sketchnote.png',
      alt: 'Sketchnote showing how ResearchOps connects research with strategic product decisions, builds standards and makes impact measurable.',
      caption: 'From isolated studies to a reliable part of strategic product decisions.',
    },
    sections: {
      situation: 'At Zooplus, research should not only deliver isolated studies but also flow reliably into strategic product decisions. This required a stronger link between decision needs, research planning, success metrics and collaboration with product leads.',
      question: 'How do we turn research from a punctual service into a repeatable part of strategic decisions?',
      approach: 'I connected research questions to upcoming product decisions, coordinated planning across topics and defined success metrics together with product leads. Standards and shared working foundations helped bring research earlier into the decision process and make coverage visible.',
      insight: 'ResearchOps creates impact not through more templates alone. What matters is the connection between decision timing, clear responsibility, accessible insights and a metric that shows usage rather than activity.',
      impact: 'Research coverage of strategic decisions was increased to 70%. Success metrics were defined together with product leads and integrated globally.',
      role: 'I drove the expansion of research coverage, coordinated priorities and studies across product questions, agreed success metrics with product leads and embedded research as part of strategic decisions.',
    },
  },
  {
    slug: 'kano',
    title: 'Kano and Conjoint: prioritising options by customer value',
    teaser: 'Which features justify an investment? I established an evaluation approach using Kano and Conjoint for two product areas to translate customer preferences into prioritised requirements.',
    tags: ['Understand', 'Assess', 'Measure'],
    openItems: [
      '[MISSING PROOF: which roadmap decision changed or which investment was avoided.]',
    ],
    openingArtifact: {
      image: '/cases/kano/sketchnote.png',
      alt: 'Sketchnote showing how Kano and Conjoint help understand customer needs, assess options and prioritise requirements.',
      caption: 'Two perspectives — a clearer picture for customer-centric product decisions.',
    },
    sections: {
      situation: 'At ATOSS, two product areas faced the question of which options create genuine customer value and which investments should be avoided without adequate evidence.',
      question: 'Which characteristics influence the perceived product quality, and how can competing options be prioritised in a traceable way?',
      approach: 'I established Kano and Conjoint as complementary methods: Kano organised features according to their impact on satisfaction; Conjoint supported the evaluation of preferences and trade-offs. The results were translated into a decision matrix and prioritised requirements.',
      insight: 'The methods do not replace product decisions. However, they make visible which expectations are fundamental, where differentiation is possible and which trade-offs must be decided consciously.',
      impact: 'Options were assessed for two product areas and translated into prioritised requirements. Data-based decision matrices were intended to reduce investments in untested features.',
      role: 'I chose the method combination, coordinated evaluation and synthesis and translated the results for prioritisation in both product areas.',
    },
  },
  {
    slug: 'klarheit-durch-kontext',
    title: 'ADAC car insurance: clarity in the advisory conversation',
    teaser: 'A long-evolving advisory tool made it harder to navigate and maintain the flow of sales conversations. I coordinated research, synthesis of findings and prioritisation of improvements. This led to design principles, a validated prototype and reusable UI patterns for other applications.',
    tags: ['Understand', 'Specify', 'Build', 'Measure'],
    openItems: [
      '[MISSING PROOF: analytics comparison, time period, conversion definition and rollout attribution. Until then, no conversion metric should be published.]',
    ],
    openingArtifact: {
      image: '/cases/adac-kfz-versicherung/sketchnote.png',
      alt: 'Sketchnote showing the path from advisory context via research and prototyping to a tested solution.',
      caption: 'Not more information creates trust, but the right information at the right time.',
    },
    visuals: [
      {
        title: 'Discovery in the advisory context',
        text: 'Context interviews and simulated customer conversations made time pressure, duplicate entries, system limitations and missing context-aware hints visible.',
        image: '/cases/adac-kfz-versicherung/stakeholder-workshop.png',
        alt: 'Advisers and stakeholders reviewing research material together.',
      },
      {
        title: 'Research synthesis',
        text: 'Grounded theory and affinity mapping condensed observations into structural problems such as inconsistent language, missing validation and inefficient navigation.',
        image: '/cases/adac-kfz-versicherung/affinity-map.jpg',
        alt: 'Clustered notes from qualitative research synthesis.',
      },
      {
        title: 'Shared journey',
        text: 'The journey from the perspective of advisory and customer showed where trust is created, information density overwhelms and decisions stall.',
        image: '/cases/adac-kfz-versicherung/customer-journey.png',
        alt: 'Customer journey for a car insurance advisory flow.',
      },
      {
        title: 'Interactive prototype',
        text: 'Adaptive field logic, context-aware help and a clear visual hierarchy were prototyped as a coherent advisory flow.',
        image: '/cases/adac-kfz-versicherung/prototype.png',
        alt: 'Interactive prototype for the car insurance advisory flow.',
      },
      {
        title: 'Practical test and handoff',
        text: 'RITE usability rounds supported rapid iteration. The validated prototype was translated into reusable UI patterns and a pattern library.',
        image: '/cases/adac-kfz-versicherung/usability-test.png',
        alt: 'Materials from usability testing of the advisory flow.',
      },
    ],
    sections: {
      situation: 'Advisers in ADAC branches used a digital tool that had grown over the years to guide customers through complex car insurance options. Data entry, terminology and navigation made the conversation flow harder.',
      question: 'How can the tool support the consultation without pulling attention away from the conversation and creating trust through unnecessary complexity?',
      approach: 'Context interviews in simulated consultations, grounded theory synthesis, journey mapping and stakeholder workshops clarified the structural issues. These led to design principles and an interactive prototype iterated in rapid RITE cycles with advisers.',
      insight: 'The friction was not in one interface element alone. It emerged from the interaction between data entry, the timing of information, language, system boundaries and conversation dynamics.',
      impact: 'The work resulted in aligned design principles, a tested prototype and reusable UI patterns. The old website claimed improved conversion, but it did not provide a defensible value.',
      role: 'I coordinated discovery, led context interviews and synthesis, made goal conflicts visible in the journey, moderated prioritisation with stakeholders and translated findings into testable design principles and prototype requirements.',
    },
  },
  {
    slug: 'co-creation',
    title: 'Co-creation: building shared research practice',
    teaser: 'Research should not happen alongside the team, but become part of the work they do together. I facilitated the development of a shared way of working.',
    tags: ['Understand', 'Specify', 'Embed'],
    draft: true,
    sections: {
      situation: 'The old portfolio page describes a “Team UX Research Culture Kickstart” intended to build alignment and ownership through co-creation. Further details about organisation, participants, baseline and results are not documented in the available sources.',
      question: 'How does a team develop a shared research practice instead of treating research as a downstream task for a few specialists?',
      approach: 'Co-creation is useful here as a working method to jointly define expectations, roles, quality criteria and the next experiments. [MISSING PROOF: actual workshop steps, participant groups and artefacts generated.]',
      insight: 'Shared creation can strengthen ownership; without a documented follow-up decision, however, it remains a plausible interpretation rather than a proven outcome.',
      impact: '[MISSING PROOF: which team rule, ritual, decision or measurable behaviour changed after the workshop?]',
      role: '[MISSING PROOF: what responsibility was yours – conception, moderation, decision-making, coaching or embedding?]',
    },
  },
];

export const casesByLanguage = {
  de: casesDe,
  en: casesEn,
} as const;

export const cases: CaseStudy[] = casesDe;

export const sectionLabelsByLanguage = {
  de: {
    situation: 'Ausgangslage',
    question: 'Die Frage',
    approach: 'Vorgehen',
    collaboration: 'Zusammenarbeit Mensch & Agent',
    insight: 'Erkenntnis',
    impact: 'Wirkung',
    role: 'Meine Rolle',
  },
  en: {
    situation: 'Situation',
    question: 'The question',
    approach: 'Approach',
    collaboration: 'Human & agent collaboration',
    insight: 'Insight',
    impact: 'Impact',
    role: 'My role',
  },
} as const;

export const sectionLabels = sectionLabelsByLanguage.de;
