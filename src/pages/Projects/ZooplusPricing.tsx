import React from 'react'
import { useI18n } from '@/i18n/i18n'
import imgMaxdiff from '@/assets/artefacts/zooplus-pricing-maxdiff.png'
import imgHeat from '@/assets/artefacts/zooplus-pricing-heatmap.png'

const Page: React.FC = () => {
  const { t } = useI18n()
  return (
    <div className="container-responsive py-12 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">zooplus — Pricing Usability Testing</h1>
        <p className="text-muted-foreground">Rolle: UX Research Lead (2023–2024).</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Kontext & Herausforderung</h2>
        <p className="text-muted-foreground">Unklare Preisstruktur im Modul; Nutzer verstanden Unterschiede zwischen Plänen nicht.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Forschungsdesign & Methoden</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          <li className='card p-4'>MaxDiff Survey (n=120)</li>
          <li className='card p-4'>Card Sorting (Navigationslogik Preisoptionen)</li>
          <li className='card p-4'>HiFi-Prototyp-Tests (Figma)</li>
          <li className='card p-4'>Eye-Tracking Analyse</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Artefakte</h2>

<figure className="space-y-2">
  <img src={ imgMaxdiff } alt={t('captions.pricingMaxdiff')} className="w-full rounded-2xl border border-border" />
  <figcaption className="text-sm text-muted-foreground">{t('captions.pricingMaxdiff')}</figcaption>
</figure>


<figure className="space-y-2">
  <img src={ imgHeat } alt={t('captions.pricingHeatmap')} className="w-full rounded-2xl border border-border" />
  <figcaption className="text-sm text-muted-foreground">{t('captions.pricingHeatmap')}</figcaption>
</figure>

      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Synthese & Entscheidungen</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>• Klarere Informationshierarchie & Begrifflichkeiten</li>
<li>• Vergleichstabelle mit 3–4 differenzierenden Merkmalen</li>
<li>• Deutliche Hervorhebung der empfohlenen Option</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Impact</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>• +15 % Verständnis (SUS-Subscale)</li>
<li>• Höhere Plan-Selektion ohne zusätzliche Erklärtexte</li>
        </ul>
      </section>
    </div>
  )
}

export default Page
