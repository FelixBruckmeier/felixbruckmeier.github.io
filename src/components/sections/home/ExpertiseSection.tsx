import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslation } from "react-i18next";
import { Subtitle, Body } from "@/components/ui/Tokens";
import Tile from "@/components/ui/Tile";
import { spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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

  return (
    <Section id="expertise" title={t("expertise.title")} spacing="lg">
      {/* --- Intro Text mit sanftem Fade-In --- */}
      <FadeIn>
        <SectionIntro>
          I help companies build sustainable products by transforming deep user
          insights into actionable strategies. My mission is to scale the user's
          voice and empower organizations to make user-centered decisions.
        </SectionIntro>
      </FadeIn>

      {/* --- Expertise Pillars (blue theme) --- */}
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-stretch",
          spacing.gap6,
          "max-w-6xl mx-auto"
        )}
      >
        {pillars.slice(0, 5).map((p, i) => {
          const to = routesByIndex[i] ?? "expertise";
          return (
            <FadeIn key={i} delay={0.2 + i * 0.1}>
              <Link to={to}>
                <Tile
                  variant="interactive"
                  className={cn(
                    colors.notion.blue.bg,
                    colors.notion.blue.text,
                    spacing.p6
                  )}
                >
                  <Subtitle className="text-foreground">{p.title}</Subtitle>
                  {p.caption && (
                    <Body className={cn("text-muted-foreground")}>
                      {p.caption}
                    </Body>
                  )}
                </Tile>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
