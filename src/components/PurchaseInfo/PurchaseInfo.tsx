import { Button } from "@material-ui/core";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrigDestByRotaId } from "../../services/rotaServices";
import { fetchAirlines } from "../../store/airlines/selectors";
import { cancelCompra } from "../../store/compra/actions";
import { Compra } from "../../store/compra/types";
import { Airline } from "../../store/user/types";
import { OrigDestRota, Voo } from "../../store/voo/types";
import "./PurchaseInfo.scss";

interface props {
  voo: Voo;
  airline: Airline;
  compra: Compra;
}
const PurchaseInfo = ({ voo, airline, compra }: props) => {
  
  const dispatch = useDispatch();
  const [origDest, setOrigDest] = useState<OrigDestRota>();

  
  const getOrigDest = async () => {
    const result = await getOrigDestByRotaId(voo.idRota);
    setOrigDest(result);
  }

  useEffect(()=>{
    getOrigDest();
  },[])

  useEffect(()=>{
  },[origDest])
  const clickVoo = () => {
    dispatch(
      cancelCompra({
        data: moment(compra.data).format("yyyy-MM-DD HH:mm:ss"),
        idVoo: compra.idVoo,
        idPassageiro: compra.idPassageiro,
        assento: compra.assento,
      })
    );
  };
  const airlines: Airline[] = useSelector(fetchAirlines);
  return (
    <div className="flight-card flex-row">
      <div className="flight-info flex-row-column">
        <div className="flight-title">
          <div>COMPANHIA AÉREA: {airlines.find((a) => a.id === voo.idEmpresaAerea)?.nome}</div>
          <div>Data: {moment(voo.horario).zone(6).format("DD/MM/yyyy - HH:mm")}</div>
        </div>

        <div className="small-infos flex-row">
          <div className="flight-hour">
            Rota: {origDest && origDest.aeroportoOrig + " -> " + origDest.aeroportoDest}
          </div>
          <div className="flight-capacity-available">
            Data da compra: {moment(compra.data).zone(6).format("DD/MM/yyyy")}
          </div>
          <div className="flight-capacity">Valor: R${voo.valor}</div>
        </div>
      </div>
      <div className="flight-action flex-row-column">
        <div className="flight-price">Assento: {compra.assento}</div>
        <div className="flight-button">
          <Button variant="contained" onClick={clickVoo} disabled={moment().isAfter(moment(voo.horario))}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
