import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { Airline } from "../../store/user/types";
import "./AirlineCard.scss";
import { cnpj } from '../../utils/stringFormatter'

interface AirlineCardProps {
  airline: Airline
}

const AirlineCard: FC<AirlineCardProps> = ({ airline }) => {
  return (
    <div className="airline-card flex-row">
      <div className="airline-info flex-row">
        <div className="airline-cnpj">CNPJ: {cnpj(airline.cnpj)}</div>
        <div className="airline-title">COMPANHIA AÉREA: {airline.nome}</div>
      </div>
      <div className="airline-button">
        <Button variant="contained">Editar</Button>
      </div>
    </div>
  );
};

export default AirlineCard;
