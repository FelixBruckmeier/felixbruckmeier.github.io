import { Link } from 'react-router-dom';
import { cvDataByLanguage } from '../../content/cv';
import { type Language } from '../../content/i18n';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import '../../styles/cv.css';

interface CVProps {
  language?: Language;
}

export default function CV({ language = 'de' }: CVProps) {
  const cvData = cvDataByLanguage[language];

  return (
    <div className="cv-document">
      <div className="cv-actions">
        <Link to="/#ueber-mich">{cvData.actions.back}</Link>
        <button type="button" onClick={() => window.print()}>{cvData.actions.print}</button>
      </div>
      <PageOne language={language} />
      <PageTwo language={language} />
    </div>
  );
}
