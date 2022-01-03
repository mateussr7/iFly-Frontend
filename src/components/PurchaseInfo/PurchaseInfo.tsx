import { Button } from "@material-ui/core";
import moment from "moment";
import { useSelector } from "react-redux";
import { fetchAirlines } from "../../store/airlines/selectors";
import { Compra } from "../../store/compra/types";
import { Airline } from "../../store/user/types";
import { Voo } from "../../store/voo/types";
import "./PurchaseInfo.scss";

interface props {
  voo: Voo;
  airline: Airline;
  compra: Compra;
}
const PurchaseInfo = ({ voo, airline, compra }: props) => {
  const clickVoo = () => {};
  const airlines: Airline[] = useSelector(fetchAirlines);
  return (
    <div className="flight-card flex-row">
      <div className="flight-info flex-row-column">
        <div className="flight-title">
          <div>COMPANHIA AÉREA: {airlines.find((a) => a.id === voo.idEmpresaAerea)?.nome}</div>
          <div>Data: {moment(voo.horario).zone(6).format("L - HH:mm")}</div>
        </div>

        <div className="small-infos flex-row">
          <div className="flight-hour">
            Rota: ? -{">"} ?
          </div>
          <div className="flight-capacity-available">
            Data da compra:{moment(compra.data).zone(6).format("L")}
          </div>
          <div className="flight-capacity">Valor: R${voo.valor}</div>
        </div>
      </div>
      <div className="flight-action flex-row-column">
        <div className="flight-price">Assento: {compra.assento}</div>
        <div className="flight-button">
          <Button variant="contained" onClick={clickVoo}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
