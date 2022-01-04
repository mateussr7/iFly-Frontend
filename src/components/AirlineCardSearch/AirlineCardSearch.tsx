import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import "./AirlineCardSearch.scss";
import SearchIcon from "@material-ui/icons/Search";

interface props {
  onChangeFilter: (event: any) => void
}

const AirlineCardSearch = ({ onChangeFilter }:props) => {
  return <div className="card-search">
    <div className="text-box">
      <TextField 
        label="Nome ou código da linha aérea"
        variant="outlined"
        onChange={onChangeFilter}
        className="text-field"
      />
    </div>
    <Button><SearchIcon /></Button>
  </div>
};

export default AirlineCardSearch;
