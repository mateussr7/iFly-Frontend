import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  loginSucess,
  loginError,
  registerNewUserSuccess,
  registerNewUserError,
} from "./actions";
import { AnyAction } from "redux";
import {
  Administrator,
  Airline,
  Passenger,
  Credentials,
  UserActions,
  PassengerDTO,
} from "./types";
import { loginService, registerService } from "../../services/userService";
import { errorMessage } from "./messages";

export function* watchUser() {
  yield takeLatest(UserActions.LOGIN, loginSagas);
  yield takeLatest(UserActions.REGISTER_NEW_USER, registerSagas);
}

function* loginSagas(action: AnyAction) {
  try {
    const credentials: Credentials = action.payload.credentials;
    const loggedUser: Airline | Administrator | Passenger = yield call(() =>
      loginService(credentials)
    );
    yield put(loginSucess(loggedUser));
  } catch {
    yield put(loginError(errorMessage));
  }
}

function* registerSagas(action: AnyAction) {
  try {
    const user: PassengerDTO = action.payload.user;
    console.log(user);
    const newUser: Passenger = yield call(registerService, user);
    yield put(registerNewUserSuccess(newUser));
  } catch {
    yield put(registerNewUserError(errorMessage));
  }
}
