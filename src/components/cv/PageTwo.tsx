import { cvDataByLanguage } from '../../content/cv';
import { type Language } from '../../content/i18n';
import ExperienceItem from './ExperienceItem';
import SkillGroup from './SkillGroup';

interface PageTwoProps {
  language?: Language;
}

export default function PageTwo({ language = 'de' }: PageTwoProps) {
  const cvData = cvDataByLanguage[language];
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
