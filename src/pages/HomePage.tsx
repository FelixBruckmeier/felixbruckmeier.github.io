import { Link } from 'react-router-dom';
import Section from '../components/Section';
import BookingButton from '../components/BookingButton';
import CaseTeaser from '../components/CaseTeaser';
import ContactForm from '../components/ContactForm';
import RoleDescription from '../components/RoleDescription';
import { casesByLanguage } from '../content/cases';
import { config } from '../content/config';
import {
  role,
  roleSketches,
  roleSketchesEn,
  contactEntryPoints,
  contactEntryPointsEn,
  casesSection,
} from '../content/home';
import { type Language, translations } from '../content/i18n';
import { useTitle } from '../hooks/useTitle';

interface HomePageProps {
  language: Language;
}

type RoleFeature = (typeof roleSketches)[number] | (typeof roleSketchesEn)[number];

interface RoleSketchProps {
  feature: RoleFeature;
  index: number;
  language: Language;
}

function RolePerspective({ feature, index, language }: RoleSketchProps) {
  return (
    <li className="role-perspective">
      <div className="role-perspective__content">
        <p className="eyebrow">{String(index + 1).padStart(2, '0')}</p>
        <h3>{feature.title}</h3>
        <RoleDescription text={feature.description} />
        <div className="role-perspective__ctas">
          <Link className="link role-perspective__role-link" to={`/rollen/${feature.slug}`}>
            {language === 'en' ? 'More about the role →' : 'Mehr zur Rolle →'}
          </Link>
          <Link className="role-perspective__case-link" to={`/fallstudien/${feature.caseSlug}`}>
              {language === 'en' ? 'Case study: ' : 'Fallstudie: '}{feature.caseLinkLabel} →
            </Link>
        </div>
      </div>
      <figure className="role-perspective__visual">
        <Link className="role-perspective__image-link" to={`/rollen/${feature.slug}`}>
          <img className="role-sketch-image" src={feature.preview} alt={feature.previewAlt} />
        </Link>
      </figure>
    </li>
  );
}

export default function HomePage({ language }: HomePageProps) {
  useTitle();
  const t = translations[language];
  const visibleCases = casesByLanguage[language].filter((c) => import.meta.env.DEV || !c.draft);
  const featured = visibleCases.filter((c) => c.featured);
  const others = visibleCases.filter((c) => !c.featured);
  const visibleRoleSketches = language === 'en' ? roleSketchesEn : roleSketches;

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero__main">
            <div className="hero__content">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1 id="hero-title" className="hero__title">
                {t.hero.headlineStart}<em>{t.hero.headlineEmphasis}</em>{t.hero.headlineEnd}
              </h1>
              <p className="hero__lead">{t.hero.lead}</p>
              <div className="hero__ctas">
                <BookingButton label={t.hero.primaryCta} openCalendar={t.hero.primaryCta === 'Discuss a project' || t.hero.primaryCta === 'Vorhaben besprechen'} />
                <Link className="link" to="/#fallstudien">{t.hero.secondaryCta} ↓</Link>
              </div>
            </div>
            <img
              className="hero__photo"
              src="/felix-bruckmeier.png"
              alt={language === 'en' ? `Portrait of ${config.name}` : `Porträt von ${config.name}`}
              width={320}
              height={462}
            />
          </div>
          <ul className="hero__trust">
            {t.hero.trust.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section
        id="rolle"
        title={language === 'de' ? 'Drei Rollen in der KI-Transformation' : 'Three roles in AI transformation'}
        intro={language === 'de'
          ? 'Ich gestalte Lösungen, begleite Veränderungen und befähige Teams – mit dem Blick eines UX Managers auf Menschen, Technologie und Organisation.'
          : 'I design solutions, guide change and empower teams – bringing a UX manager’s perspective to people, technology and organisations.'}
      >
        {language === 'en' && <p className="eyebrow">{role}</p>}
        <ol className="role-perspectives">
          {visibleRoleSketches.map((feature, index) => (
            <RolePerspective
              key={feature.title}
              feature={feature}
              index={index}
              language={language}
            />
          ))}
        </ol>
      </Section>

      <Section id="fallstudien" title={casesSection.title} intro={casesSection.intro} tone="raised">
        <div className="cases">
          {featured.map((c) => <CaseTeaser key={c.slug} item={c} language={language} />)}
          <div className="cases__grid">
            {others.map((c) => <CaseTeaser key={c.slug} item={c} language={language} />)}
          </div>
        </div>
      </Section>

      <section id="kontakt" className="section section--contact" aria-labelledby="kontakt-title">
        <div className="container contact">
          <div>
            <h2 id="kontakt-title" className="section__title">{language === 'en' ? 'Get in touch when …' : 'Holt mich, wenn …'}</h2>
            <ul>
              {(language === 'en' ? contactEntryPointsEn : contactEntryPoints).map((entry) => <li key={entry}>{entry}</li>)}
            </ul>
            <h3 className="section__title">{t.contact.title}</h3>
            <BookingButton
              label={t.contact.primaryCta}
              openCalendar={t.contact.primaryCta === 'Discuss a project' || t.contact.primaryCta === 'Vorhaben besprechen'}
            />
            {config.responseTime.trim() && (
              <p className="contact__response">{t.contact.responsePrefix} {config.responseTime}.</p>
            )}
          </div>
          <div>
            <p className="contact__formintro">{t.contact.formIntro}</p>
            <ContactForm language={language} />
          </div>
        </div>
      </section>
    </>
  );
}
