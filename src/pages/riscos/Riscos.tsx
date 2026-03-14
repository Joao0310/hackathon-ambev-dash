import StockRiskChart from "../../components/charts/Risco/RiscoDOI";
import TransferDependencyChart from "../../components/charts/Risco/DependenciaTransferencia";
import KpiCard from "../../components/KpiCard/KpiCard";

export default function Riscos() {

  const aquirazCapacity = 95.7;
  const pernambucoCapacity = 93.3;

  const getCapacityColor = (value: number) => {
    return value >= 96 ? "#ef4444" : "#10b981";
  };

  return (
    <div>
      <h1>Riscos Operacionais</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <KpiCard
          title="Capacidade F. Aquiraz - CE"
          value={`${aquirazCapacity}%`}
          color={getCapacityColor(aquirazCapacity)}
        />

        <KpiCard
          title="Capacidade F. Pernambuco - PE"
          value={`${pernambucoCapacity}%`}
          color={getCapacityColor(pernambucoCapacity)}
        />
      </div>

      <StockRiskChart />
      <TransferDependencyChart />
    </div>
  );
}