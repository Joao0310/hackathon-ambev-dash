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
  { region: "MAPAPI", volume: 51627 },
  { region: "NE Sul", volume: 33086 },
  { region: "NO Araguaia", volume: 1489 }
];

export default function TransferChart() {
  return (
    <ChartContainer>
      <ChartTitle>Necessidade de Transferência por Região</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="volume" fill="#10b981" name="Transferência (HL)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}