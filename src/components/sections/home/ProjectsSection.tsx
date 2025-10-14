// src/components/sections/home/ProjectsSection.tsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import FadeIn from "@/components/ui/FadeIn";
import InfoTile from "@/components/ui/InfoTile";
import { spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    { to: "/projects/car-insurance", title: "Car Insurance", desc: "Reduced friction and improved conversion." },
    { to: "/projects/zooplus-reops", title: "ResearchOps & Agile UX", desc: "Governance, templates & enablement at scale." },
    { to: "/projects/swiss-life-b2b2c", title: "B2B2C Optimization", desc: "Qual & quant insights aligned to business goals." },
    { to: "/projects/zooplus-pricing", title: "Pricing Usability Testing", desc: "Clarity in pricing components and PDP details." },
    { to: "/projects/delete-case", title: "A micro interaction that saves lots of user time", desc: "Simplifying repetitive workflows efficiently." },
    { to: "/projects/atoss-reops", title: "ReOps Implementation", desc: "Empowering UX teams through ResearchOps foundations." },
  ];

  return (
    <Section id="projects" title={t("projects.title")} spacing="lg">
      {/* --- Intro Text mit Fade-In --- */}
      <FadeIn>
        <SectionIntro>
          A selection of research and operations projects — from foundational
          insights to usability testing and scalable ResearchOps systems.
        </SectionIntro>
      </FadeIn>

      {/* --- Project Tiles (purple theme, same responsive grid as Expertise) --- */}
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch",
          spacing.gap6,
          "max-w-6xl mx-auto mt-6"
        )}
      >
        {projects.map((p, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.1}>
            <Link to={p.to}>
              <InfoTile
                title={p.title}
                description={p.desc}
                className={cn(
                  colors.notion.purple.bg,
                  colors.notion.purple.text,
                  "h-full w-full flex flex-col justify-between"
                )}
              />
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

