import { Button, IconButton, TextField } from "@material-ui/core";
import React from "react";
import "./AirlineCardSearch.scss";
import SearchIcon from "@material-ui/icons/Search";

const AirlineCardSearch = () => {
  return (
    <div className="airline-card-search flex-row">
      <div className="airline-search flex-row">
        <div className="airline-origin">
          <TextField
            className="textfield-search"
            variant="outlined"
            select
            label="Saindo de:"
            value
            helperText="Selecione uma cidade"
          />
        </div>
        <div className="airline-destiny">
          <TextField
            className="textfield-search"
            variant="outlined"
            select
            label="Indo para:"
            value
            helperText="Selecione uma cidade"
          />
        </div>
        <div className="airline-destiny">
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
      <div className="airline-button">
        <IconButton aria-label="delete" color="primary">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default AirlineCardSearch;
