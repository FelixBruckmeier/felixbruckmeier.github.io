import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HouseDiagram from "@/components/HouseDiagram";
import profileImg from "@/assets/profile-felix.png";
import calendarImg from "@/assets/calendar-discovery.png";

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* hero */}
      <section id="header" className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Felix Bruckmeier</h1>
          <p className="mt-3 text-base md:text-lg opacity-90">{t("hero.claim")}</p>
          <p className="mt-6 text-neutral-700 dark:text-neutral-300 max-w-2xl">{t("hero.intro")}</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={profileImg} alt="Portrait of Felix Bruckmeier" className="w-full max-w-sm rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-lg object-cover" />
        </div>
      </section>

      {/* about */}
      <section id="about" className="scroll-mt-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold">{t("about.title")}</h2>
          <p className="mt-2 max-w-3xl text-neutral-700 dark:text-neutral-300">{t("about.text")}</p>
        </div>
      </section>

      {/* expertise */}
      <section id="expertise" className="scroll-mt-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold">{t("expertise.title")}</h2>
          <HouseDiagram />
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="scroll-mt-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold">{t("projects.title")}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <a href="/projects/adac-car-insurance" className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition block">
              <div className="font-semibold">{t("projects.adac")}</div>
              <p className="mt-2 text-sm opacity-80">Reduced friction and improved conversion.</p>
            </a>
            <a href="/projects/zooplus-researchops" className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition block">
              <div className="font-semibold">{t("projects.reops")}</div>
              <p className="mt-2 text-sm opacity-80">Governance, templates & enablement at scale.</p>
            </a>
            <a href="/projects/swiss-life-b2b2c" className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition block">
              <div className="font-semibold">{t("projects.sl")}</div>
              <p className="mt-2 text-sm opacity-80">Qual & quant insights aligned to business goals.</p>
            </a>
            <a href="/projects/zooplus-pricing" className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition block">
              <div className="font-semibold">{t("projects.pricing")}</div>
              <p className="mt-2 text-sm opacity-80">Clarity in pricing components and PDP details.</p>
            </a>
          </div>
        </div>
      </section>

      {/* cv teaser */}
      <section id="cv" className="scroll-mt-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold">CV</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            <li className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">Lead/Director UX Research – Enterprise & B2C</li>
            <li className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">ResearchOps setup & scaling</li>
            <li className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">OKR-linked research roadmaps</li>
            <li className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">Coaching & enablement for product teams</li>
          </ul>
          <div className="mt-6">
            <a href="/cv" className="inline-flex items-center rounded-2xl px-5 py-3 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900">Go to CV page</a>
          </div>
        </div>
      </section>

      {/* craft */}
      <section id="craft" className="scroll-mt-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold">Craft</h2>
          <p className="mt-2 max-w-3xl text-neutral-700 dark:text-neutral-300">Research as craft: repeatable, improvable practice with strong quality standards.</p>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="scroll-mt-24 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-3xl">{t("contact.cta")}</p>
          <div className="mt-6">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0oPGXHnWXdq3-zK6GQhHm2ESA4SVlsx5ziYevEBxKE7MXlGBWgUN9yuCUp9TsirOrT9kR459cC" target="_blank" rel="noopener" className="block rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition">
              <img src={calendarImg} alt="Schedule a Discovery Call" className="w-full h-auto" />
            </a>
            <div className="mt-3 text-sm opacity-80">
              <div>{t("contact.cta2")}</div>
              <div>{t("contact.cta3")}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
