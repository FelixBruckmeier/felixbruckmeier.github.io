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
