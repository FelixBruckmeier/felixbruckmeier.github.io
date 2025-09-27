import { useState } from "react";
import SkillmapForm from "./SkillmapForm";
import SkillmapChart from "./SkillmapChart";
import SkillmapLegend from "./SkillmapLegend";

export default function Skillmap() {
  const [data, setData] = useState<any[]>([]);

  return (
    <div className="flex flex-col gap-12">
      <SkillmapForm onDataChange={setData} />
      <SkillmapChart data={data} />
      <SkillmapLegend />
    </div>
  );
}
