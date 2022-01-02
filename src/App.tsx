import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedUser } from "./store/user/selectors";
import MainScreen from "./pages/mainScreen";
import CredentialsScreen from "./pages/credentialsScreen";
import "./app.scss";

const App = () => {
  const user = useSelector(getLoggedUser);

  return (
    <BrowserRouter>
      <div className="view">
        {user !== null ? <MainScreen /> : <CredentialsScreen />}
      </div>
    </BrowserRouter>
  );
};

export default App;
