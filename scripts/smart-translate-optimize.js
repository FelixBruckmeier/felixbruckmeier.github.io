// scripts/smart-translate-optimize.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import OpenAI from "openai";

// Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const localesDir = path.join(__dirname, "..", "src", "locales");
const enPath = path.join(localesDir, "en.json");
const dePath = path.join(localesDir, "de.json");
const keepTermsPath = path.join(__dirname, "keep-terms.json");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ Kein OPENAI_API_KEY gefunden (.env im Projektroot?)");
  process.exit(1);
}

// CLI options
const argv = process.argv.slice(2);
const getArg = (name) => {
  const match = argv.find((a) => a.startsWith(`--${name}=`));
  return match ? match.split("=")[1] : undefined;
};
const TARGET = getArg("target") || "de"; // de oder en
const DRY = argv.includes("--dry");
const PREFIX = getArg("prefix");

// Load data
const en = JSON.parse(fs.readFileSync(enPath, "utf-8"));
const de = JSON.parse(fs.readFileSync(dePath, "utf-8"));
const keepTerms = JSON.parse(fs.readFileSync(keepTermsPath, "utf-8"));

// Utility
const isObject = (v) => v && typeof v === "object" && !Array.isArray(v);

const pathToString = (pathArr) =>
  pathArr.map((p) => (typeof p === "number" ? `[${p}]` : p)).join(".");

function getAtPath(root, pathArr) {
  return pathArr.reduce((acc, key) => (acc ? acc[key] : undefined), root);
}

function setAtPath(root, pathArr, value) {
  let ref = root;
  for (let i = 0; i < pathArr.length - 1; i++) {
    const seg = pathArr[i];
    if (!ref[seg]) ref[seg] = typeof pathArr[i + 1] === "number" ? [] : {};
    ref = ref[seg];
  }
  ref[pathArr[pathArr.length - 1]] = value;
}

function collectStrings(obj, prefix = []) {
  const out = [];
  for (const key in obj) {
    const val = obj[key];
    const pathArr = [...prefix, key];
    if (isObject(val)) {
      out.push(...collectStrings(val, pathArr));
    } else if (Array.isArray(val)) {
      val.forEach((v, i) => {
        if (isObject(v)) out.push(...collectStrings(v, [...pathArr, i]));
        else if (typeof v === "string") out.push({ path: [...pathArr, i], text: v });
      });
    } else if (typeof val === "string") {
      out.push({ path: pathArr, text: val });
    }
  }
  return out;
}

// Language detection heuristic
function detectLang(text) {
  if (!text) return "unknown";
  const deWords = ["und", "der", "die", "das", "mit", "für", "auf", "ist", "nicht"];
  const enWords = ["the", "and", "with", "for", "is", "user", "research"];
  const deCount = deWords.filter((w) => text.toLowerCase().includes(w)).length;
  const enCount = enWords.filter((w) => text.toLowerCase().includes(w)).length;
  return deCount > enCount ? "de" : "en";
}

async function translateSmart(text, targetLang) {
  const prompt = `
You are a professional UX Research and Product Strategy editor.
Your task:
- Detect the language of the text.
- If it's not in ${targetLang === "de" ? "German" : "English"}, translate it naturally and professionally.
- If it is already in ${targetLang === "de" ? "German" : "English"}, slightly optimize tone and style for clarity.
- Keep UX/tech terms unchanged if they appear in this list:
${keepTerms.join(", ")}.
- Maintain a confident, concise tone suitable for a UX portfolio.
Return only the final ${targetLang === "de" ? "German" : "English"} text, no explanations.

Text:
${text}
  `.trim();

  const resp = await openai.responses.create({
    model: "gpt-4o-mini",
    input: prompt,
    temperature: 0.3,
  });

  return resp.output_text.trim();
}

async function main() {
  console.log(`🌍 Smart Translate → Target: ${TARGET.toUpperCase()} ${DRY ? "(Dry Run)" : ""}`);
  const base = TARGET === "de" ? de : en;
  const ref = TARGET === "de" ? en : de;

  const all = collectStrings(base);
  const changed = [];

  for (const entry of all) {
    if (PREFIX && !pathToString(entry.path).startsWith(PREFIX)) continue;

    const text = entry.text;
    const lang = detectLang(text);

    if (!text.trim() || text.startsWith("[MISSING")) {
      const refText = getAtPath(ref, entry.path);
      if (!refText) continue;
      console.log(`🔸 Missing → translating from reference: ${pathToString(entry.path)}`);
      const translated = await translateSmart(refText, TARGET);
      if (!DRY) setAtPath(base, entry.path, translated);
      changed.push({ path: entry.path, from: refText, to: translated });
    } else if ((TARGET === "de" && lang === "en") || (TARGET === "en" && lang === "de")) {
      console.log(`🔁 Language mismatch (${lang}) → ${TARGET}: ${pathToString(entry.path)}`);
      const translated = await translateSmart(text, TARGET);
      if (!DRY) setAtPath(base, entry.path, translated);
      changed.push({ path: entry.path, from: text, to: translated });
    } else if (lang === TARGET) {
      console.log(`✨ Optimizing style: ${pathToString(entry.path)}`);
      const optimized = await translateSmart(text, TARGET);
      if (!DRY) setAtPath(base, entry.path, optimized);
      changed.push({ path: entry.path, from: text, to: optimized });
    }
  }

  if (!DRY) {
    const outPath = TARGET === "de" ? dePath : enPath;
    fs.writeFileSync(outPath, JSON.stringify(base, null, 2), "utf-8");
  }

  console.log(`\n✅ ${changed.length} Einträge ${DRY ? "analysiert" : "aktualisiert"}.`);
}

main().catch((e) => {
  console.error("❌ Fehler:", e);
});
