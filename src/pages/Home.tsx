import { useI18n } from "@/i18n";
import HouseDiagram from "@/components/HouseDiagram";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useI18n();
  return (
    <main>
      <section id="hero" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{t("hero_title")}</h1>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">{t("hero_sub")}</p>
            <div className="flex gap-3">
              <a href="/assets/CV_Felix_Bruckmeier.pdf" className="px-4 py-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">CV</a>
              <Link to="/projects" className="px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700">Projects</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/assets/profile.jpg" alt="Profile" className="w-48 h-48 rounded-2xl object-cover border border-neutral-200 dark:border-neutral-700" />
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">{t("about_title")}</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Senior UX Researcher / ResearchOps. Fokus auf Entscheidungsbeschleunigung, Strategy/OKRs, Insights Activation, Governance & Enablement.
        </p>
      </section>

      <section id="expertise" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">{t("expertise_title")}</h2>
        <HouseDiagram />
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">{t("projects_title")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/projects" className="p-4 rounded-lg border hover:shadow-sm transition">ADAC Car Insurance</Link>
          <Link to="/projects" className="p-4 rounded-lg border hover:shadow-sm transition">zooplus ResearchOps</Link>
          <Link to="/projects" className="p-4 rounded-lg border hover:shadow-sm transition">Swiss Life B2B2C</Link>
        </div>
      </section>

      <section id="cv" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">{t("cv_title")}</h2>
        <a href="/assets/CV_Felix_Bruckmeier.pdf" className="underline">PDF öffnen</a>
      </section>
    </main>
  );
}
