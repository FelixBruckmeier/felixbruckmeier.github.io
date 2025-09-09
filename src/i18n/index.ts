import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: { translation: { headline: 'UX Research Director – Wirkung vor Output' } },
  en: { translation: { headline: 'UX Research Director – Impact over Output' } }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'de',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
