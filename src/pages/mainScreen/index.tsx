import React, { FC } from "react";
import Header from "../../components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "../../components/sidebar";
import "./style.scss";
import VooScreen from "../VooScreen";

const MainScreen: FC<{}> = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/flights" element={VooScreen()} />
      </Routes>
    </>
  );
};

export default MainScreen;
