(() => {
  'use strict';

  if (location.pathname.endsWith('/') && location.pathname !== '/') {
    const base = document.createElement('base');
    base.href = location.href;
    document.head.appendChild(base);
    history.replaceState(null, '', location.pathname.slice(0, -1) + location.search + location.hash);
  }

  document.addEventListener('contextmenu', e => e.preventDefault());

  const videos = [
    { title: 'Roxie - LostFile', id: 'NVAbdaUk4PQ' },
    { title: 'NOT A HUMAN - 2025-12-17', id: 'H-WfeQ_srrU' },
    { title: 'sneak - THEY NEVER COMING BACK', id: 'RZ7iZbF2BtQ' },
    { title: 'sneak - OK BOOL', id: 'RGavUVuHw20' },
    { title: 'sneak - OK WITH IT', id: 'qQ57vtbpJLw' },
    { title: 'sneak - PUT DA CUP DOWN', id: 'wTvThmhuT9k' },
    { title: 'sneak - LET ME KNOW', id: 'gVdQ4hNLcPA' },
    { title: 'sneak - VOORHEES', id: 'h1lCqAssywg' },
    { title: 'sneak - HEAVEN ABOVE ME', id: '0q0bmCZTVdM' },
  ];

  const photos = [
    ['DSC03137.webp', 4 / 5], ['DSC03145.webp', 3 / 2], ['DSC03148.webp', 4 / 5],
    ['DSC03154.webp', 3 / 2], ['DSC03155.webp', 3 / 2], ['DSC03156.webp', 3 / 2],
    ['DSC03237.webp', 2 / 3], ['DSC03293.webp', 3 / 2], ['DSC03296.webp', 2 / 3],
    ['DSC03556.webp', 3 / 2], ['DSC03582.webp', 2 / 3], ['DSC03603.webp', 3 / 2],
    ['DSC03622.webp', 3 / 2], ['DSC03642.webp', 2 / 3], ['DSC03659.webp', 2 / 3],
    ['DSC03885.webp', 4 / 5], ['DSC04300.webp', 4 / 5], ['DSC04340.webp', 4 / 5],
  ];

  const design = [
    'richie-souf/produced-by-cover-spotify.webp?v=2',
    'richie-souf/produced-by-cover-apple-music.webp?v=2',
    'roxie/roxie-motherfucker-cover.webp',
    'sneak/vanilla-sky-tracklist.webp',
    '2-20-03/2026-02-20.webp',
    'not-a-human/profile-picture.webp',
    'not-a-human/version-2.webp',
    'not-a-human/version-1.webp',
    'sneak/sharpshooter-tracklist-2.webp',
    'sneak/sharpshooter-tracklist-1.webp',
    'sneak/ok-with-it-cover.webp',
    '2-20-03/profile-picture-1.webp',
    'soufpaw/collar-3.webp',
    'soufpaw/collar-2.webp',
    'soufpaw/collar-1.webp',
    'soufpaw/leash-3.webp',
    'soufpaw/leash-2.webp',
    'soufpaw/leash-1.webp',
    '2-20-03/fashion-week-cover.webp',
    '2-20-03/1.webp',
    'saint-martins/logo-3.webp',
    'saint-martins/logo-2.webp',
    'saint-martins/logo-1.webp',
  ];

  const music = {
    personal: [
      { title: 'hamed, ARKMAN, legion, skai & yugen - fashion week', sc: '2-20-03/fashion-week' },
      { title: 'hamed, cargo, legion, Lucid & skai - october', sc: '2-20-03/october' },
      { title: 'hamed & Luca Malaspina - down', sc: '2-20-03/down' },
    ],
    production: [
      { title: 'one2nine3 - MIME', sc: 'onetwoninethree/mime' },
      { title: 'one2nine3 - fell in <3', sc: 'onetwoninethree/fell-in-love' },
      { title: 'TyFontaine - downer', sc: '1800tyfontaine/downer' },
      { title: 'Destroy Lonely - Not Ok', sc: 'cantmockit/destroy-lonely-okay' },
      { title: 'Vagex - Long Time', sc: 'vagexsm/long-time-prod-hamed-cargo' },
      { title: 'FaZe Clan - Introducing FaZe Kaysan Trailer', video: 'music/faze-kaysan-trailer.mp4', poster: 'music/faze-kaysan-trailer.webp' },
    ],
    mixing: [
      { title: "sneak - IT'S DIFFERENT NOW", sc: 'sneakties/its-different-now' },
      { title: 'sneak - DRIVE ME SANE', sc: 'sneakties/drive-me-sane' },
      { title: 'sneak - SHOOTS & LADDERS', sc: 'sneakties/shoots-ladders' },
      { title: 'sneak - CHUN-LI', sc: 'sneakties/chun-li' },
      { title: 'sneak - M(M)', sc: 'sneakties/m-m' },
      { title: 'sneak - TRAVEL DOCTOR', sc: 'sneakties/travel-doctor' },
      { title: 'sneak - BULLY', sc: 'sneakties/bully' },
      { title: 'sneak - HIBACHI', sc: 'sneakties/hibachi' },
      { title: 'sneak - TIRED', sc: 'sneakties/tired' },
      { title: 'sneak - BOOTED & SANE', sc: 'sneakties/booted-sane' },
      { title: 'sneak - ADD IT UP', sc: 'sneakties/add-it-up' },
      { title: 'sneak - COSMO', sc: 'sneakties/cosmo' },
      { title: 'sneak - WHITE STUFF', sc: 'sneakties/white-stuff' },
      { title: 'kels! - ALL ALONE', sc: 'gamerboii-kels/all-alone' },
      { title: 'sneak - FLORIDA BEACH', sc: 'sneakties/florida-beach' },
      { title: 'sneak - JUNYA ON ME', sc: 'sneakties/junya-on-me' },
      { title: 'sneak - THERE WILL BE BLOOD', sc: 'sneakties/there-will-be-blood' },
      { title: 'sneak - ARRANCAR', sc: 'sneakties/arrancar' },
      { title: 'sneak - BETTER LIES', sc: 'sneakties/better-lies' },
      { title: 'sneak - GRANDMASTER', sc: 'sneakties/grandmaster' },
      { title: 'sneak - CHEAP THRILLS', sc: 'sneakties/cheap-thrills' },
      { title: 'sneak - CASE CLOSED', sc: 'sneakties/case-closed' },
      { title: 'sneak - SCORPIO', sc: 'sneakties/scorpio' },
      { title: 'sneak - TYSON', sc: 'sneakties/tyson' },
      { title: 'sneak - SLADE', sc: 'sneakties/slade' },
      { title: 'sneak - ZEROEZ', sc: 'sneakties/zeroez' },
      { title: 'sneak - BEAUTY:BEAST', sc: 'sneakties/beauty-beast' },
      { title: 'sneak - WNBA', sc: 'sneakties/wnba' },
      { title: 'sneak - ALMIGHTY SNEAK', sc: 'sneakties/almighty-sneak' },
      { title: 'sneak - ED & RUMMY', sc: 'sneakties/ed-rummy' },
      { title: 'sneak - GOOD TIME', sc: 'sneakties/good-time' },
      { title: 'sneak - G NIKES', sc: 'sneakties/g-nikes' },
      { title: 'sneak - SHIT GET REAL', sc: 'sneakties/shit-get-real' },
      { title: 'sneak - PRAGUE', sc: 'sneakties/prague' },
      { title: 'sneak - THUMBS MISSING', sc: 'sneakties/thumbs-missing' },
      { title: 'sneak - CRY ABOUT IT', sc: 'sneakties/cry-about-it' },
      { title: 'sneak - NICKELODEON', sc: 'sneakties/nickelodeon' },
      { title: 'sneak - FREELOADING', sc: 'sneakties/freeloading' },
      { title: 'sneak - HIGH FIVE GHOST', sc: 'sneakties/high-five-ghost' },
      { title: 'sneak - HAVE IT YO WAY', sc: 'sneakties/have-it-yo-way' },
      { title: 'sneak - PUT DA CUP DOWN', sc: 'sneakties/put-da-cup-down' },
    ],
  };

  const SECTIONS = ['work', 'design', 'photos', 'videos', 'music'];
  const FADE_MS = 250;
  const EASE = 'cubic-bezier(0.16,1,0.3,1)';
  const BOOT_TIMEOUT = 5000;
  const SCROLL_KEYS = [' ', 'PageUp', 'PageDown', 'End', 'Home', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];

  const touch = matchMedia('(pointer: coarse)').matches;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  function once(fn) {
    let done = false;
    return () => {
      if (done) return;
      done = true;
      fn();
    };
  }

  function onLoad(el, fn, timeout) {
    const run = once(fn);
    el.addEventListener('load', run, { once: true });
    el.addEventListener('error', run, { once: true });
    if (timeout) setTimeout(run, timeout);
  }

  function afterTransition(el, fn) {
    const handler = e => { if (e.target === el) run(); };
    const run = once(() => {
      el.removeEventListener('transitionend', handler);
      fn();
    });
    el.addEventListener('transitionend', handler);
    setTimeout(run, FADE_MS);
  }

  function play(el, keyframes, done) {
    el.getAnimations().forEach(a => {
      a.onfinish = a.oncancel = null;
      a.cancel();
    });
    if (reducedMotion.matches || document.hidden) {
      done();
      return;
    }
    const anim = el.animate(keyframes, { duration: FADE_MS, easing: EASE });
    anim.onfinish = anim.oncancel = once(done);
    setTimeout(() => anim.cancel(), FADE_MS + 500);
  }

  let playing = null;

  function pauseAll(keep) {
    playing = keep || null;
    document.querySelectorAll('video').forEach(v => { if (v !== keep) v.pause(); });
    document.querySelectorAll('iframe[src]').forEach(f => {
      if (f.contentWindow === keep) return;
      const command = f.src.includes('youtube')
        ? { event: 'command', func: 'pauseVideo', args: '' }
        : { method: 'pause' };
      f.contentWindow.postMessage(JSON.stringify(command), '*');
    });
  }

  document.addEventListener('play', e => { if (e.target.tagName === 'VIDEO') pauseAll(e.target); }, true);

  const PLAYER_ORIGINS = ['https://w.soundcloud.com', 'https://www.youtube-nocookie.com', 'https://www.youtube.com'];

  window.addEventListener('message', e => {
    if (!PLAYER_ORIGINS.includes(e.origin)) return;
    let data = e.data;
    if (typeof data === 'string') {
      try { data = JSON.parse(data); } catch { return; }
    }
    if (!data || typeof data !== 'object') return;
    if (data.method === 'ready') {
      e.source.postMessage(JSON.stringify({ method: 'addEventListener', value: 'play' }), e.origin);
    } else if (data.method === 'play' ||
               (data.event === 'onStateChange' && data.info === 1) ||
               (data.event === 'infoDelivery' && data.info && data.info.playerState === 1)) {
      pauseAll(e.source);
    }
  });

  function listenToYouTube(iframe) {
    [0, 500, 1500, 3000].forEach(ms => setTimeout(() => {
      iframe.contentWindow.postMessage('{"event":"listening","id":1,"channel":"widget"}', '*');
    }, ms));
  }

  const LANE_LIMIT = { image: 4, video: Infinity, audio: 4 };
  const BOOT_SECTIONS = touch ? [] : ['videos', 'music'];
  const queue = [];
  const pending = {};
  const live = { image: 0, video: 0, audio: 0 };
  let current = 'work';
  let loading = false;

  function queueLoad(section, lane, start) {
    queue.push({ section, lane, start });
    pending[section] = (pending[section] || 0) + 1;
  }

  function pump() {
    if (!loading) return;
    for (const lane in LANE_LIMIT) {
      while (live[lane] < LANE_LIMIT[lane]) {
        let i = queue.findIndex(t => t.lane === lane && t.section === current);
        if (i < 0 && !touch) i = queue.findIndex(t => t.lane === lane);
        if (i < 0) break;
        const task = queue.splice(i, 1)[0];
        live[lane]++;
        task.start(once(() => {
          live[lane]--;
          if (--pending[task.section] === 0) syncSections();
          pump();
        }));
      }
    }
  }

  function syncSections(entering) {
    SECTIONS.forEach(s => {
      const el = document.getElementById('section-' + s);
      const active = s === current;
      const booting = !active && BOOT_SECTIONS.includes(s) && pending[s] > 0;
      el.style.display = active || booting ? '' : 'none';
      el.classList.toggle('section-boot', booting);
      el.inert = !active;
      if (!active) el.classList.remove('section-shown', 'section-enter');
    });
    const el = document.getElementById('section-' + current);
    if (el.classList.contains('section-shown')) return;
    if (entering) el.classList.add('section-enter');
    el.classList.add('section-shown');
    if (entering) play(el, [{ opacity: 0 }, { opacity: 1 }], () => el.classList.remove('section-enter'));
  }

  function zoomableImage(src, label) {
    const img = new Image();
    img.className = 'fade';
    img.alt = label;
    img.dataset.src = src;
    return img;
  }

  function loadImage(img, done) {
    img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    onLoad(img, done);
    img.src = img.dataset.src;
  }

  (() => {
    const box = document.getElementById('designbox');
    design.forEach((src, i) => {
      const img = zoomableImage('design/' + src, 'Image ' + (i + 1) + ' of ' + design.length);
      box.appendChild(img);
      queueLoad('design', 'image', done => loadImage(img, done));
    });
  })();

  (() => {
    const box = document.getElementById('photobox');
    const rows = [];
    for (let i = 0; i < photos.length; i += 3) rows.unshift(photos.slice(i, i + 3));
    let n = 0;
    rows.forEach(row => {
      const rowEl = document.createElement('div');
      rowEl.className = 'photos-row';
      rowEl.style.aspectRatio = row.reduce((sum, [, ratio]) => sum + ratio, 0);
      row.forEach(([name, ratio]) => {
        const cell = document.createElement('div');
        cell.style.flex = ratio;
        const img = zoomableImage('pictures/' + name, 'Photo ' + ++n + ' of ' + photos.length);
        cell.appendChild(img);
        rowEl.appendChild(cell);
        queueLoad('photos', 'image', done => loadImage(img, done));
      });
      box.appendChild(rowEl);
    });
  })();

  (() => {
    const box = document.getElementById('videobox');
    videos.forEach(v => {
      const iframe = document.createElement('iframe');
      iframe.className = 'fade';
      iframe.title = v.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      box.appendChild(iframe);
      queueLoad('videos', 'video', done => {
        onLoad(iframe, () => {
          iframe.classList.add('loaded');
          done();
        }, 8000);
        iframe.addEventListener('load', () => listenToYouTube(iframe), { once: true });
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + v.id + '?enablejsapi=1';
      });
    });
  })();

  (() => {
    const scSrc = path => 'https://w.soundcloud.com/player/?url=' + encodeURIComponent('https://soundcloud.com/' + path) +
      '&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true' +
      '&show_reposts=false&show_teaser=false&visual=true&sharing=false';

    const scFrame = track => {
      const iframe = document.createElement('iframe');
      iframe.className = 'fade';
      iframe.title = track.title;
      iframe.allow = 'autoplay';
      return iframe;
    };

    const mount = (iframe, track, done) => {
      onLoad(iframe, () => {
        iframe.classList.add('loaded');
        if (done) done();
      }, done && 12000);
      iframe.src = scSrc(track.sc);
    };

    const windowed = new Map();
    const near = new Set();
    let sweepTimer = 0;

    const sweep = () => {
      windowed.forEach((track, cell) => {
        const iframe = cell.firstChild;
        if (near.has(cell)) {
          if (!iframe.src) mount(iframe, track);
        } else if (iframe.src && iframe.contentWindow !== playing) {
          cell.replaceChild(scFrame(track), iframe);
        }
      });
    };

    const observer = touch && new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) near.add(e.target);
        else near.delete(e.target);
      });
      clearTimeout(sweepTimer);
      sweepTimer = setTimeout(sweep, 150);
    }, { rootMargin: '100% 0px' });

    const videoCell = track => {
      const video = document.createElement('video');
      video.className = 'fade';
      video.preload = 'none';
      video.poster = track.poster;
      video.controls = true;
      video.setAttribute('aria-label', track.title);
      const source = document.createElement('source');
      source.src = track.video;
      source.type = 'video/mp4';
      video.appendChild(source);
      queueLoad('music', 'image', done => {
        const poster = new Image();
        onLoad(poster, () => {
          video.classList.add('loaded');
          done();
        });
        poster.src = track.poster;
      });
      return video;
    };

    Object.entries(music).forEach(([group, tracks]) => {
      const box = document.getElementById('gridbox-' + group);
      tracks.forEach(track => {
        const cell = document.createElement('div');
        box.appendChild(cell);
        if (track.video) {
          cell.appendChild(videoCell(track));
          return;
        }
        const iframe = scFrame(track);
        cell.appendChild(iframe);
        if (observer) {
          windowed.set(cell, track);
          observer.observe(cell);
        } else {
          queueLoad('music', 'audio', done => mount(iframe, track, done));
        }
      });
    });
  })();

  document.querySelectorAll('.work').forEach(entry => {
    const logo = entry.querySelector('.entry-logo');
    const show = () => entry.classList.add('loaded');
    if (logo.complete) show();
    else onLoad(logo, show);

    const duties = entry.querySelector('.duties');
    if (!duties) return;
    duties.id = entry.id + '-duties';
    const wrap = document.createElement('div');
    wrap.className = 'duties-wrap';
    duties.replaceWith(wrap);
    wrap.appendChild(duties);
    entry.classList.add('collapsed');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'duty-toggle';
    btn.textContent = 'Details';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', duties.id);
    entry.querySelector('.work-info').appendChild(btn);

    let busy = false;
    btn.addEventListener('click', () => {
      if (busy) return;
      busy = true;
      const opening = entry.classList.contains('collapsed');
      btn.setAttribute('aria-expanded', String(opening));
      btn.textContent = opening ? 'Hide' : 'Details';
      entry.classList.remove('collapsed');
      const open = { height: wrap.scrollHeight + 'px', opacity: 1 };
      const closed = { height: '0px', opacity: 0 };
      play(wrap, opening ? [closed, open] : [open, closed], () => {
        busy = false;
        if (!opening) entry.classList.add('collapsed');
      });
    });
  });

  syncSections();

  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('img');
  const lbCount = document.getElementById('lb-count');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  let lbList = [], lbIndex = 0, lbBusy = false, lbToken = 0;
  let touchX = null, touchY = null, swiped = false;

  const lbIsOpen = () => lightbox.classList.contains('lb-visible');
  const lbWrap = i => (i + lbList.length) % lbList.length;

  function lbShow(then) {
    const token = ++lbToken;
    const src = lbList[lbIndex];
    const pre = new Image();
    onLoad(pre, () => {
      if (token !== lbToken) return;
      lbImg.src = src;
      lbImg.alt = 'Image ' + (lbIndex + 1) + ' of ' + lbList.length;
      lbCount.textContent = (lbIndex + 1) + ' / ' + lbList.length;
      if (then) then();
    }, 8000);
    pre.src = src;
    [-1, 1].forEach(d => { new Image().src = lbList[lbWrap(lbIndex + d)]; });
  }

  function lbNav(dir) {
    if (lbList.length <= 1) return;
    lbIndex = lbWrap(lbIndex + dir);
    lbShow();
  }

  function openLightbox(trigger) {
    if (lbBusy) return;
    const imgs = Array.from(trigger.closest('.design, .photos').querySelectorAll('img'));
    lbList = imgs.map(img => img.dataset.src);
    lbIndex = imgs.indexOf(trigger);
    pauseAll();
    const visibility = lbList.length === 1 ? 'hidden' : '';
    [lbPrev, lbNext, lbCount].forEach(el => { el.style.visibility = visibility; });
    lbBusy = true;
    lbShow(() => {
      lightbox.classList.add('lb-visible');
      void lightbox.offsetHeight;
      lightbox.classList.add('lb-open');
      afterTransition(lightbox, () => { lbBusy = false; });
    });
  }

  function closeLightbox() {
    if (lbBusy) return;
    lbBusy = true;
    lightbox.classList.remove('lb-open');
    afterTransition(lightbox, () => {
      lightbox.classList.remove('lb-visible');
      lbBusy = false;
    });
  }

  lightbox.addEventListener('touchstart', e => {
    touchX = e.touches[0].clientX;
    touchY = e.touches[0].clientY;
    swiped = false;
  }, { passive: true });

  lightbox.addEventListener('touchcancel', () => { touchX = null; }, { passive: true });

  lightbox.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    touchX = null;
    if (Math.abs(dy) > Math.abs(dx) && dy > 80) {
      swiped = true;
      closeLightbox();
    } else if (Math.abs(dx) >= 40) {
      swiped = true;
      lbNav(dx < 0 ? 1 : -1);
    }
  }, { passive: true });

  const main = document.querySelector('.main');
  let padHeight = 0, padLockUntil = 0;

  function dropScrollPad() {
    if (!padHeight) return;
    main.style.paddingBottom = '';
    padHeight = 0;
  }

  window.addEventListener('scroll', () => {
    if (!padHeight || performance.now() < padLockUntil) return;
    const natural = document.documentElement.scrollHeight - padHeight - window.innerHeight;
    if (window.scrollY <= Math.max(0, natural)) dropScrollPad();
  }, { passive: true });

  window.addEventListener('resize', dropScrollPad);

  function scrollToId(id) {
    const el = document.getElementById(id);
    const anchor = el.closest('[id^="section-"]').querySelector('.href-section');
    const top = el.getBoundingClientRect().top - anchor.getBoundingClientRect().top;
    const reach = document.documentElement.scrollHeight - padHeight - window.innerHeight;
    if (top > reach) {
      padHeight = Math.max(padHeight, top - reach);
      main.style.paddingBottom = padHeight + 'px';
      padLockUntil = performance.now() + 1500;
    }
    window.scrollTo({ top, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  }

  function showSection(name) {
    if (name === current) return;
    pauseAll();
    document.querySelectorAll('[data-section]').forEach(btn => {
      if (btn.dataset.section === name) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    });
    document.querySelectorAll('.sub-btns').forEach(sub => {
      sub.style.display = sub.id === 'sub-' + name ? '' : 'none';
    });
    current = name;
    syncSections(true);
    pump();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  const nav = document.getElementById('mobile-nav');
  const menuBtn = document.getElementById('mobile-bar-btn');
  let navOpen = false, navBusy = false;

  function setMenuState(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  function openNav() {
    if (navBusy) return;
    navOpen = navBusy = true;
    setMenuState(true);
    nav.classList.add('visible');
    void nav.offsetHeight;
    nav.classList.add('open');
    afterTransition(nav, () => { navBusy = false; });
  }

  function closeNav(section) {
    if (navBusy) return;
    navOpen = false;
    navBusy = true;
    setMenuState(false);
    if (section) showSection(section);
    nav.classList.remove('open');
    afterTransition(nav, () => {
      nav.classList.remove('visible');
      navBusy = false;
    });
  }

  document.addEventListener('click', e => {
    const t = e.target;
    if (lbIsOpen()) {
      if (swiped) swiped = false;
      else if (t === lbPrev) lbNav(-1);
      else if (t === lbNext) lbNav(1);
      else closeLightbox();
      return;
    }
    if (t.matches('.design img, .photos img')) {
      openLightbox(t);
      return;
    }
    const sectionBtn = t.closest('[data-section]');
    if (sectionBtn) {
      if (navOpen) closeNav(sectionBtn.dataset.section);
      else showSection(sectionBtn.dataset.section);
      return;
    }
    const scrollBtn = t.closest('[data-scroll]');
    if (scrollBtn) scrollToId(scrollBtn.dataset.scroll);
    else if (t.closest('#mobile-bar-btn')) openNav();
    else if (t === nav || t.closest('#mobile-nav-close')) closeNav();
  });

  document.addEventListener('mousedown', e => { if (!e.target.closest('video')) e.preventDefault(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Tab') e.preventDefault();
    else if (lbIsOpen()) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') lbNav(-1);
      else if (e.key === 'ArrowRight') lbNav(1);
    } else if (navOpen && e.key === 'Escape') {
      closeNav();
    }
  });

  const blockScroll = e => e.preventDefault();
  const blockKeys = e => { if (SCROLL_KEYS.includes(e.key)) e.preventDefault(); };
  document.addEventListener('wheel', blockScroll, { passive: false });
  document.addEventListener('keydown', blockKeys);

  function unlock() {
    document.getElementById('site-lock').remove();
    document.removeEventListener('wheel', blockScroll);
    document.removeEventListener('keydown', blockKeys);
    document.body.style.opacity = '1';
  }

  function reveal() {
    if (parseFloat(getComputedStyle(document.body).opacity) < 1) document.body.classList.add('fade-in');
    setTimeout(unlock, 800);
  }

  function start() {
    loading = true;
    pump();
    if (!document.hidden) {
      reveal();
      return;
    }
    document.addEventListener('visibilitychange', function onVisible() {
      if (document.hidden) return;
      document.removeEventListener('visibilitychange', onVisible);
      reveal();
    });
  }

  const critical = Array.from(document.querySelectorAll('.mobile-bar-logo, .logo, .entry-logo'));
  Promise.race([
    Promise.all(critical.map(img => img.complete || new Promise(resolve => onLoad(img, resolve)))),
    new Promise(resolve => setTimeout(resolve, BOOT_TIMEOUT)),
  ]).then(start);
})();
