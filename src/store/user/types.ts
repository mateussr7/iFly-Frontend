export interface User {
  id: number;
  nome: string;
  login: string;
  senha: string;
}

export interface UserDTO {
  id?: number;
  nome: string;
  login: string;
  senha: string;
}

export interface LoginDTO {
  user: User;
  type: string;
}

export interface Airline extends User {
  cnpj: string;
  idAdministrador: number
}

export interface AirlineDTO extends UserDTO {
  cnpj: string;
  idAdministrador: number
}

export interface Passenger extends User {
  cpf: string;
  quilometragemVoada: number
}

export interface PassengerDTO extends UserDTO {
  cpf: string;
  quilometragemVoada: number;
}

export interface Administrator extends User {
  cpf: string;
}

export interface AdministratorDTO extends UserDTO {
  cpf: string;
}

export interface UserState {
  loggedUser: LoginDTO | null;
  error: boolean;
  message: string | null;
  newUser: boolean;
}

export interface Credentials {
  email: string;
  password: string;
}

export enum UserActions {
  LOGIN = "@user/LOGIN",
  LOGIN_SUCCESS = "@user/LOGIN_SUCESS",
  LOGIN_ERROR = "@user/LOGIN_ERROR",
  SET_NEW_USER = "@user/SET_NEW_USER",
  REGISTER_NEW_USER = "@user/REGISTER_NEW_USER",
  REGISTER_NEW_USER_SUCCESS = "@user/REGISTER_NEW_USER_SUCCESS",
  REGISTER_NEW_USER_ERROR = "@user/REGISTER_NEW_USER_ERROR",
  LOGOUT = "@user/LOGOUT",
}
