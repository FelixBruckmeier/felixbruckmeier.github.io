import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Für User-Page (felixbruckmeier.github.io) KEIN base-Unterpfad nötig.
});
