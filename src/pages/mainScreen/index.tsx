import React, { FC } from "react";
import Header from "../../components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../../components/sidebar";
import "./style.scss";
import VooScreen from "../VooScreen";
import AirlineScreen from "../AirlinesScreen";

const MainScreen: FC<{}> = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/flights" element={<VooScreen />} />
        <Route path="/airlines" element={<AirlineScreen />} />
      </Routes>
    </>
  );
};

export default MainScreen;
