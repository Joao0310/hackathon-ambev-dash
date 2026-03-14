import TransferCostChart from "../../components/charts/Custo/TransferenciaRota";
import ModalCostComparisonChart from "../../components/charts/Custo/ComparacaoModal";
import ProductionCostChart from "../../components/charts/Custo/MakoProducao";

export default function Custo() {
  return (
    <div>
      <h1> Custos Operacionais</h1>

      <TransferCostChart />
      <ModalCostComparisonChart />
      <ProductionCostChart />
    </div>
  );
}
