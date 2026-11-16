/* Service worker do Pro Gym Clube. Para publicar uma nova versão, mude VERSAO. */
const VERSAO = 'v1.1.0';
const CACHE = 'progym-clube-' + VERSAO;
const PRE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "../assets/fonts/archivo-latin-600-normal.woff2",
  "../assets/fonts/archivo-latin-700-normal.woff2",
  "../assets/fonts/archivo-latin-800-normal.woff2",
  "../assets/fonts/inter-latin-400-normal.woff2",
  "../assets/fonts/inter-latin-500-normal.woff2",
  "../assets/fonts/inter-latin-600-normal.woff2",
  "../assets/fonts/inter-latin-700-normal.woff2"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith('progym-clube-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Páginas: tenta a rede (versão nova) e usa a cópia guardada se estiver sem ligação.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => { const cp = res.clone(); caches.open(CACHE).then((c) => c.put('index.html', cp)); return res; })
        .catch(() => caches.match('index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Restantes ficheiros (fontes, ícones): cópia guardada primeiro.
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const cp = res.clone(); caches.open(CACHE).then((c) => c.put(req, cp)); }
      return res;
    }))
  );
});
