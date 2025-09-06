// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Kein __dirname, kein 'path', kein 'node:url'.
// Alias '@' zeigt direkt auf '/src' (aus Projekt-Root).
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
