import { Link } from "react-router-dom";
import { t } from "../../i18n";
import journey from "@/assets/artefacts/swisslife-journey.png";
import conjoint from "@/assets/artefacts/swisslife-conjoint.png";

export default function SwissLife() {
  return (
    <main className="pt-20 mx-auto max-w-6xl px-4 py-10">
      <Link to="/" className="text-sm text-muted-foreground">{t("case.back")}</Link>
      <h1 className="text-2xl font-semibold mt-2">{t("projects.swiss.title")}</h1>
      <p className="mt-3 text-muted-foreground max-w-3xl">{t("projects.swiss.teaser")}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <img className="rounded-2xl border border-border" src={journey} alt="Journey" />
        <img className="rounded-2xl border border-border" src={conjoint} alt="Conjoint" />
      </div>
      <section className="mt-8 grid md:grid-cols-3 gap-4">
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Discovery</h3><p className="text-sm text-muted-foreground mt-1">Context interviews; Entscheidungsreise & Segmente.</p></article>
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Quant</h3><p className="text-sm text-muted-foreground mt-1">Conjoint/MaxDiff; Präferenzen & Preis-Trade-offs.</p></article>
        <article className="rounded-2xl border border-border p-4"><h3 className="font-semibold">Outcome</h3><p className="text-sm text-muted-foreground mt-1">Klare Segmente & Value Drivers; B2B2C-Roadmap.</p></article>
      </section>
    </main>
  );
}
