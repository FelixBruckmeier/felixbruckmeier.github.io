import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HouseDiagram from "@/components/HouseDiagram";
import CVPreview from "@/components/CVPreview";
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
    <main className="min-h-screen bg-background text-foreground">
      {/* hero */}
      <section id="header" className="scroll-mt-24 container-responsive py-14 md:py-20 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Felix Bruckmeier</h1>
          <p className="mt-3 text-base md:text-lg opacity-90">{t("hero.claim")}</p>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            {t("hero.intro")}
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={profileImg} alt="Portrait of Felix Bruckmeier" className="w-full max-w-sm rounded-3xl border border-border shadow-lg object-cover" />
        </div>
      </section>

      {/* about */}
      <section id="about" className="scroll-mt-24 border-t border-border">
        <div className="container-responsive py-12">
          <h2 className="text-2xl font-bold">{t("about.title")}</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">{t("about.text")}</p>
        </div>
      </section>

      {/* expertise */}
      <section id="expertise" className="scroll-mt-24 border-t border-border">
        <div className="container-responsive py-12">
          <h2 className="text-2xl font-bold">{t("expertise.title")}</h2>
          <HouseDiagram />
        </div>
      </section>

      {/* CV timeline (wieder aktiv) */}
      <CVPreview />

      {/* projects */}
      <section id="projects" className="scroll-mt-24 border-t border-border">
        <div className="container-responsive py-12">
          <h2 className="text-2xl font-bold">{t("projects.title")}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <a href="/projects/adac-car-insurance" className="rounded-2xl border border-border p-5 hover:bg-muted/40 transition block">
              <div className="font-semibold">{t("projects.adac")}</div>
              <p className="mt-2 text-sm text-muted-foreground">Reduced friction and improved conversion.</p>
            </a>
            <a href="/projects/zooplus-researchops" className="rounded-2xl border border-border p-5 hover:bg-muted/40 transition block">
              <div className="font-semibold">{t("projects.reops")}</div>
              <p className="mt-2 text-sm text-muted-foreground">Governance, templates & enablement at scale.</p>
            </a>
            <a href="/projects/swiss-life-b2b2c" className="rounded-2xl border border-border p-5 hover:bg-muted/40 transition block">
              <div className="font-semibold">{t("projects.sl")}</div>
              <p className="mt-2 text-sm text-muted-foreground">Qual & quant insights aligned to business goals.</p>
            </a>
            <a href="/projects/zooplus-pricing" className="rounded-2xl border border-border p-5 hover:bg-muted/40 transition block">
              <div className="font-semibold">{t("projects.pricing")}</div>
              <p className="mt-2 text-sm text-muted-foreground">Clarity in pricing components and PDP details.</p>
            </a>
          </div>
        </div>
      </section>

      {/* craft */}
      <section id="craft" className="scroll-mt-24 border-t border-border">
        <div className="container-responsive py-12">
          <h2 className="text-2xl font-bold">Craft</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Research as craft: repeatable, improvable practice with strong quality standards.
          </p>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="scroll-mt-24 border-t border-border">
        <div className="container-responsive py-12">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-muted-foreground max-w-3xl">{t("contact.cta")}</p>
          <div className="mt-6">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0oPGXHnWXdq3-zK6GQhHm2ESA4SVlsx5ziYevEBxKE7MXlGBWgUN9yuCUp9TsirOrT9kR459cC"
              target="_blank" rel="noopener"
              className="block rounded-2xl overflow-hidden border border-border hover:shadow-lg transition"
            >
              <img src={calendarImg} alt="Schedule a Discovery Call" className="w-full h-auto" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
