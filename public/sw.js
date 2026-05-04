/* Service Worker — kill switch
 * Desregistra a si mesmo e limpa todos os caches.
 * Recupera usuários presos em versões antigas do SW.
 */
self.addEventListener("install", () => {
  self.skipWaiting();
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

self.addEventListener("fetch", () => {
  // Não interceptar nada — deixa o navegador buscar direto da rede.
});
