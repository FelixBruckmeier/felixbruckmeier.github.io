import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/tokens";
import profileImg from "@/assets/profile-felix.png";

// 🔹 Startseiten-Sections
import {
  ExpertiseSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections/home";

// 🔹 Neue KPI-Section mit grauem Hintergrund
import MetricsSection from "@/components/sections/home/MetricsSection";

export default function Home() {
  return (
    <PageLayout>
      {/* ===== Intro mit Portrait ===== */}
      <Section id="intro" borderBottom>
        <div className={cn("grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center")}>
          <div>
            <Subtitle className="text-foreground mb-4">
              I’m a UX Research Lead passionate about connecting strategy, insight, and execution.
            </Subtitle>
            <Body className="text-muted-foreground max-w-prose">
              My work bridges business goals and user needs through mixed-method research and scalable ResearchOps.
              By combining qualitative depth and quantitative validation, I enable teams to make confident,
              user-centered decisions.
            </Body>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild to="/cv" variant="secondary" size="lg">
                View CV
              </Button>
              <Button asChild to="/#projects" variant="secondary" size="lg">
                See Projects
              </Button>
              <Button asChild to="/#expertise" variant="secondary" size="lg">
                Explore Expertise
              </Button>
            </div>
          </div>

          <img
            src={profileImg}
            alt="Portrait of Felix Bruckmeier"
            className={cn(
              "rounded-2xl shadow-lg mx-auto w-[70%] md:w-[80%] object-cover aspect-[4/5]",
              colors.border
            )}
          />
        </div>
      </Section>

      {/* ===== KPI-Section (hellgrauer Hintergrund, volle Breite) ===== */}
      <MetricsSection />

      {/* ===== Expertise Section ===== */}
      <ExpertiseSection />

      {/* ===== Projects Section ===== */}
      <ProjectsSection />

      {/* ===== Kontakt Section ===== */}
        <ContactSection />
    </PageLayout>
  );
}
