// ====== Shared Header — 德醫美 Alchemy ======

// Inject nav CSS
(function(){
  var s=document.createElement('style');
  s.textContent=`
    .nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:24px 0;transition:all .5s cubic-bezier(.4,0,.2,1)}
    .nav.scrolled{background:rgba(255,255,255,1);box-shadow:0 1px 0 rgba(62,2,57,.08);padding:12px 0}
    .nav-inner{max-width:1240px;margin:0 auto;padding:0 40px;display:flex;align-items:center;justify-content:space-between}
    .nav-brand{text-decoration:none;display:flex;align-items:center;gap:0;position:relative}
    .nav-brand img{height:36px;width:auto;display:block;transition:opacity .35s}
    .nav-brand .logo-dark{position:absolute;top:0;left:0;opacity:0}
    .nav-links{display:flex;gap:40px;list-style:none;font-size:16px;letter-spacing:2px}
    .nav-links a{color:rgba(255,255,255,.7);text-decoration:none;transition:color .3s;position:relative;padding:4px 0}
    .nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:#c9a96e;transition:width .35s cubic-bezier(.4,0,.2,1)}
    .nav-links a:hover{color:#c9a96e}
    .nav-links a:hover::after{width:100%}
    .nav.scrolled .nav-links a{color:#6b6258}
    .nav.scrolled .nav-links a:hover{color:#1a1410}
    .nav.scrolled .logo-light{opacity:1}
    .nav.scrolled .logo-dark{opacity:0}
    .menu-btn{display:none;flex-direction:column;gap:5px;cursor:pointer;z-index:101;padding:4px}
    .menu-btn span{display:block;width:22px;height:1.5px;background:rgba(255,255,255,.85);transition:all .3s}
    .nav.scrolled .menu-btn span{background:#1a1410}
    .mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:#f9f1fa;z-index:101;flex-direction:column;align-items:center;justify-content:center;gap:32px}
    .mobile-menu a{font-family:'Noto Serif SC',serif;color:#1a1410;font-size:1.4rem;text-decoration:none;letter-spacing:.12em;font-weight:400;transition:color .3s}
    .mobile-menu a:hover{color:#3e0239}
    .mobile-menu .mobile-close{position:absolute;top:24px;right:24px;font-size:28px;color:#6b6258;cursor:pointer;background:none;border:none;line-height:1;padding:8px;font-family:inherit;transition:color .3s}
    .mobile-menu .mobile-close:hover{color:#1a1410}
    @media(max-width:768px){.nav-links{display:none}.menu-btn{display:flex}.nav-inner{padding:0 24px}}
  `;
  document.head.appendChild(s);
})();

// Inject nav HTML
(function(){
  var isHome=!!document.querySelector('.hero-video');
  var activePage=location.pathname.split('/').pop()||'alchemy.html';

  var html='<nav class="nav" id="navbar">'+
    '<div class="nav-inner">'+
      '<a href="index.html" class="nav-brand">'+
        '<img class="logo-light" src="img/logo.png" alt="德醫美 Alchemy">'+
        '<img class="logo-dark" src="img/logo-dark.png" alt="德醫美 Alchemy">'+
      '</a>'+
      '<ul class="nav-links">'+
        '<li><a href="index.html">認識德醫美</a></li>'+
        '<li><a href="taichi-ortho.html">非遺整骨</a></li>'+
        '<li><a href="moxibustion.html">古法藥灸</a></li>'+
        '<li><a href="wellness-products.html">康養產品</a></li>'+
        '<li><a href="alchemy.html">微針醫美</a></li>'+
      '</ul>'+
      '<div class="menu-btn" onclick="colaToggleMenu()"><span></span><span></span><span></span></div>'+
    '</div>'+
  '</nav>'+
  '<div class="mobile-menu" id="mobile-menu">'+
    '<button class="mobile-close" onclick="colaToggleMenu()">✕</button>'+
    '<a href="index.html" onclick="colaToggleMenu()">認識德醫美</a>'+
    '<a href="taichi-ortho.html" onclick="colaToggleMenu()">非遺整骨</a>'+
    '<a href="moxibustion.html" onclick="colaToggleMenu()">五行精油草本灸</a>'+
    '<a href="wellness-products.html" onclick="colaToggleMenu()">康養產品</a>'+
    '<a href="alchemy.html" onclick="colaToggleMenu()">微針醫美</a>'+
    '<a href="recruit.html" onclick="colaToggleMenu()">共創代理招募</a>'+
    '<a href="https://s.cchkw.com" onclick="colaToggleMenu()">商城</a>'+
  '</div>';

  var el=document.getElementById('shared-header');
  if(el){el.innerHTML=html}else{document.body.insertAdjacentHTML('afterbegin',html)}

  // Non-homepage: solid nav with dark logo
  if(!isHome){
    setTimeout(function(){
      var n=document.getElementById('navbar');
      if(!n)return;
      n.classList.add('scrolled');
      var ll=n.querySelector('.logo-light');
      var ld=n.querySelector('.logo-dark');
      if(ll)ll.style.opacity='0';
      if(ld)ld.style.opacity='1';
    },10);
  }
})();

// Mobile menu
var colaMenuOpen=false;
function colaToggleMenu(){
  colaMenuOpen=!colaMenuOpen;
  var m=document.getElementById('mobile-menu');
  if(m){m.style.display=colaMenuOpen?'flex':'none';document.body.style.overflow=colaMenuOpen?'hidden':''}
}

// Nav scroll behavior (homepage only — hero video page)
(function(){
  if(!document.querySelector('.hero-video'))return;
  var nav=document.getElementById('navbar');
  var logoLight=document.querySelector('.logo-light');
  var logoDark=document.querySelector('.logo-dark');
  if(!nav)return;
  window.addEventListener('scroll',function(){
    var scrolled=window.scrollY>60;
    nav.classList.toggle('scrolled',scrolled);
    if(logoLight&&logoDark){logoLight.style.opacity=scrolled?'0':'1';logoDark.style.opacity=scrolled?'1':'0'}
  });
})();

// Smooth scroll for nav hash links
(function(){
  document.addEventListener('click',function(e){
    var a=e.target.closest('a');
    if(!a)return;
    var href=a.getAttribute('href');
    if(!href||!href.startsWith('#'))return;
    var id=href.slice(1);
    if(!id)return;
    var target=document.getElementById(id);
    if(!target)return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  });
})();
