// src/components/sections/projects/UXPortfolio/UXPortfolioBLUFSection.tsx
import Section from "@/components/ui/Section";
import SectionIntro from "@/components/ui/SectionIntro";
import Tile from "@/components/ui/Tile";
import { Subtitle, Body, TagText } from "@/components/ui/Tokens";
import { colors, spacing } from "@/lib/tokens";

const TAGS = [
  "Design System",
  "UX Research Portfolio",
  "Self-Initiated",
  "React + Vite",
  "Tailwind v4",
];

const FACTS = [
  { label: "Role", value: "UX Research Lead, Designer & Frontend" },
  { label: "Scope", value: "End-to-end portfolio & design system" },
  { label: "Timeframe", value: "Several iterations over multiple weeks" },
  { label: "Stack", value: "React, TypeScript, Vite, Tailwind v4" },
];

export function UXPortfolioBLUFSection() {
  return (
    <Section
      id="ux-portfolio-bluf"
      title="BLUF — A portfolio that behaves like a product"
      spacing="lg"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
        {/* LEFT: Story & Key points */}
        <div className="space-y-8">
          <SectionIntro>
            This portfolio is not just a website – it behaves like a product:
            it has a clear strategy, an opinionated information architecture,
            and a reusable design system. The goal: show how I think about UX
            Research, leadership, and system design by how the site is built,
            not only by what it says.
          </SectionIntro>

          <div className="grid gap-6 md:grid-cols-2">
            <Tile variant="static">
              <Subtitle>Design goals</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Make my research & leadership focus obvious in seconds</li>
                  <li>Focus on clarity and narrative, not visual noise</li>
                  <li>Be fast, accessible, and easy to extend</li>
                </ul>
              </Body>
            </Tile>

            <Tile variant="static">
              <Subtitle>System goals</Subtitle>
              <Body className={colors.muted.text}>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Encapsulate layout & typography into tokens</li>
                  <li>Use sections as storytelling building blocks</li>
                  <li>Make adding new projects “hostile to inconsistency”</li>
                </ul>
              </Body>
            </Tile>
          </div>

          <Tile variant="static">
            <Subtitle>Why this matters</Subtitle>
            <Body className={colors.muted.text}>
              Hiring managers and design leaders don’t just read case studies –
              they read how you structure complexity. This portfolio is designed
              to communicate my thinking through content, structure, and code:
              <strong> one coherent story across UX strategy, research practice,
              and implementation.</strong>
            </Body>
          </Tile>
        </div>

        {/* RIGHT: Tags + Facts */}
        <aside className="space-y-6">
          <Tile variant="static" className="space-y-3">
            <Subtitle>Project in one sentence</Subtitle>
            <Body className={colors.muted.text}>
              A UX research portfolio built as a small product: opinionated
              navigation, a consistent design system, and maintainable content
              structures that scale with new projects and expertise areas.
            </Body>
          </Tile>

          <Tile variant="static" className="space-y-3">
            <Subtitle>Context</Subtitle>
            <Body className={colors.muted.text}>
              Self-initiated portfolio project to showcase how I design,
              structure, and operationalize UX Research – not only in content,
              but also in the underlying system and implementation.
            </Body>
          </Tile>

          <Tile variant="static" className="space-y-4">
            <Subtitle>Tags</Subtitle>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-muted px-3 py-1"
                >
                  <TagText>{tag}</TagText>
                </span>
              ))}
            </div>
          </Tile>

          <Tile variant="static" className="space-y-3">
            <Subtitle>At a glance</Subtitle>
            <dl className="grid grid-cols-1 gap-2">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-4">
                  <dt className="text-sm text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-foreground text-right">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Tile>
        </aside>
      </div>
    </Section>
  );
}
