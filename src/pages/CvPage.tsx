import CV from '../components/cv/CV';
import { type Language } from '../content/i18n';
import { useTitle } from '../hooks/useTitle';

interface CvPageProps {
  language?: Language;
}

export default function CvPage({ language = 'de' }: CvPageProps) {
  useTitle(language === 'en' ? 'CV' : 'Lebenslauf');
  return <CV language={language} />;
}
