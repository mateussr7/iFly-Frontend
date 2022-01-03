import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import "./AirlineCardSearch.scss";
import SearchIcon from "@material-ui/icons/Search";

const AirlineCardSearch = () => {
  return <div className="card-search">
    <div className="text-box">
      <TextField 
        label="Nome ou código da Linha Aérea"
        variant="outlined"
      />
    </div>
    <Button><SearchIcon /></Button>
  </div>
};

export default AirlineCardSearch;
