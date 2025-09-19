import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HouseDiagram from "@/components/HouseDiagram";
import CVPreview from "@/components/CVPreview";
import profileImg from "@/assets/profile-felix.png";
import calendarImg from "@/assets/calendar-discovery.png";

function AboutSection() {
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
  const leftRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // check viewport size (>= md breakpoint = 768px)
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // disable scroll effect on mobile

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex: number | null = null;
      let closestDistance = Infinity;

      boxesRef.current.forEach((box, index) => {
        if (!box) return;
        const rect = box.getBoundingClientRect();
        const boxCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - boxCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);

      if (closestIndex !== null) {
        const targetEl = boxesRef.current[closestIndex];
        const parentEl = targetEl?.parentElement;
        if (targetEl && parentEl) {
          const rect = targetEl.getBoundingClientRect();
          const parentRect = parentEl.getBoundingClientRect();
          setOffsetY(rect.top - parentRect.top);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isDesktop]);

  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="container-responsive py-12 grid md:grid-cols-[1fr_1fr] gap-12 items-start">
        {/* Left: About Me */}
        <div
          ref={leftRef}
          className="transition-transform duration-500 ease-out"
          style={{ transform: isDesktop ? `translateY(${offsetY}px)` : "none" }}
        >
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
            I am a UX Research Leader with a background in econometrics and
            product development. My work bridges qualitative depth and
            quantitative rigor, with a focus on ResearchOps, strategy alignment,
            and measurable impact.
          </p>
        </div>

        {/* Right: Boxes */}
        <div className="space-y-8">
          {[
            {
              title: "Career Interests",
              text: "Scaling ResearchOps, advancing UX maturity, integrating user-centered decision making.",
            },
            {
              title: "Background",
              text: "Master’s degree in Economics from Augsburg, 10+ years of experience in UX Research across industries.",
            },
            {
              title: "Personal Note",
              text: "I see research as both craft and strategy: repeatable, improvable, and essential for confident decisions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[i] = el)}
              className={`rounded-2xl border border-border p-6 transition-colors duration-300 ${
                activeIndex === i && isDesktop ? "bg-muted/30" : "bg-background"
              }`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <section
        id="header"
        className="scroll-mt-24 container-responsive py-14 md:py-20 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Felix Bruckmeier
          </h1>
          <p className="mt-3 text-base md:text-lg opacity-90">{t("hero.claim")}</p>
          <p className="mt-6 text-muted-foreground max-w-2xl">{t("hero.intro")}</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={profileImg}
            alt="Portrait of Felix Bruckmeier"
            className="w-full max-w-sm rounded-3xl border border-border shadow-lg object-cover"
          />
        </div>
      </section>

      {/* about */}
      <AboutSection />

      {/* expertise */}
      <section id="expertise" className="scroll-mt-24 border-t border-border">
        <div className="container-responsive py-12">
          <h2 className="text-2xl font-bold">{t("expertise.title")}</h2>
          <HouseDiagram />
        </div>
      </section>

      {/* CV timeline */}
      <CVPreview />

      {/* projects */}
      <section id="projects" className="scroll-mt-24 border-t border-border">
        <div className="container-responsive py-12">
          <h2 className="text-2xl font-bold">{t("projects.title")}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Link
              to="/projects/car-insurance"
              className="rounded-2xl border border-border p-5 hover:bg-muted/40 transition block"
            >
              <div className="font-semibold">{t("projects.adac")}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Reduced friction and improved conversion.
              </p>
            </Link>
            <Link
              to="/projects/zooplus-reops"
              className="rounded-2xl border border-border p-5 hover:bg-muted/40 transition block"
            >
              <div className="font-semibold">{t("projects.reops")}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Governance, templates & enablement at scale.
              </p>
            </Link>
            <Link
              to="/projects/swiss-life-b2b2c"
              className="rounded-2xl border border-border p-5 hover:bg-muted/40 transition block"
            >
              <div className="font-semibold">{t("projects.sl")}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Qual & quant insights aligned to business goals.
              </p>
            </Link>
            <Link
              to="/projects/zooplus-pricing"
              className="rounded-2xl border border-border p-5 hover:bg-muted/40 transition block"
            >
              <div className="font-semibold">{t("projects.pricing")}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Clarity in pricing components and PDP details.
              </p>
            </Link>
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
              target="_blank"
              rel="noopener"
              className="block rounded-2xl overflow-hidden border border-border hover:shadow-lg transition"
            >
              <img
                src={calendarImg}
                alt="Schedule a Discovery Call"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
