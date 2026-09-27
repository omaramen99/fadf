/* Shared behaviour for all variants: variant switcher, project detail overlay, scroll reveal. */
(function () {
  var S = window.SITE;
  var VARIANTS = [
    { n: 1, file: 'v1-corvus.html', name: 'Corvus' },
    { n: 2, file: 'v2-ink.html', name: 'Ink & Feather' },
    { n: 3, file: 'v3-blueprint.html', name: 'Blueprint Crow' },
    { n: 4, file: 'v4-sumi-draft.html', name: 'Sumi Draft' },
    { n: 5, file: 'v5-ink-vellum.html', name: 'Ink on Vellum' },
    { n: 6, file: 'v6-sumi-sheet.html', name: 'Sumi Sheet' },
    { n: 7, file: 'v7-crow-sheet.html', name: 'Crow Sheet' }
  ];
  var KEY = 'fadf-variant-pos';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------- switcher: jump to the same section (and spot within it) in another variant ---------- */
  function currentSpot() {
    var secs = document.querySelectorAll('[data-sec]'), probe = window.innerHeight * 0.35, best = null;
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= probe) best = s; });
    if (!best) return { id: 'top', f: 0 };
    var r = best.getBoundingClientRect();
    return { id: best.id, f: Math.min(1, Math.max(0, (probe - r.top) / Math.max(1, r.height))) };
  }
  function go(n) {
    var v = VARIANTS[n - 1]; if (!v || document.body.dataset.variant == n) return;
    var spot = currentSpot();
    try { sessionStorage.setItem(KEY, JSON.stringify(spot)); } catch (e) {}
    location.href = v.file + (spot.id !== 'top' ? '#' + spot.id : '');
  }
  function restore() {
    var spot = null;
    try { spot = JSON.parse(sessionStorage.getItem(KEY)); sessionStorage.removeItem(KEY); } catch (e) {}
    // content is rendered by JS, so the browser's own #hash jump happens too early: redo it here
    if (!spot && location.hash.length > 1) spot = { id: decodeURIComponent(location.hash.slice(1)), f: 0, top: true };
    if (!spot) return;
    if (spot.top) { var t = document.getElementById(spot.id); if (t) t.scrollIntoView(); return; }
    var el = document.getElementById(spot.id); if (!el) return;
    var y = el.getBoundingClientRect().top + window.scrollY + spot.f * el.offsetHeight - window.innerHeight * 0.35;
    window.scrollTo(0, Math.max(0, y));
  }
  function buildSwitcher() {
    var cur = +document.body.dataset.variant;
    var bar = document.createElement('nav');
    bar.className = 'vswitch';
    bar.setAttribute('aria-label', 'Design variants');
    bar.innerHTML = '<span class="vswitch-label">Variant</span>' + VARIANTS.map(function (v) {
      return '<button type="button" data-n="' + v.n + '"' + (v.n === cur ? ' aria-current="true"' : '') +
        ' title="Press ' + v.n + '"><b>' + v.n + '</b><span>' + v.name + '</span></button>';
    }).join('');
    bar.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) go(+b.dataset.n); });
    document.body.appendChild(bar);
    document.addEventListener('keydown', function (e) {
      if (e.target.closest('input, textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key >= '1' && e.key <= '7') go(+e.key);
      if (e.key === 'Escape') closeProject();
    });
  }

  /* ---------- project detail overlay ---------- */
  var overlay;
  function project(id) { return S.projects.filter(function (p) { return p.id === id; })[0]; }
  function openProject(id) {
    var p = project(id); if (!p) return;
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'pm';
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay || e.target.closest('.pm-close')) closeProject();
        var t = e.target.closest('.pm-thumb');
        if (t) {
          overlay.querySelector('.pm-main').src = t.dataset.src;
          overlay.querySelectorAll('.pm-thumb').forEach(function (x) { x.classList.toggle('on', x === t); });
        }
      });
      document.body.appendChild(overlay);
    }
    var idx = S.projects.indexOf(p) + 1;
    overlay.innerHTML =
      '<article class="pm-panel" role="dialog" aria-modal="true" aria-label="' + esc(p.name) + '">' +
      '<button class="pm-close" type="button" aria-label="Close">×</button>' +
      '<div class="pm-media"><img class="pm-main" src="' + esc(p.images[0]) + '" alt="' + esc(p.name) + ' screenshot">' +
      '<div class="pm-thumbs">' + p.images.map(function (src, i) {
        return '<img class="pm-thumb' + (i ? '' : ' on') + '" data-src="' + esc(src) + '" src="' + esc(src) + '" alt="">';
      }).join('') + '</div></div>' +
      '<div class="pm-body"><p class="pm-no">Project ' + (idx < 10 ? '0' : '') + idx + ' / ' + (S.projects.length < 10 ? '0' : '') + S.projects.length + '</p>' +
      '<h3 class="pm-title">' + esc(p.name) + '</h3><p class="pm-short">' + esc(p.short) + '</p>' +
      '<p class="pm-desc">' + esc(p.desc) + '</p>' +
      '<h4>Features</h4><ul class="pm-feat">' + p.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      '<h4>Tools</h4><ul class="pm-tools">' + p.tools.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      '<div class="pm-links">' +
      (p.video ? '<a class="pm-btn" target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=' + esc(p.video) + '">Watch the video ↗</a>' : '') +
      (p.link ? '<a class="pm-btn pm-btn-alt" target="_blank" rel="noopener" href="' + esc(p.link) + '">Open project ↗</a>' : '') +
      '</div></div></article>';
    overlay.classList.add('open');
    document.documentElement.classList.add('pm-lock');
    overlay.querySelector('.pm-close').focus();
  }
  function closeProject() {
    if (!overlay || !overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    document.documentElement.classList.remove('pm-lock');
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-project]');
    if (t) { e.preventDefault(); openProject(t.dataset.project); }
  });

  /* ---------- reveal on scroll ---------- */
  function reveal() {
    var els = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- demo contact form (prototype only, nothing is sent) ---------- */
  document.addEventListener('submit', function (e) {
    var f = e.target.closest('form[data-demo]'); if (!f) return;
    e.preventDefault();
    var msg = f.querySelector('.form-note');
    if (msg) msg.textContent = 'Prototype only: in the real site this goes to the contact-form backend.';
  });

  window.UI = {
    esc: esc,
    init: function () {
      buildSwitcher(); reveal();
      // wait for images so section offsets are final before jumping to the saved spot
      if (document.readyState === 'complete') restore(); else window.addEventListener('load', restore);
    },
    openProject: openProject
  };
})();
