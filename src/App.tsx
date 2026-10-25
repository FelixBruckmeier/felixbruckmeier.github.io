import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import HomePage from './pages/HomePage';
import CasePage from './pages/CasePage';
import RolePage from './pages/RolePage';
import CvPage from './pages/CvPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import { imprint, imprintEn, privacy, privacyEn } from './content/legal';
import { type Language, translations } from './content/i18n';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'de';
  }

  const saved = window.localStorage.getItem('felix-language');
  return saved === 'en' ? 'en' : 'de';
};

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('felix-language', language);
  }, [language]);

  return (
    <>
      <a className="skip-link" href="#main">{t.accessibility.skipToContent}</a>
      <ScrollManager />
      <Header language={language} onChangeLanguage={setLanguage} />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/rollen/:slug" element={<RolePage language={language} />} />
          <Route path="/fallstudien/:slug" element={<CasePage language={language} />} />
          <Route path="/lebenslauf" element={<CvPage language={language} />} />
          <Route path="/impressum" element={<LegalPage content={language === 'en' ? imprintEn : imprint} />} />
          <Route path="/datenschutz" element={<LegalPage content={language === 'en' ? privacyEn : privacy} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer language={language} />
    </>
  );
}
