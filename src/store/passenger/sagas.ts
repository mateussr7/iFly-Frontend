import { AnyAction } from "redux";
import { takeLatest, call, put } from "redux-saga/effects";
import { getRankingService } from "../../services/userService";
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
    }catch{}
}