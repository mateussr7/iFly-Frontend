import { AnyAction } from "redux";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  getAllAirlinesService,
  insertAirlineService,
  updateAirlineService,
} from "../../services/airlineServices";
import { showMessage } from "../feedback/actions";
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
    yield put(
      showMessage({
        message: "Empresas Aéreas buscadas com sucesso",
        show: true,
        type: "success",
      })
    );
  } catch {
    yield put(
      showMessage({
        message: "Não foi possivel buscar as Empresas Aéreas",
        show: true,
        type: "failure",
      })
    );
  }
}
 
function* insertAirlineSagas(action: AnyAction) {
  try {
    const dto: AirlineDTO = action.payload.airline;
    console.log(dto)
    const airline: Airline = yield call(() => insertAirlineService(dto));
    yield put(insertAirlineSuccess(airline));
    yield put(
      showMessage({
        message: "Empresa Aérea adicionada com sucesso",
        show: true,
        type: "success",
      })
    );
  } catch {
    yield put(
      showMessage({
        message: "Não foi possivel adicionar a Empresa Aérea",
        show: true,
        type: "failure",
      })
    );
  }
}

function* updateAirlineSagas(action: AnyAction) {
  try {
    const dto: AirlineDTO = action.payload.airline;
    const airline: Airline = yield call(() => updateAirlineService(dto));
    yield put(updateAirlineSuccess(airline));
    yield put(
      showMessage({
        message: "Alteração feita com sucesso",
        show: true,
        type: "success",
      })
    );
  } catch {
    yield put(
      showMessage({
        message: "Nao foi possivel efetuar a mudança",
        show: true,
        type: "failure",
      })
    );
  }
}
