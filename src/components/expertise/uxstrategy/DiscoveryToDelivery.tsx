import Section from "@/components/expertise/Section";

interface Step {
  label: string;
}

interface CycleProps {
  title: string;
  steps: Step[];
  color: string;
}

function Cycle({ title, steps, color }: CycleProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h4 className="font-semibold text-lg">{title}</h4>
      <div className="relative w-64 h-64">
        {steps.map((step, i) => {
          const angle = (i / steps.length) * 2 * Math.PI;
          const radius = 100;
          const cx = 100 + radius * Math.cos(angle);
          const cy = 100 + radius * Math.sin(angle);
          return (
            <div
              key={i}
              className={`absolute px-3 py-2 rounded-full bg-${color}-100 text-${color}-800 text-xs shadow`}
              style={{
                left: `${cx}px`,
                top: `${cy}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {step.label}
            </div>
          );
        })}
        <div
          className={`absolute inset-0 flex items-center justify-center text-${color}-700 font-medium`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default function DiscoveryToDeliveryCycle() {
  const discoverySteps = [
    { label: "Ask Questions" },
    { label: "Empathize" },
    { label: "Define Problem" },
    { label: "Ideate" },
    { label: "Define Concept" },
  ];
  const prototypingSteps = [
    { label: "Design" },
    { label: "Validate" },
    { label: "Iterate" },
    { label: "Shippable Increment" },
  ];
  const optimizeSteps = [
    { label: "Monitor" },
    { label: "Visualize" },
    { label: "Validate Data" },
    { label: "Communicate" },
  ];

  return (
    <div className="flex flex-col gap-16">
      {/* Research Demand & Funnel */}
      <Section title="Research Demand & Funnel">
        <p className="mb-4 max-w-3xl">
          Research demand entsteht sowohl extern (Markt, Wettbewerb, Technologie) 
          als auch kontinuierlich aus allen Phasen. Alle Themen laufen in den 
          <strong> Research Refinement Funnel</strong>.
        </p>
        <div className="rounded-2xl shadow-md p-6 bg-white">
          <ul className="list-disc ml-6 mb-4">
            <li>Probleme & Objectives ableiten</li>
            <li>Fehlende Infos sammeln & Stakeholder einbeziehen</li>
            <li>Themen klassifizieren & Forschungsfragen formulieren</li>
          </ul>
          <p className="text-center italic text-gray-600">
            Danach fließen Themen zurück in Discovery, Prototyping oder Optimize.
          </p>
        </div>
      </Section>

      {/* Drei Zyklen nebeneinander */}
      <Section title="HCD über den Produktlebenszyklus">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <Cycle title="Discovery" steps={discoverySteps} color="blue" />
          <Cycle title="Prototyping" steps={prototypingSteps} color="green" />
          <Cycle title="Optimize" steps={optimizeSteps} color="purple" />
        </div>
      </Section>

      <Section center>
        <p className="italic text-gray-600">
          Insights und neue Fragestellungen fließen aus allen Phasen zurück in den Funnel – 
          der Kreislauf beginnt von vorne.
        </p>
      </Section>
    </div>
  );
}
