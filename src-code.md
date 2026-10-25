# Quellcode

Root-Konfiguration sowie src, public, scripts, ai, .github. Secrets (.env, .npmrc) und Lockfiles sind ausgeschlossen.

## package.json

```json
{
  "name": "felixbruckmeier-site",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build && node -e \"require('fs').copyFileSync('dist/index.html','dist/404.html')\"",
    "content:check": "node scripts/content-check.mjs",
    "release": "npm run content:check && npm run build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fontsource-variable/fraunces": "^5.1.0",
    "@fontsource-variable/inter": "^5.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.2",
    "typescript": "^5.6.2",
    "vite": "^5.4.8"
  }
}
```

## index.html

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <title>Felix Bruckmeier – UX Manager für Human-AI Work Design</title>
    <meta name="description" content="UX Management, Research und Human-AI Work Design: von der Problemklärung über klare Mensch-Agent-Workflows und testbare Prototypen bis zum Wirkungsnachweis." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Felix Bruckmeier – UX Manager für Human-AI Work Design" />
    <meta property="og:description" content="UX Management, Research und Human-AI Work Design: von der Problemklärung über klare Mensch-Agent-Workflows und testbare Prototypen bis zum Wirkungsnachweis." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base '/' passt für felixbruckmeier.github.io (User-Page) und eigene Domain.
// Für ein Test-Repo (z. B. github.io/website-test/) auf '/website-test/' ändern.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 5173, open: true },
});
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src"]
}
```

## README.md

````md
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
````

## src/App.tsx

```tsx
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import HomePage from './pages/HomePage';
import CasePage from './pages/CasePage';
import CvPage from './pages/CvPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import { imprint, privacy } from './content/legal';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Zum Inhalt springen</a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fallstudien/:slug" element={<CasePage />} />
          <Route path="/lebenslauf" element={<CvPage />} />
          <Route path="/impressum" element={<LegalPage content={imprint} />} />
          <Route path="/datenschutz" element={<LegalPage content={privacy} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
```

## src/components/BookingButton.tsx

```tsx
import { config } from '../content/config';

interface Props {
  label: string;
  variant?: 'primary' | 'small';
}

// Hauptaktion. Ohne Kalender-Link springt sie zum Kontaktbereich.
export default function BookingButton({ label, variant = 'primary' }: Props) {
  const external = Boolean(config.calendarUrl);
  return (
    <a
      className={`btn ${variant === 'small' ? 'btn--small' : ''}`}
      href={external ? config.calendarUrl : '/#kontakt'}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
      {external && <span className="visually-hidden"> (öffnet in neuem Tab)</span>}
    </a>
  );
}
```

## src/components/CaseTeaser.tsx

```tsx
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../content/cases';

export default function CaseTeaser({ item }: { item: CaseStudy }) {
  return (
    <article className={`case ${item.featured ? 'case--featured' : ''}`}>
      <div className="case__body">
        {import.meta.env.DEV && item.draft && <p className="draft-notice">Entwurf – nur in der lokalen Entwicklung</p>}
        <p className="eyebrow eyebrow--accent">Fallstudie · {item.tags.join(' · ')}</p>
        <h3 className="case__title">
          <Link to={`/fallstudien/${item.slug}`} className="stretched">{item.title}</Link>
        </h3>
        <p className="case__teaser">{item.teaser}</p>
        <span className="case__more" aria-hidden="true">Fallstudie lesen →</span>
      </div>
      {item.metric && (
        <div className="case__metric">
          <span className="metric">{item.metric.value}</span>
          <span className="metric__label">{item.metric.label}</span>
        </div>
      )}
    </article>
  );
}
```

## src/components/ContactForm.tsx

```tsx
import { config } from '../content/config';

// Mit config.formAction: POST an den Formulardienst. Ohne: E-Mail-Link als Fallback.
export default function ContactForm() {
  if (!config.formAction) {
    return (
      <p className="contact__fallback">
        Schreiben Sie mir an <a href={`mailto:${config.email}`}>{config.email}</a>.
      </p>
    );
  }
  return (
    <form className="form" action={config.formAction} method="POST">
      <div className="form__row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="form__row">
        <label htmlFor="email">E-Mail</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form__row">
        <label htmlFor="message">Nachricht</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <p className="form__hint">
        Mit dem Absenden werden Ihre Angaben gemäß der <a href="/datenschutz">Datenschutzerklärung</a> verarbeitet.
      </p>
      <button type="submit" className="btn btn--secondary">Nachricht senden</button>
    </form>
  );
}
```

## src/components/cv/ContactGrid.tsx

```tsx
import type { Contact } from '../../content/cv';

type ContactGridProps = {
  contacts: readonly Contact[];
  label: string;
};

export default function ContactGrid({ contacts, label }: ContactGridProps) {
  return (
    <address className="cv-contacts" aria-label={label}>
      {contacts.map((contact) => (
        <div className="cv-contact" key={contact.label}>
          <span>{contact.label}</span>
          <a
            className={contact.nowrap ? 'cv-contact-value cv-contact-value--nowrap' : 'cv-contact-value'}
            href={contact.href}
          >
            {contact.value}
          </a>
        </div>
      ))}
    </address>
  );
}
```

## src/components/cv/CV.tsx

```tsx
import { Link } from 'react-router-dom';
import { cvData } from '../../content/cv';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import '../../styles/cv.css';

export default function CV() {
  return (
    <div className="cv-document">
      <div className="cv-actions">
        <Link to="/#ueber-mich">{cvData.actions.back}</Link>
        <button type="button" onClick={() => window.print()}>{cvData.actions.print}</button>
      </div>
      <PageOne />
      <PageTwo />
    </div>
  );
}
```

## src/components/cv/ExperienceItem.tsx

```tsx
import type { Experience } from '../../content/cv';

type ExperienceItemProps = {
  experience: Experience;
};

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="cv-experience-entry">
      <header>
        <div>
          <h3>{experience.company}</h3>
          <p>{experience.role}</p>
        </div>
        <time>{experience.period}</time>
      </header>
      <ul>
        {experience.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
      </ul>
    </article>
  );
}
```

## src/components/cv/ImpactCard.tsx

```tsx
import type { Impact } from '../../content/cv';

type ImpactCardProps = {
  impact: Impact;
  number?: string;
};

export default function ImpactCard({ impact, number }: ImpactCardProps) {
  return (
    <article className={`cv-impact-card${number ? '' : ' cv-impact-card--sme'}`}>
      {number && <span className="cv-number">{number}</span>}
      <h3>{impact.title}</h3>
      <p className="cv-impact-description">{impact.description}</p>
      {impact.outcome && (
        <p className="cv-impact-outcome">
          <span aria-hidden="true">→</span> {impact.outcome}
        </p>
      )}
    </article>
  );
}
```

## src/components/cv/PageOne.tsx

```tsx
import { cvData } from '../../content/cv';
import ContactGrid from './ContactGrid';
import ImpactCard from './ImpactCard';

export default function PageOne() {
  const page = cvData.pageOne;

  return (
    <article className="cv-page cv-page-one" aria-labelledby="cv-name">
      <header className="cv-header">
        <div className="cv-introduction">
          <p className="cv-eyebrow">{page.kicker}</p>
          <h1 id="cv-name">{cvData.name}</h1>
          <p className="cv-positioning">{page.positioning}</p>
          <p className="cv-focus">{page.focus}</p>
          <p className="cv-profile">{page.profile}</p>
        </div>
        <img
          className="cv-portrait"
          src="/cv/portrait.jpg"
          alt={page.portraitAlt}
        />
      </header>

      <ContactGrid contacts={page.contacts} label={page.contactsLabel} />

      <section className="cv-current-role" aria-labelledby="cv-current-title">
        <div>
          <p className="cv-section-label">{page.currentRoleLabel}</p>
          <h2 id="cv-current-title">{page.currentRole.company}</h2>
          <p>{page.currentRole.role}</p>
        </div>
        <time>{page.currentRole.period}</time>
      </section>

      <section className="cv-impact-section" aria-labelledby="cv-impact-title">
        <div className="cv-section-heading">
          <h2 id="cv-impact-title">{page.impactsHeading}</h2>
          <span>{page.impactsCount}</span>
        </div>
        <div className="cv-impact-grid">
          {page.impacts.map((impact, index) => (
            <ImpactCard
              key={impact.title}
              impact={impact}
              number={String(index + 1).padStart(2, '0')}
            />
          ))}
        </div>
      </section>

      <section className="cv-sme-section" aria-labelledby="cv-sme-title">
        <div className="cv-section-heading cv-sme-heading">
          <h2 id="cv-sme-title">{page.subjectMatterMeta}</h2>
        </div>
        <div className="cv-sme-grid">
          {page.subjectMatterImpacts.map((impact) => (
            <ImpactCard key={impact.title} impact={impact} />
          ))}
        </div>
      </section>

      <footer className="cv-page-footer">
        <span>{cvData.name}</span>
        <span>{page.footerPage}</span>
      </footer>
    </article>
  );
}
```

## src/components/cv/PageTwo.tsx

```tsx
import { cvData } from '../../content/cv';
import ExperienceItem from './ExperienceItem';
import SkillGroup from './SkillGroup';

export default function PageTwo() {
  const page = cvData.pageTwo;

  return (
    <article className="cv-page cv-page-two" aria-labelledby="cv-experience-title">
      <header className="cv-page-heading">
        <p className="cv-eyebrow">{page.kicker}</p>
        <h2 id="cv-experience-title">{page.heading}</h2>
      </header>
      <div className="cv-body-grid">
        <section className="cv-experience-list" aria-label={page.experienceLabel}>
          {page.experience.map((experience) => (
            <ExperienceItem key={experience.company} experience={experience} />
          ))}
          <section className="cv-ai-profile" aria-labelledby="cv-ai-profile-title">
            <h3 id="cv-ai-profile-title">{page.aiProfile.title}</h3>
            <p>{page.aiProfile.text}</p>
          </section>
        </section>

        <aside className="cv-sidebar" aria-labelledby="cv-competencies-title">
          <h2 id="cv-competencies-title">{page.competenciesHeading}</h2>
          {page.skills.map((group) => <SkillGroup key={group.title} group={group} />)}
          <section className="cv-sidebar-block">
            <h3>{page.education.title}</h3>
            <p>{page.education.degree}</p>
            <p>{page.education.institution}</p>
            <p>{page.education.period}</p>
          </section>
          <section className="cv-sidebar-block">
            <h3>{page.languages.title}</h3>
            {page.languages.items.map((language) => <p key={language}>{language}</p>)}
          </section>
          <section className="cv-sidebar-block">
            <h3>{page.tools.title}</h3>
            {page.tools.items.map((tool) => <p key={tool}>{tool}</p>)}
          </section>
        </aside>
      </div>
      <footer className="cv-page-footer">
        <span>{cvData.name}</span>
        <span>{page.footerPage}</span>
      </footer>
    </article>
  );
}
```

## src/components/cv/SkillGroup.tsx

```tsx
import type { SkillGroupData } from '../../content/cv';

type SkillGroupProps = {
  group: SkillGroupData;
};

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <section className="cv-competency-group">
      <h3>{group.title}</h3>
      <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}
```

## src/components/DelegationMatrix.tsx

```tsx
import { approach } from '../content/home';

