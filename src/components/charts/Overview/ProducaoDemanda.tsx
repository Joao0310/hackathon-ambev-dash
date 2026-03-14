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
  { week: "W0", demanda: 39762, producao: 39240 },
  { week: "W1", demanda: 42691, producao: 25200 },
  { week: "W2", demanda: 31514, producao: 36360 },
  { week: "W3", demanda: 35351, producao: 25200 }
];

export default function DemandProductionChart() {
  return (
    <ChartContainer>
      <ChartTitle>Demanda vs Produção por Semana</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="demanda" stroke="#ef4444" />
          <Line type="monotone" dataKey="producao" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}