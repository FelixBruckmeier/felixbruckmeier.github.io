// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: { port: 5173, open: true, hmr: { overlay: false } },
  preview: { port: 4173, open: true },
  base: './',
  build: { target: 'es2020', sourcemap: true },
})