export default function DelegationMatrix() {
  const m = approach.matrix;
  return (
    <>
      <figure className="matrix">
        <div className="matrix__text">
          <h3>{m.title}</h3>
          <p>{m.text}</p>
        </div>
        <div className="matrix__chart">
          <span className="matrix__y" aria-hidden="true">{m.yLabel} →</span>
          <ul className="matrix__grid" aria-label={`${m.title}: ${m.yLabel} gegen ${m.xLabel}`}>
            {/* Reihenfolge: oben links, oben rechts, unten links, unten rechts */}
            <li className="cell cell--mid"><strong>{m.cells.lowHigh.title}</strong><span>{m.cells.lowHigh.text}</span><em className="visually-hidden">Geringe Unsicherheit, hohe Auswirkung.</em></li>
            <li className="cell cell--strong"><strong>{m.cells.highHigh.title}</strong><span>{m.cells.highHigh.text}</span><em className="visually-hidden">Hohe Unsicherheit, hohe Auswirkung.</em></li>
            <li className="cell cell--light"><strong>{m.cells.lowLow.title}</strong><span>{m.cells.lowLow.text}</span><em className="visually-hidden">Geringe Unsicherheit, geringe Auswirkung.</em></li>
            <li className="cell cell--mid"><strong>{m.cells.highLow.title}</strong><span>{m.cells.highLow.text}</span><em className="visually-hidden">Hohe Unsicherheit, geringe Auswirkung.</em></li>
          </ul>
          <span className="matrix__x" aria-hidden="true">{m.xLabel} →</span>
        </div>
      </figure>
      <section className="trust-block" aria-labelledby="trust-title">
        <h3 id="trust-title" className="trust-block__title">{approach.trust.title}</h3>
        <div className="trust-grid">
          {approach.trust.items.map((item) => (
            <article key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
```

## src/components/Footer.tsx

```tsx
import { Link } from 'react-router-dom';
import { config } from '../content/config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {config.name} — Alle Rechte vorbehalten</p>
        <ul>
          <li><Link to="/impressum">Impressum</Link></li>
          <li><Link to="/datenschutz">Datenschutz</Link></li>
          {config.linkedinUrl && <li><a href={config.linkedinUrl}>LinkedIn</a></li>}
          {config.githubUrl && <li><a href={config.githubUrl}>GitHub</a></li>}
        </ul>
      </div>
    </footer>
  );
}
```

## src/components/Header.tsx

```tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingButton from './BookingButton';
import { config } from '../content/config';

const nav = [
  { href: '/#angebote', label: 'Angebote' },
  { href: '/#vorgehen', label: 'Vorgehen' },
  { href: '/#fallstudien', label: 'Fallstudien' },
  { href: '/lebenslauf', label: 'Über mich' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand" onClick={() => setOpen(false)}>
          {config.name}
        </Link>
        <button
          className="header__toggle"
          aria-expanded={open}
          aria-controls="hauptnavigation"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Schließen' : 'Menü'}
        </button>
        <nav id="hauptnavigation" aria-label="Hauptnavigation" className={`header__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link to={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <BookingButton label="Erstgespräch buchen" variant="small" />
        </nav>
      </div>
    </header>
  );
}
```

## src/components/ScrollManager.tsx

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrollt bei Seitenwechsel nach oben bzw. zum Anker (#angebote usw.).
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
```

## src/components/Section.tsx

```tsx
import type { ReactNode } from 'react';

interface Props {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: 'default' | 'raised';
}

export default function Section({ id, title, intro, children, tone = 'default' }: Props) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <h2 id={`${id}-title`} className="section__title">{title}</h2>
        {intro && <p className="section__intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
```

## src/content/cases.ts

```ts
// Fallstudien. Neuer Eintrag = neue Seite /fallstudien/<slug> + Teaser auf der Startseite.
// Nur belegbare Zahlen verwenden. Interne Inhalte sind markiert und zusätzlich anonymisiert.

export interface CaseStudy {
  slug: string;
  title: string;
  teaser: string;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  openItems?: string[];
  metric?: { value: string; label: string };
  openingArtifact?: { image: string; alt: string; caption: string };
  visuals?: { title: string; text: string; image: string; alt: string }[];
  sections: {
    situation: string;
    question: string;
    approach: string;
    collaboration?: string;
    insight: string;
    impact: string;
    role: string;
  };
}

export const cases: CaseStudy[] = [
  {
    slug: 'zielgruppen-agent',
    title: 'Zielgruppen-Agent: Research-Zugang als Teamstandard',
    teaser: 'Problem: Produktteams fanden passende Research-Teilnehmende nicht verlässlich. · Meine Rolle: Bedarf, Regeln und Einführung des Agenten koordiniert. · Wirkung: Teamstandard, genutzt von mindestens 2 Produktteams.',
    tags: ['Verstehen', 'Spezifizieren', 'Bauen', 'Verankern'],
    featured: true,
    // [FREIGABE PRÜFEN] Interner EnBW-Beleg. Öffentliche Fassung ist auf „Energieversorger, IT-Bereich“ anonymisiert.
    openItems: [
      '[FREIGABE PRÜFEN: Nutzung, Wortlaut „Teamstandard“ und öffentliche Nennung der Zahl vor Veröffentlichung bestätigen.]',
    ],
    openingArtifact: {
      image: '/cases/zielgruppen-agent/sketchnote.png',
      alt: 'Sketchnote zum Weg vom Suchaufwand zum Zielgruppen-Agenten: Teams verstehen den Bedarf, klären Regeln, bauen den Agenten und verankern ihn im Alltag.',
      caption: 'Vom manuellen Suchaufwand zu einem nachvollziehbaren, datenschutzkonformen Research-Zugang für Produktteams.',
    },
    metric: {
      value: '≥ 2',
      label: 'Produktteams nutzen den Teamstandard',
    },
    sections: {
      situation: 'In einem IT-Bereich eines Energieversorgers benötigten mehrere Produktteams regelmäßig passende Beschäftigte für Interviews und Tests. Die Suche hing von persönlichem Wissen und manueller Abstimmung ab. Dadurch war der Zugang zu Zielgruppen schwer wiederholbar und für Teams ohne Research-Routine besonders aufwendig.',
      question: 'Wie können Produktteams passende Research-Teilnehmende selbstständiger identifizieren, ohne Auswahlregeln und Datenschutzanforderungen zu umgehen?',
      approach: 'Ich klärte mit den beteiligten Teams typische Suchanlässe, relevante Zielgruppenmerkmale und Grenzen der Nutzung. Daraus entstanden eine strukturierte Wissensbasis, nachvollziehbare Auswahlregeln und ein Agent, der Teams durch die Zielgruppenklärung führt. Die Einführung erfolgte nicht als einmalige Demonstration, sondern mit Anwendungsbeispielen, Rückmeldeschleifen und klarer Zuständigkeit für die Weiterentwicklung.',
      collaboration: 'Der Agent strukturiert die Anfrage, schlägt passende Zielgruppenmerkmale vor und macht fehlende Angaben sichtbar. Das Produktteam prüft Zweck und Passung; die verantwortliche Stelle bestätigt den zulässigen Rekrutierungsweg. Der Agent trifft keine Entscheidung über die Teilnahme einzelner Personen.',
      insight: 'Skalierung entsteht nicht allein durch einen funktionierenden Agenten. Sie entsteht, wenn Auswahlregeln, Zuständigkeiten und der Übergang in den bestehenden Research-Prozess verständlich genug sind, damit Teams das Werkzeug ohne ständige Einzelbegleitung nutzen können.',
      impact: 'Der Zielgruppen-Agent wurde zum Standard im UX-Team und von mindestens 2 Produktteams genutzt.',
      role: 'Ich koordinierte die Anforderungen der Teams, entschied die Struktur der Wissensbasis, übersetzte Auswahlregeln in einen geführten Ablauf, erprobte den Agenten mit realen Suchanlässen und befähigte die Teams zur Nutzung.',
    },
  },
  {
    slug: 'vom-problem-zum-agenten',
    title: 'Research-Agent: von Befragungsdaten zur belastbaren Antwort',
    teaser: 'Problem: Neue Fragen erforderten wiederholt individuelle Auswertungen. · Meine Rolle: Analyse, Arbeitsmodell und Agenten-Prototyp koordiniert. · Wirkung: Teams können Fragen selbst stellen; methodische Grenzen bleiben Teil der Antwort.',
    tags: ['Verstehen', 'Bewerten', 'Spezifizieren', 'Bauen', 'Messen'],
    featured: true,
    // [FREIGABE PRÜFEN] Interner Name „George“, Laptop-Befragung und Bilder. Öffentliche Textfassung ist anonymisiert.
    openItems: [
      '[FREIGABE PRÜFEN: öffentliche Beschreibung des Anwendungsfalls, Agentenname und Bildmaterial.]',
      '[BELEG FEHLT: dokumentierte Nutzung, eingesparte Analysezeit oder Zahl der beantworteten Anfragen.]',
    ],
    openingArtifact: {
      image: '/cases/vom-problem-zum-agenten/sketchnote.png',
      alt: 'Sketchnote zum Weg von zwei Beschäftigtenbefragungen über ein Dashboard zu einem Research-Agenten.',
      caption: 'Vom vorbereiteten Bericht zum dialogischen Zugang – mit klarer Trennung von Befund, Interpretation und Empfehlung.',
    },
    visuals: [
      {
        title: 'Dashboard als Zwischenlösung',
        text: 'Das Dashboard machte vorbereitete Kennzahlen und Unterschiede zwischen Erhebungen sichtbar. Für neue Fragestellungen blieb es jedoch zu starr: Eine zusätzliche Frage erforderte eine neue Auswertung oder Ansicht.',
        image: '/cases/vom-problem-zum-agenten/power-bi-dashboard.png',
        alt: 'Dashboard mit Verläufen und Unterschieden zwischen zwei Befragungen.',
      },
      {
        title: 'Spezialisierter Research-Agent',
        text: 'Der Agent verbindet Befragungsdaten mit Studienkontext, Methodenregeln und einer Wissensbasis. Er zeigt Befunde, kennzeichnet Unsicherheit und schlägt nächste Analysen vor, ohne Ursachen oder Entscheidungen vorzutäuschen.',
        image: '/cases/vom-problem-zum-agenten/george-2-3.png',
        alt: 'Ansicht eines spezialisierten Research-Agenten mit Hinweisen zu seiner methodischen Rolle.',
      },
    ],
    sections: {
      situation: 'In einem IT-Bereich eines Energieversorgers lagen zwei umfangreiche Beschäftigtenbefragungen zur Nutzung eines digitalen Arbeitsmittels vor. Produktteams benötigten einen flexiblen Zugang zu Bewertungen und offenen Kommentaren. Da die Erhebungen aus unterschiedlichen Stichproben bestanden, durften Unterschiede nicht als Entwicklung derselben Personen oder als nachgewiesene Ursache ausgegeben werden.',
      question: 'Wie können Produktteams neue Fragen an umfangreiche Befragungsdaten stellen, ohne für jede Frage eine Einzelauswertung zu beauftragen und ohne methodische Grenzen zu verlieren?',
      approach: 'Die Lösung entwickelte sich in drei Schritten: vergleichende Auswertung, interaktives Dashboard und spezialisierter Research-Agent. Ich definierte die Wissensbasis aus Studienkontext, verfügbaren Daten, Methodenregeln und Begriffen. In Tests musste der Agent beobachtbare Unterschiede, statistische Zusammenhänge, mögliche Erklärungen und nachgewiesene Ursachen klar trennen. Fehlerfälle wurden genutzt, um Anweisungen und Prüfregeln zu präzisieren.',
      collaboration: 'Angewendete Delegationszone: „Vorschlagen und auswählen“ bei neuen Analysen, „Vorbereiten und freigeben“ bei Management-Aussagen. Der Agent findet Daten, berechnet oder verdichtet Befunde und nennt Grenzen. Eine fachkundige Person prüft Datengrundlage, Methode und Formulierung vor folgenreichen Veröffentlichungen. Bei fehlenden Variablen, uneindeutiger Frage oder unzulässiger Kausalinterpretation stoppt der Agent und fordert Klärung an.',
      insight: 'Der Mehrwert lag nicht in mehr Darstellungen, sondern in einem kontrollierten Dialog mit den Daten. Vertrauen entstand dort, wo Antworten ihre Grundlage, Unsicherheit und sinnvolle nächste Prüfung mitlieferten.',
      impact: 'Produktteams können konkrete Fragen an die Befragungsdaten stellen, ohne für jede Fragestellung eine neue Dashboardansicht aufzubauen. Zusammenhängende Ergebnisse lassen sich als One-Pager mit Datengrundlage, Befund, Interpretation, Handlungsoption und Grenze aufbereiten.',
      role: 'Ich koordinierte die vergleichende Analyse, bewertete das Dashboard als Zwischenlösung, entschied die Struktur des agentischen Arbeitsmodells, baute Wissensbasis und Prototyp, definierte Methoden- und Eskalationsregeln und gestaltete die Ergebnisformate für Produktteams und Management.',
    },
  },
  {
    slug: 'barrierefreiheit-digitaler-arbeitsplatz',
    title: 'Barrierefreiheit am digitalen Arbeitsplatz verankern',
    teaser: 'Problem: Erfahrungen mit Barrieren lagen nicht als gemeinsame Entscheidungsgrundlage vor. · Meine Rolle: Befragung und Management-Aufbereitung verantwortet. · Wirkung: Grundlage für den ersten Management-Report und die Aufnahme in einen Designprozess.',
    tags: ['Verstehen', 'Bewerten', 'Verankern'],
    featured: true,
    // [FREIGABE PRÜFEN] EnBW, CbD-Prozess und Formulierung „erster Management-Report“. Öffentliche Fassung ist anonymisiert.
    openItems: [
      '[FREIGABE PRÜFEN: öffentliche Nennung von Organisation, Prozessbezeichnung und Ergebnis.]',
      '[BELEG FEHLT: welche konkrete Prozessänderung, Priorität oder Maßnahme daraus beschlossen wurde.]',
    ],
    openingArtifact: {
      image: '/cases/barrierefreiheit-digitaler-arbeitsplatz/sketchnote.png',
      alt: 'Sketchnote zur Verankerung von Barrierefreiheit am digitalen Arbeitsplatz: Beschäftigtenerfahrungen werden erhoben, aufbereitet und in Entscheidungen übersetzt.',
      caption: 'Erfahrungen von Beschäftigten werden zur Grundlage für inklusivere digitale Arbeitswelten.',
    },
    sections: {
      situation: 'In einem IT-Bereich eines Energieversorgers sollte digitale Barrierefreiheit nicht nur als technische Prüfliste, sondern aus der Erfahrung von Beschäftigten verstanden und in Entscheidungen verankert werden.',
      question: 'Welche Barrieren erleben Beschäftigte am digitalen Arbeitsplatz – und wie werden diese Beobachtungen so aufbereitet, dass Management und Produktteams daraus handeln können?',
      approach: 'Ich verantwortete eine Befragung zur Barrierefreiheit am digitalen Arbeitsplatz, verdichtete die Ergebnisse für eine Management-Zielgruppe und verband die Befunde mit einem bestehenden Design- und Entscheidungsprozess.',
      insight: 'Ein Zukunftsthema wird erst dann organisatorisch wirksam, wenn Erfahrungen Betroffener in eine verständliche Entscheidungsvorlage und einen bestehenden Verantwortungsprozess übersetzt werden.',
      impact: 'Die Befragung bildete die Grundlage für den ersten Management-Report zum Thema und für die Aufnahme in einen bestehenden Designprozess.',
      role: 'Ich priorisierte die Fragestellung, verantwortete die Befragung, trennte Befund und Empfehlung in der Management-Aufbereitung und unterstützte die Verankerung in einem bestehenden Prozess.',
    },
  },
  {
    slug: 'researchops',
    title: 'ResearchOps: Research in strategischen Entscheidungen verankern',
    teaser: 'Problem: Research erreichte strategische Entscheidungen nicht verlässlich. · Meine Rolle: Intake, Standards und Zusammenarbeit mit Product Leads aufgebaut. · Wirkung: 70 % Research-Abdeckung strategischer Entscheidungen.',
    tags: ['Verstehen', 'Spezifizieren', 'Messen', 'Verankern'],
    featured: true,
    metric: {
      value: '70 %',
      label: 'Research-Abdeckung strategischer Entscheidungen',
    },
    openingArtifact: {
      image: '/cases/researchops/sketchnote.png',
      alt: 'Sketchnote dazu, wie ResearchOps Research mit strategischen Produktentscheidungen verbindet, Standards aufbaut und Wirkung messbar macht.',
      caption: 'Von einzelnen Studien zu einem verlässlichen Bestandteil strategischer Produktentscheidungen.',
    },
    sections: {
      situation: 'Bei Zooplus sollte Research nicht nur einzelne Studien liefern, sondern verlässlich in strategische Produktentscheidungen einfließen. Dafür mussten Entscheidungsbedarf, Research-Planung, Erfolgskennzahlen und Zusammenarbeit mit Product Leads stärker verbunden werden.',
      question: 'Wie wird Research von einer punktuellen Leistung zu einem wiederholbaren Bestandteil strategischer Entscheidungen?',
      approach: 'Ich verband Research-Fragen mit anstehenden Produktentscheidungen, koordinierte die Planung über Themen hinweg und definierte mit Product Leads Erfolgskennzahlen. Standards und gemeinsame Arbeitsgrundlagen halfen, Research früher in den Entscheidungsprozess einzubinden und die Abdeckung sichtbar zu machen.',
      insight: 'ResearchOps schafft Wirkung nicht durch mehr Vorlagen allein. Entscheidend ist die Verbindung aus Entscheidungszeitpunkt, klarer Verantwortung, zugänglichen Erkenntnissen und einer Kennzahl, die Nutzung statt Aktivität sichtbar macht.',
      impact: 'Die Abdeckung strategischer Entscheidungen durch Research wurde auf 70 % ausgebaut. Erfolgskennzahlen wurden mit Product Leads definiert und global integriert.',
      role: 'Ich steuerte den Ausbau der Research-Abdeckung, koordinierte Prioritäten und Studien über Produktfragen hinweg, vereinbarte Erfolgskennzahlen mit Product Leads und verankerte Research als Bestandteil strategischer Entscheidungen.',
    },
  },
  {
    slug: 'kano',
    title: 'Kano und Conjoint: Optionen nach Kundennutzen priorisieren',
    teaser: 'Problem: Investitionen in ungetestete Features sollten reduziert werden. · Meine Rolle: Bewertungslogik für zwei Produktbereiche etabliert. · Wirkung: Optionen wurden in priorisierte Anforderungen übersetzt.',
    tags: ['Verstehen', 'Bewerten', 'Messen'],
    openItems: [
      '[BELEG FEHLT: welche Roadmap-Entscheidung konkret geändert oder welche Investition vermieden wurde.]',
    ],
    openingArtifact: {
      image: '/cases/kano/sketchnote.png',
      alt: 'Sketchnote zum Einsatz von Kano und Conjoint, um Kundenbedürfnisse zu verstehen, Optionen zu bewerten und Anforderungen zu priorisieren.',
      caption: 'Zwei Perspektiven – ein klareres Bild für kundenzentrierte Produktentscheidungen.',
    },
    sections: {
      situation: 'Bei ATOSS standen zwei Produktbereiche vor der Frage, welche Optionen einen wahrnehmbaren Kundennutzen schaffen und welche Investitionen ohne ausreichenden Beleg vermieden werden sollten.',
      question: 'Welche Merkmale beeinflussen die wahrgenommene Produktqualität – und wie lassen sich konkurrierende Optionen nachvollziehbar priorisieren?',
      approach: 'Ich etablierte Kano und Conjoint als komplementäre Verfahren: Kano ordnete Merkmale nach ihrer Wirkung auf Zufriedenheit ein; Conjoint unterstützte die Bewertung von Präferenzen und Zielkonflikten. Die Ergebnisse wurden in eine Entscheidungsmatrix und priorisierte Anforderungen überführt.',
      insight: 'Die Methoden ersetzen keine Produktentscheidung. Sie machen aber sichtbar, welche Erwartungen grundlegend sind, wo Differenzierung möglich ist und welche Zielkonflikte bewusst entschieden werden müssen.',
      impact: 'Für zwei Produktbereiche wurden Optionen bewertet und in priorisierte Anforderungen übersetzt. Datenbasierte Entscheidungsmatrizen sollten Investitionen in ungetestete Features reduzieren.',
      role: 'Ich entschied die Methodenkombination, koordinierte Bewertung und Synthese und übersetzte die Ergebnisse für die Priorisierung in beiden Produktbereichen.',
    },
  },
  {
    slug: 'klarheit-durch-kontext',
    title: 'ADAC Kfz-Versicherung: Klarheit im Beratungsgespräch',
    teaser: 'Problem: Ein gewachsenes Beratungstool störte Gesprächsfluss und Orientierung. · Meine Rolle: Discovery, Synthese und Priorisierung koordiniert. · Wirkung: Designprinzipien, validierter Prototyp und wiederverwendbare UI-Muster.',
    tags: ['Verstehen', 'Spezifizieren', 'Bauen', 'Messen'],
    openItems: [
      '[BELEG FEHLT: Analytics-Vergleich, Zeitraum, Definition der Conversion und Zuordnung zum Rollout. Bis dahin keine Conversion-Kennzahl veröffentlichen.]',
    ],
    openingArtifact: {
      image: '/cases/adac-kfz-versicherung/sketchnote.png',
      alt: 'Sketchnote zum Weg vom Beratungskontext über Research und Prototyping bis zur getesteten Lösung.',
      caption: 'Nicht mehr Informationen schaffen Vertrauen, sondern die richtigen Informationen zum richtigen Zeitpunkt.',
    },
    visuals: [
      {
        title: 'Discovery im Beratungskontext',
        text: 'Kontextinterviews und simulierte Kundengespräche machten Zeitdruck, doppelte Eingaben, Systemgrenzen und fehlende kontextbezogene Hinweise sichtbar.',
        image: '/cases/adac-kfz-versicherung/stakeholder-workshop.png',
        alt: 'Beraterinnen, Berater und Stakeholder betrachten gemeinsam Research-Material.',
      },
      {
        title: 'Research-Synthese',
        text: 'Grounded Theory und Affinity Mapping verdichteten Beobachtungen zu strukturellen Problemen wie inkonsistenten Begriffen, fehlender Validierung und ineffizienter Navigation.',
        image: '/cases/adac-kfz-versicherung/affinity-map.jpg',
        alt: 'Gruppierte Notizen aus der qualitativen Research-Synthese.',
      },
      {
        title: 'Gemeinsame Journey',
        text: 'Die Journey aus Sicht von Beratung und Kundschaft zeigte, wo Vertrauen entsteht, Informationsdichte überfordert und Entscheidungen ins Stocken geraten.',
        image: '/cases/adac-kfz-versicherung/customer-journey.png',
        alt: 'Customer Journey für den Ablauf einer Kfz-Versicherungsberatung.',
      },
      {
        title: 'Interaktiver Prototyp',
        text: 'Adaptive Feldlogik, kontextbezogene Hilfe und eine klare visuelle Hierarchie wurden als zusammenhängender Beratungsablauf prototypisch umgesetzt.',
        image: '/cases/adac-kfz-versicherung/prototype.png',
        alt: 'Interaktiver Prototyp für die Kfz-Versicherungsberatung.',
      },
      {
        title: 'Praxistest und Übergabe',
        text: 'RITE-Usability-Runden unterstützten schnelle Iterationen. Der validierte Prototyp wurde in wiederverwendbare UI-Muster und eine Pattern Library überführt.',
        image: '/cases/adac-kfz-versicherung/usability-test.png',
        alt: 'Material aus Usability-Tests des Beratungsablaufs.',
      },
    ],
    sections: {
      situation: 'Beraterinnen und Berater in ADAC-Geschäftsstellen nutzten ein über Jahre gewachsenes digitales Werkzeug, um Kundinnen und Kunden durch komplexe Kfz-Versicherungsoptionen zu führen. Dateneingabe, Begriffe und Navigation erschwerten den Gesprächsfluss.',
      question: 'Wie kann das Werkzeug die Beratung unterstützen, ohne Aufmerksamkeit vom Gespräch abzuziehen und Vertrauen durch unnötige Komplexität zu belasten?',
      approach: 'Kontextinterviews in simulierten Beratungssituationen, Grounded-Theory-Synthese, Journey Mapping und Stakeholder-Workshops klärten die strukturellen Probleme. Daraus entstanden Designprinzipien und ein interaktiver Prototyp, der in schnellen RITE-Runden mit Beratenden iteriert wurde.',
      insight: 'Die Reibung lag nicht in einem einzelnen Interface-Element. Sie entstand aus dem Zusammenspiel von Dateneingabe, Informationszeitpunkt, Sprache, Systemgrenzen und Gesprächsdynamik.',
      impact: 'Die Arbeit führte zu abgestimmten Designprinzipien, einem getesteten Prototyp und wiederverwendbaren UI-Mustern. Die alte Website behauptete eine verbesserte Conversion, liefert dafür aber keinen belastbaren Wert.',
      role: 'Ich koordinierte die Discovery, führte Kontextinterviews und Synthese, machte Zielkonflikte in der Journey sichtbar, moderierte die Priorisierung mit Stakeholdern und übersetzte Erkenntnisse in prüfbare Designprinzipien und Prototyp-Anforderungen.',
    },
  },
  {
    slug: 'co-creation',
    title: 'Co-Creation: gemeinsame Research-Praxis aufbauen',
    teaser: 'Problem: Research sollte nicht neben dem Team stattfinden. · Meine Rolle: gemeinsames Arbeitsmodell moderiert. · Wirkung: [BELEG FEHLT: konkrete Entscheidung oder veränderte Team-Praxis].',
    tags: ['Verstehen', 'Spezifizieren', 'Verankern'],
    draft: true,
    sections: {
      situation: 'Die alte Portfolio-Seite beschreibt einen „Team UX Research Culture Kickstart“, der Abstimmung und Ownership durch Co-Creation aufbauen sollte. Weitere Angaben zu Organisation, Beteiligten, Ausgangsmessung und Ergebnis sind in den verfügbaren Quellen nicht belegt.',
      question: 'Wie entwickelt ein Team eine gemeinsame Research-Praxis, statt Research als nachgelagerte Aufgabe einzelner Spezialistinnen und Spezialisten zu behandeln?',
      approach: 'Co-Creation eignet sich hier als Arbeitsform, um Erwartungen, Rollen, Qualitätskriterien und nächste Experimente gemeinsam zu definieren. [BELEG FEHLT: tatsächlich eingesetzte Workshop-Schritte, Teilnehmendengruppen und entstandene Artefakte.]',
      insight: 'Gemeinsame Erstellung kann Ownership fördern; ohne dokumentierte Folgeentscheidung bleibt dies jedoch eine plausible Interpretation und kein belegter Outcome.',
      impact: '[BELEG FEHLT: Welche Teamregel, welches Ritual, welche Entscheidung oder welches messbare Verhalten hat sich nach dem Workshop verändert?]',
      role: '[BELEG FEHLT: Welche Verantwortung lag bei Ihnen – Konzeption, Moderation, Entscheidung, Coaching oder Verankerung?]',
    },
  },
];

export const sectionLabels: Record<keyof CaseStudy['sections'], string> = {
  situation: 'Ausgangslage',
  question: 'Die Frage',
  approach: 'Vorgehen',
  collaboration: 'Zusammenarbeit Mensch & Agent',
  insight: 'Erkenntnis',
  impact: 'Wirkung',
  role: 'Meine Rolle',
};
```

## src/content/config.ts

```ts
// Zentrale Einstellungen.
// Neue Metadaten-Felder sind begründet: Die Rollenbezeichnung soll Website, CV,
// Suchmaschinen-Snippet und LinkedIn konsistent verbinden.

export const config = {
  name: 'Felix Bruckmeier',
  role: 'UX Manager für Human-AI Work Design',
  positioning: 'Ich gestalte Arbeitssysteme aus Menschen, Teams und KI-Agenten so, dass Entscheidungen belastbar, Übergaben klar und Wirkung messbar werden.',
  siteTitle: 'Felix Bruckmeier – UX Manager für Human-AI Work Design',
  siteDescription: 'UX Management, Research und Human-AI Work Design: von der Problemklärung über klare Mensch-Agent-Workflows und testbare Prototypen bis zum Wirkungsnachweis.',
  linkedinHeadline: 'UX Manager für Human-AI Work Design | Research, Entscheidungsqualität und verantwortungsvolle Mensch-Agent-Workflows',

  /**
   * [BELEG FEHLT] Buchungslink aus der alten Website übernehmen und Anbieter bestätigen.
   * Leer lassen, bis Nebentätigkeit, Verfügbarkeit und Datenschutzhinweise geklärt sind.
   */
  calendarUrl: '',

  /**
   * [BELEG FEHLT] Endpoint und Anbieter des Formulardienstes bestätigen.
   * Leer = E-Mail-Fallback.
   */
  formAction: '',

  email: 'felixbruckmeier@googlemail.com',
  linkedinUrl: 'https://www.linkedin.com/in/felix-bruckmeier-89a00a1bb',
  githubUrl: 'https://github.com/FelixBruckmeier/',
  responseTime: '',
};

/*
Checkliste vor Livegang
[ ] Rollenbezeichnung in useTitle, index.html, Open-Graph-Daten und CV auf config.role vereinheitlichen.
[ ] Kalender-URL und Anbieter aus der alten Seite übernehmen oder Buchungsfunktion deaktiviert lassen.
[ ] Formular-Endpoint, Anbieter, Empfänger und Aufbewahrungsdauer bestätigen.
[ ] E-Mail, LinkedIn und GitHub im Browser testen.
[ ] Verbindliche Antwortzeit festlegen oder responseTime nicht ausgeben.
[ ] Nebentätigkeit und öffentlich kommunizierbare Verfügbarkeit klären.
*/
```

## src/content/cv.ts

```ts
export type Contact = {
  label: string;
  value: string;
  href: string;
  nowrap?: boolean;
};

export type Impact = {
  title: string;
  description: string;
  outcome?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  outcomes: readonly string[];
};

export type SkillGroupData = {
  title: string;
  items: readonly string[];
};

export const cvData = {
  name: 'Felix Bruckmeier',
  metadata: {
    title: 'Felix Bruckmeier – UX Manager für Human-AI Work Design',
    description: 'Lebenslauf von Felix Bruckmeier, UX Manager für Human-AI Work Design, Research und belastbare Produktentscheidungen.',
  },
  pageOne: {
    kicker: 'Lebenslauf',
    positioning: 'UX Manager für Human-AI Work Design',
    focus: 'Research · Entscheidungsqualität · Mensch-Agent-Workflows',
    profile: 'Volkswirt und UX Manager mit rund zehn Jahren Erfahrung darin, komplexe Fragestellungen in belastbare Produktentscheidungen zu übersetzen. Ich verbinde Research, Arbeitsgestaltung und selbst gebaute agentische Prototypen – vom relevanten Problem über klare Verantwortung bis zum Wirkungsnachweis.',
    portraitAlt: 'Porträt von Felix Bruckmeier',
    contactsLabel: 'Kontakt',
    contacts: [
      {
        label: 'E-Mail',
        value: 'felixbruckmeier@googlemail.com',
        href: 'mailto:felixbruckmeier@googlemail.com',
        nowrap: true,
      },
      {
        label: 'Telefon',
        value: '+49 152 53494396',
        href: 'tel:+4915253494396',
        nowrap: true,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/felix-bruckmeier-89a00a1bb',
        href: 'https://www.linkedin.com/in/felix-bruckmeier-89a00a1bb',
      },
      {
        label: 'Website',
        value: 'felixbruckmeier.github.io',
        href: 'https://felixbruckmeier.github.io',
      },
    ] satisfies readonly Contact[],
    currentRoleLabel: 'Aktuelle Position',
    currentRole: {
      company: 'EnBW Energie Baden-Württemberg AG',
      role: 'UX Manager, C-TIA – Wertstrom Zugang & Systeme',
      period: 'Apr. 2026 – heute',
    },
    impactsHeading: 'Beiträge & Wirkung · Human-AI Work Design',
    impactsCount: '01—06',
    impacts: [
      {
        title: 'Agentische Zielgruppensegmentierung',
        description: 'Agentische Lösung zur Zielgruppenfindung entwickelt, mit der Teams Research-Teilnehmende schneller identifizieren und gezielt ansprechen.',
        outcome: 'Standard im UX-Team, genutzt von mindestens 2 Produktteams (Wertstrom Zugang & Systeme)',
      },
      {
        title: 'Teilnehmendenaktivierung',
        description: 'Ursachen rückläufiger Beteiligung an freiwilligen Formaten analysiert und Handlungsfelder zur Stabilisierung der Teilnahme abgeleitet.',
        outcome: 'Grundlage für die Maßnahmenplanung des MLX-Teams',
      },
      {
        title: 'KI-gestützte Befragungsanalyse',
        description: 'Agenten zur Auswertung zweier Befragungen zur Laptopzufriedenheit entwickelt, die Fragen zum Nutzerfeedback direkt beantworten.',
        outcome: 'Produktteams beantworten Fragen selbstständig statt über aufwendige Einzelrecherchen',
      },
      {
        title: 'Serviceorientierung',
        description: 'Agenten zur Entwicklung von Mitarbeiter-Journeys gebaut, die Teams dabei unterstützen, Maßnahmen entlang der Journey serviceorientiert auszurichten.',
        outcome: 'Wird von den Teams aktuell erprobt.',
      },
      {
        title: 'Entscheidungsgrundlagen',
        description: 'Analysen managementgerecht aufbereitet, darunter die EnMAB-Ergebnisse zur IT – mit klarer Trennung von Befund, Ursache und Empfehlung.',
        outcome: 'Richtung für die Maßnahmenplanung vorgegeben',
      },
      {
        title: 'UX- und KI-Transformation',
        description: 'UX Research für drei Produktteams koordiniert und Rollenbilder sowie Use Cases für agentische Arbeitsweisen entwickelt.',
        outcome: 'Aktuell in der Tertialzieleplanung.',
      },
    ] satisfies readonly Impact[],
    // [FREIGABE PRÜFEN] Die sechs vorstehenden EnBW-Inhalte vor externer Veröffentlichung einzeln freigeben oder anonymisieren.
    subjectMatterMeta: 'Sustainable IT · Subject Matter Expert (SME)',
    subjectMatterImpacts: [
      {
        title: 'Digitale Barrierefreiheit',
        description: 'Befragung zur Barrierefreiheit am digitalen Arbeitsplatz verantwortet.',
        outcome: 'Grundlage für den ersten Management-Report und die Aufnahme in den CbD-Prozess',
      },
      {
        title: 'Green IT & Change',
        description: 'Sensibilisierungsformate mitgestaltet und die Perspektive „KI-Nutzen vs. Ressourcenverbrauch“ eingebracht.',
      },
    ] satisfies readonly Impact[],
    // [FREIGABE PRÜFEN] EnBW-Prozessbezeichnungen und Ergebnisse vor Veröffentlichung bestätigen.
    footerPage: '01 / 02',
  },
  pageTwo: {
    kicker: 'Werdegang & Profil',
    heading: 'Berufserfahrung',
    experienceLabel: 'Berufliche Stationen',
    experience: [
      {
        company: 'ATOSS Software SE',
        role: 'Lead UX Manager',
        period: 'Jan. 2025 – Mai 2025',
        outcomes: [
          'Datenbasierte Entscheidungsmatrizen eingeführt, um Investitionen in ungetestete Features zu reduzieren.',
          'Optionen für zwei Produktbereiche bewertet und in priorisierte Anforderungen übersetzt.',
          'Kano und Conjoint zur wertorientierten Roadmap-Steuerung etabliert.',
        ],
      },
      {
        company: 'Zooplus SE',
        role: 'UX Strategy & Research Manager',
        period: 'Jul. 2022 – Dez. 2024',
        outcomes: [
          'Abdeckung strategischer Entscheidungen durch Research auf 70 % ausgebaut.',
          'Neue Navigationsstruktur validiert und Conversion-Stabilität beim Relaunch abgesichert.',
          'Erfolgskennzahlen mit Product Leads definiert und global integriert.',
        ],
      },
      {
        company: 'Swiss Life AG',
        role: 'Lead UX Manager',
        period: 'Mai 2020 – Jun. 2022',
        outcomes: [
          'Produktgremium beim Markteintritt eines neuen BU-Tarifs bis zum Launch begleitet.',
          'Human-Centered Design im SAFe-Framework und in der Backlog-Priorisierung verankert.',
        ],
      },
      {
        company: 'Kaiser X Labs GmbH (Allianz)',
        role: 'UX Researcher',
        period: 'Aug. 2018 – Apr. 2020',
        outcomes: [
          'Services eines neuen Service Hubs bewertet und in eine priorisierte Roadmap überführt.',
          'Robo-Advisor-Studie mit MaxDiff und Segmentierungsanalysen geleitet.',
        ],
      },
      {
        company: 'empiriecom GmbH & Co. KG',
        role: 'Consultant User-Centered Design',
        period: 'Feb. 2016 – Jul. 2018',
        outcomes: [
          'A/B-Tests für Fit-Prognose-Algorithmen durchgeführt.',
          'Reibungspunkte in Funnel- und Tracking-Daten in Backlog-Optimierungen übersetzt.',
        ],
      },
    ] satisfies readonly Experience[],
    aiProfile: {
      title: 'Human-AI Work Design',
      text: 'Ich gestalte nicht nur eine Oberfläche für KI. Ich kläre das Problem, verteile Aufgaben und Verantwortung zwischen Mensch und Agent, baue einen prüfbaren Prototyp und definiere Checkpoints, Eskalation und Wirkungsnachweis.',
    },
    competenciesHeading: 'Kompetenzen',
    skills: [
      {
        title: 'UX-Strategie',
        items: [
          'Wertorientierte Priorisierung',
          'KPI-Frameworks',
          'Entscheidungsvorlagen',
          'Journeys & Serviceorientierung',
        ],
      },
      {
        title: 'Human-AI Work Design',
        items: [
          'Delegationsmodelle & Checkpoints',
          'Copilot Studio · Agent Builder',
          'KI-gestützte Analyse',
          'Prototyping mit React',
        ],
      },
      {
        title: 'Transformation & Methoden',
        items: ['ResearchOps', 'SAFe · Lean UX · Design Thinking'],
      },
      {
        title: 'Kommunikation',
        items: [
          'Executive Storytelling',
          'Management-Reports',
          'Strategische Workshops',
          'Stakeholdermanagement',
        ],
      },
      {
        title: 'Research & Analytics',
        items: [
          'Conjoint · MaxDiff · Kano',
          'Befragungen · A/B-Tests',
          'Interviews · Discovery',
          'SPSS · R · Adobe Analytics',
        ],
      },
    ] satisfies readonly SkillGroupData[],
    education: {
      title: 'Ausbildung',
      degree: 'M.Sc. & B.Sc. Volkswirtschaftslehre',
      institution: 'Universität Augsburg',
      period: '2008–2014',
    },
    languages: {
      title: 'Sprachen',
      items: ['Deutsch (Muttersprache)', 'Englisch (fließend)'],
    },
    tools: {
      title: 'Tools',
      items: ['Jira · Confluence · Miro', 'VS Code · GitHub Copilot'],
    },
    footerPage: '02 / 02',
  },
  actions: {
    back: 'Zurück zur Website',
    print: 'Drucken',
  },
} as const;
```

## src/content/home.ts

```ts
// Startseite
// Leitrolle und Rollenbezeichnung: "UX Manager für Human-AI Work Design"

export const hero = {
  eyebrow: 'UX Manager für Human-AI Work Design',
  photo: '/felix-bruckmeier.png',
  headlineStart: 'Ich gestalte Arbeit mit KI so, dass ',
  headlineEmphasis: 'Entscheidungen belastbar',
  headlineEnd: ', Übergaben klar und Wirkung messbar werden.',
  lead: 'Ich unterstütze Produkt- und Führungsteams dabei, relevante Probleme zu erkennen, die Arbeit zwischen Menschen und KI-Agenten bewusst zu verteilen und Lösungen früh in der Praxis zu prüfen.',
  primaryCta: 'Vorhaben besprechen',
  secondaryCta: 'Wirkungsbelege ansehen',
  trust: [
    '70 % Research-Abdeckung strategischer Entscheidungen bei einem internationalen E-Commerce-Unternehmen',
    // [FREIGABE PRÜFEN] Anonymisierte Variante des EnBW-Belegs „Research für 3 Produktteams koordiniert“.
    'Research für 3 Produktteams koordiniert – Energieversorger, IT-Bereich',
    // [FREIGABE PRÜFEN] Anonymisierte Variante des EnBW-Belegs „Team-Standard in mindestens 2 Produktteams“.
    'Zielgruppen-Agent als Teamstandard, genutzt von mindestens 2 Produktteams – Energieversorger, IT-Bereich',
  ],
};

export const problem = {
  title: 'Der Engpass ist nicht mehr Entwicklung, sondern Problemerkenntnis und Entscheidungsqualität.',
  text: 'KI beschleunigt das Bauen. Sie beantwortet aber nicht, welches Problem relevant ist, welche Entscheidung vorbereitet werden soll und welche Verantwortung beim Menschen bleiben muss. Ohne diese Klärung entsteht schneller mehr Output – nicht automatisch mehr Wirkung.',
  questions: [
    {
      title: 'Problem klären',
      text: 'Welche Arbeit soll sich für wen verändern – und woran erkennen wir den Nutzen?',
    },
    {
      title: 'Verantwortung verteilen',
      text: 'Was darf der Agent ausführen, was nur vorbereiten und was entscheidet der Mensch?',
    },
    {
      title: 'Vertrauen gestalten',
      text: 'Wer prüft Ergebnisse, an welchen Checkpoints und wie wird bei Unsicherheit eskaliert?',
    },
    {
      title: 'Wirkung nachweisen',
      text: 'Welche Entscheidung, welcher Ablauf oder welches Ergebnis ist nachweislich besser geworden?',
    },
  ],
  transition: 'Ich verbinde Research, Arbeitsgestaltung und prototypische Umsetzung zu einem nachvollziehbaren Weg von der Problemklärung bis zum Wirkungsnachweis.',
};

export interface Offer {
  level: string;
  title: string;
  text: string;
  result: string;
  caseSlug?: string;
}

export const offers: { title: string; intro: string; items: Offer[] } = {
  title: 'Wobei ich Sie unterstütze',
  intro: 'Vier klar begrenzte Formate – vom unscharfen Problem bis zur verankerten Arbeitsweise.',
  items: [
    {
      level: 'Typische Dauer: 2–3 Wochen',
      title: 'Entscheidungs-Sprint',
      text: 'Ausgangssituation: Viele Anforderungen, aber keine gemeinsame Priorität. Vorgehen: Entscheidungsfrage klären, Nutzer- und Geschäftssignale verdichten, Optionen nach Nutzen und Risiko bewerten.',
      result: 'Ergebnis: Entscheidungsvorlage, priorisierte Optionen und offene Belege.',
      caseSlug: 'kano',
    },
    {
      level: 'Typische Dauer: 3–5 Wochen',
      title: 'Human-AI-Workflow-Sprint',
      text: 'Ausgangssituation: Ein KI-Anwendungsfall ist denkbar, Rollen, Grenzen und Übergaben sind aber unklar. Vorgehen: Arbeit analysieren, Delegationszone bestimmen, Checkpoints, Eskalation und Transparenz spezifizieren.',
      result: 'Ergebnis: Soll-Ablauf, Delegationsmodell, Prüfregeln und Evaluationsplan.',
      caseSlug: 'vom-problem-zum-agenten',
    },
    {
      level: 'Typische Dauer: 4–8 Wochen',
      title: 'Agenten-Prototyp und Praxistest',
      text: 'Ausgangssituation: Annahmen sollen vor einer größeren Umsetzung geprüft werden. Vorgehen: Wissensbasis und Agent aufbauen, mit realistischen Aufgaben erproben, Fehlerbilder dokumentieren und iterieren.',
      result: 'Ergebnis: Funktionsfähiger Prototyp, Testbefunde, Grenzen und belastbare nächste Entscheidung.',
      caseSlug: 'zielgruppen-agent',
    },
    {
      level: 'Typische Dauer: 6–12 Wochen',
      title: 'UX- und Research-System',
      text: 'Ausgangssituation: Research und UX hängen an Einzelpersonen oder kommen zu spät. Vorgehen: Entscheidungsbedarf, Rollen, Intake, Standards, Vorlagen und Lernschleifen gemeinsam mit den Teams etablieren.',
      result: 'Ergebnis: Arbeitsmodell, Standards, befähigte Teams und ein Messpunkt für Nutzung und Wirkung.',
      caseSlug: 'researchops',
    },
  ],
};

export const approach = {
  title: 'So arbeite ich',
  intro: 'Ein nachvollziehbarer Prozess, in dem jede Phase eine Entscheidung vorbereitet.',
  steps: [
    {
      title: 'Verstehen',
      question: 'Welche Arbeit soll sich für wen verändern?',
      result: 'Problem, Kontext und Beteiligte',
    },
    {
      title: 'Bewerten',
      question: 'Welche Option schafft Nutzen – und welches Risiko trägt sie?',
      result: 'Priorität und Delegationszone',
    },
    {
      title: 'Spezifizieren',
      question: 'Wer tut was, wer prüft und wann wird eskaliert?',
      result: 'Soll-Ablauf und Checkpoints',
    },
    {
      title: 'Bauen',
      question: 'Welche Annahmen lassen sich mit einem Prototyp prüfen?',
      result: 'Testbarer Ablauf oder Agent',
    },
    {
      title: 'Messen',
      question: 'Welche Entscheidung oder welches Arbeitsergebnis ist besser?',
      result: 'Wirkungs- und Vertrauenssignale',
    },
    {
      title: 'Verankern',
      question: 'Wie wird aus einem Versuch eine tragfähige Praxis?',
      result: 'Rollen, Standards und Befähigung',
    },
  ],
  note: 'Ich baue Prototypen selbst – nicht als Ersatz für Produktentwicklung, sondern als Erkenntniswerkzeug: um Annahmen früh zu prüfen und bessere Investitionsentscheidungen vorzubereiten.',
  matrix: {
    title: 'Delegationsmatrix',
    text: 'Die Delegationsform ergibt sich aus zwei Achsen: Unsicherheit der Aufgabe und Auswirkung eines Fehlers. Zusätzlich gilt eine feste Grenze: Nicht umkehrbare oder rechtlich relevante Aktionen werden nicht ohne menschliche Freigabe ausgeführt.',
    xLabel: 'Unsicherheit der Aufgabe',
    yLabel: 'Auswirkung eines Fehlers',
    cells: {
      lowLow: {
        title: 'Automatisieren und beobachten',
        text: 'Der Agent führt aus. Ein fachlich verantwortlicher Mensch prüft Stichproben und Abweichungen.',
      },
      lowHigh: {
        title: 'Vorbereiten und freigeben',
        text: 'Der Agent bereitet eine Aktion vor. Die benannte verantwortliche Person prüft und gibt frei.',
      },
      highLow: {
        title: 'Vorschlagen und auswählen',
        text: 'Der Agent zeigt Optionen, Unsicherheit und Quellen. Der Mensch wählt aus oder fordert Nacharbeit an.',
      },
      highHigh: {
        title: 'Mensch entscheidet',
        text: 'Der Agent strukturiert Informationen. Bewertung und Entscheidung bleiben beim Menschen.',
      },
    },
  },
  // Neues Feld, begründet durch den geforderten Vertrauensblock.
  // Dafür ist die beigefügte DelegationMatrix.tsx anzupassen.
  trust: {
    title: 'Vertrauen entsteht durch überprüfbare Arbeitsteilung',
    items: [
      {
        title: 'Verantwortung',
        text: 'Für jeden Agenten ist benannt, wer fachlich entscheidet und wer den Betrieb verantwortet.',
      },
      {
        title: 'Checkpoints',
        text: 'Geprüft wird vor folgenreichen Aktionen, bei niedriger Konfidenz und wenn Daten oder Regeln fehlen.',
      },
      {
        title: 'Eskalation',
        text: 'Der Agent stoppt, kennzeichnet die Unsicherheit und übergibt mit Kontext statt still weiterzuarbeiten.',
      },
      {
        title: 'Transparenz',
        text: 'Quellen, Annahmen, Änderungen und offene Grenzen bleiben für die prüfende Person nachvollziehbar.',
      },
    ],
  },
};

export const casesSection = {
  title: 'Woran Sie meine Arbeitsweise prüfen können',
  intro: 'Fallstudien mit Problem, meiner Rolle, Ergebnis und klar benannten Beleglücken.',
};

export const about = {
  title: 'Über mich',
  paragraphs: [
    'Volkswirt und UX Manager mit rund zehn Jahren Erfahrung in Research, Produktstrategie und Organisationsentwicklung – von E-Commerce und Versicherung bis zu IT und KI.',
    'Meine Haltung: Erst das relevante Problem und die Entscheidung klären, dann bauen. Zukunftsthemen wie verantwortungsvolle KI, Barrierefreiheit und Nachhaltigkeit behandle ich nicht als Zusatz, sondern als Anforderungen an gute Arbeits- und Produktgestaltung.',
  ],
  quote: 'Gute UX macht nicht nur ein System leichter bedienbar. Sie macht Verantwortung, Entscheidungen und Wirkung verständlich.',
  cvCta: 'Lebenslauf ansehen',
  photo: '',
};

export const contact = {
  title: 'Lassen Sie uns Ihr Vorhaben in 30 Minuten klären.',
  text: 'Zusammenarbeit: projektbezogen, als Sparring für Führungsteams oder eingebettet in ein Produktteam – vor Ort im Raum Augsburg/München und remote. Ich sage Ihnen im Erstgespräch offen, ob mein Profil zum Problem passt.',
  availability: '',
  primaryCta: 'Vorhaben besprechen',
  formIntro: 'Wenn Sie lieber schreiben: Beschreiben Sie Ausgangslage, gewünschte Entscheidung und Zeitrahmen.',
};
```

## src/content/legal.ts

```ts
// Keine Rechtsberatung. Vor Veröffentlichung juristisch prüfen.
// Die alten Unterseiten /imprint und /privacy waren beim Abruf nicht erreichbar;
// deshalb werden fehlende Angaben nicht rekonstruiert oder erfunden.

export const imprint = {
  title: 'Impressum',
  body: [
    'Angaben gemäß § 5 DDG',
    'Felix Bruckmeier',
    '[BELEG FEHLT: vollständige ladungsfähige Anschrift]',
    'E-Mail: felixbruckmeier@googlemail.com',
    '[BELEG FEHLT: Telefonnummer öffentlich im Impressum nennen – ja/nein]',
    '[BELEG FEHLT: Umsatzsteuer-ID oder Hinweis, dass keine vorhanden ist, falls einschlägig]',
    '[BELEG FEHLT: Verantwortlicher für journalistisch-redaktionelle Inhalte, falls § 18 Abs. 2 MStV einschlägig]',
  ],
};

export const privacy = {
  title: 'Datenschutzerklärung',
  body: [
    '1. Verantwortlicher: Felix Bruckmeier, [BELEG FEHLT: Anschrift], E-Mail: felixbruckmeier@googlemail.com.',
    '2. Hosting: Diese Website wird über GitHub Pages bereitgestellt. [BELEG FEHLT: aktuell verwendete Hosting-Konfiguration, Server-Logs, Empfänger, Rechtsgrundlage, Speicherdauer und Verweis auf die Datenschutzhinweise des Anbieters.]',
    '3. Lokale Schriften und Medien: [BELEG FEHLT: technisch bestätigen, dass Schriften lokal ausgeliefert und keine externen Medien automatisch nachgeladen werden.]',
    '4. Kontakt per E-Mail: Wenn Sie per E-Mail Kontakt aufnehmen, werden die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage verarbeitet. [BELEG FEHLT: Rechtsgrundlage, Speicherdauer und Löschkonzept juristisch bestätigen.]',
    '5. Kontaktformular: [BELEG FEHLT: Anbieter, Endpoint, übermittelte Felder, Zweck, Rechtsgrundlage, Empfänger/Auftragsverarbeitung, Speicherort, Speicherdauer, Spam-Schutz, Drittlandtransfer und Datenschutzhinweis des Anbieters.] Solange diese Angaben fehlen, bleibt formAction leer und der E-Mail-Fallback aktiv.',
    '6. Terminbuchung: [BELEG FEHLT: Kalenderanbieter, eingebettet oder externer Link, verarbeitete Daten, Zweck, Rechtsgrundlage, Auftragsverarbeitung, Cookies, Speicherdauer, Drittlandtransfer und Datenschutzhinweis des Anbieters.] Solange diese Angaben fehlen, bleibt calendarUrl leer.',
    '7. Reichweitenmessung, Cookies und externe Inhalte: [BELEG FEHLT: technisch prüfen, ob Analyse-, Tracking-, Karten-, Video-, CDN- oder Social-Media-Dienste eingebunden sind. Falls nein, ausdrücklich und wahrheitsgemäß dokumentieren.]',
    '8. Ihre Rechte: [BELEG FEHLT: vollständigen, juristisch geprüften Abschnitt zu Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch, Widerruf und Beschwerderecht ergänzen.]',
    '9. Stand: [BELEG FEHLT: Monat und Jahr der final geprüften Fassung].',
  ],
};

/*
Übernahme- und Prüfcheckliste
[ ] Bestehenden Impressumstext der alten Seite anhand einer gesicherten Quelle vergleichen.
[ ] Ladungsfähige Anschrift und optionale Telefonnummer bestätigen.
[ ] Kalender- und Formulardienst erst nach Anbieterklärung aktivieren.
[ ] Datenschutzerklärungen und AV-Verträge der Anbieter prüfen.
[ ] Technischen Netzwerkmitschnitt der veröffentlichten Seite auf Drittanfragen prüfen.
[ ] Cookie-/Consent-Bedarf anhand der tatsächlich geladenen Dienste klären.
[ ] Schlussprüfung durch eine qualifizierte Rechtsberatung.
*/
```

## src/hooks/useTitle.ts

```ts
import { useEffect } from 'react';
import { config } from '../content/config';

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${config.role}` : config.siteTitle;
  }, [title]);
}
```

## src/main.tsx

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces';
import '@fontsource-variable/fraunces/wght-italic.css';
import './styles/tokens.css';
import './styles/global.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

## src/pages/CasePage.tsx

```tsx
import { Link, useParams } from 'react-router-dom';
import { cases, sectionLabels, type CaseStudy } from '../content/cases';
import BookingButton from '../components/BookingButton';
import NotFoundPage from './NotFoundPage';
import { useTitle } from '../hooks/useTitle';

export default function CasePage() {
  const { slug } = useParams();
  const item = cases.find((c) => c.slug === slug && (import.meta.env.DEV || !c.draft));
  useTitle(item?.title);
  if (!item) return <NotFoundPage />;

  const keys = Object.keys(sectionLabels) as (keyof CaseStudy['sections'])[];
  const publishedCases = cases.filter((c) => !c.draft);
  const idx = publishedCases.indexOf(item);
  const next = idx >= 0 && publishedCases.length > 1
    ? publishedCases[(idx + 1) % publishedCases.length]
    : undefined;

  return (
    <article className="casepage">
      <header className="casepage__head">
        <div className="container container--narrow">
          <Link className="link link--back" to="/#fallstudien">← Alle Fallstudien</Link>
          {item.draft && <p className="draft-notice" role="status">Entwurf – nur in der lokalen Entwicklung sichtbar</p>}
          <p className="eyebrow eyebrow--accent">Fallstudie · {item.tags.join(' · ')}</p>
          <h1 className="casepage__title">{item.title}</h1>
          <p className="hero__lead">{item.teaser}</p>
          {item.metric && (
            <p className="casepage__metric">
              <span className="metric">{item.metric.value}</span>
              <span className="metric__label">{item.metric.label}</span>
            </p>
          )}
        </div>
      </header>
      {item.openingArtifact && (
        <figure className="casepage__artifact container container--narrow">
          <img src={item.openingArtifact.image} alt={item.openingArtifact.alt} />
          <figcaption>{item.openingArtifact.caption}</figcaption>
        </figure>
      )}
      <div className="container container--narrow casepage__body">
        {keys.map((k) =>
          item.sections[k] ? (
            <section key={k} className="casepage__section">
              <h2>{sectionLabels[k]}</h2>
              <p>{item.sections[k]}</p>
              {k === 'approach' && item.visuals && (
                <div className="casepage__visuals">
                  {item.visuals.map((visual) => (
                    <figure className="casepage__visual" key={visual.title}>
                      <img src={visual.image} alt={visual.alt} loading="lazy" />
                      <figcaption>
                        <h3>{visual.title}</h3>
                        <p>{visual.text}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </section>
          ) : null,
        )}
        <aside className="casepage__cta">
          <h2>Ähnliche Fragestellung?</h2>
          <p>Lassen Sie uns 30 Minuten darüber sprechen.</p>
          <BookingButton label="Erstgespräch buchen" />
        </aside>
        {next && (
          <p className="casepage__next">
            Nächste Fallstudie: <Link to={`/fallstudien/${next.slug}`}>{next.title} →</Link>
          </p>
        )}
        {import.meta.env.DEV && item.openItems && item.openItems.length > 0 && (
          <aside className="casepage__open-items" aria-labelledby="open-items-title">
            <h2 id="open-items-title">Offene Belege und Freigaben</h2>
            <ul>
              {item.openItems.map((openItem) => <li key={openItem}>{openItem}</li>)}
            </ul>
          </aside>
        )}
      </div>
    </article>
  );
}
```

## src/pages/CvPage.tsx

```tsx
import CV from '../components/cv/CV';
import { useTitle } from '../hooks/useTitle';

export default function CvPage() {
  useTitle('Lebenslauf');
  return <CV />;
}
```

## src/pages/HomePage.tsx

```tsx
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import BookingButton from '../components/BookingButton';
import DelegationMatrix from '../components/DelegationMatrix';
import CaseTeaser from '../components/CaseTeaser';
import ContactForm from '../components/ContactForm';
import { hero, problem, offers, approach, casesSection, about, contact } from '../content/home';
import { cases } from '../content/cases';
import { config } from '../content/config';
import { useTitle } from '../hooks/useTitle';

export default function HomePage() {
  useTitle();
  const visibleCases = cases.filter((c) => import.meta.env.DEV || !c.draft);
  const featured = visibleCases.filter((c) => c.featured);
  const others = visibleCases.filter((c) => !c.featured);

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__main">
            <div className="hero__content">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 id="hero-title" className="hero__title">
                {hero.headlineStart}<em>{hero.headlineEmphasis}</em>{hero.headlineEnd}
              </h1>
              <p className="hero__lead">{hero.lead}</p>
              <div className="hero__ctas">
                <BookingButton label={hero.primaryCta} />
                <Link className="link" to="/#fallstudien">{hero.secondaryCta} ↓</Link>
              </div>
            </div>
            <img
              className="hero__photo"
              src={hero.photo}
              alt={`Porträt von ${config.name}`}
              width={320}
              height={462}
            />
          </div>
          <ul className="hero__trust">
            {hero.trust.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      {/* Problem */}
      <Section id="problem" title={problem.title} intro={problem.text}>
        <ol className="questions">
          {problem.questions.map((q) => (
            <li key={q.title} className="card">
              <h3>{q.title}</h3>
              <p>{q.text}</p>
            </li>
          ))}
        </ol>
        <p className="section__outro">{problem.transition}</p>
      </Section>

      {/* Angebote */}
      <Section id="angebote" title={offers.title} intro={offers.intro} tone="raised">
        <ul className="offers">
          {offers.items.map((o) => {
            const linked = o.caseSlug ? visibleCases.find((c) => c.slug === o.caseSlug) : undefined;
            return (
              <li key={o.title} className="card offer">
                <p className="eyebrow eyebrow--accent">{o.level}</p>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <p className="offer__result"><strong>Ergebnis:</strong> {o.result}</p>
                <div className="offer__links">
                  {linked && <Link to={`/fallstudien/${linked.slug}`}>Passende Fallstudie →</Link>}
                  <Link to="/#kontakt">Anfragen</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Vorgehen */}
      <Section id="vorgehen" title={approach.title} intro={approach.intro}>
        <ol className="steps">
          {approach.steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__no" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.question}</p>
              <p className="step__result">{s.result}</p>
            </li>
          ))}
        </ol>
        <p className="section__outro">{approach.note}</p>
        <DelegationMatrix />
      </Section>

      {/* Fallstudien */}
      <Section id="fallstudien" title={casesSection.title} intro={casesSection.intro} tone="raised">
        <div className="cases">
          {featured.map((c) => <CaseTeaser key={c.slug} item={c} />)}
          <div className="cases__grid">
            {others.map((c) => <CaseTeaser key={c.slug} item={c} />)}
          </div>
        </div>
      </Section>

      {/* Über mich */}
      <Section id="ueber-mich" title={about.title}>
        <div className={`about ${about.photo ? 'about--photo' : ''}`}>
          {about.photo && <img className="about__photo" src={about.photo} alt={`Porträt von ${config.name}`} width={320} height={400} />}
          <div>
            {about.paragraphs.map((p) => <p key={p.slice(0, 20)} className="about__text">{p}</p>)}
            <blockquote className="quote" lang="en">
              <p>„{about.quote}“</p>
            </blockquote>
            <Link className="btn" to="/lebenslauf">{about.cvCta}</Link>
          </div>
        </div>
      </Section>

      {/* Kontakt */}
      <section id="kontakt" className="section section--contact" aria-labelledby="kontakt-title">
        <div className="container contact">
          <div>
            <h2 id="kontakt-title" className="section__title">{contact.title}</h2>
            <p className="section__intro">{contact.text}</p>
            <BookingButton label={contact.primaryCta} />
            {config.responseTime.trim() && (
              <p className="contact__response">Ich antworte in der Regel innerhalb von {config.responseTime}.</p>
            )}
            {contact.availability.trim() && (
              <p className="contact__availability">{contact.availability}</p>
            )}
          </div>
          <div>
            <p className="contact__formintro">{contact.formIntro}</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
```

## src/pages/LegalPage.tsx

```tsx
import { useTitle } from '../hooks/useTitle';

export default function LegalPage({ content }: { content: { title: string; body: string[] } }) {
  useTitle(content.title);
  return (
    <div className="container container--narrow legal">
      <h1 className="casepage__title">{content.title}</h1>
      {content.body.map((p) => <p key={p}>{p}</p>)}
    </div>
  );
}
```

## src/pages/NotFoundPage.tsx

```tsx
import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export default function NotFoundPage() {
  useTitle('Seite nicht gefunden');
  return (
    <div className="container container--narrow legal">
      <h1 className="casepage__title">Seite nicht gefunden</h1>
      <p>Diese Seite gibt es nicht (mehr).</p>
      <Link className="link" to="/">Zur Startseite</Link>
    </div>
  );
}
```

## src/styles/cv.css

```css
.cv-document {
  --cv-paper: var(--color-surface);
  --cv-text: var(--color-ink);
  --cv-muted: var(--color-muted);
  --cv-line: var(--color-line);
  --cv-blue: var(--color-accent);
  --cv-teal: var(--color-accent);
  --cv-blue-tint: var(--color-bg);
  --cv-teal-tint: var(--color-raised);
  --cv-accent: var(--color-accent);
  --cv-accent-soft: var(--color-accent-soft);
  --cv-card: var(--color-raised);
  padding: 0.25rem 0 2rem;
  color: var(--cv-text);
  font-family: var(--font-sans);
  font-size: 9pt;
  line-height: 1.35;
}

.cv-document *,
.cv-document *::before,
.cv-document *::after {
  box-sizing: border-box;
}

.cv-document h1,
.cv-document h2,
.cv-document h3 {
  font-family: var(--font-serif);
  font-weight: 400;
}

.cv-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: min(210mm, calc(100% - 2rem));
  margin: 0 auto 0.75rem;
  font-size: 0.9rem;
}

.cv-actions a,
.cv-actions button,
.cv-contacts a {
  color: inherit;
}

.cv-actions a:focus-visible,
.cv-actions button:focus-visible,
.cv-contacts a:focus-visible {
  outline: 3px solid var(--cv-blue);
  outline-offset: 3px;
}

.cv-actions button {
  padding: 0.45rem 0.8rem;
  border: 1px solid var(--cv-line);
  border-radius: 6px;
  background: transparent;
  color: var(--cv-text);
  font: inherit;
  cursor: pointer;
}

.cv-actions a {
  text-decoration-color: var(--cv-line);
  text-underline-offset: 3px;
}

.cv-actions a:hover,
.cv-contacts a:hover {
  color: var(--cv-blue);
}

.cv-actions button:hover {
  border-color: var(--cv-blue);
  color: var(--cv-blue);
}

.cv-page {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 210mm;
  height: 297mm;
  padding: 14mm 15mm;
  margin: 12mm auto;
  overflow: hidden;
  background: var(--cv-paper);
  box-shadow: 0 0.3rem 1.25rem color-mix(in srgb, var(--color-ink) 8%, transparent);
  break-after: page;
  page-break-after: always;
}

.cv-page:last-child {
  break-after: auto;
  page-break-after: auto;
}

.cv-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 38mm;
  gap: 9mm;
  align-items: start;
}

.cv-eyebrow,
.cv-section-label {
  color: var(--cv-muted);
  font-size: 7.5pt;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.2;
  text-transform: uppercase;
}

.cv-header h1 {
  margin: 2.3mm 0 1.5mm;
  color: var(--cv-text);
  font-family: var(--font-serif);
  font-size: 30pt;
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1;
}

.cv-positioning {
  color: var(--cv-blue);
  font-size: 14pt;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.cv-focus {
  margin-top: 1.5mm;
  color: var(--cv-muted);
  font-size: 9pt;
  font-weight: 500;
}

.cv-profile {
  max-width: 112mm;
  margin-top: 4mm;
  font-size: 9pt;
  line-height: 1.42;
}

.cv-portrait {
  width: 38mm;
  height: 50mm;
  border: 1px solid var(--cv-line);
  border-radius: 6px;
  object-fit: cover;
  object-position: center 28%;
}

.cv-contacts {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.7fr) minmax(0, 1.65fr) minmax(0, 1fr);
  gap: 2.5mm 4mm;
  margin: 5mm 0 0;
  padding: 3mm 0;
  border-top: 1px solid var(--cv-line);
  border-bottom: 1px solid var(--cv-line);
  font-style: normal;
}

.cv-contact {
  min-width: 0;
}

.cv-contact span {
  display: block;
  margin-bottom: 0.5mm;
  color: var(--cv-muted);
  font-size: 7pt;
  font-weight: 650;
  text-transform: uppercase;
}

.cv-contact a {
  overflow-wrap: anywhere;
  font-size: 8.5pt;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 2px;
}

.cv-current-role {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4mm;
  margin-top: 5mm;
  padding: 3mm 4mm;
  border-left: 2px solid var(--cv-blue);
  border-radius: 0 6px 6px 0;
  background: var(--cv-teal-tint);
}

.cv-current-role h2 {
  margin: 1mm 0 0.5mm;
  font-size: 11pt;
  font-weight: 500;
  line-height: 1.2;
}

.cv-current-role p:not(.cv-section-label) {
  font-size: 8.5pt;
}

.cv-current-role time {
  flex: 0 0 auto;
  color: var(--cv-muted);
  font-size: 8pt;
  font-weight: 600;
}

.cv-contributions {
  margin-top: 5mm;
}

.cv-section-heading {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2.5mm;
  padding-bottom: 1.5mm;
  border-bottom: 1px solid var(--cv-line);
}

.cv-section-heading h2,
.cv-page-heading h2 {
  font-size: 15pt;
  font-weight: 400;
  letter-spacing: -0.015em;
  line-height: 1.1;
}

.cv-section-heading span {
  color: var(--cv-muted);
  font-size: 7pt;
  letter-spacing: 0.08em;
}

.cv-contribution-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.2mm;
}

.cv-contribution {
  min-width: 0;
  padding: 2.5mm 3mm;
  border: 1px solid var(--cv-line);
  border-radius: 6px;
  background: var(--cv-blue-tint);
}

.cv-number {
  color: var(--cv-blue);
  font-size: 7pt;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.cv-contribution h3,
.cv-additional h3 {
  margin-top: 0.8mm;
  font-size: 9pt;
  font-weight: 500;
  line-height: 1.2;
}

.cv-contribution p,
.cv-additional p {
  margin-top: 1mm;
  font-size: 8.5pt;
  line-height: 1.32;
}

.cv-sustainable {
  margin-top: 4mm;
}

.cv-additional-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4mm;
}

.cv-additional {
  padding: 2.5mm 3mm;
  border-left: 1.5px solid var(--cv-blue);
  border-radius: 0 6px 6px 0;
  background: var(--cv-teal-tint);
}

.cv-page-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 2mm;
  border-top: 1px solid var(--cv-line);
  color: var(--cv-muted);
  font-size: 7pt;
  letter-spacing: 0.05em;
}

.cv-page-heading {
  padding-bottom: 3mm;
  border-bottom: 1px solid var(--cv-line);
}

.cv-page-heading h2 {
  margin-top: 2mm;
  font-size: 23pt;
  letter-spacing: -0.02em;
}

.cv-body-grid {
  display: grid;
  grid-template-columns: minmax(0, 68fr) minmax(0, 32fr);
  gap: 8mm;
  min-height: 0;
  margin-top: 5mm;
}

.cv-experience-entry {
  padding: 0 0 3.5mm;
  margin-bottom: 4mm;
  border-bottom: 1px solid var(--cv-line);
  break-inside: avoid;
  page-break-inside: avoid;
}

.cv-experience-entry:last-child {
  margin-bottom: 0;
  border-bottom: 0;
}

.cv-experience-entry header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2mm;
}

.cv-experience-entry h3 {
  font-size: 11pt;
  font-weight: 500;
  line-height: 1.2;
}

.cv-experience-entry header p {
  margin-top: 0.5mm;
  color: var(--cv-blue);
  font-size: 9pt;
  font-weight: 500;
}

.cv-experience-entry time {
  flex: 0 0 auto;
  color: var(--cv-muted);
  font-size: 8.5pt;
  text-align: right;
}

.cv-experience-entry ul,
.cv-competency-group ul {
  padding-left: 3.5mm;
  margin: 1.5mm 0 0;
}

.cv-experience-entry li {
  padding-left: 0.5mm;
  margin-top: 1mm;
  font-size: 9.5pt;
  line-height: 1.34;
}

.cv-sidebar {
  padding-left: 5mm;
  border-left: 1px solid var(--cv-line);
}

.cv-sidebar > h2 {
  padding-bottom: 2mm;
  border-bottom: 1px solid var(--cv-line);
  font-size: 14pt;
  font-weight: 400;
}

.cv-competency-group,
.cv-sidebar-block {
  margin-top: 4mm;
  break-inside: avoid;
  page-break-inside: avoid;
}

.cv-competency-group h3,
.cv-sidebar-block h3 {
  color: var(--cv-blue);
  font-size: 8.5pt;
  font-weight: 500;
}

.cv-competency-group li,
.cv-sidebar-block p {
  margin-top: 1mm;
  font-size: 9pt;
  line-height: 1.32;
}

.cv-sidebar-block {
  padding-top: 2.5mm;
  border-top: 1px solid var(--cv-line);
}

@media (max-width: 900px) {
  .cv-document {
    padding-top: 0;
  }

  .cv-actions {
    width: calc(100% - 2rem);
  }

  .cv-page {
    width: 100%;
    height: auto;
    min-height: 0;
    padding: clamp(1.25rem, 5vw, 2.5rem);
    margin: 0 auto 1rem;
    overflow: visible;
  }

  .cv-header,
  .cv-contacts,
  .cv-contribution-grid,
  .cv-additional-grid,
  .cv-body-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .cv-header {
    gap: 1.25rem;
  }

  .cv-profile {
    max-width: none;
  }

  .cv-portrait {
    width: 10rem;
    height: 14rem;
  }

  .cv-contact a {
    overflow-wrap: anywhere;
  }

  .cv-sidebar {
    padding: 1rem 0 0;
    border-top: 1px solid var(--cv-line);
    border-left: 0;
  }
}

@media print {
  @page cv {
    size: A4 portrait;
    margin: 0;
  }

  body:has(.cv-document) .header,
  body:has(.cv-document) .footer,
  body:has(.cv-document) .skip-link {
    display: none;
  }

  .cv-document {
    padding: 0;
    color: var(--cv-text);
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  .cv-actions {
    display: none;
  }

  .cv-page {
    page: cv;
    width: 210mm;
    height: 297mm;
    padding: 14mm 15mm;
    margin: 0;
    overflow: hidden;
    box-shadow: none;
  }

  .cv-header {
    grid-template-columns: minmax(0, 1fr) 38mm;
    gap: 9mm;
  }

  .cv-contacts {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.7fr) minmax(0, 1.65fr) minmax(0, 1fr);
  }

  .cv-contribution-grid,
  .cv-additional-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cv-body-grid {
    grid-template-columns: minmax(0, 68fr) minmax(0, 32fr);
    gap: 8mm;
  }

  .cv-profile {
    max-width: 112mm;
  }

  .cv-portrait {
    width: 38mm;
    height: 50mm;
  }

  .cv-sidebar {
    padding: 0 0 0 5mm;
    border-top: 0;
    border-left: 1px solid var(--cv-line);
  }

  .cv-page:last-child {
    break-after: auto;
    page-break-after: auto;
  }
}

.cv-document {
  hyphens: manual;
}

.cv-page {
  padding-top: 12mm;
  padding-bottom: 12mm;
  gap: 0;
}

.cv-profile {
  max-width: 125mm;
  margin-top: 3mm;
  line-height: 1.32;
}

.cv-contacts {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.5mm 8mm;
  margin-top: 3.5mm;
  padding: 2.5mm 0;
}

.cv-contact span {
  letter-spacing: 0.08em;
}

.cv-contact-value {
  display: inline-block;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.cv-contact-value--nowrap {
  white-space: nowrap;
  overflow-wrap: normal;
}

.cv-current-role {
  margin-top: 3.5mm;
}

.cv-impact-section {
  margin-top: 4mm;
}

.cv-impact-section .cv-section-heading {
  margin-bottom: 3mm;
}

.cv-section-heading h2 {
  font-size: 14pt;
}

.cv-impact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3mm;
}

.cv-impact-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: 2.5mm 3mm;
  border: 1px solid var(--cv-line);
  border-radius: 6px;
  background: var(--cv-paper);
  break-inside: avoid;
  page-break-inside: avoid;
}

.cv-impact-card h3 {
  margin-top: 0.8mm;
  font-size: 9.5pt;
  font-weight: 500;
  line-height: 1.18;
}

.cv-impact-description {
  margin-top: 1mm;
  font-size: 8.2pt;
  line-height: 1.3;
}

.cv-impact-outcome {
  margin-top: auto;
  padding-top: 1.5mm;
  border-top: 1px solid var(--cv-line);
  color: var(--cv-accent);
  font-size: 7.8pt;
  font-weight: 500;
  line-height: 1.25;
}

.cv-impact-outcome span {
  font-size: 9pt;
}

.cv-sme-section {
  margin-top: 4mm;
  margin-bottom: 2mm;
}

.cv-sme-heading {
  margin-bottom: 2mm;
}

.cv-sme-heading h2 {
  font-size: 12pt;
}

.cv-sme-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3mm;
}

.cv-impact-card--sme {
  padding: 2.5mm 3mm;
  border: 0;
  border-left: 1.5px solid var(--cv-accent);
  border-radius: 0 6px 6px 0;
  background: var(--cv-card);
}

.cv-impact-card--sme .cv-impact-outcome {
  border-color: var(--color-line);
}

.cv-body-grid {
  flex: 1;
  grid-template-columns: minmax(0, 68fr) minmax(0, 32fr);
  gap: 8mm;
  margin-bottom: 3mm;
}

.cv-experience-list {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.cv-experience-entry {
  break-inside: avoid;
  page-break-inside: avoid;
}

.cv-experience-entry ul,
.cv-competency-group ul {
  padding-left: 0;
  list-style: none;
}

.cv-experience-entry li {
  position: relative;
  padding-left: 3mm;
}

.cv-experience-entry li::before {
  position: absolute;
  top: 0.52em;
  left: 0;
  width: 1.2mm;
  height: 1.2mm;
  border-radius: 50%;
  background: var(--cv-accent);
  content: '';
}

.cv-ai-profile {
  margin-top: auto;
  padding: 3mm;
  border: 1px solid var(--cv-line);
  border-radius: 6px;
  background: var(--cv-card);
  break-inside: avoid;
  page-break-inside: avoid;
}

.cv-ai-profile h3 {
  margin-bottom: 1.5mm;
  color: var(--cv-accent);
  font-size: 11pt;
}

.cv-ai-profile p {
  font-size: 9pt;
  line-height: 1.4;
}

.cv-sidebar {
  min-width: 0;
}

.cv-competency-group {
  margin-top: 2.5mm;
}

.cv-competency-group li,
.cv-sidebar-block p {
  margin-top: 0.5mm;
  font-size: 8.2pt;
  line-height: 1.25;
}

.cv-sidebar-block {
  margin-top: 2.5mm;
  padding-top: 1.5mm;
}

.cv-sidebar-block h3 {
  margin-bottom: 0.5mm;
}

@media (max-width: 900px) {
  .cv-contacts,
  .cv-impact-grid,
  .cv-sme-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cv-body-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .cv-experience-list {
    display: block;
  }

  .cv-ai-profile {
    margin-top: 4mm;
  }
}

@media (max-width: 520px) {
  .cv-contacts,
  .cv-impact-grid,
  .cv-sme-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .cv-contact-value--nowrap {
    white-space: nowrap;
  }
}

@media print {
  .cv-document {
    padding: 0;
    color: var(--cv-text);
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  .cv-page {
    width: 210mm;
    height: 297mm;
    padding: 12mm 14mm;
    margin: 0;
    overflow: hidden;
    box-shadow: none;
  }

  .cv-page-one {
    break-after: page;
    page-break-after: always;
  }

  .cv-page-two {
    break-after: auto;
    page-break-after: auto;
  }

  .cv-header {
    grid-template-columns: minmax(0, 1fr) 38mm;
    gap: 9mm;
  }

  .cv-contacts,
  .cv-impact-grid,
  .cv-sme-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cv-body-grid {
    grid-template-columns: minmax(0, 68fr) minmax(0, 32fr);
    gap: 8mm;
  }

  .cv-experience-list {
    display: flex;
  }

  .cv-ai-profile {
    margin-top: auto;
  }

  .cv-sidebar {
    padding: 0 0 0 5mm;
    border-top: 0;
    border-left: 1px solid var(--cv-line);
  }
}
```

## src/styles/global.css

```css
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 5rem; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition: none !important; animation: none !important; }
}
body {
  font-family: var(--font-sans);
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--color-ink);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; height: auto; display: block; }
a { color: inherit; }
ul, ol { padding: 0; list-style: none; }
h1, h2, h3 { line-height: 1.15; }
#main:focus { outline: none; }

:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; border-radius: 2px; }

.visually-hidden {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
}
.skip-link {
  position: absolute; left: var(--space-2); top: -4rem; z-index: 100;
  background: var(--color-ink); color: #fff; padding: var(--space-1) var(--space-2); border-radius: var(--radius);
}
.skip-link:focus { top: var(--space-2); }

.container { width: 100%; max-width: var(--container); margin: 0 auto; padding: 0 var(--space-4); }
.container--narrow { max-width: 48rem; }
@media (max-width: 40rem) { .container { padding: 0 var(--space-3); } }

/* ---------- Typo-Bausteine ---------- */
.eyebrow { font-size: var(--fs-xs); letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-muted); margin-bottom: var(--space-2); font-weight: 500; }
.eyebrow--accent { color: var(--color-accent); }
.link { font-size: var(--fs-small); font-weight: 500; text-decoration: none; border-bottom: 1px solid currentColor; padding-bottom: 1px; }
.link:hover { color: var(--color-accent); }
.link--back { display: inline-block; margin-bottom: var(--space-4); }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--color-accent); color: #fff; text-decoration: none;
  font: 500 var(--fs-small)/1 var(--font-sans);
  padding: 0.9rem 1.4rem; border-radius: 6px; border: 2px solid var(--color-accent);
  cursor: pointer; transition: background 0.15s;
}
.btn:hover { background: var(--color-accent-hover); border-color: var(--color-accent-hover); }
.btn--small { padding: 0.6rem 1rem; }
.btn--secondary { background: transparent; color: var(--color-ink); border-color: var(--color-ink); }
.btn--secondary:hover { background: var(--color-ink); color: #fff; border-color: var(--color-ink); }

/* ---------- Header ---------- */
.header { position: sticky; top: 0; z-index: 50; background: color-mix(in srgb, var(--color-bg) 92%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--color-line); }
.header__inner { display: flex; align-items: center; justify-content: space-between; min-height: 4.25rem; gap: var(--space-3); }
.header__brand { font-weight: 600; text-decoration: none; font-size: var(--fs-small); }
.header__nav { display: flex; align-items: center; gap: var(--space-4); }
.header__nav ul { display: flex; gap: var(--space-3); }
.header__nav a:not(.btn) { text-decoration: none; font-size: var(--fs-small); color: var(--color-muted); }
.header__nav a:not(.btn):hover { color: var(--color-ink); }
.header__toggle { display: none; }
@media (max-width: 56rem) {
  .header__toggle { display: block; background: none; border: 1px solid var(--color-line); border-radius: 6px; padding: 0.5rem 0.9rem; font: inherit; font-size: var(--fs-small); cursor: pointer; color: var(--color-ink); }
  .header__nav { display: none; position: absolute; left: 0; right: 0; top: 100%; flex-direction: column; align-items: stretch; gap: var(--space-3); padding: var(--space-3) var(--space-4) var(--space-4); background: var(--color-bg); border-bottom: 1px solid var(--color-line); }
  .header__nav.is-open { display: flex; }
  .header__nav ul { flex-direction: column; gap: var(--space-2); }
  .header__nav a:not(.btn) { font-size: var(--fs-body); color: var(--color-ink); }
}

/* ---------- Hero ---------- */
.hero { padding: var(--space-7) 0 var(--space-6); }
.hero__main { display: grid; grid-template-columns: minmax(0, 1fr) minmax(14rem, 20rem); gap: var(--space-5); align-items: center; }
.hero__title { font-family: var(--font-serif); font-weight: 400; font-size: var(--fs-h1); letter-spacing: -0.015em; max-width: 20ch; margin-bottom: var(--space-4); }
.hero__title em { color: var(--color-accent); font-style: italic; }
.hero__lead { font-size: 1.1875rem; color: var(--color-muted); max-width: var(--measure); margin-bottom: var(--space-4); }
.hero__ctas { display: flex; flex-wrap: wrap; gap: var(--space-4); align-items: center; }
.hero__photo { display: block; width: 100%; height: auto; border-radius: var(--radius); }
.hero__trust { display: flex; flex-wrap: wrap; gap: var(--space-1) var(--space-4); margin-top: var(--space-5); padding-top: var(--space-3); border-top: 1px solid var(--color-line); font-size: var(--fs-small); color: var(--color-muted); }
.hero__trust li::before { content: '— '; color: var(--color-accent); }

/* ---------- Sections ---------- */
.section { padding: var(--space-6) 0; border-top: 1px solid var(--color-line); }
.section--raised { background: var(--color-raised); }
.section__title { font-family: var(--font-serif); font-weight: 400; font-size: var(--fs-h2); letter-spacing: -0.01em; margin-bottom: var(--space-2); max-width: 26ch; }
.section__intro { color: var(--color-muted); max-width: var(--measure); margin-bottom: var(--space-5); }
.section__outro { max-width: var(--measure); margin-top: var(--space-4); font-style: italic; color: var(--color-muted); }

.card { background: var(--color-surface); border: 1px solid var(--color-line); border-radius: var(--radius); padding: var(--space-3); }
.card h3 { font-size: var(--fs-h3); font-weight: 600; margin-bottom: var(--space-1); }
.card p { font-size: var(--fs-small); color: var(--color-muted); }

.questions { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-3); counter-reset: q; }
.questions li { counter-increment: q; }
.questions li::before { content: counter(q, decimal-leading-zero); display: block; font-family: var(--font-serif); color: var(--color-accent); font-size: 1.5rem; margin-bottom: var(--space-1); }

.offers { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); }
.offer { display: flex; flex-direction: column; padding: var(--space-4); }
.offer h3 { font-family: var(--font-serif); font-weight: 400; font-size: 1.5rem; }
.offer p { font-size: 1rem; }
.offer__result { margin-top: var(--space-2); padding-top: var(--space-2); border-top: 1px solid var(--color-line); }
.offer__result strong { color: var(--color-ink); font-weight: 600; }
.offer__links { margin-top: auto; padding-top: var(--space-3); display: flex; gap: var(--space-3); font-size: var(--fs-small); font-weight: 500; }
.offer__links a { color: var(--color-accent); text-decoration: none; }
.offer__links a:hover { text-decoration: underline; }

.steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-4) 0; }
.step { padding: 0 var(--space-3); border-left: 1px solid var(--color-line); }
.step:first-child { padding-left: 0; border-left: none; }
.step:nth-child(3n + 1) { padding-left: 0; border-left: none; }
.step__no { font-family: var(--font-serif); font-size: 2.25rem; color: var(--color-accent); line-height: 1; }
.step h3 { font-size: var(--fs-h3); font-weight: 600; margin: var(--space-1) 0; }
.step p { font-size: var(--fs-small); color: var(--color-muted); }
.step__result { margin-top: var(--space-1); color: var(--color-ink) !important; font-weight: 500; }

/* ---------- Delegationsmatrix ---------- */
.matrix { display: grid; grid-template-columns: 1fr 1.3fr; gap: var(--space-5); align-items: center; margin-top: var(--space-6); padding: var(--space-5); background: var(--color-surface); border: 1px solid var(--color-line); border-radius: var(--radius); }
.matrix__text h3 { font-family: var(--font-serif); font-weight: 400; font-size: 1.75rem; margin-bottom: var(--space-2); }
.matrix__text p { color: var(--color-muted); }
.matrix__chart { display: grid; grid-template-columns: auto minmax(0, 1fr); min-width: 0; grid-template-rows: 1fr auto; gap: var(--space-1); }
.trust-block { margin-top: var(--space-5); padding-top: var(--space-4); border-top: 1px solid var(--color-line); }
.trust-block__title { font-family: var(--font-serif); font-weight: 400; font-size: 1.5rem; margin-bottom: var(--space-3); }
.trust-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--space-3); }
.trust-grid article { padding-left: var(--space-2); border-left: 1px solid var(--color-line); }
.trust-grid h4 { font-size: var(--fs-small); margin-bottom: var(--space-1); }
.trust-grid p { color: var(--color-muted); font-size: var(--fs-small); }
.draft-notice { margin-bottom: var(--space-2); padding: var(--space-2); border: 1px solid var(--color-accent); border-radius: var(--radius); color: var(--color-ink); font-size: var(--fs-small); font-weight: 600; }
.matrix__y { writing-mode: vertical-rl; transform: rotate(180deg); font-size: var(--fs-xs); color: var(--color-muted); text-align: left; }
.matrix__x { grid-column: 2; font-size: var(--fs-xs); color: var(--color-muted); }
.matrix__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
.cell { padding: var(--space-3) var(--space-2); border-radius: 6px; display: flex; flex-direction: column; gap: 4px; min-height: 8rem; }
.cell strong { font-size: 1rem; hyphens: auto; overflow-wrap: anywhere; }
.cell span { font-size: var(--fs-xs); line-height: 1.45; }
.cell--light { background: var(--color-raised); color: var(--color-ink); }
.cell--mid { background: var(--color-accent-soft); color: var(--color-ink); }
.cell--strong { background: var(--color-ink); color: #fff; }

/* ---------- Fallstudien ---------- */
.cases { display: grid; gap: var(--space-3); }
.cases__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); }
.case { position: relative; display: grid; grid-template-columns: 1fr auto; gap: var(--space-4); background: var(--color-surface); border: 1px solid var(--color-line); border-radius: var(--radius); padding: var(--space-4); transition: border-color 0.15s, transform 0.15s; }
.case:hover { border-color: var(--color-accent); }
.case:focus-within { border-color: var(--color-accent); }
.case__title { font-family: var(--font-serif); font-weight: 400; font-size: 1.5rem; margin-bottom: var(--space-1); }
.case--featured { padding: var(--space-5); }
.case--featured .case__title { font-size: 2rem; }
.case__title a { text-decoration: none; }
.case__title a:focus-visible { outline: none; }
.stretched::after { content: ''; position: absolute; inset: 0; border-radius: var(--radius); }
.case__teaser { color: var(--color-muted); font-size: 1rem; max-width: 52ch; }
.case__more { display: inline-block; margin-top: var(--space-2); font-size: var(--fs-small); color: var(--color-accent); font-weight: 500; }
.case__metric { display: flex; flex-direction: column; align-items: flex-end; justify-content: center; text-align: right; min-width: 8rem; }
.metric { font-family: var(--font-serif); font-size: var(--fs-metric); color: var(--color-accent); line-height: 1; }
.metric__label { font-size: var(--fs-xs); color: var(--color-muted); margin-top: var(--space-1); max-width: 16ch; }

/* ---------- Über mich ---------- */
.about { max-width: var(--measure); }
.about--photo { display: grid; grid-template-columns: 16rem 1fr; gap: var(--space-5); max-width: none; align-items: start; }
.about__photo { border-radius: var(--radius); }
.about__text { margin-bottom: var(--space-3); }
.quote { margin: var(--space-5) 0; padding-left: var(--space-3); border-left: 2px solid var(--color-accent); }
.quote p { font-family: var(--font-serif); font-style: italic; font-size: clamp(1.375rem, 2vw + 0.75rem, 1.75rem); line-height: 1.4; }

/* ---------- Kontakt ---------- */
.section--contact { background: var(--color-ink); color: #fff; border-top: none; }
.section--contact .section__intro, .contact__response, .contact__formintro { color: #d6d1c8; }
.section--contact .btn--secondary { color: #fff; border-color: #fff; }
.section--contact .btn--secondary:hover { background: #fff; color: var(--color-ink); }
.section--contact :focus-visible { outline-color: #fff; }
.contact { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); }
.contact__response { font-size: var(--fs-small); margin-top: var(--space-3); }
.contact__formintro { margin-bottom: var(--space-3); }
.contact__fallback a { color: #fff; }
.form { display: grid; gap: var(--space-3); }
.form__row { display: grid; gap: 6px; }
.form label { font-size: var(--fs-small); font-weight: 500; }
.form input, .form textarea { font: inherit; font-size: 1rem; padding: 0.75rem; border-radius: 6px; border: 1px solid #6f6a62; background: #2a2926; color: #fff; }
.form__hint { font-size: var(--fs-xs); color: #d6d1c8; }
.form__hint a { color: #fff; }
.form .btn { justify-self: start; }

/* ---------- Fallstudien-Seite ---------- */
.casepage__head { padding: var(--space-6) 0 var(--space-5); border-bottom: 1px solid var(--color-line); }
.casepage__title { font-family: var(--font-serif); font-weight: 400; font-size: var(--fs-h1); letter-spacing: -0.015em; margin-bottom: var(--space-3); }
.casepage__metric { display: flex; align-items: baseline; gap: var(--space-2); margin-top: var(--space-3); }
.casepage__artifact { padding-top: var(--space-4); }
.casepage__artifact img { width: 100%; height: auto; border: 1px solid var(--color-line); border-radius: var(--radius); }
.casepage__artifact figcaption { margin-top: var(--space-1); color: var(--color-muted); font-size: var(--fs-small); }
.casepage__body { padding: var(--space-5) var(--space-4) var(--space-6); }
.casepage__section { margin-bottom: var(--space-5); }
.casepage__section h2 { font-size: var(--fs-xs); letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-accent); margin-bottom: var(--space-1); font-weight: 600; }
.casepage__visuals { display: grid; gap: var(--space-3); margin-top: var(--space-4); }
.casepage__visual { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: var(--space-3); align-items: start; padding: var(--space-3); border: 1px solid var(--color-line); border-radius: var(--radius); background: var(--color-surface); }
.casepage__visual:nth-child(even) img { order: 1; }
.casepage__visual img { width: 100%; max-height: 20rem; object-fit: contain; object-position: top; background: var(--color-raised); border: 1px solid var(--color-line); border-radius: 4px; }
.casepage__visual h3 { font-family: var(--font-serif); font-weight: 400; font-size: 1.375rem; margin-bottom: var(--space-1); }
.casepage__visual p { color: var(--color-muted); }
.casepage__cta { margin: var(--space-6) 0 var(--space-4); padding: var(--space-4); background: var(--color-raised); border-radius: var(--radius); }
.casepage__cta h2 { font-family: var(--font-serif); font-weight: 400; font-size: 1.75rem; margin-bottom: var(--space-1); }
.casepage__cta p { color: var(--color-muted); margin-bottom: var(--space-3); }
.casepage__next a { color: var(--color-accent); font-weight: 500; }
.casepage__open-items { margin-top: var(--space-4); padding: var(--space-3); border-left: 3px solid var(--color-accent); border-radius: var(--radius); background: var(--color-accent-soft); }
.casepage__open-items h2 { font-size: var(--fs-small); font-weight: 600; margin-bottom: var(--space-1); }
.casepage__open-items ul { padding-left: var(--space-3); }
.casepage__open-items li { margin-top: var(--space-1); font-size: var(--fs-small); }

.legal { padding: var(--space-6) var(--space-4); }
.legal p { margin-bottom: var(--space-2); max-width: var(--measure); }

/* ---------- Footer ---------- */
.footer { padding: var(--space-4) 0; font-size: var(--fs-small); color: var(--color-muted); border-top: 1px solid var(--color-line); }
.footer__inner { display: flex; flex-wrap: wrap; justify-content: space-between; gap: var(--space-2); }
.footer ul { display: flex; gap: var(--space-3); }
.footer a { text-decoration: none; }
.footer a:hover { color: var(--color-ink); text-decoration: underline; }

/* ---------- Responsive ---------- */
@media (max-width: 60rem) {
  .questions { grid-template-columns: repeat(2, 1fr); }
  .steps { grid-template-columns: repeat(2, 1fr); gap: var(--space-4) 0; }
  .step:nth-child(3n + 1) { padding-left: var(--space-3); border-left: 1px solid var(--color-line); }
  .step:nth-child(odd) { padding-left: 0; border-left: none; }
  .trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .matrix, .contact, .about--photo { grid-template-columns: minmax(0, 1fr); }
  .matrix { padding: var(--space-4); gap: var(--space-4); }
}
@media (max-width: 40rem) {
  .questions, .offers, .cases__grid, .steps { grid-template-columns: 1fr; }
  .step { padding-left: 0; border-left: none; }
  .trust-grid { grid-template-columns: 1fr; }
  .case { grid-template-columns: 1fr; gap: var(--space-2); padding: var(--space-3); }
  .case--featured { padding: var(--space-4); }
  .case__metric { align-items: flex-start; text-align: left; }
  .hero { padding: var(--space-6) 0 var(--space-5); }
  .hero__main { grid-template-columns: 1fr; gap: var(--space-4); }
  .hero__photo { width: min(100%, 16rem); }
  .casepage__visual { grid-template-columns: 1fr; }
  .casepage__visual:nth-child(even) img { order: 0; }
  .contact { gap: var(--space-5); }
  .matrix { padding: var(--space-3); }
  .cell { padding: var(--space-2) 0.75rem; min-height: 7rem; }
  .cell strong { font-size: 0.875rem; }
}
```

## src/styles/tokens.css

```css
/* Design-Tokens – Variante A „Ruhig & editorial“
   Kontraste geprüft (WCAG AA ≥ 4,5:1):
   accent/bg 4,77 · accent/white 5,06 · muted/bg 6,46 */
:root {
  --color-bg: #faf8f4;
  --color-surface: #ffffff;
  --color-raised: #f3efe8;
  --color-ink: #1f1e1c;
  --color-muted: #5e5a53;
  --color-line: #e3ded5;
  --color-accent: #b5502e;
  --color-accent-hover: #963f22;
  --color-accent-soft: #f6e6df;

  --font-serif: 'Fraunces Variable', Georgia, serif;
  --font-sans: 'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif;

  --fs-body: 1.125rem;      /* 18px */
  --fs-small: 0.9375rem;    /* 15px */
  --fs-xs: 0.8125rem;       /* 13px */
  --fs-h3: 1.1875rem;
  --fs-h2: clamp(1.75rem, 3vw + 0.5rem, 2.375rem);
  --fs-h1: clamp(2.25rem, 4.5vw + 0.75rem, 3.5rem);
  --fs-metric: clamp(2.5rem, 4vw + 1rem, 3.5rem);

  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-5: 3rem;
  --space-6: 4.5rem;
  --space-7: 6rem;

  --radius: 8px;
  --measure: 68ch;
  --container: 72rem;
}
```

## src/vite-env.d.ts

```ts
/// <reference types="vite/client" />
```

## public/.nojekyll

```text

```

## public/cases/adac-kfz-versicherung/affinity-map.jpg

(Binaerdatei ausgelassen, 42457 Bytes)

## public/cases/adac-kfz-versicherung/customer-journey.png

(Binaerdatei ausgelassen, 154699 Bytes)

## public/cases/adac-kfz-versicherung/delivery-artifact.png

(Binaerdatei ausgelassen, 44368 Bytes)

## public/cases/adac-kfz-versicherung/prototype.png

(Binaerdatei ausgelassen, 89351 Bytes)

## public/cases/adac-kfz-versicherung/sketchnote.png

(Ausgelassen: Datei zu gross, 1202704 Bytes)

## public/cases/adac-kfz-versicherung/sketchnote-en.png

(Ausgelassen: Datei zu gross, 1290659 Bytes)

## public/cases/adac-kfz-versicherung/stakeholder-workshop.png

(Binaerdatei ausgelassen, 99772 Bytes)

## public/cases/adac-kfz-versicherung/usability-test.png

(Binaerdatei ausgelassen, 168222 Bytes)

## public/cases/barrierefreiheit-digitaler-arbeitsplatz/.gitkeep

```text

```

## public/cases/barrierefreiheit-digitaler-arbeitsplatz/sketchnote.png

(Ausgelassen: Datei zu gross, 1448252 Bytes)

## public/cases/barrierefreiheit-digitaler-arbeitsplatz/sketchnote-en.png

(Ausgelassen: Datei zu gross, 1485097 Bytes)

## public/cases/co-creation/.gitkeep

```text

```

## public/cases/insurance-broker-discovery/advisory-journey.png

(Binaerdatei ausgelassen, 89836 Bytes)

## public/cases/insurance-broker-discovery/analysis-wall.png

(Binaerdatei ausgelassen, 226654 Bytes)

## public/cases/insurance-broker-discovery/broker-needs.png

(Binaerdatei ausgelassen, 73563 Bytes)

## public/cases/insurance-broker-discovery/decision-artifact-01.png

(Binaerdatei ausgelassen, 116315 Bytes)

## public/cases/insurance-broker-discovery/decision-artifact-02.png

(Binaerdatei ausgelassen, 88142 Bytes)

## public/cases/insurance-broker-discovery/discussion-guide.png

(Binaerdatei ausgelassen, 76356 Bytes)

## public/cases/insurance-broker-discovery/sketchnote.png

(Ausgelassen: Datei zu gross, 1081005 Bytes)

## public/cases/insurance-broker-discovery/sketchnote-en.png

(Ausgelassen: Datei zu gross, 1456673 Bytes)

## public/cases/kano/.gitkeep

```text

```

## public/cases/kano/sketchnote.png

(Ausgelassen: Datei zu gross, 1453912 Bytes)

## public/cases/kano/sketchnote-en.png

(Ausgelassen: Datei zu gross, 1445831 Bytes)

## public/cases/researchops/.gitkeep

```text

```

## public/cases/researchops/sketchnote.png

(Ausgelassen: Datei zu gross, 1555881 Bytes)

## public/cases/researchops/sketchnote-en.png

(Ausgelassen: Datei zu gross, 1529449 Bytes)

## public/cases/vom-problem-zum-agenten/george-2-3.png

(Binaerdatei ausgelassen, 43855 Bytes)

## public/cases/vom-problem-zum-agenten/power-bi-dashboard.png

(Ausgelassen: Datei zu gross, 341372 Bytes)

## public/cases/vom-problem-zum-agenten/sketchnote.png

(Ausgelassen: Datei zu gross, 1408411 Bytes)

## public/cases/vom-problem-zum-agenten/sketchnote-en.png

(Ausgelassen: Datei zu gross, 1321237 Bytes)

## public/cases/zielgruppen-agent/sketchnote.png

(Ausgelassen: Datei zu gross, 1442711 Bytes)

## public/cases/zielgruppen-agent/sketchnote-en.png

(Ausgelassen: Datei zu gross, 1434766 Bytes)

## public/cv/portrait.jpg

(Binaerdatei ausgelassen, 84008 Bytes)

## public/favicon.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#1F1E1C"/><text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle" font-family="Georgia,serif" font-size="30" fill="#FAF8F4">FB</text></svg>
```

## public/felix-bruckmeier.png

(Ausgelassen: Datei zu gross, 1202726 Bytes)

## scripts/content-check.mjs

```js
import { createServer } from 'vite';

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const [home, caseContent, configuration, cv, legal] = await Promise.all([
    server.ssrLoadModule('/src/content/home.ts'),
    server.ssrLoadModule('/src/content/cases.ts'),
    server.ssrLoadModule('/src/content/config.ts'),
    server.ssrLoadModule('/src/content/cv.ts'),
    server.ssrLoadModule('/src/content/legal.ts'),
  ]);

  const publishedCases = caseContent.cases.filter((item) => !item.draft);
  const renderedCases = publishedCases.map(({ openItems, ...item }) => item);
  const casesWithOpenItems = caseContent.cases.filter((item) => item.openItems?.length);
  const draftCases = caseContent.cases.filter((item) => item.draft);
  const publicContent = {
    ...home,
    cases: renderedCases,
    sectionLabels: caseContent.sectionLabels,
    ...configuration,
    ...cv,
    ...legal,
  };
  const issues = [];
  const markerPattern = /\[(BELEG FEHLT|FREIGABE PRÜFEN)\b/;

  function inspect(value, path) {
    if (typeof value === 'string') {
      const match = value.match(markerPattern);
      if (match) issues.push(`${path}: [${match[1]}]`);
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((item, index) => inspect(item, `${path}[${index}]`));
      return;
    }
    if (value && typeof value === 'object') {
      Object.entries(value).forEach(([key, item]) => inspect(item, `${path}.${key}`));
    }
  }

  console.log(`Production sichtbar (${publishedCases.length}): ${publishedCases.map((item) => item.slug).join(', ')}`);
  const openItemCount = casesWithOpenItems.reduce((count, item) => count + item.openItems.length, 0);
  console.warn(`Warnung: ${openItemCount} offene Punkte in ${casesWithOpenItems.length} Fallstudien:`);
  casesWithOpenItems.forEach((item) => {
    console.warn(`- ${item.slug}: ${item.openItems.length} offene Punkte`);
    item.openItems.forEach((openItem) => console.warn(`  - ${openItem}`));
  });
  console.warn(`Warnung: ${draftCases.length} Fallstudien mit draft: true (in Production ausgeblendet): ${draftCases.map((item) => item.slug).join(', ')}`);

  inspect(publicContent, 'content');
  if (issues.length) {
    console.error(`Content-Check fehlgeschlagen: ${issues.length} ungeklärte Markierung(en) in veröffentlichten Inhalten.`);
    issues.forEach((issue) => console.error(`- ${issue}`));
    process.exitCode = 1;
  } else {
    console.log('Content-Check erfolgreich: Keine ungeklärten Markierungen in veröffentlichten Inhalten.');
  }
} catch (error) {
  console.error('Content-Check konnte nicht ausgeführt werden:', error);
  process.exitCode = 1;
} finally {
  await server.close();
}
```

## ai/CONTENT.md

```md
# CONTENT v2 – Texte für die Startseite

> Schritt 2, überarbeitet. Grundlage: bestehende Seite felixbruckmeier.github.io + neue Positionierung.
> **[Übernommen]** = von der bestehenden Seite (ins Deutsche übertragen) · **[Neu]** = ergänzt für die neue Rolle
> Platzhalter in [eckigen Klammern] füllst du aus.

---

## Meta

- **Seitentitel:** Felix Bruckmeier – UX Manager · UX Research · Human-Agent Collaboration
- **Meta-Beschreibung:** UX Manager mit Schwerpunkt Research, ResearchOps und UX-Strategie. Ich verbinde Nutzerverständnis mit Produktentscheidungen – heute vor allem dort, wo Menschen und KI-Agenten zusammenarbeiten.

## Navigation

Angebote · Vorgehen · Fallstudien · Über mich · **[Erstgespräch buchen]**

---

## 1. Hero

**Eyebrow:** UX Manager · UX Research · ResearchOps · Human-Agent Collaboration

**Headline [Neu]:**
KI-Tools einzuführen ist leicht. Arbeit so zu gestalten, dass sie wirkt, ist schwer.

**Subline [Übernommen + Neu]:**
Ich verstehe, was Nutzer wirklich brauchen, und mache daraus belastbare Produktentscheidungen. Mit ResearchOps und UX-Strategie schaffe ich klare Strukturen und skalierbare Praktiken – heute vor allem dort, wo Menschen und KI-Agenten zusammenarbeiten.

**Primär-Button:** Erstgespräch buchen
**Sekundär-Link:** Fallstudien ansehen ↓

**Vertrauenszeile [Übernommen]:**
Qualitative und quantitative Methoden in voller Breite · End-to-End-Research über alle Phasen der Produktentwicklung

---

## 2. Das Problem [Neu]

**Headline:** Der Nutzen kommt an. Nur nicht im Ergebnis.

**Text:**
Viele Organisationen nutzen KI. Mitarbeitende spüren den Unterschied im Alltag, im Ergebnis zeigt er sich oft kaum. Der Grund liegt selten im Tool. Er liegt in der Arbeit drumherum.

**Vier Fragen (Karten):**
1. **Wofür eigentlich?** Welche Arbeit soll sich ändern, und hilft KI dort wirklich?
2. **Wer entscheidet?** Was darf der Agent allein, wo muss der Mensch freigeben?
3. **Wem vertrauen?** Wann prüft man, wann nicht, und was passiert bei Fehlern?
4. **Wirkt es?** Woran merkt man, dass sich etwas verbessert hat?

**Überleitung:** Genau an diesen Fragen setze ich an – mit denselben Research-Methoden, die auch jede andere gute Produktentscheidung tragen.

---

## 3. Angebote

**Headline:** Wobei ich Sie unterstütze

| Karte | Text | Ergebnis | Herkunft |
|---|---|---|---|
| **UX Research & Strategie** | Ich verbinde Research-Erkenntnisse mit der Ausrichtung des Unternehmens und übersetze echte Nutzerbedürfnisse in umsetzbare Produkt-Roadmaps. | Entscheidungsgrundlagen, priorisierte Roadmap | [Übernommen] Expertise 1 + 2 |
| **ResearchOps & Befähigung** | Ich baue effiziente, skalierbare Research-Strukturen auf und stärke Teams durch Mentoring, Abstimmung und handwerkliche Qualität. | Prozesse, Templates, Repository, befähigte Teams | [Übernommen] Expertise 3 + 4 |
| **KI-Bedarfsanalyse & Mensch-Agent-Workflows** | Ich untersuche, wo KI echten Bedarf trifft, und lege fest, was der Agent übernimmt, wo er übergibt und wo der Mensch freigibt. | Priorisierte Use Cases, Delegationsmodell, Spezifikation | [Neu] |
| **Wirkung messen** | Ich mache UX-Wirkung messbar und sichtbar in der Organisation – auch für KI-Lösungen: Zeit, Eingriffe, Vertrauen. | Kennzahlen, Evaluation, Kommunikation der Ergebnisse | [Übernommen] Expertise 5 + [Neu] |

**Kartenlink:** Passende Fallstudie → · **Button:** Anfragen

> Alle fünf Expertise-Aussagen der bestehenden Seite sind damit in den Angeboten enthalten – nicht mehr als Behauptungen, sondern als buchbare Leistung.

---

## 4. Vorgehen [Neu]

**Headline:** So arbeite ich

**Intro:** Ein stabiles Vorgehen, austauschbare Werkzeuge.

| Schritt | Frage | Ergebnis |
|---|---|---|
| 1 Verstehen | Welche Arbeit soll sich ändern, und warum? | Bedarf, Kontext, Journey |
| 2 Bewerten | Wo hilft KI wirklich? Wie viel Autonomie passt? | Use Cases, Delegationsmatrix |
| 3 Spezifizieren | Wer macht was, wo wird übergeben? | Spezifikation mit Checkpoints |
| 4 Bauen | Funktioniert es in der Praxis? | Prototyp oder Agent |
| 5 Messen | Kommt der Nutzen im Ergebnis an? | Kennzahlen zu Wirkung und Vertrauen |

**Nachsatz:** Ich baue Prototypen selbst – nicht um Entwickler zu ersetzen, sondern um Annahmen früh zu prüfen.

---

## 5. Fallstudien

**Headline:** Was daraus wurde

Die vier Research-Projekte der bestehenden Seite bleiben erhalten. Neu kommt das KI-Leitprojekt dazu.

| # | Titel | Teaser | Tags | Herkunft |
|---|---|---|---|---|
| 1 | **Klarheit durch Kontext** | Kontextinterviews und Synthese für ein klares Produktverständnis. | Verstehen | [Übernommen] |
| 2 | **Was Kunden wirklich spüren** | Mit dem Kano-Modell die Features identifizieren, die für Kunden den Unterschied machen. | Bewerten | [Übernommen] |
| 3 | **Fundament für Research** | UX-Teams durch ResearchOps-Grundlagen befähigen. | Befähigen | [Übernommen] |
| 4 | **Gemeinsam statt nebeneinander** | Abstimmung und Ownership durch Co-Creation aufbauen. | Verstehen · Spezifizieren | [Übernommen] |
| 5 | **Vom Problem zum Agenten** | [Leitprojekt: Bedarf, Delegation, Checkpoints, Prototyp, Evaluation] | Bewerten · Spezifizieren · Bauen · Messen | [Neu] |

Je Teaser fehlt noch **eine Wirkungszahl** → [Platzhalter, kommt in Schritt 5].

**Startseite:** Projekt 5 als großer Teaser zuerst, dann 1–4 als Raster.

### Lab (Version 2)

| Titel | Teaser | Herkunft |
|---|---|---|
| **Design System & Performance** | Design-System-Architektur, Tokenisierung, IA-Optimierung, SEO und Performance. | [Übernommen] – verschoben aus den Projekten |

---

## 6. Über mich

**Headline:** Über mich

**Text [Übernommen + Neu]:**
Ich bin Felix Bruckmeier, UX Manager mit Schwerpunkt Research. Ich arbeite mit dem gesamten Spektrum qualitativer und quantitativer Methoden und begleite Produkte durch alle Phasen der Entwicklung. Mein Fokus: Research-Erkenntnisse mit der Unternehmensrichtung verbinden, Teams befähigen und Wirkung sichtbar machen.

Heute interessiert mich vor allem, was KI für die Menschen verändert, die mit ihr arbeiten. Dazu gehört für mich auch Verantwortung: Barrierefreiheit, Vertrauen und ein bewusster Umgang mit Ressourcen.

**Zitat [Übernommen, im Original]:**
„UX Research is not for perfectionists. We strive for something better than perfection — something real.“

**Link:** Lebenslauf herunterladen (PDF) [Übernommen: bisheriger CV-Link]

---

## 7. Kontakt [Übernommen + Neu]

**Headline:** Lassen Sie uns über Ihr Vorhaben sprechen.

**Text:** Ob Research-Frage, ResearchOps oder KI im Arbeitsalltag: 30 Minuten, unverbindlich. Sie schildern die Situation, ich sage Ihnen ehrlich, ob und wie ich helfen kann.

**Primär-Button:** Erstgespräch buchen → [bestehender Kalender-Link]
**Alternative [Übernommen]:** Lieber schreiben als einen Termin vereinbaren? Schicken Sie mir direkt eine Nachricht.
**Formular [Übernommen]:** Name · E-Mail · Nachricht · Senden → [bestehender Formulardienst]
**Hinweis:** Ich antworte in der Regel innerhalb von [2 Werktagen].

---

## Footer [Übernommen]

© 2026 Felix Bruckmeier — Alle Rechte vorbehalten · Impressum · Datenschutz · [LinkedIn] · [GitHub]

> Impressum und Datenschutz: bestehende Texte 1:1 übernehmen und um den Kalender-/Formulardienst ergänzen, falls dort noch nicht genannt.

---

## Übersicht: Was von der alten Seite wohin wandert

| Bestehend | Neu |
|---|---|
| Titel „Senior UX Researcher“ / „UX Research Lead & ResearchOps Specialist“ | Eyebrow „UX Manager · UX Research · ResearchOps · …“ |
| Intro-Text (doppelt) | Einmal, als Subline im Hero |
| Zitat | Über mich |
| „Full spectrum …“ / „End-to-end …“ | Vertrauenszeile im Hero + Über mich |
| 5 Expertise-Aussagen | 4 Angebote |
| Projekte 1–4 | Fallstudien 1–4 |
| Projekt „Design System …“ | Lab (Version 2) |
| Book a Call / Formular | Kontakt, Kalender als Hauptaktion |
| CV-Button im Hero | Download unter „Über mich“ |
| Imprint / Privacy | Footer, unverändert |
```

## .github/copilot-instructions.md

```md
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
```

## .github/workflows/deploy.yml

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run release
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
