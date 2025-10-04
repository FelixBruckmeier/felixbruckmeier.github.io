import { useI18n } from "@/i18n";

const ZooplusReOps = () => {
  const { t } = useI18n();

  return (
    <div className="container-responsive py-16 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Zooplus – ResearchOps</h1>
        <p className="text-foreground max-w-3xl leading-relaxed">
          {t("zooplusReops.intro", {
            defaultValue:
              "Bei Zooplus habe ich ResearchOps-Strukturen etabliert: von der Matrix zur Priorisierung bis hin zum Dashboard für Transparenz und Alignment.",
          })}
        </p>
      </header>

      {/* Matrix (war früher mit Dummybild) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Impact/Effort Matrix</h2>
        <p className="text-muted-foreground max-w-3xl">
          Die Maßnahmen wurden anhand von Impact und Aufwand priorisiert und
          transparent dokumentiert. So konnte das Team schnelle Quick Wins
          identifizieren und langfristige Initiativen gezielt planen.
        </p>
      </section>

      {/* Dashboard (war früher mit Dummybild) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Research Dashboard</h2>
        <p className="text-muted-foreground max-w-3xl">
          Mit einem zentralen Dashboard haben wir Research-Projekte sichtbar
          gemacht, den Status getrackt und die Abstimmung mit Stakeholdern
          erleichtert. Ergebnisse wurden dadurch nicht nur schneller geteilt,
          sondern auch nachhaltiger genutzt.
        </p>
      </section>
    </div>
  );
};

export default ZooplusReOps;
