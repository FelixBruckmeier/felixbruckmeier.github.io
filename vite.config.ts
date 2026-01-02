// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// __dirname in ESM nachbauen
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Prüfen, ob wir in GitHub Actions laufen
const isActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  plugins: [
    react(),

    /**
     * 🖼 AUTOMATISCHE BILDOPTIMIERUNG
     * --------------------------------
     * Diese Default-Regeln sorgen dafür, dass ALLE Importe mit ?as=picture:
     * - in 6 responsive Größen generiert werden
     * - WebP + JPG erzeugen
     * - als <picture> mit srcset ausgeliefert werden
     * → massive Performance-Verbesserung ohne Code-Änderungen
     */
    imagetools({
      defaultDirectives: () =>
        new URLSearchParams({
          // mehrere responsive Bildgrößen
          w: "2000;1400;1000;800;600;400",

          // moderne + Fallback Formate
          format: "webp;jpg",

          // Ausgabe als <picture>
          as: "picture",
        }),
    }),
  ],

  /**
   * BASE PATH
   * Für GitHub Pages → "/" (User/Org Pages)
   */
  base: "/",

  /**
   * BUILD OUTPUT FOLDER
   * GitHub Actions → dist
   * Lokal → docs
   */
  build: {
    outDir: isActions ? "dist" : "docs",
  },

  /**
   * ALIASE
   * Erlaubt Importe wie "@/components/Button"
   */
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  /**
   * STELLE SICHER, DASS Vite DIE BILDER ERKENNT
   */
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp"],
});
