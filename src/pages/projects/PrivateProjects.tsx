import { useParams, Link } from "react-router-dom";
import {
  typography,
  colors,
  spacing,
  buttonVariants,
  layout,
  sectionSpacing,
  sectionInnerSpacing,
} from "@/lib/tokens";
import { cn } from "@/lib/utils";

const PROJECT_TITLES: Record<string, string> = {
  "car-insurance": "ADAC Car Insurance",
  "swiss-life-b2b2c": "Swiss Life B2B2C Platform",
  "zooplus-reops": "zooplus ResearchOps",
  "zooplus-pricing": "zooplus Pricing Experience",
  "delete-case": "Delete Case Study",
  "atoss-reops": "ATOSS ResearchOps",
};

export default function PrivateProjects() {
  const { "*": projectId } = useParams();
  const title = PROJECT_TITLES[projectId ?? ""] ?? "Selected Project";

  return (
    <main className={cn(colors.background.bg, colors.background.text)}>
      {/* ✅ Header / Intro */}
      <section
        className={cn(
          "text-center border-b",
          colors.border,
          sectionSpacing.lg,
          spacing.pxSection
        )}
      >
        <div className={layout.maxWidthText}>
          <h1
            className={cn(
              typography.sectionTitle.font,
              typography.sectionTitle.size,
              typography.sectionTitle.weight,
              typography.sectionTitle.tracking,
              sectionInnerSpacing.subtitleMargin
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              typography.subtitle.font,
              typography.subtitle.size,
              typography.subtitle.weight,
              typography.subtitle.leading,
              "text-muted-foreground max-w-2xl mx-auto"
            )}
          >
            This project is part of my professional portfolio and contains
            detailed research insights and internal documentation not available
            publicly.
          </p>
        </div>
      </section>

      {/* ✅ Main Content */}
      <section
        className={cn(
          layout.flexColCenter,
          "text-center",
          sectionSpacing.md,
          spacing.pxSection
        )}
      >
        <div className={layout.maxWidthText}>
          <p
            className={cn(
              typography.body.font,
              typography.body.size,
              typography.body.leading,
              "text-muted-foreground mb-6"
            )}
          >
            Many of my projects involve early-stage strategy work, user research
            data, or confidential prototypes under NDA. While I can’t share
            every detail here, I’m always happy to provide an overview of my
            approach — from framing research questions to activating insights
            across teams.
          </p>

          <p
            className={cn(
              typography.body.font,
              typography.body.size,
              typography.body.leading,
              "text-muted-foreground mb-10"
            )}
          >
            If you’d like to discuss how I structure UX research operations,
            integrate insights into product strategy, or measure UX impact,
            please feel free to reach out. I’d be glad to walk you through
            relevant case studies during a conversation.
          </p>

          <Link
            to="/#contact"
            className={cn(
              buttonVariants.base,
              buttonVariants.primary,
              "text-base font-semibold"
            )}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}

