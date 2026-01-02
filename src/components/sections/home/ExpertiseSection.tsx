import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { spacing, layout } from "@/lib/tokens";
import { Link } from "react-router-dom";
import TileImage from "@/components/ui/TileImage";

// 🖼️ Expertise-Bilder (optimiert via vite-imagetools)
import uxStrategyImg from "@/assets/images/expertise/uxstrategy/schach2.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import strategicUxImg from "@/assets/images/expertise/strategicuxresearch/strategicuxr2.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import researchOpsImg from "@/assets/images/expertise/researchops/plant2.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import leadershipImg from "@/assets/images/expertise/teamleadership/team2.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import impactImg from "@/assets/images/expertise/impactmeasurement/impact2.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";

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
      {/* --- Intro Text (FadeIn wie Projects) --- */}
      <SectionIntro>
        <FadeIn delay={0.1}>
          <p className="inherit">
            These areas of expertise reflect what I’ve learned — and continue to
            learn — about transforming{" "}
            <strong>deep user insights</strong> into{" "}
            <strong>strategy</strong>, <strong>structure</strong>, and{" "}
            <strong>measurable impact</strong>. Over the years, I’ve seen how{" "}
            <strong>empathy</strong> and <strong>evidence</strong> can shape not
            only <strong>better products</strong> but also{" "}
            <strong>stronger teams and processes</strong>. I help organizations{" "}
            <strong>build sustainable, user-centered products</strong>, make{" "}
            <strong>confident, evidence-based decisions</strong>, and{" "}
            <strong>continuously grow their UX maturity</strong>.
          </p>
        </FadeIn>
      </SectionIntro>

      {/* --- Expertise Tiles --- */}
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
