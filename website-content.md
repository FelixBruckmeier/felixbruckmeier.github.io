# Website-Dokumentation

Enthalten sind Routing, Seiten- und Komponentenstruktur, Content-Daten sowie Styles und Design-Tokens. React-Einstiegspunkt, Hooks, Abhaengigkeiten und Build-Konfiguration sind nicht enthalten. Bilder und andere Binaerdateien werden ausgelassen; Bildpfade im Quelltext bleiben als Referenz erhalten.

## `src/App.tsx`

```text
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

## `src/components/BookingButton.tsx`

```text
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

## `src/components/CaseTeaser.tsx`

```text
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../content/cases';

export default function CaseTeaser({ item }: { item: CaseStudy }) {
  return (
    <article className={`case ${item.featured ? 'case--featured' : ''}`}>
      <div className="case__body">
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

## `src/components/ContactForm.tsx`

```text
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

## `src/components/cv/ContactGrid.tsx`

```text
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

## `src/components/cv/CV.tsx`

```text
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

## `src/components/cv/ExperienceItem.tsx`

```text
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

## `src/components/cv/ImpactCard.tsx`

```text
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

## `src/components/cv/PageOne.tsx`

```text
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

## `src/components/cv/PageTwo.tsx`

```text
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

## `src/components/cv/SkillGroup.tsx`

```text
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

## `src/components/DelegationMatrix.tsx`

```text
import { approach } from '../content/home';

export default function DelegationMatrix() {
  const m = approach.matrix;
  return (
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
  );
}
```

## `src/components/Footer.tsx`

```text
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

## `src/components/Header.tsx`

```text
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

## `src/components/ScrollManager.tsx`

```text
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

## `src/components/Section.tsx`

```text
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

## `src/content/cases.ts`

```text
// Fallstudien. Neuer Eintrag = neue Seite /fallstudien/<slug> + Teaser auf der Startseite.
// Felder mit [Platzhalter] in Schritt 5 füllen. Nur belegbare Zahlen verwenden.

export interface CaseStudy {
  slug: string;
  title: string;
  teaser: string;
  tags: string[];
  featured?: boolean;
  metric?: { value: string; label: string };
  openingArtifact?: { image: string; alt: string; caption: string };
  visuals?: { title: string; text: string; image: string; alt: string }[];
  sections: {
    situation: string;
    question: string;
    approach: string;
    collaboration?: string; // nur bei KI-Fällen
    insight: string;
    impact: string;
    role: string;
  };
}

const todo = '[Platzhalter – folgt in Schritt 5]';

