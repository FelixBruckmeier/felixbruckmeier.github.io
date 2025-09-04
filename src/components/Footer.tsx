import React from 'react'
import { useI18n } from '@/i18n/i18n'

const Footer: React.FC = () => {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border mt-12">
      <div className="container-responsive py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">{t('footer.rights').replace('{year}', String(year))}</p>
        <nav className="flex items-center gap-4 text-sm">
          <a className="hover:underline" href="/imprint">Imprint</a>
          <a className="hover:underline" href="/privacy">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer