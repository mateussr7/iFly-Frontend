import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedUser } from "./store/user/selectors";
import MainScreen from "./pages/mainScreen";
import CredentialsScreen from "./pages/credentialsScreen";
import "./app.scss";
import { Administrator, Airline, Passenger } from "./store/user/types";

const App = () => {
  const [userLogged, setUserLogged] = useState<
    Airline | Administrator | Passenger | null
  >(useSelector(getLoggedUser));
  useEffect(() => {
    const id = localStorage.getItem("user");
    if (id) {
      setUserLogged({
        id: Number(id),
        nome: "",
        senha: "",
        login: "",
        cpf: "",
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="view">
        {userLogged !== null ? <MainScreen /> : <CredentialsScreen />}
      </div>
    </BrowserRouter>
  );
};

export default App;
