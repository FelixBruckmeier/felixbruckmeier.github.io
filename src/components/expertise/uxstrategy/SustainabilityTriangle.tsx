// src/components/expertise/SustainabilityTriangle.tsx
export default function SustainabilityTriangle() {
  return (
    <div className="flex justify-center items-center">
      <svg
        width="280"
        height="260"
        viewBox="0 0 280 260"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full"
      >
        <polygon
          points="140,20 260,220 20,220"
          fill="#f3f4f6"
          stroke="#4b5563"
          strokeWidth="2"
        />
        <text x="140" y="45" textAnchor="middle" className="text-gray-800 font-medium">
          Sustainability
        </text>
        <text x="250" y="215" textAnchor="middle" className="text-gray-800 font-medium">
          Ethics
        </text>
        <text x="30" y="215" textAnchor="middle" className="text-gray-800 font-medium">
          Accessibility
        </text>
      </svg>
    </div>
  );
}
