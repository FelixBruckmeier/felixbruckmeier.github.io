import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Für User-Site Repos wie felixbruckmeier.github.io passt base: "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
