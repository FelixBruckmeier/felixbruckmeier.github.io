// src/components/sections/cv/PersonalExperienceSection.tsx
import { Section, Tile } from "@/components/ui";
import { Subtitle, Body } from "@/components/ui/Tokens";
import { layout, spacing, colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export default function PersonalExperienceSection() {
  return (
    <Section id="personal-experience" title="Personal Experience" spacing="lg">
      <Body className={cn(colors.muted.text, spacing.mb8)}>
        Complementary to my professional journey — education, expertise areas, and professional
        communities that form the foundation of my UX leadership and practice.
      </Body>

      {/* Grid mit 2 Spalten */}
      <div className={cn("grid sm:grid-cols-2 gap-6 items-start")}>
        {/* 🧠 Expertise Areas (linke Spalte) */}
        <div className="space-y-6">
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Expertise Areas</Subtitle>
            <ul className={spacing.stackSm}>
              <li>
                <p className="font-medium text-foreground">Discovery Research</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Contextual inquiries, interviews, field studies, and exploratory analysis.
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">Design Evaluation</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Usability testing, prototype validation, and continuous RITE testing.
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">Quantitative & Mixed-Methods</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Surveys, MaxDiff, Conjoint, A/B testing, analytics triangulation.
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">Facilitation</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Workshop design and moderation (Design Thinking, Journey Mapping, Alignment).
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">ResearchOps & Enablement</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Repository management, templates, stakeholder onboarding, and governance.
                </Body>
              </li>
            </ul>
          </Tile>

          {/* 🔧 Tools */}
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Tools</Subtitle>
            <ul className={spacing.stackSm}>
              <li>
                <p className="font-medium text-foreground">Research</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Dovetail, Maze, Hotjar, Lookback, Typeform
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">Design & Collaboration</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Figma, Miro, Notion, Confluence
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">Data & Analytics</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  SPSS, Excel, GA4, R (basic)
                </Body>
              </li>
            </ul>
          </Tile>

          {/* 🌐 Memberships & Communities */}
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Memberships & Communities</Subtitle>
            <ul className={spacing.stackSm}>
              <li>
                <p className="font-medium text-foreground">ResearchOps Community</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Active member & contributor since 2022
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">UX Leadership Blog</p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Member & guest contributor, ongoing exchange on leadership in UX research.
                </Body>
              </li>
            </ul>
          </Tile>
        </div>

        {/* 🎓 Education + 🚀 Professional Development (rechte Spalte) */}
        <div className="space-y-6">
          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Education</Subtitle>
            <ul className={spacing.stackSm}>
              <li>
                <p className="font-medium text-foreground">
                  M.A. Human-Computer Interaction
                </p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  LMU Munich – Psychology & Pedagogy
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">
                  B.A. Media & Communication
                </p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  University of Passau – UX & Communication Science
                </Body>
              </li>
            </ul>
          </Tile>

          <Tile variant="static" className={cn("flex flex-col text-left", spacing.p6)}>
            <Subtitle className="mb-4">Professional Development</Subtitle>
            <ul className={spacing.stackSm}>
              <li>
                <p className="font-medium text-foreground">
                  SAFe® Product Manager / Product Owner
                </p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Scaled Agile Framework – Certification completed 2024
                </Body>
              </li>
              <li>
                <p className="font-medium text-foreground">
                  UXQB CPUX-F (User Experience Foundation)
                </p>
                <Body className={cn(colors.muted.text, "text-sm leading-snug")}>
                  Completed self-study of official UXQB curriculum.
                </Body>
              </li>
            </ul>
          </Tile>
        </div>
      </div>
    </Section>
  );
}
