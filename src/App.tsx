import React from "react";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import "./app.scss";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "./components/PageHeader/PageHeader";
import AirlineCard from "./components/AirlineCard/AirlineCard";
import FlightCard from "./components/FlightCard/FlightCard";
import AirlineCardSearch from "./components/AirlineCardSearch/AirlineCardSearch";

const App = () => {
  return (
    <div className="view">
      <BrowserRouter>
        <Header />
        <SideBar />
      </BrowserRouter>
    </div>
  );
};

export default App;
