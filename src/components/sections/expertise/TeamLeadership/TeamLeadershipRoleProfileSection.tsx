import { Section } from "@/components/ui";
import SectionIntro from "@/components/ui/SectionIntro";
import { layout, spacing } from "@/lib/tokens";
import { cn } from "@/lib/utils";
import RolesSpider from "@/assets/visuals/teamleadership/RolesSpider";

export default function TeamLeadershipRoleProfileSection() {
  return (
    <Section
      id="leadership-role-profile"
      title="My Role Profile"
      spacing="xl"       // Einheitlich mit RolesSection
      borderTop
      fullWidth
    >
      {/* Intro */}
      <SectionIntro>
        As a UX generalist, I combine a broad spectrum of experience across
        research, design, and strategy. While I’m not the deepest expert in
        every single domain, I understand each role’s language and challenges — 
        enabling me to coach, connect, and empower specialists to perform at
        their best.
      </SectionIntro>

      {/* Spider Chart */}
      <div
        className={cn(
          layout.flexCenter,
          "w-full",
          spacing.mt12,
          spacing.mb16
        )}
      >
        <div className="w-full max-w-5xl flex justify-center">
          <RolesSpider />
        </div>
      </div>
    </Section>
  );
}
