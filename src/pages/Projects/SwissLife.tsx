import React from 'react'
import { useI18n } from '@/i18n/i18n'
import imgJourney from '@/assets/artefacts/swisslife-journey.png'
import imgConjoint from '@/assets/artefacts/swisslife-conjoint.png'

const Page: React.FC = () => {
  const { t } = useI18n()
  return (
    <div className="container-responsive py-12 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Swiss Life — B2B2C UX Research</h1>
        <p className="text-muted-foreground">Rolle: Senior UX Researcher (2020–2022).</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Kontext & Herausforderung</h2>
        <p className="text-muted-foreground">Digitale Versicherungsplattform mit B2B2C-Prozessen; Bedarf an klaren Entscheidungsgrundlagen für Feature-Ausbau.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Forschungsdesign & Methoden</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          <li className='card p-4'>Design Thinking Workshops (5 Iterationen)</li>
          <li className='card p-4'>Conjoint-Analyse für Produktfeatures</li>
          <li className='card p-4'>Customer Journey Mapping</li>
          <li className='card p-4'>Rapid Prototyping (RITE)</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Artefakte</h2>

<figure className="space-y-2">
  <img src={ imgJourney } alt={t('captions.swissJourney')} className="w-full rounded-2xl border border-border" />
  <figcaption className="text-sm text-muted-foreground">{t('captions.swissJourney')}</figcaption>
</figure>


<figure className="space-y-2">
  <img src={ imgConjoint } alt={t('captions.swissConjoint')} className="w-full rounded-2xl border border-border" />
  <figcaption className="text-sm text-muted-foreground">{t('captions.swissConjoint')}</figcaption>
</figure>

      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Synthese & Entscheidungen</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>• Priorisierung von Features mit hoher Zahlungs-/Nutzungsbereitschaft</li>
<li>• Optimierung kritischer Journey-Schritte mit hoher Abbruchquote</li>
<li>• Einführung eines iterativen Validierungszyklus (RITE)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Impact</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>• 30 % kürzere Entscheidungszyklen</li>
<li>• Höhere Klarheit bei Stakeholdern über Roadmap-Prioritäten</li>
        </ul>
      </section>
    </div>
  )
}

export default Page
