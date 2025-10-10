// scripts/translate-missing-translations.js
// ---------------------------------------------------------
// 🧭 Felix Bruckmeier Portfolio – OpenAI Übersetzer (EN → DE)
// Ergänzt fehlende deutsche Übersetzungen automatisch via GPT-5
// ---------------------------------------------------------

import fs from "fs";
import path from "path";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// --- Pfade ---
const localesPath = path.resolve("./src/locales");
const enPath = path.join(localesPath, "en.json");
const dePath = path.join(localesPath, "de.json");
const termsPath = path.resolve("./scripts/keep-terms.json");

// --- Dateien laden ---
const en = JSON.parse(fs.readFileSync(enPath, "utf-8"));
const de = JSON.parse(fs.readFileSync(dePath, "utf-8"));
const keepTerms = JSON.parse(fs.readFileSync(termsPath, "utf-8"));

// --- Hilfsfunktion zum Finden fehlender Keys ---
function findMissing(base, compare, prefix = "") {
  let missing = {};

  for (const key in base) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const baseValue = base[key];
    const compareValue = compare?.[key];

    if (typeof baseValue === "object" && !Array.isArray(baseValue)) {
      const deeper = findMissing(baseValue, compareValue || {}, fullKey);
      Object.assign(missing, deeper);
    } else if (
      compareValue === undefined ||
      (typeof compareValue === "string" && compareValue.startsWith("[MISSING"))
    ) {
      missing[fullKey] = baseValue;
    }
  }

  return missing;
}

const missing = findMissing(en, de);

if (Object.keys(missing).length === 0) {
  console.log("✅ Keine fehlenden Übersetzungen in de.json gefunden!");
  process.exit(0);
}

// --- Backup ---
const backupName = `de_backup_${new Date().toISOString().split("T")[0]}.json`;
fs.copyFileSync(dePath, path.join(localesPath, backupName));
console.log(`💾 Backup erstellt: ${backupName}`);

// --- Prompt zusammenbauen ---
const prompt = `
You are a professional UX translator. 
Translate the following JSON keys and values from English to German.
Keep the UX, tech, and business terms in English if they appear in this list:
${keepTerms.join(", ")}

Return valid JSON with the same keys and translated values.
Do not add comments or explanations.
`;

const textToTranslate = JSON.stringify(missing, null, 2);

// --- API-Aufruf ---
async function translate() {
  console.log("⚙️  Sende Anfrage an OpenAI …");

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // GPT-5-kompatibel / effizient
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: textToTranslate },
    ],
    temperature: 0.3,
  });

  const output = response.choices[0].message.content;

  try {
    const translated = JSON.parse(output);

    // Übersetzungen in de.json einfügen
    function applyTranslations(target, source, prefix = "") {
      for (const key in source) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        const value = source[key];

        if (typeof value === "object") {
          if (!target[key]) target[key] = {};
          applyTranslations(target[key], value, fullKey);
        } else {
          const pathParts = fullKey.split(".");
          let ref = target;
          for (let i = 0; i < pathParts.length - 1; i++) {
            const part = pathParts[i];
            if (!ref[part]) ref[part] = {};
            ref = ref[part];
          }
          ref[pathParts[pathParts.length - 1]] = value;
        }
      }
    }

    applyTranslations(de, translated);

    fs.writeFileSync(dePath, JSON.stringify(de, null, 2), "utf-8");

    console.log("✅ Übersetzungen erfolgreich eingefügt!");
    console.log(`📘 ${Object.keys(missing).length} neue Einträge wurden ergänzt.`);
  } catch (err) {
    console.error("❌ Fehler beim Parsen der OpenAI-Antwort:", err.message);
    console.error("Antwort war:", output);
  }
}

translate().catch((err) => {
  console.error("❌ OpenAI API-Fehler:", err);
});
