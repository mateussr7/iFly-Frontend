import React from "react";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import "./app.scss";
import { BrowserRouter } from "react-router-dom";

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
