import React from 'react'
import { useI18n } from '@/i18n'
import imgPricing from '@/assets/artefacts/adac-pricing.png'
import imgHeat from '@/assets/artefacts/adac-heatmap.png'

const Page: React.FC = () => {
  const { t } = useI18n()
  return (
    <div className="container-responsive py-12 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">ADAC — Car Insurance Quote Flow</h1>
        <p className="text-muted-foreground">Rolle: UX Researcher (2019).</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Kontext & Herausforderung</h2>
        <p className="text-muted-foreground">Hohe Abbruchraten im Angebotsprozess; Nutzer fanden die Preisoptionen schwer vergleichbar.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Forschungsdesign & Methoden</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          <li className='card p-4'>Remote moderierte Usability Tests (n=12)</li>
          <li className='card p-4'>Contextual Inquiries (Beratungssituation)</li>
          <li className='card p-4'>Kano-Analyse zur Feature-Priorisierung</li>
          <li className='card p-4'>Mouseflow-Heatmaps & Clicktracking</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Artefakte</h2>

<figure className="space-y-2">
  <img src={ imgPricing } alt={t('captions.adacPricing')} className="w-full rounded-2xl border border-border" />
  <figcaption className="text-sm text-muted-foreground">{t('captions.adacPricing')}</figcaption>
</figure>


<figure className="space-y-2">
  <img src={ imgHeat } alt={t('captions.adacHeatmap')} className="w-full rounded-2xl border border-border" />
  <figcaption className="text-sm text-muted-foreground">{t('captions.adacHeatmap')}</figcaption>
</figure>

      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Synthese & Entscheidungen</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>• Redesign der Pricing-Komponente in drei klaren Paketen (Basic/Standard/Premium)</li>
<li>• Zusatzleistungen in Tooltips & Sekundärinformationen ausgelagert</li>
<li>• Primäre CTAs visuell priorisiert; sekundäre Aktionen entlastet</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Impact</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>• +18 % Completion Rate im Flow</li>
<li>• +12 % Conversion</li>
<li>• Weniger Support-Nachfragen zur Preislogik</li>
        </ul>
      </section>
    </div>
  )
}

export default Page
