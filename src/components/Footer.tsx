import { Link } from 'react-router-dom';
import { config } from '../content/config';
import { type Language, translations } from '../content/i18n';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {config.name} — {t.footer.rights}</p>
        <ul>
          <li><Link to="/impressum">{t.footer.imprint}</Link></li>
          <li><Link to="/datenschutz">{t.footer.privacy}</Link></li>
          {config.linkedinUrl && <li><a href={config.linkedinUrl}>LinkedIn</a></li>}
          {config.githubUrl && <li><a href={config.githubUrl}>GitHub</a></li>}
        </ul>
      </div>
    </footer>
  );
}
