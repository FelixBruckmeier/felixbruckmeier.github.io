type Props = { title?: string; pillars?: string[]; footer?: string };
export default function HouseDiagram({
  title = "UX Research",
  pillars = ["Strategy", "Ops", "Methods", "Activation", "Leadership"],
  footer = "Impact",
}: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <svg viewBox="0 0 600 400" className="w-full h-auto">
        <polygon points="300,40 520,140 80,140" className="fill-neutral-800 dark:fill-neutral-200" />
        <text x="300" y="105" textAnchor="middle" className="fill-white dark:fill-neutral-900 text-[20px] font-semibold">{title}</text>
        <rect x="100" y="140" width="400" height="200" className="fill-none stroke-neutral-400" />
        {pillars.map((p, i) => {
          const x = 120 + i * (360 / (pillars.length - 1 || 1));
          return (
            <g key={p}>
              <line x1={x} y1={340} x2={x} y2={140} className="stroke-neutral-400" />
              <text x={x} y={360} textAnchor="middle" className="fill-current text-[14px]">{p}</text>
            </g>
          );
        })}
        <rect x="100" y="320" width="400" height="20" className="fill-neutral-800 dark:fill-neutral-200" />
        <text x="300" y="335" textAnchor="middle" className="fill-white dark:fill-neutral-900 text-[14px] font-medium">{footer}</text>
      </svg>
    </div>
  );
}
