import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/ui";
import InfoTile from "@/components/ui/InfoTile";
import { layout } from "@/lib/tokens";

export default function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    { to: "/projects/car-insurance", title: t("projects.adac"), desc: "Reduced friction and improved conversion." },
    { to: "/projects/zooplus-reops", title: t("projects.reops"), desc: "Governance, templates & enablement at scale." },
    { to: "/projects/swiss-life-b2b2c", title: t("projects.sl"), desc: "Qual & quant insights aligned to business goals." },
    { to: "/projects/zooplus-pricing", title: t("projects.pricing"), desc: "Clarity in pricing components and PDP details." },
    { to: "/projects/delete-case", title: t("projects.deleteCase"), desc: "A micro-interaction that saves 231 years of lost user time." },
  ];

  return (
    <Section id="projects" title={t("projects.title")} spacing="lg">
      <div className={`mt-6 ${layout.gridCols3} ${layout.gridGap} items-stretch`}>
        {projects.map((p, i) => (
          <Link key={i} to={p.to} className="block">
            <InfoTile title={p.title} description={p.desc} className="cursor-pointer" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
