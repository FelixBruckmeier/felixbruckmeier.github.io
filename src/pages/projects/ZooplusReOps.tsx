import { Link } from "react-router-dom";
import { t } from "../../i18n";
import matrix from "@/assets/artefacts/zooplus-reops-matrix.png";
import dashboard from "@/assets/artefacts/zooplus-dashboard.png";

export default function ZooplusReOps() {
  return (
    <main className="pt-20 mx-auto max-w-6xl px-4 py-10">
      <Link to="/" className="text-sm text-muted-foreground">{t("case.back")}</Link>
      <h1 className="text-2xl font-semibold mt-2">{t("projects.zooreops.title")}</h1>
      <p className="mt-3 text-muted-foreground max-w-3xl">{t("projects.zooreops.teaser")}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <img className="rounded-2xl border border-border" src={matrix} alt="ReOps matrix" />
        <img className="rounded-2xl border border-border" src={dashboard} alt="Insights dashboard" />
      </div>
      <section className="mt-8 grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Governance</h3><p className="text-sm text-muted-foreground mt-1">Maturity matrix über Governance, Enablement, Process, Tools, Alignment, Resources.</p></article>
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Enablement</h3><p className="text-sm text-muted-foreground mt-1">Templates, Trainings, CoP; schnellere Zyklen, höhere Qualität.</p></article>
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Impact</h3><p className="text-sm text-muted-foreground mt-1">Mehr Studien-Durchsatz, bessere Insights-Sichtbarkeit, klarer UXR-ROI.</p></article>
      </section>
    </main>
  );
}
