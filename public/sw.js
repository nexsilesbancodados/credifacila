/* Service Worker — Credifácil
 * Estratégia: stale-while-revalidate p/ assets, network-first p/ HTML.
 * Mantém o site instantâneo em visitas repetidas e funciona offline.
 */
const VERSION = "v2";
const CACHE_STATIC = `credifacil-static-${VERSION}`;
const CACHE_PAGES = `credifacil-pages-${VERSION}`;

const PRECACHE_URLS = ["/", "/favicon.ico", "/og-image.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== CACHE_STATIC && k !== CACHE_PAGES)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

const isAsset = (url) =>
  /\.(?:js|css|webp|png|jpg|svg|woff2|woff|ttf|ico)$/i.test(url.pathname);

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Não interceptar fontes externas, analytics, WhatsApp etc.
  if (url.origin !== self.location.origin) return;

  // Páginas (navegação): network-first, cache fallback (somente respostas OK)
  if (req.mode === "navigate" || req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_PAGES).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match("/"))
        )
    );
    return;
  }

  // Assets imutáveis (com hash): cache-first
  if (isAsset(url)) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_STATIC).then((c) => c.put(req, copy));
          }
          return res;
        });
      })
    );
    return;
  }

  // Demais GETs: stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const fresh = fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_STATIC).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fresh;
    })
  );
});
