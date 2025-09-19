import React from 'react'
import { useI18n } from '@/i18n'

const About: React.FC = () => {
  const { t } = useI18n()
  return (
    <div className="container-responsive py-12 space-y-8">
      <h1 className="text-3xl font-semibold">{t('about.title')}</h1>
      <p className="text-lg text-muted-foreground">{t('about.lead')}</p>

      <section>
        <h2 className="text-xl font-semibold mb-4">{t('about.pillarsTitle')}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {t('about.pillars').split ? null : null}
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {/** Hardcode 3 cards for simplicity using translations */}
          <div className="card p-4">Empowerment</div>
          <div className="card p-4">Impact Orientation</div>
          <div className="card p-4">Continuous Learning</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-3">
          <li className="card p-4">ATOSS — UXR Lead (01/2025–05/2025)</li>
          <li className="card p-4">zooplus — UXR Lead (07/2022–12/2024)</li>
          <li className="card p-4">Swiss Life — Sr UXR (05/2020–06/2022)</li>
          <li className="card p-4">Kaiser X Labs — UXR (08/2018–04/2020)</li>
          <li className="card p-4">empiriecom — UXR (02/2016–07/2018)</li>
        </ul>
      </section>
    </div>
  )
}
export default About