import React from "react";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { IconHomepage, IconPLP, IconPDP, IconCart } from "./UserJourney_Icons";

// Journey-Stages mit Icons für Actions
const stages = [
  {
    key: "tp1",
    label: "Homepage",
    action: "Inform, discover prices and offers.",
    pain: "Keine großen Probleme – Nutzer:innen verstehen Preise als ersten Überblick.",
    opp: "Preise stärker als Qualitätsindikator inszenieren (Trust-Building).",
    icon: <IconHomepage />,
  },
  {
    key: "tp2",
    label: "PLP",
    action: "Compare products and prices.",
    pain: "Unklarheit über Preiskomponenten – Abo vs. Promo, Strike vs. From vs. RRP.",
    opp: "Preiskomponenten vereinheitlichen, Jargon vermeiden, konsistente Darstellung.",
    icon: <IconPLP />,
  },
  {
    key: "tp3",
    label: "PDP",
    action: "Buy, inform about variants and prices.",
    pain: "Hohe kognitive Last – schwer zu berechnen, welches Angebot (Menge, Rabatt, Basispreis, Abo) am besten ist.",
    opp: "Vergleichslogik vereinfachen, klare Hervorhebung von Best-Choice, Reduktion redundanter Infos.",
    icon: <IconPDP />,
  },
  {
    key: "tp4",
    label: "Cart",
    action: "Buy, review products and prices.",
    pain: "Kaum Probleme – Darstellung ist klar, Erwartungen werden bestätigt.",
    opp: "Checkout als Vertrauensmoment nutzen – Sicherheit/Trust-Elemente verstärken, Cross-Selling platzieren.",
    icon: <IconCart />,
  },
];

// Emotions-Kurve (1=negativ, 2=neutral, 3=positiv)
const emotions = [
  { value: 3, emoji: "😊" }, // Homepage positiv
  { value: 2, emoji: "😕" }, // PLP gemischt
  { value: 1, emoji: "😟" }, // PDP frustrierend
  { value: 3, emoji: "😌" }, // Cart erleichternd/positiv
];

export default function UserJourney_P() {
  return (
    <div className="w-full overflow-x-auto border border-border rounded-2xl p-4 bg-background shadow-sm">
      {/* Desktop-Version */}
      <div className="hidden md:block">
        <table className="min-w-full text-sm text-center rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-muted/40">
              <th className="border border-border p-3 w-32"></th>
              {stages.map((s) => (
                <th
                  key={s.key}
                  className="border border-border p-3 font-semibold"
                >
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Actions */}
            <tr>
              <td className="border border-border font-medium p-3">Actions</td>
              {stages.map((s) => (
                <td key={s.key} className="border border-border p-3 align-top">
                  <div className="flex flex-col items-center space-y-2">
                    {s.icon}
                    <p>{s.action}</p>
                  </div>
                </td>
              ))}
            </tr>

            {/* Emotions */}
            <tr>
              <td className="border border-border font-medium p-3">Emotions</td>
              <td colSpan={stages.length} className="border border-border p-3">
                <div className="h-40 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={emotions.map((e, i) => ({ idx: i, value: e.value }))}
                    >
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#2563EB"
                        strokeWidth={3}
                        dot={{ r: 0 }}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  {/* Smileys exakt auf Linie platzieren */}
                  <div className="absolute inset-0 grid grid-cols-4">
                    {emotions.map((e, i) => (
                      <div
                        key={i}
                        className="flex justify-center"
                        style={{
                          transform: `translateY(${(3 - e.value) * 25}px)`,
                        }}
                      >
                        <span className="text-2xl">{e.emoji}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </td>
            </tr>

            {/* Pain Points */}
            <tr>
              <td className="border border-border font-medium p-3">Pain Points</td>
              {stages.map((s) => (
                <td key={s.key} className="border border-border p-3 align-top">
                  {s.pain}
                </td>
              ))}
            </tr>

            {/* Opportunities */}
            <tr>
              <td className="border border-border font-medium p-3">Opportunities</td>
              {stages.map((s) => (
                <td key={s.key} className="border border-border p-3 align-top">
                  {s.opp}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile-Version */}
      <div className="md:hidden space-y-6">
        {stages.map((s, i) => (
          <div
            key={s.key}
            className="border border-border rounded-2xl p-4 space-y-3"
          >
            {/* Nummerierter Kreis + Überschrift */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold">{s.label}</h3>
            </div>

            <div>
              <p className="font-medium">Actions</p>
              <div className="flex flex-col items-center space-y-2">
                {s.icon}
                <p>{s.action}</p>
              </div>
            </div>
            <div>
              <p className="font-medium">Emotions</p>
              <span className="text-2xl">{emotions[i].emoji}</span>
            </div>
            <div>
              <p className="font-medium">Pain Points</p>
              <p className="text-sm text-muted-foreground">{s.pain}</p>
            </div>
            <div>
              <p className="font-medium">Opportunities</p>
              <p className="text-sm text-muted-foreground">{s.opp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
