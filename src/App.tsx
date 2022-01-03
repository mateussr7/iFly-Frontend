import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "./store/user/selectors";
import MainScreen from "./pages/mainScreen";
import CredentialsScreen from "./pages/credentialsScreen";
import "./app.scss";
import { LoginDTO } from "./store/user/types";
import { loginSucess } from "./store/user/actions";

const App = () => {
  const dispatch = useDispatch();
  const [userLogged, setUserLogged] = useState<LoginDTO | null>(
    useSelector(getLoggedUser)
  );
  const user = useSelector(getLoggedUser);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const loggedUser: LoginDTO = JSON.parse(
        localStorage.getItem("user") as string
      );

      if (loggedUser) {
        dispatch(loginSucess(loggedUser));
        setUserLogged(loggedUser);
      }
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
