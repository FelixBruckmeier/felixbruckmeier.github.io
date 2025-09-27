// src/pages/expertise/ImpactMeasurement.tsx
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

/**
 * Impact Measurement Page
 * - Fokus: CLTV & Churn (Business Impact)
 * - HEART Framework (User Impact)
 * - Research Promoter Score (Organizational Impact)
 *
 * Keine externen UI-Libs (keine shadcn/ui) – nur Tailwind + recharts.
 */

export default function ImpactMeasurement() {
  // Beispiel-/Dummy-Daten (später mit echten Zahlen ersetzen)
  const churnData = [
    { year: "Year 1", retained: 45 },
    { year: "Year 2", retained: 32 },
    { year: "Year 3", retained: 30 },
  ];

  const rpsTrend = [
    { q: "Q1", rps: 38 },
    { q: "Q2", rps: 51 },
    { q: "Q3", rps: 60 },
    { q: "Q4", rps: 65 },
  ];

  const heartMetrics = [
    { title: "Happiness", desc: "Satisfaction, NPS, SUS, CSAT" },
    { title: "Engagement", desc: "Session length, return rate" },
    { title: "Adoption", desc: "New users, feature adoption" },
    { title: "Retention", desc: "Churn, CLTV, loyalty" },
    { title: "Task Success", desc: "Completion rate, time on task" },
  ];

  const gsmRows = [
    {
      dim: "Happiness",
      goals: "Users find the app helpful & easy.",
      signals: "Positive reviews, recommendations.",
      metrics: "CSAT, NPS, SUS",
    },
    {
      dim: "Engagement",
      goals: "Users actively engage with content.",
      signals: "Higher session length, return rate.",
      metrics: "Avg. session length, returning users",
    },
    {
      dim: "Adoption",
      goals: "New users see product value.",
      signals: "Registrations, feature trials.",
      metrics: "Registration rate, feature adoption",
    },
    {
      dim: "Retention",
      goals: "Users stay loyal & purchase again.",
      signals: "Repeat usage, subscriptions.",
      metrics: "Retention, churn, CLTV",
    },
    {
      dim: "Task Success",
      goals: "Users complete tasks efficiently.",
      signals: "Fewer errors, faster completion.",
      metrics: "TSR, Time on Task, UES",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Impact Measurement</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Quantifying the value of UX Research. As a UX Research Lead, I connect
          insights with business outcomes and make ROI transparent for leadership.
        </p>
      </section>

      {/* CLTV & Churn */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Measuring UX Value via CLTV</h2>
        <p>
          I link Customer Lifetime Value (CLTV) with churn to estimate how much
          poor UX costs — and what we gain by fixing it. Even a{" "}
          <strong>−10% reduction in UX-related churn</strong> can retain
          millions in revenue over three years.
        </p>

        <div className="rounded-2xl border border-border bg-background shadow-sm p-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={churnData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="retained" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Example cohort retention: only ~30% remain after Year 3. Removing UX
            friction (onboarding, clarity, speed) directly reduces churn and
            increases CLTV.
          </p>
        </div>
      </section>

      {/* HEART Framework */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Tracking UX Value via the HEART Framework
        </h2>
        <p>
          Google’s HEART framework scales UX measurement: I select the most
          relevant dimensions per initiative and tie qualitative signals to
          product analytics for continuous tracking.
        </p>

        {/* HEART Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {heartMetrics.map((m) => (
            <div
              key={m.title}
              className="rounded-xl border border-border bg-background p-5 shadow-sm"
            >
              <h3 className="font-semibold">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Goals → Signals → Metrics */}
        <div className="rounded-2xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="text-left p-3">Dimension</th>
                <th className="text-left p-3">Goals</th>
                <th className="text-left p-3">Signals</th>
                <th className="text-left p-3">Metrics</th>
              </tr>
            </thead>
            <tbody>
              {gsmRows.map((row) => (
                <tr key={row.dim} className="border-t border-border">
                  <td className="p-3 font-medium">{row.dim}</td>
                  <td className="p-3">{row.goals}</td>
                  <td className="p-3">{row.signals}</td>
                  <td className="p-3">{row.metrics}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground">
          Not every project needs all five dimensions. In enterprise contexts,
          Engagement can be less meaningful (mandated usage) — I focus on
          Adoption, Retention and Task Success instead.
        </p>
      </section>

      {/* Organizational Impact – Research Promoter Score */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Measuring Organizational Impact</h2>
        <p>
          Beyond user & business metrics, I also track how Research is perceived.
          Inspired by Frederik Bader’s <em>Research Promoter Score (RPS)</em>, I
          pulse stakeholders each quarter to measure trust and internal demand.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* KPI Card */}
          <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm">
            <div className="text-sm text-muted-foreground">Current RPS</div>
            <div className="text-5xl font-bold mt-1">+65</div>
            <div className="text-xs text-muted-foreground mt-2">
              “How likely would you recommend UX Research to your colleagues?”
              (0–10 scale → Promoters − Detractors)
            </div>
          </div>

          {/* Trend */}
          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rpsTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="q" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="rps" strokeWidth={3} dot />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Organizational value growing quarter over quarter — higher pull for
              research, faster decision cycles, better alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Why UX Matters */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why UX Matters</h2>
        <p>
          32% of customers churn after a single bad experience. With large
          cohorts and significant acquisition spend, every percentage point in
          churn reduction translates into material value — UX turns cost centers
          into value drivers.
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Every % in churn reduction = millions retained</li>
          <li>Higher CLTV through clarity, speed, and trust</li>
          <li>Better stakeholder alignment via measurable outcomes</li>
        </ul>
      </section>

      {/* Takeaway */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Takeaway</h2>
        <p className="max-w-2xl mx-auto">
          I demonstrate impact on three levels:{" "}
          <strong>User Value</strong> (experience quality),{" "}
          <strong>Business Value</strong> (revenue, retention), and{" "}
          <strong>Organizational Value</strong> (ResearchOps maturity & trust).
          That’s how Research informs strategy — not just features.
        </p>
      </section>
    </div>
  );
}