export const cases: CaseStudy[] = [
  {
    slug: 'vom-problem-zum-agenten',
    title: 'Von der Auswertung zum Research-Agenten',
    teaser: 'George: Ein KI-Agent, der Befragungsdaten zur Laptop-Erfahrung analysiert und Ergebnisse methodisch einordnet.',
    tags: ['Verstehen', 'Analysieren', 'Bauen', 'Messen'],
    featured: true,
    openingArtifact: {
      image: '/cases/vom-problem-zum-agenten/sketchnote.png',
      alt: 'Deutsches Sketchnote zum Weg von zwei Laptopbefragungen über ein Power-BI-Dashboard zum Research-Agenten George. Es zeigt, wie Befunde eingeordnet und neue Fragen ermöglicht werden; zentrale Erkenntnis: Nicht mehr Informationen schaffen Vertrauen, sondern die richtigen Informationen zum richtigen Zeitpunkt.',
      caption: 'Vom Vergleich zweier Befragungen über das Dashboard bis zum dialogischen Research-Agenten George.',
    },
    visuals: [
      {
        title: 'Power-BI-Dashboard',
        text: 'Das Dashboard visualisierte die Entwicklung von Laptop- und Performancezufriedenheit über den Erhebungszeitraum und stellte Abstände zwischen den Bewertungen der ersten Befragung und der Befragung nach 16 Monaten dar. Es bot einen guten Überblick über vorbereitete Kennzahlen. Für neue Fragestellungen blieb es jedoch zu starr: Nutzer:innen konnten vorhandene Darstellungen filtern, aber nicht einfach eine neue Frage stellen. Zudem zeigte es, was sich verändert hatte, ordnete aber nicht die Belastbarkeit eines Befunds oder sinnvolle nächste Untersuchungen ein.',
        image: '/cases/vom-problem-zum-agenten/power-bi-dashboard.png',
        alt: 'Power-BI-Dashboard mit Verläufen zur Laptop- und Performancezufriedenheit sowie den Abweichungen zwischen den Befragungen.',
      },
      {
        title: 'George 2.3',
        text: 'George ist ein spezialisierter Research-Agent für die beiden Laptopbefragungen. Er wurde mit den Befragungsdaten und einer strukturierten Wissensbasis zu Studienkontext, verfügbaren Daten, methodischen Regeln und zentralen Begriffen verbunden. Seine Rolle: Befunde zeigen, mögliche Erklärungen einordnen und sinnvolle nächste Analysen oder Maßnahmen vorschlagen – ohne Entscheidungen zu treffen oder Ursachen zu behaupten.',
        image: '/cases/vom-problem-zum-agenten/george-2-3.png',
        alt: 'Screenshot von George 2.3 mit der Beschreibung seiner Rolle bei der methodischen Analyse der Laptopbefragungen.',
      },
    ],
    sections: {
      situation: 'Zur Laptop-Erfahrung lagen zwei umfangreiche Befragungen vor: eine erste rund zwei Monate nach der Bereitstellung und eine zweite nach etwa 16 Monaten. Die Daten enthielten Bewertungen zur allgemeinen Zufriedenheit, zur wahrgenommenen Performance, zu verschiedenen Laptoptypen sowie offene Kommentare. Produktteams benötigten einen einfachen Zugang zu den Ergebnissen, um Veränderungen zu erkennen und eigene Fragen an die Daten zu stellen. Da die Befragungen aus unterschiedlichen Stichproben bestanden, konnten Unterschiede nicht automatisch als Entwicklung derselben Personen oder als direkte Folge der Nutzungsdauer interpretiert werden. In der Befragung nach 16 Monaten fielen sowohl die allgemeine Laptopbewertung als auch insbesondere die wahrgenommene Performance niedriger aus. In offenen Kommentaren wurden Themen wie Performance, Stabilität, Akku und Mobilität häufiger genannt.',
      question: 'Wie können Produktteams flexibel mit umfangreichen Befragungsdaten arbeiten, ohne für jede neue Frage eine eigene Auswertung erstellen zu müssen?',
      approach: 'Die Lösung entwickelte sich schrittweise: von der vergleichenden Auswertung über ein interaktives Power-BI-Dashboard bis zum spezialisierten Research-Agenten George. Die Erfahrungen mit dem Dashboard führten zur Idee, statt weiterer Dashboardseiten und Filter einen Agenten natürliche Fragen zu den Befragungsdaten verstehen und passende Analysen durchführen zu lassen. George wurde mit konkreten Fragen zu Laptopzufriedenheit, Performance, Laptoptypen und offenen Kommentaren erprobt. Dabei musste er zwischen beobachtbarem Unterschied, statistischem Zusammenhang, möglicher Erklärung und nachgewiesener Ursache unterscheiden. Die Erprobung zeigte, wo Anweisungen, Methodenregeln und Wissensdateien weiter präzisiert werden mussten.',
      insight: 'Die Herausforderung bestand nicht darin, einfach ein weiteres Dashboard oder einen allgemeinen KI-Chat bereitzustellen. Das Dashboard zeigt vorbereitete Antworten. Der Agent ermöglicht neue Fragen und hilft dabei, die Antworten richtig einzuordnen.',
      impact: 'Mit George entstand ein flexibler Zugang zu den beiden Laptopbefragungen. Produktteams können konkrete Fragen an die Daten stellen, ohne für jede Fragestellung eine neue Auswertung oder Dashboardansicht aufzubauen. Vergleichbarkeit, Unsicherheiten und methodische Grenzen bleiben Teil der Antwort. Zusammenhängende Ergebnisse lassen sich außerdem in einem kompakten One-Pager für Produktteams und Management aufbereiten – mit zentraler Aussage, Datengrundlage, Befunden, möglichen Interpretationen, Handlungsoptionen und Grenzen der Aussagekraft.',
      role: 'UX Research und Agent Design: Analyse und Vergleich der Befragungsdaten, Entwicklung und Bewertung der Power-BI-Zwischenlösung, Konzeption des agentischen Ansatzes, Aufbau der Wissensbasis, Prompt Engineering, iterative Erprobung und Gestaltung der Ergebnisformate.',
    },
  },
  {
    slug: 'klarheit-durch-kontext',
    title: 'Klarheit durch Kontext',
    teaser: 'ADAC Kfz-Versicherung: Kontextinterviews und Synthese für ein Beratungstool, das Gespräche klarer unterstützt.',
    tags: ['Verstehen'],
    openingArtifact: {
      image: '/cases/adac-kfz-versicherung/sketchnote.png',
      alt: 'Sketchnote zur ADAC-Kfz-Versicherung: Kontextinterviews, Verdichtung von Beobachtungen, Prototyping und Tests führen zu klarerer Beratung. Zentrale Erkenntnis: Nicht mehr Informationen schaffen Vertrauen, sondern die richtigen Informationen zum richtigen Zeitpunkt.',
      caption: 'Die Fallstudie im Überblick: vom Beratungskontext über Erkenntnisse und Prototyping bis zur Wirkung.',
    },
    visuals: [
      {
        title: 'Discovery',
        text: 'Kontextinterviews mit Berater:innen simulierten reale Kundengespräche im Rollenspiel. Sichtbar wurden Zeitdruck, unklare Eingabefelder, Systembeschränkungen, Unterbrechungen, doppelte Eingaben und fehlende kontextbezogene Hinweise.',
        image: '/cases/adac-kfz-versicherung/stakeholder-workshop.png',
        alt: 'Berater:innen und Stakeholder betrachten gemeinsam eine Wand mit Research-Material.',
      },
      {
        title: 'Define',
        text: 'Grounded Theory und Affinity Mapping verdichteten Feldnotizen zu wiederkehrenden Themen. Dabei zeigten sich strukturelle Probleme wie inkonsistente Begriffe, fehlende Validierung und ineffiziente Navigation.',
        image: '/cases/adac-kfz-versicherung/affinity-map.jpg',
        alt: 'Gruppierte Notizen aus der qualitativen Research-Synthese.',
      },
      {
        title: 'Journey Mapping',
        text: 'Eine Journey aus Sicht von Berater:innen und Kund:innen visualisierte den Beratungsablauf, emotionale Höhen und Entscheidungshürden. Sie machte sichtbar, wo Vertrauen entsteht oder verloren geht und wo Informationsdichte überfordert.',
        image: '/cases/adac-kfz-versicherung/customer-journey.png',
        alt: 'Gemeinsam erarbeitete Customer Journey zur ADAC Kfz-Versicherung.',
      },
      {
        title: 'Stakeholder-Workshop',
        text: 'Stakeholder aus Business, Produkt und IT diskutierten die Research-Erkenntnisse und ihre strategische Bedeutung. Visuelle Problemkarten unterstützten die Abstimmung gemeinsamer Prioritäten und Gestaltungsprinzipien.',
        image: '/cases/adac-kfz-versicherung/stakeholder-workshop.png',
        alt: 'Stakeholder betrachten gemeinsam Research-Erkenntnisse an einer Wand.',
      },
      {
        title: 'Prototyp',
        text: 'Ein interaktiver Prototyp setzte adaptive Feldlogik, kontextbezogene Hilfe und eine klare visuelle Hierarchie um.',
        image: '/cases/adac-kfz-versicherung/prototype.png',
        alt: 'Übersicht des interaktiven Prototyps für die ADAC Kfz-Versicherungsberatung.',
      },
      {
        title: 'Nutzertests',
        text: 'Schnelle RITE-Usability-Runden mit Berater:innen prüften Ablauf und Verständnis und unterstützten iterative Verbesserungen.',
        image: '/cases/adac-kfz-versicherung/usability-test.png',
        alt: 'Research- und Testmaterial zur Auswertung des Beratungsablaufs.',
      },
      {
        title: 'Übergabe',
        text: 'Der validierte Prototyp wurde in ein skalierbares UI-System und eine Pattern Library überführt, um Konsistenz und Barrierefreiheit der Beratungstools zu unterstützen.',
        image: '/cases/adac-kfz-versicherung/delivery-artifact.png',
        alt: 'Ansicht des überarbeiteten ADAC-Beratungstools mit wiederverwendbaren UI-Mustern.',
      },
    ],
    sections: {
      situation: 'Berater:innen in ADAC-Geschäftsstellen nutzten ein digitales Werkzeug, um Kund:innen durch komplexe Kfz-Versicherungsoptionen zu führen. Das über Jahre gewachsene Tool erschwerte Gespräche und beeinträchtigte Vertrauen.',
      question: 'Wie kann ein über Jahre gewachsenes digitales Werkzeug die Beratung unterstützen, ohne Gesprächsfluss und Vertrauen zu beeinträchtigen?',
      approach: 'Kontextinterviews in simulierten Beratungssituationen, Grounded-Theory-Synthese, Journey Mapping und Stakeholder-Workshops bildeten die Grundlage für Prototyping und Tests.',
      insight: 'Die Schwierigkeiten lagen nicht nur in einzelnen Oberflächenelementen: komplexe Dateneingabe, visuelle Überladung, inkonsistente Begriffe, fehlende Validierung und ineffiziente Navigation prägten den gesamten Beratungsablauf.',
      impact: 'Die Arbeit führte zu Designprinzipien, einem interaktiven Prototyp und einem überarbeiteten UI-System mit wiederverwendbaren Mustern. Schnelle Usability-Iterationen halfen, Reibung in kritischen Schritten zu verringern. Nach dem Rollout veränderte sich die Sicherheit der Berater:innen qualitativ; Leitlinien wurden über Module hinweg übernommen.',
      role: 'UX Research: Kontextinterviews in simulierten Beratungssituationen, Journey Mapping, Grounded-Theory-Synthese und Stakeholder-Workshops zur Abstimmung von Design- und Business-Prioritäten.',
    },
  },
  {
    slug: 'insurance-broker-discovery',
    title: 'Verstehen und priorisieren',
    teaser: 'Insurance Broker Discovery: Beratungsarbeit verstehen, Bedürfnisse verdichten und nächste Schritte priorisieren.',
    tags: ['Verstehen', 'Priorisieren'],
    openingArtifact: {
      image: '/cases/insurance-broker-discovery/sketchnote.png',
      alt: 'Sketchnote zur Insurance Broker Discovery: vier Schritte vom Verstehen im echten Kontext über das Verdichten von Bedürfnissen und das Priorisieren nach Nutzen und Aufwand bis zur Wirkung. Zentrale Erkenntnis: Klarheit zum richtigen Zeitpunkt schafft Vertrauen.',
      caption: 'Die Discovery in einer Übersicht: verstehen, verdichten, priorisieren und Wirkung ermöglichen.',
    },
    visuals: [
      {
        title: 'Kontextinterviews',
        text: 'Kontextinterviews mit Vermittler:innen in ihrem Arbeitsumfeld untersuchten, wie Tools, Zeitpunkte und Begriffe den Beratungsablauf prägen. Erfasst wurden reale Rahmenbedingungen und die Sprache, mit der Vermittler:innen Produkte und Nutzen erklären.',
        image: '/cases/insurance-broker-discovery/broker-needs.png',
        alt: 'Visualisierung zentraler Bedürfnisse von Versicherungsvermittler:innen.',
      },
      {
        title: 'Gesprächsleitfaden',
        text: 'Ein Gesprächsleitfaden strukturierte die Erkundung von Bedürfnissen, Motivationen und Pain Points über die Interviews hinweg und ließ zugleich Raum für kontextbezogene Nachfragen.',
        image: '/cases/insurance-broker-discovery/discussion-guide.png',
        alt: 'Gesprächsleitfaden zur Erkundung von Vermittlerbedürfnissen.',
      },
      {
        title: 'Synthese mit Grounded Theory',
        text: 'Beobachtungen wurden zu wiederkehrenden Themen verdichtet: Kontextlücken, Reibung bei Übergaben, doppelte Dateneingaben und unklare Hinweise zu Anspruchsvoraussetzungen. Eine Opportunity Map priorisierte, wo Klarheit und Sicherheit zuerst verbessert werden können.',
        image: '/cases/insurance-broker-discovery/analysis-wall.png',
        alt: 'Research-Synthese mit gruppierten Beobachtungen und Opportunity Map.',
      },
      {
        title: 'Journey Mapping',
        text: 'Die Beratungs-Journey vom Erstkontakt über Bedarfsklärung, Produkterkundung und Entscheidung bis zum Abschluss machte sichtbar, wo Vertrauen entsteht oder verloren geht und an welchen Entscheidungspunkten Kontext rechtzeitig verfügbar sein muss.',
        image: '/cases/insurance-broker-discovery/advisory-journey.png',
        alt: 'Journey durch die Beratung von Versicherungsvermittler:innen.',
      },
      {
        title: 'Bedürfnisse und Rahmenbedingungen',
        text: 'Verdichtet wurden zentrale Bedürfnisse der Vermittler:innen: transparente Voraussetzungen, Eingaben aus einer verlässlichen Quelle und eine Sprache, die zur Erklärung von Risiko und Nutzen passt.',
        image: '/cases/insurance-broker-discovery/broker-needs.png',
        alt: 'Übersicht der Bedürfnisse von Versicherungsvermittler:innen.',
      },
      {
        title: 'Artefakte zur Entscheidungsunterstützung',
        text: 'Problemstatements, eine Risiko-Klarheits-Matrix und Entscheidungsleitplanken überführten Research-Ergebnisse in gemeinsame Arbeitsgrundlagen für Design und Business.',
        image: '/cases/insurance-broker-discovery/decision-artifact-01.png',
        alt: 'Entscheidungsartefakt zur Verbindung von Risiko und Klarheit.',
      },
      {
        title: 'Priorisierung und nächste Schritte',
        text: 'Möglichkeiten wurden nach Vermittlernutzen und Umsetzungsaufwand priorisiert. Kurzfristig standen einheitliche Voraussetzungen und weniger Doppeleingaben im Fokus; mittelfristig kontextbezogene Hinweise und Erklärungen an Entscheidungspunkten.',
        image: '/cases/insurance-broker-discovery/decision-artifact-02.png',
        alt: 'Priorisierte Optionen und nächste Schritte aus der Discovery.',
      },
    ],
    sections: {
      situation: 'Versicherungsvermittler:innen navigieren durch komplexe Beratungsabläufe, die von persönlichem Vertrauen, fragmentierten Tools und kundenspezifischen Routinen geprägt sind.',
      question: 'Wie lassen sich die tatsächlichen Bedürfnisse und Reibungspunkte im Beratungsalltag verstehen und in priorisierte Ansatzpunkte für Design und Strategie übersetzen?',
      approach: 'Kontextinterviews und Feldbeobachtungen, Grounded-Theory-Synthese, Journey Mapping und die gemeinsame Entwicklung von Entscheidungsartefakten machten den Vermittlungsprozess und seine Bedürfnisse sichtbar.',
      insight: 'Übergaben, Doppeleingaben und der Zeitpunkt, an dem Informationen verfügbar sind, prägen den Beratungsablauf. Klarheit und Sicherheit sind besonders an Entscheidungspunkten wichtig, an denen Vertrauen auf dem Spiel steht.',
      impact: 'Die Discovery machte den Beratungsprozess vom Erstkontakt bis zum Abschluss sichtbar, verdichtete Bedürfnisse und Pain Points und priorisierte Anforderungen für die weitere Roadmap. Als Ansatzpunkte wurden klarere Voraussetzungen, weniger doppelte Eingaben und eine gemeinsame Sprache für Risiko, Nutzen und Passung herausgearbeitet.',
      role: 'UX Research: Kontextinterviews und Feldbeobachtungen, Grounded-Theory-Synthese und Priorisierung der Vermittlerbedürfnisse zur Unterstützung von Design und Strategie.',
    },
  },
  {
    slug: 'kano',
    title: 'Was Kunden wirklich spüren',
    teaser: 'Mit dem Kano-Modell die Features identifizieren, die für Kunden den Unterschied machen.',
    tags: ['Bewerten'],
    metric: { value: '[XX]', label: '[Wirkung]' },
    sections: { situation: todo, question: todo, approach: todo, insight: todo, impact: todo, role: todo },
  },
  {
    slug: 'researchops',
    title: 'Fundament für Research',
    teaser: 'UX-Teams durch ResearchOps-Grundlagen befähigen.',
    tags: ['Befähigen'],
    metric: { value: '[XX]', label: '[Wirkung]' },
    sections: { situation: todo, question: todo, approach: todo, insight: todo, impact: todo, role: todo },
  },
  {
    slug: 'co-creation',
    title: 'Gemeinsam statt nebeneinander',
    teaser: 'Abstimmung und Ownership durch Co-Creation aufbauen.',
    tags: ['Verstehen', 'Spezifizieren'],
    metric: { value: '[XX]', label: '[Wirkung]' },
    sections: { situation: todo, question: todo, approach: todo, insight: todo, impact: todo, role: todo },
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

## `src/content/config.ts`

```text
// Zentrale Einstellungen. Platzhalter vor dem Livegang ersetzen.
export const config = {
  name: 'Felix Bruckmeier',
  /** Link zum Buchungstool (bestehender Kalender-Link der alten Seite) */
  calendarUrl: '', // z. B. 'https://calendly.com/...'
  /** Formular-Endpoint des bestehenden Formulardienstes (POST). Leer = Fallback auf E-Mail. */
  formAction: '', // z. B. 'https://formspree.io/f/xxxx'
  email: '[ihre@email.de]',
  linkedinUrl: '', // z. B. 'https://www.linkedin.com/in/...'
  githubUrl: 'https://github.com/felixbruckmeier',
  responseTime: '[2 Werktagen]',
};
```

## `src/content/cv.ts`

```text
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
    title: 'Lebenslauf – Felix Bruckmeier',
    description:
      'Druckfähiger Lebenslauf von Felix Bruckmeier, UX Manager für UX-Strategie und Transformation.',
  },
  pageOne: {
    kicker: 'Lebenslauf',
    positioning: 'UX-Strategie & Transformation',
    focus: 'Datenbasierte Entscheidungen · Agentische Lösungen · KI',
    profile:
      'Volkswirt und UX-Stratege mit rund 10 Jahren Erfahrung darin, komplexe Fragestellungen in fundierte Entscheidungen zu übersetzen. Ich verbinde Research, Datenanalyse und selbst gebaute agentische Lösungen – aktuell in der EnBW-IT an der Schnittstelle von UX, KI und nachhaltiger IT.',
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
    impactsHeading: 'Beiträge & Wirkung · UX Manager',
    impactsCount: '01—06',
    impacts: [
      {
        title: 'Agentische Zielgruppensegmentierung',
        description:
          'Agentische Lösung zur Zielgruppenfindung entwickelt, mit der Teams Research-Teilnehmende schneller identifizieren und gezielt ansprechen.',
        outcome: 'Standard im UX-Team, genutzt von mindestens 2 Produktteams (Wertstrom Zugang & Systeme)',
      },
      {
        title: 'Teilnehmendenaktivierung',
        description:
          'Ursachen rückläufiger Beteiligung an freiwilligen Formaten analysiert und Handlungsfelder zur Stabilisierung der Teilnahme abgeleitet.',
        outcome: 'Grundlage für die Maßnahmenplanung des MLX-Teams',
      },
      {
        title: 'KI-gestützte Befragungsanalyse',
        description:
          'Agenten zur Auswertung zweier Befragungen zur Laptopzufriedenheit entwickelt, die Fragen zum Nutzerfeedback direkt beantworten.',
        outcome:
          'Produktteams beantworten Fragen selbstständig statt über aufwendige Einzelrecherchen',
      },
      {
        title: 'Serviceorientierung',
        description:
          'Agenten zur Entwicklung von Mitarbeiter-Journeys gebaut, die Teams dabei unterstützen, Maßnahmen entlang der Journey serviceorientiert auszurichten.',
        outcome: 'Wird von den Teams aktuell erprobt.',
      },
      {
        title: 'Entscheidungsgrundlagen',
        description:
          'Analysen managementgerecht aufbereitet, darunter die EnMAB-Ergebnisse zur IT – mit klarer Trennung von Befund, Ursache und Empfehlung.',
        outcome: 'Richtung für die Maßnahmenplanung vorgegeben',
      },
      {
        title: 'UX- und KI-Transformation',
        description:
          'UX Research für drei Produktteams koordiniert und proaktiv Rollenbilder und Use Cases für agentische Arbeitsweisen entwickelt, die UX auf die durch KI veränderten Anforderungen vorbereiten.',
        outcome: 'Aktuell in der Tertialzieleplanung.',
      },
    ] satisfies readonly Impact[],
    subjectMatterMeta: 'Sustainable IT · Subject Matter Expert (SME)',
    subjectMatterImpacts: [
      {
        title: 'Digitale Barrierefreiheit',
        description:
          'Befragung zur Barrierefreiheit am digitalen Arbeitsplatz verantwortet.',
        outcome:
          'Grundlage für den ersten Management-Report und die Aufnahme in den CbD-Prozess',
      },
      {
        title: 'Green IT & Change',
        description:
          'Sensibilisierungsformate mitgestaltet und die Perspektive „KI-Nutzen vs. Ressourcenverbrauch“ eingebracht.',
      },
    ] satisfies readonly Impact[],
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
      title: 'KI-Profil',
      text: 'Ich nutze KI nicht nur, ich baue damit: von Copilot-Agenten über semantische Datenmodelle bis zu React-Anwendungen mit EnBW Bricks – vom Problem direkt zur funktionierenden Lösung.',
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
        title: 'KI & Agentic Building',
        items: [
          'Copilot Studio · Agent Builder',
          'Power BI (Dashboards & semantische Modelle)',
          'React-Anwendungen mit EnBW Bricks',
          'KI-gestützte Analyse',
        ],
      },
      {
        title: 'Transformation & Methoden',
        items: ['Agentische Arbeitsweisen', 'SAFe · Lean UX · Design Thinking'],
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

## `src/content/home.ts`

```text
// Texte der Startseite (Quelle: CONTENT_v2.md)

export const hero = {
  eyebrow: 'UX Manager · UX Research · ResearchOps · Human-Agent Collaboration',
  photo: '/felix-bruckmeier.png',
  headlineStart: 'KI-Tools einzuführen ist leicht. Arbeit so zu gestalten, dass sie ',
  headlineEmphasis: 'wirkt',
  headlineEnd: ', ist schwer.',
  lead: 'Ich verstehe, was Nutzer wirklich brauchen, und mache daraus belastbare Produktentscheidungen. Mit ResearchOps und UX-Strategie schaffe ich klare Strukturen und skalierbare Praktiken – heute vor allem dort, wo Menschen und KI-Agenten zusammenarbeiten.',
  primaryCta: 'Erstgespräch buchen',
  secondaryCta: 'Fallstudien ansehen',
  trust: [
    'Qualitative und quantitative Methoden in voller Breite',
    'End-to-End-Research über alle Phasen der Produktentwicklung',
  ],
};

export const problem = {
  title: 'Der Nutzen kommt an. Nur nicht im Ergebnis.',
  text: 'Viele Organisationen nutzen KI. Mitarbeitende spüren den Unterschied im Alltag, im Ergebnis zeigt er sich oft kaum. Der Grund liegt selten im Tool. Er liegt in der Arbeit drumherum.',
  questions: [
    { title: 'Wofür eigentlich?', text: 'Welche Arbeit soll sich ändern, und hilft KI dort wirklich?' },
    { title: 'Wer entscheidet?', text: 'Was darf der Agent allein, wo muss der Mensch freigeben?' },
    { title: 'Wem vertrauen?', text: 'Wann prüft man, wann nicht, und was passiert bei Fehlern?' },
    { title: 'Wirkt es?', text: 'Woran merkt man, dass sich etwas verbessert hat?' },
  ],
  transition: 'Genau an diesen Fragen setze ich an – mit denselben Research-Methoden, die auch jede andere gute Produktentscheidung tragen.',
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
  intro: 'Strategisch beraten, operativ umsetzen.',
  items: [
    {
      level: 'Strategisch',
      title: 'UX Research & Strategie',
      text: 'Ich verbinde Research-Erkenntnisse mit der Ausrichtung des Unternehmens und übersetze echte Nutzerbedürfnisse in umsetzbare Produkt-Roadmaps.',
      result: 'Entscheidungsgrundlagen, priorisierte Roadmap',
      caseSlug: 'kano',
    },
    {
      level: 'Strategisch + operativ',
      title: 'ResearchOps & Befähigung',
      text: 'Ich baue effiziente, skalierbare Research-Strukturen auf und stärke Teams durch Mentoring, Abstimmung und handwerkliche Qualität.',
      result: 'Prozesse, Templates, Repository, befähigte Teams',
      caseSlug: 'researchops',
    },
    {
      level: 'Strategisch + operativ',
      title: 'KI-Bedarf & Mensch-Agent-Workflows',
      text: 'Ich untersuche, wo KI echten Bedarf trifft, und lege fest, was der Agent übernimmt, wo er übergibt und wo der Mensch freigibt.',
      result: 'Priorisierte Use Cases, Delegationsmodell, Spezifikation',
      caseSlug: 'vom-problem-zum-agenten',
    },
    {
      level: 'Operativ',
      title: 'Wirkung messen',
      text: 'Ich mache UX-Wirkung messbar und sichtbar in der Organisation – auch für KI-Lösungen: Zeit, Eingriffe, Vertrauen.',
      result: 'Kennzahlen, Evaluation, Kommunikation der Ergebnisse',
    },
  ],
};

export const approach = {
  title: 'So arbeite ich',
  intro: 'Ein stabiles Vorgehen, austauschbare Werkzeuge.',
  steps: [
    { title: 'Verstehen', question: 'Welche Arbeit soll sich ändern, und warum?', result: 'Bedarf, Kontext, Journey' },
    { title: 'Bewerten', question: 'Wo hilft KI wirklich? Wie viel Autonomie passt?', result: 'Use Cases, Delegationsmatrix' },
    { title: 'Spezifizieren', question: 'Wer macht was, wo wird übergeben?', result: 'Spezifikation mit Checkpoints' },
    { title: 'Bauen', question: 'Funktioniert es in der Praxis?', result: 'Prototyp oder Agent' },
    { title: 'Messen', question: 'Kommt der Nutzen im Ergebnis an?', result: 'Kennzahlen zu Wirkung und Vertrauen' },
  ],
  note: 'Ich baue Prototypen selbst – nicht um Entwickler zu ersetzen, sondern um Annahmen früh zu prüfen.',
  matrix: {
    title: 'Delegationsmatrix',
    text: 'Wie viel ein Agent allein tun darf, hängt von zwei Fragen ab: Wie unsicher ist die Aufgabe – und wie stark wirkt ein Fehler auf andere? Nicht umkehrbare Aktionen brauchen immer einen Checkpoint.',
    xLabel: 'Unsicherheit der Aufgabe',
    yLabel: 'Auswirkung eines Fehlers',
    cells: {
      lowLow: { title: 'Automatisieren', text: 'Agent handelt allein, Mensch sieht Ergebnisse stichprobenartig.' },
      lowHigh: { title: 'Mit Checkpoint delegieren', text: 'Agent bereitet vor, Mensch gibt frei.' },
      highLow: { title: 'Augmentieren', text: 'Agent schlägt vor, Mensch wählt aus.' },
      highHigh: { title: 'Mensch entscheidet', text: 'Agent liefert Kontext, Entscheidung bleibt beim Menschen.' },
    },
  },
};

export const casesSection = {
  title: 'Was daraus wurde',
  intro: 'Fallstudien – mit dem, was sich dadurch verändert hat.',
};

export const about = {
  title: 'Über mich',
  paragraphs: [
    'Ich bin Felix Bruckmeier, UX Manager mit Schwerpunkt Research. Ich arbeite mit dem gesamten Spektrum qualitativer und quantitativer Methoden und begleite Produkte durch alle Phasen der Entwicklung. Mein Fokus: Research-Erkenntnisse mit der Unternehmensrichtung verbinden, Teams befähigen und Wirkung sichtbar machen.',
    'Heute interessiert mich vor allem, was KI für die Menschen verändert, die mit ihr arbeiten. Dazu gehört für mich auch Verantwortung: Barrierefreiheit, Vertrauen und ein bewusster Umgang mit Ressourcen.',
  ],
  quote: 'UX Research is not for perfectionists. We strive for something better than perfection — something real.',
  cvCta: 'Lebenslauf ansehen',
  /** Foto in /public ablegen und Pfad eintragen, z. B. '/felix.jpg'. Leer = kein Foto. */
  photo: '',
};

export const contact = {
  title: 'Lassen Sie uns über Ihr Vorhaben sprechen.',
  text: 'Ob Research-Frage, ResearchOps oder KI im Arbeitsalltag: 30 Minuten, unverbindlich. Sie schildern die Situation, ich sage Ihnen ehrlich, ob und wie ich helfen kann.',
  primaryCta: 'Erstgespräch buchen',
  formIntro: 'Lieber schreiben als einen Termin vereinbaren? Schicken Sie mir direkt eine Nachricht.',
};
```

## `src/content/legal.ts`

```text
// Bestehende Texte der alten Seite hier 1:1 einfügen.
// Datenschutz um Kalender- und Formulardienst ergänzen, falls noch nicht genannt.
export const imprint = {
  title: 'Impressum',
  body: [
    '[Bestehenden Impressumstext der alten Seite einfügen]',
    'Angaben gemäß § 5 DDG: [Name, Anschrift, Kontakt]',
  ],
};

export const privacy = {
  title: 'Datenschutzerklärung',
  body: [
    '[Bestehende Datenschutzerklärung der alten Seite einfügen]',
    'Hosting: Diese Seite wird über GitHub Pages bereitgestellt. [Angaben ergänzen]',
    'Schriften: Die Schriften werden lokal ausgeliefert. Es werden dafür keine Daten an Dritte übertragen.',
    'Terminbuchung und Kontaktformular: [Anbieter, Zweck, Rechtsgrundlage, ggf. Drittlandtransfer ergänzen]',
  ],
};
```

## `src/pages/CasePage.tsx`

```text
import { Link, useParams } from 'react-router-dom';
import { cases, sectionLabels, type CaseStudy } from '../content/cases';
import BookingButton from '../components/BookingButton';
import NotFoundPage from './NotFoundPage';
import { useTitle } from '../hooks/useTitle';

export default function CasePage() {
  const { slug } = useParams();
  const item = cases.find((c) => c.slug === slug);
  useTitle(item?.title);
  if (!item) return <NotFoundPage />;

  const keys = Object.keys(sectionLabels) as (keyof CaseStudy['sections'])[];
  const idx = cases.indexOf(item);
  const next = cases[(idx + 1) % cases.length];

  return (
    <article className="casepage">
      <header className="casepage__head">
        <div className="container container--narrow">
          <Link className="link link--back" to="/#fallstudien">← Alle Fallstudien</Link>
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
        <p className="casepage__next">
          Nächste Fallstudie: <Link to={`/fallstudien/${next.slug}`}>{next.title} →</Link>
        </p>
      </div>
    </article>
  );
}
```

## `src/pages/CvPage.tsx`

```text
import CV from '../components/cv/CV';
import { useTitle } from '../hooks/useTitle';

export default function CvPage() {
  useTitle('Lebenslauf');
  return <CV />;
}
```

## `src/pages/HomePage.tsx`

```text
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
  const featured = cases.filter((c) => c.featured);
  const others = cases.filter((c) => !c.featured);

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
            const linked = o.caseSlug ? cases.find((c) => c.slug === o.caseSlug) : undefined;
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
            <p className="contact__response">Ich antworte in der Regel innerhalb von {config.responseTime}.</p>
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

## `src/pages/LegalPage.tsx`

```text
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

## `src/pages/NotFoundPage.tsx`

```text
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

## `src/styles/cv.css`

```text
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

## `src/styles/global.css`

```text
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

.steps { display: grid; grid-template-columns: repeat(5, 1fr); }
.step { padding: 0 var(--space-3); border-left: 1px solid var(--color-line); }
.step:first-child { padding-left: 0; border-left: none; }
.step__no { font-family: var(--font-serif); font-size: 2.25rem; color: var(--color-accent); line-height: 1; }
.step h3 { font-size: var(--fs-h3); font-weight: 600; margin: var(--space-1) 0; }
.step p { font-size: var(--fs-small); color: var(--color-muted); }
.step__result { margin-top: var(--space-1); color: var(--color-ink) !important; font-weight: 500; }

/* ---------- Delegationsmatrix ---------- */
.matrix { display: grid; grid-template-columns: 1fr 1.3fr; gap: var(--space-5); align-items: center; margin-top: var(--space-6); padding: var(--space-5); background: var(--color-surface); border: 1px solid var(--color-line); border-radius: var(--radius); }
.matrix__text h3 { font-family: var(--font-serif); font-weight: 400; font-size: 1.75rem; margin-bottom: var(--space-2); }
.matrix__text p { color: var(--color-muted); }
.matrix__chart { display: grid; grid-template-columns: auto minmax(0, 1fr); min-width: 0; grid-template-rows: 1fr auto; gap: var(--space-1); }
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
  .step:nth-child(odd) { padding-left: 0; border-left: none; }
  .matrix, .contact, .about--photo { grid-template-columns: minmax(0, 1fr); }
  .matrix { padding: var(--space-4); gap: var(--space-4); }
}
@media (max-width: 40rem) {
  .questions, .offers, .cases__grid, .steps { grid-template-columns: 1fr; }
  .step { padding-left: 0; border-left: none; }
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

## `src/styles/tokens.css`

```text
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
