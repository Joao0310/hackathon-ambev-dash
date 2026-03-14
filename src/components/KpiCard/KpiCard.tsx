import { Card, Title, Value } from "./KpiCard.styles";

type Props = {
  title: string;
  value: string | number;
  color?: string;
};

export default function KpiCard({ title, value, color }: Props) {
  return (
    <Card>
      <Title>{title}</Title>
      <Value style={{ color }}>{value}</Value>
      
    </Card>
  );
}