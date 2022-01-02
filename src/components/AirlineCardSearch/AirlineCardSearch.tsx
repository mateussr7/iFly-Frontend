import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import React from "react";
import "./AirlineCardSearch.scss";
import SearchIcon from "@material-ui/icons/Search";

const AirlineCardSearch = () => {
  return <div className="card-search">
    <div className="text-box">
      <Typography>Nome ou código da Linha Aérea</Typography>
      <TextField 
        variant="outlined"
      />
    </div>
    <Button><SearchIcon /></Button>
  </div>
};

export default AirlineCardSearch;
