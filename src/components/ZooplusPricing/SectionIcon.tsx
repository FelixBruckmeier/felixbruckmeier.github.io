import React from "react";
import { Tag, Target, FlaskConical, BookOpen, Map, BarChart3, Eye, Lightbulb } from "lucide-react";

type SectionIconProps = {
  name: string;
  className?: string;
};

export default function SectionIcon({ name, className }: SectionIconProps) {
  const icons: Record<string, JSX.Element> = {
    title: <Tag className="w-7 h-7 text-blue-600" />,
    context: <Target className="w-6 h-6 text-blue-600" />,
    methods: <FlaskConical className="w-6 h-6 text-blue-600" />,
    guide: <BookOpen className="w-6 h-6 text-blue-600" />,
    journey: <Map className="w-6 h-6 text-blue-600" />,
    visawi: <BarChart3 className="w-6 h-6 text-blue-600" />,
    heatmap: <Eye className="w-6 h-6 text-blue-600" />,
    insights: <Lightbulb className="w-6 h-6 text-blue-600" />,
    impact: <Target className="w-6 h-6 text-blue-600" />,
  };

  return <span className={`inline-flex items-center mr-2 ${className || ""}`}>{icons[name]}</span>;
}
