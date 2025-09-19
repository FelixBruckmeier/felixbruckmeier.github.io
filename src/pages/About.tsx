import React from "react";
import { useI18n } from "@/i18n";

const About: React.FC = () => {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="container-responsive py-14 md:py-20 border-b border-border">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          {t("about.title")}
        </h1>
        <p className="mt-3 text-muted-foreground max-w-3xl">{t("about.lead")}</p>
      </section>

      {/* Kacheln */}
      <section className="container-responsive py-12 grid gap-6 md:grid-cols-3">
        {/* Career Interests */}
        <div className="rounded-2xl border border-border p-6">
          <h2 className="text-lg font-semibold">Career Interests</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            I am passionate about scaling ResearchOps, advancing UX maturity in
            organizations, and integrating user-centered decision making at
            strategic levels. My interests include leadership in research,
            triangulation of methods, and sustainable product development.
          </p>
        </div>

        {/* Background */}
        <div className="rounded-2xl border border-border p-6">
          <h2 className="text-lg font-semibold">Background</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            I hold a Master’s degree in Economics from the University of Augsburg.
            Over the past decade, I have worked across industries including
            e-commerce, insurance, and finance, driving research strategies,
            leading teams, and building organizational capabilities in UX
            Research.
          </p>
        </div>

        {/* Personal Note */}
        <div className="rounded-2xl border border-border p-6">
          <h2 className="text-lg font-semibold">Personal Note</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            I see research as both <strong>craft and strategy</strong>: it is
            repeatable, improvable, and essential for enabling confident,
            user-centered product decisions.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
