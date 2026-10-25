import { Link } from 'react-router-dom';
import type { CaseStudy } from '../content/cases';
import type { Language } from '../content/i18n';

export default function CaseTeaser({ item, language = 'de' }: { item: CaseStudy; language?: Language }) {
  const label = language === 'en' ? 'Case study' : 'Fallstudie';
  const readMore = language === 'en' ? 'Read case study →' : 'Fallstudie lesen →';
  const draftLabel = language === 'en' ? 'Draft – visible only in local development' : 'Entwurf – nur in der lokalen Entwicklung';

  return (
    <article className={`case ${item.featured ? 'case--featured' : ''}`}>
      <div className="case__body">
        {import.meta.env.DEV && item.draft && <p className="draft-notice">{draftLabel}</p>}
        <p className="eyebrow eyebrow--accent">{label} · {item.tags.join(' · ')}</p>
        <h3 className="case__title">
          <Link to={`/fallstudien/${item.slug}`} className="stretched">{item.title}</Link>
        </h3>
        <p className="case__teaser">{language === 'de' ? item.previewTeaser ?? item.teaser : item.teaser}</p>
        <span className="case__more" aria-hidden="true">{readMore}</span>
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
