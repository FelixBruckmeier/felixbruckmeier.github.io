import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export default function NotFoundPage() {
  useTitle('Seite nicht gefunden');
  return (
    <div className="container container--narrow legal">
      <h1 className="casepage__title">Seite nicht gefunden</h1>
      <p>Diese Seite gibt es nicht (mehr).</p>
      <Link className="link" to="/">Zur Startseite</Link>
    </div>
  );
}
