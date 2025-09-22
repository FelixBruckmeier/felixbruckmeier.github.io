import React, { useState } from "react";

export default function ImpactCalculator() {
  const [usersPerDay, setUsersPerDay] = useState<number>(1000000); // Default
  const [affectedPercent, setAffectedPercent] = useState<number>(2); // Default 2 %
  const [secondsLost, setSecondsLost] = useState<number>(10); // Default 10 Sek
  const [costPerMonth, setCostPerMonth] = useState<number>(5000); // Default € pro Person-Monat

  const [result, setResult] = useState<{
    years: number;
    months: number;
    cost: number;
  } | null>(null);

  const calculate = () => {
    const affectedUsers = usersPerDay * (affectedPercent / 100);
    const secondsPerDay = affectedUsers * secondsLost;
    const secondsPerYear = secondsPerDay * 365;

    const years = secondsPerYear / (60 * 60 * 24 * 365); // Sekunden → Jahre
    const months = years * 12; // Jahre → Monate
    const cost = months * costPerMonth; // Personenmonate * €

    setResult({
      years,
      months,
      cost,
    });
  };

  return (
    <div className="rounded-2xl border border-border p-6 space-y-6">
      <h3 className="text-lg font-semibold">Impact Calculator</h3>

      {/* Eingaben */}
      <div className="grid md:grid-cols-2 gap-4">
        <label className="flex flex-col text-sm text-left">
          Nutzer pro Tag
          <input
            type="number"
            value={usersPerDay}
            onChange={(e) => setUsersPerDay(Number(e.target.value))}
            className="mt-1 border rounded-md p-2"
          />
        </label>

        <label className="flex flex-col text-sm text-left">
          Anteil betroffen (%) 
          <input
            type="number"
            value={affectedPercent}
            onChange={(e) => setAffectedPercent(Number(e.target.value))}
            className="mt-1 border rounded-md p-2"
          />
        </label>

        <label className="flex flex-col text-sm text-left">
          Zeitverlust pro Fall (Sekunden)
          <input
            type="number"
            value={secondsLost}
            onChange={(e) => setSecondsLost(Number(e.target.value))}
            className="mt-1 border rounded-md p-2"
          />
        </label>

        <label className="flex flex-col text-sm text-left">
          Kosten pro Personen-Monat (€)
          <input
            type="number"
            value={costPerMonth}
            onChange={(e) => setCostPerMonth(Number(e.target.value))}
            className="mt-1 border rounded-md p-2"
          />
        </label>
      </div>

      {/* Button */}
      <button
        onClick={calculate}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
      >
        Berechnen
      </button>

      {/* Ergebnis */}
      {result && (
        <div className="p-4 rounded-lg bg-muted/40 border border-border text-center space-y-2">
          <p className="text-xl font-bold">
            ≈ {result.years.toFixed(0)} Jahre pro Jahr
          </p>
          <p className="text-sm text-muted-foreground">
            (entspricht ≈ {result.months.toFixed(0)} Personen-Monaten <br />
            ≈ {result.cost.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            })})
          </p>
        </div>
      )}
    </div>
  );
}
