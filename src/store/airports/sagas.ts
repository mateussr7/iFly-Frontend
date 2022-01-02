import { call, put, takeLatest } from "redux-saga/effects";
import { getAeroportos } from "../../services/AeroportoServices";
import { fetchAeroportoListSuccess } from "./actions";
import { Aeroporto, AeroportoActions } from "./types";

export default function* watchAeroportos() {
  yield takeLatest(
    AeroportoActions.FETCH_AEROPORTOS_LIST,
    fetchAeroportosSagas
  );
}

function* fetchAeroportosSagas() {
  try {
    const param: Aeroporto[] = yield call(getAeroportos);
    yield put(fetchAeroportoListSuccess(param));
  } catch (err) {}
}
