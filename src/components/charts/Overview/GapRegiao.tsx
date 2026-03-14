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
  { region: "MAPAPI", gap: -51627 },
  { region: "NE Norte", gap: 43100 },
  { region: "NE Sul", gap: -33086 },
  { region: "NO Araguaia", gap: -1489 },
  { region: "NO Centro", gap: 19785 }
];

export default function GapRegionChart() {
  return (
    <ChartContainer>
      <ChartTitle>Gap de Demanda por Região</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="gap" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}