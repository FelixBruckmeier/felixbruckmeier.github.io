import { Link } from "react-router-dom";
import { t } from "../../i18n";
import pricing from "@/assets/artefacts/adac-pricing.png";
import heatmap from "@/assets/artefacts/adac-heatmap.png";

export default function ADAC() {
  return (
    <main className="pt-20 mx-auto max-w-6xl px-4 py-10">
      <Link to="/" className="text-sm text-muted-foreground">{t("case.back")}</Link>
      <h1 className="text-2xl font-semibold mt-2">{t("projects.adac.title")}</h1>
      <p className="mt-3 text-muted-foreground max-w-3xl">{t("projects.adac.teaser")}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <img className="rounded-2xl border border-border" src={pricing} alt="ADAC pricing" />
        <img className="rounded-2xl border border-border" src={heatmap} alt="ADAC heatmap" />
      </div>
      <section className="mt-8 grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Strategy</h3><p className="text-sm text-muted-foreground mt-1">Discovery → synthesis → pricing concept tests; prioritized by impact vs risk.</p></article>
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Process</h3><p className="text-sm text-muted-foreground mt-1">RITE loops with prototypes; stakeholder reviews each iteration.</p></article>
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Impact</h3><p className="text-sm text-muted-foreground mt-1">Better comprehension; reduced drop-off in quote flow.</p></article>
      </section>
    </main>
  );
}
