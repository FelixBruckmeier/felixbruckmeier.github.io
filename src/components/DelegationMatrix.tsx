import { Link } from 'react-router-dom';
import { cases } from '../content/cases';
import { delegationMatrix as matrix } from '../content/home';

const involvementClasses: Record<number, string> = {
  1: 'cell--light',
  2: 'cell--light',
  3: 'cell--mid',
  4: 'cell--strong',
} as const;

const orderedZones = [...matrix.zones].sort((a, b) => {
  if (a.errorCost !== b.errorCost) return a.errorCost === 'hoch' ? -1 : 1;
  if (a.taskOpenness !== b.taskOpenness) return a.taskOpenness === 'klar' ? -1 : 1;
  return 0;
});

export default function DelegationMatrix() {
  return (
    <>
      <p className="draft-notice">{matrix.fixedBoundary}</p>
      <figure className="matrix">
        <div className="matrix__text">
          <h3>{matrix.title}</h3>
          <p>{matrix.axes.x.question}: {matrix.axes.x.start} bis {matrix.axes.x.end}</p>
          <p>{matrix.axes.y.question}: {matrix.axes.y.start} bis {matrix.axes.y.end}</p>
        </div>
        <div className="matrix__chart">
          <ol
            className="matrix__grid"
            aria-label={`${matrix.title}: ${matrix.axes.y.question} und ${matrix.axes.x.question}`}
          >
            {orderedZones.map((zone) => {
              const linkedCase = cases.find((item) => item.slug === zone.caseSlug);
              const hasExample = !zone.exampleTask.startsWith('[TODO:');

              return (
                <li key={zone.title} className={`cell ${involvementClasses[zone.humanInvolvement]}`}>
                  <strong>{zone.title}</strong>
                  <span>Beteiligungsgrad: {zone.humanInvolvement} von 4</span>
                  {hasExample && <span>Beispiel: {zone.exampleTask}</span>}
                  {linkedCase && <Link to={`/fallstudien/${linkedCase.slug}`}>{linkedCase.title}</Link>}
                </li>
              );
            })}
          </ol>
        </div>
      </figure>
      <section className="trust-block" aria-labelledby="matrix-legende">
        <h4 id="matrix-legende" className="trust-block__title">{matrix.legend.title}</h4>
        <p>{matrix.legend.scale}</p>
        <p>{matrix.legend.low} → {matrix.legend.high}</p>
      </section>
    </>
  );
}
