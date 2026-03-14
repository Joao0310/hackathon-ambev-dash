import { Card, Label, Value, Sub } from "./KpiCard.styles";
 
type Props = {
  title: string;
  value: string | number;
  sub?: string;
  accent?: string;
};
 
export default function KpiCard({ title, value, sub, accent }: Props) {
  return (
    <Card $accent={accent}>
      <Label>{title}</Label>
      <Value>{value}</Value>
      {sub && <Sub>{sub}</Sub>}
    </Card>
  );
}