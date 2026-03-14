import styled from "styled-components";
 
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 22px 24px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  margin-bottom: 20px;
`;
 
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
 
const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;
 
const Pill = styled.span`
  font-size: 11px;
  background: #f0f4f8;
  color: #6b7280;
  padding: 3px 10px;
  border-radius: 20px;
`;
 
type Props = { title: string; tag?: string; children: React.ReactNode };
 
export default function ChartCard({ title, children }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {children}
    </Card>
  );
}