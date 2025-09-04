import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import de from './de.json'
import en from './en.json'

type Dict = typeof de
type Lang = 'de' | 'en'

interface I18nContextValue {
  lang: Lang
  t: (path: string) => string
  setLang: (l: Lang) => void
}

const dictionaries: Record<Lang, Dict> = { de, en }

const I18nContext = createContext<I18nContextValue>({
  lang: 'de',
  t: (p: string) => p,
  setLang: () => {}
})

export const I18nProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'de')

  const setLang = (l: Lang) => {
    localStorage.setItem('lang', l)
    setLangState(l)
  }

  const t = (path: string) => {
    const parts = path.split('.')
    let cur: any = dictionaries[lang]
    for (const p of parts) {
      cur = cur?.[p]
    }
    return (cur ?? path) as string
  }

  const value = useMemo(() => ({ lang, t, setLang }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)