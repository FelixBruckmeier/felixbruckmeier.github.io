import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import TextReveal from "@/components/ui/TextReveal";
import FadeIn from "@/components/ui/FadeIn";
import TileImage from "@/components/ui/TileImage";
import { spacing, layout } from "@/lib/tokens";
import { cn } from "@/lib/utils";

// 📸 Projektbilder (optimiert via vite-imagetools)
import carInsuranceImg from "@/assets/images/projects/carinsurance/CarInsurance.png?w=400;800&format=webp;png&as=picture";
import reopsAgileImg from "@/assets/images/projects/reopsagile/ResearchOpsAgileUX.jpg?w=400;800&format=webp;png&as=picture";
import b2b2cImg from "@/assets/images/projects/b2b2c/B2B2COptimization.jpg?w=400;800&format=webp;png&as=picture";
import pricingImg from "@/assets/images/projects/pricingtesting/PricingUsabilityTesting.jpg?w=400;800&format=webp;png&as=picture";
import microinteractionImg from "@/assets/images/projects/amicrointeraction/optimize.jpg?w=400;800&format=webp;png&as=picture";
import reopsImplImg from "@/assets/images/projects/reopsimplement/ReOpsimplementation.jpg?w=400;800&format=webp;png&as=picture";

export default function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    {
      to: "/projects/car-insurance",
      title: "Car Insurance",
      desc: "Reduced friction and improved conversion.",
      image: carInsuranceImg,
    },
    {
      to: "/projects/zooplus-reops",
      title: "ResearchOps & Agile UX",
      desc: "Governance, templates & enablement at scale.",
      image: reopsAgileImg,
    },
    {
      to: "/projects/swiss-life-b2b2c",
      title: "B2B2C Optimization",
      desc: "Qual & quant insights aligned to business goals.",
      image: b2b2cImg,
    },
    {
      to: "/projects/zooplus-pricing",
      title: "Pricing Usability Testing",
      desc: "Clarity in pricing components and PDP details.",
      image: pricingImg,
    },
    {
      to: "/projects/delete-case",
      title: "Micro Interaction",
      desc: "Simplifying repetitive workflows efficiently.",
      image: microinteractionImg,
    },
    {
      to: "/projects/atoss-reops",
      title: "ReOps Implementation",
      desc: "Empowering UX teams through ResearchOps foundations.",
      image: reopsImplImg,
    },
  ];

  return (
    <Section id="projects" title={t("projects.title")} spacing="lg">
      <SectionIntro>
        <TextReveal
          stagger={0.06}
          duration={0.35}
          delay={0.1}
          ease="easeOut"
          className="inherit"
        >
          A selection of research and operations projects — from foundational
          insights to usability testing and scalable ResearchOps systems.
        </TextReveal>
      </SectionIntro>

      {/* --- Projects Tiles (3 pro Zeile Desktop) --- */}
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          spacing.gap8,
          layout.fullWidth
        )}
      >
        {projects.map((p, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.1}>
            <Link to={p.to}>
              <TileImage
                image={p.image}
                title={p.title}
                caption={p.desc}
                className="group rounded-xl overflow-hidden"
              />
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
