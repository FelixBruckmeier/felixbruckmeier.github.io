export type Contact = {
  label: string;
  value: string;
  href: string;
  nowrap?: boolean;
};

export type Impact = {
  title: string;
  description: string;
  outcome?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  outcomes: readonly string[];
};

export type SkillGroupData = {
  title: string;
  items: readonly string[];
};

export const cvData = {
  name: 'Felix Bruckmeier',
  metadata: {
    title: 'Felix Bruckmeier – UX Manager für Human-AI Work Design',
    description: 'Lebenslauf von Felix Bruckmeier, UX Manager für Human-AI Work Design, Research und belastbare Produktentscheidungen.',
  },
  pageOne: {
    kicker: 'Lebenslauf',
    positioning: 'UX Manager für Human-AI Work Design',
    focus: 'Research · Entscheidungsqualität · Mensch-Agent-Workflows',
    profile: 'Volkswirt und UX Manager mit rund zehn Jahren Erfahrung darin, komplexe Fragestellungen in belastbare Produktentscheidungen zu übersetzen. Ich verbinde Research, Arbeitsgestaltung und selbst gebaute agentische Prototypen – vom relevanten Problem über klare Verantwortung bis zum Wirkungsnachweis.',
    portraitAlt: 'Porträt von Felix Bruckmeier',
    contactsLabel: 'Kontakt',
    contacts: [
      {
        label: 'E-Mail',
        value: 'felixbruckmeier@googlemail.com',
        href: 'mailto:felixbruckmeier@googlemail.com',
        nowrap: true,
      },
      {
        label: 'Telefon',
        value: '+49 152 53494396',
        href: 'tel:+4915253494396',
        nowrap: true,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/felix-bruckmeier-89a00a1bb',
        href: 'https://www.linkedin.com/in/felix-bruckmeier-89a00a1bb',
      },
      {
        label: 'Website',
        value: 'felixbruckmeier.github.io',
        href: 'https://felixbruckmeier.github.io',
      },
    ] satisfies readonly Contact[],
    currentRoleLabel: 'Aktuelle Position',
    currentRole: {
      company: 'EnBW Energie Baden-Württemberg AG',
      role: 'UX Manager, C-TIA – Wertstrom Zugang & Systeme',
      period: 'Apr. 2026 – heute',
    },
    impactsHeading: 'Beiträge & Wirkung · Human-AI Work Design',
    impactsCount: '01—06',
    impacts: [
      {
        title: 'Agentische Zielgruppensegmentierung',
        description: 'Agentische Lösung zur Zielgruppenfindung entwickelt, mit der Teams Research-Teilnehmende schneller identifizieren und gezielt ansprechen.',
        outcome: 'Standard im UX-Team, genutzt von mindestens 2 Produktteams (Wertstrom Zugang & Systeme)',
      },
      {
        title: 'Teilnehmendenaktivierung',
        description: 'Ursachen rückläufiger Beteiligung an freiwilligen Formaten analysiert und Handlungsfelder zur Stabilisierung der Teilnahme abgeleitet.',
        outcome: 'Grundlage für die Maßnahmenplanung des MLX-Teams',
      },
      {
        title: 'KI-gestützte Befragungsanalyse',
        description: 'Agenten zur Auswertung zweier Befragungen zur Laptopzufriedenheit entwickelt, die Fragen zum Nutzerfeedback direkt beantworten.',
        outcome: 'Produktteams beantworten Fragen selbstständig statt über aufwendige Einzelrecherchen',
      },
      {
        title: 'Serviceorientierung',
        description: 'Agenten zur Entwicklung von Mitarbeiter-Journeys gebaut, die Teams dabei unterstützen, Maßnahmen entlang der Journey serviceorientiert auszurichten.',
        outcome: 'Wird von den Teams aktuell erprobt.',
      },
      {
        title: 'Entscheidungsgrundlagen',
        description: 'Analysen managementgerecht aufbereitet, darunter die EnMAB-Ergebnisse zur IT – mit klarer Trennung von Befund, Ursache und Empfehlung.',
        outcome: 'Richtung für die Maßnahmenplanung vorgegeben',
      },
      {
        title: 'UX- und KI-Transformation',
        description: 'UX Research für drei Produktteams koordiniert und Rollenbilder sowie Use Cases für agentische Arbeitsweisen entwickelt.',
        outcome: 'Aktuell in der Tertialzieleplanung.',
      },
    ] satisfies readonly Impact[],
    subjectMatterMeta: 'Sustainable IT · Subject Matter Expert (SME)',
    subjectMatterImpacts: [
      {
        title: 'Digitale Barrierefreiheit',
        description: 'Befragung zur Barrierefreiheit am digitalen Arbeitsplatz verantwortet.',
        outcome: 'Grundlage für den ersten Management-Report und die Aufnahme in den CbD-Prozess',
      },
      {
        title: 'Green IT & Change',
        description: 'Sensibilisierungsformate mitgestaltet und die Perspektive „KI-Nutzen vs. Ressourcenverbrauch“ eingebracht.',
      },
    ] satisfies readonly Impact[],
    footerPage: '01 / 02',
  },
  pageTwo: {
    kicker: 'Werdegang & Profil',
    heading: 'Berufserfahrung',
    experienceLabel: 'Berufliche Stationen',
    experience: [
      {
        company: 'ATOSS Software SE',
        role: 'Lead UX Manager',
        period: 'Jan. 2025 – Mai 2025',
        outcomes: [
          'Datenbasierte Entscheidungsmatrizen eingeführt, um Investitionen in ungetestete Features zu reduzieren.',
          'Optionen für zwei Produktbereiche bewertet und in priorisierte Anforderungen übersetzt.',
          'Kano und Conjoint zur wertorientierten Roadmap-Steuerung etabliert.',
        ],
      },
      {
        company: 'Zooplus SE',
        role: 'UX Strategy & Research Manager',
        period: 'Jul. 2022 – Dez. 2024',
        outcomes: [
          'Abdeckung strategischer Entscheidungen durch Research auf 70 % ausgebaut.',
          'Neue Navigationsstruktur validiert und Conversion-Stabilität beim Relaunch abgesichert.',
          'Erfolgskennzahlen mit Product Leads definiert und global integriert.',
        ],
      },
      {
        company: 'Swiss Life AG',
        role: 'Lead UX Manager',
        period: 'Mai 2020 – Jun. 2022',
        outcomes: [
          'Produktgremium beim Markteintritt eines neuen BU-Tarifs bis zum Launch begleitet.',
          'Human-Centered Design im SAFe-Framework und in der Backlog-Priorisierung verankert.',
        ],
      },
      {
        company: 'Kaiser X Labs GmbH (Allianz)',
        role: 'UX Researcher',
        period: 'Aug. 2018 – Apr. 2020',
        outcomes: [
          'Services eines neuen Service Hubs bewertet und in eine priorisierte Roadmap überführt.',
          'Robo-Advisor-Studie mit MaxDiff und Segmentierungsanalysen geleitet.',
        ],
      },
      {
        company: 'empiriecom GmbH & Co. KG',
        role: 'Consultant User-Centered Design',
        period: 'Feb. 2016 – Jul. 2018',
        outcomes: [
          'A/B-Tests für Fit-Prognose-Algorithmen durchgeführt.',
          'Reibungspunkte in Funnel- und Tracking-Daten in Backlog-Optimierungen übersetzt.',
        ],
      },
    ] satisfies readonly Experience[],
    aiProfile: {
      title: 'Human-AI Work Design',
      text: 'Ich gestalte nicht nur eine Oberfläche für KI. Ich kläre das Problem, verteile Aufgaben und Verantwortung zwischen Mensch und Agent, baue einen prüfbaren Prototyp und definiere Checkpoints, Eskalation und Wirkungsnachweis.',
    },
    competenciesHeading: 'Kompetenzen',
    skills: [
      {
        title: 'UX-Strategie',
        items: [
          'Wertorientierte Priorisierung',
          'KPI-Frameworks',
          'Entscheidungsvorlagen',
          'Journeys & Serviceorientierung',
        ],
      },
      {
        title: 'Human-AI Work Design',
        items: [
          'Delegationsmodelle & Checkpoints',
          'Copilot Studio · Agent Builder',
          'KI-gestützte Analyse',
          'Prototyping mit React',
        ],
      },
      {
        title: 'Transformation & Methoden',
        items: ['ResearchOps', 'SAFe · Lean UX · Design Thinking'],
      },
      {
        title: 'Kommunikation',
        items: [
          'Executive Storytelling',
          'Management-Reports',
          'Strategische Workshops',
          'Stakeholdermanagement',
        ],
      },
      {
        title: 'Research & Analytics',
        items: [
          'Conjoint · MaxDiff · Kano',
          'Befragungen · A/B-Tests',
          'Interviews · Discovery',
          'SPSS · R · Adobe Analytics',
        ],
      },
    ] satisfies readonly SkillGroupData[],
    education: {
      title: 'Ausbildung',
      degree: 'M.Sc. & B.Sc. Volkswirtschaftslehre',
      institution: 'Universität Augsburg',
      period: '2008–2014',
    },
    languages: {
      title: 'Sprachen',
      items: ['Deutsch (Muttersprache)', 'Englisch (fließend)'],
    },
    tools: {
      title: 'Tools',
      items: ['Jira · Confluence · Miro', 'VS Code · GitHub Copilot'],
    },
    footerPage: '02 / 02',
  },
  actions: {
    back: 'Zurück zur Website',
    print: 'Drucken',
  },
} as const;

