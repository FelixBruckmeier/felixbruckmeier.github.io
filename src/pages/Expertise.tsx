import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n'

const tiles = [
  { to: '/expertise/ux-strategy', title: 'UX Strategy', desc: 'Double Diamond, prioritization & decision systems' },
  { to: '/expertise/researchops', title: 'ResearchOps', desc: 'Maturity, governance, tooling, enablement' },
  { to: '/expertise/impact-measurement', title: 'Impact Measurement', desc: 'CLTV & churn models, HEART' },
  { to: '/expertise/team-leadership', title: 'Team Leadership', desc: 'Role clarity, mentoring, communities' },
  { to: '/expertise/strategic-ux-research', title: 'Strategic UX Research', desc: 'OKRs, strategic studies, RITE' },
]

const Expertise: React.FC = () => {
  const { t } = useI18n()
  return (
    <div className="container-responsive py-12">
      <h1 className="text-3xl font-semibold mb-6">{t('expertise.title')}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiles.map(tile => (
          <Link key={tile.to} to={tile.to} className="card p-5 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold">{tile.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{tile.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Expertise