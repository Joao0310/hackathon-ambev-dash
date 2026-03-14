import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";

import { ChartContainer, ChartTitle } from "../../../styles/chart.styles";

const data = [
    { produto: "Colorado Lager", maco: 300, custo: 150 },
    { produto: "Goose Island", maco: 350, custo: 155 },
    { produto: "Malzbier Brahma", maco: 285, custo: 149 }
];

export default function ProductionCostChart() {
  return (
    <ChartContainer>
      <ChartTitle>MACO vs Custo de Produção (R$/HL)</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="produto" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="maco" fill="#3b82f6" />
          <Bar dataKey="custo" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}