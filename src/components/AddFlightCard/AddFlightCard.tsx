import { useDispatch, useSelector } from "react-redux";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Voo } from "../../store/voo/types";
import "./AddFlightCard.scss";
import { getAeroportos } from "../../store/airports/selectors";
import { Autocomplete } from "@material-ui/lab";
import { Aeroporto } from "../../store/airports/types";
import { getIdRota } from "../../store/voo/selectors";
import moment from "moment";
import { addVoo, getRotaOriginDestiny } from "../../store/voo/actions";
import { Airline } from "../../store/user/types";

interface props {
  airline: Airline;
  voltarFunction: () => void;
}
const AddFlightCard = ({ airline, voltarFunction }: props) => {
  const aeroportos = useSelector(getAeroportos);
  const [isSaving, setIsSaving] = useState<Boolean>(false);
  const [capacidade, setCapacidade] = useState<number>();
  const [valor, setValor] = useState<number>();
  const [origin, setOrigin] = useState<number>();
  const [destiny, setDestiny] = useState<number>();
  const dispatch = useDispatch();
  const idRota = useSelector(getIdRota);
  const [date, setDate] = useState<string>(moment().format("yyyy-MM-DD"));
  const [hour, setHour] = useState<string>(moment().format("HH:mm"));

  const setNewValor = (event: any) => {
    if (event !== undefined) setValor(Number(event.target.value));
  };
  const setNewCapacidade = (event: any) => {
    if (event !== undefined) setCapacidade(Number(event.target.value));
  };
  const setNewDate = (date: any) => {
    if (date !== undefined) setDate(date.target.value);
  };

  const setNewHour = (date: any) => {
    if (date !== undefined) setHour(date.target.value);
  };

  const setNewOrigin = (
    event: React.ChangeEvent<{}>,
    newValue: Aeroporto | null
  ) => {
    if (newValue !== null) setOrigin(newValue.id);
  };

  const setNewDestiny = (
    event: React.ChangeEvent<{}>,
    newValue: Aeroporto | null
  ) => {
    if (newValue !== null) setDestiny(newValue.id);
  };

  useEffect(() => {
    if (idRota && isSaving && valor && capacidade) {
      setIsSaving(false);
      dispatch(
        addVoo({
          idRota,
          capacidade,
          horario: moment(date + " " + hour)
            .utc()
            .format("yyyy-MM-DD HH:mm:ss"),
          idEmpresaAerea: airline.id,
          ticketsDisponiveis: capacidade,
          valor,
          id: 0,
        })
      );
      voltarFunction();
    }
  }, [idRota, isSaving]);
  const SaveFlight = () => {
    dispatch(getRotaOriginDestiny(origin as number, destiny as number));
    setIsSaving(true);
  };
  return (
    <>
      <div className="save-flight-card flex-row-column">
        <div className="first-line flex-row">
          <TextField
            variant="outlined"
            label="Valor do voo"
            value={valor}
            className="textfield-valor"
            onChange={setNewValor}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            label="Capacidade"
            value={capacidade}
            className="textfield-capacidade"
            onChange={setNewCapacidade}
            InputProps={
              capacidade
                ? {
                    endAdornment: (
                      <InputAdornment position="end">Pessoas</InputAdornment>
                    ),
                  }
                : {}
            }
          />
          <TextField
            variant="outlined"
            label="Data do voo"
            type="date"
            value={date}
            helperText="Selecione a data"
            className="textfield-date"
            onChange={setNewDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            label="Hora do voo"
            type="time"
            value={hour}
            className="textfield-hour"
            onChange={setNewHour}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </div>
        <div className="second-line flex-row">
          <div className="flight-origin">
            <Autocomplete
              className="textfield-search"
              options={aeroportos}
              value={aeroportos.find((a) => a.id == origin)}
              getOptionLabel={(option) =>
                option.nome + " (" + option.codigo + ")"
              }
              onChange={setNewOrigin}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Saindo de:"
                  helperText="Selecione uma cidade"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div className="flight-destiny">
            <Autocomplete
              className="textfield-search"
              value={aeroportos.find((a) => a.id == destiny)}
              options={aeroportos}
              getOptionLabel={(option) =>
                option.nome + " (" + option.codigo + ")"
              }
              onChange={setNewDestiny}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Indo para:"
                  helperText="Selecione uma cidade"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div className="flight-button">
            <Button variant="contained" onClick={SaveFlight}>
              Salvar
            </Button>
            <Button variant="contained" onClick={voltarFunction}>
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFlightCard;
