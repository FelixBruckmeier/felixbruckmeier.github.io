// src/components/sections/expertise/impactmeasurement/PragmaticApproachSection.tsx

import { cn } from "@/lib/utils";
import { layout, spacing, typography } from "@/lib/tokens";
import { motion } from "framer-motion";

export default function PragmaticApproachSection() {
  return (
    <motion.section
      className={cn(layout.maxWidthText, spacing.mt24, spacing.mb24)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.33, 1.02, 0.68, 1] }}
    >
      <h2
        className={cn(
          typography.sectionTitle.font,
          typography.sectionTitle.size,
          typography.sectionTitle.weight,
          spacing.mb10
        )}
      >
        My pragmatic approach to this problem
      </h2>

      {/* Example 1 */}
      <div className={cn(spacing.mb16)}>
        <h3
          className={cn(
            typography.subtitle.font,
            typography.subtitle.size,
            typography.subtitle.weight,
            "text-foreground mb-3"
          )}
        >
          Example 1: CLTV Impact through UX Optimization
        </h3>
        <p className={cn(typography.body.font, typography.body.size, typography.body.leading, "text-muted-foreground")}>
          Wenn man annimmt – wie eine McKinsey-Studie zeigt –, dass rund{" "}
          <strong>32 % der Kunden</strong> nach einer schlechten Erfahrung nicht
          zurückkehren, dann hat schlechte UX einen messbaren Preis. Bei einer
          Kundenbasis von etwa <strong>3,2 Millionen Personen</strong> und einem
          durchschnittlichen <strong>Customer Lifetime Value von 30 €</strong>{" "}
          ergibt sich daraus ein erhebliches Risiko an verlorenem Umsatz.
          Gelingt es jedoch, nur{" "}
          <strong>10 % dieser potenziellen Abwanderer</strong> durch bessere
          Nutzungserlebnisse zu halten, entsteht bereits ein{" "}
          <strong>zusätzlicher Jahresgewinn von rund 10 Millionen €</strong>.
        </p>
      </div>

      {/* Example 2 */}
      <div>
        <h3
          className={cn(
            typography.subtitle.font,
            typography.subtitle.size,
            typography.subtitle.weight,
            "text-foreground mb-3"
          )}
        >
          Example 2: Usability Improvement and Efficiency Gains
        </h3>
        <p className={cn(typography.body.font, typography.body.size, typography.body.leading, "text-muted-foreground")}>
          Ein ähnlicher Effekt zeigt sich auch in internen Prozessen. Wenn ein{" "}
          <strong>Usability-Problem in einer internen Software</strong>{" "}
          identifiziert und durch ein verbessertes Design behoben wird, kann
          sich die Bearbeitungszeit einzelner Aufgaben durch Fachpersonal{" "}
          <strong>deutlich reduzieren</strong> – zum Beispiel von{" "}
          <strong>5 Minuten 30 Sekunden auf 2 Minuten 15 Sekunden</strong>. Bei
          tausenden Vorgängen pro Monat ergibt sich daraus eine{" "}
          <strong>substantielle Zeit- und Kosteneinsparung</strong>, die sich
          direkt in geringeren <strong>Personalkosten</strong> und{" "}
          <strong>höherer Produktivität</strong> widerspiegelt.
        </p>
      </div>
    </motion.section>
  );
}
