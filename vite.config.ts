import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/" // korrekt für User-Site felixbruckmeier.github.io
});
