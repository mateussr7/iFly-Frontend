import { IconButton, TextField } from "@material-ui/core";
import "./FlightCardSearch.scss";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { Aeroporto } from "../../store/airports/types";
import { useDispatch } from "react-redux";
import { fetchVooList } from "../../store/voo/actions";
import { Airline } from "../../store/user/types";

interface props {
  aeroportos: Aeroporto[];
  airline?: Airline | undefined;
}

const FlightCardSearch = ({ aeroportos, airline }: props) => {
  const [origin, setOrigin] = useState<number>(0);
  const [destiny, setDestiny] = useState<number>(0);
  const [date, setDate] = useState<string>("2021-11-29");
  const dispatch = useDispatch();

  const buscarVoos = () => {
    dispatch(
      fetchVooList({
        origin: origin,
        destiny: destiny,
        date: date,
        airline: airline ? airline.id : 0,
      })
    );
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

  const setNewDate = (date: any) => {
    if (date !== undefined) setDate(date.target.value);
  };

  return (
    <div className="flight-card-search flex-row">
      <div className="flight-search flex-row">
        <div className="flight-origin">
          <Autocomplete
            className="textfield-search"
            options={aeroportos}
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
        <div className="flight-destiny">
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
        </div>
      </div>
      <div className="flight-button">
        <IconButton aria-label="delete" color="primary" onClick={buscarVoos}>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default FlightCardSearch;
