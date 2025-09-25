import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

interface MatrixData {
  area: string;
  value: number;
}

interface MatrixChartProps {
  data: MatrixData[];
}

export default function MatrixChart({ data }: MatrixChartProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="area" />
          <Tooltip />
          <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 6, 6]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
