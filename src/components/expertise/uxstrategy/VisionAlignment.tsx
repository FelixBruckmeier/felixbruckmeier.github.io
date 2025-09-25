// src/components/expertise/VisionAlignment.tsx
export default function VisionAlignment() {
  return (
    <div className="flex justify-center items-center">
      <svg
        width="280"
        height="280"
        viewBox="0 0 280 280"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full"
      >
        <circle cx="140" cy="140" r="120" fill="#f9fafb" stroke="#d1d5db" strokeWidth="2" />
        <circle cx="140" cy="140" r="90" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
        <circle cx="140" cy="140" r="60" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2" />
        <circle cx="140" cy="140" r="30" fill="#2563eb" />
        <text
          x="140"
          y="145"
          textAnchor="middle"
          className="text-white font-semibold text-sm"
          fill="white"
        >
          North Star
        </text>
      </svg>
    </div>
  );
}
