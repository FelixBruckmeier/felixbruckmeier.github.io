// src/components/sections/cv/PersonalExperienceSection.tsx
import { Section, Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function PersonalExperienceSection() {
  return (
    <Section id="personal-experience" title="Personal Experience" spacing="lg">
      {/* Intro */}
      <Body className={cn(colors.muted.text, spacing.mb8)}>
        A complementary overview of my background — education, core expertise areas
        and the professional communities that shape my UX practice.
      </Body>

      <div className="grid sm:grid-cols-2 gap-6 items-start">
        
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          
          {/* 🧠 Expertise Areas */}
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Expertise Areas</Subtitle>

            <ul className={spacing.stackSm}>
              <Item
                title="Discovery Research"
                text="Contextual inquiries, interviews, field research and exploratory synthesis."
              />
              <Item
                title="Design Evaluation"
                text="Usability testing with prototypes and continuous RITE testing loops."
              />
              <Item
                title="Quantitative & Mixed Methods"
                text="Surveys, MaxDiff, Conjoint, analytics triangulation and A/B test interpretation."
              />
              <Item
                title="Facilitation"
                text="Workshop design and moderation (Design Thinking, Journey Mapping, Alignment)."
              />
              <Item
                title="ResearchOps & Enablement"
                text="Repositories, templates, onboarding and governance for scalable research."
              />
            </ul>
          </Tile>

          {/* 🔧 Tools */}
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Tools</Subtitle>

            <ul className={spacing.stackSm}>
              <Item
                title="Research"
                text="Dovetail, Maze, Hotjar, Lookback, Typeform"
              />
              <Item
                title="Design & Collaboration"
                text="Figma, Miro, Notion, Confluence"
              />
              <Item
                title="Data & Analytics"
                text="GA4, SPSS, Excel, R (basic)"
              />
            </ul>
          </Tile>

          {/* 🌐 Communities */}
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Memberships & Communities</Subtitle>

            <ul className={spacing.stackSm}>
              <Item
                title="ResearchOps Community"
                text="Active member since 2022 — contribution on research operations maturity."
              />
              <Item
                title="UX Leadership Community"
                text="Ongoing exchange on leadership, team culture and research strategy."
              />
            </ul>
          </Tile>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          {/* 🎓 Education */}
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Education</Subtitle>

            <ul className={spacing.stackSm}>
              <Item
                title="M.A. Human–Computer Interaction"
                text="LMU Munich — psychology, pedagogy and interactive systems."
              />
              <Item
                title="B.A. Media & Communication"
                text="University of Passau — UX, communication science and empirical research."
              />
            </ul>
          </Tile>

          {/* 🚀 Development */}
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Professional Development</Subtitle>

            <ul className={spacing.stackSm}>
              <Item
                title="SAFe® Product Manager / Product Owner"
                text="Scaled Agile Framework — certification completed 2024."
              />
              <Item
                title="UXQB CPUX-F"
                text="Completed foundation-level training on usability and UX standards."
              />
            </ul>
          </Tile>

        </div>

      </div>
    </Section>
  );
}

/* 🧩 Small helper component for cleaner markup */
function Item({ title, text }: { title: string; text: string }) {
  return (
    <li>
      <p className="font-medium text-foreground">{title}</p>
      <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
        {text}
      </Body>
    </li>
  );
}
