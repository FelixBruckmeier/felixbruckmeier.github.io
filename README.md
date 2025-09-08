# UXR Portfolio — Restore (2025‑09‑04)

**Was ist das?**  
Ein lauffähiger Snapshot deines Vite + React + Tailwind v4 Projekts, damit du sofort deployen kannst.

## Lokal starten
```bash
npm ci
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages (Actions)
- Datei: `.github/workflows/deploy.yml` ist enthalten.
- Repo-Einstellung: **Settings → Pages → Source = GitHub Actions**.
- Bei Push auf `main` wird automatisch gebaut & deployed.

## Struktur
- `src/App.tsx` – einfache Startseite mit Platzhaltern
- `src/main.tsx` – React Bootstrap
- `src/index.css` – Tailwind v4 + Design Tokens
- `vite.config.ts` – `base: "/"` für User Pages
