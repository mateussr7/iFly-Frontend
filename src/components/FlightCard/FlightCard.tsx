import { Button } from "@material-ui/core";
import React from "react";
import { Airline } from "../../store/user/types";
import { Voo } from "../../store/voo/types";
import "./FlightCard.scss";

interface props {
  voo: Voo;
  airline?: Airline;
}
const FlightCard = ({ voo, airline }: props) => {
  const clickVoo = () => {};
  return (
    <div className="flight-card flex-row">
      <div className="flight-info flex-row-column">
        <div className="flight-title">
          COMPANHIA AÉREA: {voo.idEmpresaAerea}
        </div>
        <div className="small-infos flex-row">
          <div className="flight-hour">
            Horário:{" "}
            {voo.horario.toString().split(" ")[1].split(":")[0] +
              ":" +
              voo.horario.toString().split(" ")[1].split(":")[1]}
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
            {airline ? "Editar" : "Comprar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
