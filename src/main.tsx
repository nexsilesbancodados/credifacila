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

// Service Worker — só em produção, sem bloquear paint
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  });
}
