import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base '/' passt für felixbruckmeier.github.io (User-Page) und eigene Domain.
// Für ein Test-Repo (z. B. github.io/website-test/) auf '/website-test/' ändern.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 5173, open: true },
});