export const cvDataByLanguage = {
  de: cvData,
  en: {
    name: 'Felix Bruckmeier',
    metadata: {
      title: 'Felix Bruckmeier – UX Manager for Human-AI Work Design',
      description: 'CV of Felix Bruckmeier, UX Manager for Human-AI Work Design, research and decision-ready product strategy.',
    },
    pageOne: {
      kicker: 'CV',
      positioning: 'UX Manager for Human-AI Work Design',
      focus: 'Research · Decision quality · Human-agent workflows',
      profile: 'Economist and UX manager with nearly ten years of experience turning complex issues into robust product decisions. I connect research, work design and self-built agentic prototypes – from the relevant problem through clear responsibility to measurable impact.',
      portraitAlt: 'Portrait of Felix Bruckmeier',
      contactsLabel: 'Contact',
      contacts: [
        {
          label: 'Email',
          value: 'felixbruckmeier@googlemail.com',
          href: 'mailto:felixbruckmeier@googlemail.com',
          nowrap: true,
        },
        {
          label: 'Phone',
          value: '+49 152 53494396',
          href: 'tel:+4915253494396',
          nowrap: true,
        },
        {
          label: 'LinkedIn',
          value: 'linkedin.com/in/felix-bruckmeier-89a00a1bb',
          href: 'https://www.linkedin.com/in/felix-bruckmeier-89a00a1bb',
        },
        {
          label: 'Website',
          value: 'felixbruckmeier.github.io',
          href: 'https://felixbruckmeier.github.io',
        },
      ] satisfies readonly Contact[],
      currentRoleLabel: 'Current position',
      currentRole: {
        company: 'EnBW Energie Baden-Württemberg AG',
        role: 'UX Manager, C-TIA – Value Stream Access & Systems',
        period: 'Apr. 2026 – present',
      },
      impactsHeading: 'Contributions & impact · Human-AI Work Design',
      impactsCount: '01—06',
      impacts: [
        {
          title: 'Agentic target-group segmentation',
          description: 'Developed an agentic solution for target-group identification to help teams find and contact research participants faster and more precisely.',
          outcome: 'Standard in the UX team, used by at least 2 product teams (Value Stream Access & Systems)',
        },
        {
          title: 'Participant activation',
          description: 'Analyzed the causes of declining participation in voluntary formats and identified actions to stabilize participation.',
          outcome: 'Basis for the measures plan of the MLX team',
        },
        {
          title: 'AI-supported survey analysis',
          description: 'Developed agents to evaluate two laptop satisfaction surveys and directly answer questions about user feedback.',
          outcome: 'Product teams answer questions independently instead of relying on time-consuming individual research',
        },
        {
          title: 'Service orientation',
          description: 'Built agents to support employee journey development, helping teams align measures and service-oriented actions along the journey.',
          outcome: 'Currently being tested by the teams',
        },
        {
          title: 'Decision foundations',
          description: 'Prepared management-ready analyses, including the EnMAB results for IT, with a clear distinction between findings, causes and recommendations.',
          outcome: 'Defined direction for the measures plan',
        },
        {
          title: 'UX and AI transformation',
          description: 'Coordinated UX research across three product teams and developed role models and use cases for agentic ways of working.',
          outcome: 'Currently included in the quarterly target planning',
        },
      ] satisfies readonly Impact[],
      subjectMatterMeta: 'Sustainable IT · Subject Matter Expert (SME)',
      subjectMatterImpacts: [
        {
          title: 'Digital accessibility',
          description: 'Responsible for the survey on accessibility at the digital workplace.',
          outcome: 'Basis for the first management report and inclusion in the CbD process',
        },
        {
          title: 'Green IT & Change',
          description: 'Helped shape awareness formats and contributed the perspective of “AI value vs. resource consumption.”',
        },
      ] satisfies readonly Impact[],
      footerPage: '01 / 02',
    },
    pageTwo: {
      kicker: 'Career & profile',
      heading: 'Professional experience',
      experienceLabel: 'Career path',
      experience: [
        {
          company: 'ATOSS Software SE',
          role: 'Lead UX Manager',
          period: 'Jan. 2025 – May 2025',
          outcomes: [
            'Introduced data-based decision matrices to reduce investment in untested features.',
            'Evaluated options for two product areas and translated them into prioritized requirements.',
            'Established Kano and Conjoint for value-oriented roadmap control.',
          ],
        },
        {
          company: 'Zooplus SE',
          role: 'UX Strategy & Research Manager',
          period: 'Jul. 2022 – Dec. 2024',
          outcomes: [
            'Expanded research coverage of strategic decisions to 70%.',
            'Validated a new navigation structure and secured conversion stability during the relaunch.',
            'Defined success metrics with product leads and integrated them globally.',
          ],
        },
        {
          company: 'Swiss Life AG',
          role: 'Lead UX Manager',
          period: 'May 2020 – Jun. 2022',
          outcomes: [
            'Supported the product premium during the market entry of a new BU tariff through launch.',
            'Embedded human-centered design into the SAFe framework and backlog prioritization.',
          ],
        },
        {
          company: 'Kaiser X Labs GmbH (Allianz)',
          role: 'UX Researcher',
          period: 'Aug. 2018 – Apr. 2020',
          outcomes: [
            'Evaluated services of a new service hub and translated them into a prioritized roadmap.',
            'Led a robo-advisor study using MaxDiff and segmentation analyses.',
          ],
        },
        {
          company: 'empiriecom GmbH & Co. KG',
          role: 'Consultant User-Centered Design',
          period: 'Feb. 2016 – Jul. 2018',
          outcomes: [
            'Conducted A/B tests for fit prediction algorithms.',
            'Translated friction points in funnel and tracking data into backlog optimization.',
          ],
        },
      ] satisfies readonly Experience[],
      aiProfile: {
        title: 'Human-AI Work Design',
        text: 'I do not just design an interface for AI. I clarify the problem, distribute tasks and responsibility between human and agent, build a testable prototype and define checkpoints, escalation and impact evidence.',
      },
      competenciesHeading: 'Competencies',
      skills: [
        {
          title: 'UX strategy',
          items: [
            'Value-oriented prioritization',
            'KPI frameworks',
            'Decision briefs',
            'Journeys & service orientation',
          ],
        },
        {
          title: 'Human-AI Work Design',
          items: [
            'Delegation models & checkpoints',
            'Copilot Studio · Agent Builder',
            'AI-supported analysis',
            'Prototyping with React',
          ],
        },
        {
          title: 'Transformation & methods',
          items: ['ResearchOps', 'SAFe · Lean UX · Design Thinking'],
        },
        {
          title: 'Communication',
          items: [
            'Executive storytelling',
            'Management reports',
            'Strategic workshops',
            'Stakeholder management',
          ],
        },
        {
          title: 'Research & analytics',
          items: [
            'Conjoint · MaxDiff · Kano',
            'Surveys · A/B tests',
            'Interviews · Discovery',
            'SPSS · R · Adobe Analytics',
          ],
        },
      ] satisfies readonly SkillGroupData[],
      education: {
        title: 'Education',
        degree: 'M.Sc. & B.Sc. Economics',
        institution: 'University of Augsburg',
        period: '2008–2014',
      },
      languages: {
        title: 'Languages',
        items: ['German (native)', 'English (fluent)'],
      },
      tools: {
        title: 'Tools',
        items: ['Jira · Confluence · Miro', 'VS Code · GitHub Copilot'],
      },
      footerPage: '02 / 02',
    },
    actions: {
      back: 'Back to website',
      print: 'Print',
    },
  },
} as const;