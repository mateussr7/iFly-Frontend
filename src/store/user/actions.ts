import { action } from "typesafe-actions";
import {
  PassengerDTO,
  UserActions,
  Credentials,
  Passenger,
  LoginDTO,
} from "./types";

export const login = (credentials: Credentials) =>
  action(UserActions.LOGIN, { credentials });
export const loginSucess = (login: LoginDTO) =>
  action(UserActions.LOGIN_SUCCESS, { login });
export const loginError = (message: string) =>
  action(UserActions.LOGIN_ERROR, { message });
export const setNewUser = (newUserMode: boolean) =>
  action(UserActions.SET_NEW_USER, { newUserMode });
export const registerNewUser = (user: PassengerDTO) =>
  action(UserActions.REGISTER_NEW_USER, { user });
export const registerNewUserSuccess = (user: Passenger) =>
  action(UserActions.REGISTER_NEW_USER_SUCCESS, { user });
export const registerNewUserError = (message: string) =>
  action(UserActions.REGISTER_NEW_USER_ERROR, { message });
export const logout = () => action(UserActions.LOGOUT)
