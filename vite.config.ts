// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Hilfsvariablen für __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Prüfen, ob wir in GitHub Actions laufen
const isActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  plugins: [react()],
  base: "/", // User/Org Pages Repo = root
  build: {
    outDir: isActions ? "dist" : "docs", // Branch: docs | Actions: dist
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
