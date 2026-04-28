 import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

 const rootElement = document.getElementById("root");
 if (rootElement) {
   const root = createRoot(rootElement);
   root.render(<App />);
   
   // Remove loader after React has had a chance to mount
   setTimeout(() => {
     document.body.classList.add("loaded");
   }, 100);
 }
