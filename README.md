
# UXR Portfolio — Vite + React + Tailwind

Lauffähiges Portfolio mit EN/DE, Dark Mode, Kachel-Layouts und Projektdetails.

## Entwicklung
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)
- Repo: `felixbruckmeier.github.io`
- Branch: z. B. `vite-migration`
- In `vite.config.ts` ist `base: './'` gesetzt. Für Pages ggf. anpassen.

## Struktur
- Inhalte in `src/data/content.*.json`
- Routen in `src/router.tsx`
- Komponenten in `src/components`
- Design Tokens in `src/index.css`

## ToDo
- Original-CV ersetzen unter `public/assets/CV_Felix_Bruckmeier.pdf`
- Echte Bilder hinzufügen und in Seiten einbinden
- Projekte mit echten Metriken/Case Studies ausformulieren
