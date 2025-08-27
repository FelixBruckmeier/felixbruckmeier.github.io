(function(){
  const LS_THEME = 'theme';
  const LS_LANG  = 'lang';

  const body = document.body;
  const btnTheme = document.querySelector('[data-theme-toggle]');
  const btnsLang = document.querySelectorAll('[data-lang]');

  // Theme
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem(LS_THEME);
  setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

  btnTheme && btnTheme.addEventListener('click', () => {
    const next = body.classList.contains('theme-dark') ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem(LS_THEME, next);
  });

  function setTheme(mode){
    body.classList.toggle('theme-dark', mode === 'dark');
  }

  // Language
  const storedLang = localStorage.getItem(LS_LANG) || 'en';
  setLang(storedLang);

  btnsLang.forEach(b => b.addEventListener('click', () => {
    const lang = b.getAttribute('data-lang');
    setLang(lang); localStorage.setItem(LS_LANG, lang);
  }));

  function setLang(lang){
    btnsLang.forEach(b => {
      const active = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-en]').forEach(el => {
      const txt = el.getAttribute(`data-${lang}`);
      if(txt) el.textContent = txt;
    });
    document.documentElement.setAttribute('lang', lang);
  }
})();
