(function(){
  // Sticky header shadow
  const header = document.querySelector('.header');
  window.addEventListener('scroll', ()=>header.classList.toggle('scrolled', window.scrollY>10));

  // Toggle menu
  const toggleBtn = document.getElementById('toggleMenu');
  const toggleMenu = document.getElementById('toggleMenuContent');
  toggleBtn.addEventListener('click', ()=>toggleMenu.classList.toggle('active'));

  // Theme toggle
  const LS_THEME='theme', body=document.body;
  const storedTheme=localStorage.getItem(LS_THEME);
  if(storedTheme){setTheme(storedTheme);}
  document.querySelectorAll('.theme-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      setTheme(btn.dataset.theme);
      localStorage.setItem(LS_THEME, btn.dataset.theme);
    });
  });
  function setTheme(mode){body.classList.toggle('theme-dark', mode==='dark');}

  // Language toggle
  const LS_LANG='lang';
  const storedLang=localStorage.getItem(LS_LANG)||(navigator.language.startsWith('de')?'de':'en');
  setLang(storedLang);
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const lang=btn.dataset.lang;
      setLang(lang); localStorage.setItem(LS_LANG, lang);
    });
  });
  function setLang(lang){
    document.documentElement.setAttribute('lang',lang);
    document.querySelectorAll('[data-'+lang+']').forEach(el=>{
      el.textContent=el.getAttribute('data-'+lang);
    });
  }

  // Scroll animations
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');}
    });
  },{threshold:0.2});
  document.querySelectorAll('.fade-in,.slide-up').forEach(el=>observer.observe(el));

  // Carousel
  const track=document.querySelector('#projectCarousel .carousel-track');
  if(track){
    const slides=Array.from(track.children);
    let index=0;
    function showSlide(i){
      index=(i+slides.length)%slides.length;
      track.style.transform=`translateX(-${index*100}%)`;
    }
    document.querySelector('#projectCarousel .prev').addEventListener('click',()=>showSlide(index-1));
    document.querySelector('#projectCarousel .next').addEventListener('click',()=>showSlide(index+1));
  }
})();
