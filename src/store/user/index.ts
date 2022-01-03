import { Reducer } from "redux";
import { LoginDTO, UserActions, UserState } from "./types";

//const user = {id: 1, cpf: 'aaa', cnpj: 'a', email: 'aasdasdsa', nome: 'a', senha: 'dd'}

const INITIAL_STATE: UserState = {
  loggedUser: null,
  error: false,
  message: null,
  newUser: false,
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActions.LOGIN_SUCCESS: {
      const user: LoginDTO = action.payload.login;
      return {
        ...state,
        error: false,
        message: null,
        loggedUser: user,
      };
    }
    case UserActions.LOGIN_ERROR: {
      const message: string = action.payload.message;
      return {
        ...state,
        loggedUser: null,
        error: true,
        message: message,
      };
    }
    case UserActions.SET_NEW_USER: {
      const newUserMode = action.payload.newUserMode;
      return {
        ...state,
        newUser: newUserMode,
      };
    }
    case UserActions.REGISTER_NEW_USER_SUCCESS: {
      const newUser = action.payload.user;
      return {
        ...state,
        loggedUser: newUser,
        newUser: false,
      };
    }
    case UserActions.LOGOUT: {
      return {
        ...state,
        loggedUser: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
