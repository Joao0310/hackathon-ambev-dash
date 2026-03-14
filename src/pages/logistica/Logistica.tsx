import styled from "styled-components";
import PageHeader from "../../components/layout/PageHeader";
import ChartCard from "../../components/ui/ChartCard";
import KpiCard from "../../components/KpiCard/KpiCard";
import DemandCoverageChart from "../../components/charts/Logistica/AtendimentoDemanda";
import TransferOriginChart from "../../components/charts/Logistica/TransferenciaOrigem";
 
const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;
 
export default function Logistica() {
  return (
    <>
      <PageHeader title="Plano de Logística" description="Rotas, atendimento e origem das transferências" />
 
      <KpiGrid>
  <KpiCard 
    title="Regiões com Déficit"
    value="3 regiões"
    sub="Precisam de transferência para atender demanda"
    accent="#ef4444"
  />

  <KpiCard 
    title="Volume Médio por Região"
    value="29.864 HL"
    sub="Demanda média de Long Neck"
    accent="#3b82f6"
  />

  <KpiCard 
    title="Regiões com Transferência"
    value="4 regiões"
    sub="Dependem de abastecimento externo"
    accent="#f59e0b"
  />
</KpiGrid>
 
      <ChartCard title="Atendimento da Demanda">
        <DemandCoverageChart />
      </ChartCard>
 
      <ChartCard title="Origem das Transferências">
        <TransferOriginChart />
      </ChartCard>
    </>
  );
}