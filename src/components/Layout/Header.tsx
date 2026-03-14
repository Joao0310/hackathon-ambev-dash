import styled from "styled-components";
 
const Bar = styled.header`
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  position: sticky;
  top: 0;
  z-index: 10;
`;
 
const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #0a1628;
  letter-spacing: -0.2px;
`;
 
const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f0f4f8;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  color: #374151;
  font-weight: 500;
 
  &::before {
    content: '';
    width: 8px; height: 8px;
    background: #22c55e;
    border-radius: 50%;
  }
`;
 
export default function Header() {
  return (
    <Bar>
      <Title>Ambev · Logistics Intelligence</Title>
      <Badge>Long Neck · Nordeste</Badge>
    </Bar>
  );
}