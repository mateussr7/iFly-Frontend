import { AnyAction } from "redux";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  getAllAirlinesService,
  insertAirlineService,
  updateAirlineService,
} from "../../services/airlineServices";
import { Airline, AirlineDTO } from "../user/types";
import {
  getAllAirlinesSuccess,
  insertAirlineSuccess,
  updateAirlineSuccess,
} from "./actions";
import { AirlinesActions } from "./types";

export function* watchAirlines() {
  yield takeLatest(AirlinesActions.GET_ALL_AIRLINES, fetchAllAirlinesSagas);
  yield takeLatest(AirlinesActions.INSERT_AIRLINE, insertAirlineSagas);
  yield takeLatest(AirlinesActions.UPDATE_AIRLINE, updateAirlineSagas);
}

function* fetchAllAirlinesSagas(action: AnyAction) {
  try {
    const airlines: Airline[] = yield call(getAllAirlinesService);
    yield put(getAllAirlinesSuccess(airlines));
  } catch {}
}

function* insertAirlineSagas(action: AnyAction) {
  try {
    const dto: AirlineDTO = action.payload.airline;
    const airline: Airline = yield call(() => insertAirlineService(dto));
    yield put(insertAirlineSuccess(airline));
  } catch {}
}

function* updateAirlineSagas(action: AnyAction) {
  try {
    const dto: AirlineDTO = action.payload.airline;
    const airline: Airline = yield call(() => updateAirlineService(dto));
    yield put(updateAirlineSuccess(airline));
  } catch {}
}
