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
  { origem: "São Paulo", destino: "NE Norte", volume: 51627 },
  { origem: "São Paulo", destino: "NE Sul", volume: 33086  },
  { origem: "Uberlândia", destino: "Araguaia", volume: 1489  }
];

export default function TransferOriginChart() {
  return (
    <ChartContainer>
      <ChartTitle>Transferências por Origem Logística</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="origem" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="volume" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}