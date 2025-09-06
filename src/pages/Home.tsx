import Navbar from "../components/Navbar";
import HouseDiagram from "../components/HouseDiagram";
import ContactCard from "../components/ContactCard";
import profile from "../assets/profile-felix.png";
import { t } from "../i18n";
import { Link } from "react-router-dom";
import AboutBlock from "./AboutBlock";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <section id="header" className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{t("home.title")}</h1>
            <p className="mt-4 text-muted-foreground">{t("home.subtitle")}</p>
            <div className="mt-6">
              <a href="#projects" className="underline">{t('home.cta.projects')}</a>
            </div>
          </div>
          <div className="justify-self-end">
            <img src={profile} alt="Felix Bruckmeier" className="w-40 h-40 rounded-2xl object-cover shadow" />
          </div>
        </section>

        <AboutBlock />

        <section id="expertise" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">{t("expertise.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("expertise.explainer")}</p>
          <div className="mt-8">
            <HouseDiagram />
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">{t("projects.title")}</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/project/adac" className="rounded-2xl border border-border p-4 hover:shadow transition-shadow">
              <div className="font-medium">{t('projects.adac.title')}</div>
              <div className="text-sm text-muted-foreground mt-1">{t('projects.adac.teaser')}</div>
            </Link>
            <Link to="/project/zooplus-reops" className="rounded-2xl border border-border p-4 hover:shadow transition-shadow">
              <div className="font-medium">{t('projects.zooreops.title')}</div>
              <div className="text-sm text-muted-foreground mt-1">{t('projects.zooreops.teaser')}</div>
            </Link>
            <Link to="/project/swisslife" className="rounded-2xl border border-border p-4 hover:shadow transition-shadow">
              <div className="font-medium">{t('projects.swiss.title')}</div>
              <div className="text-sm text-muted-foreground mt-1">{t('projects.swiss.teaser')}</div>
            </Link>
            <Link to="/project/zooplus-pricing" className="rounded-2xl border border-border p-4 hover:shadow transition-shadow">
              <div className="font-medium">{t('projects.zoopricing.title')}</div>
              <div className="text-sm text-muted-foreground mt-1">{t('projects.zoopricing.teaser')}</div>
            </Link>
          </div>
        </section>

        <section id="cv" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">{t("cv.title")}</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>Jan 2025 – Mai 2025 · ATOSS Software SE · UX Researcher Lead</li>
            <li>Jul 2022 – Dez 2024 · Zooplus SE · UX Researcher Lead</li>
            <li>Mai 2020 – Jun 2022 · Swiss Life AG · Senior UX Researcher</li>
            <li>Aug 2018 – Apr 2020 · Kaiser X Labs (Allianz) · UX Researcher</li>
            <li>Feb 2016 – Jul 2018 · empiriecom · Consultant User-Centered Design</li>
          </ul>
          <div className="mt-4">
            <Link to="/cv" className="underline">{t("cv.open_full")}</Link>
          </div>
        </section>

        <section id="craft" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">{t("craft.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("craft.copy")}</p>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold">{t("contact.title")}</h2>
          <div className="mt-6">
            <ContactCard />
          </div>
        </section>
      </main>
    </div>
  );
}
