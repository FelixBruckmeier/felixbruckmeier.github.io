import PageLayout from "@/components/layout/PageLayout";
import headerImg from "@/assets/images/headers/home/headerhome.jpg";
import Button from "@/components/ui/Button";
import { Body, MutedText } from "@/components/ui/Tokens";
import { spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";

import {
  AboutSection,
  ExpertiseSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections/home";

export default function Home() {
  return (
    <PageLayout
      title="Felix Bruckmeier"
      intro="Bridging insight, design, and strategy to create user-centered digital products that deliver measurable business value."
      headerImage={headerImg}
    >
      {/* ===== Hero-Content direkt unter Intro ===== */}
      <div
        className={cn(
          "relative z-10 flex flex-col items-center text-center text-white",
          spacing.mt4
        )}
      >
        <Body className="max-w-2xl text-gray-200 leading-relaxed drop-shadow-md">
          <MutedText>
            User Experience Research • Strategy • ResearchOps
          </MutedText>
        </Body>

        {/* === Call-to-Actions === */}
        <div
          className={cn(
            "flex flex-wrap justify-center",
            spacing.gap4,
            spacing.mt4 // enger Abstand unter Text
          )}
        >
          <Button asChild to="/cv" variant="secondary" size="lg">
            View CV
          </Button>
          <Button asChild to="#projects" variant="secondary" size="lg">
            See Projects
          </Button>
          <Button asChild to="#expertise" variant="secondary" size="lg">
            Explore Expertise
          </Button>
        </div>
      </div>

      {/* ===== SECTIONS DARUNTER ===== */}
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </PageLayout>
  );
}
