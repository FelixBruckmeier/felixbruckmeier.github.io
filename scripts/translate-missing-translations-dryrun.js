// scripts/translate-missing-translations-dryrun.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import OpenAI from "openai";

// 🧭 ESM-kompatibles dirname ermitteln
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔑 .env explizit aus dem Projektroot laden
dotenv.config({ path: path.join(__dirname, "..", ".env") });

// Testausgabe – zeigt, ob dein Key gefunden wurde
console.log("🔑 OPENAI_API_KEY loaded:", process.env.OPENAI_API_KEY ? "✅ found" : "❌ missing");

// 📁 Pfade zu Übersetzungsdateien
const enPath = path.join(__dirname, "..", "src", "locales", "en.json");
const dePath = path.join(__dirname, "..", "src", "locales", "de.json");
const keepTermsPath = path.join(__dirname, "keep-terms.json");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const en = JSON.parse(fs.readFileSync(enPath, "utf-8"));
  const de = JSON.parse(fs.readFileSync(dePath, "utf-8"));
  const keepTerms = JSON.parse(fs.readFileSync(keepTermsPath, "utf-8"));

  console.log("🌍 Dry Run: Checking English → German translations\n");

  const missing = [];

  function walk(objEn, objDe, prefix = "") {
    for (const key of Object.keys(objEn)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof objEn[key] === "object") {
        if (!objDe[key]) objDe[key] = {};
        walk(objEn[key], objDe[key], fullKey);
      } else if (!objDe[key] || objDe[key].includes("[MISSING:")) {
        missing.push({ key: fullKey, text: objEn[key] });
      }
    }
  }

  walk(en, de);

  if (missing.length === 0) {
    console.log("✅ No missing translations found!");
    return;
  }

  console.log(`📝 Found ${missing.length} missing entries:\n`);

  for (const m of missing) {
    const prompt = `
Translate the following text from English to German in a UX/product research context.
Keep all technical or UX-related terms unchanged if they appear in the following list:
${keepTerms.join(", ")}.
Return only the German translation without quotes.

Text:
${m.text}
`;

    const completion = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    const translation = completion.output_text.trim();

    console.log(`🔹 ${m.key}`);
    console.log(`   EN: ${m.text}`);
    console.log(`   DE: ${translation}\n`);
  }

  console.log("🧪 Dry run complete — no files were modified.");
}

main().catch((err) => {
  console.error("❌ Error during translation:", err);
});
