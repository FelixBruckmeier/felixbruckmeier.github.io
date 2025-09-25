// src/components/expertise/strategicuxresearch/RITECycle.tsx

const steps = ["Plan", "Test", "Learn", "Adjust", "Repeat"];

export default function RITECycle() {
  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 300 300"
        width="100%"
        height="auto"
        className="max-w-md"
      >
        <circle
          cx="150"
          cy="150"
          r="100"
          stroke="#3B82F6"
          strokeWidth="4"
          fill="none"
        />

        {steps.map((step, i) => {
          const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
          const x = 150 + 110 * Math.cos(angle);
          const y = 150 + 110 * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              alignmentBaseline="middle"
              className="text-sm fill-black"
            >
              {step}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
