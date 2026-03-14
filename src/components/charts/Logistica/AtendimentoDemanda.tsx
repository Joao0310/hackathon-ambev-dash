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
  { week: "W0", demanda: 39762, producao: 39240, transferencia: 522 },
  { week: "W1", demanda: 42691, producao: 25200	, transferencia: 17491 },
  { week: "W2", demanda: 31514, producao: 36360, transferencia: 0 },
  { week: "W3", demanda: 35351, producao: 25200, transferencia: 10151 }
];

export default function DemandCoverageChart() {
  return (
    <ChartContainer>
      <ChartTitle>Plano de Atendimento da Demanda</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="producao" stackId="a" fill="#3b82f6" />
          <Bar dataKey="transferencia" stackId="a" fill="#10b981" />
          <Bar dataKey="demanda" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}