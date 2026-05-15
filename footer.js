(function(){
  const ftHTML = `
  <footer class="ft">
    <div class="ft-inner">
      <div class="ft-top">
        <div class="ft-brand">
          <img src="logo.png" alt="德醫美 Alchemy">
          <div class="ft-en">Alchemy · 中醫醫美連鎖</div>
        </div>
        <div class="ft-cols">
          <div class="ft-col">
            <h4>服務</h4>
            <p>面部針灸<br>漢方微針<br>康養內服</p>
          </div>
          <div class="ft-col">
            <h4>關注我們</h4>
            <div class="social-icons">
              <a href="https://wa.me/852XXXXXX" target="_blank" title="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://instagram.com/deyimei" target="_blank" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="weixin://dl/chat?deyimei" target="_blank" title="微信">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.024 2.318c1.173 0 2.25.378 3.122 1.023 1.533 1.135 2.086 2.981 1.437 4.606-.71 1.779-2.605 2.917-4.547 2.917-.424 0-.843-.058-1.247-.174a.788.788 0 00-.65.09l-1.27.741a.202.202 0 01-.284-.21l.228-.892a.625.625 0 00-.208-.654C15.585 15.079 14.96 13.75 14.96 12.3c0-3.283 3.106-5.992 5.662-5.992zm-1.971 3.106c-.427 0-.774.351-.774.783 0 .431.347.782.774.782.428 0 .775-.351.775-.782a.778.778 0 00-.775-.783zm3.131 0c-.427 0-.774.351-.774.783 0 .431.347.782.774.782.428 0 .775-.351.775-.782a.778.778 0 00-.775-.783z"/></svg>
              </a>
            </div>
          </div>
          <div class="ft-col">
            <h4>聯繫</h4>
            <p>香港 +852 65141328<br>北京 +86 18511841531</p>
          </div>
        </div>
      </div>
      <div class="ft-bottom">&copy; 2026 德醫美 Alchemy. All rights reserved.</div>
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
      .ft-bottom{text-align:center;font-size:16px;color:rgba(255,255,255,.35);padding-top:0;border-top:none}
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
