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
