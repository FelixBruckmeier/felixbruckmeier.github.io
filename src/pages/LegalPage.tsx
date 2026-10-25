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
