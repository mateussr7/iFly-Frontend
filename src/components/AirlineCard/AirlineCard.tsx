import { Button } from "@material-ui/core";
import React from "react";
import "./AirlineCard.scss";

const AirlineCard = () => {
  return (
    <div className="airline-card flex-row">
      <div className="airline-info flex-row">
        <div className="airline-cnpj">CNPJ: 958148123/0001-6</div>
        <div className="airline-title">COMPANHIA AÉREA: Azul Viagens</div>
      </div>
      <div className="airline-button">
        <Button variant="contained">Editar</Button>
      </div>
    </div>
  );
};

export default AirlineCard;
