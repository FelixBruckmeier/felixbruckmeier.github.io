// src/components/expertise/BusinessTechIntegration.tsx
export default function BusinessTechIntegration() {
  return (
    <div className="flex justify-center items-center">
      <svg
        width="320"
        height="200"
        viewBox="0 0 320 200"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full"
      >
        <circle cx="120" cy="100" r="80" fill="#60a5fa" fillOpacity="0.5" />
        <circle cx="200" cy="100" r="80" fill="#34d399" fillOpacity="0.5" />
        <text x="90" y="95" textAnchor="middle" className="text-gray-700 text-sm font-medium">
          Business
        </text>
        <text x="230" y="95" textAnchor="middle" className="text-gray-700 text-sm font-medium">
          Tech
        </text>
        <text x="160" y="110" textAnchor="middle" className="text-gray-900 font-bold text-sm">
          Innovation Zone
        </text>
      </svg>
    </div>
  );
}
