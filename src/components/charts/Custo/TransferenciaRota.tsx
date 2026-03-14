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
  { rota: "SP → NE Norte", custo: 2726133 },
  { rota: "SP → NE Sul", custo: 2534152 },
  { rota: "Uberlândia → Araguaia", custo: 0 }
];

export default function TransferCostChart() {
  return (
    <ChartContainer>
      <ChartTitle>Custo de Transferência por Rota</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rota" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="custo" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}