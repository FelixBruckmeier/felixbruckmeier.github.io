import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",                 // User Pages
  plugins: [react()],
  resolve: { alias: { "@": "/src" } }  // simpler Alias
});
