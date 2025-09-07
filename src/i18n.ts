// src/i18n.ts
type Dict = Record<string, string>;

const en: Dict = {
  'home.title': 'Felix Bruckmeier — UX Research',
  'home.subtitle': 'Strategic UX Research • ResearchOps • UX Strategy',
  'home.cta.projects': 'Selected work',
  'about.title': 'About me',
  'about.copy':
    'I’m a UX Researcher with a background in econometrics and communications. I help organizations make better product decisions with evidence-based research and scalable ResearchOps. My pillars: Empowerment, Impact Orientation, Continuous Learning.',
  'about.pillars': 'Pillars',
  'about.pillars.empowerment': 'Empowerment',
  'about.pillars.impact': 'Impact orientation',
  'about.pillars.learning': 'Continuous learning',
  'expertise.title': 'Expertise',
  'expertise.explainer':
    'I help companies build research capabilities that are fast, reliable, and directly tied to strategy and business outcomes.',
  'expertise.roof': 'Process & Tooling',
  'expertise.floor': 'User-centered Value Creation',
  'expertise.strategic.title': 'Strategic UX Research',
  'expertise.strategic.body':
    'I design and run research strategies that directly support business goals.',
  'expertise.needs.title': 'Needs → Product Strategy',
  'expertise.needs.body':
    'I turn complex user needs into actionable product strategies that drive innovation and growth.',
  'expertise.reops.title': 'ResearchOps',
  'expertise.reops.body':
    'I create and optimize processes, tools, and systems for efficient, scalable research.',
  'expertise.team.title': 'Team Leadership & Mentoring',
  'expertise.team.body':
    'I lead high-performing research teams, develop talent, and foster a culture of collaboration and excellence.',
  'expertise.roi.title': 'Proving ROI',
  'expertise.roi.body':
    'I prove the ROI of UX Research and deliver insights that influence key decisions.',
  'projects.title': 'Projects',
  'projects.adac.title': 'ADAC Car Insurance',
  'projects.adac.teaser':
    'UX strategy and pricing component usability to improve quote conversion.',
  'projects.zooreops.title': 'zooplus ResearchOps',
  'projects.zooreops.teaser':
    'Scaling research via governance, tooling, and insights activation.',
  'projects.swiss.title': 'Swiss Life B2B2C',
  'projects.swiss.teaser':
    'Journey research and conjoint to optimize product-market fit.',
  'projects.zoopricing.title': 'zooplus Pricing',
  'projects.zoopricing.teaser':
    'MaxDiff and qualitative tests to refine pricing communication.',
  'cv.title': 'Professional Experience',
  'cv.open_full': 'Open full CV →',
  'craft.title': 'Craft & Research',
  'craft.copy':
    'I connect hands-on, craftsman-like iteration with rigorous research to deliver robust solutions.',
  'contact.title': 'Contact',
  'contact.cta.title': 'Schedule a Discovery Call',
  'contact.cta.body':
    "I'm eager to learn about your challenges and explore how my expertise in strategic UX Research, ResearchOps, and UX Strategy can help your organization thrive. Let's connect!",
  'case.back': '← Back to projects',
};

const de: Dict = {
  'home.title': 'Felix Bruckmeier — UX Research',
  'home.subtitle': 'Strategic UX Research • ResearchOps • UX-Strategie',
  'home.cta.projects': 'Ausgewählte Arbeiten',
  'about.title': 'Über mich',
  'about.copy':
    'Ich bin UX Researcher mit einem Hintergrund in Ökonometrie und Kommunikationswissenschaft. Ich helfe Organisationen, bessere Produktentscheidungen mit evidenzbasierter Forschung und skalierbaren ResearchOps zu treffen. Meine Säulen: Empowerment, Impact-Orientierung, Kontinuierliches Lernen.',
  'about.pillars': 'Säulen',
  'about.pillars.empowerment': 'Empowerment',
  'about.pillars.impact': 'Impact-Orientierung',
  'about.pillars.learning': 'Kontinuierliches Lernen',
  'expertise.title': 'Expertise',
  'expertise.explainer':
    'Ich helfe Unternehmen, Forschungskapazitäten aufzubauen, die schnell, verlässlich und direkt mit Strategie und Geschäftszielen verknüpft sind.',
  'expertise.roof': 'Prozess & Tooling',
  'expertise.floor': 'User-centered Value Creation',
  'expertise.strategic.title': 'Strategic UX Research',
  'expertise.strategic.body':
    'Ich konzipiere und steuere Research-Strategien, die Geschäftsziele unmittelbar unterstützen.',
  'expertise.needs.title': 'Needs → Product Strategy',
  'expertise.needs.body':
    'Ich übersetze komplexe Nutzerbedürfnisse in umsetzbare Produktstrategien, die Innovation und Wachstum fördern.',
  'expertise.reops.title': 'ResearchOps',
  'expertise.reops.body':
    'Ich schaffe und optimiere Prozesse, Tools und Systeme für effiziente, skalierbare Forschung.',
  'expertise.team.title': 'Team Leadership & Mentoring',
  'expertise.team.body':
    'Ich führe leistungsstarke Research-Teams, entwickle Talente und fördere eine Kultur der Zusammenarbeit und Exzellenz.',
  'expertise.roi.title': 'Proving ROI',
  'expertise.roi.body':
    'Ich belege den ROI von UX Research und liefere Insights, die wichtige Entscheidungen beeinflussen.',
  'projects.title': 'Projekte',
  'projects.adac.title': 'ADAC Kfz-Versicherung',
  'projects.adac.teaser':
    'UX-Strategie und Usability der Pricing-Komponente zur Verbesserung der Abschlussquote.',
  'projects.zooreops.title': 'zooplus ResearchOps',
  'projects.zooreops.teaser':
    'Skalierung von Research durch Governance, Tooling und Insights-Aktivierung.',
  'projects.swiss.title': 'Swiss Life B2B2C',
  'projects.swiss.teaser':
    'Journey-Research und Conjoint zur Optimierung des Product-Market-Fit.',
  'projects.zoopricing.title': 'zooplus Pricing',
  'projects.zoopricing.teaser':
    'MaxDiff und qualitative Tests zur Verfeinerung der Preiskommunikation.',
  'cv.title': 'Berufserfahrung',
  'cv.open_full': 'Vollständigen CV öffnen →',
  'craft.title': 'Handwerk & Research',
  'craft.copy':
    'Ich verbinde handwerkliche Iteration mit rigoroser Forschung, um robuste Lösungen zu schaffen.',
  'contact.title': 'Kontakt',
  'contact.cta.title': 'Discovery Call vereinbaren',
  'contact.cta.body':
    'Ich freue mich, Ihre Herausforderungen kennenzulernen und zu zeigen, wie meine Expertise in Strategic UX Research, ResearchOps und UX-Strategie Ihrem Unternehmen helfen kann. Lassen Sie uns sprechen!',
  'case.back': '← Zurück zu Projekte',
};

let current = localStorage.getItem('lang') || 'en';
export function t(key: string) {
  const dict = current === 'de' ? de : en;
  return dict[key] ?? key;
}
window.addEventListener('lang-changed', (e: any) => {
  current = e.detail === 'de' ? 'de' : 'en';
  requestAnimationFrame(() =>
    window.dispatchEvent(new Event('i18n-rerender'))
  );
});
