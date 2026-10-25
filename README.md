# felixbruckmeier.github.io – Version 1

Portfolio- und Freelance-Seite. React 18 + TypeScript + Vite, Design „Variante A – Ruhig & editorial“.
Schriften (Inter, Fraunces) werden lokal ausgeliefert – keine Daten an Google.

## Lokal starten
```powershell
npm install
npm run dev
```
Läuft ohne Nexus/Bricks – alle Pakete kommen aus dem öffentlichen npm-Registry.

## Wo ändere ich was?
| Was | Datei |
|---|---|
| Kalender-Link, Formular-Endpoint, E-Mail, LinkedIn, CV | `src/content/config.ts` |
| Texte der Startseite | `src/content/home.ts` |
| Fallstudien (neue Seite = neuer Eintrag) | `src/content/cases.ts` |
| Impressum, Datenschutz | `src/content/legal.ts` |
| Farben, Schriftgrößen, Abstände | `src/styles/tokens.css` |
| Foto | Bild in `public/` legen, Pfad in `about.photo` in `home.ts` |
| Lebenslauf | `public/cv.pdf` |

Alle offenen Stellen sind mit `[eckigen Klammern]` markiert. Suche in VS Code: `Strg+Shift+F` → `[`.

## Fallstudien prüfen
`draft: true` ist nur für Fallstudien vorgesehen, deren Kernaussage noch unbelegt ist; solche Fälle werden in Production ausgeblendet. Andere offene Belege oder Freigaben gehören als einzelne Einträge in `openItems`. Sie erscheinen nur in der lokalen Entwicklung am Ende der Fallstudie.

`npm run content:check` listet sichtbare Fallstudien, offene Punkte und Drafts. Offene Punkte und Drafts sind Warnungen; Marker in tatsächlich veröffentlichten Inhalten brechen den Check ab. `npm run build` bleibt davon unabhängig, `npm run release` führt zuerst den Content-Check aus.

## Veröffentlichen auf GitHub Pages
1. Inhalt in das Repo `felixbruckmeier.github.io` pushen (Branch `main`).
   Tipp: Alte Seite vorher in einem Branch `alte-seite` sichern.
2. GitHub → Repo → **Settings → Pages → Source: „GitHub Actions“**.
3. Jeder Push auf `main` baut und veröffentlicht automatisch (`.github/workflows/deploy.yml`).

Unterseiten wie `/fallstudien/kano` funktionieren dank `404.html`-Kopie beim Build.
Für ein Test-Repo statt der User-Page: in `vite.config.ts` `base` auf `'/<repo-name>/'` setzen.

## Struktur
```
src/
├─ content/      alle Texte und Einstellungen
├─ components/   Header, Footer, Section, BookingButton, DelegationMatrix, CaseTeaser, ContactForm
├─ pages/        HomePage, CasePage, LegalPage, NotFoundPage
├─ hooks/        useTitle
└─ styles/       tokens.css, global.css
ai/              Konzept und Texte als Kontext für Copilot
```

## Projektdateien dokumentieren
Mit `.\export-project-docs.ps1` werden im Projektstamm zwei Markdown-Dateien erstellt:
`projektstruktur.md` enthält die Verzeichnis- und Dateiliste des gesamten Projekts,
`src-code.md` die Inhalte aller Dateien aus `src/`.

Mit `.\export-content.ps1` wird `website-content.md` erstellt. Die Datei dokumentiert Routing, Seiten- und Komponentenstruktur, Content-Daten sowie Styles und Design-Tokens – jeweils mit Projektpfad. React-Einstiegspunkt, Hooks, Abhängigkeiten und Build-Konfiguration sowie Bilder und andere Binärdateien werden ausgelassen. Bildpfade im Quelltext bleiben als Referenz erhalten.

## Barrierefreiheit (eingebaut)
Skip-Link, semantische Überschriften, sichtbarer Fokus, Kontraste ≥ 4,5:1, mobiles Menü mit `aria-expanded`,
`prefers-reduced-motion`, Formular mit Labels. Vor dem Livegang trotzdem mit Lighthouse/axe prüfen.
