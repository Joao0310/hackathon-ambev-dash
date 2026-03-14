import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

import { ChartContainer, ChartTitle } from "../../../styles/chart.styles";

const data = [
  { name: "Produção Local", value: 62885  },
  { name: "Transferências", value: 86202 }
];

const COLORS = ["#10b981", "#ef4444"];

export default function TransferDependencyChart() {
  return (
    <ChartContainer>
      <ChartTitle>Dependência de Transferências Externas</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}