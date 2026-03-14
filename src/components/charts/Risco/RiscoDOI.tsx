import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";

import { ChartContainer, ChartTitle } from "../../../styles/chart.styles";

const data = [
  { week: "W0", doi: 9 },
  { week: "W1", doi: 7 },
  { week: "W2", doi: 21 },
  { week: "W3", doi: 11 }
];

export default function StockRiskChart() {
  return (
    <ChartContainer>
      <ChartTitle>Risco de Ruptura de Estoque (DOI)</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="doi" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}