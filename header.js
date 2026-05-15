// ====== Shared Header — 德醫美 Alchemy ======

// Inject nav CSS
(function(){
  var s=document.createElement('style');
  s.textContent=`
    .nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:24px 0;transition:all .5s cubic-bezier(.4,0,.2,1)}
    .nav.scrolled{background:rgba(255,255,255,.82);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:0 1px 0 rgba(62,2,57,.08);padding:12px 0}
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
    .mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:#f9f1fa;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);z-index:101;flex-direction:column;align-items:center;justify-content:center;gap:40px}
    .mobile-menu a{font-family:'Noto Serif SC',serif;color:#1a1410;font-size:22px;text-decoration:none;letter-spacing:6px;font-weight:300;transition:color .3s}
    .mobile-menu a:hover{color:#3e0239}
    .mobile-menu .menu-close{margin-top:16px;padding:12px 40px;border:1px solid #d4cdc0;color:#6b6258;font-size:14px;letter-spacing:3px;cursor:pointer;background:none;font-family:'Noto Serif SC',serif;transition:all .3s}
    .mobile-menu .menu-close:hover{color:#1a1410;border-color:#1a1410}
    @media(max-width:768px){.nav-links{display:none}.menu-btn{display:flex}.nav-inner{padding:0 24px}}
  `;
  document.head.appendChild(s);
})();

// Inject nav HTML
(function(){
  var isHome=!!document.querySelector('.hero-video');
  var homePrefix=isHome?'':'index.html';
  var activePage=location.pathname.split('/').pop()||'index.html';

  var html='<nav class="nav" id="navbar">'+
    '<div class="nav-inner">'+
      '<a href="'+homePrefix+'" class="nav-brand">'+
        '<img class="logo-light" src="logo.png" alt="德醫美 Alchemy">'+
        '<img class="logo-dark" src="logo-dark.png" alt="德醫美 Alchemy">'+
      '</a>'+
      '<ul class="nav-links">'+
        '<li><a href="'+homePrefix+'#services">漢方微針醫美</a></li>'+
        '<li><a href="'+homePrefix+'#products">康養產品</a></li>'+
        '<li><a href="'+homePrefix.replace('index.html','')+'cases.html">客戶案例</a></li>'+
        '<li><a href="'+homePrefix+'#locations">聯繫門店</a></li>'+
      '</ul>'+
      '<div class="menu-btn" onclick="colaToggleMenu()"><span></span><span></span><span></span></div>'+
    '</div>'+
  '</nav>'+
  '<div class="mobile-menu" id="mobile-menu">'+
    '<a href="'+homePrefix+'#services" onclick="colaToggleMenu()">漢方微針醫美</a>'+
    '<a href="'+homePrefix+'#products" onclick="colaToggleMenu()">康養產品</a>'+
    '<a href="'+homePrefix.replace('index.html','')+'cases.html" onclick="colaToggleMenu()">客戶案例</a>'+
    '<a href="'+homePrefix+'#locations" onclick="colaToggleMenu()">聯繫門店</a>'+
    '<button class="menu-close" onclick="colaToggleMenu()">✕ 關閉</button>'+
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
