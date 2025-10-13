// src/assets/visuals/impactmeasurement/UXMeasurementChallengeVisual.tsx
import React from "react";

export default function UXMeasurementChallengeVisual() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-[#F9F9F9] dark:bg-[#1C1C1C] rounded-2xl p-8 shadow-sm border border-border">
      {/* KPI Row */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Happiness */}
        <div className="flex flex-col items-center justify-center rounded-xl p-6 bg-[#F3F4F6] dark:bg-[#2A2A2A]">
          <span className="text-muted-foreground mb-2">Happiness</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-[#9CA3AF] flex items-center justify-center text-sm text-gray-400">
            N/A
          </div>
          <span className="text-xs mt-2 text-gray-500 dark:text-gray-400">
            Data missing
          </span>
        </div>

        {/* Engagement */}
        <div className="flex flex-col items-center justify-center rounded-xl p-6 bg-[#F3F4F6] dark:bg-[#2A2A2A]">
          <span className="text-muted-foreground mb-2">Engagement</span>
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-[#E5E7EB] dark:border-[#3A3A3A]" />
            <div
              className="absolute inset-0 rounded-full border-4 border-blue-500"
              style={{ clipPath: "inset(50% 0 0 0)" }}
            />
          </div>
          <span className="text-xs mt-2 text-blue-600 dark:text-blue-400">
            Partial data
          </span>
        </div>

        {/* Task Success */}
        <div className="flex flex-col items-center justify-center rounded-xl p-6 bg-[#F3F4F6] dark:bg-[#2A2A2A]">
          <span className="text-muted-foreground mb-2">Task Success</span>
          <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-green-600 font-semibold">
            92%
          </div>
          <span className="text-xs mt-2 text-green-600 dark:text-green-400">
            Measured
          </span>
        </div>
      </div>

      {/* Warning Message */}
      <div className="flex flex-col items-center justify-center text-center text-sm text-yellow-600 dark:text-yellow-500 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="w-6 h-6 mb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
          />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12" y2="17" />
        </svg>
        <span className="font-medium">
          Incomplete data — UX metrics disconnected from business KPIs
        </span>
      </div>
    </div>
  );
}
