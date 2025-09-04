# UXR Portfolio — Felix Bruckmeier

Modernes, bewerbungsreifes Portfolio (Vite + React + TypeScript + Tailwind v4) mit EN/DE & Dark/Light.

## Quickstart
```bash
# Node 22 empfohlen
npm ci
npm run dev
# Build
npm run build && npm run preview
```

## Features
- EN/DE Umschalter (persistiert in `localStorage`)
- Dark/Light-Mode via `html.dark`
- Klare, moderne UI inspiriert von Tesla, Zoom, Linear, Notion, Signal, Slack
- Kachel-Layouts für Expertise & Projekte
- SEO (Meta, OG), `sitemap.xml`, `robots.txt`, `manifest`
- CV-Download unter `/Felix_Bruckmeier_CV.pdf`

## Struktur
- `src/pages/*` — Seiten (Home, About, Expertise + Unterseiten, Projects + Cases, Craft, Contact, Imprint, Privacy)
- `src/components/*` — Navbar, Footer, LanguageToggle, ThemeToggle
- `src/i18n/*` — einfache JSON-Übersetzungen (DE/EN)
- `src/assets/svg/*` — SVGs (Double Diamond, ReOps, 2x2)

## Inhalte pflegen
- Texte in `src/i18n/de.json` und `src/i18n/en.json` anpassen.
- Case-Detailseiten unter `src/pages/projects/*` ausfüllen (Struktur: Situation → Research → Decisions → Impact).

## Deployment auf GitHub Pages
- Dieses Repo nach `felixbruckmeier.github.io` pushen (Branch: `main`).
- GitHub → Settings → Pages: Build and deployment: "GitHub Actions".
- Workflow `.github/workflows/pages.yml` baut und deployed `dist/` automatisch.
- `vite.config.ts` verwendet `base: '/'` (für User/Org Pages korrekt).

## Troubleshooting
- **Leere Seite/404 bei Direktaufruf**: In GitHub Pages ist SPA-Fallback automatisch via Actions konfiguriert; andernfalls 404.html auf index umleiten.
- **Dark-Mode flackert**: `localStorage`-Wert wird in `main.tsx` vor Mount angewendet.
- **Tailwind**: Version 4 mit `@tailwindcss/postcss`. Tokens in `@theme` (siehe `src/index.css`).

## Lizenz
MIT