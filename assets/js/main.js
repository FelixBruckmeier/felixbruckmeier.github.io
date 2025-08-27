/* ===== Helpers ===== */
const $ = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));

/* ===== Theme toggle (persist) ===== */
const root = document.documentElement;
const themeToggle = $('#themeToggle');

function getStoredTheme(){ return localStorage.getItem('theme') || 'auto'; }
function applyTheme(mode){ root.setAttribute('data-theme', mode); themeToggle?.setAttribute('aria-pressed', mode === 'dark'); }
function cycleTheme(){
  const cur = root.getAttribute('data-theme') || 'auto';
  const next = cur === 'auto' ? 'dark' : cur === 'dark' ? 'light' : 'auto';
  localStorage.setItem('theme', next); applyTheme(next);
}
applyTheme(getStoredTheme());
themeToggle?.addEventListener('click', cycleTheme);

/* ===== Language toggle (EN/DE) ===== */
const i18n = {
  de:{ "nav.expertise":"Expertise","nav.projects":"Projekte","nav.cv":"CV","nav.craft":"Craft","nav.contact":"Kontakt","nav.top":"Nach oben",
       "hero.role":"UX Research Lead","hero.tagline":"Insights in Strategien mit messbarem ROI verwandeln",
       "cta.viewProjects":"Projekte ansehen","cta.viewExpertise":"Expertise ansehen",
       "expertise.title":"Expertise",
       "projects.title":"Projekte",
       "ui.toggleTheme":"Theme umschalten" },
  en:{ "nav.expertise":"Expertise","nav.projects":"Projects","nav.cv":"CV","nav.craft":"Craft","nav.contact":"Contact","nav.top":"Back to top",
       "hero.role":"UX Research Lead","hero.tagline":"turning insights into strategies with measurable ROI",
       "cta.viewProjects":"View Projects","cta.viewExpertise":"View Expertise",
       "expertise.title":"Expertise",
       "projects.title":"Projects",
       "ui.toggleTheme":"Toggle theme" }
};
const langBtn = $('#langToggle');
const langMenu = langBtn?.nextElementSibling;
const currentLangEl = $('#currentLang');

function getStoredLang(){ return localStorage.getItem('lang') || 'de'; }
function applyLang(lang){
  const dict = i18n[lang]; if(!dict) return;
  $$('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if(dict[k]) el.textContent = dict[k]; });
  currentLangEl && (currentLangEl.textContent = lang.toUpperCase());
  langMenu && $$('[role="option"]', langMenu).forEach(li => li.setAttribute('aria-selected', li.dataset.lang===lang ? 'true':'false'));
}
applyLang(getStoredLang());

langBtn?.addEventListener('click', ()=>{
  const open = langBtn.getAttribute('aria-expanded')==='true';
  langBtn.setAttribute('aria-expanded', String(!open));
  if(langMenu) langMenu.style.display = open ? 'none' : 'block';
});
langMenu?.addEventListener('click', (e)=>{
  const li = e.target.closest('li[role="option"]'); if(!li) return;
  const lang = li.dataset.lang; localStorage.setItem('lang', lang);
  applyLang(lang); langMenu.style.display='none'; langBtn.setAttribute('aria-expanded','false');
});
document.addEventListener('click', (e)=>{
  if(!langBtn || !langMenu) return;
  if(!langBtn.contains(e.target) && !langMenu.contains(e.target)){
    langMenu.style.display='none'; langBtn.setAttribute('aria-expanded','false');
  }
});

/* ===== Smooth scroll + Scrollspy ===== */
const navLinks = $$('.nav__link');
navLinks.forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href'); if(!id?.startsWith('#')) return;
    e.preventDefault(); const t = document.querySelector(id);
    if(t) window.scrollTo({ top: t.offsetTop - 70, behavior:'smooth' });
  });
});
const sections = $$('[data-section]');
const spy = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id = '#' + entry.target.id;
      navLinks.forEach(a=>a.classList.toggle('is-active', a.getAttribute('href')===id));
    }
  });
},{ rootMargin:"-50% 0% -40% 0%", threshold:0.01 });
sections.forEach(s=>spy.observe(s));

/* ===== Reveal on scroll ===== */
const revealer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('is-visible'); });
},{ threshold:0.12 });
$$('.reveal').forEach(el=>revealer.observe(el));

/* ===== Footer year ===== */
const yearEl = $('#year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== Logo fallback ===== */
const brandImg = $('#brandMark');
brandImg?.addEventListener('error', ()=>{ brandImg.style.display='none'; });
