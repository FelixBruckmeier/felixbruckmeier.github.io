// src/pages/Projects.tsx
import React from "react";
import { Link } from "react-router-dom";
import Tile from "@/components/ui/Tile";
import { H1, Body, Small } from "@/components/ui/Tokens";
import { spacing, layout } from "@/lib/tokens";
import { cn } from "@/lib/utils";

const Projects: React.FC = () => {
  const cards = [
    {
      to: "/projects/car-insurance",
      title: "ADAC — Car Insurance Quote Flow",
      desc: "Pricing-Komponente, Heatmaps, Conversion +12%",
    },
    {
      to: "/projects/zooplus-reops",
      title: "zooplus — ResearchOps Scaling",
      desc: "Governance, Templates, +25% schnellere Insights",
    },
    {
      to: "/projects/swiss-life-b2b2c",
      title: "Swiss Life — B2B2C UX Research",
      desc: "Journey Mapping, Conjoint, -30% Entscheidungszeit",
    },
    {
      to: "/projects/zooplus-pricing",
      title: "zooplus — Pricing Usability",
      desc: "MaxDiff, Eye-Tracking, SUS +15%",
    },
    {
      to: "/projects/delete-case",
      title: "Delete Case — Micro-Interaction Impact",
      desc: "Ein Button, der 231 Jahre an Nutzerzeit spart",
    },
    {
      to: "/projects/atoss-reops",
      title: "ATOSS — ResearchOps Strategy",
      desc: "Assessment, Governance, Roadmap & Quick Wins",
    },
  ];

  return (
    <div className={cn(layout.container, spacing.py12)}>
      <header className={spacing.mb6}>
        <H1>Projects</H1>
        <Body className="text-muted-foreground">
          Ausgewählte Case Studies mit Kontext → Vorgehen → Impact.
        </Body>
      </header>

      <div className={cn(layout.gridCols3, spacing.gap6)}>
        {cards.map((card) => (
          <Link key={card.to} to={card.to} className={layout.block}>
            <Tile className={cn(spacing.p6, "h-full")}>
              <h3>{card.title}</h3>
              <Small className="text-muted-foreground">{card.desc}</Small>
            </Tile>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
