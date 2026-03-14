import styled from "styled-components";

const Wrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
 
const H1 = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #0a1628;
  letter-spacing: -0.4px;
  margin: 0;
`;
 
const Breadcrumb = styled.p`
  font-size: 12px;
  color: #9ca3af;
  margin: 4px 0 0;
`;
 
const Date = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;
 
type Props = { title: string; description?: string };
 
export default function PageHeader({ title, description }: Props) {
  const today = new window.Date().toLocaleDateString("pt-BR", { dateStyle: "long" });
  return (
    <Wrap>
      <div>
        <H1>{title}</H1>
        <Breadcrumb>{description ?? "Hackathon Ambev · Nordeste"}</Breadcrumb>
      </div>
      <Date>{today}</Date>
    </Wrap>
  );
}