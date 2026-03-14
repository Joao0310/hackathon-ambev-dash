import styled from "styled-components";
import KpiCard from "../../components/KpiCard/KpiCard";
import PageHeader from "../../components/layout/PageHeader";
import ChartCard from "../../components/ui/ChartCard";
import DemandProductionChart from "../../components/charts/Overview/ProducaoDemanda";
import GapRegionChart from "../../components/charts/Overview/GapRegiao";
import TransferChart from "../../components/charts/Overview/TransferenciaRegiao";
 
const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
 
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
`;
 
const kpis = [
  { title: "Demanda Total",    value: "298.636 HL", sub: "Região Nordeste",  accent: "#f5c518" },
  { title: "Produção Total",   value: "252.000 HL", sub: "Capacidade atual", accent: "#3b82f6" },
  { title: "Déficit",          value: "46.636 HL",  sub: "▼ 15,6% da demanda", accent: "#ef4444" },
  { title: "Custo Logístico",  value: "R$ 8,6M",    sub: "Total estimado",  accent: "#22c55e" },
];
 
export default function Overview() {
  return (
    <>
      <PageHeader title="Overview" description="Visão geral de produção, demanda e logística" />
 
      <KpiGrid>
        {kpis.map(k => <KpiCard key={k.title} {...k} />)}
      </KpiGrid>
 
      <ChartCard title="Produção vs Demanda">
        <DemandProductionChart />
      </ChartCard>
 
      <ChartCard title="Gap de Demanda por Região">
        <GapRegionChart />
      </ChartCard>
 
      <ChartCard title="Transferências Regionais">
        <TransferChart />
      </ChartCard>
    </>
  );
}