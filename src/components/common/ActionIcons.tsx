// src/components/ui/ActionIcons.tsx
import React from "react";
import { colors } from "@/lib/tokens";
import { cn } from "@/lib/utils";

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

interface BadgeIconProps extends IconProps {
  badgeColor?: "success" | "danger" | "accent";
  badgeText?: string;
}

export function IconRealizeProblem({ width = 80, height = 60, className, badgeColor = "danger", badgeText = "!" }: BadgeIconProps) {
  const fill = badgeColor === "danger" ? colors.notion.red.bg : colors.notion.green.bg;
  return (
    <div className={cn("flex justify-center", className)}>
      <svg width={width} height={height} viewBox="0 0 80 60" fill="none">
        <rect x="5" y="15" width="60" height="30" rx="6" fill={colors.notion.gray.bg} stroke={colors.notion.gray.text} strokeWidth="2" />
        <text x="15" y="35" fontSize="12" fill={colors.notion.gray.text}>Text...</text>
        <circle cx="65" cy="40" r="8" fill={fill} />
        <text
          x="65"
          y="40"
          fontSize="12"
          fill={colors.background.text}
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {badgeText}
        </text>
      </svg>
    </div>
  );
}

export function IconWorkaround({ width = 120, height = 60, className }: IconProps) {
  return (
    <div className={cn("flex justify-center", className)}>
      <svg width={width} height={height} viewBox="0 0 120 60" fill="none">
        <rect x="10" y="18" width="100" height="24" rx="12" fill={colors.background.bg} stroke={colors.notion.blue.text} strokeWidth="2" />
        <text x="20" y="34" fontSize="12" fill={colors.muted.text}>google search…</text>
        <circle cx="96" cy="30" r="7" stroke={colors.notion.blue.text} strokeWidth="2" />
        <line x1="100" y1="34" x2="108" y2="42" stroke={colors.notion.blue.text} strokeWidth="2" />
      </svg>
    </div>
  );
}

export function IconManualDelete({ width = 80, height = 60, className }: IconProps) {
  return (
    <div className={cn("flex justify-center", className)}>
      <svg width={width} height={height} viewBox="0 0 80 60" fill="none">
        <rect x="5" y="15" width="70" height="30" rx="6" fill={colors.notion.gray.bg} stroke={colors.notion.gray.text} strokeWidth="2" />
        <rect x="15" y="28" width="40" height="6" fill={colors.notion.blue.bg} />
        <line x1="55" y1="25" x2="55" y2="45" stroke={colors.notion.blue.text} strokeWidth="3" markerEnd="url(#arrow)" />
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill={colors.notion.blue.text} />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export function IconEmptyField({ width = 80, height = 60, className, badgeColor = "success", badgeText = "✓" }: BadgeIconProps) {
  const fill = badgeColor === "success" ? colors.notion.green.bg : colors.notion.red.bg;
  return (
    <div className={cn("flex justify-center", className)}>
      <svg width={width} height={height} viewBox="0 0 80 60" fill="none">
        <rect x="5" y="15" width="60" height="30" rx="6" fill={colors.notion.gray.bg} stroke={colors.notion.gray.text} strokeWidth="2" />
        <text x="15" y="35" fontSize="12" fill={colors.notion.gray.text}>Text...</text>
        <circle cx="65" cy="40" r="8" fill={fill} />
        <text
          x="65"
          y="40"
          fontSize="12"
          fill={colors.background.text}
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {badgeText}
        </text>
      </svg>
    </div>
  );
}
