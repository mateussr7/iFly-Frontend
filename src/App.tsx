import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedUser } from "./store/user/selectors";
import MainScreen from "./pages/mainScreen";
import CredentialsScreen from "./pages/credentialsScreen";
import "./app.scss";
import {
  LoginDTO,
} from "./store/user/types";

const App = () => {
  const [userLogged, setUserLogged] = useState<LoginDTO | null>(
    useSelector(getLoggedUser)
  );
  const user = useSelector(getLoggedUser);
  useEffect(() => {
    const id = localStorage.getItem("user");
    if (id) {
      setUserLogged({
        user: {
          id: Number(id),
          nome: "",
          senha: "",
          login: "",
        },
        type: "",
      });
    }
  }, []);

  useEffect(() => {
    if (user !== null) setUserLogged(user);
  }, [user]);

  return (
    <BrowserRouter>
      <div className="view">
        {userLogged !== null ? <MainScreen /> : <CredentialsScreen />}
      </div>
    </BrowserRouter>
  );
};

export default App;
