"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { Body, Subtitle } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { spacing } from "@/lib/tokens";
import { skills, themeColors } from "@/data/skills";
import SkillRadarChart from "@/assets/visuals/teamleadership/skillassessment/SkillRadarChart";
import SkillProgressionChart from "@/assets/visuals/teamleadership/skillassessment/SkillProgressionChart";

export default function Skillmap() {
  const [submitted, setSubmitted] = useState(false);
  const [ratings, setRatings] = useState<Record<string, number>>({});

  const handleChange = (skill: string, value: number) => {
    setRatings((prev) => ({ ...prev, [skill]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => setSubmitted(false);

  // 🔹 Aggregiere Scores nach Theme (für Radar)
  const themeAverages = Object.values(
    skills.reduce((acc, { theme, skill }) => {
      const val = ratings[skill] ?? 0;
      if (!acc[theme]) acc[theme] = { theme, total: 0, count: 0 };
      acc[theme].total += val;
      acc[theme].count += 1;
      return acc;
    }, {} as Record<string, { theme: string; total: number; count: number }>)
  ).map(({ theme, total, count }) => ({
    theme,
    value: count ? total / count : 0,
  }));

  // 🔹 Chart-Daten für Radar & Progression
  const radarData = themeAverages.reduce(
    (acc, { theme, value }) => ({ ...acc, [theme]: value }),
    {}
  );
  const barData = Object.entries(ratings).map(([skill, value]) => ({
    skill,
    value,
  }));

  // 🔹 Ergebnisse anzeigen
  if (submitted) {
    return (
      <div className="text-center">
        <Subtitle>Your Skill Map</Subtitle>

        <div className={cn("grid md:grid-cols-2 gap-8", spacing.mt10)}>
          <div className="p-6 border border-border rounded-xl bg-background">
            <SkillRadarChart data={radarData} />
          </div>
          <div className="p-6 border border-border rounded-xl bg-background">
            <SkillProgressionChart data={ratings} />
          </div>
        </div>

        <Body className={cn(spacing.mt8, "text-muted-foreground max-w-2xl mx-auto")}>
          This visualization shows your average proficiency by theme (Radar)
          and detailed skill ratings (Bars). Use it to identify your strongest areas
          and those for growth.
        </Body>

        <div className={cn("flex justify-center", spacing.mt8)}>
          <Button variant="secondary" onClick={handleReset}>
            Reassess Skills
          </Button>
        </div>
      </div>
    );
  }

  // 🧩 Formularanzeige
  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
      <Subtitle>Rate Your Skills (1–5)</Subtitle>

      <div className={cn("space-y-10", spacing.mt8)}>
        {Object.entries(
          skills.reduce((acc, s) => {
            if (!acc[s.theme]) acc[s.theme] = [];
            acc[s.theme].push(s.skill);
            return acc;
          }, {} as Record<string, string[]>)
        ).map(([theme, skillList]) => (
          <div
            key={theme}
            className="p-6 border border-border rounded-xl bg-background/60"
            style={{ borderLeft: `6px solid ${themeColors[theme]}` }}
          >
            <h3 className="font-semibold text-lg mb-4">{theme}</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {skillList.map((skill) => (
                <div key={skill}>
                  <label htmlFor={skill} className="block text-sm font-medium mb-2">
                    {skill}
                  </label>
                  <input
                    type="range"
                    id={skill}
                    min="1"
                    max="5"
                    value={ratings[skill] ?? 3}
                    onChange={(e) => handleChange(skill, Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="text-sm text-muted-foreground mt-1">
                    {ratings[skill] ?? 3} / 5
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={cn("flex justify-center", spacing.mt12)}>
        <Button type="submit" size="lg" variant="primary">
          Generate Skill Map
        </Button>
      </div>
    </form>
  );
}
