import styled from "styled-components";
import PageHeader from "../../components/layout/PageHeader";
import ChartCard from "../../components/ui/ChartCard";
import KpiCard from "../../components/KpiCard/KpiCard";
import StockRiskChart from "../../components/charts/Risco/RiscoDOI";
import TransferDependencyChart from "../../components/charts/Risco/DependenciaTransferencia";
 
const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;
 
const aquiraz = 95.7;
const pernambuco = 93.3;
 
export default function Riscos() {
  return (
    <>
      <PageHeader title="Riscos Operacionais" description="Capacidade fabril e exposição a transferências" />
 
      <KpiGrid>
        <KpiCard
          title="Capacidade F. Aquiraz · CE"
          value={`${aquiraz}%`}
          sub="Próximo ao limite crítico"
          accent="#f59e0b"
        />
        <KpiCard
          title="Capacidade F. Pernambuco · PE"
          value={`${pernambuco}%`}
          sub="Dentro da faixa operacional"
          accent="#22c55e"
        />
      </KpiGrid>
 
      <ChartCard title="Risco de Estoque (DOI)">
        <StockRiskChart />
      </ChartCard>
 
      <ChartCard title="Dependência de Transferências">
        <TransferDependencyChart />
      </ChartCard>
    </>
  );
}