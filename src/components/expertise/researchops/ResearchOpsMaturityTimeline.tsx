/* eslint-disable react/no-unknown-property */
import { stages } from "./reopsData";

export default function ResearchOpsMaturityTimeline() {
  return (
    <div className="flex flex-col gap-20">
      {stages.map((stage, i) => (
        <div key={i} className="flex flex-col gap-8">
          {/* Stage-Header */}
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">
              Stage {i + 1}: {stage.level}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {stage.description}
            </p>
          </div>

          {/* Areas */}
          <div className="grid gap-6 md:grid-cols-2">
            {stage.areas.map((area, j) => (
              <div
                key={j}
                className="rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                {/* Titel mit Hintergrundfarbe */}
                <div
                  className="px-4 py-2 text-sm font-semibold text-gray-900"
                  style={{ backgroundColor: area.color }}
                >
                  {area.name}
                </div>

                {/* Beschreibung + Empfehlung */}
                <div className="p-4 bg-white">
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <p className="text-gray-600 text-sm flex items-start gap-2 leading-relaxed">
                    <span className="text-lg">🤲</span>
                    <span>{area.recommendation}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
