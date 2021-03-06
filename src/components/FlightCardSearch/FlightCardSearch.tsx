import { IconButton, TextField } from "@material-ui/core";
import "./FlightCardSearch.scss";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useEffect, useState } from "react";
import { Aeroporto } from "../../store/airports/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchVooList } from "../../store/voo/actions";
import { Airline, LoginDTO } from "../../store/user/types";
import moment from "moment";
import { getDestiny, getOrigin } from "../../store/voo/selectors";

interface props {
  aeroportos: Aeroporto[];
  airline?: LoginDTO | undefined;
}

const FlightCardSearch = ({ aeroportos, airline }: props) => {
  const [origin, setOrigin] = useState<number>(useSelector(getOrigin));
  const [destiny, setDestiny] = useState<number>(useSelector(getDestiny));
  const [date, setDate] = useState<string>(moment().format("yyyy-MM-DD"));
  const dispatch = useDispatch();

  const buscarVoos = () => {
    dispatch(
      fetchVooList({
        origin: origin,
        destiny: destiny,
        date: date,
        airline: airline ? airline.user.id : 0,
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
            value={aeroportos.find((a) => a.id === origin)}
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
            value={aeroportos.find((a) => a.id === destiny)}
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
