import { Button } from "@material-ui/core";
import React from "react";
import "./FlightCard.scss";

const FlightCard = () => {
  return (
    <div className="flight-card flex-row">
      <div className="flight-info flex-row-column">
        <div className="flight-title">COMPANHIA AÉREA: Azul Viagens</div>
        <div className="small-infos flex-row">
          <div className="flight-hour">Horário: 09:25</div>
          <div className="flight-capacity-available">
            Tickets para compra disponíveis: 41
          </div>
          <div className="flight-capacity">Capacidade: 100</div>
        </div>
      </div>
      <div className="flight-action flex-row-column">
        <div className="flight-price">R$121,50</div>
        <div className="flight-button">
          <Button variant="contained">Comprar</Button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
