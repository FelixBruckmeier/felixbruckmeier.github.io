import React from 'react'
import { Link } from 'react-router-dom'

const Projects: React.FC = () => {
  const cards = [
    { to: '/projects/adac', title: 'ADAC — Car Insurance Quote Flow', desc: 'Pricing-Komponente, Heatmaps, Conversion +12%' },
    { to: '/projects/zooplus-reops', title: 'zooplus — ResearchOps Scaling', desc: 'Governance, Templates, +25% schnellere Insights' },
    { to: '/projects/swiss-life', title: 'Swiss Life — B2B2C UX Research', desc: 'Journey Mapping, Conjoint, -30% Entscheidungszeit' },
    { to: '/projects/zooplus-pricing', title: 'zooplus — Pricing Usability', desc: 'MaxDiff, Eye-Tracking, SUS +15%' },
  ]

  return (
    <div className="container-responsive py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-muted-foreground">Ausgewählte Case Studies mit Kontext → Vorgehen → Impact.</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map(card => (
          <Link key={card.to} to={card.to} className="card p-5 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects