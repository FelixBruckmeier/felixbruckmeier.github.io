import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import FadeIn from "@/components/ui/FadeIn";
import TextReveal from "@/components/ui/TextReveal";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { spacing, layout } from "@/lib/tokens";
import { Link } from "react-router-dom";
import TileImage from "@/components/ui/TileImage";

// 🖼️ Expertise-Bilder (optimiert)
import uxStrategyImg from "@/assets/images/expertise/uxstrategy/schach1.jpg?w=400;800&format=webp;png&as=picture";
import strategicUxImg from "@/assets/images/expertise/strategicuxresearch/strategicuxr.jpg?w=400;800&format=webp;png&as=picture";
import researchOpsImg from "@/assets/images/expertise/researchops/plant.jpg?w=400;800&format=webp;png&as=picture";
import leadershipImg from "@/assets/images/expertise/teamleadership/team.jpg?w=400;800&format=webp;png&as=picture";
import impactImg from "@/assets/images/expertise/impactmeasurement/impact.jpg?w=400;800&format=webp;png&as=picture";

export default function ExpertiseSection() {
  const { t } = useTranslation();

  const pillars =
    (t("expertise.pillars", { returnObjects: true }) as Array<{
      title: string;
      caption?: string;
    }>) ?? [];

  const routesByIndex = [
    "expertise/ux-strategy",
    "expertise/strategic-ux-research",
    "expertise/researchops",
    "expertise/team-leadership",
    "expertise/impact-measurement",
  ];

  const images = [
    uxStrategyImg,
    strategicUxImg,
    researchOpsImg,
    leadershipImg,
    impactImg,
  ];

  return (
    <Section id="expertise" title={t("expertise.title")} spacing="lg">
      {/* --- Intro Text --- */}
      <SectionIntro>
        <TextReveal
          stagger={0.06}
          duration={0.35}
          delay={0.1}
          ease="easeOut"
          className="inherit"
        >
          I help companies build sustainable products by transforming deep user
          insights into actionable strategies. My mission is to scale the user's
          voice and empower organizations to make user-centered decisions.
        </TextReveal>
      </SectionIntro>

      {/* --- Expertise Tiles (3 pro Zeile Desktop) --- */}
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          spacing.gap8,
          layout.fullWidth
        )}
      >
        {pillars.slice(0, 5).map((p, i) => {
          const to = routesByIndex[i] ?? "expertise";
          const image = images[i];
          return (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <Link to={to}>
                <TileImage
                  image={image}
                  title={p.title}
                  caption={p.caption}
                  className="group rounded-xl overflow-hidden"
                />
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
