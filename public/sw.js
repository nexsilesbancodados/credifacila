/* Service Worker — kill switch permanente
 * Nunca cacheia nada. Sempre se auto-desregistra e limpa todos os Cache Storage.
 * Garante que nenhum visitante fique preso em uma versão antiga do site.
 */
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((c) => c.navigate(c.url));
    })()
  );
});

// Bypass total: nunca interceptar nada, sempre rede direta.
self.addEventListener("fetch", (event) => {
  // Para requisições de navegação, força no-store para evitar bfcache de erros.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request, { cache: "no-store" }).catch(() => fetch(event.request))
    );
  }
});
