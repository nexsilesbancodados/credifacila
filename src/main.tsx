 import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const DYNAMIC_IMPORT_ERROR_KEY = "credifacil:dynamic-import-reload";

const recoverFromChunkLoadError = () => {
  const hasReloaded = sessionStorage.getItem(DYNAMIC_IMPORT_ERROR_KEY) === "true";

  if (hasReloaded) {
    sessionStorage.removeItem(DYNAMIC_IMPORT_ERROR_KEY);
    return;
  }

  sessionStorage.setItem(DYNAMIC_IMPORT_ERROR_KEY, "true");
  window.location.reload();
};

window.addEventListener("error", (event) => {
  if (event.message?.includes("Failed to fetch dynamically imported module")) {
    recoverFromChunkLoadError();
  }
});

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason;
  const message = typeof reason === "string" ? reason : reason?.message;

  if (message?.includes("Failed to fetch dynamically imported module")) {
    event.preventDefault();
    recoverFromChunkLoadError();
  }
});

 const rootElement = document.getElementById("root");
 if (rootElement) {
   const root = createRoot(rootElement);
   root.render(<App />);
   
   // Remove loader after React has had a chance to mount
   setTimeout(() => {
     document.body.classList.add("loaded");
   }, 100);
 }
