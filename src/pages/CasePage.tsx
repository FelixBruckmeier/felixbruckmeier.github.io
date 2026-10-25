import { Link, useParams } from 'react-router-dom';
import { casesByLanguage, sectionLabelsByLanguage, type CaseStudy } from '../content/cases';
import BookingButton from '../components/BookingButton';
import NotFoundPage from './NotFoundPage';
import { type Language } from '../content/i18n';
import { useTitle } from '../hooks/useTitle';

interface CasePageProps {
  language?: Language;
}

export default function CasePage({ language = 'de' }: CasePageProps) {
  const { slug } = useParams();
  const cases = casesByLanguage[language];
  const sectionLabels = sectionLabelsByLanguage[language];
  const item = cases.find((c) => c.slug === slug && (import.meta.env.DEV || !c.draft));
  useTitle(item?.title);
  if (!item) return <NotFoundPage />;

  const keys = Object.keys(sectionLabels) as (keyof CaseStudy['sections'])[];
  const publishedCases = cases.filter((c) => !c.draft);
  const idx = publishedCases.indexOf(item);
  const next = idx >= 0 && publishedCases.length > 1
    ? publishedCases[(idx + 1) % publishedCases.length]
    : undefined;

  const backLabel = language === 'en' ? '← All case studies' : '← Alle Fallstudien';
  const draftLabel = language === 'en' ? 'Draft – visible only in local development' : 'Entwurf – nur in der lokalen Entwicklung sichtbar';
  const caseLabel = language === 'en' ? 'Case study' : 'Fallstudie';
  const ctaTitle = language === 'en' ? 'Similar challenge?' : 'Ähnliche Fragestellung?';
  const ctaText = language === 'en' ? 'Let’s talk for 30 minutes.' : 'Lassen Sie uns 30 Minuten darüber sprechen.';
  const nextLabel = language === 'en' ? 'Next case study' : 'Nächste Fallstudie';
  const openItemsTitle = language === 'en' ? 'Open evidence and approvals' : 'Offene Belege und Freigaben';
  const bookingLabel = language === 'en' ? 'Book intro call' : 'Erstgespräch buchen';
  const openingImage = item.openingArtifact
    ? language === 'en'
      ? item.openingArtifact.image.replace(/sketchnote\.png$/, 'sketchnote-en.png')
      : item.openingArtifact.image
    : undefined;

  return (
    <article className="casepage">
      <header className="casepage__head">
        <div className="container">
          <Link className="link link--back" to="/#fallstudien">{backLabel}</Link>
          {item.draft && <p className="draft-notice" role="status">{draftLabel}</p>}
          <p className="eyebrow eyebrow--accent">{caseLabel} · {item.tags.join(' · ')}</p>
          <h1 className="casepage__title">{item.title}</h1>
          <p className="hero__lead">{language === 'de' ? item.previewTeaser ?? item.teaser : item.teaser}</p>
          {item.metric && (
            <p className="casepage__metric">
              <span className="metric">{item.metric.value}</span>
              <span className="metric__label">{item.metric.label}</span>
            </p>
          )}
        </div>
      </header>
      {item.openingArtifact && openingImage && (
        <figure className="casepage__artifact container">
          <img src={openingImage} alt={item.openingArtifact.alt} />
          <figcaption>{item.openingArtifact.caption}</figcaption>
        </figure>
      )}
      <div className="container casepage__body">
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
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
          <BookingButton label={bookingLabel} openCalendar={false} />
        </aside>
        {next && (
          <p className="casepage__next">
            {nextLabel}: <Link to={`/fallstudien/${next.slug}`}>{next.title} →</Link>
          </p>
        )}
        {import.meta.env.DEV && item.openItems && item.openItems.length > 0 && (
          <aside className="casepage__open-items" aria-labelledby="open-items-title">
            <h2 id="open-items-title">{openItemsTitle}</h2>
            <ul>
              {item.openItems.map((openItem) => <li key={openItem}>{openItem}</li>)}
            </ul>
          </aside>
        )}
      </div>
    </article>
  );
}
