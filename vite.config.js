// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
// __dirname in ESM nachbauen
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
// Prüfen, ob wir in GitHub Actions laufen
var isActions = process.env.GITHUB_ACTIONS === "true";
export default defineConfig({
    plugins: [
        react(),
        imagetools(), // 🆕 automatisches Bild-Optimierungs-Plugin
    ],
    base: "/", // User/Org Pages: Root
    build: {
        outDir: isActions ? "dist" : "docs", // Actions → dist, lokal → docs
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    // Optional: sorgt dafür, dass WebP & PNG sauber importiert werden
    assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.webp"],
});
