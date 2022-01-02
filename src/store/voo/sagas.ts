import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { getVoos, insertVoo, updateVoo } from "../../services/vooServices";
import { addVooSuccess, editVooSuccess, fetchVooListSuccess } from "./actions";
import { Voo, VooActions, VooSearchDTO } from "./types";

export default function* watchVoos() {
  yield takeLatest(VooActions.FETCH_VOO_LIST, fetchVoosSagas);
  yield takeLatest(VooActions.ADD_VOO, addVoosagas);
  yield takeLatest(VooActions.EDIT_VOO, editVooSagas);
}

function* fetchVoosSagas(action: AnyAction) {
  try {
    const voo: VooSearchDTO = action.payload;
    const param: Voo[] = yield call(getVoos, voo);
    yield put(fetchVooListSuccess(param));
  } catch (err) {}
}

function* addVoosagas(action: AnyAction) {
  const dto: Voo = action.payload;
  try {
    const param: Voo = yield call(insertVoo, dto);
    yield put(addVooSuccess(param));
  } catch (err) {}
}

function* editVooSagas(data: AnyAction) {
  const voo: Voo = data.payload;
  try {
    const param: Voo = yield call(updateVoo, voo);
    yield put(editVooSuccess(param));
  } catch (err) {}
}
