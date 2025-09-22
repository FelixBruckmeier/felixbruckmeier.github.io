import React from "react";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import {
  IconRealizeProblem,
  IconWorkaround,
  IconManualDelete,
  IconEmptyField,
} from "./ActionIcons";

const stages = [
  {
    key: "realize",
    label: "Realize Problem",
    action: "Bemerkung: Nachricht zu lang",
    icon: <IconRealizeProblem />,
  },
  {
    key: "workaround",
    label: "Workaround suchen",
    action: "User googelt Shortcut oder Hilfe",
    icon: <IconWorkaround />,
  },
  {
    key: "manual",
    label: "Manuell löschen",
    action: "Alles markieren & scrollen",
    icon: <IconManualDelete />,
  },
  {
    key: "empty",
    label: "Feld ist leer",
    action: "Neu anfangen zu tippen",
    icon: <IconEmptyField />,
  },
];

// Emotions-Verlauf + Smileys
const emotions = [
  { value: 2, emoji: "😐" }, // neutral
  { value: 1, emoji: "😠" }, // negativ
  { value: 1, emoji: "😠" }, // negativ
  { value: 3, emoji: "🙂" }, // positiv
];

export default function UserJourneyMap() {
  return (
    <div className="w-full overflow-x-auto border border-border rounded-2xl p-4 bg-background shadow-sm">
      {/* Desktop-Version */}
      <div className="hidden md:block">
        <table className="min-w-full text-sm text-center rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-muted/40">
              <th className="border border-border p-3 w-32"></th>
              {stages.map((s) => (
                <th key={s.key} className="border border-border p-3 font-semibold">
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
                  {s.icon}
                  <p className="mt-2">{s.action}</p>
                </td>
              ))}
            </tr>

            {/* Emotions */}
            <tr>
              <td className="border border-border font-medium p-3">Emotions</td>
              <td colSpan={stages.length} className="border border-border p-3">
                <div className="h-40 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={emotions.map((e, i) => ({ idx: i, value: e.value }))}>
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
              {stages.map((s, i) => (
                <td key={s.key} className="border border-border p-3 align-top">
                  {i === 0 && "Keine Delete-Funktion sichtbar"}
                  {i === 1 && "Zeitverlust durch Googeln"}
                  {i === 2 && "Mühsames Scrollen & Markieren"}
                  {i === 3 && "Erneute Eingabe nötig"}
                </td>
              ))}
            </tr>

            {/* Opportunities */}
            <tr>
              <td className="border border-border font-medium p-3">Opportunities</td>
              {stages.map((s, i) => (
                <td key={s.key} className="border border-border p-3 align-top">
                  {i === 0 && "Frühes Feedback zur Textlänge"}
                  {i === 1 && "Hilfestellungen direkt im UI"}
                  {i === 2 && "Besserer Input-Reset-Mechanismus"}
                  {i === 3 && "Motivation für Delete-Button"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile-Version */}
      <div className="md:hidden space-y-6">
        {stages.map((s, i) => (
          <div key={s.key} className="border border-border rounded-2xl p-4 space-y-3">
            {/* Nummerierter Kreis + Überschrift */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold">{s.label}</h3>
            </div>

            <div>
              <p className="font-medium">Actions</p>
              <div className="flex items-center gap-2">
                {s.icon}
                <span>{s.action}</span>
              </div>
            </div>
            <div>
              <p className="font-medium">Emotions</p>
              <span className="text-2xl">{emotions[i].emoji}</span>
            </div>
            <div>
              <p className="font-medium">Pain Points</p>
              <p className="text-sm text-muted-foreground">
                {i === 0 && "Keine Delete-Funktion sichtbar"}
                {i === 1 && "Zeitverlust durch Googeln"}
                {i === 2 && "Mühsames Scrollen & Markieren"}
                {i === 3 && "Erneute Eingabe nötig"}
              </p>
            </div>
            <div>
              <p className="font-medium">Opportunities</p>
              <p className="text-sm text-muted-foreground">
                {i === 0 && "Frühes Feedback zur Textlänge"}
                {i === 1 && "Hilfestellungen direkt im UI"}
                {i === 2 && "Besserer Input-Reset-Mechanismus"}
                {i === 3 && "Motivation für Delete-Button"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
