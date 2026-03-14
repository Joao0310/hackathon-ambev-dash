import styled from "styled-components";
import PageHeader from "../../components/layout/PageHeader";
import ChartCard from "../../components/ui/ChartCard";
import KpiCard from "../../components/KpiCard/KpiCard";
import TransferCostChart from "../../components/charts/Custo/TransferenciaRota";
import ModalCostComparisonChart from "../../components/charts/Custo/ComparacaoModal";
import ProductionCostChart from "../../components/charts/Custo/MakoProducao";
 
const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;
 
export default function Custo() {
  return (
    <>
      <PageHeader title="Custos Operacionais" description="Transferência, modal e produção (MACO)" />
 
      <KpiGrid>
        <KpiCard 
          title="Custo Logístico por HL"
          value="R$ 53,9 / HL"
          sub="Custo médio de transferência por volume"
          accent="#ef4444"
        />

        <KpiCard 
          title="Participação Logística"
          value="31%"
          sub="Volume atendido via transferências"
          accent="#22c55e"
        />

        <KpiCard 
          title="Regiões de Maior Custo"
          value="Mapapi / NE Sul"
          sub="Maior custo de abastecimento"
          accent="#f5c518"
        />
      </KpiGrid>
    
      <ChartCard title="Custo de Transferência por Rota">
        <TransferCostChart />
      </ChartCard>
 
      <ChartCard title="Comparação de Custos por Modal">
        <ModalCostComparisonChart />
      </ChartCard>
 
      <ChartCard title="Custo de Produção (MACO)">
        <ProductionCostChart />
      </ChartCard>
    </>
  );
}