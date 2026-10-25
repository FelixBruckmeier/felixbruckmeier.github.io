import { Link, useParams } from 'react-router-dom';
import RoleDescription from '../components/RoleDescription';
import NotFoundPage from './NotFoundPage';
import { roleSketches, roleSketchesEn } from '../content/home';
import { type Language } from '../content/i18n';
import { useTitle } from '../hooks/useTitle';

interface RolePageProps {
  language: Language;
}

export default function RolePage({ language }: RolePageProps) {
  const { slug } = useParams();
  const role = (language === 'en' ? roleSketchesEn : roleSketches).find((item) => item.slug === slug);
  useTitle(role?.title);

  if (!role) return <NotFoundPage />;

  return (
    <article className="rolepage">
      <header className="rolepage__head">
        <div className="container">
          <Link className="link link--back" to="/#rolle">{language === 'en' ? '← All roles' : '← Alle Rollen'}</Link>
          <p className="eyebrow eyebrow--accent">{language === 'en' ? 'Role and approach' : 'Rolle und Arbeitsweise'}</p>
          <h1 className="casepage__title">{role.title}</h1>
          <RoleDescription text={role.description} paragraphClassName="hero__lead" />
        </div>
      </header>
      <figure className="rolepage__sketch container">
        <img className="role-sketch-image" src={role.image} alt={role.imageAlt} />
      </figure>
      <div className="container rolepage__case">
        <p className="eyebrow eyebrow--accent">{language === 'en' ? 'IN PRACTICE' : 'AUS DER PRAXIS'}</p>
        <Link className="link" to={`/fallstudien/${role.caseSlug}`}>{role.caseLinkLabel} →</Link>
      </div>
    </article>
  );
}
