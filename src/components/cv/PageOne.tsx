import { cvDataByLanguage } from '../../content/cv';
import { type Language } from '../../content/i18n';
import ContactGrid from './ContactGrid';
import ImpactCard from './ImpactCard';

interface PageOneProps {
  language?: Language;
}

export default function PageOne({ language = 'de' }: PageOneProps) {
  const cvData = cvDataByLanguage[language];
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
