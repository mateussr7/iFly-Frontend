import { Button, TextField, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setNewUser } from "../../store/user/actions";
import { getNewUserMode } from "../../store/user/selectors";
import Footer from "../footer";
import "./login.scss";
import logo from "../../images/logo.png";

const LoginComponent: FC<{}> = () => {
  const dispatch = useDispatch();
  const newUser = useSelector(getNewUserMode);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNewUserClick = () => {
    dispatch(setNewUser(!newUser));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const onClickLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <img src={logo} alt="ifly"></img>
        <div className="login-box">
          <Typography>Email</Typography>
          <TextField
            variant="outlined"
            value={email}
            onChange={(e) => {
              handleEmailChange(e.target.value as string);
            }}
          />
        </div>
        <div className="login-box">
          <Typography>Senha</Typography>
          <TextField
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => {
              handlePasswordChange(e.target.value as string);
            }}
          />
        </div>
        <div className="login-button-div">
          <Button variant="contained" onClick={onClickLogin}>
            ENTRAR
          </Button>
          <Button variant="contained" onClick={handleNewUserClick}>
            CRIAR NOVA CONTA
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginComponent;
