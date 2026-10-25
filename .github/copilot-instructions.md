# Copilot-Regeln: felixbruckmeier-site

## Kontext
Persönliche Portfolio- und Freelance-Seite. React 18 + TypeScript + Vite, statisch auf GitHub Pages.
Design: Variante A „Ruhig & editorial“. Keine UI-Library, kein Bricks.

## Texte
- Alle Texte liegen in `src/content/`. Texte NUR dort ändern, nie in Komponenten hart codieren.
- Ansprache „Sie“. Keine erfundenen Zahlen, Kunden oder Zitate. Fehlendes als `[Platzhalter]`.

## Design
- Nur Variablen aus `src/styles/tokens.css` verwenden. Keine neuen Farben oder Schriften.
- Akzentfarbe nur für Aktionen und Hervorhebungen.
- Barrierefreiheit: semantisches HTML, sichtbarer Fokus, Kontrast ≥ 4,5:1, `prefers-reduced-motion` respektieren.

## Nicht ändern (außer ausdrücklich verlangt)
`package.json`, `vite.config.ts`, `tsconfig.json`, `.github/workflows/`. Keine neuen Dependencies.

## Neue Fallstudie
Eintrag in `src/content/cases.ts` ergänzen – Seite und Teaser entstehen automatisch.
