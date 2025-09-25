/* eslint-disable react/no-unknown-property */
type Props = {
  title?: string;
};

export default function ReOpsWheel({ title = "ResearchOps — 6 Key Areas" }: Props) {
  const colors = [
    "#E8ECF7", // Governance
    "#EAF7F1", // Insights Activation & Enablement
    "#FFF3E6", // Process & Scope
    "#E9F2FF", // Tools & Automation
    "#F9E8EE", // Org Alignment & Evangelization
    "#F2F0FA", // Resource & Strategic Management
  ];

  const labels = [
    "Governance",
    "Insights Activation\n& Enablement",
    "Process & Scope",
    "Tools & Automation",
    "Organizational Alignment\n& Evangelization",
    "Resource & Strategic\nManagement",
  ];

  const wedgePath =
    "M 0 -120 A 120 120 0 0 1 103.923 -60 L 0 0 Z";

  const labelPositions = [
    { x: 0, y: -145 },
    { x: 126, y: -73 },
    { x: 126, y: 73 },
    { x: 0, y: 145 },
    { x: -126, y: 73 },
    { x: -126, y: -73 },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <svg
        viewBox="-180 -180 360 360"
        width="100%"
        className="max-w-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="0" cy="0" r="122" fill="white" stroke="#D1D5DB" strokeWidth="1" />

        {Array.from({ length: 6 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 60})`}>
            <path d={wedgePath} fill={colors[i]} stroke="#E5E7EB" strokeWidth="1" />
          </g>
        ))}

        <circle cx="0" cy="0" r="48" fill="white" stroke="#D1D5DB" />
        <text x="0" y="-6" textAnchor="middle" fontSize="10" fill="#111827">
          ResearchOps
        </text>
        <text x="0" y="10" textAnchor="middle" fontSize="10" fill="#6B7280">
          6 Key Areas
        </text>

        {labels.map((label, i) => (
          <g key={i} transform={`translate(${labelPositions[i].x}, ${labelPositions[i].y})`}>
            <text
              textAnchor="middle"
              fontSize="10"
              fill="#111827"
              style={{ whiteSpace: "pre-line" }}
            >
              {label}
            </text>
          </g>
        ))}
      </svg>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-4xl">
        <LegendItem color={colors[0]} title="Governance">
          Ethics, Consent, Privacy, Compliance, Risk
        </LegendItem>
        <LegendItem color={colors[1]} title="Insights Activation & Enablement">
          Repository, Templates, Sharing, Findability, Reuse
        </LegendItem>
        <LegendItem color={colors[2]} title="Process & Scope">
          Request-Intake, Recruiting, Workflows, QA, Standards
        </LegendItem>
        <LegendItem color={colors[3]} title="Tools & Automation">
          Stack Evaluation, Provisioning, Automation, Integrations
        </LegendItem>
        <LegendItem color={colors[4]} title="Organizational Alignment & Evangelization">
          Literacy, Enablement, Partnerships, Storytelling
        </LegendItem>
        <LegendItem color={colors[5]} title="Resource & Strategic Management">
          Budget, Staffing, Roadmaps, KPIs/ROI, OKR-Link
        </LegendItem>
      </div>
    </div>
  );
}

function LegendItem({
  color,
  title,
  children,
}: {
  color: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
      <span
        className="inline-block w-3.5 h-3.5 rounded-sm flex-shrink-0 mt-1"
        style={{ background: color }}
      />
      <div className="text-sm">
        <div className="font-medium text-gray-900">{title}</div>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
}
