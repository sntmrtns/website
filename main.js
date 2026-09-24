(() => {
  'use strict';

  document.addEventListener('contextmenu', e => e.preventDefault());

  const timer = document.getElementById('timer');
  const date = document.getElementById('date');
  const pad = (n, width) => String(n).padStart(width, '0');
  let lastTime = '', lastDate = '';

  function tick() {
    const d = new Date();
    const time = pad(d.getHours(), 2) + ':' + pad(d.getMinutes(), 2) + ':' + pad(d.getSeconds(), 2) + ':' + pad(Math.floor(d.getMilliseconds() / 10), 2);
    if (time !== lastTime) timer.textContent = lastTime = time;
    const day = d.getFullYear() + '-' + pad(d.getMonth() + 1, 2) + '-' + pad(d.getDate(), 2);
    if (day !== lastDate) date.textContent = lastDate = day;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  let last = 0;
  try { last = parseInt(localStorage.getItem('lastLogo'), 10) || 0; } catch {}
  const choices = [1, 2, 3].filter(n => n !== last);
  const pick = choices[Math.floor(Math.random() * choices.length)];
  try { localStorage.setItem('lastLogo', pick); } catch {}
  const logoSrc = n => 'logos/logo-' + n + '.svg?v=2';

  let revealed = false;

  function reveal() {
    if (revealed) return;
    revealed = true;
    if (parseFloat(getComputedStyle(document.body).opacity) < 1) document.body.classList.add('fade-in');
    const settle = () => { document.body.style.opacity = '1'; };
    document.body.addEventListener('animationend', settle, { once: true });
    setTimeout(settle, 1500);
    setTimeout(() => {
      const conn = navigator.connection;
      if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ''))) return;
      [1, 2, 3].filter(n => n !== pick).forEach(n => { new Image().src = logoSrc(n); });
    }, 1500);
  }

  function loadLogo() {
    const logo = document.getElementById('logo');
    const show = () => {
      logo.style.display = 'block';
      reveal();
    };
    logo.onload = show;
    logo.onerror = reveal;
    logo.src = logoSrc(pick);
    if (logo.complete && logo.naturalWidth) show();
  }

  if (!document.hidden) {
    loadLogo();
  } else {
    document.addEventListener('visibilitychange', function onVisible() {
      if (document.hidden) return;
      document.removeEventListener('visibilitychange', onVisible);
      loadLogo();
    });
  }
})();
