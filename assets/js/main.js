/* ===== Utilities ===== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ===== Jahr im Footer ===== */
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = y;
});

/* ===== Theme Toggle (Light/Dark) =====
   WICHTIG: CSS hat jetzt Variablen unter [data-theme="dark"] — damit wirkt der Toggle.
*/
(function themeInit(){
  const root = document.documentElement; // <html>
  const btn = $('#themeToggle');

  function applyTheme(mode){
    if (mode === 'light' || mode === 'dark') {
      root.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
      if (btn) btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
    } else {
      // 'auto' -> Systempräferenz
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      localStorage.setItem('theme', 'auto');
      if (btn) btn.setAttribute('aria-pressed', prefersDark ? 'true' : 'false');
    }
  }

  // Initial aus Storage oder 'auto'
  const saved = localStorage.getItem('theme') || 'auto';
  applyTheme(saved);

  // Live-Update, falls System-Theme wechselt und wir im 'auto' Modus sind
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener?.('change', () => {
      if ((localStorage.getItem('theme') || 'auto') === 'auto') applyTheme('auto');
    });
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      // Wenn wir im 'auto'-State wären, hat root bereits 'dark' oder 'light' stehen.
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();

/* ===== Language Toggle (DE/EN) – Single Button ===== */
(function i18nInit(){
  const dict = {
    de: {
      "nav.expertise":"Expertise",
      "nav.projects":"Projekte",
      "nav.cv":"CV",
      "nav.craft":"Craft",
      "nav.contact":"Kontakt",
      "nav.top":"Nach oben",
      "hero.role":"UX Research Lead",
      "hero.tagline":"turning insights into strategies with measurable ROI",
      "cta.viewProjects":"Projekte ansehen",
      "cta.viewExpertise":"Expertise ansehen",
      "ui.toggleTheme":"Theme umschalten",
      "expertise.title":"Expertise",
      "projects.title":"Projekte"
    },
    en: {
      "nav.expertise":"Expertise",
      "nav.projects":"Projects",
      "nav.cv":"CV",
      "nav.craft":"Craft",
      "nav.contact":"Contact",
      "nav.top":"Back to top",
      "hero.role":"UX Research Lead",
      "hero.tagline":"turning insights into strategies with measurable ROI",
      "cta.viewProjects":"View projects",
      "cta.viewExpertise":"View expertise",
      "ui.toggleTheme":"Toggle theme",
      "expertise.title":"Expertise",
      "projects.title":"Projects"
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
      btn.dataset.lang = lang;
      if (label) label.textContent = lang.toUpperCase();
    }
    localStorage.setItem('lang', lang);
    // html lang-Attribut setzen (hilft Screenreadern & SEO)
    document.documentElement.setAttribute('lang', lang);
  }

  // Initialsprache
  const saved = localStorage.getItem('lang');
  const initial = (saved === 'en' || saved === 'de')
    ? saved
    : ((navigator.language || 'de').slice(0,2).toLowerCase() === 'en' ? 'en' : 'de');
  setLang(initial);

  if (btn) {
    btn.addEventListener('click', () => {
      const next = (btn.dataset.lang === 'de') ? 'en' : 'de';
      setLang(next);
    });
  }
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

/* ===== Reveal on scroll (Progressive Enhancement) ===== */
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
