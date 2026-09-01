(() => {
  'use strict';

  if (location.pathname.endsWith('/') && location.pathname !== '/') {
    const base = document.createElement('base');
    base.href = location.href;
    document.head.appendChild(base);
    history.replaceState(null, '', location.pathname.slice(0, -1) + location.search + location.hash);
  }

  document.addEventListener('contextmenu', (e) => { e.preventDefault(); });

  const videos = [
    { title: "Roxie - LostFile", url: "https://www.youtube.com/watch?v=NVAbdaUk4PQ" },
    { title: "NOT A HUMAN - 2025-12-17", url: "https://www.youtube.com/watch?v=H-WfeQ_srrU" },
    { title: "sneak - THEY NEVER COMING BACK", url: "https://www.youtube.com/watch?v=RZ7iZbF2BtQ" },
    { title: "sneak - OK BOOL", url: "https://www.youtube.com/watch?v=RGavUVuHw20" },
    { title: "sneak - OK WITH IT", url: "https://www.youtube.com/watch?v=qQ57vtbpJLw" },
    { title: "sneak - PUT DA CUP DOWN", url: "https://www.youtube.com/watch?v=wTvThmhuT9k" },
    { title: "sneak - LET ME KNOW", url: "https://www.youtube.com/watch?v=gVdQ4hNLcPA" },
    { title: "sneak - VOORHEES", url: "https://www.youtube.com/watch?v=h1lCqAssywg" },
    { title: "sneak - HEAVEN ABOVE ME", url: "https://www.youtube.com/watch?v=0q0bmCZTVdM" },
  ];

  const photos = [
    ["DSC03137.webp", 4 / 5], ["DSC03145.webp", 3 / 2], ["DSC03148.webp", 4 / 5],
    ["DSC03154.webp", 3 / 2], ["DSC03155.webp", 3 / 2], ["DSC03156.webp", 3 / 2],
    ["DSC03237.webp", 2 / 3], ["DSC03293.webp", 3 / 2], ["DSC03296.webp", 2 / 3],
    ["DSC03556.webp", 3 / 2], ["DSC03582.webp", 2 / 3], ["DSC03603.webp", 3 / 2],
    ["DSC03622.webp", 3 / 2], ["DSC03642.webp", 2 / 3], ["DSC03659.webp", 2 / 3],
    ["DSC03885.webp", 4 / 5], ["DSC04300.webp", 4 / 5], ["DSC04340.webp", 4 / 5],
    ["DSC04431.webp", 2 / 3], ["DSC04456.webp", 2 / 3], ["DSC04471.webp", 3 / 2],
  ];

  const design = [
    'design/roxie/roxie-motherfucker-cover.webp',
    'design/sneak/vanilla-sky-tracklist.webp',
    'design/2-20-03/profile-picture-2.webp',
    'design/not-a-human/profile-picture.png',
    'design/not-a-human/version-2.png',
    'design/not-a-human/version-1.png',
    'design/sneak/sharpshooter-tracklist-2.webp',
    'design/sneak/sharpshooter-tracklist-1.webp',
    'design/sneak/ok-with-it-cover.webp',
    'design/2-20-03/profile-picture-1.webp',
    'design/soufpaw/collar-3.webp',
    'design/soufpaw/collar-2.webp',
    'design/soufpaw/collar-1.webp',
    'design/soufpaw/leash-3.webp',
    'design/soufpaw/leash-2.webp',
    'design/soufpaw/leash-1.webp',
    'design/2-20-03/fashion-week-cover.webp',
    'design/saint-martins/logo-3.png',
    'design/saint-martins/logo-2.png',
    'design/saint-martins/logo-1.png',
  ];

  const music = {
    personal: [
      { title: "hamed, ARKMAN, legion, skai & yugen - fashion week", sc: "https://soundcloud.com/2-20-03/fashion-week" },
      { title: "hamed, cargo, legion, Lucid & skai - october",       sc: "https://soundcloud.com/2-20-03/october" },
      { title: "hamed & Luca Malaspina - down",                      sc: "https://soundcloud.com/2-20-03/down" },
    ],
    production: [
      { title: "one2nine3 - MIME",        sc: "https://soundcloud.com/onetwoninethree/mime" },
      { title: "one2nine3 - fell in <3",  sc: "https://soundcloud.com/onetwoninethree/fell-in-love" },
      { title: "TyFontaine - downer",     sc: "https://soundcloud.com/1800tyfontaine/downer" },
      { title: "Destroy Lonely - Not Ok", sc: "https://soundcloud.com/cantmockit/destroy-lonely-okay" },
      { title: "Vagex - Long Time",       sc: "https://soundcloud.com/vagexsm/long-time-prod-hamed-cargo" },
      { title: "FaZe Clan - Introducing FaZe Kaysan Trailer", video: "music/faze-kaysan-trailer.mp4", poster: "music/faze-kaysan-trailer.png" },
    ],
    mixing: [
      { title: "sneak - IT'S DIFFERENT NOW",  sc: "https://soundcloud.com/sneakties/its-different-now" },
      { title: "sneak - DRIVE ME SANE",       sc: "https://soundcloud.com/sneakties/drive-me-sane" },
      { title: "sneak - SHOOTS & LADDERS",    sc: "https://soundcloud.com/sneakties/shoots-ladders" },
      { title: "sneak - CHUN-LI",             sc: "https://soundcloud.com/sneakties/chun-li" },
      { title: "sneak - M(M)",                sc: "https://soundcloud.com/sneakties/m-m" },
      { title: "sneak - TRAVEL DOCTOR",       sc: "https://soundcloud.com/sneakties/travel-doctor" },
      { title: "sneak - BULLY",               sc: "https://soundcloud.com/sneakties/bully" },
      { title: "sneak - HIBACHI",             sc: "https://soundcloud.com/sneakties/hibachi" },
      { title: "sneak - TIRED",               sc: "https://soundcloud.com/sneakties/tired" },
      { title: "sneak - BOOTED & SANE",       sc: "https://soundcloud.com/sneakties/booted-sane" },
      { title: "sneak - ADD IT UP",           sc: "https://soundcloud.com/sneakties/add-it-up" },
      { title: "sneak - COSMO",               sc: "https://soundcloud.com/sneakties/cosmo" },
      { title: "sneak - WHITE STUFF",         sc: "https://soundcloud.com/sneakties/white-stuff" },
      { title: "kels! - ALL ALONE",           sc: "https://soundcloud.com/gamerboii-kels/all-alone" },
      { title: "sneak - FLORIDA BEACH",       sc: "https://soundcloud.com/sneakties/florida-beach" },
      { title: "sneak - JUNYA ON ME",         sc: "https://soundcloud.com/sneakties/junya-on-me" },
      { title: "sneak - THERE WILL BE BLOOD", sc: "https://soundcloud.com/sneakties/there-will-be-blood" },
      { title: "sneak - ARRANCAR",            sc: "https://soundcloud.com/sneakties/arrancar" },
      { title: "sneak - BETTER LIES",         sc: "https://soundcloud.com/sneakties/better-lies" },
      { title: "sneak - GRANDMASTER",         sc: "https://soundcloud.com/sneakties/grandmaster" },
      { title: "sneak - CHEAP THRILLS",       sc: "https://soundcloud.com/sneakties/cheap-thrills" },
      { title: "sneak - CASE CLOSED",         sc: "https://soundcloud.com/sneakties/case-closed" },
      { title: "sneak - SCORPIO",             sc: "https://soundcloud.com/sneakties/scorpio" },
      { title: "sneak - TYSON",               sc: "https://soundcloud.com/sneakties/tyson" },
      { title: "sneak - SLADE",               sc: "https://soundcloud.com/sneakties/slade" },
      { title: "sneak - ZEROEZ",              sc: "https://soundcloud.com/sneakties/zeroez" },
      { title: "sneak - BEAUTY:BEAST",        sc: "https://soundcloud.com/sneakties/beauty-beast" },
      { title: "sneak - WNBA",                sc: "https://soundcloud.com/sneakties/wnba" },
      { title: "sneak - ALMIGHTY SNEAK",      sc: "https://soundcloud.com/sneakties/almighty-sneak" },
      { title: "sneak - ED & RUMMY",          sc: "https://soundcloud.com/sneakties/ed-rummy" },
      { title: "sneak - GOOD TIME",           sc: "https://soundcloud.com/sneakties/good-time" },
      { title: "sneak - G NIKES",             sc: "https://soundcloud.com/sneakties/g-nikes" },
      { title: "sneak - SHIT GET REAL",       sc: "https://soundcloud.com/sneakties/shit-get-real" },
      { title: "sneak - PRAGUE",              sc: "https://soundcloud.com/sneakties/prague" },
      { title: "sneak - THUMBS MISSING",      sc: "https://soundcloud.com/sneakties/thumbs-missing" },
      { title: "sneak - CRY ABOUT IT",        sc: "https://soundcloud.com/sneakties/cry-about-it" },
      { title: "sneak - NICKELODEON",         sc: "https://soundcloud.com/sneakties/nickelodeon" },
      { title: "sneak - FREELOADING",         sc: "https://soundcloud.com/sneakties/freeloading" },
      { title: "sneak - HIGH FIVE GHOST",     sc: "https://soundcloud.com/sneakties/high-five-ghost" },
      { title: "sneak - HAVE IT YO WAY",      sc: "https://soundcloud.com/sneakties/have-it-yo-way" },
      { title: "sneak - PUT DA CUP DOWN",     sc: "https://soundcloud.com/sneakties/put-da-cup-down" },
    ]
  };

  const SECTIONS = ['work', 'design', 'photos', 'videos', 'music'];

  function pauseAllMedia() {
    document.querySelectorAll('video').forEach(v => { v.pause(); });
    document.querySelectorAll('iframe').forEach(f => {
      if (f.dataset.src) return;
      try { f.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); } catch {}
      try { f.contentWindow.postMessage(JSON.stringify({ method: 'pause' }), '*'); } catch {}
    });
  }

  const LANE_LIMIT = { image: Infinity, video: Infinity, audio: 4 };
  const BOOT_SECTIONS = ['videos'];
  const _loadQueue = [];
  const _loadPending = {};
  const _loadLive = { image: 0, video: 0, audio: 0 };
  let _loadSection = 'work', _loadStarted = false;

  function queueLoad(section, lane, start) {
    _loadQueue.push({ section, lane, start });
    _loadPending[section] = (_loadPending[section] || 0) + 1;
  }

  function _syncSections() {
    SECTIONS.forEach(s => {
      const el = document.getElementById('section-' + s);
      if (!el) return;
      const active = s === _loadSection;
      const booting = !active && BOOT_SECTIONS.includes(s) && _loadPending[s] > 0;
      el.style.display = active || booting ? '' : 'none';
      el.classList.toggle('section-boot', booting);
      el.toggleAttribute('inert', !active);
      if (active) el.removeAttribute('aria-hidden');
      else el.setAttribute('aria-hidden', 'true');
      if (!active) el.classList.remove('section-shown');
    });
    const cur = document.getElementById('section-' + _loadSection);
    if (cur && !cur.classList.contains('section-shown')) {
      void cur.offsetHeight;
      void getComputedStyle(cur).opacity;
      cur.classList.add('section-shown');
    }
  }

  function _pumpLoads() {
    if (!_loadStarted) return;
    Object.keys(LANE_LIMIT).forEach(lane => {
      while (_loadLive[lane] < LANE_LIMIT[lane]) {
        let i = _loadQueue.findIndex(t => t.lane === lane && t.section === _loadSection);
        if (i < 0) i = _loadQueue.findIndex(t => t.lane === lane);
        if (i < 0) return;
        const task = _loadQueue.splice(i, 1)[0];
        _loadLive[lane]++;
        let stepped = false;
        task.start(() => {
          if (stepped) return;
          stepped = true;
          _loadLive[lane]--;
          if (--_loadPending[task.section] === 0) _syncSections();
          _pumpLoads();
        });
      }
    });
  }

  function startLoads() {
    if (_loadStarted) return;
    _loadStarted = true;
    _syncSections();
    void document.body.offsetHeight;
    _loadQueue.sort((a, b) => SECTIONS.indexOf(a.section) - SECTIONS.indexOf(b.section));
    _pumpLoads();
  }

  (() => {
    const ytId = (url) => { const m = url.match(/(?:v=|youtu\.be\/|embed\/)([^&?/]+)/); return m ? m[1] : null; };
    const box = document.getElementById('videobox');
    videos.forEach(v => {
      const id = ytId(v.url);
      if (!id) return;

      const iframe = document.createElement('iframe');
      iframe.title = v.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      queueLoad('videos', 'video', (done) => {
        const step = () => { iframe.classList.add('loaded'); done(); };
        iframe.addEventListener('load', step, { once: true });
        iframe.addEventListener('error', step, { once: true });
        setTimeout(step, 8000);
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?enablejsapi=1';
      });

      const videoWrap = document.createElement('div');
      videoWrap.className = 'videobox-video';
      videoWrap.appendChild(iframe);

      const cell = document.createElement('div');
      cell.appendChild(videoWrap);
      box.appendChild(cell);
    });
  })();

  (() => {
    const DEFAULT_AR = 1.5;
    const box = document.getElementById('photobox');
    const rows = [];

    for (let i = 0; i < photos.length; i += 3) {
      const n = Math.min(3, photos.length - i);
      const rowEl = document.createElement('div');
      rowEl.className = 'photos-row';
      const cells = [];
      let totalAR = 0;
      for (let j = 0; j < n; j++) {
        const cell = document.createElement('div');
        cell.style.flex = photos[i + j][1] || DEFAULT_AR;
        totalAR += parseFloat(cell.style.flex);
        rowEl.appendChild(cell);
        cells.push(cell);
      }
      rowEl.style.aspectRatio = totalAR;
      box.appendChild(rowEl);
      rows.push({ el: rowEl, cells });
    }

    photos.forEach(([name], i) => {
      const { el: rowEl, cells } = rows[Math.floor(i / 3)];
      const cell = cells[i % 3];

      const img = new Image();
      img.alt = '';
      img.tabIndex = -1;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Photo ' + (i + 1) + ' of ' + photos.length);
      img.addEventListener('load', () => {
        cell.style.flex = (img.naturalWidth || 3) / (img.naturalHeight || 2);
        let totalAR = 0;
        for (const c of cells) totalAR += parseFloat(c.style.flex) || DEFAULT_AR;
        rowEl.style.aspectRatio = totalAR;
        img.classList.add('loaded');
        img.tabIndex = 0;
      });

      img.dataset.src = 'photos/' + name;

      cell.appendChild(img);
      queueLoad('photos', 'image', (done) => {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
        img.src = img.dataset.src;
      });
    });
  })();

  (() => {
    const box = document.getElementById('designbox');
    design.forEach((src, i) => {
      const cell = document.createElement('div');
      cell.style.aspectRatio = '1/1';

      const img = new Image();
      img.alt = '';
      img.tabIndex = -1;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Image ' + (i + 1) + ' of ' + design.length);
      img.addEventListener('load', () => {
        cell.style.aspectRatio = '';
        img.classList.add('loaded');
        img.tabIndex = 0;
      });

      img.dataset.src = src;

      cell.appendChild(img);
      box.appendChild(cell);
      queueLoad('design', 'image', (done) => {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
        img.src = img.dataset.src;
      });
    });
  })();

  (() => {
    const scSrc = (sc) => 'https://w.soundcloud.com/player/?url=' + encodeURIComponent(sc) +
      '&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true' +
      '&show_reposts=false&show_teaser=false&visual=true&sharing=false';

    const buildGridbox = (tracks, boxId) => {
      const box = document.getElementById(boxId);
      tracks.forEach(t => {
        const cell = document.createElement('div');
        if (t.sc) {
          const iframe = document.createElement('iframe');
          iframe.title = t.title;
          iframe.allow = 'autoplay';
          iframe.dataset.src = scSrc(t.sc);
          queueLoad('music', 'audio', (done) => {
            const step = () => { iframe.classList.add('loaded'); done(); };
            iframe.addEventListener('load', step, { once: true });
            iframe.addEventListener('error', step, { once: true });
            setTimeout(step, 8000);
            iframe.src = iframe.dataset.src;
            iframe.removeAttribute('data-src');
          });
          cell.appendChild(iframe);
        } else if (t.video) {
          const video = document.createElement('video');
          video.preload = 'none';
          video.poster = t.poster;
          video.controls = true;
          video.setAttribute('aria-label', t.title);
          const source = document.createElement('source');
          source.src = t.video;
          source.type = 'video/mp4';
          video.appendChild(source);
          queueLoad('music', 'image', (done) => {
            const posterImg = new Image();
            const showVideo = () => { video.classList.add('loaded'); done(); };
            posterImg.addEventListener('load', showVideo, { once: true });
            posterImg.addEventListener('error', showVideo, { once: true });
            posterImg.src = t.poster;
          });
          cell.appendChild(video);
        } else {
          return;
        }
        box.appendChild(cell);
      });
    };

    buildGridbox(music.personal, 'gridbox-personal');
    buildGridbox(music.production, 'gridbox-production');
    buildGridbox(music.mixing, 'gridbox-mixing');
  })();

  startLoads();

  let _lb = null, _lbImgs = [], _lbIdx = 0, _lbAnimating = false, _lbTrigger = null;
  let _lbTouchX = null, _lbTouchY = null, _lbSwiped = false;

  const _lbOpen = () => !!_lb && _lb.classList.contains('lb-visible');

  function _lbUpdateCount() {
    const c = document.getElementById('lb-count');
    if (c) {
      c.textContent = (_lbIdx + 1) + ' / ' + _lbImgs.length;
      c.style.visibility = _lbImgs.length === 1 ? 'hidden' : '';
    }
    const img = _lb && _lb.querySelector('img');
    if (img) img.alt = 'Image ' + (_lbIdx + 1) + ' of ' + _lbImgs.length;
  }

  function _lbPreload(idx) {
    [-1, 1].forEach(d => { new Image().src = _lbImgs[(idx + d + _lbImgs.length) % _lbImgs.length]; });
  }

  function _lbNav(dir) {
    if (_lbImgs.length <= 1) return;
    _lbIdx = (_lbIdx + dir + _lbImgs.length) % _lbImgs.length;
    _lb.querySelector('img').src = _lbImgs[_lbIdx];
    _lbUpdateCount();
    _lbPreload(_lbIdx);
  }

  function _toggleMobileBar(hidden) {
    ['.mobile-bar-logo', '.mobile-bar-btn'].forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.style.opacity = hidden ? '0' : '';
        el.style.pointerEvents = hidden ? 'none' : '';
      }
    });
  }

  function _afterTransition(el, ms, fn) {
    let done = () => { fn(); done = () => {}; };
    el.addEventListener('transitionend', (e) => { if (e.target === el) done(); }, { once: true });
    setTimeout(() => done(), ms);
  }

  function _closeLightbox() {
    if (_lbAnimating) return;
    _lbAnimating = true;
    _lb.classList.remove('lb-open');
    _toggleMobileBar(false);
    _afterTransition(_lb, 250, () => {
      _lb.classList.remove('lb-visible');
      _lbAnimating = false;
      if (_lbTrigger) { _lbTrigger.focus(); _lbTrigger = null; }
    });
  }

  function _openLightbox(imgs, idx) {
    if (_lbAnimating) return;
    if (!_lb) _lb = document.getElementById('lightbox');
    if (!_lb) return;
    pauseAllMedia();
    _lbImgs = imgs;
    _lbIdx = idx;
    const single = imgs.length === 1;
    ['lb-prev', 'lb-next'].forEach(id => {
      const b = document.getElementById(id);
      if (b) b.style.visibility = single ? 'hidden' : '';
    });
    _lb.querySelector('img').src = _lbImgs[_lbIdx];
    _lbUpdateCount();
    _lbPreload(idx);
    _lbAnimating = true;
    _lb.classList.add('lb-visible');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      _lb.classList.add('lb-open');
      _toggleMobileBar(true);
      _afterTransition(_lb, 250, () => {
        _lbAnimating = false;
        const close = document.getElementById('lb-close');
        if (close) close.focus();
      });
    }));
  }

  function _openFromImage(el) {
    const group = el.closest('.design');
    const siblings = group
      ? Array.from(group.querySelectorAll('img'))
      : Array.from(document.querySelectorAll('.photos-row img'));
    _lbTrigger = el;
    _openLightbox(siblings.map(i => i.dataset.src || i.src), Math.max(0, siblings.indexOf(el)));
  }

  const _reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - offset,
      behavior: _reducedMotion.matches ? 'auto' : 'smooth'
    });
  }

  function showSection(name) {
    const cur = document.getElementById('btn-' + name);
    if (cur && cur.classList.contains('btn-active')) return;
    pauseAllMedia();
    SECTIONS.forEach(s => {
      const b = document.getElementById('btn-' + s);
      if (b) {
        b.classList.toggle('btn-active', s === name);
        b.setAttribute('aria-current', s === name ? 'page' : 'false');
      }
    });
    ['work', 'music'].forEach(s => {
      const sub = document.getElementById('sub-' + s);
      if (sub) sub.style.display = s === name ? '' : 'none';
    });
    _loadSection = name;
    _syncSections();
    _pumpLoads();
    window.scrollTo({ top: 0, behavior: 'instant' });
    _updateMobileNavActive(name);
  }

  function _updateMobileNavActive(name) {
    SECTIONS.forEach(s => {
      const btn = document.getElementById('mobile-btn-' + s);
      if (btn) {
        btn.classList.toggle('mobile-nav-active', s === name);
        btn.setAttribute('aria-current', s === name ? 'page' : 'false');
      }
    });
  }

  let _navOpen = false, _navAnimating = false;
  const _mobileNav = document.getElementById('mobile-nav');
  const _mobileBarBtn = document.getElementById('mobile-bar-btn');

  function _setBarBtnState(open) {
    _mobileBarBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    _mobileBarBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  function _openNav() {
    if (_navAnimating) return;
    _navOpen = true;
    _navAnimating = true;
    _mobileNav.classList.add('visible');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      _mobileNav.classList.add('open');
      _afterTransition(_mobileNav, 250, () => {
        _navAnimating = false;
        document.getElementById('mobile-nav-close').focus();
      });
    }));
    _setBarBtnState(true);
  }

  function _closeNav() {
    if (_navAnimating) return;
    _navOpen = false;
    _navAnimating = true;
    _mobileNav.classList.remove('open');
    _afterTransition(_mobileNav, 250, () => {
      if (!_navOpen) _mobileNav.classList.remove('visible');
      _navAnimating = false;
      _mobileBarBtn.focus();
    });
    _setBarBtnState(false);
  }

  function mobileShowSection(name) {
    if (_navAnimating) return;
    _navOpen = false;
    _navAnimating = true;
    showSection(name);
    _setBarBtnState(false);
    requestAnimationFrame(() => {
      _mobileNav.classList.remove('open');
      _afterTransition(_mobileNav, 250, () => {
        if (!_navOpen) _mobileNav.classList.remove('visible');
        _navAnimating = false;
        _mobileBarBtn.focus();
      });
    });
  }

  _mobileBarBtn.addEventListener('click', () => { if (_navOpen) _closeNav(); else _openNav(); });
  document.getElementById('mobile-nav-close').addEventListener('click', _closeNav);
  _mobileNav.addEventListener('click', (e) => { if (e.target === _mobileNav) _closeNav(); });

  document.addEventListener('click', (e) => {
    if (_lbOpen()) {
      if (_lbSwiped) { _lbSwiped = false; return; }
      if (e.target.id === 'lb-prev') { _lbNav(-1); return; }
      if (e.target.id === 'lb-next') { _lbNav(1); return; }
      _closeLightbox();
      return;
    }
    if (e.target.matches('.design img,.photos-row img')) { _openFromImage(e.target); return; }
    const sectionBtn = e.target.closest('[data-section]');
    if (sectionBtn) {
      const name = sectionBtn.dataset.section;
      if (sectionBtn.closest('#mobile-nav')) mobileShowSection(name); else showSection(name);
      return;
    }
    const scrollBtn = e.target.closest('[data-scroll]');
    if (scrollBtn) scrollToId(scrollBtn.dataset.scroll);
  });

  document.addEventListener('keydown', (e) => {
    if (_lbOpen()) {
      if (e.key === 'Escape') _closeLightbox();
      if (e.key === 'ArrowLeft') _lbNav(-1);
      if (e.key === 'ArrowRight') _lbNav(1);
      if (e.key === 'Tab') {
        const f = ['lb-close', 'lb-prev', 'lb-next']
          .map(id => document.getElementById(id))
          .filter(el => el && el.style.visibility !== 'hidden');
        const i = f.indexOf(document.activeElement);
        e.preventDefault();
        f[e.shiftKey ? (i <= 0 ? f.length : i) - 1 : (i + 1) % f.length].focus();
      }
      return;
    }
    if (e.key === 'Escape' && _navOpen) { _closeNav(); return; }
    if (_navOpen && e.key === 'Tab') {
      const focusable = Array.from(_mobileNav.querySelectorAll('button'));
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
      return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.design img,.photos-row img')) {
      e.preventDefault();
      _openFromImage(e.target);
    }
  });

  (() => {
    const lb = document.getElementById('lightbox');
    lb.addEventListener('touchstart', (e) => {
      _lbTouchX = e.touches[0].clientX;
      _lbTouchY = e.touches[0].clientY;
      _lbSwiped = false;
    }, { passive: true });
    lb.addEventListener('touchcancel', () => { _lbTouchX = null; _lbTouchY = null; }, { passive: true });
    lb.addEventListener('touchend', (e) => {
      if (_lbTouchX === null) return;
      const dx = e.changedTouches[0].clientX - _lbTouchX;
      const dy = e.changedTouches[0].clientY - _lbTouchY;
      _lbTouchX = null;
      _lbTouchY = null;
      if (Math.abs(dy) > Math.abs(dx) && dy > 80) { _lbSwiped = true; _closeLightbox(); return; }
      if (Math.abs(dx) < 40) return;
      _lbSwiped = true;
      _lbNav(dx < 0 ? 1 : -1);
    }, { passive: true });
  })();

  const BOOT_TIMEOUT = 5000;

  const _blockScroll = (e) => { e.preventDefault(); };
  const _blockKeys = (e) => {
    if ([' ', 'PageUp', 'PageDown', 'End', 'Home', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.key)) e.preventDefault();
  };
  document.addEventListener('wheel', _blockScroll, { passive: false });
  document.addEventListener('keydown', _blockKeys);

  let _unlocked = false;
  const _unlock = () => {
    if (_unlocked) return;
    _unlocked = true;
    const lock = document.getElementById('site-lock');
    if (lock) lock.remove();
    document.removeEventListener('wheel', _blockScroll);
    document.removeEventListener('keydown', _blockKeys);
    document.body.style.opacity = '1';
  };

  const _saveData = () => {
    const conn = navigator.connection;
    return !!conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ''));
  };

  const warmFonts = () => {
    if (!document.fonts || !document.fonts.load) return;
    ['300 1rem "Roboto Mono"', '600 1rem "Roboto Mono"']
      .forEach(f => { document.fonts.load(f).catch(() => {}); });
  };

  const warmVideoFile = () => {
    const conn = navigator.connection;
    const slow = conn && (conn.saveData || /(^|-)[23]g$/.test(conn.effectiveType || ''));
    document.querySelectorAll('.gridbox video').forEach(v => {
      if (v.poster) new Image().src = v.poster;
      if (slow) return;
      v.preload = 'auto';
      v.load();
    });
  };

  const warmAssets = () => {
    warmFonts();
    if (_saveData()) return;
    warmVideoFile();
  };

  const startFade = () => {
    if (parseFloat(getComputedStyle(document.body).opacity) < 1) {
      document.body.classList.add('fade-in');
    }
    setTimeout(_unlock, 800);
    setTimeout(() => {
      if ('requestIdleCallback' in window) requestIdleCallback(warmAssets, { timeout: 300 });
      else warmAssets();
    }, 1500);
  };

  let _faded = false;
  const doStart = () => {
    if (_faded) return;
    _faded = true;
    if (document.hidden) {
      document.addEventListener('visibilitychange', function h() {
        if (!document.hidden) { document.removeEventListener('visibilitychange', h); startFade(); }
      });
    } else {
      startFade();
    }
    _updateMobileNavActive('work');
  };

  const critical = Array.from(document.querySelectorAll('.mobile-bar-logo, .logo, #section-work .entry-logo'));
  const ready = Promise.all(critical.map(img => img.complete
    ? Promise.resolve()
    : new Promise(r => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); })));
  Promise.race([ready, new Promise(r => setTimeout(r, BOOT_TIMEOUT))]).then(doStart);
})();
