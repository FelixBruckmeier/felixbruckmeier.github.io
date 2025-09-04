import React from 'react'
import { useI18n } from '@/i18n/i18n'

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useI18n()
  const next = lang === 'de' ? 'en' : 'de'
  return (
    <button
      className="px-3 py-2 rounded-lg hover:bg-muted transition"
      onClick={()=>setLang(next)}
      aria-label="Toggle language"
      title={lang === 'de' ? 'Switch to English' : 'Auf Deutsch umschalten'}
    >
      {lang.toUpperCase()}
    </button>
  )
}

export default LanguageToggle