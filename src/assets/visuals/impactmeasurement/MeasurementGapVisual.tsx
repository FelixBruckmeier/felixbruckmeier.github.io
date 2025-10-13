// src/assets/visuals/impactmeasurement/MeasurementGapVisual.tsx
import React from "react";
import { colors, radii, shadows } from "@/lib/tokens";

export default function MeasurementGapVisual() {
  return (
    <div
      className={`${colors.background.bg} ${colors.background.text} w-full max-w-5xl mx-auto rounded-2xl ${shadows.md} border ${colors.border} p-6 md:p-10`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
        <h3 className="text-lg font-semibold text-foreground">
          Key Performance Indicator Dashboard
        </h3>
        <span className="text-sm text-muted-foreground">Q3 Overview</span>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <KpiCard
          label="Sales KPI"
          chart={<SalesChart color="#487CA5" />}
          value="+8 %"
          valueColor="text-[#487CA5] dark:text-[#447ACB]"
          bgColor="bg-[#E9F3F7] dark:bg-[#1F282D]"
        />
        <KpiCard
          label="Marketing KPI"
          chart={<MarketingPie color="#548164" />}
          value="↑ Stable"
          valueColor="text-[#548164] dark:text-[#4F9768]"
          bgColor="bg-[#EEF3ED] dark:bg-[#242B26]"
        />
        <KpiCard
          label="IT KPI"
          chart={<ITPerformanceGauge color="#8A67AB" />}
          value="99.8 %"
          valueColor="text-[#8A67AB] dark:text-[#865DBB]"
          bgColor="bg-[#F6F3F8] dark:bg-[#2A2430]"
        />
        <KpiCard
          label="UX KPI"
          chart={<WarningIcon />}
          value="Missing Data"
          valueColor="text-[#C4554D] dark:text-[#BE524B] font-semibold"
          bgColor="bg-[#F3EEEE] dark:bg-[#2E2724] border border-dashed border-[#C4554D]/50"
        />
      </div>
    </div>
  );
}

/* KPI Card Component */
function KpiCard({
  label,
  chart,
  value,
  valueColor,
  bgColor,
}: {
  label: string;
  chart: React.ReactNode;
  value: string;
  valueColor?: string;
  bgColor?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${radii.lg} p-6 ${
        bgColor || "bg-[#F3F4F6] dark:bg-[#1F1F1F]"
      } ${shadows.sm}`}
    >
      {/* Label */}
      <span className="text-muted-foreground text-sm mb-3">{label}</span>

      {/* Chart or Icon */}
      <div className="flex items-center justify-center h-10 mb-3">{chart}</div>

      {/* Value */}
      <span className={`${valueColor} text-base text-center`}>{value}</span>
    </div>
  );
}

/* Sales KPI Chart */
function SalesChart({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 100 60" className="w-20 h-10">
      <line x1="5" y1="50" x2="95" y2="50" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="5" y1="10" x2="5" y2="50" stroke="#D1D5DB" strokeWidth="1" />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        points="5,45 25,40 45,35 65,25 85,15 95,10"
      />
      <circle cx="95" cy="10" r="2" fill={color} />
    </svg>
  );
}

/* Marketing KPI Pie Chart */
function MarketingPie({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 36 36" className="w-10 h-10">
      <circle
        cx="18"
        cy="18"
        r="15.9155"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="3"
      />
      <circle
        cx="18"
        cy="18"
        r="15.9155"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="70 30"
        strokeDashoffset="25"
      />
    </svg>
  );
}

/* IT KPI Gauge Chart */
function ITPerformanceGauge({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 36 20" className="w-16 h-10">
      <path
        d="M2 18 A16 16 0 0 1 34 18"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="3"
      />
      <path
        d="M2 18 A16 16 0 0 1 30 8"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      <circle cx="18" cy="18" r="2" fill={color} />
      <line
        x1="18"
        y1="18"
        x2="26"
        y2="8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* UX KPI – Missing Data Icon */
function WarningIcon() {
  return (
    <div className="flex items-center justify-center h-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-8 h-8 text-[#C4554D] dark:text-[#BE524B]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        />
      </svg>
    </div>
  );
}

