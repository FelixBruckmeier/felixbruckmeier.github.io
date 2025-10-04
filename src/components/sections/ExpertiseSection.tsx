import { Section } from "@/components/ui";
import HouseDiagram from "@/components/artefacts/HouseDiagram";
import { useTranslation } from "react-i18next";
import { IntroText } from "@/components/ui/Tokens";

export default function ExpertiseSection() {
  const { t } = useTranslation();

  return (
    <Section id="expertise" title={t("expertise.title")} spacing="lg">
      <IntroText>
        I help companies build sustainable products by transforming deep user
        insights into actionable strategies. My mission is to scale the user's
        voice and empower organizations to make user-centered decisions.
      </IntroText>

      <HouseDiagram />
    </Section>
  );
}

