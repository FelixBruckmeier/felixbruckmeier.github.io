// scripts/check-missing-translations.js
// ---------------------------------------------------------
// 🧭 Felix Bruckmeier Portfolio – i18n Checker & Filler
// Vergleicht en.json & de.json und fügt fehlende Keys mit Platzhaltern hinzu.
// ---------------------------------------------------------

import fs from "fs";
import path from "path";

// --- Pfade zu den Sprachdateien ---
const localesPath = path.resolve("./src/locales");
const enPath = path.join(localesPath, "en.json");
const dePath = path.join(localesPath, "de.json");

// --- Dateien laden ---
const en = JSON.parse(fs.readFileSync(enPath, "utf-8"));
const de = JSON.parse(fs.readFileSync(dePath, "utf-8"));

// --- Rekursive Funktion zum Suchen & Ergänzen ---
function fillMissingKeys(base, compare, prefix = "") {
  let missing = [];

  for (const key in base) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const baseValue = base[key];
    const compareValue = compare?.[key];

    if (typeof baseValue === "object" && !Array.isArray(baseValue)) {
      // rekursiv tiefer gehen
      if (typeof compareValue !== "object" || Array.isArray(compareValue)) {
        compare[key] = {};
      }
      const deeperMissing = fillMissingKeys(baseValue, compare[key], fullKey);
      missing = missing.concat(deeperMissing);
    } else if (compareValue === undefined) {
      compare[key] = `[MISSING: ${fullKey}]`;
      missing.push(fullKey);
    }
  }

  return missing;
}

// --- Hauptlogik ---
const missing = fillMissingKeys(en, de);

// --- Ergebnisse speichern ---
fs.writeFileSync(dePath, JSON.stringify(de, null, 2), "utf-8");

if (missing.length === 0) {
  console.log("✅ Alle Keys aus en.json sind bereits in de.json vorhanden!");
} else {
  console.log(`⚠️ ${missing.length} fehlende Übersetzungen wurden in de.json ergänzt:\n`);
  missing.forEach((k) => console.log(" - " + k));
  console.log("\n💡 Platzhalter wurden im Format [MISSING: key] hinzugefügt.");
}

console.log("\n✅ Fertig!");
