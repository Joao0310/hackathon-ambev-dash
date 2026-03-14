import KpiCard from "../../components/KpiCard/KpiCard";
import DemandProductionChart from "../../components/charts/Overview/ProducaoDemanda";
import GapRegionChart from "../../components/charts/Overview/GapRegiao";
import TransferChart from "../../components/charts/Overview/TransferenciaRegiao";

export default function Overview() {
  return (
    <div>
      <h1>Overview</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        <KpiCard title="Demanda Total" value="298.636 HL" />
        <KpiCard title="Produção Total" value="252.000 HL" />
        <KpiCard title="Déficit" value="46.636 HL" />
        <KpiCard title="Custo Logístico" value="R$ 8.6M" />
      </div>

      <DemandProductionChart />
      <GapRegionChart />
      <TransferChart />
      
    </div>
  );
}