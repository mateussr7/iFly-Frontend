import { AnyAction } from "redux";
import { takeLatest, call, put } from "redux-saga/effects";
import { getRankingService } from "../../services/userService";
import { showMessage } from "../feedback/actions";
import { Passenger } from "../user/types";
import { getRankingSuccess } from "./actions";
import { PassengerActions } from "./types";

export function* watchPassenger() {
    yield takeLatest(PassengerActions.GET_PASSENGER_RANKING, getRankingSagas)
}

function* getRankingSagas(action: AnyAction) {
    try{
        const passengers: Passenger[] = yield call(() => getRankingService())
        yield put(getRankingSuccess(passengers))
        yield put(
            showMessage({
              message: "Busca efetuada",
              show: true,
              type: "success",
            })
          );
    }catch{
        yield put(
            showMessage({
              message: "Nao foi possivel buscar",
              show: true,
              type: "failure",
            })
          );
    }
}