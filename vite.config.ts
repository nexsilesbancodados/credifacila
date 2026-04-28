import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { compression } from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Pré-compressão (gera .gz e .br no dist/) — Easypanel/Nginx serve direto
    mode !== "development" &&
      compression({
        algorithm: "gzip",
        threshold: 1024,
        deleteOriginalAssets: false,
      }),
    mode !== "development" &&
      compression({
        algorithm: "brotliCompress",
        threshold: 1024,
        deleteOriginalAssets: false,
      }),
  ].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    assetsInlineLimit: 6 * 1024, // SVGs até 6KB ficam inline (reduz requests)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-router") || id.includes("@remix-run")) return "router";
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("react-dom")) return "react";
          if (id.includes("react/")) return "react";
          return "vendor";
        },
      },
    },
  },
}));
