import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingButton from './BookingButton';
import { config } from '../content/config';
import { type Language, translations } from '../content/i18n';

interface HeaderProps {
  language: Language;
  onChangeLanguage: (language: Language) => void;
}

export default function Header({ language, onChangeLanguage }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand" onClick={() => setOpen(false)}>
          {config.name}
        </Link>

        <div className="header__tools">
          <div className="header__language-switch" role="group" aria-label={t.accessibility.languageToggle}>
            {(['de', 'en'] as const).map((option) => (
              <button
                key={option}
                type="button"
                className={`header__lang-button ${language === option ? 'is-active' : ''}`}
                aria-pressed={language === option}
                onClick={() => onChangeLanguage(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="header__toggle"
            aria-expanded={open}
            aria-controls="hauptnavigation"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? t.menu.close : t.menu.open}
          </button>
        </div>

        <nav id="hauptnavigation" aria-label={t.accessibility.mainNav} className={`header__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {t.nav.map((n) => (
              <li key={n.href}>
                <Link to={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <BookingButton label={t.booking} variant="small" />
        </nav>
      </div>
    </header>
  );
}
