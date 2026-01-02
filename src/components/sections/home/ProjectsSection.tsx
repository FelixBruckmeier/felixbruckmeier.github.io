// src/components/sections/home/ProjectsSection.tsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, SectionIntro, FadeIn, TileImage } from "@/components/ui";
import { spacing, layout } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

// 📸 Projektbilder (optimiert via vite-imagetools)
const tileParams = "?w=320;480;640&format=webp;jpg&q=60&as=picture";

import carInsuranceImg from "@/assets/images/projects/carinsurance/CarInsurance.png?w=320;480;640&format=webp;jpg&q=60&as=picture";
import reopsAgileImg from "@/assets/images/projects/reopsagile/ResearchOpsAgileUX.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import insuranceBrokerImg from "@/assets/images/projects/b2b2c/B2B2COptimization.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import pricingImg from "@/assets/images/projects/pricingtesting/PricingUsabilityTesting.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import microinteractionImg from "@/assets/images/projects/amicrointeraction/optimize.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import reopsImplImg from "@/assets/images/projects/reopsimplement/ReOpsimplementation.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import workshopImg from "@/assets/images/projects/workshop/haderws.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";
import kanoStrategyImg from "@/assets/images/projects/kanostrategy/headerkano.jpg?w=320;480;640&format=webp;jpg&q=60&as=picture";

// 📸 NEU – UX Portfolio Projektbild
import uxPortfolioImg from "@/assets/images/projects/uxportfolio/cover.png?w=320;480;640&format=webp;jpg&q=60&as=picture";

export default function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    {
      to: "/projects/car-insurance",
      title: "Car Insurance",
      desc: "Reduced friction and improved conversion.",
      image: carInsuranceImg,
      locked: false,
    },
    {
      to: "/projects/zooplus-reops",
      title: "ResearchOps & Agile UX",
      desc: "Governance, templates & enablement at scale.",
      image: reopsAgileImg,
      locked: true,
    },
    {
      to: "/projects/insurance-broker-discovery",
      title: "Insurance Broker Discovery Research",
      desc: "Contextual interviews & synthesis for product clarity.",
      image: insuranceBrokerImg,
      locked: false,
    },
    {
      to: "/projects/zooplus-pricing",
      title: "Pricing Usability Testing",
      desc: "Clarity in pricing components and PDP details.",
      image: pricingImg,
      locked: false,
    },
    {
      to: "/projects/kanostrategy",
      title: "UX Strategy with the Kano Model",
      desc: "Using the Kano model to identify customer-impacting features.",
      image: kanoStrategyImg,
      locked: false,
    },
    {
      to: "/projects/delete-case",
      title: "Micro Interaction",
      desc: "Simplifying repetitive workflows efficiently.",
      image: microinteractionImg,
      locked: true,
    },
    {
      to: "/projects/atoss-reops",
      title: "ReOps Implementation",
      desc: "Empowering UX teams through ResearchOps foundations.",
      image: reopsImplImg,
      locked: true,
    },
    {
      to: "/projects/workshop",
      title: "Team UX Research Culture Kickstart",
      desc: "Building alignment and ownership through co-creation.",
      image: workshopImg,
      locked: false,
    },
    {
      to: "/projects/ux-portfolio",
      title: "Design System - Portfolio Website",
      desc: "Design System Architecture, Tokenizing, IA Optimization, SEO & Performance.",
      image: uxPortfolioImg,
      locked: false,
    },
  ];

  return (
    <Section id="projects" title={t("projects.title")} spacing="lg">
      <SectionIntro>
        {/* ✅ normales FadeIn statt wortweiser Animation */}
        <FadeIn delay={0.1}>
  <p className="inherit">
    I’m passionate about guiding teams through the entire spectrum of{" "}
    <strong>UX research</strong> — from <strong>foundational discovery</strong>{" "}
    to <strong>evaluative testing</strong>. I combine{" "}
    <strong>qualitative and quantitative methods</strong>,{" "}
    <strong>mixed-method and triangulation approaches</strong>,{" "}
    <strong>analytics</strong>, and{" "}
    <strong>design thinking workshops</strong> to turn complex questions into{" "}
    <strong>meaningful insights</strong>. My work connects{" "}
    <strong>agile UX</strong>,{" "}
    <strong>research-driven project management</strong>, and the{" "}
    <strong>integration of AI</strong> into research and product development.
  </p>
</FadeIn>
      </SectionIntro>

      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          spacing.gap8,
          layout.fullWidth
        )}
      >
        {projects.map((p, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.1}>
            <div className="relative group">
              {!p.locked ? (
                <Link to={p.to}>
                  <TileImage
                    image={p.image}
                    title={p.title}
                    caption={p.desc}
                    className="group rounded-xl overflow-hidden"
                  />
                </Link>
              ) : (
                <div className="relative rounded-xl overflow-hidden select-none cursor-default">
                  <TileImage
                    image={p.image}
                    title={p.title}
                    caption={p.desc}
                    className="rounded-xl overflow-hidden opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                    <Lock
                      className="text-white opacity-40 w-12 h-12 drop-shadow-lg transition-none"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
