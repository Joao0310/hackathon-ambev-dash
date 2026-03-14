import styled from "styled-components";
 
export const Card = styled.div<{ $accent?: string }>`
  background: #fff;
  border-radius: 12px;
  padding: 20px 22px;
  border-top: 3px solid ${p => p.$accent || '#f5c518'};
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: box-shadow 0.2s;
 
  &:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
`;
 
export const Label = styled.p`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #9ca3af;
`;
 
export const Value = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #0a1628;
  letter-spacing: -0.5px;
  margin: 0;
`;
 
export const Sub = styled.span`
  font-size: 12px;
  color: #6b7280;
`;