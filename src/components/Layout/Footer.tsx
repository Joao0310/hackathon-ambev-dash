import styled from "styled-components";
 
const Bar = styled.footer`
  margin-top: 48px;
  padding: 20px 0;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #9ca3af;
`;
 
const Dot = styled.span`
  width: 6px; height: 6px;
  background: #f5c518;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;
 
export default function Footer() {
  return (
    <Bar>
      <span><Dot />Insper Jr. · Processo Seletivo 2026</span>
      <span>Hackathon Ambev</span>
    </Bar>
  );
}