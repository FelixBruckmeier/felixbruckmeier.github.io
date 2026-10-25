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
