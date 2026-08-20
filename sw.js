const FALLBACK_VERSION = '2.0.0';

const urlsToCache = [
  './',
  './index.html',
  './app.webmanifest',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png',
  './icons/icon-384.png',
  './icons/icon-512.png'
];

async function getVersionFromIndex() {
  try {
    const res = await fetch('./index.html', { cache: 'no-store' });
    const text = await res.text();
    const match = text.match(/<meta\s+name=["']app-version["']\s+content=["']([^"']+)["']/i);
    return match ? match[1] : FALLBACK_VERSION;
  } catch (e) {
    return FALLBACK_VERSION;
  }
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    getVersionFromIndex().then(version => {
      const cacheName = 'orcafacil-v' + version;
      return caches.open(cacheName).then(cache => cache.addAll(urlsToCache));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    getVersionFromIndex().then(version => {
      const currentCache = 'orcafacil-v' + version;
      return caches.keys().then(names =>
        Promise.all(names.map(name =>
          name.startsWith('orcafacil-v') && name !== currentCache ? caches.delete(name) : null
        ))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate' || e.request.url.endsWith('index.html')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clone = response.clone();
          caches.open('orcafacil-runtime').then(cache => cache.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(response => {
      if (response) return response;
      return fetch(e.request).then(r => {
        const clone = r.clone();
        caches.open('orcafacil-runtime').then(cache => cache.put(e.request, clone));
        return r;
      });
    }).catch(() => {})
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});