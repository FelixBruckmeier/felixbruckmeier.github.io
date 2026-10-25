export type Language = 'de' | 'en';

export const languages: Language[] = ['de', 'en'];

export const translations = {
  de: {
    nav: [
      { href: '/#rolle', label: 'Meine Rolle' },
      { href: '/#fallstudien', label: 'Fallstudien' },
      { href: '/lebenslauf', label: 'Über mich' },
      { href: '/#kontakt', label: 'Kontakt' },
    ],
    menu: { open: 'Menü', close: 'Schließen' },
    booking: 'Erstgespräch buchen',
    accessibility: {
      skipToContent: 'Zum Inhalt springen',
      languageToggle: 'Sprache wechseln',
      mainNav: 'Hauptnavigation',
    },
    hero: {
      eyebrow: 'UX Manager für Human-AI Work Design',
      headlineStart: 'KI-Lösungen einzuführen ist leicht. Sie in ',
      headlineEmphasis: 'Wirkung',
      headlineEnd: ' zu bringen ist schwer.',
      lead: 'Wenn Lösungen durch KI schnell verfügbar sind, werden die richtigen Problemstellungen zum neuen Engpass. Ich helfe Produkt- und Führungsteams, den Fokus genau darauf zu richten. Ich bringe die richtigen Entscheider zusammen, damit gemeinsam KI-Lösungen entstehen, die im Alltag wirken.',
      primaryCta: 'Vorhaben besprechen',
      secondaryCta: 'Wirkungsbelege ansehen',
      trust: [
        {
          title: '10+ Jahre',
          description: 'Erfahrung in UX Research und Strategie',
        },
        {
          title: '5 Branchen',
          description: 'von E-Commerce und Versicherungen bis Energie',
        },
        {
          title: 'Von Research bis Prototyp',
          description: 'Strategie, Research und selbst entwickelte KI-Agenten',
        },
      ],
    },
    problem: {
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
    },
    offers: {
      title: 'Wobei ich Sie unterstütze',
      intro: 'Vier klar begrenzte Formate – vom unscharfen Problem bis zur verankerten Arbeitsweise.',
      items: [
        {
          level: 'Typische Dauer: 2–3 Wochen',
          title: 'Entscheidungs-Sprint',
          text: 'Ausgangssituation: Viele Anforderungen, aber keine gemeinsame Priorität. Vorgehen: Entscheidungsfrage klären, Nutzer- und Geschäftssignale verdichten, Optionen nach Nutzen und Risiko bewerten.',
          result: 'Ergebnis: Entscheidungsvorlage, priorisierte Optionen und offene Belege.',
          caseSlug: 'kano',
        },
        {
          level: 'Typische Dauer: 3–5 Wochen',
          title: 'Human-AI-Workflow-Sprint',
          text: 'Ausgangssituation: Ein KI-Anwendungsfall ist denkbar, Rollen, Grenzen und Übergaben sind aber unklar. Vorgehen: Arbeit analysieren, Delegationszone bestimmen, Checkpoints, Eskalation und Transparenz spezifizieren.',
          result: 'Ergebnis: Soll-Ablauf, Delegationsmodell, Prüfregeln und Evaluationsplan.',
          caseSlug: 'vom-problem-zum-agenten',
        },
        {
          level: 'Typische Dauer: 4–8 Wochen',
          title: 'Agenten-Prototyp und Praxistest',
          text: 'Ausgangssituation: Annahmen sollen vor einer größeren Umsetzung geprüft werden. Vorgehen: Wissensbasis und Agent aufbauen, mit realistischen Aufgaben erproben, Fehlerbilder dokumentieren und iterieren.',
          result: 'Ergebnis: Funktionsfähiger Prototyp, Testbefunde, Grenzen und belastbare nächste Entscheidung.',
          caseSlug: 'zielgruppen-agent',
        },
        {
          level: 'Typische Dauer: 6–12 Wochen',
          title: 'UX- und Research-System',
          text: 'Ausgangssituation: Research und UX hängen an Einzelpersonen oder kommen zu spät. Vorgehen: Entscheidungsbedarf, Rollen, Intake, Standards, Vorlagen und Lernschleifen gemeinsam mit den Teams etablieren.',
          result: 'Ergebnis: Arbeitsmodell, Standards, befähigte Teams und ein Messpunkt für Nutzung und Wirkung.',
          caseSlug: 'researchops',
        },
      ],
      resultLabel: 'Ergebnis:',
      links: {
        case: 'Passende Fallstudie →',
        request: 'Anfragen',
      },
    },
    approach: {
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
    },
    casesSection: {
      title: 'Woran Sie meine Arbeitsweise prüfen können',
      intro: 'Fallstudien mit Problem, meiner Rolle, Ergebnis und klar benannten Beleglücken.',
    },
    about: {
      title: 'Über mich',
      paragraphs: [
        'Volkswirt und UX Manager mit rund zehn Jahren Erfahrung in Research, Produktstrategie und Organisationsentwicklung – von E-Commerce und Versicherung bis zu IT und KI.',
        'Meine Haltung: Erst das relevante Problem und die Entscheidung klären, dann bauen. Zukunftsthemen wie verantwortungsvolle KI, Barrierefreiheit und Nachhaltigkeit behandle ich nicht als Zusatz, sondern als Anforderungen an gute Arbeits- und Produktgestaltung.',
      ],
      quote: 'Gute UX macht nicht nur ein System leichter bedienbar. Sie macht Verantwortung, Entscheidungen und Wirkung verständlich.',
      cvCta: 'Lebenslauf ansehen',
    },
    contact: {
      title: 'Lassen Sie uns Ihr Vorhaben in 30 Minuten klären.',
      text: 'Zusammenarbeit: projektbezogen, als Sparring für Führungsteams oder eingebettet in ein Produktteam – vor Ort im Raum Augsburg/München und remote. Ich sage Ihnen im Erstgespräch offen, ob mein Profil zum Problem passt.',
      primaryCta: 'Vorhaben besprechen',
      formIntro: 'Wenn Sie lieber schreiben: Beschreiben Sie Ausgangslage, gewünschte Entscheidung und Zeitrahmen.',
      responsePrefix: 'Ich antworte in der Regel innerhalb von',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
    form: {
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      submit: 'Nachricht senden',
      privacy: 'Mit dem Absenden werden Ihre Angaben gemäß der',
      privacyLink: 'Datenschutzerklärung',
      fallback: 'Schreiben Sie mir an ',
    },
  },
  en: {
    nav: [
      { href: '/#rolle', label: 'My role' },
      { href: '/#fallstudien', label: 'Case studies' },
      { href: '/lebenslauf', label: 'About me' },
      { href: '/#kontakt', label: 'Contact' },
    ],
    menu: { open: 'Menu', close: 'Close' },
    booking: 'Book intro call',
    accessibility: {
      skipToContent: 'Skip to content',
      languageToggle: 'Switch language',
      mainNav: 'Main navigation',
    },
    hero: {
      eyebrow: 'UX Manager for Human-AI Work Design',
      headlineStart: 'Introducing AI solutions is easy. Bringing them to ',
      headlineEmphasis: 'impact',
      headlineEnd: ' is hard.',
      lead: 'When AI makes solutions quickly available, the right problems become the new bottleneck. I help product and leadership teams focus on exactly that. I bring the right decision-makers together so they can create AI solutions that make a difference in everyday work.',
      title: 'Let’s clarify your project in 30 minutes.',
      text: '',
      primaryCta: 'Discuss a project',
      secondaryCta: 'View impact evidence',
      trust: [
        {
          title: '10+ years',
          description: 'of experience in UX research and strategy',
        },
        {
          title: '5 industries',
          description: 'from e-commerce and insurance to energy',
        },
        {
          title: 'From research to prototype',
          description: 'Strategy, research and self-built AI agents',
        },
      ],
    },
    problem: {
      title: 'The bottleneck is no longer development, but problem understanding and decision quality.',
      text: 'AI accelerates building. But it does not answer which problem matters, which decision needs to be prepared, or what responsibility remains with the human. Without this clarity, output increases faster – not automatically impact.',
      questions: [
        {
          title: 'Clarify the problem',
          text: 'What work should change for whom – and how do we recognise the value?',
        },
        {
          title: 'Distribute responsibility',
          text: 'What can the agent do, what should it only prepare, and what does the human decide?',
        },
        {
          title: 'Build trust',
          text: 'Who checks results, at which checkpoints, and how is uncertainty escalated?',
        },
        {
          title: 'Demonstrate impact',
          text: 'Which decision, workflow or outcome has clearly improved?',
        },
      ],
      transition: 'I connect research, work design and prototyping into a traceable path from problem clarification to impact evidence.',
    },
    offers: {
      title: 'Where I can support you',
      intro: 'Four clearly scoped formats – from a vague problem to an embedded way of working.',
      items: [
        {
          level: 'Typical duration: 2–3 weeks',
          title: 'Decision Sprint',
          text: 'Situation: Many requests, but no shared priority. Approach: clarify the decision question, consolidate user and business signals, evaluate options by value and risk.',
          result: 'Outcome: decision brief, prioritised options and open evidence gaps.',
          caseSlug: 'kano',
        },
        {
          level: 'Typical duration: 3–5 weeks',
          title: 'Human-AI Workflow Sprint',
          text: 'Situation: An AI use case is possible, but roles, boundaries and handoffs are unclear. Approach: analyse work, define the delegation zone, specify checkpoints, escalation and transparency.',
          result: 'Outcome: target process, delegation model, review rules and evaluation plan.',
          caseSlug: 'vom-problem-zum-agenten',
        },
        {
          level: 'Typical duration: 4–8 weeks',
          title: 'Agent prototype and field test',
          text: 'Situation: Assumptions need to be tested before a larger rollout. Approach: build the knowledge base and agent, test against realistic tasks, document failure modes and iterate.',
          result: 'Outcome: working prototype, test findings, boundaries and a better next decision.',
          caseSlug: 'zielgruppen-agent',
        },
        {
          level: 'Typical duration: 6–12 weeks',
          title: 'UX and research system',
          text: 'Situation: research and UX depend on individuals or start too late. Approach: define decision needs, roles, intake, standards, templates and learning loops together with the teams.',
          result: 'Outcome: operating model, standards, capable teams and a measure for adoption and impact.',
          caseSlug: 'researchops',
        },
      ],
      resultLabel: 'Outcome:',
      links: {
        case: 'Relevant case study →',
        request: 'Request',
      },
    },
    approach: {
      title: 'How I work',
      intro: 'A traceable process in which each phase prepares a decision.',
      steps: [
        {
          title: 'Understand',
          question: 'What work should change for whom?',
          result: 'Problem, context and stakeholders',
        },
        {
          title: 'Assess',
          question: 'Which option creates value – and what risk does it carry?',
          result: 'Priority and delegation zone',
        },
        {
          title: 'Specify',
          question: 'Who does what, who checks and when is escalation triggered?',
          result: 'Target workflow and checkpoints',
        },
        {
          title: 'Build',
          question: 'Which assumptions can be tested with a prototype?',
          result: 'Testable workflow or agent',
        },
        {
          title: 'Measure',
          question: 'Which decision or work result is better?',
          result: 'Signals of impact and trust',
        },
        {
          title: 'Embed',
          question: 'How does a pilot become a durable practice?',
          result: 'Roles, standards and enablement',
        },
      ],
      note: 'I build prototypes myself – not as a substitute for product development, but as a learning tool: to test assumptions early and prepare better investment decisions.',
    },
    casesSection: {
      title: 'Case studies to assess my way of working',
      intro: 'Examples with problem, my role, outcome and clearly named evidence gaps.',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'Economist and UX manager with around ten years of experience in research, product strategy and organisational development – from e-commerce and insurance to IT and AI.',
        'My approach: first clarify the relevant problem and decision, then build. I treat future issues such as responsible AI, accessibility and sustainability as requirements for good work and product design, not as an add-on.',
      ],
      quote: 'Good UX does more than make a system easier to use. It makes responsibility, decisions and impact understandable.',
      cvCta: 'View CV',
    },
    contact: {
      title: 'Let’s clarify your project in 30 minutes.',
      primaryCta: 'Discuss a project',
      formIntro: 'If you prefer writing: describe the situation, the decision you want to make and the time frame.',
      responsePrefix: 'I usually respond within',
    },
    footer: {
      rights: 'All rights reserved',
      imprint: 'Imprint',
      privacy: 'Privacy policy',
    },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      privacy: 'By submitting, your information will be processed in accordance with the',
      privacyLink: 'privacy policy',
      fallback: 'Write to me at ',
    },
  },
} as const;
