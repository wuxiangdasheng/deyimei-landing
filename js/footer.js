(function(){
  const ftHTML = `
  <footer class="ft">
    <div class="ft-inner">
      <div class="ft-top">
        <div class="ft-brand">
          <img src="img/logo.png" alt="德醫美 Alchemy">
        </div>
        <div class="ft-cols">
          <div class="ft-col">
            <h4>服務</h4>
            <p>中醫療<br>中醫美<br>病症調理</p>
          </div>
          
          <div class="ft-col">
            <h4>聯繫門店</h4>
            <p>香港 +852 65141328</p>
          </div>
           
        </div>
      </div>
      <div class="ft-bottom">&copy; 2024~2026 <a href="index.html" style="color:rgba(255,255,255,.35);text-decoration:none">德醫美 All rights reserved.</div>
    </div>
  </footer>`;

  // Add social icons CSS if not already present
  if(!document.getElementById('ft-social-css')){
    const style=document.createElement('style');
    style.id='ft-social-css';
    style.textContent=`
      .ft{background:var(--brand,#3e0239);color:rgba(255,255,255,.6);padding:60px 40px 32px}
      .ft-inner{max-width:1040px;margin:0 auto;padding:0 40px}
      .ft-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:60px;margin-bottom:80px}
      .ft-brand img{height:48px;width:auto;display:block;margin-bottom:4px}
      .ft-en{font-size:16px;color:var(--white,#fff);letter-spacing:2px;display:block;font-weight:400;margin-top:8px}
      .ft-cols{display:flex;gap:80px}
      .ft-col h4{color:var(--white,#fff);margin-bottom:24px;font-size:16px;letter-spacing:4px;font-weight:600}
      .ft-col p,.ft-col a{display:block;color:rgba(255,255,255,.55);font-size:16px;text-decoration:none;line-height:2.2;transition:color .3s}
      .ft-bottom{text-align:left;font-size:14px;color:rgba(255,255,255,.35);padding-top:0;border-top:none}
      .social-icons{display:flex;gap:12px;margin-top:8px}
      .social-icons a{color:rgba(255,255,255,.5);transition:color .3s;display:flex;align-items:center;width:20px;height:20px;flex-shrink:0}
      .social-icons a:hover{color:var(--gold,#c9a96e);padding-left:0}
      @media(max-width:768px){.ft-cols{flex-direction:column;gap:40px}.ft-top{flex-direction:column;gap:48px}.ft-inner{padding:0 24px}}
    `;
    document.head.appendChild(style);
  }

  // Insert footer before </body>
  const placeholder=document.getElementById('shared-footer');
  if(placeholder){placeholder.outerHTML=ftHTML}
  else{document.body.insertAdjacentHTML('beforeend',ftHTML)}
})();
