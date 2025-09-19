import React from 'react'
import { useI18n } from '@/i18n'
import imgMatrix from '@/assets/artefacts/zooplus-reops-matrix.png'
import imgDash from '@/assets/artefacts/zooplus-dashboard.png'

const Page: React.FC = () => {
  const { t } = useI18n()
  return (
    <div className="container-responsive py-12 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">zooplus — ResearchOps Scaling</h1>
        <p className="text-muted-foreground">Rolle: UX Research Lead (2022–2024).</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Kontext & Herausforderung</h2>
        <p className="text-muted-foreground">20+ parallele Projekte, inkonsistente Methoden, höhere Koordinationskosten – Bedarf an skalierten ResearchOps.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Forschungsdesign & Methoden</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          <li className='card p-4'>Stakeholder-Interviews (n=15)</li>
          <li className='card p-4'>Tool-Benchmarking (Maze, Baymard, Mouseflow)</li>
          <li className='card p-4'>Affinity-Mapping Workshops</li>
          <li className='card p-4'>ResearchOps Maturity Matrix & Governance-Framework</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Artefakte</h2>

<figure className="space-y-2">
  <img src={ imgMatrix } alt={t('captions.reopsMatrix')} className="w-full rounded-2xl border border-border" />
  <figcaption className="text-sm text-muted-foreground">{t('captions.reopsMatrix')}</figcaption>
</figure>


<figure className="space-y-2">
  <img src={ imgDash } alt={t('captions.reopsDashboard')} className="w-full rounded-2xl border border-border" />
  <figcaption className="text-sm text-muted-foreground">{t('captions.reopsDashboard')}</figcaption>
</figure>

      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Synthese & Entscheidungen</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>• Einführung eines ReOps-Governance-Frameworks (6 Wirkungsbereiche)</li>
<li>• Template-Library & Trainings zur Demokratisierung von Research</li>
<li>• Definition von SLA/Intake-Prozessen für Priorisierung</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Impact</h2>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li>• +40 % Nutzung der Templates</li>
<li>• 25 % schnellere Insight-Zyklen</li>
<li>• Höhere Konsistenz & Qualität der Studien</li>
        </ul>
      </section>
    </div>
  )
}

export default Page
