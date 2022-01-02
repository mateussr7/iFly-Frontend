import { IconButton, MenuItem, TextField } from "@material-ui/core";
import "./FlightCardSearch.scss";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";
import { Aeroporto } from "../../store/airports/types";
interface props {
  aeroportos: Aeroporto[];
}
const FlightCardSearch = ({ aeroportos }: props) => {
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
            helperText="Selecione a data"
            className="textfield-date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <div className="flight-button">
        <IconButton aria-label="delete" color="primary">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default FlightCardSearch;
