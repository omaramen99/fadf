/* Per-page search metadata. public/index.html holds the defaults (home page); this updates the
   title, description, canonical URL and robots tag when a project or the 404 page is shown,
   and restores the defaults afterwards. Google reads these after rendering the JavaScript. */
const SITE = 'https://www.omaramen.com';

function tag(selector, create) {
  let el = document.head.querySelector(selector);
  if (!el && create) { el = create(); document.head.appendChild(el); }
  return el;
}
const meta = (name) => tag('meta[name="' + name + '"]', () => Object.assign(document.createElement('meta'), { name }));
const ogMeta = (prop) => tag('meta[property="' + prop + '"]', () => {
  const m = document.createElement('meta'); m.setAttribute('property', prop); return m;
});
const canonical = () => tag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }));

// the home-page values from index.html, captured once at startup
const DEFAULTS = {
  title: document.title,
  description: (meta('description').getAttribute('content') || ''),
  robots: (meta('robots').getAttribute('content') || 'index, follow')
};

// path: e.g. '/portfolio/123' (canonical URL for this view); omit for the home page
export function setPageMeta({ title, description, path, noindex } = {}) {
  const url = SITE + (path || '/');
  document.title = title || DEFAULTS.title;
  meta('description').setAttribute('content', description || DEFAULTS.description);
  meta('robots').setAttribute('content', noindex ? 'noindex, follow' : DEFAULTS.robots);
  canonical().setAttribute('href', url);
  ogMeta('og:url').setAttribute('content', url);
  ogMeta('og:title').setAttribute('content', title || DEFAULTS.title);
}

export function resetPageMeta() {
  setPageMeta();
}

// Search snippets are cut at about 155 characters; cut at a word boundary.
export function snippet(text, max = 155) {
  const t = String(text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  return t.slice(0, t.lastIndexOf(' ', max - 1)).replace(/[,.;:]$/, '') + '…';
}
