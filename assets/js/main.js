/* ===== Utilities ===== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ===== Year in footer ===== */
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = y;
});

/* ===== Theme Toggle (light/dark) ===== */
(function themeInit(){
  const root = document.documentElement; // <html>
  const btn = $('#themeToggle');

  function applyTheme(mode){
    if (mode === 'light' || mode === 'dark') {
      root.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
      if (btn) btn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
    } else {
      // system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      if (btn) btn.setAttribute('aria-pressed', prefersDark ? 'true' : 'false');
    }
  }

  const saved = localStorage.getItem('theme') || 'auto';
  applyTheme(saved);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();

/* ===== Language Toggle (DE/EN) ===== */
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

  const dropdown = $('#langDropdown');
  const toggle = $('#langToggle');
  const menu = dropdown ? $('.dropdown__menu', dropdown) : null;
  const current = $('#currentLang');

  function setLang(lang){
    const map = dict[lang] || dict.de;
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (map[key]) el.textContent = map[key];
    });
    if (current) current.textContent = lang.toUpperCase();
    // update aria-selected
    $$('.dropdown__menu [role="option"]').forEach(opt => {
      opt.setAttribute('aria-selected', opt.dataset.lang === lang ? 'true' : 'false');
    });
    localStorage.setItem('lang', lang);
  }

  // init from storage or default
  const savedLang = localStorage.getItem('lang') || (navigator.language || 'de').slice(0,2).toLowerCase();
  setLang(savedLang === 'en' ? 'en' : 'de');

  if (toggle && dropdown && menu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', dropdown.classList.contains('is-open') ? 'true' : 'false');
    });

    menu.addEventListener('click', (e) => {
      const li = e.target.closest('[role="option"]');
      if (!li) return;
      setLang(li.dataset.lang);
      dropdown.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });

    // close on outside click / esc
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdown.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

/* ===== Close mobile nav after click ===== */
(function mobileNavClose(){
  const checkbox = $('#navToggle');
  $$('.nav__link').forEach(a => {
    a.addEventListener('click', () => {
      if (checkbox && checkbox.checked) checkbox.checked = false;
    });
  });
})();
