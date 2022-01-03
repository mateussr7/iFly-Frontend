import React, { FC } from "react";
import Header from "../../components/header";
import { Route, Routes } from "react-router-dom";
import SideBar from "../../components/sidebar";
import "./style.scss";
import VooScreen from "../VooScreen";
import AirlineScreen from "../AirlinesScreen";

const MainScreen: FC<{}> = () => {
  const Loggout = () => {
    localStorage.removeItem("user");
    return <></>;
  };
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/flights" element={<VooScreen />} />
        <Route path="/airlines" element={<AirlineScreen />} />
        <Route path="/logout" element={<Loggout />} />
      </Routes>
    </>
  );
};

export default MainScreen;
