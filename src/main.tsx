import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const RELOAD_KEY = "credifacil:dynamic-import-reload";

const recoverFromChunkLoadError = () => {
  if (sessionStorage.getItem(RELOAD_KEY) === "true") {
    sessionStorage.removeItem(RELOAD_KEY);
    return;
  }
  sessionStorage.setItem(RELOAD_KEY, "true");
  window.location.reload();
};

const isChunkLoadError = (msg: string | undefined) =>
  !!msg && msg.includes("Failed to fetch dynamically imported module");

window.addEventListener("error", (e) => {
  if (isChunkLoadError(e.message)) recoverFromChunkLoadError();
});
window.addEventListener("unhandledrejection", (e) => {
  const msg = typeof e.reason === "string" ? e.reason : e.reason?.message;
  if (isChunkLoadError(msg)) {
    e.preventDefault();
    recoverFromChunkLoadError();
  }
});

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
  // Esconde loader assim que pintar o primeiro frame React
  requestAnimationFrame(() =>
    requestAnimationFrame(() => document.body.classList.add("loaded"))
  );
}

// Service Worker desativado permanentemente.
// Em toda carga: (1) desregistra qualquer SW remanescente, (2) limpa todos os
// Cache Storage do navegador. Se algum SW antigo ainda estiver ativo, registramos
// o kill switch /sw.js — ele se auto-desregistra e limpa caches.
if ("serviceWorker" in navigator) {
  const purgeCaches = async () => {
    if (!("caches" in window)) return;
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    } catch {
      /* noop */
    }
  };

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .getRegistrations()
      .then(async (regs) => {
        if (regs.length > 0) {
          await Promise.all(regs.map((r) => r.unregister()));
          await purgeCaches();
        } else if (import.meta.env.PROD) {
          // Garante que o kill switch fique disponível para quem chegar com SW antigo
          // em outra aba — mas o registramos e imediatamente desregistramos.
          navigator.serviceWorker
            .register("/sw.js")
            .then((reg) => reg.unregister())
            .catch(() => undefined);
        }
      })
      .catch(() => undefined);

    // Detecta páginas restauradas do bfcache com possível conteúdo de erro 412 antigo
    window.addEventListener("pageshow", (e) => {
      if ((e as PageTransitionEvent).persisted) {
        void purgeCaches();
      }
    });
  });
}
