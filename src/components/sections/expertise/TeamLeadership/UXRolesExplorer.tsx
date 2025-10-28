// src/components/sections/expertise/teamleadership/UXRolesExplorer.tsx
import { useState } from "react";
import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import PersonaCard from "@/assets/visuals/teamleadership/PersonaCard";
import { UX_ROLES_PERSONAS } from "@/data/uxRolesPersonas";
import Button from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export default function UXRolesExplorer() {
  const roleKeys = Object.keys(UX_ROLES_PERSONAS);
  const [selectedRole, setSelectedRole] = useState(roleKeys[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const persona = UX_ROLES_PERSONAS[selectedRole];

  return (
    <Section id="ux-roles" title="Roles in UX Teams" spacing="xl" borderTop>
      {/* Intro */}
      <SectionIntro>
        As UX leadership evolved, I became increasingly interested in how it goes
        far beyond managing people — it’s about bridging the diverse mindsets that
        shape research, design, strategy, and operations.
        <br />
        <br />
        Over the years, I’ve noticed that few UX professionals wear only one hat.
        Researchers think like designers, designers act as strategists, and nearly
        everyone contributes to operations in some way. This blend of perspectives
        gives UX its strength — but it can also create friction when teams lack a
        shared language to describe how they work together.
        <br />
        <br />
        To make this diversity visible, I developed a set of{" "}
        <strong>UX Role Personas</strong>, inspired by the{" "}
        <a
          href="https://www.user-experience-blog.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Experience Leadership Club
        </a>
        . They capture the complementary perspectives within UX — not to define
        boundaries, but to build shared understanding and strengthen collaboration
        across roles.
        <br />
        <br />
        For me as a UX Lead, this framework has become a reflective and mentoring
        tool. It helps teams recognize which lens they’re using — and, just as
        importantly, when it’s time to switch to another.
      </SectionIntro>

      {/* Selector + Persona */}
      <div className={cn(layout.flexCenter, spacing.mt12, spacing.mb16, "flex-col")}>
        {/* 🟦 Desktop: Button Group */}
        <div className="hidden md:flex justify-center flex-wrap gap-3 mb-10">
          {roleKeys.map((role) => {
            const isActive = selectedRole === role;
            return (
              <Button
                key={role}
                onClick={() => setSelectedRole(role)}
                variant={isActive ? "primary" : "secondary"}
                size="md"
                className="min-w-[160px] transition-colors duration-150"
              >
                {UX_ROLES_PERSONAS[role].role || role}
              </Button>
            );
          })}
        </div>

        {/* 🟨 Mobile: Dropdown */}
        <div className="relative w-full flex justify-center md:hidden mb-8">
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            variant="secondary"
            size="md"
            className="w-4/5 flex justify-between items-center"
          >
            {UX_ROLES_PERSONAS[selectedRole].role}
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 transition-transform duration-200",
                isDropdownOpen ? "rotate-180" : "rotate-0"
              )}
            />
          </Button>

          {isDropdownOpen && (
            <div
              className="absolute top-full mt-2 w-4/5 bg-background border border-border rounded-lg shadow-lg z-10 max-h-[300px] overflow-y-auto"
            >
              {roleKeys.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setSelectedRole(role);
                    setIsDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-muted transition",
                    selectedRole === role ? "bg-muted/70 font-medium" : ""
                  )}
                >
                  {UX_ROLES_PERSONAS[role].role}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Persona Card */}
        <div className="flex justify-center w-full">
          <PersonaCard
            name={persona.name}
            role={persona.role}
            imgSrc={persona.imgSrc}
            quote={persona.quote}
            description={persona.description}
            skills={persona.skills}
            responsibilities={persona.responsibilities}
            needs={persona.needs}
            painPoints={persona.painPoints}
            challenges={persona.challenges}
          />
        </div>
      </div>
    </Section>
  );
}
