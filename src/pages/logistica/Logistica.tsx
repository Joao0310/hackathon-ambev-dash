import DemandCoverageChart from "../../components/charts/Logistica/AtendimentoDemanda";
import TransferOriginChart from "../../components/charts/Logistica/TransferenciaOrigem";

export default function Logistica() {
  return (
    <div>
      <h1>Plano de logística</h1>

      <DemandCoverageChart />
      <TransferOriginChart />
    </div>
  );
}