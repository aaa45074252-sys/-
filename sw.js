self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('plutarch-cache-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './style.css',
        './data.js',
        './app.js',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
