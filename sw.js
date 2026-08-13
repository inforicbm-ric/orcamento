const CACHE_NAME = 'orcafacil-v2';

// Detecta o caminho base automaticamente
const BASE = self.location.pathname.replace(/\/sw\.js$/, '') || '';
const urlsToCache = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Só intercepta requisições do mesmo domínio/origem
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate' || event.request.destination === 'document') {
          return caches.match(BASE + '/index.html');
        }
      });
    })
  );
});
