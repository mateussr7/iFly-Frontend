import { Button, TextField, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../../store/user/actions";
import Footer from "../footer";
import "./newUser.scss";
import logo from "../../images/logo.png";

const NewUserComponent: FC<{}> = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };
  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleCpfChange = (value: string) => {
    setCpf(value);
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const onClickRegisterNewUser = () => {
    dispatch(
      registerNewUser({
        login: email,
        cpf: cpf,
        nome: name,
        senha: password,
        quilometragemVoada: 0,
      })
    );
  };

  return (
    <div className="body">
      <div className="container">
        <img src={logo}></img>
        <div className="box">
          <Typography>Email</Typography>
          <TextField
            variant="outlined"
            value={email}
            onChange={(e) => {
              handleEmailChange(e.target.value as string);
            }}
          />
        </div>
        <div className="box">
          <Typography>Nome</Typography>
          <TextField
            variant="outlined"
            value={name}
            onChange={(e) => {
              handleNameChange(e.target.value as string);
            }}
          />
        </div>
        <div className="box">
          <Typography>CPF</Typography>
          <TextField
            variant="outlined"
            value={cpf}
            onChange={(e) => {
              handleCpfChange(e.target.value as string);
            }}
          />
        </div>
        <div className="box">
          <Typography>Senha</Typography>
          <TextField
            variant="outlined"
            value={password}
            type="password"
            onChange={(e) => {
              handlePasswordChange(e.target.value as string);
            }}
          />
        </div>
        <div className="button-div">
          <Button variant="contained" onClick={onClickRegisterNewUser}>
            REGISTRAR
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewUserComponent;
