import { Button } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { fetchAirlines } from "../../store/airlines/selectors";
import { Airline } from "../../store/user/types";
import { Voo } from "../../store/voo/types";
import "./FlightCard.scss";

interface props {
  voo: Voo;
  isPassageiro: Boolean;
  isAirline: Boolean;
  onClickAirline: (newVoo: Voo) => void;
  onClickPassageiro: (newVoo: Voo) => void;
}
const FlightCard = ({
  voo,
  isPassageiro,
  isAirline,
  onClickAirline,
  onClickPassageiro,
}: props) => {
  const airlines: Airline[] = useSelector(fetchAirlines);

  const clickVoo = () => {
    if (isAirline) onClickAirline(voo);
    if (isPassageiro) onClickPassageiro(voo);
  };

  return (
    <div className="flight-card flex-row">
      <div className="flight-info flex-row-column">
        <div className="flight-title">
          COMPANHIA AÉREA:{" "}
          {airlines.find((a) => a.id === voo.idEmpresaAerea)?.nome}
        </div>
        <div className="small-infos flex-row">
          <div className="flight-hour">
            Horário: {moment(voo.horario).utcOffset(-6).format("HH:mm")}
          </div>
          <div className="flight-capacity-available">
            Tickets para compra disponíveis:{" "}
            {voo.capacidade - voo.ticketsDisponiveis}
          </div>
          <div className="flight-capacity">Capacidade: {voo.capacidade}</div>
        </div>
      </div>
      <div className="flight-action flex-row-column">
        <div className="flight-price">R$ {voo.valor}</div>
        <div className="flight-button">
          <Button variant="contained" onClick={clickVoo}>
            {isPassageiro ? "Comprar" : "Editar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
