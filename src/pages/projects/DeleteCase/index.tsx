import React, { useState } from "react";
import { useI18n } from "@/i18n";

// ✅ Artefakte & Komponenten
import UserJourneyMap from "@/components/artefacts/JourneyMap";
import InsightCard from "@/components/artefacts/InsightCard";

// Hilfsfunktion für Zeitformatierung
function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds.toFixed(0)} Sekunden`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${minutes.toFixed(0)} Minuten`;
  const hours = minutes / 60;
  if (hours < 24) return `${hours.toFixed(0)} Stunden`;
  const days = hours / 24;
  if (days < 30) return `${days.toFixed(0)} Tage`;
  const months = days / 30;
  if (months < 12) return `${months.toFixed(0)} Monate`;
  const years = months / 12;
  if (years < 10) {
    const y = Math.floor(years);
    const m = Math.round((years - y) * 12);
    return `${y} Jahre ${m > 0 ? `und ${m} Monate` : ""}`;
  }
  return `${years.toFixed(0)} Jahre`;
}

const DeleteCase: React.FC = () => {
  const { t } = useI18n();

  const [users, setUsers] = useState<number | undefined>(100); // default 100
  const [timeLoss, setTimeLoss] = useState<number | undefined>(10); // default 10 Sekunden
  const [costPerDay, setCostPerDay] = useState<number | undefined>(400); // default 400 €/Tag
  const [result, setResult] = useState<{ time: string; cost: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    if (!users && !timeLoss) {
      setError("Bitte Anzahl der User und Zeitverlust eingeben.");
      setResult(null);
      return;
    }
    if (!users) {
      setError("Bitte Anzahl der User eingeben.");
      setResult(null);
      return;
    }
    if (!timeLoss) {
      setError("Bitte Zeitverlust pro User eingeben.");
      setResult(null);
      return;
    }

    setError(null);

    // Gesamtzeitverlust in Sekunden (pro Jahr)
    const lostSeconds = users * timeLoss * 365;

    // Formatierte Zeit
    const formattedTime = formatTime(lostSeconds);

    // Kosten: verlorene Zeit in Arbeitstage (1 Tag = 8h)
    let cost = 0;
    if (costPerDay && costPerDay > 0) {
      const lostWorkDays = lostSeconds / (60 * 60 * 8);
      cost = lostWorkDays * costPerDay;
    }

    setResult({
      time: formattedTime,
      cost,
    });
  };

  return (
    <div className="container-responsive py-16 space-y-16">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Delete Message Button – UX Case</h1>
        <p className="text-muted-foreground">
          Rolle: UX Researcher · Beispiel für Micro-Interaction mit großem Impact.
        </p>
      </header>

      {/* Kontext */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Kontext</h2>
        <p className="text-muted-foreground">
          Nutzer:innen haben aktuell keine Möglichkeit, eine begonnene Eingabe
          schnell zu löschen. Stattdessen müssen sie Workarounds finden wie
          Scrollen, Alles markieren, oder mühsames Entfernen. Dieser kleine
          Friktionspunkt summiert sich zu einem massiven Zeitverlust auf
          Millionen von Usern pro Tag.
        </p>
      </section>

      {/* Journey Map */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">User Journey</h2>
        <UserJourneyMap />
      </section>

      {/* Insights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">User Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <InsightCard
            title="Hohe Frustration"
            evidence="User berichten: 'Es nervt, alles manuell löschen zu müssen.'"
            implication="Delete-Button reduziert Frust und steigert Zufriedenheit."
          />
          <InsightCard
            title="Zeitverlust"
            evidence="Ø 10 Sekunden pro Fall; hochgerechnet enorm."
            implication="Ein Klick spart Millionen Stunden jährlich."
          />
          <InsightCard
            title="Workarounds belasten"
            evidence="Suchen nach Shortcuts oder Googeln unterbricht Flow."
            implication="Inline-Lösungen sind schneller und nahtlos."
          />
        </div>
      </section>

      {/* Impact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Impact</h2>
        <p className="text-muted-foreground">
          Selbst konservativ geschätzt summiert sich der Zeitverlust auf über{" "}
          <strong>231 Jahre</strong>. Ein einzelner Delete-Button vermeidet
          unnötige Reibung und verbessert die User Experience drastisch.
        </p>

        {/* Interaktiver Rechner */}
        <div className="p-6 border border-border rounded-2xl bg-muted/30 space-y-4">
          <h3 className="font-semibold">Interaktiver Impact-Rechner</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <label className="flex flex-col text-sm">
              Anzahl User pro Tag
              <input
                type="number"
                value={users ?? ""}
                onChange={(e) =>
                  setUsers(e.target.value ? Number(e.target.value) : undefined)
                }
                className="mt-1 p-2 border border-border rounded-md"
                placeholder="z. B. 100"
              />
            </label>
            <label className="flex flex-col text-sm">
              Zeitverlust pro User (Sekunden)
              <input
                type="number"
                value={timeLoss ?? ""}
                onChange={(e) =>
                  setTimeLoss(e.target.value ? Number(e.target.value) : undefined)
                }
                className="mt-1 p-2 border border-border rounded-md"
                placeholder="z. B. 10"
              />
            </label>
            <label className="flex flex-col text-sm">
              Kosten pro Person/Tag (€)
              <input
                type="number"
                value={costPerDay ?? ""}
                onChange={(e) =>
                  setCostPerDay(e.target.value ? Number(e.target.value) : undefined)
                }
                className="mt-1 p-2 border border-border rounded-md"
                placeholder="z. B. 400"
              />
            </label>
          </div>

          <button
            onClick={calculate}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
          >
            Berechnen
          </button>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          {result && !error && (
            <div className="p-4 rounded-lg bg-white dark:bg-neutral-900 border border-border text-center space-y-2">
              <p className="text-xl font-bold">
                Geschätzter Zeitverlust: {result.time} pro Jahr
              </p>
              {result.cost > 0 && (
                <p className="text-sm text-muted-foreground">
                  (≈{" "}
                  {result.cost.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                    maximumFractionDigits: 0,
                  })}{" "}
                  jährliche Kosten)
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DeleteCase;
