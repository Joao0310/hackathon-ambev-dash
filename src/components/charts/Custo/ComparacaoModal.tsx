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
  { sku: "Colorado Lager", cabotagem: 76.59, rodovia: 122.54 },
  { sku: "Goose Island", cabotagem: 82.39, rodovia: 131.82 },
  { sku: "Malzbier Brahma", cabotagem: 84.57, rodovia: 135.33 }
];

export default function ModalCostComparisonChart() {
  return (
    <ChartContainer>
      <ChartTitle>Comparação de Custos Logísticos por Modal (R$/HL)</ChartTitle>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sku" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="cabotagem" fill="#3b82f6" name="Cabotagem" />
          <Bar dataKey="rodovia" fill="#ef4444" name="Rodoviário (+60%)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}