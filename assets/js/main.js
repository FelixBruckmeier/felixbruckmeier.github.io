/* ===== Helpers ===== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ===== Jahr im Footer ===== */
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = y;
});

/* ===== Theme Toggle (Light/Dark) ===== */
(function themeInit(){
  const root = document.documentElement;
  const btn  = $('#themeToggle');

  function applyTheme(mode){
    if (mode === 'light' || mode === 'dark') {
      root.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
      btn?.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      localStorage.setItem('theme', 'auto');
      btn?.setAttribute('aria-pressed', prefersDark ? 'true' : 'false');
    }
  }

  const saved = localStorage.getItem('theme') || 'auto';
  applyTheme(saved);

  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener?.('change', () => {
      if ((localStorage.getItem('theme') || 'auto') === 'auto') applyTheme('auto');
    });
  }

  btn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
})();

/* ===== Language Toggle (DE/EN) ===== */
(function i18nInit(){
  const dict = {
    de: {
      "nav.expertise":"Expertise","nav.projects":"Projekte","nav.cv":"CV","nav.craft":"Craft","nav.contact":"Kontakt","nav.top":"Nach oben",
      "hero.name":"Felix Bruckmeier","hero.role":"UX Research Lead","hero.tagline":"Insights in Strategien mit messbarem ROI übersetzen",
      "cta.viewProjects":"Projekte ansehen","cta.viewExpertise":"Expertise ansehen",
      "expertise.title":"Expertise","expertise.intro":"Ich denke vorausschauend und schaffe heute die Basis für die Herausforderungen von morgen.",
      "expertise.ux_strategy.title":"UX Strategy","expertise.ux_strategy.desc":"Ich übersetze komplexe Nutzerbedürfnisse in umsetzbare Produktstrategien, die Innovation und nachhaltiges Wachstum treiben.",
      "expertise.researchops.title":"ResearchOps","expertise.researchops.desc":"Effiziente, qualitativ hochwertige und skalierbare Research-Praxis durch Prozesse, Tools und Infrastruktur.",
      "expertise.impact.title":"Impact Measurement","expertise.impact.desc":"Messbarer ROI von UX Research; klare, überzeugende Insight-Kommunikation an Stakeholder.",
      "expertise.team.title":"Team Leadership & Mentoring","expertise.team.desc":"Leistungsstarke Teams aufbauen und entwickeln; Talentförderung und Kultur der Exzellenz.",
      "expertise.strategic.title":"Strategic UX Research","expertise.strategic.desc":"End-to-end Research-Strategien, die direkt auf Geschäftsziele einzahlen.",
      "projects.title":"Projekte",
      "projects.car.title":"Car Insurance Onboarding","projects.car.desc":"Vertriebssoftware des ADAC mit Design Thinking neu gedacht — effizienter und bessere Experience.",
      "projects.pricing.title":"Pricing Component Usability","projects.pricing.desc":"Kano-getriebene UX-Strategie, die Pricing-Features an Kundenbedürfnissen und SAFe-Prioritäten ausrichtet.",
      "projects.winning.title":"Winning UX Strategy","projects.winning.desc":"Skalierbare, nutzerzentrierte UX-Strategie; Wert priorisiert, Effizienz gesteigert, Ausrichtung verbessert.",
      "projects.cards.title":"UX Method Cards","projects.cards.desc":"Methoden-Kartenset für cross-funktionale Teams — entlang Design Thinking, digital & gedruckt.",
      "cv.title":"CV","cv.present":"Heute","cv.atoss.role":"UXR Lead","cv.zooplus.role":"UXR Lead","cv.swisslife.role":"Senior UXR","cv.kxl.role":"UXR","cv.empiriecom.role":"UXR","cv.detail":"Detail-CV",
      "contact.title":"Kontakt","contact.bookcall":"Call buchen","ui.toggleTheme":"Theme umschalten"
    },
    en: {
      "nav.expertise":"Expertise","nav.projects":"Projects","nav.cv":"CV","nav.craft":"Craft","nav.contact":"Contact","nav.top":"Back to top",
      "hero.name":"Felix Bruckmeier","hero.role":"UX Research Lead","hero.tagline":"Turning insights into strategies with measurable ROI",
      "cta.viewProjects":"View projects","cta.viewExpertise":"View expertise",
      "expertise.title":"Expertise","expertise.intro":"I lead with a forward-looking mindset, laying the groundwork for tomorrow’s challenges.",
      "expertise.ux_strategy.title":"UX Strategy","expertise.ux_strategy.desc":"I translate complex user needs into actionable product strategies that drive innovation and sustainable growth.",
      "expertise.researchops.title":"ResearchOps","expertise.researchops.desc":"Efficient, high-quality and scalable research via processes, tooling and infrastructure.",
      "expertise.impact.title":"Impact Measurement","expertise.impact.desc":"Demonstrable ROI of UX Research; clear, compelling insight communication to stakeholders.",
      "expertise.team.title":"Team Leadership & Mentoring","expertise.team.desc":"Build and grow high-performing teams; talent development and a culture of excellence.",
      "expertise.strategic.title":"Strategic UX Research","expertise.strategic.desc":"End-to-end research strategies aligned to core business objectives.",
      "projects.title":"Projects",
      "projects.car.title":"Car Insurance Onboarding","projects.car.desc":"Reimagined an outdated ADAC sales software using Design Thinking — improved efficiency and experience.",
      "projects.pricing.title":"Pricing Component Usability","projects.pricing.desc":"Kano-driven UX strategy aligning pricing features with customer needs and SAFe priorities.",
      "projects.winning.title":"Winning UX Strategy","projects.winning.desc":"A scalable, user-centric UX strategy; prioritized value, improved efficiency, stronger alignment.",
      "projects.cards.title":"UX Method Cards","projects.cards.desc":"A method card deck for cross-functional teams — mapped to Design Thinking, digital & printed.",
      "cv.title":"CV","cv.present":"Present","cv.atoss.role":"UXR Lead","cv.zooplus.role":"UXR Lead","cv.swisslife.role":"Senior UXR","cv.kxl.role":"UXR","cv.empiriecom.role":"UXR","cv.detail":"Detailed CV",
      "contact.title":"Contact","contact.bookcall":"Book a call","ui.toggleTheme":"Toggle theme"
    }
  };

  const btn = $('#langToggleBtn');
  const label = btn ? $('.lang-label', btn) : null;

  function setLang(lang){
    const map = dict[lang] || dict.de;
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (map[key]) el.textContent = map[key];
    });
    if (btn) {
      btn.dataset.lang = lang;         // <- schaltet Flagge via CSS-Hintergrund
      if (label) label.textContent = lang.toUpperCase();
    }
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }

  const saved = localStorage.getItem('lang');
  const initial = (saved === 'en' || saved === 'de') ? saved
    : ((navigator.language || 'de').slice(0,2).toLowerCase() === 'en' ? 'en' : 'de');
  setLang(initial);

  btn?.addEventListener('click', () => {
    const next = (btn.dataset.lang === 'de') ? 'en' : 'de';
    setLang(next);
  });
})();

/* ===== Mobile Nav: nach Klick schließen ===== */
(function mobileNavClose(){
  const checkbox = $('#navToggle');
  $$('.nav__link').forEach(a => {
    a.addEventListener('click', () => {
      if (checkbox && checkbox.checked) checkbox.checked = false;
    });
  });
})();

/* ===== Reveal on scroll ===== */
(() => {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();
