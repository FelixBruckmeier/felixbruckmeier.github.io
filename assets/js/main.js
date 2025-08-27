/* ===== Helpers ===== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ===== Theme toggle (persist) ===== */
const root = document.documentElement;
const themeToggle = $('#themeToggle');

function getStoredTheme() {
  return localStorage.getItem('theme') || 'auto';
}
function applyTheme(mode) {
  if (mode === 'auto') {
    root.setAttribute('data-theme', 'auto');
  } else {
    root.setAttribute('data-theme', mode);
  }
  themeToggle?.setAttribute('aria-pressed', mode === 'dark');
}
function cycleTheme() {
  const cur = root.getAttribute('data-theme') || 'auto';
  const next = cur === 'auto' ? 'dark' : cur === 'dark' ? 'light' : 'auto';
  localStorage.setItem('theme', next);
  applyTheme(next);
}
applyTheme(getStoredTheme());
themeToggle?.addEventListener('click', cycleTheme);

/* ===== Language toggle (EN/DE) ===== */
const i18n = {
  de: {
    "nav.expertise": "Expertise",
    "nav.projects": "Projekte",
    "nav.cv": "CV",
    "nav.craft": "Craft",
    "nav.contact": "Kontakt",
    "nav.top": "Nach oben",
    "hero.role": "UX Research Director",
    "hero.tagline": "Insights in Strategien mit messbarem ROI verwandeln",
    "cta.viewProjects": "Projekte ansehen",
    "cta.viewExpertise": "Expertise ansehen",
    "expertise.title": "Expertise",
    "expertise.strategy": "Von Insights zu Produktstrategie & Roadmaps.",
    "expertise.reops": "Governance, Tools, Prozesse, Enablement.",
    "expertise.impactTitle": "Impact Measurement",
    "expertise.impact": "HEART, ROI-Modelle (z. B. Churn-Reduktion).",
    "expertise.leadTitle": "Team Leadership & Mentoring",
    "expertise.lead": "Coaching, Skill-Frameworks, Hiring, Kultur.",
    "projects.title": "Projekte",
    "projects.car": "Drop-offs reduzieren durch klare mentale Modelle.",
    "projects.pricingTitle": "Pricing Component Usability",
    "projects.pricing": "RITE-Tests zur besseren PDP-Verständlichkeit.",
    "projects.winning": "Von Discovery → Roadmap mit Executive Buy-in.",
    "projects.cards": "Teams schnellere Methodenauswahl beibringen.",
    "craft.copy": "Wie im Holzhandwerk braucht gute UX die richtigen Werkzeuge, Geduld und Sorgfalt.",
    "contact.title": "Kontakt",
    "contact.email": "E-Mail senden",
    "contact.call": "Call buchen",
    "ui.toggleTheme": "Theme umschalten"
  },
  en: {
    "nav.expertise": "Expertise",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.craft": "Craft",
    "nav.contact": "Contact",
    "nav.top": "Back to top",
    "hero.role": "UX Research Director",
    "hero.tagline": "turning insights into strategies with measurable ROI",
    "cta.viewProjects": "View Projects",
    "cta.viewExpertise": "View Expertise",
    "expertise.title": "Expertise",
    "expertise.strategy": "From insights to product strategy & roadmaps.",
    "expertise.reops": "Governance, tooling, processes, enablement.",
    "expertise.impactTitle": "Impact Measurement",
    "expertise.impact": "HEART, ROI models (e.g., churn reduction).",
    "expertise.leadTitle": "Team Leadership & Mentoring",
    "expertise.lead": "Coaching, skill frameworks, hiring, culture.",
    "projects.title": "Projects",
    "projects.car": "Reducing drop-off with clarified mental models.",
    "projects.pricingTitle": "Pricing Component Usability",
    "projects.pricing": "RITE testing to improve PDP comprehension.",
    "projects.winning": "From discovery → roadmap with executive buy-in.",
    "projects.cards": "Teaching teams faster method selection.",
    "craft.copy": "Like woodworking, great UX needs the right tools, patience and attention to detail.",
    "contact.title": "Contact",
    "contact.email": "Email me",
    "contact.call": "Book a call",
    "ui.toggleTheme": "Toggle theme"
  }
};

const langBtn = $('#langToggle');
const langMenu = langBtn?.nextElementSibling;
const currentLangEl = $('#currentLang');

function getStoredLang() {
  return localStorage.getItem('lang') || 'de';
}
function applyLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  currentLangEl && (currentLangEl.textContent = lang.toUpperCase());
  langMenu && langMenu.querySelectorAll('[role="option"]').forEach(li => {
    const on = li.getAttribute('data-lang') === lang;
    li.setAttribute('aria-selected', on ? 'true' : 'false');
  });
}
applyLang(getStoredLang());

langBtn?.addEventListener('click', () => {
  const expanded = langBtn.getAttribute('aria-expanded') === 'true';
  langBtn.setAttribute('aria-expanded', String(!expanded));
  if (langMenu) langMenu.style.display = expanded ? 'none' : 'block';
});
langMenu?.addEventListener('click', (e) => {
  const li = e.target.closest('li[role="option"]');
  if (!li) return;
  const lang = li.getAttribute('data-lang');
  localStorage.setItem('lang', lang);
  applyLang(lang);
  langMenu.style.display = 'none';
  langBtn.setAttribute('aria-expanded', 'false');
});
document.addEventListener('click', (e) => {
  if (!langBtn || !langMenu) return;
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.style.display = 'none';
    langBtn.setAttribute('aria-expanded', 'false');
  }
});

/* ===== Smooth scroll + Scrollspy ===== */
const navLinks = Array.from(document.querySelectorAll('.nav__link'));
navLinks.forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || !id.startsWith('#')) return;
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
  });
});

const sections = Array.from(document.querySelectorAll('[data-section]'));
const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = '#' + entry.target.id;
      navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === id));
    }
  });
}, { rootMargin: "-50% 0% -40% 0%", threshold: 0.01 });
sections.forEach(s => spy.observe(s));

/* ===== Reveal on scroll ===== */
const revealer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));

/* ===== Footer year ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
