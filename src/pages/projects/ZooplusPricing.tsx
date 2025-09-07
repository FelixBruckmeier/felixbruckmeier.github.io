import { Link } from "react-router-dom";
import { t } from "../../i18n";
import maxdiff from "@/assets/artefacts/zooplus-pricing-maxdiff.png";
import heatmap from "@/assets/artefacts/zooplus-pricing-heatmap.png";

export default function ZooplusPricing() {
  return (
    <main className="pt-20 mx-auto max-w-6xl px-4 py-10">
      <Link to="/" className="text-sm text-muted-foreground">{t("case.back")}</Link>
      <h1 className="text-2xl font-semibold mt-2">{t("projects.zoopricing.title")}</h1>
      <p className="mt-3 text-muted-foreground max-w-3xl">{t("projects.zoopricing.teaser")}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <img className="rounded-2xl border border-border" src={maxdiff} alt="MaxDiff" />
        <img className="rounded-2xl border border-border" src={heatmap} alt="Pricing heatmap" />
      </div>
      <section className="mt-8 grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Approach</h3><p className="text-sm text-muted-foreground mt-1">MaxDiff plus moderierte Tests der Pricing-Komponente.</p></article>
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Findings</h3><p className="text-sm text-muted-foreground mt-1">Klarere Value-For-Money-Treiber, bessere Label-Verständlichkeit.</p></article>
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Impact</h3><p className="text-sm text-muted-foreground mt-1">Knackigere Botschaften, bessere Task-Success auf der PDP.</p></article>
      </section>
    </main>
  );
}
